/* OCR for one guidebook page: transcribe boulders/routes into ROUTES-shaped
   JSON that the client merges into S.book (see index.html). Two providers
   behind OCR_PROVIDER (gemini default, anthropic fallback) share ONE internal
   schema; only the serialiser differs. Gemini's generationConfig.responseSchema
   is an OpenAPI subset that does NOT accept additionalProperties — Anthropic's
   output_config.format.json_schema REQUIRES additionalProperties:false on
   every object. Getting either wrong doesn't error, it silently degrades to
   free-form output, so the two schemas are built from one source of truth
   instead of hand-duplicated.

   GET is a reachability probe (no secret needed) — the client calls it lazily,
   never at startup, so file:// and serve.py keep working with no /api at all.
   POST needs X-Climb-Key, compared with timingSafeEqual over a SHA-256 hash of
   both sides (raw comparison throws on a length mismatch, and the throw leaks
   the secret's length). */

const PROVIDER = process.env.OCR_PROVIDER || "gemini";
const OCR_MODEL = process.env.OCR_MODEL || "gemini-3.6-flash";   // gemini-2.5-flash is deprecated (shuts down Oct 2026) — verified against Google's docs Aug 2026
const MAX_B64 = 12_000_000;   // ~9MB decoded: generous for a 2576px JPEG at q0.90, a hard stop against an accidental full-res upload

const OCR_SCHEMA = {
  type: "object",
  properties: {
    page: { type: "integer" },
    area: { type: "string" },
    boulders: {
      type: "array",
      items: {
        type: "object",
        properties: {
          code: { type: "string" },
          name: { type: "string" },
          gps: { type: "string" },
          routes: {
            type: "array",
            items: {
              type: "object",
              properties: {
                letter: { type: "string" },
                name: { type: "string" },
                grade: { type: "string" },
                style: { type: "string" },
                note: { type: "string" },
                unsure: { type: "boolean" },
              },
              required: ["letter", "name", "grade", "style", "note", "unsure"],
            },
          },
        },
        required: ["code", "name", "gps", "routes"],
      },
    },
    warnings: { type: "array", items: { type: "string" } },
  },
  required: ["page", "area", "boulders", "warnings"],
};

const PROMPT = `You are transcribing one page (or a page spread) from a Czech bouldering
guidebook into structured data. Follow these rules exactly:

- Transcribe ONLY what is printed. Never invent, complete, or "correct" a name, grade, or note.
- Copy grades verbatim in whatever system is printed — this book mixes Font (6B+), Czech/UIAA
  (4+), and old-school combined grades (III,A1,6). Never convert between systems.
- Copy the GPS caption (e.g. "N 50° 07,493'; E 013° 27,040'") as a single string, character for
  character, including any typographic apostrophe. Never parse it or convert it to decimal.
- A route row with NO printed letter is a variant of the row directly above it, not an error —
  set letter:"" for it and put any "start X), konec Y)" cross-reference in its note.
- If a field is unreadable or not printed, leave it "" rather than guessing at a plausible value.
  Set unsure:true on any field (or the whole row) you had to guess at all.
- boulders[].code/name is the heading for that boulder (e.g. "A2. Mučírna"). If this page only
  continues a boulder whose heading was on a previous page, still emit an entry for it with
  whatever code/name you can read from running headers, or leave them "" and explain in warnings.
- Text on the page you cannot confidently attribute to a specific boulder (a sector intro,
  an approach note, a page you can't read at all) goes into "warnings" as a string, not into a
  fabricated boulder or route.
- "page" is the printed page number if visible, else your best integer guess with a warning.

Return ONLY JSON matching the given schema — no prose, no markdown fences.`;

function stripAdditionalProps(node) {
  if (!node || typeof node !== "object") return node;
  if (Array.isArray(node)) return node.map(stripAdditionalProps);
  const out = {};
  for (const [k, v] of Object.entries(node)) if (k !== "additionalProperties") out[k] = stripAdditionalProps(v);
  return out;
}
function withAdditionalPropsFalse(node) {
  if (!node || typeof node !== "object") return node;
  if (Array.isArray(node)) return node.map(withAdditionalPropsFalse);
  const out = {};
  for (const [k, v] of Object.entries(node)) out[k] = withAdditionalPropsFalse(v);
  if (out.type === "object") out.additionalProperties = false;
  return out;
}

const MAGIC = {
  "image/jpeg": [0xff, 0xd8, 0xff],
  "image/png": [0x89, 0x50, 0x4e, 0x47],
  "image/webp": [0x52, 0x49, 0x46, 0x46],
};
function matchesMagic(buf, mime) {
  const sig = MAGIC[mime];
  if (!sig) return false;
  return sig.every((b, i) => buf[i] === b);
}

function timingSafeSecretEqual(a, b) {
  const crypto = require("node:crypto");
  const ha = crypto.createHash("sha256").update(String(a)).digest();
  const hb = crypto.createHash("sha256").update(String(b)).digest();
  return crypto.timingSafeEqual(ha, hb);
}

async function callGemini(image, hint) {
  const key = process.env.GEMINI_API_KEY;
  if (!key) throw new Error("GEMINI_API_KEY not set");
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${OCR_MODEL}:generateContent?key=${key}`;
  const body = {
    contents: [{ parts: [
      { inline_data: { mime_type: image.mime, data: image.b64 } },   // image before text, both providers
      { text: hint ? `${PROMPT}\n\nHint from the person scanning: ${hint}` : PROMPT },
    ] }],
    generationConfig: { responseMimeType: "application/json", responseSchema: stripAdditionalProps(OCR_SCHEMA), temperature: 0 },
  };
  const r = await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
  if (!r.ok) throw new Error(`gemini http ${r.status}: ${(await r.text()).slice(0, 300)}`);
  const j = await r.json();
  const text = j.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) throw new Error("gemini: empty response");
  return { ...JSON.parse(text), usage: j.usageMetadata || {} };
}

async function callAnthropic(image, hint) {
  const key = process.env.ANTHROPIC_API_KEY;
  if (!key) throw new Error("ANTHROPIC_API_KEY not set");
  const { default: Anthropic } = await import("@anthropic-ai/sdk");
  const client = new Anthropic({ apiKey: key });
  const stream = client.messages.stream({
    model: "claude-sonnet-5",
    max_tokens: 4096,
    output_config: { effort: "low", format: { type: "json_schema", json_schema: { name: "ocr_page", schema: withAdditionalPropsFalse(OCR_SCHEMA) } } },
    messages: [{
      role: "user",
      content: [
        { type: "image", source: { type: "base64", media_type: image.mime, data: image.b64 } },   // image before text
        { type: "text", text: hint ? `${PROMPT}\n\nHint from the person scanning: ${hint}` : PROMPT },
      ],
    }],
  });
  // Streaming only keeps a 40s call from dying on an idle connection — the
  // caller still gets one JSON body back, not a stream to render incrementally.
  const msg = await stream.finalMessage();
  const block = msg.content.find(c => c.type === "text");
  if (!block) throw new Error("anthropic: no text block in response");
  return { ...JSON.parse(block.text), usage: msg.usage || {} };
}

module.exports = async function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json({ ok: true, model: OCR_MODEL, maxB64: MAX_B64 });
    return;
  }
  if (req.method !== "POST") {
    res.status(405).json({ ok: false, code: "method", msg: "Use GET (probe) or POST" });
    return;
  }

  const secret = process.env.OCR_SHARED_SECRET;
  const given = req.headers["x-climb-key"];
  if (!secret || !given || !timingSafeSecretEqual(given, secret)) {
    res.status(401).json({ ok: false, code: "unauthorized", msg: "Missing or wrong X-Climb-Key" });
    return;
  }

  let body = req.body;
  if (typeof body === "string") {
    try { body = JSON.parse(body); }
    catch { res.status(400).json({ ok: false, code: "bad_json", msg: "Body is not valid JSON" }); return; }
  }
  const image = body && body.image;
  if (!image || typeof image.b64 !== "string" || typeof image.mime !== "string") {
    res.status(400).json({ ok: false, code: "bad_request", msg: "Missing image.b64 / image.mime" });
    return;
  }
  if (image.b64.length > MAX_B64) {
    res.status(413).json({ ok: false, code: "too_large", msg: `Image exceeds ${MAX_B64} base64 bytes — downscale more` });
    return;
  }
  let buf;
  try { buf = Buffer.from(image.b64, "base64"); }
  catch { res.status(400).json({ ok: false, code: "bad_base64", msg: "image.b64 is not valid base64" }); return; }
  if (!matchesMagic(buf, image.mime)) {
    res.status(400).json({ ok: false, code: "bad_mime", msg: "File content doesn't match declared mime type" });
    return;
  }

  const t0 = Date.now();
  try {
    const result = PROVIDER === "anthropic" ? await callAnthropic(image, body.hint) : await callGemini(image, body.hint);
    res.status(200).json({ ok: true, ...result, ms: Date.now() - t0 });
  } catch (e) {
    console.error("OCR upstream error:", e && e.message ? e.message : e);   // never forward the upstream body to the client
    res.status(502).json({ ok: false, code: "upstream", msg: "The OCR provider request failed — see server logs" });
  }
};
