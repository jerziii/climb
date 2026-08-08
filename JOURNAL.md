## 2026-08-08 — offline mapy (stáhnout oblast, např. Žihle)

- **Co:** Nová sekce „Offline maps“. Vybereš oblast (kterýkoliv lokalizovaný
  sektor jménem, nebo aktuální výřez), poloměr a úroveň detailu; panel předem
  spočítá počet dlaždic a odhad MB, pak se to stáhne do prohlížeče. Uložené
  dlaždice mají při vykreslování přednost před sítí, takže stažená oblast
  kreslí i s vypnutým signálem. Seznam uložených oblastí ukazuje skutečnou
  velikost a jde po jedné mazat. Odznak „Offline“ nahoře, když není signál.
- **Kde to je uložené:** IndexedDB, ne localStorage — jedna oblast jsou desítky
  MB, localStorage má strop kolem pěti. Klíč je `layer/z/x/y`, tedy přesně ten,
  který si renderer stejně skládá. V paměti se drží `savedKeys`, aby se dalo
  synchronně rozhodnout, jestli má smysl sahat do databáze; když není uloženo
  nic, jde všechno rovnou na síť jako dřív.
- **Druhá půlka:** `sw.js` — service worker, který cachuje samotnou stránku.
  Uložené dlaždice jsou k ničemu, když se nenačte to, co je kreslí. Strategie
  network-first, takže online vždycky dostaneš aktuální deploy a offline ten
  poslední, co se načetl. Dlaždice přes SW **záměrně** neběží: neprůhledné
  cross-origin odpovědi si některé prohlížeče v kvótě započítávají s obrovským
  paddingem, takže by to rozbilo rozpočet i hlášená čísla.
- **Etická poznámka, ne detail:** hromadné stahování dlaždic je proti usage
  policy dárcovských serverů (OSM to zakazuje výslovně). Proto strop 6000
  dlaždic na oblast, čtyři requesty naráz, přeskakování už stažených a věta
  o tom přímo v panelu. Cílem je stáhnout sektor, který jedeš lézt, jednou.
- **Stav:** 21 kontrol proti lokálnímu tile serveru — odhad reaguje na ovládání,
  velká oblast se odmítne, stáhne se přesně to, co se slíbilo, druhý běh
  nestahuje nic, s vypnutou sítí se uložené dlaždice kreslí z databáze a
  dekódují, neuložená oblast neservíruje nic starého, přežije reload, mazání
  funguje, a stránka se **s vypnutou sítí otevře**. Celkem 160 v sedmi sadách.
- **Vedlejší oprava:** registrace SW měla podmínku jen `https:`, což vynechává
  `localhost`, který prohlížeče taky berou jako secure context. Odhalil test.

## 2026-08-08 — ztráta ručně přidaných sektorů (nahlásil Jiří)

- **Symptom:** „přidal jsem pár sektorů a zmizely.“
- **Příčina:** tlačítko „Reset everything“ (`#wipe`) skládalo `S` znovu ručně
  a vynechalo pole `seeded`, které přibylo s předchozí změnou. Následné
  přidání sektoru pak spadlo na `S.seeded.includes()` — ale až *po* zápisu
  `S.sectors[name]` a *před* `save()`. Sektor se tím pádem objevil v paměti,
  ale nikdy se neuložil, a při reloadu byl pryč. Bez jediné hlášky, protože
  výjimka jen ukončila handler. Reprodukováno: wipe → přidat → reload → nic.
- **Oprava:** jedna funkce `normaliseState()`, která garantuje tvar `S`, a
  volá se ze **všech tří** míst, co `S` přepisují celé — `load()`, `#wipe`
  i import projektu. Plus pojistka na místě zápisu, aby účetnictví kolem
  `seeded` nikdy neshodilo rozdělanou editaci.
- **Navíc:** `save()` teď vrací úspěch a přidání sektoru to použije. Když se
  uložení nepovede (plné úložiště od velkých overlayů), řekne se rovnou
  „je na mapě, ale NEuložilo se — po reloadu bude pryč“ místo obecné hlášky,
  kterou jde přehlédnout. Sektor na mapě, který není v úložišti, je nejhorší
  stav — vypadá v pořádku až do chvíle, kdy zmizí.
- **Poučení:** ručně skládaný resetovaný objekt vedle rostoucího tvaru stavu
  je časovaná bomba. Každé nové pole v `S` musí projít `normaliseState()`,
  ne se dopisovat na tři místa.
- **Stav:** 14 nových kontrol (wipe→přidat→reload, čtyři sektory po sobě ve
  všech formátech, starý projektový soubor, stav bez polí, selhání uložení).
  Celkem 139 v šesti sadách.

## 2026-08-08 — proklik do Mapy.cz + oprava neklikatelných markerů

- **Co:** Každý lokalizovaný sektor má v indexu tlačítko „Mapy ↗“ a marker na
  mapě po ťuknutí otevře popup (jméno, souřadnice, Mapy.cz, Copy) — sektorové
  markery do teď žádný popup neměly. Piny dostaly stejné tlačítko. Odkaz
  staví na tvaru, který v repu byl a funguje (`turisticka?x=lng&y=lat&z=`),
  a přidává `source=coor&id=lng,lat`, což z toho udělá vybraný bod, takže
  appka v telefonu rovnou nabídne Navigovat. Ta druhá půlka je aditivní —
  souřadnice jsou i v x/y, takže když ji Mapy někdy přestanou brát, mapa se
  pořád otevře na správném místě, jen bez špendlíku.
- **Vedlejší nález — pre-existující chyba:** popupy markerů nešly otevřít
  prstem **nikdy**. `map.setPointerCapture` při panování přesměruje následný
  `click` na mapu, takže posluchač na markeru se nikdy nespustil — týkalo se
  to pinů (Rename/Copy/Delete) i OSM prvků, ne jen nových sektorů. Opraveno
  tím, že `onClick()` si sáhne přes `document.elementFromPoint` pro to, co je
  reálně pod prstem, a zavolá `_tap` markeru. Volá se jen když se pointer
  skoro nehnul, takže tažení přes marker dál normálně posouvá mapu.
- **Slepá ulička, ať se neopakuje:** první oprava byla „nezabírat pointer,
  když stisk padne na `.mk`“. Vypadá čistě, ale rozbije posouvání mapy ve
  chvíli, kdy začneš táhnout přes vlastní polohovou tečku — a ta je po
  zapnutí GPS přesně uprostřed obrazovky. Odhalil to až běh starší sady
  testů. Na tuhle regresi je teď vlastní test.
- **Stav:** 26 kontrol na proklik (tvar URL včetně x=lng/y=lat i pro záporné
  souřadnice, tlačítko v seznamu, popup markeru, escapování ošklivého jména,
  piny, tažení z markeru pořád posouvá). Celkem 123 napříč pěti sadami.

## 2026-08-08 — přidávání sektoru přes souřadnice

- **Co:** Do panelu Sector index přibyl formulář jméno + souřadnice. Parser
  bere desetinný zápis i stupně-minuty-vteřiny, v libovolném pořadí, s N/S/E/W
  před i za číslem, a české desetinné čárky. Pod polem se živě vypisuje, co
  se z toho přečetlo — včetně případného prohození lat/lng — takže se na mapu
  nedostane nic, co uživatel předtím neviděl zpátky. Nová jména se sdružují
  do skupiny „Added by you“, která se odvozuje z `S.sectors` (žádný další
  stav k udržování), takže smazání sektoru je totéž co jeho odebrání ze
  seznamu. Zadání jména, které už v indexu je, sektor **přesune** (s
  potvrzením), místo aby vzniklo skoro stejné jméno vedle.
- **Vědomé odmítnutí:** odkazy na mapy se zásadně neparsují. mapy.cz má
  v query pořadí lng-lat, Google lat-lng — špatný odhad posadí bod o údolí
  vedle a nic neřekne. Formulář to řekne rovnou („paste the numbers, not
  a link“) místo aby hádal. Stejná logika jako u zbytku appky: radši žádná
  souřadnice než věrohodně vypadající špatná.
- **Stav:** 33 unit testů samotného parseru (desetinné, DMS, DM, hemisféry,
  obrácené pořadí, čárky, mimo rozsah, minuty ≥60, URL) + 24 kontrol v
  Chromiu (přidání, DMS, uložení, přežití reloadu, export do GPX, fuzzy
  match jména, odmítnutí, živý echo). Doběhly i obě starší sady beze změny.
- **Poznámka:** test parseru odhalil, že `"95.0, 13.3"` skončí jako
  lat 13.3 / lng 95 — 95 nemůže být zeměpisná šířka, takže se to čte jako
  zápis lng-first. Je to stejné pravidlo, které správně zpracuje Sydney
  (`151.2, -33.9`), a echo to ukáže před potvrzením. Chyba byla v testu,
  ne v kódu.

## 2026-08-08 — Žihle + poloha na mapě (následování, směr pohledu)

- **Co (mapa):** Opraveno chování tlačítka ◎. `watchPosition` dřív při *každé*
  aktualizaci polohy přepsal `S.center` a vynutil zoom ≥16, takže se mapa po
  zapnutí polohy nedala posunout — vždycky se vrátila zpátky na uživatele.
  Navíc každé ťuknutí spustilo další watcher, který se nikdy nerušil. Teď má
  tlačítko tři stavy (vypnuto → následuje → jen zobrazuje) a tažení, pinch
  nebo zoom kolečkem následování samo shodí, tečka se ale dál aktualizuje.
  Přidán kužel směru pohledu z kompasu (iOS `webkitCompassHeading` +
  `requestPermission` z gesta, Android `deviceorientationabsolute`/alpha,
  korekce o `screen.orientation.angle`), fallback na GPS kurz jen za pohybu.
- **Co (Žihle):** Odkaz v zadání (theCrag area 3181150992) není Žihle, ale
  **Sklárna sever** — jeden ze čtyř sektorů uvnitř Žihle. Zpracované obě
  úrovně: ČHS oblast 139 = Viklany (61 skal/701 cest), Bába a Dědek (25/348),
  Sklárna Sever (33/347), Sklárna Jih (30/326), celkem 149 skal a 1722 cest.
  Do appky doplněn souřadnicový bod Žihle, čtyři podsektory s odkazy a všech
  33 jmen skal Sklárny Sever.
- **Stav:** Mapová část ověřena v Chromiu přes Playwright — 32 kontrol včetně
  té podstatné (mapa po zapanování zůstane stát i přes další GPS fixy),
  rotace kuželu pro sever/východ/jih/západ a odolnosti watcheru vůči
  výpadku signálu. Testem se našla a opravila chyba: původní error handler
  vypínal polohu při jakékoliv chybě, včetně běžného výpadku pod stromy —
  teď se ukončuje jen při zamítnutém oprávnění.
- **Ošklivá věc, kterou je potřeba vědět:** všechny zdroje pro Žihle
  (thecrag.com, horosvaz.cz, padani.eu, climbing-guide.eu) jsou z tohohle
  stroje blokované egress politikou (403). Data jsou tedy z druhé ruky přes
  shrnutí z vyhledávače, ne opsaná ze zdrojové stránky jako zbytek
  `research/`. **Žádné názvy cest ani grady** — proto má Žihle v `ROUTES`
  jen jména skal a počty a panel to explicitně říká místo aby ukazoval
  prázdný seznam. Souřadnice oblasti je jednozdrojová, označená jako
  low–medium. Detailně v `research/zihle-sector.md`.
- **Další:** Dotáhnout 1722 cest a per-sektorové souřadnice z nezablokovaného
  spojení (nebo z tištěného průvodce Resch/Sika, který má GPS po balvanech).
  Bez dat zůstávají Osamělé kameny, Skály u silnice, Vrchol kopce, Ležky.

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
