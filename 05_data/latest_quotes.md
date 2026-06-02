# Latest Quotes Cache

Zweck: Aktuelle Kurse und Performance-Daten fuer das Wertpapier-Universum aus `05_data/covered_symbols.md` speichern.

## Refresh-Regel

- Bei jeder sachlichen Aktien-, Depot-, Branchen-, Watchlist- oder Zukunftsanfrage aktualisieren.
- Fuer Kurse und Kennzahlen bevorzugt Boersenplaetze, Unternehmensquellen, SEC/Boersenmeldungen oder etablierte Finanzdatenanbieter nutzen; Quelle und Abrufzeit immer notieren.
- Kennzahlen aus Aggregatoren nur verwenden, wenn Datum und Anbieter klar sind; bei kritischen Bewertungsfragen nach Moeglichkeit mit Primaer- oder Zweitquelle gegenpruefen.
- Quelle und Abrufzeit notieren.
- Wenn ein Symbol nicht abrufbar ist, Grund notieren und einen alternativen Ticker oder Handelsplatz in `03_state/open_questions.md` festhalten.
- Fuer aktuelle Depotwerte immer aktualisieren.
- Fuer Watchlist- und Hintergrundwerte aktualisieren, wenn sie in der Anfrage relevant sind oder als moeglicher Alert-Kandidat dienen.

## Letzter Refresh

| Feld | Wert |
|---|---|
| Datum/Zeit | 2026-06-02, ca. 06:47 Europe/Berlin |
| Ausloeser | Automation: KI Aktien Analyse / Kontext-Radar |
| Quelle | StockAnalysis.com Kursseiten fuer alle Werte aus `05_data/covered_symbols.md`; U.S. Treasury und FRED fuer Makro-Overlay; Micron/GlobeNewswire, Samsung Newsroom, Kioxia IR und Broadcom IR fuer neue Nachrichten-/Terminpruefung |
| Hinweis | Vollrefresh. US-Werte sind Schlusskurse vom 2026-06-01 mit After-hours, Asienwerte sind 2026-06-02 delayed/intraday laut Finanzdatenanbieter, Paris ist 2026-06-02 delayed. Private Werte bleiben ohne Kurs. |

## Kursdaten

| Unternehmen | Symbol | Kurs | Waehrung | Tagesveraenderung | 1M | 3M | 52W-Hoch-Abstand | Quelle | Abrufzeit | Notiz |
|---|---:|---:|---|---:|---:|---:|---:|---|---|---|
| SK Hynix | 000660.KS | 2,289,000 | KRW | -3.13% | n/b | n/b | ca. 4.9% unter Hoch 2,407,000 | StockAnalysis KRX:000660 | 2026-06-02 delayed/intraday | Market cap ca. KRW 1,673.71T, PE 22.37, Forward PE 7.30; Cheongju-Gasleck bleibt Watch, kein bestaetigter Produktionsausfall gefunden |
| Micron Technology | MU | 1,035.50 | USD | +6.64% | n/b | n/b | ca. 1.1% unter Hoch 1,046.97 | StockAnalysis MU | 2026-06-01, 16:00 EDT close; after-hours 1,040.07, +0.44% | Market cap ca. USD 1.17T, PE 48.71, Forward PE 10.98, Earnings Date 2026-06-24; neue COMPUTEX-Produktmeldung positiv |
| SanDisk | SNDK | 1,761.43 | USD | +3.92% | n/b | n/b | ca. 2.4% unter Hoch 1,804.00 | StockAnalysis SNDK | 2026-06-01, 16:00 EDT close; after-hours 1,756.62, -0.27% | Market cap ca. USD 260.85B, PE 59.30, Forward PE 10.87; hohes NAND-/AI-Storage-Beta |
| Seagate Technology | STX | 921.26 | USD | +4.71% | n/b | n/b | ca. 2.1% unter Hoch 940.79 | StockAnalysis STX | 2026-06-01, 16:00 EDT close; after-hours 922.37, +0.12% | Market cap ca. USD 208.44B, PE 87.25, Forward PE 38.62; HDD-Watchlist positiv, aber BofA-Aussagen stehen noch aus |
| Western Digital | WDC | 546.20 | USD | +2.82% | n/b | n/b | ca. 3.2% unter Hoch 564.14 | StockAnalysis WDC | 2026-06-01, 16:00 EDT close; after-hours 549.48, +0.60% | Market cap ca. USD 188.27B, PE 29.91, Forward PE 35.18; BofA/Evercore bleiben harte HDD-Pruefpunkte |
| Arista Networks | ANET | 170.68 | USD | +7.03% | n/b | n/b | ca. 5.1% unter Hoch 179.80 | StockAnalysis ANET | 2026-06-01, 16:00 EDT close; after-hours 170.82, +0.08% | Market cap ca. USD 214.92B, PE 58.65, Forward PE 45.07; AI-Ethernet-Watch stark |
| Broadcom | AVGO | 459.97 | USD | +2.95% | n/b | n/b | ca. 1.3% unter Hoch 466.05 | StockAnalysis AVGO | 2026-06-01, 16:00 EDT close; after-hours 472.43, +2.71% | Market cap ca. USD 2.18T, PE 89.64, Forward PE 34.39; Q2 am 2026-06-03 bleibt harter Opportunity-Cost-Test |
| Marvell Technology | MRVL | 219.43 | USD | +7.04% | n/b | n/b | ca. 2.5% unter Hoch 225.14 | StockAnalysis MRVL | 2026-06-01, 16:00 EDT close; after-hours 219.50, +0.03% | Market cap ca. USD 191.96B, PE 75.80, Forward PE 48.47; wieder stark, aber Broadcom-Q2 bleibt Vergleich |
| Vertiv | VRT | 323.39 | USD | +2.43% | n/b | n/b | ca. 14.9% unter Hoch 379.94 | StockAnalysis VRT | 2026-06-01, 16:00 EDT close; after-hours 325.90, +0.78% | Market cap ca. USD 124.22B, PE 81.27, Forward PE 47.39; Power/Cooling-Watch positiv, Bewertung gelb |
| Samsung Electronics | 005930.KS / SSNLF | 351,000 | KRW | +0.57% | n/b | n/b | ca. 5.1% unter Hoch 370,000 | StockAnalysis KRX:005930 | 2026-06-02 delayed/intraday | Market cap ca. KRW 2,224.09T, PE 28.01, Forward PE 6.51; offizielles HBM4E-Sample-Signal macht Samsung als Aufholer wichtiger |
| Eaton | ETN | 400.08 | USD | -0.13% | n/b | n/b | ca. 8.1% unter Hoch 435.43 | StockAnalysis ETN | 2026-06-01, 16:00 EDT close; after-hours 399.71, -0.09% | Market cap ca. USD 155.35B, PE 39.14, Forward PE 28.43; Power-Watch stabil |
| GE Vernova | GEV | 950.54 | USD | -1.84% | n/b | n/b | ca. 19.6% unter Hoch 1,181.95 | StockAnalysis GEV | 2026-06-01, 16:00 EDT close; after-hours 950.21, -0.03% | Market cap ca. USD 255.43B, PE 27.81, Forward PE 51.40; Ruecksetzer nach Power-/Grid-Rallye |
| Corning | GLW | 176.70 | USD | -2.46% | n/b | n/b | ca. 16.6% unter Hoch 211.79 | StockAnalysis GLW | 2026-06-01, 16:00 EDT close; after-hours 176.72, +0.01% | Market cap ca. USD 152.07B, PE 85.03, Forward PE 52.39; Optics-/Fiber-These intakt, kurzfristig schwach |
| Constellation Energy | CEG | 265.70 | USD | -7.66% | n/b | n/b | ca. 35.6% unter Hoch 412.70 | StockAnalysis CEG | 2026-06-01, 16:00 EDT close; after-hours 267.00, +0.49% | Market cap ca. USD 95.97B, PE 22.69, Forward PE 22.58; deutliches relatives Warnsignal im Power-/Utility-Korb |
| Vistra | VST | 154.76 | USD | -3.41% | n/b | n/b | ca. 29.6% unter Hoch 219.82 | StockAnalysis VST | 2026-06-01, 16:00 EDT close; after-hours 154.48, -0.18% | Market cap ca. USD 52.18B, PE 26.12, Forward PE 16.84; Power-Watch kurzfristig schwach |
| Bloom Energy | BE | 273.51 | USD | -4.03% | n/b | n/b | ca. 15.3% unter Hoch 322.83 | StockAnalysis BE | 2026-06-01, 16:00 EDT close; after-hours 274.20, +0.25% | Market cap ca. USD 77.80B, PE 11,482.85, Forward PE 118.54; weiter hochspekulativ und bewertungsempfindlich |
| Applied Materials | AMAT | 458.17 | USD | +1.80% | n/b | n/b | ca. 1.2% unter Hoch 463.88 | StockAnalysis AMAT | 2026-06-01, 16:00 EDT close; after-hours 456.83, -0.29% | Market cap ca. USD 363.77B, PE 43.09, Forward PE 31.27; WFE-/DRAM-/HBM-Readthrough positiv |
| Lam Research | LRCX | 317.12 | USD | -0.33% | n/b | n/b | ca. 4.9% unter Hoch 333.33 | StockAnalysis LRCX | 2026-06-01, 16:00 EDT close; after-hours 314.07, -0.96% | Market cap ca. USD 396.58B, PE 59.90, Forward PE 42.34; WFE-Watch neutral bis gelb |
| ASML | ASML | 1,628.57 | USD | +0.98% | n/b | n/b | ca. 1.5% unter Hoch 1,654.20 | StockAnalysis ASML | 2026-06-01, 16:00 EDT close; after-hours 1,623.54, -0.31% | Market cap ca. USD 623.23B, PE 54.04, Forward PE 41.16; Export-/Capex-Risiko weiter beobachten |
| Amkor Technology | AMKR | 72.75 | USD | +4.59% | n/b | n/b | ca. 8.2% unter Hoch 79.23 | StockAnalysis AMKR | 2026-06-01, 16:00 EDT close; after-hours 72.93, +0.25% | Market cap ca. USD 18.03B, PE 41.84, Forward PE 33.13; Advanced-Packaging-Readthrough positiv |
| NVIDIA | NVDA | 224.36 | USD | +6.26% | n/b | n/b | ca. 5.1% unter Hoch 236.54 | StockAnalysis NVDA | 2026-06-01, 16:00 EDT close; after-hours 223.92, -0.20% | Market cap ca. USD 5.43T, PE 34.36, Forward PE 22.58; COMPUTEX-/Vera-/AI-Factory-Readthrough bestaetigt Nachfragekontext |
| AMD | AMD | 510.13 | USD | -1.16% | n/b | n/b | ca. 3.2% unter Hoch 527.20 | StockAnalysis AMD | 2026-06-01, 16:00 EDT close; after-hours 506.96, -0.62% | Market cap ca. USD 831.82B, PE 170.11, Forward PE 58.54; relativ schwach gegen NVIDIA/Broadcom |
| Intel | INTC | 109.33 | USD | -4.67% | n/b | n/b | ca. 17.6% unter Hoch 132.75 | StockAnalysis INTC | 2026-06-01, 16:00 EDT close; after-hours 108.60, -0.67% | Market cap ca. USD 549.49B, PE n/a, Forward PE 103.47; weiter relatives Warnsignal |
| Microsoft | MSFT | 460.52 | USD | +2.28% | n/b | n/b | ca. 17.1% unter Hoch 555.45 | StockAnalysis MSFT | 2026-06-01, 16:00 EDT close; after-hours 452.39, -1.77% | Market cap ca. USD 3.42T, PE 27.43, Forward PE 24.91; Hyperscaler-/AI-Capex-Kontext intakt |
| Amazon | AMZN | 261.26 | USD | -3.47% | n/b | n/b | ca. 6.2% unter Hoch 278.56 | StockAnalysis AMZN | 2026-06-01, 16:00 EDT close; after-hours 259.64, -0.62% | Market cap ca. USD 2.81T, PE 31.25, Forward PE 31.32; AWS-/Capex-Kontext kurzfristig schwach |
| Alphabet | GOOGL | 376.37 | USD | -1.04% | n/b | n/b | ca. 7.9% unter Hoch 408.61 | StockAnalysis GOOGL | 2026-06-01, 16:00 EDT close; after-hours 373.51, -0.76% | Market cap ca. USD 4.56T, PE 28.71, Forward PE 30.05; Hyperscaler-Watch unveraendert |
| Meta Platforms | META | 600.47 | USD | -5.07% | n/b | n/b | ca. 24.6% unter Hoch 796.25 | StockAnalysis META | 2026-06-01, 16:00 EDT close; after-hours 600.61, +0.02% | Market cap ca. USD 1.52T, PE 21.84, Forward PE 18.29; grosses AI-Capex-Nachfragesignal bleibt, Aktie kurzfristig schwach |
| Oracle | ORCL | 248.15 | USD | +9.91% | n/b | n/b | ca. 28.2% unter Hoch 345.72 | StockAnalysis ORCL | 2026-06-01, 16:00 EDT close; after-hours 241.80, -2.56% | Market cap ca. USD 713.69B, PE 44.53, Forward PE 32.96; OCI-/AI-Capex-Readthrough stark, Earnings laut Finanzdatenanbieter 2026-06-10 |
| Dell Technologies | DELL | 465.96 | USD | +10.70% | n/b | n/b | ca. 0.7% unter Hoch 469.47 | StockAnalysis DELL | 2026-06-01, 16:00 EDT close; after-hours 475.75, +2.10% | Market cap ca. USD 302.67B, PE 37.25, Forward PE 25.31; AI-Server-/Memory-/Storage-Nachfrageproxy sehr stark, aber ueberhitzt |
| Tesla | TSLA | 415.88 | USD | -4.57% | n/b | n/b | ca. 16.6% unter Hoch 498.83 | StockAnalysis TSLA | 2026-06-01, 16:00 EDT close; after-hours 413.55, -0.56% | Market cap ca. USD 1.56T, PE 404.44, Forward PE 193.38; AI-/Robotik-Kontext, nicht depotnah |
| Kioxia | 285A.T | 72,760 | JPY | +0.36% | n/b | n/b | ca. 2.0% unter Hoch 74,250 | StockAnalysis TYO:285A | 2026-06-02 delayed/intraday | Market cap ca. JPY 39.59T, PE 71.84, Forward PE 8.33; Investor Day heute, weiterhin Deep-Dive-Kandidat |
| Schneider Electric | SU.PA / SBGSY | 276.20 | EUR | +2.32% | n/b | n/b | ca. 4.1% unter Hoch 287.90 | StockAnalysis EPA:SU | 2026-06-02 delayed/intraday | Market cap ca. EUR 155.20B, PE 37.68, Forward PE 26.87; AI-Datacenter-Power/Cooling-Kontext bestaetigt |
| SpaceX | Private | n/a | n/a | n/a | n/a | n/a | n/a | Nicht boersennotiert | 2026-05-30 | Nur Nachfrage-/TeraFab-Kontext, kein Kurs |
| xAI | Private | n/a | n/a | n/a | n/a | n/a | n/a | Nicht boersennotiert | 2026-05-30 | Nur AI-Workload-/Inference-Kontext, kein Kurs |

## Makro-Overlay

| Signal | Aktueller Datenpunkt | Quelle | Einordnung |
|---|---:|---|---|
| US 10Y Treasury Yield | 4.47% am 2026-06-01 | U.S. Treasury Daily Treasury Rates | Leicht hoeher als 4.45% am 2026-05-29; bleibt Bewertungsgegenwind |
| US 2Y Treasury Yield | 4.05% am 2026-06-01 | U.S. Treasury Daily Treasury Rates | Deutlich hoeher als 3.98% am 2026-05-29; hawkisheres Timing-/Bewertungssignal |
| US 10Y Real Yield | 2.07% am 2026-06-01 | U.S. Treasury Daily Treasury Par Real Yield Curve Rates | Unveraendert zu 2026-05-29; weiter hoch fuer Growth-Multiples |
| US High Yield OAS | 2.74% am 2026-05-31 | FRED BAMLH0A0HYM2 | Kein akuter Kreditstress; minimal breiter, aber noch eng |
| Chicago Fed NFCI | -0.510 am 2026-05-22 | FRED NFCI | Finanzbedingungen weiter locker |
| ICE US Dollar Index | 99.22 am 2026-05-27 20:00 | YCharts | Kein neues USD-Stresssignal; als Sekundaerquelle nur Makro-Cross-Check |
| VIXCLS | 15.32 am 2026-05-29 | FRED VIXCLS | Kein Volatilitaetsstress; nur Timing-/Crowding-Signal |

## Alert-Notizen

- Refresh 2026-05-30 08:08 CEST: US-Schlusskurse vom 2026-05-29 bestaetigen die Memory-/AI-Infrastruktur-Rallye statt sie zu brechen: Micron +5.14%, SanDisk +3.25%, Broadcom +4.73%, Arista +2.70%, Oracle +10.84%, Microsoft +5.45% und Dell +32.76%. NVIDIA, AMD und Hyperscaler waren gemischt; Intel fiel -5.14%.
- Wochencheck 2026-05-31 17:42 CEST: Keine neuen Aktienkurse seit dem 2026-05-29-Schluss. Die relevanten Bewegungsrisiken fuer die kommende Woche sind nicht neue Wochenendkurse, sondern NVIDIA/COMPUTEX, Broadcom-Q2, Dell/WDC/STX-Konferenzen, US-ISM/JOLTS/Beige-Book/Payrolls, Eurozonen-Inflation/GDP, China-PMI und das Hormuz-/Energierisiko.
- Wochenstart 2026-06-01 08:16 CEST: Korea-/Japan-Kurse senden weiter kein Momentumbruch-Signal. SK Hynix +1.54% auf KRW 2,369,000, Samsung +10.17% auf KRW 349,250 und Kioxia +9.37% auf JPY 72,020 liegen weiter nahe bzw. am 52W-Hoch. Reuters-/StockAnalysis-Newsfeed nennt erwartete Treffen zwischen NVIDIA-CEO Jensen Huang und koreanischen Executives als zusaetzlichen Rallye-Readthrough. Das bestaetigt den Memory-/AI-Infrastruktur-Readthrough, erhoeht aber weiter die Crowding-/Rueckschlagswarnung.
- Wochenueberblick 2026-06-01 08:47 CEST: Externe Gegenpruefung der StockAnalysis-Seiten bestaetigte den 08:16-Cache. Keine neue harte Kurs- oder Fundamentalaenderung seit dem Kioxia-Refresh; US-Werte bleiben vor Handelsstart bei den 2026-05-29-Schlusskursen. SQLite wurde mit frischen 08:47-Snapshots fortgeschrieben.
- Kontext-Radar 2026-06-01 14:11 CEST: US-Pre-Market bestaetigt weiter AI-Memory-/AI-Infrastruktur-Momentum bei Micron (+3.73%), SanDisk (+2.95%), Broadcom (+2.71%), NVIDIA (+2.18%), Dell (+1.63%), STX (+1.45%) und WDC (+1.52%). Gegenlaeufig schwach: Marvell (-3.19%), AMD (-3.37%), Intel (-6.72%), Bloom (-2.81%) und CEG (-2.12%). Asien schloss sehr stark: SK Hynix +1.89%, Samsung +10.09%, Kioxia +10.10%. Wichtiges neues Red-Flag-Watch: SK-Hynix-Gasleck in Cheongju; laut ChosunBiz bisher keine Produktionsunterbrechung, aber Reuters/Yonhap bestaetigt Verletzte durch Wasserstofffluorid-/Fluor-Leck.
- Dell ist der neue harte Nachfrage-Readthrough: Q1-FY2027 Gesamtumsatz USD 43.842B (+88% YoY), ISG-Umsatz USD 29.009B (+181% YoY), AI-optimized server revenue USD 16.132B (+757% YoY), AI orders USD 24.4B und FY27-AI-Server-Erwartung ca. USD 60B verbessern das Umfeld fuer Memory, Storage, Networking und Power, erhoehen aber zugleich Crowding-Risiko in AI-Infrastrukturwerten.
- Dell-Transcript erhoeht die Signalqualitaet gegenueber dem reinen Zahlenrelease: Dell nennt AI backlog von USD 51.3B, eine Pipeline mehrfach groesser als den Backlog und Memory als primaere Komponentengrenze; DRAM, NAND, CPUs und spaeter Hard Drives werden als Engpassfelder genannt. Das ist positiv fuer HBM/DRAM/NAND/Storage-Umfeld, aber noch kein direkter Margen-/EPS-Beleg fuer SK Hynix, Micron oder SanDisk.
- NVIDIA/COMPUTEX-GTC 2026-06-01: Offizieller Live-Feed hebt AI Factories, DSX-Blueprints und DSX MaxLPS hervor; NVIDIA nennt als Effekt bis zu 40% mehr GPUs im gleichen Power-Budget. Positiv fuer AI-Infrastruktur-Dichte, Memory/Networking/Power/Cooling-Readthrough; kein direkter EPS- oder Margenbeleg fuer die Depotwerte.
- NVIDIA-GTC-Taipei-Update 2026-06-01 06:34 CEST: Offizielle NVIDIA-Newsroom-Meldungen ergaenzen den fruehen Live-Feed. Vera Rubin ist in voller Produktion; Spectrum-X Ethernet Photonics ist laut NVIDIA jetzt in Produktion; DSX MaxLPS/DSX OS, Vera CPU und Vera BlueField-4 STX schaerfen den Readthrough fuer LPDDR5X, Storage, Networking, Power/Cooling und AI-Factory-Deployment. Das verbessert die Lieferketten-These, ist aber noch kein direkter EPS-/Margenbeleg fuer Depotwerte.
- Regulatorik-Watch 2026-06-01: Reuters/MarketScreener berichten, dass das U.S. Department of Commerce eine Exportlizenzpflicht fuer fortgeschrittene AI-Chips an chinesisch kontrollierte Auslands-Tochterfirmen klarstellt. Das ist ein neues hartes Risiko fuer NVIDIA/AMD und China-Exposure, aber aktuell kein direkter These-Bruch fuer SK Hynix, Micron oder SanDisk.
- Kioxia-Aufnahmefrage 2026-06-01 08:16 CEST: Kioxia wird von Hintergrund-/Readthrough-Wert auf aktive Watchlist/Deep-Dive-Kandidat hochgestuft. Kurs und Fundamentaldaten sind stark, aber nach dem +9.37%-Tagesmove nahe Hoch und wegen SanDisk-Redundanz kein automatischer Depot-Add. Naechster harter Pruefpunkt ist der Kioxia Investor Day am 2026-06-02 sowie die geplante Securities-Report-Einreichung am 2026-06-24.
- Depotwerte bleiben besser, aber ueberhitzt: SK Hynix, Micron und SanDisk stehen sehr nahe an Hochs; SanDisk und Micron zeigen die hoechste kurzfristige Beta.
- HDD-/Nearline-Watchlist bleibt leicht positiv, aber unveraendert Beobachtung: STX/WDC lieferten am 2026-05-29 keine neuen operativen Reaktivierungsdaten.
- Follow-on-Watchlist bleibt aktiv: Broadcom-Q2 am 2026-06-03 ist der naechste harte Pruefpunkt; Samsung bleibt durch HBM4E-Samples wichtig; Dell wird als Nachfrageproxy aufgenommen.
- Makro ist neutral bis leicht gemischt: 2Y leicht niedriger, 10Y unveraendert, 10Y Real Yield minimal hoeher; Nominal- und Realzinsen bleiben absolut hoch.
- Kontext-Radar 2026-06-02 06:47 CEST: US-Schlusskurse 2026-06-01 zeigen weiter starkes, aber selektives AI-/Memory-Momentum. Besonders stark: Micron +6.64%, SanDisk +3.92%, Dell +10.70%, Broadcom +2.95% plus After-hours +2.71%, Arista +7.03%, Marvell +7.04% und NVIDIA +6.26%. Gegenlaeufig schwach: CEG -7.66%, Meta -5.07%, TSLA -4.57%, Bloom -4.03%, Vistra -3.41% und Amazon -3.47%. SK Hynix fiel am 2026-06-02 in Korea -3.13%; das ist ein Warnsignal nach starker Rallye und Cheongju-Watch, aber ohne bestaetigten Produktionsausfall kein These-Bruch.
- Makro-Update 2026-06-02: U.S. Treasury 2026-06-01 zeigt US 10Y 4.47%, US 2Y 4.05% und 10Y Real Yield 2.07%. FRED zeigt HY OAS 2.74% per 2026-05-31, VIXCLS 15.32 per 2026-05-29 und NFCI -0.510 per 2026-05-22. Einordnung: keine Kreditstress-Ampel, aber hoeherer 2Y/10Y-Zins und hoher Realzins begrenzen Multiple-Ausweitung.
