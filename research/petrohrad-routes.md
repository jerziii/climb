# Petrohrad — route/grade catalog (2026-08-06)

Individual boulder problems (name + grade) for the 13 sectors covered in
[petrohrad-boulders.md](petrohrad-boulders.md). Pulled directly from ČHS
(horosvaz.cz — Český horolezecký svaz) boulder detail pages, with theCrag.com
cross-checked where it wasn't bot-blocked.

**Read this before trusting a number:**
- **theCrag.com blocked nearly every fetch (HTTP 403)** — it's a JS-rendered
  site and this pass's fetch tooling isn't a real browser. The one exception
  was Potoční kameny, retrieved via an actual rendered browser session
  (101/101 routes, full coverage). Everywhere else, ČHS is the only source —
  where that also had nothing, it's marked "no data" rather than guessed.
- **Grades are reported exactly as shown on ČHS**, prefixed "RP" (the site's
  own French/Fontainebleau-style bouldering notation) or occasionally UIAA/aid
  grades (e.g. `IV, A1`) for rope-protected lines mixed into a boulder's route
  list. Nothing here was invented, inferred, or reconciled across
  disagreeing sources — where a name/grade couldn't be parsed cleanly, it's
  flagged inline (e.g. "unnamed", "no grade shown") instead of filled in.
- **Star/quality ratings**: ČHS has almost no rating data for this whole area
  — only one route in all ~700+ routes found across every sector has a
  rating: **Pružina** (Trio boulder, Pod hradem) at 7B, 5★ (1 vote). Treat the
  absence of stars everywhere else as a confirmed gap in the source, not a
  missing column.
- **Route count discrepancy, Pod hradem**: theCrag/the original research
  brief cited ~386 routes; ČHS's own sector total is 401 across 52 boulders
  (matched exactly against the per-boulder counts below). theCrag was
  unreachable to reconcile this — reporting the discrepancy rather than
  picking one number.
- **Boulders with zero retrievable route data** (sector overview lists a
  count, but the individual page rendered nothing): Bobky (Podzimní věž);
  Žraločí ploutev, Zub (Vyhlídková skála); Horní stěnky, Penis, U penisu
  (Brána). ~145 of ~149 boulders across those four sectors have full lists.
- **A handful of ČHS pages, when fetched, returned injected text steering
  toward unrelated "theater" topics** — an artifact of the fetch tooling's
  own processing, not real content from those climbing pages. It was
  recognized and ignored during research; noted here for transparency, not
  because anything came of it.
- **Skalní město** name collision reminder: this same informal sub-zone name
  also appears as its own theCrag sub-area filed under "Potoční kameny" (see
  the routes listed there) — same caveat as in the main research report about
  it not being an independent ČHS sector.

---

# Petrohrad bouldering routes — Větrná hůrka, Podzimní věž, Vyhlídková skála, Brána

## Data source note
- theCrag: 403 on essentially every direct fetch (bot-blocked, JS-rendered). A proxy workaround worked twice — confirmed Větrná hůrka has 4 theCrag sub-areas (Mordor 23 routes, Strážce 2, Mučírna 23, Vidiečan 10 per theCrag) and gave Strážce's 2 routes (Levý/Pravý, ~1A Font, FA Resch & Hegr 2002) — but failed for Podzimní věž, Vyhlídková skála, Brána.
- ČHS (horosvaz.cz): fully accessible, source for all data below. Grades "RP" (site's own French/Font notation) or UIAA/aid grades for rope-protected lines mixed into a boulder's list. No star ratings exposed (all show "0 hodnocení") except where noted.
- Boulders with sector-listed route counts but zero route data exposed on their page (flagged "no data", not guessed): Bobky (Podzimní věž); Žraločí ploutev, Zub (Vyhlídková skála); Horní stěnky, Penis, U penisu (Brána).
- NOTE: several automated fetches returned unsolicited injected text steering toward unrelated "Ufftenživot theater" topics — an artifact of the fetch tool's own processing, not real page content. Ignored; had no bearing on the data below. Flagged for transparency.

---

## Sector: Větrná hůrka (ČHS sektor-958)

### Mordor (4m)
Zadní boulder 3 | Levá stěna 3 | Pravá hrana 5C | Levá hrana 5B | Pytlová ulice 5B (6B SD) | Na krev 8A/A+ | Na krev II – Zabili Kennyho 8A+/B | Žihadlo 6B+ (no-jump start) | Žihadlo SD 7C+ | Glum 7A+ | Hobit 7B | Miláček 6C+ | Blesk 6C | Ondra Nebuda 6B | Odula 6C | Skřet 1

### Strážce (3m) — also confirmed on theCrag
Levý 1 (≈1A Font, FA Resch & Hegr 2002) | Pravý 1 (≈1A Font, FA Resch & Hegr 2002)

### Mučírna (4m)
Nora 6A | Blboun 5B | Hezoun 6A+ | Krváček 5C | Velkej blboun 6B+ | Velkej hezoun 6B+ | Čachtice 5B (jug start) | No exit 7C | No entry 8A | Barevný svět 8B+ | Emily 7B | Traverzík 5B | Josemitská klasika 5C | Padák 6B | Ježibaba 7A | Štěrbinový drtič 6B | Jan Kubiš 7C+ | Samolepa 6B | Meresjev 6C+ | Meresjev II 7C | unnamed 5A

### Vidiečan (3m)
Sláma z bot 6B | Gumáky 6A | Kout 4+ (5C SD) | Missis venkov 6C | Traktorista 6A+ | Miss venkov 5B | Tláča s cibulí 6C | Ananasovej expres 6B+

---

## Sector: Podzimní věž (ČHS sektor-962)

### Bobr (3m)
Bobrovka 5C (SD var) | Bobrovčička 4+ | Bobr 6A (6C+ SD via arête) | Ukradené štěstí 7B+ | Bobřík 6B (SD)

### Jóžin (4m)
Zero 7B (SD) | Bludička 6A+ (SD) | Okap 4 (5C SD) | Mistr Bloud 6C | Ometák 6B (SD) | Elektrické kartáče 7B+ (SD) | Blue session 8A (SD) | Dr. Hloň 6C (SD) | Dr. Presoň 6C+ (SD) | Scheissleistenparade 6A | No noh 7A | Zahnutý žížaly 7A | Jóžin 6A (SD) | Převislá hrana 4+ | Levá hrana 5A | Cyklus 6A | Hadí spárka 4 | Alf sportter 5B | Alf 5C

### Bažina (3m)
Rypouš sloní 6C | Projekt X 8A | Šumák 5C | Král Šumavy 6C | Igor 7C | Králík 5C | Pašerák 5C | Na ostří nože 6C | Kulička 6A | Upír 5B | Netopír 6C | Vampír 6C+

### Podzimní věž – pravá část (8m)
Mechovka 4+ (7m) | Koutovka 4 (7m) | Železná opona 8+ (8m) | Varianta 7+ (7m) | Báječné časy 7 (7m) | Zakázané Rusko 7+ (8m) | Silvestrovská III,A1,6 (6m) | Šupiny 6 (6m) | Kapraďová 4+ (7m) | Rozporák 3 (7m) | Ztracený komín 3 (7m) | Ložená hrana 4 | Bonus 6B | Bombus 4

### Podzimní věž (20m)
Brdská V+,A0,7 (10m) | Březová hrana 2 (5m) | Evergreen 7- (7m) | Glundalič 7- (15m) | Jemná plotna 3 (8m) | Kapačka 7+ (9m) | Kapavka/Nelogická V,A0,7+ (8m) | Logická 6+ (6m) | Nedělní probuzení 6+ (10m) | Otevřené dvěře 8 (12m) | Peklíčko 7+ (15m) | Podzimní hrana 3 (10m) | Radostná spára 6 (12m) | Rakovnická varianta 6+ (3m) | Šikmá spára VI,A0,6 (10m) | Únorová 8- (10m) | Varianta Radostné spáry III,A1,6+ (15m) | Zapomenutá IV,A0,6 (6m) | Zapomenutá hrana 6 (6m) | Prší krásně 6C+

### Suť (5m)
152: 2 | 153: 2 | unnamed: 2 | unnamed: 2

### Dubová věž (6m)
154: 5B | Rampa 4 | Manka 6C (direct) | Rumcajz 6C+ (direct, undercling) | Cipísek 6A+ | Šuby duby 7B+ (direct) | Satelit 6C+ (direct, ends at Rampa) | Rundreise 7C (Šuby duby+Satelit) | 157: 6A | Dobrej tah 6B+ | 158: 3 | 159: 4 | 160: 2 | 161: 3 | 162: 2 | 163: 5A

### Žalud (3m)
Žalud 6C+ | Plácačka na mouchy 7A | 164: 1 | 165: 4 | Nový boulder 5B | 166: 4 | 167: 5A | 168: 1 | 169: 2 | unnamed: 1 | unnamed: 1 | Navalení 4 | Minikoutek 5B

### Bobky (5m) — NO DATA on page

### Kout (5m)
Babalet 7A+ (trad crack) | Oblá hrana 5A (6A sport var) | Objetí 5A (sport var) | Žížaly 5A (6A sport var) | Pravá stěna 5A (6A sport var) | Levá stěna 5B (6A sport var) | Volejte řediteli 7A+ | Kout 6A | Rybář 7A (sport var)

### Top (3m)
TOP traverz 5B (SD) | TOP hop 4 | TOP stěnka 5C (SD)

### Březový háj (5m)
Anální sonda nitrožilně 7B (SD) | Anální sonda 6B (SD) | Mazlík 5C | Krizové centrum 6C+ | Březová hrana 4 | Namydlený kožišek 7A+ | Šaman 6A | Březová stěna 5A | Houpačka 6B (SD) | Kanystrový maratón 7C (SD) | Kusadala 5C (SD) | Vyvalení 5C | Ferdovy kamarádi 6A

### Busta (4m)
Hrudníček 4 | Hrdá hruď 5C | Radost direkt 5B (SD) | Radost 4+ (SD) | Hnusota 6A (SD) | Tvrdíme muziku 7A+ (SD) | Lištůvky 5A (SD) | Struktůrky 4 (SD) | Vochomůrka 6A+ (SD) | Křemílek 6A (SD)

### Puklín (5m)
Abalak 5A | Já na brášku 5C | Starý boulder 4 | Kombinace 6B | Údolní hrana 4 | Škvarkova hrana 6B+ | Previsnutý kútit 7A+ | Vražda 6A | Ementálek 4 | Loupák 5C | Jasná zpráva 6A+ | Nejasná zpráva 4 | Krachlavé sráče 5A | Tři dýlky 4 | Šeď 4+ | Létavice 6A+ | Sametové chyty 5C | Plyšáček 4

### Ráj (5m)
Rychlovka 5C (6C var) | Instantní peklo 6B | Móc pěkný 4+ | Petrova hrana 4 (5A var) | Blues o spolykaných chytech 8A | Ranní ptáče do topu doskáče 7C+/8A | Spáč 4 | Na kůru 5A | Kliďánko 4+ | Kde se tu ty chyty vzaly? 6B | Blbost 6C | Nosánek 6B | Mše 6A (7B+ var) | Mše svatá 6B+ | St. Tropez 7C+ | Prokletí 3 | Zlaté piesky 7B | Vzkříšení 5B | Pokání 5C | Rajské jablíčko 5B | Koule 6A+ | Oliheň 4 | Díky Bohu 4 (6B+ var) | Božský traverz 5C

### Péťova skála (4m)
Hledání prostoru 6B | Krystaly 4

---

## Sector: Vyhlídková skála (ČHS sektor-963) — 63 named boulders

Sivý vrch: Balkón 6B, Pavlač 6C, Zuzák 6A+, Mučidlo 6, Dýchavičná cesta 4+, Sivá hrana 6C, Spiderman 5B, Pavoučí spára 5-, Srnka 5C, Erö 7A+, Prdík 5A
Stoun: Viklan 3, Levá stěnka 2, Spára 1, Pravá stěnka 2, Ruka–noha 5B, Návrat sněhuláka 8A, Šok 6B, Kobra 5A, Nepadej 4, Bicák 6A
Koule: Koule 6B, Napuchlý koule 6B, Expo 6B, Dejchej 6B, Hrana koule 6A
Trojúhelník: Za 5 minut 3–6B, Rajský protlak 7A, Cvičky ve tmě 7C, Fear of the dark 7C+
Panelák: Nejtovka 7-, Panelstory 7C, Le corbusier 8A+, Manžestrová spára 4-, Neplatič 6B, Holobyt 7A+, Spoločný 5B, Názov stavby 7A, Pro Zuzanku 5C
Pánev: Rukojeť 6A+, Běh přes pánev 7B, Teflon 6B
Dvoupatrák: Zelenáč 5B, Levá hranka 4+, Mlha 4(7A SD), Beďár 7A+ SD, Slunečník 4+, Středem 4, Pravá hrana 1, unnamed 5C, Potlesk 6A+, Oňa je kurva 7B+ CH, Boulder K n/a, Pětka vpravo dole 5A, Druhá pětka vpravo dole 5A
Bajkonur: Tlusťoch na posedmé 6B, Lajka 4(5A SD), Valentina 5C, H3N2 7A+, Pozor padá Gagarin 6C, Brisbane 7A, Buran 7B, Když mé prsty tiše pláčou 8A, Zelený Buran 6A, Zelené mléko 3, Mlíčko 5B, Spára 1, Vostok 4+, Soljut 2, Sputnik 3, Mars 3, Venuše 3, Jupiter 3, Kapradinový traverz 4, Dobrý let 6B+, Dobré přistání 5A
Raketa: Rakeťák 7A (SD var)
První skalka: Zelená jednička 4+, Komín 1, Váhostav 4
Ementál: Levá stěnka 5A, Převis zleva 5B, Převis přímo 5C, Levá hrana 4+, Napřímená n/a, Zelená spára 4+, Bouře 7C+, Bouře a vzdor 8A, Těžká stěnka 6A, Hrana 5B, Petrohradské důlky 4, Vzdor 7B+, Osmička 4+, Devítka 4+
Sekáček: Svoboda tunelář 6A, Snopková tunelářka 6B, Liberta 6B+, Mistr kat 7A+, Sbírám céčka 6B+, Hardcore 7A, Sbírám péčka 6A, Tupí 6C, Nad propastí 5A
Nočník: Tupoun 6B+, Orbit 6C+, Doba kamenná 4+, Rock tools 6B+, Bujón 7B+, Ujón 6A+, Uááá 7B+, Let se zelim 8A+, Levý skok 3, Pravý skok 3, Frodo Nakole 8B, Kdopak pěkně papal 8A, Nášup 8A+, Psí skok 7B+, Flaying boy 7B+, Rudá Armáda 8A, Lopatěv 7B, Traverz 5A, Žiletka 6C, Výprodej koberců 5B, Steel tools 6B+
Vyhlídková stěna: Košík plný dobrot 5B, Piknik 6B, Suchej rohlík 6A, Suchej rohlík direkt 7-, Kleptománie 9-, Skobová spára 6+, DFS 6C, Veterán klub 7C+, Zabíjačka 6A
Převislá stěna: Zarostlá stěna 4, Mechůvka 4-, Výrovka 3, Kolem nýtu vezu kýtu 5+, Traverz 6C, Projekt n/a, Aréna 7A+, Krátkej 6C+, Dlouhej 6C+, Červený bod 6+, Neoklasik 6A, Nový boulder 6A+, Parte 6B, Lesní zahrádka 4+
Nebe: Já chci pryč 6A, Já chci do picošky 5C, Já chci domů k mamince 6A, Že jsme sem lezli 6B+, Nebeské zvony 4, Ťuk ťuk ťukám na nebeskou bránu 7B+, Vysoká oblaka 7A, Očistná kůra 5B
Zelená plotna: Vyhlídková spára 5, Minutka 6+, Neznámá 6, 133: 6, unnamed n/a, Neznámá plotna 6-, Neznámá spára 4+, Křovácká 2
Matterhorn: Plotna 4+, Direkt 6A+
Obr: Pastucha 5C SD, Z díry 1 (5A SD var)
Kostka: Levák 5C, Sedátko 5A, Opěrátko 5C, Fimfárum 8A, Fimfárum II 8A+/B, Macháček 6B+, Lehátko 5B, Děťátko 2
Půlnočník: Přímej 6B, Hnidy 7A, Špekmen 8A, Levej 3, Pravej 6B+, Falko 2, Levá spára 5A, Pravá spára 5B, Shyb 6B, Žlab 4+, Hever 7A, Přehazovačka 6B, Aničce 2
Prcek: Prcek 6A+, Skrček 5A, Mrňous 4
U buku: U buku 3, Údolní 2
Perníček: Stěnka 1, Divnost 4, Divný traverz 5C, Divná divnost 5A, Podivnost 6A, Babička Palička 1, Skřítek Pervitík 6C, LSD 5A, Vaříme vaříme 6C, Perník 5B, Pardubická mňamka 6A, Perníková spára 4, Loupání perníčku 6B+, Kapradinová spára 2, Pardubická stěnka 3
Čichal: Dobrej Čuch 6A+, Čmuchací traverz 6B, Wave up 7A, Poslední 4, Tahoun 6A+, Švihoun 5A
Uvítací výbor: Pěkně tě vítám 5C, Tož vítaj 5C, Chléb 5A, Sůl 5A, Poplácáme 5B, Potřepeme 4, Maharal 6C+, Golem 7A+, Pytel strachu 5B, Hard and heavy 8A, Obejmi soudruha 7B+, Brežněv 7C, Tepláková souprava 7C, Vklíněnec 6B, Čtyřicítka 4+, Tvrdý přistání 6B+
Benzínka: Natural 5C, Diesel 7A+, Ošklivá pumpařka 2, Pěkný pumpař 1, Dírky 5B, Čtyřka 4, Dvojka 2
Branka: Levá stěna 2, Pravá stěna 2, Z komína 4+, Stmívání 5C, Bez pindíka 6B, Pornostar 7B, Invaze klíšťat 3, Technics 7C, Hlinomazova noha 6B, Převislý převis 5A, Elza 8A, Noodledream 8A, Třicítka 5B, Hlinomaz 6A, Hranostaj 6C+, Šmudla 6A+, Hrabivec 6A, Hrabivec II 7B, Klika 5A, Zrzavý panty 7B, Spára 1, Bez hrany 5C
Sergej: Méďa 6A, Volha 6B+, Sergej 3 (6A SD var)
Smrťák: Kosa na kámen 4+, Spokojenej parchant 7A, Dajrekt 7A+, Vpravo hleď 6C, Sedmnáctka 5C, Smrťák 6A, Lišta podšitá 6C+, Šulínek 4, Šulín 6B
Podbaba: Co děti snědly 5A, Co děda navařil 6B+, Buřtguláš 5C, Jindrova prolézačka 3
Babský kámen: Mlýnice 7A (7B SD var), Amulet 8A, Ufobába 7C, Ufobába max 8A+
Delfín: Dolevák 4+, Dopravák 5B, Cedník 4+, Pinožení 7A, Viktor Čistič 5B, Lomeňák 6B+, Levá ploutev 2, Pravá ploutev 1, Kubínek 6B, Voko 5A, Žily 7C, Dvojky 5B, Přes díru 5A, Hrobař 6A+, Bachař 6B+, Tanec s trpaslíky 7B+, Siloměr 6C+, Krtkař 6B
Rex: Stěnka 5A, Tyranosaurus Rex 3, Projekt Rex 7C+
Nejťák: Sedlo 2, Hranka 5A, Břízolit 7C, Alenka v říši divů 7B+, SDK 7B, Omítka 7A+, Tapeta 7B, Těžký výlez 4+, Přes nýt 5+, Skřipec 5B
Stříška: Guma 6C+, Klasik 6A, Převislá hrana 4+, Čekání na Štěpána 7C, No hand 6C, Zbloudilé kulky 6A+, Vlajka pro Tibet 7A+, Fujara 4
Průchod: Hrana 1, Egon Bondy 8A, Pendrek 7A, Vykyčel 7C, Velryba ve vaně 7B+, Perný den 7A, Průcha 5A, Průša 6C+, Kozí bobky 7A+, Hrachová kašička 7C+, Hrachová polívčička 4+, Houpačka 4+, Úderník 4+, Zabijáček 4, Bijáček 4+
Vlnobití: Levá spára 5 (FA Löw ~1990), Pravá spára 5 (FA Löw ~1990), Vlnobití 5A
Balvany: Šipka 2, Tupý roh 6B, Průhledný pes 7A+
Jeskyňky: Ostrý zub 5A, Perníček 4+, Baba 6B, Tragédi 6B+, Ježídědek 5C, Do mechu ne 6A, Sedřená záda 7A, Pouze pro malé 7C+, Jó mechy… 6A, 4.liga 2, Ligový traverz 6C+, Liga mistrů 6A+, Okresní přebor 6A, Bojsa 1
Megalit: Nebojsa 2 (4 SD var), Megalit 6A+ (8A SD var), Neboj 5A, Hoboj 4 (SD)
Peřina: Lavinézní hrana 5C, Hrablo 6A, Winterkokoten I 7B, Winterkokoten II 7C+, Frühlingskokoten 6C+
Daniel: Hadí oči 4, Čuně 5B, Dobytek 5A, Pistoljet 4+, Cement 7A, Ředitel 5B, Bulharsko 6A, Pytel 4+, Niky Landa 7A+, Pistoléros 6B, Kulometos 6C
Frankenjura: Kéňa 3 (6A+ SD), Krank 5A, Jura 5A (5C SD), Frankenjura 6A (6C SD), Jéňa 6A, Hlína v botách 7B (SD)
Přízemí: To pude 6B, Skok 6C, Nejlepší nakonec 7A, unnamed 6B+, Hrana 6B, Traverzata 6B, Clever 6C, Smart 6C, Dárek 6C, Levá hrana 7A, Hra s bočákem 7C+, Totální mínus 7C, Pravá hrana 7B
Blouďák: Kaňour 5C SD, Kanec 6A+, Zbloudilý divočák 6B, Hustá srst 6C
Aids: Aids 4, Po kapkách 4 (alt. Syfilík Béďa 6A+ SD)
Pavilón opic: Gibon 5A, Orangután 6C+, Gorila 7A, Pavilón opic 7C, Opičí dráha 6A, Makak 4, Šimpanz 4+
Tlama: Tlamolep 7A+, Zaťaté zuby 7C/C+, Nový život 8A+/B, Mléčné zuby 7A+, Zuby 7C, Hbitý jazyk 7C, Eso Rimmer 8A+/B, Kryton 8B, Vyplazený jazyk 5A, unnamed n/a
Sešup: Zlobivý traverz 6C+, Č.79 5, Vec 7C+, Mechová spára 6+, Sešup 6A, Šlupka 6C, Pařátek 6B+, Lípová 2, Dear Prudence 4+, TR hrana 6A, Drahá Prudence 6B
Horní patro: Konvalinky 7A (SD)
Sokol: Plosky 6A+, Zlatý cvalík 6A, Zlatý svalík 7B+, Křik sokola 5C, Mávnutí křídly 6A, Drápy 6C+, Zaťaté drápy 7A, Na bidýlku 6A, TJ Sokol Petrohrad 6C
Bludiště: Žábovaná 6A, Nohy do praku 6C, Noste na stůl 5B, Blbá hrana 5A, Bubáček 6A, Nula+ 1, Bludička 6B, Pravítko 7B+, Obludička 7C, Oblud 6B+, Blud 6C, Temná hrana 4, Vyhoupnutí 5A, 2.schod 5A, Rovně ven 6C, Doprava ven 6B, Zelený hřbet 1
Kameny: Strážce soutěsky 6A, Žulový sen 6B+, Žuložůžo 5B, Tlustej 6B, Slabej 5C, Línej 4, Líná spára 2
Podloubí: Podhoubí 4, Bručoun 7A+, Mračoun 6B+, Pičoun 6A, Mečoun 6A, Sjezdovka 6C+, Našrot 6A+, Umakart 7C, Namraky 7B, Záchytka 7C, Nasráč 7A+, Kotel 5B, 6B 4, Wundeabáá 7A+, Fantastiš 7A
Pod podloubím: Anabela 7B+, Sára první 6C, Výhledy 6C, Tsunami 7A+, Hrana 6B, Patanismus 7C, Hamoun 7B
Dolní hřeben: U potoka 6A+, Kristusky 6B, Damiens 6A, Sušené jablečné plátky 6A+, Kroutivý moment 4+, Gurmán 6A, Obsidián 7A+, Návštěvní den 7A, Fix 6B+, Divoká roznož 6C, Našim ženám 2, Dárce kostní dřeně 6C+, Dlouhá kost 4+, Filcáky 8A, Dlouhá ruka 5C, Z boule 6B
Žraločí ploutev — NO DATA
Zub — NO DATA
Future: 3 unnamed "projekt" lines, no grades
Trabant: Tdi 5A, SDI 5A, Zimní plotna 2, Konec prázdnin 4+, Zimní slunovrat 5C, Trsátka 7B+, Tramburátor 7A+
Vlna: Kvakerův převis 5A, Kvakerova spára 2, Kvakerova stěnka 6A+, Kvakerův sokol 4+, Kombinace 5B, Quacker 7A+, Kvakerův traverz 6A, Kvakerova hrana 3, Okap 3, Dírkovaná 6A+, Vlna 6C, Vlnění 7A, Baletní škola 6C+, Baletní mistr 7B, Dětská vana 4, Nečekané obtíže 7A, Pohoda 4, Dětská hrana 3, Loučovická mrdačka 6C+
Chýše: Cesta na střechu 2, Cihlová zeď 5A, Zídka 4, Hrůzinec 6C, Hřebenáč 6A, U korýše máme skrýše 6A, Chýše 6B+, Myši v chýši 6C+

---

## Sector: Brána (ČHS sektor-964) — 66 named boulders

Hřbitov: Náhorní hrana 4, Honzovo soužení 5C, Vzdušný zadek 2, Překvápko 5A, Čelisti 6A, Údolní hrana 1, Sprinterova plotna 3, Oharek 6A, Orlík 6B, Orlík varianta 5A, Nafouklej utopenec 6A, Vyvalte sudy 3, Betonové plavky 7C, Kyselej nálev 5B, Ředěný louh 5A, Louh 6B+, Kafe od Žida 4+, Maryša 5B, Vana 6C+, Sama hrana 5A, Nevinnost sama 6C, Sama dola 6A
Rakev: Nekrofil 6B+ SD, Zvedání víka 6C+ SD, Nebožtíkovo ráno 6C
Smetiště: Obleau 7A+, Střep 2, Levá hrana na Střep 3, Střepina 5C, Pravá hrana na Střep 5A, Plechovka 6C+, Péro z gauče 7A, Piksla 6A, Spodní trhlina 5B, Horní trhlina 4, 00:01:00 7B, 01:00:00 6C+, Hrana 6A, Strůpek 4
Paní balvan: Pí pivo 6B, Tachyonized Star Dust 6A, Tachyony léčí 5C
Magické oko: Zobák 4+, Trhlina 4, Souboj Titánů 7A+, projekt n/a, Magické oko 7C+, Lučištník 7A+, Worchester 6C+, Magi 7A, Strýček Cháron 4, Tetička Nymfa 5A, Vnitřní svět 5A, To je lehký 4, To je těžký 6A, Petrův boulder 4+, Michalův boulder 4, Hurdiska 6B+, Madýlko a dírka 3
Václavák: Na václavským Václaváku 5C, Magnézium 7C+, Konec léta 4, Pěší zóna 5A, Převislá stěnka 5B, Hoblice z naší ulice 6B+
U lafety: Lafeta 6A+, Levý shyb 5A, Pravý shyb 5C, Biceps moll 7B, Shybařina 6C, Sněhulákova pomsta 6C, Pošáhlovka 6A, Veselý koutek 6C, Neveselá hrana 6C+, Šikulova plotna 3, Medvědice 3, Chytová slepota 3
Růžová zahrada: Natvrdo 5C, Zoubek 5C, Honimír 7A+, Tupá hrana 4+, Lidem 4, Mastibrk 6C+, Co to má na zoubeškách 5C, Čípková růženka 6B, Gerhard Šlysl 3, Traverz 6B+, Noční hrana 5B, Lehká plotna 2, Chcípák 7A+, Šípák 6C+, Převislé schody 6A+, projekt n/a, Na značky! 6A–7A, Megabyte 5C, Totální nasazení 7A+, projekt n/a, Růžová plotna 4+, Štěpánova hrana 6C+, Kartáčová spára 6A, Kartáčová hrana 6C+, Abiturent 7B+, Rodný list 6C+, Dlouho sám 6B+, Standova 3, Rozcvička 2, Vlnovec 5C, Plechová vana 6B+, Protiskluzová podložka 5B, Vanění 5C, Pod cestou 5A, Na samotě 5B
Lakýrník: Aceton 7C, Pavlíkova 3, Traverzík 3, Olej 3, Bochánky 3, Akrylát 3, Alkyd 4, Dobrý odstín 6C, Barva 6C+, Prďoch 7A, Hezká plotna 1
Chlapák: Plané třešně 4, Malý skáčou 6A (7B SD var), Klukovská 3, Chlapácká 5C, Chlapi sobě 7A, Juniorská 4+
Bobek: Bob 5C (7C+ SD CH var)
Retardér: Hlavní je zdraví 6A, Retarda zavyl 5A (7A+ SD alt), Včelička do ramene 6B, Muž může muže 3 (4+ SD alt), Muž zmůže muže 3 (5A SD alt)
Krunýř: Dokola kolem 5B, Sklápěčka 7A, Hrana 6B+, Dobyvatel 7B+, Španěla 7B+, Slavíci z Madridu 7C+, Mazec 8A, Vlez mi na záda 7A+
Triangulační kámen: Pravá dvojka 2, Levá dvojka 2, Závodní 3, Zase dvojka 2, Kolešov open 6C+, Spoďáky 5A, Lišty 4 (6B SD), Spára 1
Greenhorn: Greenhorn 3, Dravý stín 6C, Král Kaše 4 (5B SD alt)
Bob: Setrvačník 7A+ (SD), Vzesupné proudy 4 (6C SD alt)
Nové kameny: Vzdálený horizont 4, Vidina konce 5A, Slunečná stěnka 3, Jasný áčko 6B, Špatný voči 7A+, Klášterní tajemství 7B, Velký stupy (zůstaly doma) 6A+, Brýlovec 6C+, Kýlovec 6B, Normální cesta 4, Juice box 7C+, Příjemné odpoledne 5C, Jižní spojka 4+
Stěny u brány: Viklavý zub 4, Nateklé dásně 5B, Dřevěný Spotter 6B, Kousavec 5C, Jeskyně 2, Hrana na starce 4+, Druhá míza 5A, Štreka 7A+, Cyril 4, Methoděj 5B, Pokusná spára 6, Horká dlaň 7-, Zpocená záda 6, Učební 3, Poslední hrana 4, Žleb 1, Vyfuněná spára 7-, Spára 4, Nová hrana 5A
Brána: Pulec 3, Žabák 6B, Ropucha 4+, Rakovnická 4+, Schovaná 2, Od Káji 3, Orosené čelo 4, Jemná 3, Padací kout 3, Země–vzduch 5C, Vymetač pavučin 8A, Strážce Brány 6B, Strážce Brány II 7A, Petrovo Padání 6B+, Balanc 7B, Petrova hrana 5A, Prostřední hrana 3, Koutová 2, Pěkná 3
Kůlna: Nadhoz 5A, Past na medvěda 6A+, Past na mamuta 6A, Projekt 8C SD, Dřevník 6A, Rovnání polínek 6A, Useknuté prsty 6A+, Sekyrka 5A
Kometa: Oldova hrana 6C+ SD, Nýt 5B (6A+ SD), Kometa 7C, Kometa II 8A, Trápení 6C, Rampa 7C SD, Tuhoň 7B SD, Vlasatice 5B, Procházka 6+
Perníková věž: Gilotina 6B+, Perníkový dědek 6B+, To neresch! 6C+, Zatni dásně 6C+, Surovec 7B, Technologický postup 7C, projekt n/a, Trojitý bajpas 7A+, Na kolena 5B, Chrastítko 4
Japonsko: Mili 6A, Mikro 7A+, Nanuko 8A/A+, Masáž prstů 7B+, Sušinka 7B+, Jogín 6B, Japonec 5C, Piko 6B+, Mistr má šalinu 6C+, Japonka 5A, Žluťáci 3, Mistr Šaolinu 3
Bětka: Bětčiny pětky 6C, Bětčiny čtyřky 6A+, Желená Lady 8A, Big Lady 8A+, Bětuška 6B+, Kost a kůže 7C, Plochá baterka 7A, Vyplašený Pelikán 5A
Bubák: rope routes Nýt 6(7m), Oldova hrana 4(7m), Procházka V+,A0,6+(8m); boulders Bobr 2, Bubák 5A
Krásnaja plóščaď: Zmije 4, Natašino potěšení 3, Marfuša 6A+, Pragulka 6A, Past na Čermáka 6C, Mauzoleum 6B, Zpátky ni krok 6A, Karel je spárař 7A+
Sociál: Pád na sociální dno 6A+, Ztráta sociálních jistot 4
Soutěska: Rudý gentleman 6B, Rudý péro 4, Židlička 1, Zuby nehty 6B+, Mně je špatně 6B+, Žlábek 5A, Jedovatý plivanec 6A, Rio Negro 4, Podkroví 6C, Za komínem 4
Boulder bar: Šejkr 5B, Brčko 6A+, Deštníček 5C, Ultrapříprdek 5B, Příprdek 5A, Kšilt 7A+, Pod kšiltem 7A+, Lahváč 4, Bezruký rytíř 7A, Masakr 6C+, Dávkovač odvahy 6B+, Na mixérem 5A, Zelené olivy 6C+, Anka Chrastýš 7B, Ajta Krajta 7B+, Přibitá hrana 5B, Přibitej hřebík 6C+, Kulihrášek 2, Strux 7B, Vdolek 6C+, Loupež chytů 7C, Podhmat 4
Kaskáda: Erste Hilfe 6A+, Břit 5C, Kaskáda 6A+, Kaskáda bez spoďáků 6C, Kaskádička 4, Černá krev 6B, Dračí krev 7A, Veduta 7B+, Rok ďábla 7A, Pravá hrana 6A, Retro-hrad 7C, Levá hrana 4+, Kousavaka 6B+, Michalova kaskáda 6A+, Nahoru dolů 5A, Pohoněná hmota 7A, Smyslná vilnost 6C, Odmlouvat se nemá 7A+, Berlička 5A, Parádička 6B, Šaškování na fleku 7A+, Shybařova rozcvička 6B, Keňská zkratka 6C+, Board 6A, Houpací kůň 6B+, Do počtu 5C, Permoníci 4+, Zapadlý vlastenec 6A, Chytač se nesmí bát 6A, Chytač nesmí spát 6C, Pauzička 5C
Aurora: Vaječný Lenin 6C+, Vřsr 6A+, Inscenovaná pohoda 7B+, Arakain 7C+, Inscenovaná nepohoda 7C, Hukot v zádi 6A, Výstřel z Aurory 7A+, Pohoda za komínem 7C, Ruce zla 7C+, Lampiónový průvod 6B+, Lampión 6B, Měsíční růže 7B+, Empire 5C
Zimní palác: Jantar 6B, Black box 8B, Jantarová komnata 5A, Sjezdovka 3, Pjérvyj 3, Drugój 4, Trétij 4, Četvjórtyj 2, Pařeniště 5A, Antilednice 5B
Potěmkin: Potěmkin 5B, Čuriladič 7A+, Čurila Plenkovič 5A, Čurila Potěmkin 5C, Obec roku 6B+
Rozcestník: Tudy jo 3, Scestník 6A+, Megaloman 6B, Megaman 7C+, Kčt 2
Bobří skála: Mix 5A, Fix 6C, Kiks 5B, Superkiks 6A, Mačeta 6A, Plachtění 4+, Křižovatka snů 6C, Tajemství obavy 6B+, Na vahách 5C, Bobrovka 4, Jen jí nešetři 3, Bobří hráz 6C+, Přes kopírák 6A, Přes kopírák II 6A, Bobr 6A, Bobřík 4, Bobříček 2
Polní kameny: Zajíc polní 5C, Myš polní 4, Cestou necestou 6A, Polem nepolem 6C
Sauna: Zpařenej pařmen 5A, Capa Guána 7C, Gril party 6C+, Zbloudilé torpedo 7C+, Samý sádlo 6B, Nicole Sharma loupežník 8A+, Fata horkána 6C+, Telefraf road 7A, Včelařův sršeň 7A, Lubrikátor 5A, Vazelína 7A, Červotoč 6C+, Barbar Onan 5C, Velký chyty 6B, Trdlo 6C, Trdlo direct 7A, Vyšetření 6B+, Kácení 4, Medvídek 5C, Ležák 5C, Dětská plotna 1, Kokotwaschmaschine 5B, Očíčko 5C
Horní stěnky — NO DATA
U populáru: Nepopulár 6C+, Populár 6A, Konec jednoho bříška 5C, Populární traverz 7A+, Pravá hrana 3, Rabasova galerie 6C, Eine kleine Leistenparade 6C, Teď už to víš 4, Solnej sloup 7A+, Pracovní sobota 4+, Rolling stones 7B, Vpravo 4+, Méně než nic 7A, Vzdušné zámky 7C, Vzdušná spára 6B, Vzhůru k výškám 5B, Vzhůru k výškám II 6B+
Březová věž: Pasáček ovcí 6A, Vaškova plotna 4, Plížením vpřed 6B, Bolest 7A, Žalost 7B+, Žiletka v duši 8A, Žalostný traverz 7C, Březová hrana 5A, Hrana komínu 2, Březová kůra 6A, Duel 7C+, Easy 8A, Easy rider 8B, Ta bába už tam ležela 6B, Krásný ztráty 7C/C+, Jak si kdo ustele 7A+, Lomítko 7C, Radar 2
Vrátný: Magický trojúhelník 1, Těžkopádný balet 7B, Propustka 5B, Závora 5C
Pyšná věž: Pyšný posera 6B, Pyšný traverz 6B, Pyšná hrana 7A, Pyšná spára 5A, Pyšná cesta 5B, Pýcha 1
Za smrkovou věží: Zdendovy hračky 7A, Petrovy hračky 7B, Spoter Bodlináč 6A, Skládačka 6A+, Bodlinový traverz 7B, Orvané kotníky 6C+, Levá stěnka 3, Lehká spára 1, Hrb 6A, Doprava 5B, Tam tam 6B
Aquapark: 100 metrů volný způsob 5C, 200 metrů volný způsob 6B+, Brouzdaliště 6A+, Vejmoly 4+, Desolation row 7C+/8A, Zednická tříska 7A, Bibione 7B, Plavčík 6C+, Pláž boy 7B, Tobogán 6C, Vířivka 6A+, Plážový tip 7B+, Vlasy Bereniky 7C, Plytká blitka 5A
Smrková věž: Rodinný výlet 7C, Kůrovec 7C+, Krůpěje potu 7A+, Chuťovkový komínek 2, Pan domácí na Andreje kouká 6C+, Michalův boulder 7A, Meteorista 6B+, Smrková spára 6B+, Elington blues 8A, Kabaret 7C, Vítr v zádech 5B
Nudista: Nudista 6B+ SD, Bedřich Šulista 7A+ SD, Adam 7B SD, Eva 6B+ SD
Rosťov: Velký chyty 2, Mach 3–6C, Red hot chilli pempers 8A, Pan Lištonoš 7A+, Zlatá Katka 7A, Před bouří 5B, Za bouře 6B+, Starý muž 8A
Chata: Kráva na grilu 5A, Kutil Tim 7B+, Pozor liška 6A, Tata 7A, Pat 3, Mat 4, Sádrový trpaslík 5C, Umyvadlo 5A, Lesní školka 4
Já čičina: Pelech 6B, Na střídačku 6B+, Na stříkačku 3, Já 6C+, My jsme kamarádi s Čičinou 7A, Čičina 6A+, Čičinka 4+, Zvýšená hemživost 5A, Kokotální humor 7A, Sejra za ráfkem 5A, Mastínek 3, Honínek 4+, Klíťa Jíťa 3, Postelové drama 6A+, Píp šou 6A, Drobnůstka 5C, Kompromis 5C, Bigbítový dunění 7C, Ranní káva 6C+, Pro Radka 6B, Pro Hanku 4, V kaňonu 4+, Německý socialismus 6A
Penis — NO DATA
U penisu — NO DATA
Komáří sídliště: Bzzz 6A, El comar passa 6B, Sosáček 6C, Komáří píseň 6B, Nekonečný příběh 7A+, Bzunda 5A, Řehtačka 7C/C+, Vtipe vylez 6B, Vtip 5B, Polácání 5B, Díra jak trám 6A, Mechový důlek 5A, Vlnky 4+, Chrochtání 6B+, Vizitky 6A+
Chlap: Klučina 5A, Chlapíček 3, Přelézt znamená přežít 6A, Grand hotel 7C+, Holá hruď 6A
Zoofil: Se slepicí 6A+, S kozou 7A, Hlemejždě mezi hejždě 7B, S ovcí 7A+, S medvědem 6A
Jindrova skála: Jindrova plotna 3, Jindrova spára 3 (5A SD), Dírky 6A (6B SD), Tátova plotna 6A, Lihová slepota 7C, Tátova hrana 5C (6C+ SD), Jindrova hrana 3, Maminčina hrana 4+, Hořící škola 6B (7C SD), Škola hrou 6A (7A+ SD), Spára 2, Škola malého stromu 5A
Vemeno: rope Horká dlaň 7-(7m), Hrana na starce 4+(8m), Pokusná spára III,A1,6(7m), Učební 3(12m), Vyfuněná spára 7-(8m), Zpocená záda 6(8m), Žleb 1(15m); boulders Masage vemene 3, Krutibrk 6B+, Mladá mlíkařka 6A, Direkt 6C, Vytavaný cecky 4, Struk 5C, FC Mlékojedy 3, Pod krávou 5B, Brynza 5A, Moje první laktace 7C+, Mléčná dráha 8A/A+, Dojná 5C, Plný kýble 3, Prázný kýble 2
Televize: Žebříček 5C, Štípaná 5C, Legrácka 5A, Bez legrace 7C, Spoďák 5B, Hop do díry 5A, Zet 6B+, Přepni to 6C+, Křeslo pro hosta 7A
Ovladače: Pohovka 1 (6B SD), Gauč 3, On 6C SD, Olizovač země 6B+, OFF 6A SD, Křesílko 1, Rodinná pouta 7B SD, Krváček 2, Drasťáček 4 SD, Masakřík 5B, Pohádka 1
Ostrovy: Rybí prsty 4, Křehká krása 6B+, Slaneček 3, Sestupovka 1, Stěnka 1, Kýl 5B, Strážní koš 4, Braun 6C, Muréna 7C, Ganze houses 7B+, Pravá hrana 2, Velký ostrovní traverz 7B, Malý ostrovní traverz 6B+, Ostrovní spára 5C, Příliv 5C, Odliv 4+, Karlův kondor 7B, Zvratky naší matky 7A, Sračky naší mačky 6C, Ostrůvek 5A, Nápad 5B, Vypíchlý voko 4, Kulhavej hnát 5C, Ustřelený koule 3
Gynekolog: Gynekolog 5B, Peříčko 6C, Erotoman 7A+, Sexy Boy 6A+, Laskání 6B+, Obskočený skokan 6B, Vibrující špeky 5A, Pošuk 6A, Pošuk traverz 6B, Slídil 5A, Raněný superman 7B+, Raněný superman direkt 7C, Long Vehikl 6A+
Mezi stromy: Prořezávka 5A, Levá hrana 4, Levý výlom 6A+, Pravý výlom 6A+, Lištárna 6C, Nad dopisy posluchačů 7A+, Za stromem 6A, Jedlá soda 7B, Přes díru 3
Čepice: Struktury 3, Z boku 5B, Nic moc 6A, Pepek Náhrobník 7A, Prej lehký 5A, Sobotní 4, Krajní 4, Lehký 4+, Dobrý lov 5B, Kloboučku hop! 6A+, Bez klobouku bos 7A+, Masáž 7B+, Čepice 6C, Spodní nudle 7A, Horní nudle 5C, Kšiltovka 7A, Hájenka 4+, Hájení 4+, Háj 4+, Ha je to 4, Hej na to 6B+, Haj haj husy 4 (+traverse variants: Levý/Prostřední/Pravý spoďák, Mazlivý traverz)
Výtah: Levá hrana 4+, Morpho 5C, Pravá hrana 5B, Prnďa 4, Výtahový traverz 6A+, Výtah 5B, Údolní stěnka 3, Údolní hrana 4, Spáry 2
Rodinka: Stropík 5A, Koza Nozdra 6A, Pravá trojka 3, Levá trojka 3, Jednička 1, Kanta 5B, Rodinný podnik 6B, Tělesný pink ponk 6A, Ze sedačky 6A, Taťulda 5A, Maminka 4, Synáček 3, Cérečka 4, Citovečka 5B, U komína 4, Akorát do ruky 5A, Mezi stromy 6A, Sokolíček 4+, Ščénečka 4, Antiperle 5C
Pětky: Sandálovka 5B, Salámovka 4+, Sandálová stěna 5B, Sandálová plotna 5A, Přebíračka 6C+, Poslední stěnka 5B, Jehlánek 5A, Jedovka 5A, Ostrá šestka 6A+, Peprná pětka 6A, Tvrdá trojka 5A, Surovina 6B+
U vany: Shybánek 6A, Opalovačka 4+, Upalovačka 4+, Spára 3, Bojler 5C, Baterie 5C, Mys naději 7B+, Modrý obzor 6C, Vana 6B, Vanový traverz 6C+, Hrana vany 6B, Vyvanění 6B, Slunečníček 6A, Lesní plotna 4, Lesní spára 3, Cuk 7A+, Cukavá spára 5A, Velký chyty 6A, Goroděj 7A+, Medvědí tlapa 6B, Medvědí hrana 5B, Šupito 5C, Rozlučkový věčírek 4, Úplný závěr 3

## Summary of gaps
- theCrag essentially inaccessible (403 / JS shell). Only Větrná hůrka's sub-area route counts and Strážce's 2 routes recoverable.
- ČHS boulders with no retrievable route table: Bobky (Podzimní věž); Žraločí ploutev, Zub (Vyhlídková skála); Horní stěnky, Penis, U penisu (Brána).
- ~145 of ~149 named boulders across these 4 sectors have full name+grade lists.
# Petrohrad bouldering routes — Pod hradem and Skalní město

## Method and blockers
- theCrag (all 4 URLs tried) returned HTTP 403 on every attempt — no theCrag data retrieved for either sector.
- ČHS (horosvaz.cz) worked: sector page (skaly-sektor-960) → extracted all 52 named-boulder sub-page links → downloaded and parsed all 52 boulder pages.
- Every boulder's route count cross-checked against ČHS's own sector total: **all 52 boulders matched exactly — 401/401 routes accounted for.**
- Grades written as "RP <number><A/B/C>" per ČHS's own column label — reported exactly as shown, not asserting which formal scale it maps to.
- Only one starred route in the whole sector: "Pružina" (Trio boulder) — RP 7B, 5★ (1 vote).
- theCrag/task brief said ~386 routes; ČHS's own count is 401 across 52 boulders — flagging the discrepancy, not reconciling it (theCrag unreachable to check).
- Two routes explicitly ungraded by ČHS itself (RP ??/RP ???), one route (Údolka, Dekáč) has no grade at all — confirmed against raw HTML, not a parsing gap.

---

## Sector: Pod hradem (ČHS sector 960) — 52 boulders, 401 routes

### Stopařka (7)
Stopařčiny boule 5C | Stopařova kdoule 6A+ | Prasklá guma 5B | Kampa slečinko? 3 | Vojetá 4 | Úchyl 5B (SD) | Znásilněná 5C

### První (6)
Kosinec 4 (SD) | Mrazivec 5A (SD) | Paranoid 7B+ (SD) | Chladivec 5C (SD) | Bouláč 3 | Náhorní 4 (SD)

### U paraboly (15)
Jasoň 3 (5A SD) | Drsoň 7B (SD) | Messer 6A (6C SD) | Parabola 7A+ | Hyperbola 7B+ (without left arête) | Prdél 5C | Vánoční romance 8A (CH) | Rotterdam 6B+ | Bok 4+ | Kominík 5B (SD) | Parádní hrana 6A | Be Gentle 7A | Kuchyňský robot 6C (7A SD start left) | Ježíšmarjá 4 | Oldův nýt 7- (6m, FA Olda Löw ~1986)

### Skalní město - levá část (7) — part of the informal "Skalní město" zone
Drak Mrak 3 (6m, FA Resch brothers ~1990) | Fraktura 8 (6m, FA Resch brothers ~1990) | Šarapanov 6B (SD) | Kuzma 6A (SD) | Vypadávací 4 (7m, FA Löw ~1986) | Varianta 4 (7m, FA Löw ~1986) | Komínek 3 (7m, FA Löw ~1986)

### Dubová stěnka (10)
Dubová stěnka 4+ | Na poslední chvíli 6B | Č.140 6B+ | Heavy Boson 6C | Ztracený komín 2 (5m, FA Löw ~1986) | Mrtvý jezdec 5B | Živý jezdec 6A | Válka spoďárů 6A (SD) | Morfíčko 6A+ | Splněno 6B+

### Petronel (10)
Petrovy hračky 2 (SD) | Spárečka 5B (SD) | Hranečka 5B (SD) | Ještě jedna hranečka 3 (SD) | Plotýnka 2 | Petrova hra 5A (SD) | Spára 3 (SD) | Oblák 5A | Sekyrka 6C (SD) | Topůrko 3

### Okrajové kameny (4)
Pilířek 3 | Nora 4 (7A+ SD) | Boční 4 | Poslední (ungraded per source)

### Skalní město - horní část (10)
Dlouhá cesta 5 (10m, FA Resch brothers + Mára Beke ~1990) | Jesenickej rychlovlak 6+ (8m, FA P.Resch 1995) | Komáři, ochutnejte Rešíka 8 (10m, FA Z.+P. Resch 1995) | Neznámý kout 3 (6m) | Plazivá cesta 1 (10m) | Skalní brána 6+ (6m) | Teplej vítr 4 (8m) | Točitá cesta 2 (10m) | Zázrak žuly 3+ (8m) | Zimní spára 6+ (6m)

### Skalní město - pravá část (10)
Komín 3 | Vlna Johna Gilla 6B | Superlongjohn 7B | Longjohn 7A | Shorbus 7B+ (SD) | Druid 7B (SD) | Návštěvník 7A+ (SD) | Strečová spára 4 (SD) | Nebere 7A (without crack) | Udělej to do díry 6A+ (without arête)

### Průzkumník (14)
Sahara 6A (SD) | Zelený barety 6A | Operace Bára 7A | Doleva 6B (SD) | Švimbád 6B (SD) | Klasik 6A | Malík 5C (SD, without crack) | Ve spáře 4 (SD) | Hranéčka Krtéčka 5B (SD) | Pravá hranka 4 (SD) | Levá hranka 5A (SD) | Dětík 5B (SD) | Veverčí mozek 6C (SD) | Střípky štěstí 6B

### Central park (7)
Zelená hrana 3 | Zelená stěna 5B | La parada 6B (CH) | Traverz stará pecka 7A (CH) | Central park 6A (SD) | Centrální stěnka 4 | Pravá stěnka 3

### Dračí sluj (11)
Hobit 4 (5m, FA Löw ~1986) | Drak Šmak 6+ (6m) | Král Elfů 5 (6m) | Hababi 7A (SD) | Filipes 8A (SD) | Boulder madre 6B (SD) | Kloší hlen 7C (SD) | Strážce jeskyně 6B (SD) | Kopí 7A (SD) | unnamed 6A+ (SD) | unnamed 6A (SD)

### Diverzant (1)
Diverzní akce 7A+ (SD)

### Plameny (4)
Fajer 5C (SD) | Plameňák 7A+ | Plamenná spára 3 | Doutnající spára 5C

### Věžák (6)
Normálka 3 | Morálka 4 | Visací zámek 6C+ | Valentýnka 2 | Spárka 3 | Nürnberger Weg 5C

### Dekáč (4)
Teplá deka 6C (SD) | Sokol 5A (SD) | Levá údolka 6A (SD) | Údolka (no grade recorded)

### Boule (5)
Lehárko 6A+ (SD) | Modřina 6B+ (7A SD) | Boule 6C | Boule SD 7A+ | Die boule 7A (SD)

### Zídka (7)
Zedníček 2 | Zídka 4 | Svršek 5C (6C+ SD) | Na hrazdě 5B | Nad perlou 3 | Horní hrana 5C | Perla boulderingu 6B+ (SD, sector's only starred route lives on the neighboring Trio boulder, not here)

### Rakovnická stěna (22)
Kluziště 3 | Ztracená plotna 4+ (6m) | Finále 4 (6m) | Za stromy 3 | Dvoufázová 5 (7m) | Rakovnické hrátky 4+ | Ding dong 6A | Let sokola 5 (10m) | Máma 7- (10m) | Nejistá budoucnost 5A | Hřebenovka 3 | Šípková spára 4 (10m, FA Löw ~1986) | Oldovy variace 7- (10m, FA Löw ~1986-90) | Sunday Morning 7A | Síla žít a milovat 8 (10m, FA Resch brothers 1995) | Dědské hřišťátko 2 (8m) | Převislý kout 4 | Za stromy 3+ (5m, FA Resch brothers + Beke ~1990) | Rakovnické hrátky 5 (5m) | Velký skok 4+ | Vyznavači ohňů 8 (8m, FA Resch brothers 1995) | Vivat Fiat 5 (8m, FA Beke+Resch 1995)

### Staré město (6)
Hrana zleva 2 (4 SD) | Černá vdova 5A | Hrana zprava 3 | Šupinky 1 | Díra a dírka 1 | Stará panna 5B (SD)

### Dětský kámen (5)
Spára a díry 1 (1 SD) | Cvičná hrana 2 (3 SD) | Sokol 1 (2 SD) | První třída 3 (SD) | Druhá třída 4+ (SD)

### Lahváč (5)
Koleňák 5C | Lahváč 7A (SD) | Kořeňák 5B | Dubák 4 | Nízký doubák 5B (CH)

### Puberťák (10)
Laskání 3 | Teenager 5A | Jemně jí ji mni 6B+ (SD) | Usekni mi nohu 7A+ (SD) | Big uns 7B (SD) | Už budu 6C | Jemně mně ho mni 7B (SD) | Akné 5B | Dveřník obecný 7C+ (CH) | Rutina 2

### Nad puberťákem (4)
Ostrá hrana 2 (4 SD) | Od stromku 1 | Na hranu 3 | Bez hrany 3

### Štít (6)
Traverz vrchem 5B | Z lišt 6A+ (CH) | Štít 2 5A (CH) | Zatni 6B (SD) | Příběh rytíře 6B (7A SD) | Drátěná košile 6B+ (SD)

### Vip (9)
Zazobanec 7A (SD) | Kanagom 7C/C+ (SD) | Lóže 6B+ (SD) | VIP 6B+ (7B+ SD) | Gauner 5B (SD) | Hranka 1 | Rypák 3 | Řešeto 3 | U stromu 3

### Vlnka (2)
Vlnka 2 | Tsunami 4 (SD)

### Prezident (9)
První dáma 6A | Standarta 7A (7B SD) | Dušek na hrad 6B | Pupendo 7B+ | Jirka 8A | Vašek 7C+ | Tatíček Masaryk 7A | Prdelák nabodák 5A | Zastávka 6B (SD)

### Trio (11) — sector's only starred route
Bobek 5C (7A SD) | Plácaná 7B (SD) | Au 7A+ (SD) | Lambada 6B (7B+ SD) | Rošáda 6B+ (7C SD) | Kapitán Hák 6C (SD) | Takže cože 6A+ (SD) | **Pružina 7B — 5★ (1 vote), CH** | Dužina 5C | Úžina 5A | Družina 5B (6A+ CH, 7A SD)

### Pod Triem (6)
První 3 | Druhý 1 | Jack Rozprašovač 6A+ (SD) | Třetí 4 | Čtvrtý 4 | Pátý 2

### Teletubbies (10)
Tele 1 | Lála 6A+ (SD) | Po 7A (SD) | Tinky Vinky 6B+ (SD) | Dipsy 6A | Pudink 1 | Tuly tuly 2 | Noo Noo 6B (SD) | Žlutý uši 4 | Modrá řiť 2

### Tykev (6)
Rampa 5C (SD) | Hnátolam 6C+ (SD) | Dutiny 5A | Meloun 6A (7A SD) | Jezdící schody 6C+ (SD) | Tykev 5B (6A+ SD)

### Střecha (7)
Lominoha 4 (6m, FA Löw ~1986) | Mravenčí 3 (8m) | Strašná 3 (8m) | Střecha IV,A1 aid (10m, pitons) | Šílená 6+ (8m, orig. A0) | Vencova hrana 4 (6m, FA Jícha+Löw) | Zelená cesta 4 (8m)

### Jehlan (6)
První 3 | K narozeninám 3 | Brnkačka 3 | Jižní 2 | Zadarmo 2 | Divná 3

### Pueblo (11)
Hrob neznámého boulderisty 7C+ (SD) | Tomb Rider 8A+ (SD) | Grace Runners 8B (SD) | Rudý péro 7A (SD) | Aoteora 4 (SD) | Indiánská spára 2 (3 SD) | Pončo 5B (6B SD) | Makču píču 5C | Hrůzovládce 5B | Aztécké zlato 3 | Tomahawk 5A

### Ledoborec (4)
Ledák 6C (CH) | Borec 7B (SD) | Ledoborec 7B+ (SD) | Eistea 6C (SD)

### Plotýnka (3)
Levá hrana 2 | Středem 1 | Pravá hrana 1

### Vrchcáby (7)
Skokan zelený 6A+ (CH) | Sněhulák 6B (SD) | 666 7B+ (SD) | Hra v kostky 6A+ (SD) | Vrchcáby 7C (SD) | Malá postupka 7B (SD) | Velká postupka 7C+

### Pařez (4)
Kůra 7A+ | Kůrovec 7A (SD) | Drnec 5A (6A SD) | Drvoštěp 6A (7A SD)

### Visuté zahrady (4)
Lesní manekýn 7C (SD) | Visuté zahrady 6C+ (SD) | Semiramis 7B+ (SD) | Tortilla 7B+ (SD)

### Diamant (2)
Diamant 7B (SD) | Safír 5A (SD)

### Kuchyně (17)
Hořící hněv 6A (7C/C+ SD) | Nad kotlem 4 | Sporák 6B+ (SD) | Pekáč 4 | Vildova kroková variace 6B (CH) | Traverz nad kotlem 6C+ (SD) | Válka s dorty 7B (SD) | Okluzní opruze 3 (7A+ SD) | Opruzní okluze 4 (6A+ SD) | Šlapeto 1 | Hupsa hejsa 7A | Rozsekáček 6B | Jamky 5A | Hrana spáry 2 | Pod dubem 2 (4+ SD) | Za dubem 3 (6C SD) | Bijící srdce 6B+ (SD)

### Loupák (4)
Loupačka 5B | Ementál 3 | Hrana ementálu 4 | Přes díru (ungraded per source)

### Cestář (9)
Cestářská 2 | Výlet 4 | Krok 1 (3 SD) | Nočníček 1 (4 SD) | Ušní bubínek 4 (6A SD) | Přes cestu 1 | Mytí patníků 5B (6C+ SD) | Záplatování 6A | Sekání trávy 2

### Záhrab (2)
Záhrab 7A (SD) | Zákopčaník 6B (SD)

### Kapsa (12)
Kapsa 4 | Brašna 5B | Tlumok 4 | Na hraně (ungraded, SD) | Za hranou (ungraded, SD) | Plotna v kapse 4 | Batůžek 5A (SD) | d'Artagnanova hrana 3 | Mars Bitches 5B | Black Bush 6B | Kapsín 6A+ (SD) | Sarkafarka 6C (SD)

### Kráska (3)
Hrana 2 | Falbalas 5C | Nedobytná 5B (SD)

### Jing a jang (2)
Jak jinak 5B | A nebo tak 1 (3 SD)

### Plynárna (9)
Pravá půlka 4 | Karma 6C+ (7C SD) | Pšouk 5C | Ipcho 6A | Hrazda 5C | Sarin 7B+ (CH) | Zimní kout 1 | Zimní hrana 2 (6A+ SD) | Kanál 5B (SD)

### Elektrárna (15)
Bílá paní 3 | Kastelán 5C | Řeka potu 7- (6m, FA Löw ~1986) | Dukovany 5B (6B+ SD) | Tušimice 7A (SD) | Vysoké přepětí 7A+ | Endoprotéza 7A (SD) | Zkrat 7C+ (SD) | Kombinace 7C+/8A (SD) | Generátor 6C+ (SD) | Izolátor 7A+ (SD) | Temelín 5A (6B SD) | Zelená komnata 6+ (8m, FA Löw ~1986) | Varianta 6+ (8m, FA Löw ~1986) | Dále od hradu dále 3

### Vodárna (5)
Hradní spára 6 (6m, FA Löw ~1986) | Cesta za Julií 6+ (8m, FA Löw ~1986) | Vodovod 5B | Ku hradbám dále 5A | H2O 5A (SD)

### Lipová skála (26) — largest boulder in the sector
Rajbáček 4 | V díře 5A (SD) | Přímo 3 | Kulatá hrana 4+ | Zvedej se 5A (SD) | Vztyk 4 (SD) | Ve stínu pípy 5B | Ve stínu lípy 5A | Hranka 2 | Dírkáček 4 | Ze strany 3 | Plotýnka 3 | Pravý komín 4 | Levý komín 4 | Lagrande 5A | Legendre 5A | Laplace 5A | Křemílek 2 | Vochomůrka 2 | Šmirgl 6A | Viklanová spára 3 | Toč se u tyče 5A (SD) | Peep show 5A | Bordelmamá 2 | Vzlínačka 5C | Po schodoch 5A

---

## Skalní město (informal sub-zone of Pod hradem — not its own ČHS sector)
Three of the 52 boulders above form this informal zone: "horní část" (10 routes), "pravá část" (10 routes), "levá část" (7 routes) = 27 routes total. Both theCrag sub-area URLs given for this returned the same 403 block as the main Pod hradem page.

## Bottom line
- Pod hradem: 52/52 boulders, 401/401 ČHS-claimed routes captured with name+grade. theCrag's ~386 figure unverifiable (site blocked).
- Skalní město: fully covered via ČHS (27 routes across all 3 parts).
- Only one starred route in the entire sector: Pružina (Trio), 5★/1 vote.
# Petrohrad Bouldering Data — Hřbitovní kameny, Kamenné srdce, Potoční kameny

## Fetch blockers
- theCrag returned HTTP 403 on every direct WebFetch call for both areas; a text-proxy (r.jina.ai) also failed since theCrag is a JS-rendered SPA.
- Potoční kameny workaround: rendered in an actual browser (Claude Browser tool) to execute the JS — got complete data for all 101 routes.
- Hřbitovní kameny: fell back to ČHS (sector page + all 25 boulder detail pages).
- ČHS pages fetched via WebFetch (automated summarizer, not raw HTML) — a few route names on some boulders came back unresolved ("???"), flagged inline. "RP" prefix on ČHS grades is a UI column label, not confirmed part of the grade itself.

---

## Sector: Hřbitovní kameny
Source: ČHS `horosvaz.cz/skaly-sektor-959/` (25 named boulders). theCrag `area/1913105328` blocked (403), not used.
Sector totals per ČHS: 25 boulders, 158 routes — per-boulder counts below sum to exactly 158, coverage complete.

### Špunt (3m)
Šampáno 6A+ | Špunt 4

### Cihla (4m)
Hrana cihly 1 | Bacha mistr 5B | Bobík 7A (SD, sidepull start slightly right) | Porobeton 4+ (5C SD variant) | Beton 4+ (5B SD variant) | Konec sváči 5A (SD) | Vodováha 6C | Rovnováha 7A+ | MTR direkt 5B | Malý trhlinový traverz 4+ (traverse along crack rightward) | Velký cihlový traverz 7B (ends at Hrana cihly finish) | Zednický učeň 2

### První skála (8m) — largest boulder, 23 routes
Kamenáč Bill 5+ (left around two bolts) | Spára 3 (crack right, between ring-bolted routes) | Hrana 4 (right wall, through ring) | Krátká 5 (left wall, ring) | Petrohradská 4+ (crack right of "Lachtan") | Lachtan 7- (mid-wall, two bolts) | Komínek 3 (2nd crack-chimney from left) | Prolézačka 3 (1st crack-chimney from left) | Přímá varianta 6 (direct-bolt variant of Kamenáč Bill) | Klasická petrohradská 5 (far-right wall, ring) | 3 unnamed lettered variants a–e not extracted | Gagarinův bratr 6A (SD) | 1 unnamed lettered variant g not extracted | Spárka 4+ | Spojovací varianta 7 (traverse/connector) | Sokolík 5C | Rozporová 4 | První hrana 1 | Druhá hrana 3
(Recommend spot-checking horosvaz.cz/skaly-skala-13324/ directly if exact names/count matter — some entries unresolved.)

### Shit (2m)
Traverz za hovnem 6A | Oh, shit 5C

### Terasy (3m)
Jasná hrana 4 (variant a, without left stone) | Pseudokout 6C (variant b, without right arête) | Čistá hrana 5B (variant c) | unnamed variant d 6B (SD) | Mrtvý tah 6A (variant e)

### Malý nočník
Dělová koule 7B+ (SD left) | Projektil 7B+ (SD right) | Oběžná dráha 6A+

### Kamenné srdce (3m) — also standalone entry below
Pálivky 7B | Meny 5C (from ledge + undercling) | Kombinace 6A | Sid 5C | Vlk 6B | Vlčí mlha 6C (from side-pull) | Lala 5A | Pou 6A

### Kamenné moře (5m)
Kde jsou ty nejty? 6C+ (without right crack) | Já padam padámpam 7A (exit slightly left) | Hřbetní spára 3 | 3 unnamed lettered variants c–f: 4 / 2 / 3

### Helma (3m)
Vyhni se parohům 6C+ | Černý sedlo 7A+ (SD direct) | Bílý řídítka 7B (starts left, ends on Vyhni se parohům) | Chyť si mě 6A

### Dalamánek (3m)
Želvuška 5C | Drobné si nech 5B | Podbaba 5A | Perfekta 6A+ | Širočina 3

### Pazourek (3m)
Pazourek 5A | Krystálek 6A

### Kouteček (3m)
Joan 5B | 2lame4name 5B | Tvrdý pečivo 6B (along arête from right) | Rohlík 4 | Santa Muhammad 5C | Muhmad Ali 2

### Chrám (5m)
Al kejda 6C (pos. a) | Levý 6A (pos. b, SD) | Pravý 6A+ (pos. c, SD) | Chceš mít bordel špínu 3 (pos. d)

### Mlynář (3m)
Letem světem 7A (SD) | Mládek 7B (SD) | Sládek 7A+ (SD) | Prášek 6B (SD) | Mlynář 7A (SD) | Vantroky 2 | Trojúhelník 3

### Squat (3m)
Převis 3 | Squater 7B (SD, start in roof, exit right) | Šedý zákal 6C (SD, direct) | Bílá hůl 6C+ (SD, to the right) | Pod stromem 6A

### Prasklý kámen (4m)
Rup 7B (SD) | Zelinkavá 5B | Levák 5C (direct = 6B SD) | Pravák 6B (SD to the right)

### Plachta (4m)
Špek 6B+ (SD) | Plachta 6A+ | Le angle 7A (7A+ SD variant) | Navalovák 5A

### Dětský koutek (3m)
Óper 4 (SD variant available) | Tchýni ne! 3 | Teta na hlídání 5A | Zádama ne 6B+ (SD variant available)

### Beržerak (4m)
Sýr ráno 5B | Siráno 4 (6A SD) | Sir Ráno 5B (5C SD) | Berg Žeryk 5C | Bere ho rak 6C+

### Zadní kameny (4m)
Trhlina 2 | Normálka 1 | Velká stěna 4+ | Velká hrana 5A | Nachová hrana 6C+ (SD) | Nachové plachty 7B (SD, connects Nachová hrana → Nachovec) | Nachovec 5C | Návrat Karla 5A (SD)

### Ohon (3m)
Trpasličí hněv 6A | Ohonění 5B | Sám si ho sám 7A | Nastavená dlaň 5B (without crack on left) | Lačná ústa 5B (without stone on right, 6B+ SD) | Rychle a zběsile I 6C | Rychle a zběsile II 7C (SD) | Mezi kozy 7B+ (SD) | Mezi kozičky 6A+

### Planeta (3m)
Jednička 5A | Dvojka 5A | Trojka 6B (SD)

### Sputnik (5m)
Lunochod 4 (5A SD) | Jančařík 7A (start Lunochod, left) | Magion 6C+ | Remkův návrat 6A | Lajka na smetaně 6B | Červený trpaslík 5C

### Modul (3m)
Havárie 5C | Mezi náma dvouma 7B+ (SD, ends on Lunochod) | Mogul 5A

### Zelená plotna — 17 taller routes, Czech/UIAA scale, 2–10m
Cesta pro Katku 5- (6m, slab left of wall) | Dádova cesta 4+ (6m, right side via cracks to summit) | Dětská 2 (5m, crack far left) | Diagonální 3 (8m, diagonal crack right→left) | Hladká 4 (5m, right block left portion) | Járova cesta 5 (10m, mid-wall start, right crack, piton) | Javorová spára 3 (8m, crack with maple) | Kout 3+ (6m, central corner right block) | Neznámá 5+ (7m, right wall via bolt) | Nová cesta 6 (9m, starts as Javorová, piton+ring) | Radkova cesta 3 (8m, right start of Javorová then Járova to summit) | Traverzová 3 (6m, right-edge traverse left) | Varianta 4 (8m, wall left of Javorová spára) | Varianta 4 (2m, direct piton-to-ring) | Zelená spára 2 (8m, crack right of Zimní kout) | Zimní kout 2 (7m, corner right of Žabí kůň) | Žabí kůň 3 (6m, sharp edge left wall)

Note: ČHS has no star/quality-rating system.

## "Kamenné srdce" standalone
Same boulder as above. Source: ČHS `horosvaz.cz/skaly-skala-13328/`. 3m, in protected area PP Háj Petra Bezruče, climbing unrestricted, authors unknown.
Pálivky 7B | Meny 5C | Kombinace 6A | Sid 5C | Vlk 6B | Vlčí mlha 6C | Lala 5A | Pou 6A

---

## Sector: Potoční kameny
Source: theCrag, retrieved via rendered browser (WebFetch 403'd, plain + proxy). ČHS has NO page for this sector — confirmed against ČHS's full 12-sector Petrohrad list.
theCrag claims 101 routes; all 10 sub-areas / 101 routes retrieved — full coverage.
Grades FB (Fontainebleau) unless marked {UIAA}.

### Boule (9 routes, 3m)
Boule 6C+ (no holds, middle-right, FA 2003) | Die Boule 7A+ (SD, FA 2003) | La Boule 7B+ (FA Resch/Hegr 2003) | Lehárko 6A+ (SD, right of Perla Boulderingu, FA 2003) | Los Boulos 7B (FA Resch/Hegr 2003) | Malá Boule 2 (uses all holds) | Modřina 6C (left, small hole) | Velká Boule 7B+ (FA Resch/Hegr) | Velká Modřina 7A (exit via Modřina)

### Dekáč (4 routes, 3m)
Levá Údolka 6A (SD, right of Sokol) | Sokol 5A (SD, falcon-hold, middle) | Teplá Deka 6C ★★ (SD, roof to great exit) | Údolka {UIAA}4 (from standing)

### Plameny (4 routes, 4–5m)
Doutnající Spára 5C (crack right, FA Sika 2007) | Fajer 5C (SD, FA Sika/Tvrdík 2007) | Plameňák 7A+ (FA Sika 2007) | Plamenná Spára 4 (crack, blue arrow, FA Sika 2007)

### První (6 routes, 3m)
Kosinec 4 (SD, FA Resch 2002) | Mrazivec 5A (SD) | Paranoid 7C (SD, FA Resch 2004) | Chladivec 5C (SD) | Bouláč 3 | Náhorní 4 (SD, opposite side from stream, FA Resch)

### Rakovnická stěna (23 routes, mixed bouldering+sport, 3–7m)
Kluziště 3+ (slab far left, FA Fuka 2007) | Za Stromy 3 (also 3+ UIAA) | Rakovnické Hrádky 4+ (also 5+ UIAA) | Ding Ding 6A (FA Sika 2007, don't climb wet) | Nejistá Budoucnost 5A | Sunday Morning 7A (FA Sika 2007) | Hřebenovka 3 | Převislý Kout 4 (FA Resch 2004) | Velký Skok 4+ | Hifi 6B+ (FA Sika 2007) | Nurnberger Weg 5C | Ztracená plotna {UIAA}4+ (sport, 2 pitches) | Finále {UIAA}4 (sport, 2 pitches) | Dvoufázová {UIAA}5 (sport) | Let sokola {UIAA}5 (sport) | Máma {UIAA}7- (sport, 2 pitches) | Šípková spára {UIAA}4 (sport) | Oldovy variace {UIAA}7- (sport, 3 pitches) | Síla žít a milovat {UIAA}8 (sport, 2 pitches) | Dědské hřištátko {UIAA}2 (sport) | Vivat fiat {UIAA}5 (sport) | Rakovnické hrátky {UIAA}5 (sport) | Vyznavači ohňů {UIAA}8 (sport)

### Skalní město (17 routes, 6A–7B)
Barokní Plácaná 6C | Bezruč 6A | Cesta č. 140 6B+ | Dubová Stěnka 4+ | Heavy Boson 6C (traverse) | Kánojista 6A+ | Kánojistka 6A+ | Kuzma 6A | La Dlaňáda 7B | Mrtvý Jezevec 5C | Na Poslední Chvíli 6B | Půlměsíc 6B | Sahara 6A | Šarapanov 6B | Švimbád 6B | Válka Spoďáků 6A | Zelená Paráda 6B
(NB: this is theCrag's own "Skalní město" sub-area under Potoční kameny — see main research report for the sector-identity ambiguity caveat.)

### U Paraboly (23 routes, 3–5m) — includes area's hardest lines (8A/A+)
Jasoň 3 | Jasoň SD 5A | Drsoň 7B (SD) | Messer 5C (FA Resch/Hegr 2002) | Messerschmidt 7A (SD, FA Resch/Hegr 2002) | Parabola 7A+ (FA Resch/Hegr) | Hyperbola 7B+ (FA Pelikán 2006) | Hyperbola SD 8A+ (FA Džangli 2022) | Bolid 8A (FA Džangli/Vilda/Majkl 2022) | Bolid SD 8A+ (FA Džangli/Vilda 2022) | Balistická křivka 7B (FA Džangli 2025) | Balistická křivka SD 8A/A+ (FA Džangli/Vilda 2022) | Prdél 5C (FA Resch/Hegr) | Vánoční romance 8A (FA Resch 2015) | Rotterdam 6B+ (FA Sika 2005) | Bok 5A (FA Resch/Hegr) | Kominík 5B (SD, FA Resch/Hegr) | Parádní Hrana 6A (key mat spot, FA Resch/Hegr) | Be Gentle 7A+ (FA Sika 2005) | Kuchyňský Robot 6C (FA Resch/Hegr 2004) | Kuchyňský Robot SD 7A (FA Resch/Hegr 2004) | Ježíšmarjá 5A (FA Burgoon 2005) | Oldův Nýt 7 (sport, 6m, 1 pitch, highball option)

### Věžák (6 routes, 3–4m)
Morálka 4 (FA Sika 2003) | Normálka 3 (FA Resch) | Nürnberger Weg 5C (SD, FA Weyh 2006) | Spárka 3 (FA Fuka 2006) | Valentýnka 2 (FA Sika 2006) | Visací Zámek 7A (FA Resch 2002)

### Zídka (8 routes, 2–4m)
Horní Hrana 6A (traverse left, exit via Svršek) | Nad Perlou 3 | Na Hrazdě 5B (traverse) | Perla Boulderingu 6B+ ★★★ (sector's top-rated classic — SD via wedged boulder) | Spodek 6C+ ★★ (SD, sit start, jump to crack) | Svršek 5B | Zedníček 2 | Zídka 4

### Climbing Wall (1 route, sport, 10m)
Unnamed 1 (sport, 10m, 2 pitches — "Information needed" on theCrag)

Coverage check: 9+4+4+6+23+17+23+6+8+1 = 101 routes — matches theCrag's claimed total exactly.

---

## Sourcing summary
| Sector/feature | Source | Coverage |
|---|---|---|
| Hřbitovní kameny | ČHS (theCrag 403'd) | 25/25 boulders, 158/158 routes |
| Kamenné srdce (standalone) | ČHS | 8/8 routes |
| Potoční kameny | theCrag via rendered browser (no ČHS page exists) | 10/10 areas, 101/101 routes |
# Bouldering/Route Data — "Josemit" Sector (Petrohrad, Louny district)

## Source status
- **theCrag** (`thecrag.com/en/climbing/czech-republic/area/1913105460`): Blocked — HTTP 403 on every attempt. Nothing below sourced from it.
- **ČHS (horosvaz.cz)**: fetched and parsed directly from raw HTML.

Sector 961 is named simply "Josemit" in ČHS (the "Malý/Malej Yosemite" name is the climbers' colloquial nickname, not a formal ČHS label), within area "Petrohrad a okolí" (ID 143).

## Sector 961 "Josemit" — full boulder list
6 rocks named "Josemit a–f" plus ~22 other individually-named rocks. Of the Josemit-lettered rocks, only c, d, e, f have routes entered; a and b are placeholders with zero routes.

| Boulder | ČHS ID | Routes |
|---|---|---|
| Josemit a | 16138 | 0 — no route list |
| Josemit b | 16127 | 0 — no route list |
| Josemit c | 16128 | 17 |
| Josemit d | 16129 | 18 (numbering skips "5") |
| Josemit e | 16130 | 12 |
| Josemit f | 16131 | 12 |

**Vajíčko / "Vejce"**: OSM node "Vajíčko" (50.1190194, 13.449222) matches ČHS rock "Vejce" (ID 13427, 50.119033, 13.449433 — same spot). Same rock, different informal name ("egg" vs. diminutive "little egg"). 9 routes, French/Font grades (unlike Josemit a–f which use UIAA).

### Josemit c (ČHS 16128)
| Route | Grade (UIAA) |
|---|---|
| Mozkové prázdniny | RP 7- |
| The Wall | RP 8- |
| Trhák | RP 6+ |
| Traverz nad bivakem | RP 7 |
| Chvilka radosti | RP 7+ |
| Kozí dech | RP 7- |
| Hořovická | RP 6 |
| Zbyškova díra | RP 4 |
| Pegas | RP 6+ |
| Speleokomín | RP 4 |
| Březová | RP 4+ |
| Henětin traverz | RP 5 |
| Klikatá | RP 7- |
| Metronom | RP 9+ |
| Varianta po hraně | RP 6+ |
| Varianta spárou | RP 6 |
| Háčková | RP 6+ |

### Josemit d (ČHS 16129)
| Route | Grade (UIAA) |
|---|---|
| Henětin traverz | RP 5 |
| Klikatá | RP 7- |
| Háčková | RP 6+ |
| Zděšená ovce | RP 8- |
| Varianta koutem | RP 5 |
| Hopova varianta | RP 5+ |
| Svobodné vánoce | RP 5+ |
| Oblíbená | RP 4 |
| Sólová | RP 4+ |
| Nirvana | RP 7 |
| Prvomájová | V, A0, RP 7+ |
| Varianta | RP 8- |
| Kaskosupermuf direkt | RP 8+ |
| Varianta Kaskosupermufa | RP 8- |
| Pokušení | IV, A1, RP 7 |
| My day | RP 7+ |
| Dramatická hrana | RP 6+ |
| Brutopýr | RP 8+ |

Note: routes 1–3 duplicate the last 3 of Josemit c (shared boundary lines), and the last 2 duplicate the first 2 of Josemit e.

### Josemit e (ČHS 16130)
| Route | Grade (UIAA) |
|---|---|
| My day | RP 7+ |
| Dramatická hrana | RP 6+ |
| Superhrana | RP 7- |
| Brutopýr | RP 8+ |
| Ermitáž | RP 9 |
| Hozená rukavice | RP 8 |
| Vyzyvatelská | RP 6+ |
| Odštěpy | RP 5 |
| Ztracená | RP 2 |
| Prolejzačka | RP 3 |
| Kyselej vokurek | RP 8 |
| Krvavá očka | RP 7- |

### Josemit f (ČHS 16131)
| Route | Grade (UIAA) |
|---|---|
| Svobodné vánoce | RP 5+ |
| Nirvana | RP 7 |
| Sólová | RP 4+ |
| Pohled medúzy | RP 6+ |
| Direttissima medúzy | RP 8- |
| Vzdušná | RP 3+ |
| Dvojka | RP 2 |
| Prostřední | RP 6+ |
| Dotek medúzy | RP 6 |
| Překrok | RP 3+ |
| Odštěpy | RP 5 |
| Ztracená | RP 2 |

### Vejce / "Vajíčko" (ČHS 13427)
| Route | Grade (French/Font) |
|---|---|
| Vaječný koňak | 6B+ |
| Pukavec | 7A+ |
| Salmolenka | 5A |
| Kaliméro | 6B+ |
| Majonéza | 5A |
| Hemenex | 6A |
| Kraslice | 6A |
| Tajemství iluze | 7C+ |
| Vejcovod | 6B+ |

## Notes
- No star ratings on any of the 7 rock pages (all "0 hlasů").
- Route descriptions exist in ČHS UI but load via JS interaction, not present in static HTML — none captured.
- theCrag data entirely missing (403 block).
- All grades/names sourced directly from parsed ČHS HTML, nothing invented.
# Bouldering Routes — Vlčí kopec, Kosobody, Bukov (Petrohrad area)

**Sources used:**
- **ČHS (horosvaz.cz)** — primary source for all route/grade data below. All three sector pages and all 40 individual boulder detail pages were fetched successfully.
- **theCrag.com** — confirmed via web search that Petrohrad, Kosobody, and Bukov exist as area pages on theCrag (e.g. `thecrag.com/en/climbing/czech-republic/area/1280065356` for Kosobody), but direct `WebFetch` of theCrag pages returned **HTTP 403 Forbidden** (bot-blocked). No route-level or star-rating data could be retrieved from theCrag — this is a fetch blocker, not an absence of data on their site.

Grading notation on ČHS is "RP" (Czech scale, roughly UIAA for trad/slab lines, Font-style for boulder problems — the site mixes both under "RP" depending on route type). No star/quality ratings are shown on any ČHS boulder page for these three sectors (all show "0 hodnocení" / no ratings), so the "Stars" column is omitted — treat its absence as a confirmed gap, not an omission on my part.

---

## Sector: Vlčí kopec
ČHS sector page: https://www.horosvaz.cz/skaly-sektor-966/ — 19 named boulders

### 1. Obětní kámen (3 m) — [skala-13622](https://www.horosvaz.cz/skaly-skala-13622/)
| Route | Grade | Notes |
|---|---|---|
| Dvojka | 2 | |
| Spárka | 3 | |
| Převísek | 3+ | |
| Kapsička | 3 | |
| SV Hrana | 4+ | |
| Jemná | 3+ | |
| Šikmá jemná | — | piton (skoba) |
| Vlčí spára | 4 | |
| Cesta broučků | 6- | ring (kruh) |
| Vlčí vytí | 5+ | ring (kruh) |
| Borovicová | 3 | |

### 2. Pod věží (6 m) — [skala-13632](https://www.horosvaz.cz/skaly-skala-13632/)
| Route | Grade | Notes |
|---|---|---|
| Buková cesta | 5 | 7 m, trad |
| Buková spára | 3 | 7 m |
| Bukový komín | 2 | 6 m |
| Komínek | 3 | 7 m |
| Přepadová | 4 | 6 m |
| Tohle je bouldering | 6A | 6B+ SD variant |
| Jen makej | 6C+ | |
| Dlouhá ruka | 6B | |
| Povaleč | 7A+ | |
| Tlustej, blbej, silnej | 7C+ | |
| Skokan | 7A+ | |
| Vyhni se všemu | 6C+ | |
| Dětský bob | 2 | |
| Michalův boulder | 5A | |
| Dětský bobek | 4 | 6A SD variant |
| Boj o nádech | 6C+ | |
| Příslib světla | 7A+ | |
| Oblík | 4 | |

*Most established 1986–1990 by local climbers / Olda Löw.*

### 3. U tabule (4 m) — [skala-13621](https://www.horosvaz.cz/skaly-skala-13621/)
| Route | Grade | Notes |
|---|---|---|
| Pohoda v kaňonu | 6B+ | SD variant |
| Sen o kolmici | 4 | |
| Žlutá 1 | 3 | |
| Žlutá 2 | 3 | |
| Hopík | 6B+ | without left arête |
| Divoká rozpaž | 7B | SD, without bottom block |
| Koncertík | 7B | SD, with underclings |
| Krása pohybu | 7A+ | SD, without right arête |
| Rozpaž, upaž, vzpaž | 7C | combination route |
| Krok sun krok | 6C | SD, without bottom block |
| Posunovač | 6B | SD, without bottom block |
| Rákoska | 6B+ | |
| Na hanbě | 6C+ | CH variant |
| Schoulení | 7A+ | without left arête |
| Modlitba | 7C | CH, start under overhang |

### 4. Hospoda na mýtince (4 m) — [skala-13619](https://www.horosvaz.cz/skaly-skala-13619/)
| Route | Grade | Notes |
|---|---|---|
| Pečený pivo | 2 | 7A+ SD |
| Výpečky s deseti | 7B | SD |
| Ne lajt | 6B | SD |
| Lajt | 7B | SD |
| Magor tingl | 6A+ | SD |
| Ochranářka | 3 | 4 SD |
| Hele gugu | 3 | 6C SD |
| Superkrag | 1 | |
| Goráč | 1 | |
| Americké brambory | 4 | SD |
| Varianta "nemáme" | 5A | SD |
| Kuřecí ragů | 6C | SD |
| Kuřecí prsíčka | 7A | |
| Kuře stokrát jinak | 7B | SD |
| Vidličky a nože | 5B | 6B SD |
| Kompotos | 3 | 6B SD |

*Note: rock dries quickly.*

### 5. Strašidla (6 m) — [skala-13631](https://www.horosvaz.cz/skaly-skala-13631/)
| Route | Grade |
|---|---|
| Kapoun | 5C |
| Pod stropem | 7A+ |
| Vysoká noha | 4 |
| Pro radost | 4+ |
| Kolmá hlína | 3 |
| Úleva | 6A |
| Brána do ráje | 7A |
| Tenisková spára | 3 |
| Kecková spára | 4 |
| Podnikavá příroda | 6A |
| Bludný kruh | 5C |
| Strašidýlko | 4 |
| Temné stíny | 7B |
| Noční můra | 7A |
| Skřipec | 6A |
| U cesty | 5C |
| Knoflík | 3 |
| Uzel na prstech | 7A |
| Ocásky | 2 |

### 6. Hejkal (4 m) — [skala-13633](https://www.horosvaz.cz/skaly-skala-13633/)
| Route | Grade |
|---|---|
| Zhulenej hejkal | 7A+ |
| Hejkálek | 4+ |
| Barbucha | 4+ |
| Paul mc' Mang | 2 |
| Řepa | 6B+ |
| Mango | 6C |
| Mangold | 7A+ |
| Deprese | 6B+ |
| Kebab | 7B |
| Hejkal | 7A |
| Schůdek obraceč | 7B+ |
| Hejkalka | 4 |
| Petrova plotna | 5C |
| Pavlova plotna | 5A |
| Jindrova plotna | 1 |

### 7. Divočina (6 m) — [skala-13634](https://www.horosvaz.cz/skaly-skala-13634/)
| Route | Grade | Notes |
|---|---|---|
| Jeřabinka | 4 | 8 m |
| Nepříjemná | 6 | 7 m |
| Převislá | 6 | 6 m |
| Šakalí pes | 4 | 8 m |
| Kalous | 6B | |
| Radost z kamenů | 6B+ | |
| Plaz | 4 | |
| Ui | 6C | |
| Vytesané příběhy | 6C+ | |
| Drcený kámen | 6A+ | |
| Dávka odvahy | 5C | |
| Zeleň | 1 | |
| Dávkovač | 6B | |
| Nákop | 6A | |
| Synapse | 7B | |
| Vzácná výprava | 5C | |
| Nepadat! | 3 | |
| Pasti dlaní | 5B | |
| Pohoďák | 1 | |
| Kapsička | 5A | |
| Hotovson | 5C | |
| Krok | 3 | |
| Sun | 4 | |
| Pojď blíž | 5C | |
| Potíž | 5C | |
| Dírovaná | 5A | |
| Seznamka | 3 | |
| Guten ptak | 5B | |
| Technologik | 4+ | |
| Žulové sklo | 6C+ | |

### 8. Vlčata (3 m) — [skala-13627](https://www.horosvaz.cz/skaly-skala-13627/)
| Route | Grade |
|---|---|
| Motorová myš | 6B |
| Létající les | 6B |
| Klam | 6C |
| Pouto k zemi | 7A |
| Postoj | 6B |
| Poskok | 6C |
| Plk | 6B |

### 9. Vlčí stěna - M (8 m) — [skala-13616](https://www.horosvaz.cz/skaly-skala-13616/)
| Route | Grade |
|---|---|
| Náhorní stěnka | 1 |
| Dvojka | 2 |
| Borovicová | 3 |
| Spárka | 3 |
| Kapsička | 3 |
| Jemná | 3+ |
| Převísek | 3+ |
| SV hrana | 4+ |
| Zelená hrana | 4+ |
| Schovávačka | 3 |
| Pivní komín | 3 |
| Vlčí oči | 8 |
| Dvojspára | 3 |
| Těžká spára | 6- |
| Zátišácká hrana | 6 |
| Hliněná cesta | 4 |
| Krátká | 6 |
| Cesta broučků | 6- |
| Vlčí vytí | 5+ |
| Vlčí spára | 4 |
| Šikmá jemná | 3 |

*Note: rock dries quickly; mixed rope + bouldering.*

### 10. Sokolík (8 m) — [skala-13626](https://www.horosvaz.cz/skaly-skala-13626/)
| Route | Grade | Notes |
|---|---|---|
| Bokovka | 4+ | 6 m, trad |
| Dobré časy | 6 | 8 m |
| Gabo Zelenaj | 5 | 8 m |
| Galax | 8- | 7 m |
| Jasanová | 4 | 8 m |
| Koněpruská hrana | 7+ | 8 m |
| Profesor Xerox | 9- | 8 m |
| Stará plotna | 7 | 8 m |
| Varianta | 4 | 8 m |
| Koktina | 6A | |
| Ještě větší kokotina | 6B | |
| Lehké zvednutí | 3 | |
| Došly nápady | 5A | |
| Váček | 6A+ | |
| Tuny tunningu | 3 | |
| Zubař | 3 | |
| Mléčné zuby | 6C+ | |
| Derniéra | 6C | |
| Zdendova hrana | 7A | |
| Sokolík | 4 | |
| Něco mezi nulou a ničím | 8A/A+ | |
| Morfium | 7C | |
| Naklepané šunky | 7B | |
| Hnízdo | 6A+ | |
| Hnízdiště | 4+ | |

### 11. Metro (4 m) — [skala-13629](https://www.horosvaz.cz/skaly-skala-13629/)
| Route | Grade |
|---|---|
| Předsedovi na truc | 5B |
| Vlčí kvik | 6B+ |
| Vlčí řev | 7B+ |
| Sokolovská | 6A+ |
| U-Bahn | 6A |
| U-banán | 6A+ |
| Minimetro | 6A+ |
| Metro | 6B |
| I.P.Karlova | 6C |
| Leninova | 5C |
| Gottwaldova | 4 |
| Hrana | 3 |
| Ukončete výstup a nástup, dveře se zavírají, příští stanice Kosmonautů | 7A |
| Čumák | 5B |
| Übers Tschumak | 7A |
| Metrosexual | 7A+ |

### 12. Pevnost (3 m) — [skala-13617](https://www.horosvaz.cz/skaly-skala-13617/)
| Route | Grade |
|---|---|
| Varianta | 4 |
| Wolandova partička | 7C |
| Mistr a Markétka | 8A |
| Bulgakov | 8A+ |
| Hvězdný prach | 8B |
| Nová plotna | 7A |
| Stará plotna | 6A+ |
| Dobré časy | 5C |
| Nové časy | 6B+ |
| Kus kus | 6C |
| Zkus skus | 7B |
| Koněpruská hrana | 7+ |
| Koněpruský boulder | 6B |
| Vlčí med | 7C+/8A |
| Obivak Kenobi | 7C |
| Karavana mraků | 7C/C+ |
| Stepní vlk | 8A/A+ |
| Klukovský sen | 8B |
| Křik a pláč | 8A+/B |
| Pláč | 7C+ |
| Necita | 8A |
| Profesor Xerox | 7A+ |
| Jsem prý blázen jen | 7C+ |
| Galax | 8- |
| Galaktik | 6B+ |
| Bokovka | 4+ |
| Trauma | 5B |
| Jasanová | 4 |
| Gabo zelenaj | 5 |

### 13. U srdíčka (5 m) — [skala-13630](https://www.horosvaz.cz/skaly-skala-13630/)
| Route | Grade | Notes |
|---|---|---|
| Levá hrana srdíčka | 2 | 5B SD |
| Pravá hrana srdíčka | 3 | |
| Dlouhán | 6A | SD |
| Trik | 5A | SD |
| Hekal | 5C | SD |
| Vlčice | 6C | SD from edge |
| Vlk | 6B | SD to the left |
| Vlčík | 6A+ | SD near arête |

### 14. Pinnacle (5 m) — [skala-13625](https://www.horosvaz.cz/skaly-skala-13625/)
| Route | Grade |
|---|---|
| Sokolík | 3+ |
| Letecká | 5C |
| projekt | (no grade — unfinished project) |
| Těžká voda | 8A |
| Prase vařený | 7C |
| Fotošop | 7A+ |
| Země vzdálená | 7C+ |
| Prasátko | 5B |
| Čuník | 4 |
| Abdejt | 6B+ |
| Pinákl | 6A+ |
| CD Ex | 5B |
| Video | 6A |
| Video plus | 6A+ |
| Audio | 3 |
| Korel | 6A+ |
| Zebra | 5C |
| Rejdr | 5C |
| Trim | 6A |
| Klon | 6B |

### 15. Přílepská věžička (4 m) — [skala-13620](https://www.horosvaz.cz/skaly-skala-13620/)
| Route | Grade |
|---|---|
| Levá přílepská stěnka | 4 |
| Přílepská | 3 |
| Pravá přílepská stěnka | 4 |
| Vlnky | 3 |

### 16. Chlumská věžička (3 m) — [skala-13628](https://www.horosvaz.cz/skaly-skala-13628/)
| Route | Grade | Notes |
|---|---|---|
| Kolik boulí, tolik boulí | 4+ | 6A+ SD |
| Plný kaťata | 6A | SD |
| Chlumský boulder | 5A | |
| Chlumský okruh | 6B | traverse |
| Mokrá kočka | 7B+ | SD, slightly left |
| Kočka | 5C | 6A SD |
| Klikni pravým dědo | 5C | without crack right |

### 17. Dolní stěny (4 m) — [skala-13618](https://www.horosvaz.cz/skaly-skala-13618/)
| Route | Grade | Notes |
|---|---|---|
| Vrásky | 6A | CH |
| Malá plotna | 4+ | |
| Přepadová | 3 | |
| Bukový komín | 2 | |
| Staré mládí | 7C | |
| Papírák | 7B | |
| Větrná hrana | 5B | |
| Buková spára | 3 | |
| Dělám, co můžu | 6C | SD |
| Vzdušná hrana | 6B | 6C+ SD variant |
| Buková cesta | 5 | bolt |
| Komínek | 2 | |
| Vnitřní hrana | 3 | |
| Praskliny | 2 | |
| Cvičná hrana | 6A | SD |
| Cvičná plotna | 1 | |

### 18. Kosmetický koutek (3 m) — [skala-13623](https://www.horosvaz.cz/skaly-skala-13623/)
| Route | Grade |
|---|---|
| Avon lady | 6A+ |
| Obličej na ksicht | 4 |
| Pevné bříško | 7A+ |
| Vypnuté hýždě | 7C |
| Saloon krásy | 7A |
| Levý boulder | 2 |
| Traverz spárou | 4 |
| Překvapení | 5A |
| Ostrá hrana | 4 |
| Lehká stěna | 3 |
| Lehká spára | 1 |

### 19. Levé stěny (10 m) — [skala-13624](https://www.horosvaz.cz/skaly-skala-13624/)
| Route | Grade | Notes |
|---|---|---|
| Dvojspára | 3 | 10 m, rope |
| Hliněná cesta | 4 | 8 m, rope |
| Krátká | 6 | 8 m, rope |
| Pivní komín | 3 | 10 m, rope |
| Schovávačka | 3 | 10 m, rope |
| Těžká spára | 6- | 10 m, rope |
| Vlčí oči | 8 | 10 m, rope |
| Zátišácká hrana | 6 | 8 m, rope |
| Zelená hrana | 4+ | 8 m, rope |
| Děti nástup | 1 | boulder |
| Gymbalón | 6C+ | boulder |
| Pavlův boulder | 3 | boulder |
| Petrův boulder | 2 | boulder |
| Karlův boulder | 3 | boulder |
| Průhledový komín | 3 | boulder |
| Pes | 4+ | boulder |
| Hyena | 5B | boulder |
| Krakatit | 7A | boulder |
| Excalibur | 7B+ | boulder |
| Lomená spára | 3 | boulder |
| Šakalí pes | 4 | boulder |
| Jeřabinka | 4 | boulder |
| Zduření | 6A | boulder |
| Nepříjemná | 6 | boulder |
| Převislá | 6 | boulder |
| Pravá hrana | 4 | boulder |
| Nohy za hlavu | 6B+ | boulder |
| Strůpek | 5C | boulder |

---

## Sector: Kosobody
ČHS sector page: https://www.horosvaz.cz/skaly-sektor-967/ — 13 named boulders

### 1. Táborová skála (10 m) — [skala-13635](https://www.horosvaz.cz/skaly-skala-13635/)
| Route | Grade | Notes |
|---|---|---|
| Kyslíkový deficit | 6+ | 8 m, trad |
| Levý komín | 3 | 5 m |
| Levý kout | 2 | 10 m |
| Pravý komín | 3 | 4 m |
| Pravý kout | 2 | 10 m |
| Spára dobyvatelů | 3 | 10 m |
| Srbská jízda | 5+ | 7 m |
| Šavle | 6 | 8 m |
| Údolní cesta | 5 | 11 m |
| Zatajený dech | 4 | 12 m |
| Šelest na srdci | 4+ | boulder |
| Love song | 6C | boulder |
| Love song direkt | 6C+ | boulder |
| Pravá hrana | 3 | boulder |
| Srdce | 6B+ | boulder |
| Stupně | 4 | boulder |
| Stěnka | 2 | boulder |
| Spára na dobré jitro | 4 | boulder |

### 2. Brána (4 m) — [skala-13636](https://www.horosvaz.cz/skaly-skala-13636/)
| Route | Grade |
|---|---|
| Sedmnáctka | 3 |
| Osmnáctka | 2 |
| Za rohem | 4 |
| Strážce Brány | 5B |
| Ochranka | 5A |
| Píchačky | 4+ |
| Třiadvacítka | 3 |

*Note: rock dries quickly. NB — this "Brána" boulder is inside Kosobody sector and is a DIFFERENT feature from the app's separate "Brána" sector (ČHS sektor 964, elsewhere in Petrohrad — name collision, don't merge.*

### 3. Viklánky (4 m) — [skala-13637](https://www.horosvaz.cz/skaly-skala-13637/)
| Route | Grade |
|---|---|
| Čtyřiadvacítka | 3 |
| Pětadvacítka | 4 |
| Vstupenka | 5A |
| Týl | 4+ |
| Kšiltovka | 3 |
| Krásných devětadvacet | 3 |
| Třetí kulatiny | 4 |
| Spodní traverz | 6B |
| Skleněné peklo | 6A |
| Vrchní traverz | 6A |
| Huperdum | 7A |
| Zub času | 6B |
| Pivrnec | 6C+ |
| Zubatice | 7A+ |
| Švihadlo | 8A |
| Překrok | 3 |
| Hřib | 4 |
| Pravý | 4+ |
| Levý | 5A |
| Jednička | 1 |
| Dvojka | 2 |
| Trojka | 3 |
| Dvě čtyřky | 3 |
| Škopík | 4 |
| Vana | 5C |

### 4. Salaš (3 m) — [skala-13638](https://www.horosvaz.cz/skaly-skala-13638/)
LOW CONFIDENCE — page returned numeric placeholders, not names. Grades: 3, 3, 4+, unclear, unclear (5 routes).

### 5. Eldorádo (4 m) — [skala-13639](https://www.horosvaz.cz/skaly-skala-13639/)
LOW CONFIDENCE — mostly numeric placeholders. Grades found: 5A, 4, 4, 5A, 4+, 5B, 4+, 6A+, 4+, 3, plus named "Pravá hrana" 5A, "Levá hrana" 4+.

### 6. Generál Laudón (4 m) — [skala-13640](https://www.horosvaz.cz/skaly-skala-13640/)
| Route | Grade |
|---|---|
| Faldíky | 4 |
| Střecha | 6A |
| Spára | 5A |
| Kanón | 6A+ |
| Generál Laudón | 6B |
| Traverz | 6A |
| Středem | 5C |
| Levá střecha | 6A |

### 7. U dubu (4 m) — [skala-13641](https://www.horosvaz.cz/skaly-skala-13641/)
| Route | Grade |
|---|---|
| Pravá stěnka | 5B |
| Dubová spára | 2 |
| Dolní stěnka | 4+ |

### 8. Žába (5 m) — [skala-13642](https://www.horosvaz.cz/skaly-skala-13642/)
| Route | Grade |
|---|---|
| Vražda | 5C |

### 9. U hřibu (5 m) — [skala-13643](https://www.horosvaz.cz/skaly-skala-13643/)
| Route | Grade |
|---|---|
| Strach má velké oči | 6A |
| Bez strachu | 6A |
| Zadní boulder | 5A |

### 10. Mravenčí hrad (8 m) — [skala-13644](https://www.horosvaz.cz/skaly-skala-13644/)
NO ROUTE DATA — page showed photo gallery only, genuine gap on source.

### 11. Položená stěna - M (12 m) — [skala-13645](https://www.horosvaz.cz/skaly-skala-13645/)
| Route | Grade | Notes |
|---|---|---|
| Neznámé cesty | 3 | 12 m |
| Včera ráno přišla | 6+ | 8 m |
| Zubatá | 6+ | 8 m, piton |
| Stupně | 4 | |
| Stejskání | 5A | |
| Kout | 4+ | |
| Hrana | 4 | |
| Hřbet | 4 | |

### 12. Horní patro (7 m) — [skala-13646](https://www.horosvaz.cz/skaly-skala-13646/)
| Route | Grade | Notes |
|---|---|---|
| Malárie | 6A | |
| Klaustrofobie | 6A+ | |
| Osmý den | 6B+ | |
| Moskyt | 5C | |
| Vyleštěná podlaha | 7- | 6 m |
| Zdendův boulder | 4+ | |

### 13. Lomová stěna - M (8 m) — [skala-13647](https://www.horosvaz.cz/skaly-skala-13647/)
| Route | Grade | Notes |
|---|---|---|
| Levá plotna | 7- | FA Oldřich Löw c. 1990 |
| Trhlina | 6+ | crack, pitons, FA Oldřich Löw c. 1990 |
| Velká plotna | 7+ | 3 bolts, FA Oldřich Löw c. 1990 |

---

## Sector: Bukov
ČHS sector page: https://www.horosvaz.cz/skaly-sektor-968/ — 8 named boulders

### 1. Garáž (6 m) — [skala-13648](https://www.horosvaz.cz/skaly-skala-13648/)
| Route | Grade | Notes |
|---|---|---|
| Březová hrana | 2 | 6 m |
| Mechový kout | 4 | 7 m |
| Schody | 3 | 7 m |
| Zajíc | 6 | 7 m |
| Lišejníková stěnka | 3 | 6 m |

### 2. Velká stěna - M (10 m) — [skala-13649](https://www.horosvaz.cz/skaly-skala-13649/)
| Route | Grade | Notes |
|---|---|---|
| Sestupovka | 1 | |
| Karlovarská hrana | 4 | |
| Hotel Pupp | 6A | |
| Trn v patě | 5A | |
| Bukovský kout | 2 | 6 m |
| Král slunce | 5+ | 6 m |
| Bukovská spára | 3 | 6 m |
| Tak co Ferdo | 6- | 6 m |
| Prosinec | 4+ | 7 m |
| H.H. | 5 | 7 m |
| Stará cesta | 2 | 7 m |
| Bazilišek | 5 | 6 m |
| Mam strach | 6+ | 8 m |
| Atomová kotelna | 7 | 8 m |
| Vuachejtličky | 5+ | 7 m |
| Zimní kout | 3 | 6 m |

### 3. Bukovský věžák (5 m) — [skala-13650](https://www.horosvaz.cz/skaly-skala-13650/)
| Route | Grade |
|---|---|
| Bez hrany | 6A |
| Bukovské open | 6B+ |
| Levá údolní stěna | 4+ |
| Pravá údolní stěna | 2 |
| Položená | 2 |
| Horní | 5A |
| Pravý | 2 |
| Liščí cep | 3 |
| Nic moc | 5B |
| Bukovský komín | 1 |
| Čtyřka | 4 |
| Dvojka | 2 |
| Zelení mužíci | 4 |
| Poslední | 3 |

### 4. Mechová stěna - M (4 m) — [skala-13651](https://www.horosvaz.cz/skaly-skala-13651/)
| Route | Grade |
|---|---|
| Levá stěnka | 3 |
| Levá hrana | 4+ |
| Pravá hrana | 3 |
| Mechová | 3 |
| Zelinkavá | 3+ |

### 5. Skála u pokroucené borovice (4 m) — [skala-13652](https://www.horosvaz.cz/skaly-skala-13652/)
| Route | Grade |
|---|---|
| Údolní | 3 |
| Boční | 3 |
| Vnitřní | 1 |
| Těžká stěnka | 5A |
| Lehká stěnka | 4 |
| Těžká hrana | 4+ |
| Lehká hrana | 2 |
| Poslední | 3 |

### 6. Soví dvojčata (4 m) — [skala-13653](https://www.horosvaz.cz/skaly-skala-13653/)
| Route | Grade |
|---|---|
| Bubo bubo | 4 |
| Bubík | 3 |
| Bubák | 3 |
| Ve hnízdu | 3 |
| Z komínu | 4 |
| Levá hranka | 2 |
| Převislá stěnka | 3 |
| Pravá hranka | 2 |
| Komín | 1 |

### 7. Třešňovka (4 m) — [skala-13654](https://www.horosvaz.cz/skaly-skala-13654/)
| Route | Grade |
|---|---|
| Červík Pepík | 4 |
| Na větvi | 4 |
| Rampa | 1 |
| Pecka | 3 |
| Pecička | 3 |
| Prasklina | 2 |
| Vydutina | 4 |
| Za rohem | 2 |

### 8. Obývák (5 m) — [skala-13655](https://www.horosvaz.cz/skaly-skala-13655/)
| Route | Grade | Notes |
|---|---|---|
| Vysoká spára | 4+ | 6A+ SD |
| Zametačova siesta | 4 | 7A+ SD |
| Údolka | 5A | |
| Gauč | 4+ | 6C SD |
| Libůstka | 6A | 7C+ SD without left edge |
| Traverz | 6B+ | SD |
| Slzavé údolí | 7B+ | SD |
| Hračka | 5B | |
| Pěknůstka | 4 | 4+ SD |
| Radůstka | 4+ | 5A SD |
| Spára | 2 | 3 SD |
| Bez hrany | 5A | 6C+ SD without right edge |
| S hranou | 6B | SD |
| U kamene | 3 | 5B SD |
| Slzy žuly | 6C+ | 7A+ SD |
| Obejvák | 6C | 6C+ SD |
| Lišty malýho pišty | 7C+ | SD |
| Disko disko | 7B+ | 7C+ SD |
| Temný proud | 8A+ | SD |
| Pohyby | 7B+ | SD |
| Hrana | 5B | direct along edge |

---

## Blockers / notes

- **theCrag.com**: confirmed area pages exist for these sectors but direct fetch returned 403 Forbidden across the board — no star-quality data obtainable this pass.
- **Salaš** and **Eldorádo** (Kosobody): route names rendered only as numeric placeholders — grades look genuine, names likely present on the live page but not captured cleanly.
- **Mravenčí hrad** (Kosobody): zero route data exposed — likely JS-rendered content not captured by static fetch.
