# Petrohrad — topo overlay on a real map

A single-file web tool for planning a climbing trip to **Petrohrad** (granite bouldering,
Louny district, CZ — roughly 50.120 N, 13.449 E, ~470 m a.s.l.).

The problem it solves: guidebook and web sector maps are hand-drawn schematics. They tell you
a boulder field exists but not *where it is on the ground*. This tool lets you lay those drawings
straight onto satellite imagery, stretch them until the landmarks line up, and read off real
coordinates you can put in your phone.

Open `index.html` in a browser. That's it — no build, no install, no dependencies, no server.

## Running it locally

```bash
git clone https://github.com/jerziii/climb.git
cd climb
```

Then just open `index.html`. To use it on a phone on the same Wi-Fi:

```bash
python3 serve.py            # prints the URL to type into the phone
python3 serve.py --https    # same, but the locate button works
```

Plain http over a LAN IP is not a "secure context", so browsers block geolocation
and clipboard writes there — the ◎ button and *Copy coords* stay dead. `--https`
mints a throwaway self-signed certificate for your current LAN address; the phone
warns once (Advanced → Proceed) and then you get the you-are-here dot, which is
the version worth having at the crag. Certificates land in `.certs/` and are
gitignored. Standard library only, nothing to install.

## Workflow

1. Pick **Satellite (Esri)** as the base map and zoom to the area.
2. Screenshot a drawn sector map — guidebook page, planetmountain, ČHS — and press
   **Ctrl/Cmd+V** on the page. You can also drag an image file in, or drop an image URL.
3. Drag the **four orange corners** onto features visible in both pictures: road bends,
   forest edges, field corners, the chateau, the pond.
4. Slide **opacity** so both are legible. The drawn blobs now sit on real terrain.
5. **Lock corners** so panning doesn't nudge your alignment.
6. Drop **pins**, then **Export GPX** and open it in Mapy.cz, Locus or OsmAnd.

Four corners means a full projective (perspective) transform, not just move-and-scale — so
sketches drawn at an angle or with a skewed aspect ratio can still be made to fit.

## What's in it

- **Base maps** — Esri satellite, OpenStreetMap, CyclOSM (best for forest tracks on the
  approach), OpenTopoMap (contours), ČÚZK orthophoto. A layer that fails to load gets
  flagged in the list rather than silently showing blank tiles.
- **Topo overlays** — any number, each with its own alignment, opacity, visibility and lock.
- **Real climbing data** — queries the Overpass API live for `sport=climbing`, `climbing=*`
  and rock/cliff features in the current view. This is the ground truth to align against, and
  it comes from OSM rather than from this repo.
- **Add a sector by coordinates** — type a name and paste the numbers. Decimal or
  degrees–minutes–seconds, either order, with or without `N/S/E/W`, Czech decimal
  commas included. What was understood is echoed back under the field *before* you
  commit it, so a reordered lat/lng is visible rather than silent. Typing a name
  already in the index moves that sector instead of creating a near-duplicate; new
  names collect under **Added by you**. Map links are refused on purpose — mapy.cz
  orders its query lng-first and Google orders it lat-first, and guessing wrong puts
  the pin in the next valley without saying so.
- **Sector index** — the guidebook sector names (Větrná hůrka, Pod hradem, Hřbitovní kameny,
  Malý Yosemite, Skalní město, Osamělé kameny, Potoční kameny, …). A name goes green when it
  matches something in the OSM data you loaded; otherwise you place it yourself.
- **Where you are, and which way you are pointing** — the ◎ button cycles through
  three states: off → *following* (the map tracks you) → *located* (the dot keeps
  updating, the map stays where you put it). Panning, pinching or wheel-zooming drops
  you out of following on its own, so a GPS fix never yanks the view back while you
  are reading the map. Tap again to come back to yourself. When the device has a
  compass, a cone on the dot shows the direction you are facing.
- **Pins, ruler** (distance + rough walking time), **GPX / GeoJSON export**, and a
  **project file** that round-trips everything including the overlay images.
- Jump buttons to open the current view in Mapy.cz or OpenStreetMap.

State lives in `localStorage`, so closing the tab doesn't lose your alignment. Use
**Save project** for a real backup or to hand the alignment to someone else.

## On coordinates — read this

**No sector coordinates are hardcoded in this repo.** The sector list is names only.

Positions come from exactly three places: OSM data you fetch at runtime, points you place
by clicking, and coordinates you type in yourself. That is deliberate — a guessed coordinate on a climbing map is worse than no
coordinate, because it looks authoritative while sending you into the wrong part of the forest.
The one coordinate baked in is the area centroid used as the initial map view.

Sector names were taken from the public Petrohrad listings (planetmountain, ČHS/skalnioblasti,
the *Petrohrad a okolí* guidebook). Spelling follows those sources; treat the index as a
checklist to locate, not as verified positions.

One exception is flagged where it lives: the **Žihle** entry in `DEFAULT_SECTORS` is an
area centroid from a single uncorroborated source, and the four Žihle sectors are spread
over ~2 km of forest around it. It points at the right woodland, not at a crag.
`research/zihle-sector.md` explains what is known, how well, and what is missing.

## Notes

- Tiles and Overpass need a connection. Export GPX before you lose signal in the forest —
  the area has patchy coverage.
- Overlay images are stored as data URLs in `localStorage`, which browsers cap at around
  5 MB. Downscale big screenshots, or keep alignments in a saved project file instead.
- Ruler walking time assumes ~65 m/min, i.e. slow going on forest paths with a pad.

## Development

`index.html` is the whole application — vanilla JS, no dependencies, works from `file://`.
The map is a small purpose-built slippy map (Web Mercator projection, tile grid, marker layer)
plus a 4-point homography solved by Gaussian elimination and applied as a CSS `matrix3d`.

Verified with Playwright against Chromium: projection round-trips to ~1e-14 degrees, the
homography reproduces its control points to ~1e-13 px, and warped image corners land on their
geo-anchored handles within 0.01 px while panning and zooming.
