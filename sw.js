/* Service worker for the Petrohrad map.

   Its only job is the app shell — the page, so it opens with no signal. Map
   tiles are deliberately NOT handled here: they live in IndexedDB, saved
   deliberately per area by the user. Opaque cross-origin responses are padded
   heavily against the storage quota by some browsers, so caching thousands of
   them here would blow the budget and report sizes nobody could act on.

   Network-first, cache as a fallback: online you always get the current deploy,
   offline you get the last one that loaded. A stale-first shell would leave a
   phone showing an old build for no benefit. */

const SHELL = "petrohrad-shell-v1";
const SHELL_URLS = ["./", "./index.html"];

self.addEventListener("install", e => {
  self.skipWaiting();
  e.waitUntil(caches.open(SHELL).then(c => c.addAll(SHELL_URLS)).catch(() => {}));
});

self.addEventListener("activate", e => {
  e.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names.filter(n => n !== SHELL).map(n => caches.delete(n)));
    await self.clients.claim();
  })());
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  // Same-origin only. Tile hosts are someone else's; leave them to the page.
  if (new URL(req.url).origin !== self.location.origin) return;
  // The OCR reachability probe is a same-origin GET too — if this cached it,
  // a later offline (or backend-down) check would replay a stale "reachable"
  // response instead of failing honestly. API calls always go straight to
  // the network, cached or not.
  if (new URL(req.url).pathname.startsWith("/api/")) return;

  e.respondWith((async () => {
    try {
      const res = await fetch(req);
      if (res && res.ok) {
        const copy = res.clone();
        caches.open(SHELL).then(c => c.put(req, copy)).catch(() => {});
      }
      return res;
    } catch (err) {
      const hit = await caches.match(req);
      if (hit) return hit;
      // A navigation to any path should still land on the app when offline.
      if (req.mode === "navigate") {
        const shell = await caches.match("./index.html") || await caches.match("./");
        if (shell) return shell;
      }
      throw err;
    }
  })());
});
