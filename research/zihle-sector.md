# Žihle — sector research

Requested from the theCrag page <https://www.thecrag.com/en/climbing/czech-republic/area/3181150992>.

**That URL is not Žihle.** Area `3181150992` is **Sklárna sever**, one of four sectors
*inside* Žihle. Žihle itself is theCrag area `1913090529`, which sits under
*Petrohrad a okolí* (`1913081340`). Both levels are covered below, because the
request was for "the sector from this page" and the page is one level down.

---

## Read this before using anything here

**Every source for this area was unreachable from the machine this was compiled on.**
`thecrag.com`, `horosvaz.cz`, `padani.eu` and `climbing-guide.eu` are all refused by the
network egress policy (403 on CONNECT — a blocked host, not a site outage). The
only channel that worked was a web-search tool that returns its own summaries of
those pages.

So, concretely: **nothing below was read off a source page.** It is second-hand via
search summaries. That is a weaker standard than the rest of `research/`, where the
route lists were transcribed from ČHS boulder pages directly. Treat the numbers as
good-faith reporting of what the sources say, not as verified transcription, and
re-check anything you would act on from an unblocked connection.

What that costs, specifically:

- **No route names and no grades.** Not one. The `ROUTES["Žihle"]` entry in
  `index.html` therefore carries rock names and counts only, and the panel says so
  rather than showing an empty list.
- **No per-sector coordinates.** Only one area-level coordinate (below).
- **No approach or parking detail** beyond the trail description under *Access*.

---

## Structure

Žihle is **ČHS oblast 139**, granite, four sectors:

| Sector | ČHS | Rocks | Routes | Notes |
|---|---|---:|---:|---|
| Viklany | [sektor 950](https://www.horosvaz.cz/skaly-sektor-950/) | 61 | 701 | part "U Lomu" of PP Viklany |
| Bába a Dědek | [sektor 951](https://www.horosvaz.cz/skaly-sektor-951/) | 25 | 348 | part "U Báby"; climbable when wet |
| **Sklárna Sever** | [sektor 948](https://www.horosvaz.cz/skaly-sektor-948/) | **33** | **347** | **the sector that was asked about** |
| Sklárna Jih | [sektor 949](https://www.horosvaz.cz/skaly-sektor-949/) | 30 | 326 | |
| **Total** | | **149** | **1722** | |

Cross-check: independent sources describe Žihle as "about 160 boulders with about
2000 problems". 149/1722 is the same area measured by a stricter database, so the
two agree in scale. The wider *Petrohrad a okolí* region is quoted at ~5000 boulders
plus ~500 pitches across 18 areas.

Both Sklárna sectors are recent, cleaned for the annual **Petrohradské padání**
festival — Jih for the 2012 edition (Petr Resch, Karel Hegr), Sever for 2013. Parts
of Bába a Dědek were found by Olda Löw around 1990.

## Sklárna Sever — the 33 rocks

Artemis fowl · Babička · Čepička · Dehydrant · Delfínek · Destička · Double ·
Dva kamarádi · Dvoupatrák · Gogoun · Hydrant · Kameny u cesty · Lesník ·
Nad chatičkami · Mikromýtina · Mravenečník · Piraňa · Placatá zebřata · Pod Žábou ·
Pražkej démon · Pulec · Ráma · Saďourek · Sklář · Skleněný vrch · Skříň · Spojnice ·
Svědek · Terminátor · Truhlička · Vorvaň · Žába · Žihleský klasik

The list is **33 names and the sector count is independently reported as 33 rocks**.
Two figures that came from different queries agreeing exactly is the strongest
check available here — it is why this list is in the app and the route data is not.

Individual rocks that surfaced with a ČHS id: Gogoun `skala-13258`
(also theCrag `4016083992`), Kameny u cesty `skala-13263`, Hydrant `skala-13271`,
Sklář `skala-13283`. Žába is theCrag `4015936239`. No grades were obtainable for any
of them.

## Coordinates

| Point | Lat, Lng | Confidence |
|---|---|---|
| Žihle (area centroid) | `50.065961, 13.341427` | **Low–medium** — single source, uncorroborated |
| Nad myslivnou | `50.05506, 13.33886` | Medium — single source, but with a matching prose approach |

`Nad myslivnou` is a neighbouring granite-egg sector, not part of oblast 139. Its
approach was described concretely enough to be worth recording: park on the road
towards Tis u Blatna (the small road off the Žihle–Nový Dvůr road), then 5 minutes
along the track, boulders on the left.

Why the area centroid is only low–medium, despite looking precise:

- it came from one search summary, and search summaries are exactly where a
  plausible-looking number can be invented;
- nothing corroborated it, and no per-sector coordinate was found to triangulate against.

It does survive the checks that could be made: it is ~1.2 km north of Nad myslivnou,
~9.8 km SW of Petrohrad centre, and lands in the forest north-west of Žihle village —
all consistent with the prose descriptions. That is why it is in `DEFAULT_SECTORS`
with an explicit comment, and why this file exists to qualify it.

**It is an area centroid, not a crag.** The four sectors are spread over roughly 2 km
of forest around it. It gets you to the right woodland; it will not walk you to a
boulder. Place the sectors properly by warping a topo onto the satellite layer, which
is what the app is for.

## Access

Viklany lies in Žihelský les, about 3 km from Žihle village, inside the Horní Střela
nature park. The rock town has been protected since **1933** — it is a natural
monument, in two parts: *U Báby* (the Bába and Dědek erratics, over 10 m wide and
about 5 m tall, formed by spheroidal weathering of coarse granite) and *U Lomu*
(the rock town proper, built around its namesake rocking stone).

On foot from Žihle, follow the **yellow** waymarks: ~2 km to Dědek and Bába, then a
further ~1.7 km to U Lomu.

Protected-area status is a real constraint on a climbing plan, not trivia — check
current access rules with ČHS before organising anything at Viklany or Bába a Dědek.

## What is still missing

1. **Route names and grades for all four sectors** — 1722 routes, none of them here.
   This is the whole gap, and it needs an unblocked connection to ČHS or theCrag.
2. **Per-sector coordinates** for Sklárna Sever, Sklárna Jih, Viklany, Bába a Dědek.
3. **Parking and approach** for the Sklárna sectors specifically.
4. Confirmation of the area centroid from a second source.

## Sources

Reached only as search summaries, never fetched:

- theCrag — [Sklárna sever](https://www.thecrag.com/en/climbing/czech-republic/area/3181150992),
  [Žihle](https://www.thecrag.com/en/climbing/czech-republic/area/1913090529),
  [Petrohrad a okolí](https://www.thecrag.com/en/climbing/czech-republic/area/1913081340),
  [Gogoun](https://www.thecrag.com/en/climbing/czech-republic/area/4016083992),
  [Žába](https://www.thecrag.com/en/climbing/czech-republic/area/4015936239)
- ČHS horosvaz.cz — [oblast 139 Žihle](https://www.horosvaz.cz/skaly-oblast-139/),
  [948](https://www.horosvaz.cz/skaly-sektor-948/), [949](https://www.horosvaz.cz/skaly-sektor-949/),
  [950](https://www.horosvaz.cz/skaly-sektor-950/), [951](https://www.horosvaz.cz/skaly-sektor-951/)
- [Petrohradské Bouldery (padani.eu) — Žihle](https://padani.eu/bouldery/zihle/) ·
  [Sklárna sever](http://padani.eu/bouldery/category/zihle/sklarna-sever/)
- [climbing-guide.eu — Petrohrad](https://www.climbing-guide.eu/bouldering-guidebook/czech-republic/petrohrad/)
- [Kudy z nudy — Viklany u Žihle](https://www.kudyznudy.cz/aktivity/viklany-u-zihle-skalni-mestecko-nevsednich-tvaru) ·
  [Turistika.cz](https://www.turistika.cz/vylety/zihle-viklany/detail)
- Printed: *Petrohrad and surroundings* bouldering guidebook, P. Resch & J. Sika —
  has per-boulder GPS and problem counts. Almost certainly the fastest way to close
  gaps 1–3 above.
