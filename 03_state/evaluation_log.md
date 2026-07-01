# Evaluation Log

## 2026-06-30 - P0 AUFGEHOBEN: Depotdaten geliefert (Broker-Screenshot) + Risikolimits vorgeschlagen

- Positionsdaten (Broker-Screenshot, EUR): Micron 96 Stk (35,3%, Wert 95.990), SK Hynix 58 Stk GDR (32,0%, 87.000), SanDisk 25 Stk (16,6%, 45.000), Kioxia 90 Stk (16,1%, 43.650). Buckets HBM/DRAM 67,4% / NAND 32,6%. Erfasst in portfolio_positions.csv.
- HARTE Praezisierung Nutzer: Depot = 100% AI-Speicher, KEIN Cash. Start 22.04.2026 mit EUR 150.000; aktueller Wert ~EUR 271.640 = +81,1% (+121.640) in ~69 Tagen. Einzel-Einstaende durch Umschichtungen VERFAELSCHT -> echtes G/V nur auf Depot-Ebene (vs 150k-Basis + Trailing-Peak), nicht per Position. Depot aktuell ~-12% unter Trailing-Peak (~309k est. um 25.06).
- Risikolimits VORGESCHLAGEN (Nutzer bestaetigt/korrigiert noch): Einzelposition Warn 30%/Max 35%; HBM/DRAM 60%/70%; NAND 30%/40%; AI-Memory-Cash-Puffer-Ziel 10-15%; Depot-Giveback -15% (NAND trimmen) / -25% (Leg de-risken); Basis-Schutz ~180-190k; Gewinnmitnahme-Leiter bei neuen Hochs. In portfolio_policy.md + portfolio_risk_limits.csv (status=proposed).
- LIVE-Flags ggu. Vorschlag: Micron 35,3% AM/UEBER Einzel-Max; HBM/DRAM 67,4% + NAND 32,6% beide in Warnzone; Cash 0% < Ziel; Depot ~-12% unter Peak (nahe -15%-Trigger).
- Ampel: Handlungsnaehe 3->5 (P0-Cap entfaellt; Extension-/Trimm-Pruefung jetzt durchfuehrbar). Fundamental 9 / Timing 4 unveraendert, Gesamt 6. KEINE Order ohne bestaetigte Limits + Nutzerentscheid.
- NAECHSTER SCHRITT: nach Limit-Bestaetigung volle Extension-/Trimm-Pruefung gegen portfolio_risk_framework.md (Konzentration/Korrelation/FX/Katalysator).

## 2026-06-30 - start (Di): Frischkurse vorhanden, Memory-Selloff lief 06-29/30 WEITER, These intakt, Nvidia-Cut-Geruecht widerlegt

- Kontext: Erster Lauf mit sauberen Frischkursen nach dem 06-26-Schluss. Der memory-spezifische Selloff hat sich 06-29 (Mo) und 06-30 (Di) FORTGESETZT (3.-4. Abwaertsbein). Alle vier Depotwerte jetzt ~10-15% unter den ATHs vom 06-25.
- HARTE/frische Kurse: SK Hynix 06-30-Schluss KRW 2.628.000 (-1,68% vs 2.673.000; ~-12,0% vs ATH 2.987.000; USD ~$1.698). Kioxia 06-29-Schluss 88.450 (-4,05% vs 92.180; ~-14,8% vs ATH; USD ~$546; 06-30-TSE-Schluss noch nicht sauber). Micron 06-29-Schluss ~$1.138,65 (+0,56%, kleine Erholung) dann 06-30 intraday ~$1.088 (-3-4%; ~-10% vs ATH-Schluss $1.213,56). SanDisk 06-29-Schluss $2.000,01 (-4,34% vs $2.090,71), 06-30 ~$1.994,69 ~flat (~-14,4% vs ATH $2.335).
- These INTAKT, keine Widerlegung: Das in der Suche aufgetauchte 'Nvidia kuerzt Next-Gen-AI-Chip-Produktion'-Narrativ ist WIDERLEGT - Nvidia hat HBM-Versorgung ueber SK Hynix bis 2030 gesichert (Multiyear-Partnerschaft 06-07), Huang bat um MEHR HBM ('Please Make More'), HBM 2026 ausverkauft. Treiber des Selloffs bleiben Crowding/Positionsabbau + Korea-FSS-Leverage-ETF-Warnung + Counterpoint-Oversupply-Hinweis + Pre-Earnings-Anxiety (JPMorgan). Plus Micron Q3 + TrendForce-Preise (DRAM +58-63%/NAND +70-75% QoQ Q2) stuetzen weiter.
- Makro/FX: USD/KRW 1.547,79 (06-30, +0,37%; Won SCHWAECHER vs 1.534,55) -> verstaerkt den USD-Drawdown bei SK Hynix. USD/JPY 161,96 stabil. 10Y letzter harter Wert 4,37% (06-26), kein frischer 06-30-Print. Event-Wand diese Woche: Warsh-Rede 07-01, US-Juni-Payrolls 07-02 (frueh/Do) -> starker Print = Hike-Risiko/Bewertungsgegenwind.
- Einordnung: Reine Timing-/Crowding-Korrektur, KEIN Fundamental-Bruch. Bewertung resettet (MU fwd-KGV ~8,7; SK Hynix ~7,1). Depot-Ampel unveraendert Fundamental 9, Timing 4 (Momentum gebrochen + Event-Wand, teils kompensiert durch Bewertungsreset), Handlung 3 (P0-Cap), Gesamt 6. KEINE Kauf-/Verkaufs-Gewissheit ohne Positionsgroessen (P0).
- Datenluecken: Positionsgroessen/Gewichte/Einstaende weiter offen (P0); Micron 06-29-Provider-Spread ($1.138,65 vs $1.145,28) + 06-30-Settle offen; Kioxia 06-30-TSE-Schluss offen; 10Y kein frischer 06-30-Print; Follow-on/HDD-Kurse (AVGO/ANET/VRT partiell, NVDA 06-05 stale) nicht aktualisiert.

## 2026-06-28 - Daily Brief (So, Boersen zu): Settled-Kurse bestaetigt, Selloff memory-spezifisch, These bekraeftigt

- Kontext: Sonntag, Boersen seit Fr 06-26 geschlossen; keine neuen Kurse. Bewertet werden die jetzt SETTLED 06-26-Schluesse. Reiner Confirmation-/Datenqualitaets-Lauf, kein These-Wechsel.
- Datenqualitaet (geloest): SanDisk settled 06-26-Schluss = $2.090,71 (-10,46% vs $2.335) - TIEFER als die gestrige Schaetzung (~$2.200/-5,8%). Damit war SanDisk der tiefste US-Depot-Drawdown (hoechste NAND-Beta realisiert). Micron praezisiert auf $1.132,33 (-6,69%). SK Hynix (2.673.000 -8,36%) und Kioxia (92.180 -11,24%) settled bestaetigt.
- Risiko-Nuance (neu, weich-positiv fuer Lesart): Der 06-26-Selloff war MEMORY/NAND-SPEZIFISCH. WDC -10,58% (behaelt Flash-Exposure) lief mit, aber reine HDD Seagate +0,28% ENTKOPPELTE -> es war kein breites Storage-Repricing, sondern ein Memory-Crowding-Unwind.
- These bekraeftigt (hart): TrendForce/Industrie - DRAM-Kontraktpreise +58-63% QoQ in Q2 2026, NAND +70-75% QoQ (nach DRAM +90-95% in Q1); DDR4-Spot >$2,10/Gb jetzt ueber HBM3e ~$1,70/Gb. Keine nennenswerte neue Fab-Kapazitaet vor Ende 2027/2028. Das ist Unterversorgung, nicht Ueberangebot; die Counterpoint-Oversupply-Warnung (mid-2027) bleibt laenger-datiert/Minderheit. Bestaetigt die Lesart: 06-26 war Positionsabbau, kein Fundamental-Bruch.
- Makro minimal leichter: Oel weiter runter (WTI $69,23/Brent $71,99 06-26, tiefster seit 27.02; Hormuz-Fluesse ~75% Vorkriegsniveau), 10Y 4,38%, FX USD/KRW 1.534,55 / USD/JPY 161,673 - alles re-bestaetigt. Tail-Risk: Trump wirft Iran Waffenstillstandsbruch vor (Drohnen auf Hormuz-Schiffe).
- Watch partiell refreshed: MRVL $266,77 (-5,15%), WDC $603,96 (-10,58%), STX $902,43 (+0,28%) jetzt frische 06-26-Schluesse; AVGO/ANET/VRT nur partiell, NVDA weiter stale (06-05).
- Einordnung: These intakt/gestaerkt (Micron Q3 + TrendForce-Preise); Leitrisiko bleibt realisierte Extension/Crowding-Korrektur, nicht These-Bruch. Depot-Ampel unveraendert Fundamental 9, Timing 4, Handlung 3 (P0-Cap), Gesamt 6. KEINE Kauf-/Verkaufs-Gewissheit ohne Positionsgroessen (P0).

## 2026-06-27 - Daily Brief: Extension-Risiko REALISIERT (breiter Memory-Selloff), Makro entspannt leicht

- Kontext: Samstag, Boersen zu; bewertet werden die 06-26-Schlusskurse. Sehr volatile Woche: 06-23 KOSPI -~10% (SK Hynix/Samsung -12%+), Micron -13,18% auf $1.051,77 vor Earnings; 06-24 Micron-Q3-Blowout -> Erholung; 06-25 SK Hynix +12%; 06-26 erneute breite Gewinnmitnahme.
- HARTE Fakten 06-26-Schluss (alle vier Depotwerte rot): SK Hynix KRW 2.673.000 (-8,36% vs 2.917.000; ~$1.741 bei USD/KRW 1.534,97). Micron $1.129,00 (-7,0% vs $1.213,56; fwd-KGV jetzt 8,63). SanDisk ~$2.200 (-~5,8% vs $2.335; Schluss zu bestaetigen). Kioxia JPY 92.180 (-11,3% vs 103.850; ~$570 bei USD/JPY 161,75). Samsung KRW 328.000 (-8,5%).
- Treiber: Korea-FSS nennt eigene Genehmigung von Leverage-ETFs "zu hastig"; Counterpoint warnt vor moeglicher Preiskorrektur durch Angebotsschwemme (Markt aber bis mid-2027 >$1,3T). = Crowding-/Bewertungs-Flag, KEINE Preis-/Margen-/Guidance-Widerlegung.
- Neu/hart (Katalysator): SK Hynix US-ADR/Nasdaq-Listing bepreist mit 255.000 KRW/~$166, Start ~10.07 (vorlaeufig), ~$29,4 Mrd / 17,79 Mio neue Aktien; HSBC +20% Premium (Bewertungs-Catch-up zu Micron).
- Makro leicht entspannt: 10Y ~4,38% (-7bp/Woche), WTI <~$71 (Hormuz-Fluesse erholen sich), Mai-PCE 4,1%/Kern 3,4% IN-LINE -> Mehrfach-Hike-Wahrscheinlichkeit gesunken (ein Hike bleibt im Spiel). Warsh-Fed-Overhang bleibt.
- Einordnung: These intakt/gestaerkt (Micron Q3); Leitrisiko = realisierte Extension/Crowding-Korrektur, nicht These-Bruch. Depot-Ampel Fundamental 9, Timing 4, Handlung 3 (P0-Cap), Gesamt 6. KEINE Kauf-/Verkaufs-Gewissheit ohne Positionsgroessen.
- Datenqualitaet: SK-Hynix-Kurskonflikt geloest - gestriger 10:19-Wert 2.919.000 war Intraday-Fehlprint, korrekter 06-26-Schluss 2.673.000 (siehe source_conflicts). 10Y/FX jetzt frisch. Offen: SNDK settled close, Micron-GM-Verifikation, Follow-on/HDD/NVDA-Kurse (06-05 stale), PCE-/Listing-Termine bestaetigen.

## 2026-06-26 - start: These HART BESTAETIGT (Micron Q3 Blowout) + Makro-Regimewechsel

- Kontext: 20-Tage-Luecke seit letztem Refresh (06-06). Alle Juni-Katalysatoren passiert (Mizuho 06-09, Oracle 06-10, CPI 06-10, FOMC 06-16/17, Micron Q3 + Kioxia Securities Report 06-24, Kioxia HV 06-25). Die 06-05-Selloff-Hypothese ("Positionsabbau, kein These-Bruch") ist jetzt BESTAETIGT: Werte erholten sich auf/nahe Hochs.
- HARTE Fakten Micron Q3 FY2026 (06-24): Umsatz $41.46B (+346% YoY, schlaegt ~$35.7B), adj. EPS $25.11 (schlaegt ~$20.2), Bruttomarge 84.9% (+10pp QoQ), NAND-Rekord $9.9B (+361% YoY). Q4-Guidance: Umsatz $50B +/-1, EPS ~$31, GM ~86%. HBM3E/HBM4 ausverkauft bis 2027 in 2028 hinein; Rekord-FCF, Q4-FCF >$30B; ~$22B Kundenzusagen (~$18B Anzahlungen). Aktie +~13-16%. PTs angehoben (Susquehanna/Barclays $2.000).
- Depotkurse: SK Hynix KRW 2,917,000 (+13.06% 06-25, nahe 52W-Hoch 2,987,000; US-Listing-Plan ~$29.4B). Micron ~$1,165.94 (Konflikt). SanDisk ~$2,150.83 (ATH-Schluss 2,273.73 am 06-22; +~4.000% 1J; Kioxia-JV bis 2034). Kioxia ~92,500 EST (+660% YTD; FY2026 Umsatz Y2.34T +37%, Nettogewinn Y554B +104%; JFM Op-Gewinn Y596.8B Rekord ~15x; Apr-Jun-Guidance Op-Marge ~74%).
- Makro-Regimewechsel (neu, hart): FOMC 06-17 (Warsh, erste Sitzung) haelt 3.50-3.75%, Easing-Bias entfernt, Median-Dot 2026 3.8% impliziert eine ERHOEHUNG, Senkungen auf 2027-28 verschoben; CPI Mai +4.2% YoY (Kern +2.9%), Energie +23.5% YoY; 2026-Iran-Krieg/Hormuz-Oelschock (Brent ~$80-82, Szenarien $100-200); Stagflations-/Rezessionsrisiko diskutiert. Oracle Q4 (RPO +$85B auf $638B, Cloud-Infra +93%) bestaetigt AI-Datacenter-Nachfrage.
- Einordnung: These nicht nur intakt, sondern fundamental GESTAERKT durch harte Daten (Preis, Marge, HBM-Backlog, FCF, Guidance). Boom-Ampel Gruen auf Fundamentaldaten. Neues Leitrisiko ist NICHT These-Bruch, sondern (a) parabolische Kursdehnung nach riesigen Laeufen und (b) hawkisches Makro (Warsh-Fed-Hike-Risiko, 4.2% Inflation, Oelschock, Stagflation). Keine Kauf-/Verkaufs-Gewissheit ohne Positionsgroessen.
- Datenluecken/Konflikte: Positionsgroessen/Gewichte/Einstaende weiter offen (P0-Blocker); MU- und SNDK-Preiskonflikt (siehe source_conflicts); Kioxia-Preis nur impliziert; Micron-GM 84.9% aussergewoehnlich (belegt, gegen 10-Q pruefen); 10Y/FX und Follow-on-/Watch-Kurse nicht neu geholt (06-05 stale); kein bestaetigter Depot-Katalysator in Fenster heute+5T.
- 10:19-Intraday-Update (Frischkurse): MU 06-25-Schluss frisch $1,213.56 (vorher $1,165.94), AH -5,1% auf $1,152; SNDK $2,335.00 nahe ATH (vorher $2,150.83); SK Hynix 06-26-Schluss ~KRW 2,919,000 (haelt nahe Vorschluss, intraday 52W-Hoch 2,987,000 beruehrt); Kioxia 06-26-Schluss ~JPY 92,180 (-11,3% vs Vorschluss 103,850). Lesart: ERSTE harte Gewinnmitnahme in den am staerksten gelaufenen Namen (Kioxia, Micron-AH) - Timing-Achse von 5 auf 4, Fundamental unveraendert hart. KEIN These-Bruch (keine Preis-/Margen-/Guidance-Widerlegung).

## 2026-06-06 - Weekend-Brief: zweite Memory-Abwaertssession + Payrolls-Schock

- Fakten (06-05 Schluss): Depot gemischt-schwach. MU USD 864.01 (-13.25% nach 996.00), SNDK USD 1,559.32 (-11.39% nach 1,759.68), SK Hynix KRW 2,080,000 (-9.49%, KRX-Schluss), Kioxia JPY 78,140 (+1.59%, TSE-Schluss, einziger Depotwert im Plus). Follow-on: AVGO 395.54 (-5.58%), MRVL 297.74 (-5.91%), ANET 157.82 (-4.93%), VRT 300.51 (-7.23%), WDC 532.31 (-7.50%), STX 887.20 (-4.19%).
- Schluesselbeobachtung: Memory/Chips fielen am 06-05 hart, waehrend der breite Markt nach starken Jobdaten stieg ("AI trade falters / tech left behind"). Relative Schwaeche der Speicherwette nahm zu; MU/SNDK ca. -20-22% in zwei Sitzungen von Allzeithochs.
- Makro: US-Payrolls Mai +172k (vs ~80k Konsens), Arbeitslosenquote 4.3%, Mar/Apr +93k revidiert. 10Y sprang auf ca. 4,54% (Hoch seit 05-21), 2Y auf ca. 4,16%; Zinssenkungshoffnungen gedaempft -> staerkerer Realzins-Gegenwind fuer hohe Multiples.
- Weiche/sekundaere Signale: Nvidia-CEO Huang nannte Micron als qualifizierten HBM4-Lieferanten (positiv), Aktie fiel trotzdem; heftiger baerischer SNDK-Put-Flow; Analysten heben Ziele weiter (MS MU $1.050, Susquehanna SNDK $3.250) - reine Meinung ohne neue EPS-/Margenrevision; "AI-Spending rational phase"-Narrativ.
- Einordnung: Boom-Ampel bleibt Gruen/Gelb, Timing klar gelber. Kombination weicher Signale (Momentumbruch + relative Schwaeche gegen steigenden Markt + hoehere Realzinsen + Crowding-/Positionsabbau nahe Hochs) legt eine HANDLUNGSPRUEFUNG zu Timing/Positionsgroesse nahe - aber KEIN harter These-Bruch: keine Speicherpreis-, Margen-, Guidance-, EPS- oder FCF-Widerlegung. Keine Kauf-/Verkaufs-Gewissheit.
- Datenluecken: SK-Hynix/Kioxia 5D/OHLC-Historie und absolute Kioxia-EPS fehlen; FX USD/KRW unbestaetigt (~1.500+?), USD/JPY ~159,9; Realzins 06-05 zu bestaetigen; Positionsgroessen/Einstaende/Gewichte weiter offen.

## 2026-06-04/05 - Risk-off-Phase (verdichtet, superseded durch 06-26)

- Verlauf: Broadcom-Risk-off (06-04) erreichte Depotwerte; am 06-05 zweite harte Memory-Abwaertssession + Korea-Politikrisiko (Arbeitsminister zu AI-Uebergewinn-Teilung, asiatischer Tech-Selloff SK Hynix -8.6%). Tiefststaende der Phase: MU ~$864 (06-05), SNDK ~$1,559, SK Hynix KRW 2,080,000.
- Harte Belege blieben intakt: Broadcom-Q2 (AI-Semi-Umsatz $10.8B +143% YoY, Q3-Erwartung $16.0B), Kioxia Investor Day (Data-Center/Enterprise-Mix-Ziel, LTAs, Capex ~Y470B p.a.).
- Einordnung damals: kein harter These-Bruch, Hypothese = Crowding-/Positionsabbau. -> Durch Micron Q3 am 06-24 BESTAETIGT (siehe 06-26-Eintrag); Werte erholten sich auf/nahe Hochs.
- Strukturell (06-05): Repository auf CSV-only umgestellt (Datenbank/Python-Pflicht entfernt; neue CSV-Datenebene + Report-Retention 7-14 Tage).

## 2026-06-02 bis 2026-06-03 - Depot- und Watchlist-Entscheidungen

- Kioxia ist seit 2026-06-02 aktive Depotposition; SanDisk und Kioxia bilden zusammen den NAND-/Enterprise-SSD-Bucket.
- Fuer "nur eine Aktie aus den vier Depotwerten" bleibt SK Hynix im Basisszenario vorn; Micron ist die liquidere US-Alternative.
- HDD-/Nearline-Watch wurde positiver, aber WDC/STX brauchen Primaertranskripte, Exabytes, LTAs, ASPs, Margen, FCF und EPS-Revisionen.
- Marvell bleibt priorisierter Follow-on-Deep-Dive, aber nur harte Design-Win-/Umsatz-/Marge-/EPS-Daten duerfen eine Opportunity-Cost-These tragen.

## Archiv

Aeltere Details sind auf Kurzarchive reduziert: `03_state/archive/`.
