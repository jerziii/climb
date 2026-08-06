# Petrohrad — boulder sector research (2026-08-06)

Real-world GPS coordinates for the Petrohrad bouldering area (Louny district, CZ),
cross-checked across independent sources so they can be dropped into the app's
sector index instead of eyeballed off a topo sketch.

**Scope:** this pass targeted the 7 sector names in the original project README
(Větrná hůrka, Pod hradem, Hřbitovní kameny, Malý Yosemite, Skalní město,
Osamělé kameny, Potoční kameny). The app's `SECTORS` list in `index.html` is
longer — 21 names across "Petrohrad — central" and "Surrounding areas". A few
of those turned up as a side effect of the research (see "Bonus sectors"
below); the rest (Skály u silnice, První skála, Chrám, Vrchol kopce, Sputnik,
Ležky, Žihle) were **not** researched this round.

**Method:** 5 independent research passes (OSM/Overpass ground-truth survey
data, international crag databases — theCrag.com, 27crags, OpenBeta,
mountainproject — Czech guidebook/federation sources — ČHS horosvaz.cz — and
community sources/forums/GPX, plus a per-sector targeted search), merged, then
adversarially fact-checked against the raw source data. No coordinate was
invented or guessed at any stage — where sources disagreed by more than
rounding error, that's stated explicitly rather than averaged away. The
verification pass caught and this report fixes: a misattributed distance
figure (Pod hradem), an overstated confidence claim from a single source
double-counted as two (Potoční kameny), and a couple of "independent source
count" overstatements (Malý Yosemite, Větrná hůrka) that didn't change the
coordinates, only the sourcing narrative.

## Summary table

| Sector | Status | Confidence | Lat | Lng | Best source |
|---|---|---|---|---|---|
| Větrná hůrka | located | high | 50.125072 | 13.451027 | theCrag.com, cross-checked vs. ČHS |
| Pod hradem | located | high | 50.120045 | 13.437817 | theCrag.com, cross-checked vs. ČHS |
| Hřbitovní kameny | located | high | 50.122292 | 13.441323 | theCrag.com, cross-checked vs. ČHS |
| Malý Yosemite (Josemit) | located | high | 50.1185321 | 13.4493623 | OSM survey node "Malý Yosemit" |
| Skalní město | partial — soft identity | medium | 50.118599 | 13.438909 | theCrag.com sub-area (see caveat) |
| Osamělé kameny | **not found** | none | — | — | genuine gap, not a search failure |
| Potoční kameny | located | medium | 50.1188844 | 13.43864345 | theCrag.com (single source) |

5 of 7 are cleanly located with tight, cross-corroborated coordinates.
"Skalní město" resolves to a real place but the name is an informal sub-zone,
duplicated across two adjacent guidebook sub-areas, not an independent
official ČHS sector. "Osamělé kameny" is a confirmed real name with **zero**
coordinate anywhere in any of the 5 passes.

---

### 1. Větrná hůrka — located, high confidence
**50.125072, 13.451027**

- theCrag.com: https://www.thecrag.com/en/climbing/czech-republic/area/1913105262
- ČHS sektor 958 (sector marker) / boulder "Mordor": https://www.horosvaz.cz/skaly-sektor-958/, https://www.horosvaz.cz/skaly-skala-13318/
- Parking: 50.1274703, 13.4467078 (ČHS)

All cited values sit within ~27m of each other. **Caution:** an unrelated,
same-named "Větrná hůrka" rock exists in the Labské pískovce region near
Rájec/Děčín, ~90km away — excluded.

### 2. Pod hradem — located, high confidence (large sector)
**50.120045, 13.437817**

- theCrag.com: https://www.thecrag.com/en/climbing/czech-republic/area/1280714835 — 386 routes, reproduced identically by two independent passes
- ČHS sektor 960 (sector marker): 50.1209219, 13.438425
- ČHS boulder "U paraboly": 50.119567, 13.436433 (~110m from the primary point — a normal spread for a 386-route sector, not a data conflict)
- ČHS boulder "Stopařka" (same sector, ~495m west of the primary point — this is where the sector's real ~500m footprint comes from, not "U paraboly"): 50.119383, 13.430983
- Shared parking (Pod hradem / Hřbitovní kameny): 50.1236186, 13.4392833

*(Correction: an earlier draft of this report attributed the sector's ~500m
westward spread to "U paraboly", which is actually only ~110m from the
primary point. The ~495m figure belongs to "Stopařka".)*

An unnamed OSM cliff cluster near the castle ruins (~50.1206–50.1210,
13.4386–13.4390) is geographically plausible for this sector but has no name
tag confirming it — treat as a hint only, not a match.

### 3. Hřbitovní kameny — located, high confidence
**50.122292, 13.441323**

- theCrag.com: https://www.thecrag.com/en/climbing/czech-republic/area/1913105328 — reproduced identically by two passes
- ČHS sektor 959 (sector marker): 50.1218575, 13.441515
- ČHS boulder "Kamenné srdce" (also its own name in the app's sector list): 50.12205, 13.440967

Inside/near nature reserve "Háj Petra Bezruče", ~5 min walk from parking.

### 4. Malý Yosemite (Josemit) — located, high confidence, best-corroborated sector
**50.1185321, 13.4493623**

- OSM node 1200692397 (natural=cliff, name="Malý Yosemit", **source=survey** — a mapper physically surveyed and named it): https://www.openstreetmap.org/node/1200692397
- theCrag.com, sector "Josemit": 50.118555, 13.449615
- ČHS sektor 961 "Josemit" (sector marker): 50.1185075, 13.4490894
- ČHS boulder "Josemit b" (boulder-level): 50.118567, 13.449433

Three independent organizations (OSM, theCrag, ČHS) converge within ~30m.
"Josemit" is the ČHS/current-guidebook spelling; "Malý Yosemite" is the
tourist/common name for the same feature — the app's own sector list already
carries both as `"Malý Yosemite (Josemit)"`.

### 5. Skalní město — partially located, medium confidence (identity caveat)
**50.118599, 13.438909**

- theCrag.com sub-area (filed under "Pod hradem"): https://www.thecrag.com/en/climbing/czech-republic/area/13275064659
- theCrag.com sub-area (filed under "Potoční kameny", ~40m away — likely the same rock cluster split by a sector boundary): 50.118461, 13.439323
- ČHS boulders "Skalní město - horní část" / "pravá část" (filed inside sektor 960 "Pod hradem"): ~50.11853, 13.4390

**Why only "partial":** this is not an independently catalogued top-level ČHS
sector — it's an informal sub-zone/route-cluster name nested inside "Pod
hradem", duplicated across two adjacent guidebook sub-areas. The location
itself is solid (three passes converge within ~50m); the "is this its own
sector" status is fuzzy. Verify against an actual topo overlay before fully
trusting the pin.

**Collision warning:** a completely different, much larger "Skalní město"
exists in Prachovské skály/Hruboskalsko, Český ráj (~65km away, ČHS
sektor-315). Don't reuse that one.

### 6. Osamělé kameny — not found, confidence: none

All 5 independent passes hit the identical dead end. The name appears only
inside one block of tourism boilerplate, copied verbatim across turistika.cz,
kudyznudy.cz, mas-rakovnicko.cz, blazim.cz, navylet.cz, horydoly.cz:

> "V blízkém okolí Petrohradu se nachází několik skalních měst – Malý
> Yosemite, Osamělé kameny, Větrná hůrka, Hřbitovní kameny, Skály u silnice,
> Skalní město, Pod hradem, Potoční kameny…"
> — https://www.turistika.cz/mista/petrohradske-skaly/detail

No coordinate, map, distance, or directional description exists anywhere for
it. It's absent from the official ČHS 12-sector list for "Petrohrad a okolí"
and wasn't found among ~330 individually-named ČHS boulders checked across
all 12 sectors, or anywhere in theCrag's ~230 checked Petrohrad sub-features.
**This is a genuine data gap, not a shortfall in the search** — don't
substitute the area centroid or a neighboring sector's coordinate for it.
Plan to place this one by hand once you're overlaying a topo on the satellite
view.

### 7. Potoční kameny — located, medium confidence (single source)
**50.1188844, 13.43864345**

- theCrag.com: https://www.thecrag.com/en/climbing/czech-republic/area/4350709044 — 101 routes, ASL 416–458m

*(Correction: an earlier draft rated this "high" confidence on the grounds
that "two independent passes" found it. Both passes actually cited the
identical theCrag page — one source retrieved twice, not independent
corroboration. Three of the five passes found no trace of this name in ČHS or
OSM at all, most likely because theCrag blocked their particular fetch method
with an HTTP 403, not because the sector doesn't exist there. The coordinate
itself is plausible and sits right next to Pod hradem/Skalní město, but
downgrade to medium until it's cross-checked against ČHS or an OSM survey
point.)*

---

## Bonus sectors (already in the app's `SECTORS` list, also located)

These weren't part of the original 7-name search target but turned up as a
side effect and match exact names already in `index.html`'s `SECTORS` array:

| App sector name | Lat | Lng | Confidence | Source |
|---|---|---|---|---|
| Podzimní věž | 50.1172831 | 13.4499264 | high | OSM survey node + theCrag + ČHS sektor 962, cross-validated within ~100m |
| Vyhlídková skála | 50.12075 | 13.4515358 | medium–high | ČHS sektor 963 + theCrag (the two sources differ by ~80m — not tightly cross-checked) |
| Brána | 50.1218644 | 13.4560633 | medium–high | ČHS sektor 964 + theCrag (same ~80m caveat as above) |
| Kamenné srdce | 50.12205 | 13.440967 | medium | ČHS only (single source, boulder inside Hřbitovní kameny) |
| Vlčí kopec | 50.1311914 | 13.4854175 | high | ČHS sektor 966 |
| Kosobody | 50.1090267 | 13.5124325 | high | ČHS sektor 967 |
| Bukov | 50.1443394 | 13.5126256 | high | ČHS sektor 968 |

## Other features found (reference only — not in the app's sector list)

Can't go into `S.sectors` (name wouldn't match anything in `SECTORS`), but
useful as manually-dropped pins or for general orientation:

| Feature | Lat | Lng | Confidence | Notes |
|---|---|---|---|---|
| Rybníček | 50.1168478 | 13.4677972 | high | theCrag.com sector, not in app's current list |
| Západní úbočí | 50.11985841 | 13.45018805 | high | theCrag.com sub-area, not in app's current list |
| Stebenské skály | 50.1170972 | 13.4179694 | medium | ČHS sektor 1267; an independent OSM cluster ~1km further south may be the same broader area, not a tight pin |
| Vajíčko (named boulder) | 50.1190194 | 13.449222 | medium | OSM node 1200691718, ~65m from Malý Yosemite |
| Parking — Větrná hůrka | 50.1274703 | 13.4467078 | medium | ČHS |
| Parking — Pod hradem / Hřbitovní kameny (shared) | 50.1236186 | 13.4392833 | medium | ČHS |
| Zřícenina hradu Petrohrad (castle ruins, landmark) | 50.120 | 13.439 | high | Turistika.cz — useful anchor for "Pod hradem" ("below the castle") |
| Zámek Petrohrad (chateau, landmark) | 50.125 | 13.444 | high | Turistika.cz — not a climbing feature |
| Petrohradské skály (general area marker) | 50.120 | 13.449 | high | Turistika.cz — matches this project's centroid; explicitly area-wide, not sector-specific |

## False leads / name collisions — do not reuse these coordinates

- **"Malý Petrohrad"** — an unrelated single boulder near Žihle, sub-area "Viklany" (~50.0545, 13.3318, ~8km away).
- **"Větrná hůrka"** (Labské pískovce) — a same-named rock near Rájec/Děčín, unrelated to this Petrohrad.
- **"Skalní město"** (Prachovské skály/Hruboskalsko, Český ráj) — a completely different, much better-known area (~50.58°N/15.16°E, ~65km away).

## Not yet researched

The app's `SECTORS` list also includes: **Skály u silnice, První skála,
Chrám, Vrchol kopce, Sputnik** (central group) and **Ležky, Žihle**
(surrounding areas). None of these were in this round's search scope — say
the word for a follow-up pass.

## How to use this

`research/petrohrad-sectors-import.json` is a ready-to-load project file
containing only a `sectors` map for the names above that got a real,
sourced coordinate (Osamělé kameny and the 7 unresearched names are
deliberately left out). The app's loader does `S = Object.assign(S, o)` —
a shallow merge — so loading a file that only has a `sectors` key **replaces
your entire sector-position map but leaves pins, overlays, and map
view untouched**. If you've already hand-placed sector pins locally, loading
this will overwrite them; check first.

`research/petrohrad-boulders.geojson` is a plain GeoJSON FeatureCollection of
every point above (including the reference-only features), for use in QGIS,
Mapy.cz, or anywhere else that isn't this app.
