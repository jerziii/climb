## 2026-08-06 — cesty zabudované do appky

- **Co:** Data z `research/petrohrad-routes.md` přeparsována (Python skript,
  ověřeno počty proti známým součtům) a zabudována přímo do `index.html`
  jako `const ROUTES` — stejný vzor jako existující `SECTORS`, takže appka
  jde dál otevřít přímo ze souboru bez serveru. V panelu Sector index má
  teď každý lokalizovaný sektor tlačítko "Routes (N)", které rozbalí
  scrollovatelný seznam skal a jejich cest/gradů. Skutečný rozsah dat byl
  mnohem větší, než původní odhad — 285 skal, 2780 cest v 16 sektorech
  (Vyhlídková skála a Brána jsou samy o sobě 62+64 skal). Soubor narostl
  z ~46 KB na ~134 KB.
- **Stav:** Ověřeno v prohlížeči — funguje i na největším sektoru (Brána,
  745 cest) bez chyb v konzoli. Skály, které jsou v appce zároveň
  samostatným jménem sektoru (První skála, Kamenné srdce, Chrám, Sputnik,
  Skalní město), jsou napojené na svá zdrojová data, ne duplikovaná zvlášť.
- **Další:** 5 sektorů bez dat zůstává (Osamělé kameny, Skály u silnice,
  Vrchol kopce, Ležky, Žihle) — chybí i na úrovni pozice, natož cest.

## 2026-08-06 — research konkrétních cest a gradů

- **Co:** Pro všech 13 dosud lokalizovaných sektorů dohledány jednotlivé
  cesty/boulder problémy (název + grade) z detailních stránek jednotlivých
  skal na ČHS horosvaz.cz, křížově ověřeno proti theCrag.com kde to šlo.
  theCrag blokoval (HTTP 403) skoro všechny přímé fetche — jediná výjimka
  Potoční kameny, kde to prošlo přes vyrenderovaný prohlížeč (101/101 cest).
  Přes 700 cest na ~130 skalách zapsáno do `research/petrohrad-routes.md`.
- **Stav:** Grady a názvy přesně tak, jak je uvádí zdroj — nic nedopočítáno
  ani domyšleno. Chybějící data (Bobky, Žraločí ploutev, Zub, Horní stěnky,
  Penis, U penisu — 6 skal bez dat) označena, ne odhadnuta. ČHS nemá skoro
  žádné hodnocení kvality cest — jediná ohodnocená cesta v celé oblasti je
  Pružina (Trio, Pod hradem, 7B, 5★/1 hlas). Rozpor v počtu cest u Pod hradem
  (theCrag ~386 vs. ČHS 401) nahlášen, ne sloučen do jednoho čísla.
- **Další:** Zbylých 7 nepokrytých jmen z `SECTORS` (viz předchozí záznam)
  stále chybí i na úrovni sektoru, tím pádem i cesty. Případné přidání
  cest do samotné appky (index.html) by chtělo nejdřív rozmyslet datovou
  strukturu — S.pins/S.sectors dnes cesty nepočítá.

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
