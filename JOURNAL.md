## 2026-08-06 — research reálných souřadnic boulderů

- **Co:** Multi-source research (OSM/Overpass, theCrag.com, ČHS horosvaz.cz,
  komunitní zdroje, cílený per-sektor search) na reálné GPS souřadnice
  petrohradských sektorů. Výsledky ověřeny adversarial verify průchodem
  (opraveny 2 chyby v distancích/confidence před uložením). Vytvořeno:
  `research/petrohrad-boulders.md` (plný report se zdroji a caveaty),
  `research/petrohrad-boulders.geojson` (obecný export), a
  `research/petrohrad-sectors-import.json` (rovnou nahratelné přes tlačítko
  "Load project" — doplní jen `S.sectors`, nesahá na piny/overlaye).
- **Stav:** 5 ze 7 původně poptaných sektorů lokalizováno s vysokou důvěrou
  (Větrná hůrka, Pod hradem, Hřbitovní kameny, Malý Yosemite, Potoční kameny
  — poslední jen medium, jediný zdroj). Skalní město nalezeno, ale je to
  neformální podzóna, ne samostatný ČHS sektor. Osamělé kameny nemá souřadnici
  v žádném z 5 zdrojů — reálná mezera v datech, ne chyba hledání. Navíc
  dohledáno 7 dalších sektorů/bodů (některé už v `SECTORS` v index.html:
  Podzimní věž, Vyhlídková skála, Brána, Kamenné srdce, Vlčí kopec, Kosobody,
  Bukov).
- **Další:** Zbylo nepokryto 7 jmen z `SECTORS` (Skály u silnice, První
  skála, Chrám, Vrchol kopce, Sputnik, Ležky, Žihle) — případný další kolo
  research. Osamělé kameny umístit ručně až při překrytí topa na satelit.
  Skalní město a Potoční kameny ověřit proti reálnému topu před plným
  spolehnutím.
