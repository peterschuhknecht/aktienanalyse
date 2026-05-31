# Monitoring-Signale fuer Depot und Watchlists

Stand: 2026-05-31.

Diese Datei definiert, was bei jeder sachlichen Aktien-, Depot-, Branchen-, Watchlist- oder Zukunftsanfrage fuer alle verfolgten Werte geprueft werden soll.

## Abdeckung

Immer pruefen:

- Aktive Depotwerte aus `05_data/covered_symbols.md`.
- HDD-/Nearline-Beobachtungsliste: Seagate und Western Digital.
- Primaere Follow-on-Watchlist: Arista, Broadcom, Marvell, Vertiv, Samsung.
- Erweiterte Watchlist, wenn das Thema dazu passt: Eaton, GE Vernova, Corning, Constellation, Vistra, Bloom, AMAT, LRCX, ASML, Amkor.

## Rendite- und Momentum-Check

Fuer jeden relevanten Wert nach Moeglichkeit erfassen:

| Signal | Zweck |
|---|---|
| 1D, 5D, 1M, 3M, YTD | Erkennen, ob Rendite kurzfristig oder mittelfristig dreht. |
| Relative Entwicklung zu Nasdaq 100, SOX/SMH und relevanter Peer-Gruppe | Pruefen, ob der Wert nur mit dem Markt steigt oder wirklich ausbricht. |
| Abstand zu 52W-Hoch und 52W-Tief | Momentum und Rueckschlagsrisiko einordnen. |
| Reaktion auf Earnings, Guidance oder Analystenrevisionen | Nachhaltigen Impuls von reinem Sentiment trennen. |
| Volumen- oder Gap-Signal, falls verfuegbar | Warnsignal fuer echte Neubewertung oder Uebertreibung. |

## Wann "Rendite dreht nach oben" gilt

Ein Wert soll als "Rendite dreht nach oben" markiert werden, wenn mindestens zwei Punkte zutreffen:

- 1M-Performance > +15 Prozent und besser als Nasdaq 100 oder SMH.
- 3M-Performance > +30 Prozent und besser als Peer-Gruppe.
- Neues 20D- oder 52W-Hoch nach Earnings, Guidance-Anhebung oder hochwertiger Branchenmeldung.
- Forward-EPS-Schaetzungen oder Guidance steigen gleichzeitig mit dem Kurs.
- Relative Staerke verbessert sich gegen direkte Peers.
- Ruecksetzer werden schnell gekauft und die Aktie bleibt nahe Hoch.

## Umfeld-Check

Fuer jeden relevanten Wert einordnen:

| Umfeldbereich | Positiv | Negativ |
|---|---|---|
| Nachfrage | Hyperscaler-Capex, AI-Workloads, Kundenvertraege, Backlog steigen | Capex-Pause, Stornierungen, ROI-Zweifel |
| Preise | ASPs, DRAM/NAND/HDD-Preise, Margen steigen | Preise fallen trotz Nachfrage |
| Angebot | Kapazitaet bleibt knapp, Lieferzeiten lang, Yield limitiert | Schneller Kapazitaetsausbau, Ueberangebot absehbar |
| Bewertung | EPS-Schaetzungen steigen schneller als Kurs oder Bewertung bleibt plausibel | Kurs steigt nur durch Multiple, ohne Gewinnrevision |
| Wettbewerb | Technologische Fuehrung, Design-Wins, Kundenqualifikation | Marktanteilsverlust, Qualifikationsprobleme |
| Makro/Politik | Strom, Grid, Foerderung, Capex-Umfeld verbessern sich | Exportkontrollen, Zinsen, Energie-/Regulierungsrisiken |

## Branchenspezifische Fruehindikatoren

Spot- und Deal-Daten sind Fruehindikatoren, keine alleinige Bewertungsgrundlage. Sie sollen Timing, Knappheit und moegliche Wendepunkte anzeigen. Eine These wird erst staerker oder schwaecher, wenn Spotdaten durch Vertragspreise, Unternehmensmargen, Guidance, EPS-Revisionen oder Hyperscaler-Capex bestaetigt werden.

| Signal | Bevorzugte Quelle | Beobachtung | Bullisches Signal | Warnsignal |
|---|---|---|---|---|
| GPU-Compute-Spotpreise | Ornn OCPI; falls nicht zugaenglich GPUs.io als niedrigerwertiger Cross-Check | H100/H200/B200-Mietpreise und Verfuegbarkeit | Preise bleiben hoch oder steigen, besonders bei B200/H200; Verfuegbarkeit knapp | Preise fallen mehrere Wochen, Verfuegbarkeit entspannt sich sichtbar |
| DRAM-/DDR5-Spotpreise | TrendForce/DRAMeXchange | DDR5 16Gb, DDR5 eTT, Server-DIMM und relevante DRAM-Preisreihen | Spotpreise steigen und Contract-Preise ziehen nach | Spotpreise fallen mehrere Wochen, Contract-Preise folgen nach unten |
| NAND-/SSD-Preise | TrendForce/DRAMeXchange | NAND-Spot, NAND-Contract, Enterprise-SSD und SSD-Street-Preise | Enterprise-SSD- und NAND-Preise steigen oder bleiben trotz hoher Volumina stabil | NAND-/SSD-Preise fallen trotz AI-Nachfrage und belasten SanDisk-/Micron-These |
| SOX/SMH-Momentum | Nasdaq PHLX Semiconductor Index, SMH, etablierte Finanzdatenanbieter | 50-/200-Tage-Abstand, YTD, 1M, 3M, Forward-KGV | Breite Halbleiterstaerke plus steigende EPS-Schaetzungen | Index deutlich ueber Trend, aber Schaetzungen/Margen bestaetigen nicht |
| Hyperscaler-Capex | Unternehmensberichte und Earnings Calls von MSFT, AMZN, GOOGL, META, ORCL | Capex-Guidance, AI-Cluster, Leasing, Strom-/Datacenter-Verpflichtungen | Capex bleibt hoch oder steigt mit klarer AI-Begruendung | Capex-Pause, ROI-Zweifel oder Projektverschiebungen |
| Private AI-Infrastruktur-Deals | PitchBook Advanced Computing / AI Infrastructure; hochwertige Finanzmedien als Sekundaerquelle | Quartalsweise Deal Value und Deal Count fuer Semiconductor, Quantum, Datacenter, Compute | Deal Value bleibt hoch und PE/VC finanzieren Infrastruktur weiter | Deal Value kuehlt deutlich ab, besonders bei grossen Infrastrukturtransaktionen |

## Quellen- und Bestaetigungslogik

- Ornn OCPI ist fuer Compute-Spotpreise bevorzugt, wenn Daten zugaenglich sind; GPUs.io nur als oeffentlicher Cross-Check oder Suchspur markieren.
- TrendForce/DRAMeXchange ist fuer Memory-Spot-, Contract-, Server-DIMM-, LPDDR-, GDDR-, NAND- und SSD-Preise bevorzugt.
- Spotpreise sind kurzfristig, volatil und teils nur Ausschnitte des Marktes. Ohne Bestaetigung durch Vertragspreise, Guidance, Margen oder EPS-Revisionen lautet der Status hoechstens "Watch".
- Bei Widerspruch zwischen Spotdaten und Unternehmensquellen werden Primaerquellen hoeher gewichtet und der Konflikt in `03_state/open_questions.md` festgehalten.

## Makro- und Sentiment-Check

Makro- und Sentiment-Signale aus `05_data/macro_market_signals.md` sind ein Pflichtcheck fuer echte Depot-, Branchen-, Watchlist- und Zukunftsanalysen. Zinsen, Realzinsen, Finanzbedingungen und Kreditspreads sind fundamental relevant. Fear & Greed, AAII und Margin Debt sind nur Timing-/Crowding-Signale.

| Signal | Quelle | Positiv | Negativ |
|---|---|---|---|
| US 2Y/10Y und Yield Curve | FRED / U.S. Treasury | Zinsen stabil oder fallend, Kurve normalisiert ohne Stress | 10Y oder Real Yield steigen deutlich, Kurve signalisiert Stress |
| Fed-Erwartungen | CME FedWatch, FOMC/SEP | Zinspfad entspannt sich ohne Wachstumsbruch | hawkisher Repricing-Schock |
| Finanzbedingungen und Kredit | Chicago Fed NFCI, High Yield OAS | Bedingungen locker, Spreads stabil | NFCI verschlechtert sich, HY-Spreads weiten sich |
| Volatilitaet und Dollar | Cboe VIX, DXY/Trade Weighted USD | VIX ruhig, USD stabil | VIX springt, USD steigt stark |
| Sentiment/Crowding | CNN Fear & Greed, AAII, FINRA Margin Debt | keine Extreme oder konstruktive Skepsis | extreme Gier ohne EPS-Bestaetigung oder stark steigender Leverage |

## Aktueller Ergebnisstatus 2026-05-29

| Bereich | Status | Kurzgrund |
|---|---|---|
| Depotwerte | Besser, aber ueberhitzt | SK Hynix schloss am 2026-05-29 +1.92% am 52W-Hochbereich; Micron gab am 2026-05-28 leicht nach, drehte aber nachboerslich positiv; SanDisk stieg +3.25% und bleibt direkt am Hoch. SanDisk zeigt weiter die hoechste Beta-/Rueckschlagsgefahr. |
| HDD-/Nearline-Watchlist | Leicht besser, aber kein Reaktivierungsbeschluss | STX und WDC bleiben nahe 52W-Hochs; neue Meldungen zu STX-Exchangeable-Notes und WDC-Board-Ergaenzung sind keine operativen Reaktivierungssignale. Reaktivierung braucht weiter Exabytes, LTAs, Margen, FCF und EPS-Revisionen. |
| Primaere Follow-on-Watchlist | Samsung verbessert, Marvell/Broadcom weiter wichtig | Samsung schloss +5.84% und HBM4E-Sample-Meldungen machen Samsung zum neuen Aufholer-Watch; MRVL bleibt nach AI-Bookings wichtig; Broadcom-Q2 am 2026-06-03 wird der naechste harte Pruefpunkt fuer Custom Silicon/Networking. |
| Erweiterte Watchlist | Gemischt bis besser | AMAT-/WFE- und NVIDIA-/Photonics-Kontext positiv; AMD und Oracle stark. Corning, GEV und Bloom zeigen Tagesruecksetzer bzw. Bewertungsrisiken. |
| Makro/Sentiment | Leicht besser, aber weiter bewertungssensitiv | U.S. Treasury zeigt per 2026-05-28 10Y 4.45%, 2Y 3.99% und 10Y Real Yield 2.06%, jeweils leicht niedriger als letzter Cache; HY OAS 2.71% per 2026-05-27 und NFCI -0.510 per 2026-05-22 ohne Stress. |

Offen: 1M-/3M-Renditen und relative Staerke gegen Nasdaq 100/SMH sind noch nicht strukturiert berechnet; dafuer ist eine Zeitreihe oder lokale SQLite-/CSV-Historie sinnvoll.

### Refresh 2026-05-29 14:16 CEST

| Bereich | Status | Kurzgrund |
|---|---|---|
| Depotwerte | Besser, aber ueberhitzt | Micron +2.71% und SanDisk +1.42% im US-Pre-Market; SK Hynix schloss +1.92%. Der neue SanDisk/Bernstein-Transcript stuetzt NAND-/AI-Datacenter-Nachfrage, Pricing und LTAs. SanDisk bleibt aber die volatilste Beta-Position. |
| HDD-/Nearline-Watchlist | Leicht besser, keine Reaktivierung | STX +0.83% und WDC +1.28% im Pre-Market; keine neuen Primaerdaten zu Exabytes, LTAs, Margen oder Free Cash Flow. |
| Primaere Follow-on-Watchlist | Aktiv, aber gemischt | Broadcom +1.77%, Vertiv +1.91%, Samsung +5.84% am Korea-Schluss; Marvell -0.99% im Pre-Market. Broadcom-Q2 am 2026-06-03 bleibt der harte Pruefpunkt. |
| Erweiterte Watchlist | Gemischt | Kioxia +7.46% bestaetigt NAND-Readthrough; ASML +2.08% und Schneider +1.38% positiv. Bloom Energy -2.24% im Pre-Market und Forward-PE 125.70 bleiben Bewertungswarnung. |
| Makro/Sentiment | Unveraendert zum 10:05-Lauf | Keine neueren U.S.-Treasury-Daten als 2026-05-28; Realzinsen bleiben hoch, Kreditstress zuletzt unauffaellig. |

### Refresh 2026-05-30 08:08 CEST

| Bereich | Status | Kurzgrund |
|---|---|---|
| Depotwerte | Besser, aber ueberhitzt | SK Hynix schloss am 2026-05-29 +1.92%; Micron +5.14% und SanDisk +3.25% am US-Schluss 2026-05-29. Alle drei bleiben sehr nahe an Hochs; positives Momentum ist zugleich Crowding-/Rueckschlagsrisiko. |
| HDD-/Nearline-Watchlist | Leicht positiv, keine Reaktivierung | STX -0.10% und WDC +0.01% am 2026-05-29; keine neuen Primaerdaten zu Exabytes, LTAs, ASPs, Margen oder Free Cash Flow. |
| Primaere Follow-on-Watchlist | Besser, naechster Pruefpunkt Broadcom | Broadcom +4.73% fast am Hoch, Arista +2.70%, Marvell stabil, Samsung +5.84%. Broadcom-Q2 am 2026-06-03 bleibt der harte Test fuer Custom Silicon/Networking. |
| Erweiterte Watchlist | Dell deutlich besser, NVIDIA-Roadmap-Watch, Power/WFE gemischt | Dell +32.76% nach Q1-FY2027 mit USD 16.132B AI-optimized server revenue und ca. USD 60B FY27-AI-Server-Erwartung ist neuer Nachfrageproxy; NVIDIAs GTC-Taipei/COMPUTEX-Roadmap stuetzt AI-Factory-/Networking-/Optics-Watch. Oracle +10.84% und Microsoft +5.45% positiv. GEV, Bloom, Intel und NVIDIA schwach bis gemischt. |
| Makro/Sentiment | Neutral bis leicht gemischt | U.S. Treasury per 2026-05-29: 10Y 4.45%, 2Y 3.98%, 10Y Real Yield 2.07%. VIX ca. 15.3 laut Sekundaercheck ohne Volatilitaetsstress. Kein neuer Zinsschock, aber Realzinsen bleiben Bewertungsgegenwind. |

Einordnung: Rendite und Umfeld drehen fuer AI-Server-/Memory-/Networking erneut nach oben, vor allem durch Dell, Micron, SanDisk, Broadcom, Oracle und Microsoft. Das ist ein positives Signal fuer die Boom-Rahmenbedingungen, aber keine automatische Kaufentscheidung, weil viele Werte nahe 52W-Hochs und mit hohen Multiples handeln.

### Refresh 2026-05-31 17:42 CEST

| Bereich | Status | Kurzgrund |
|---|---|---|
| Depotwerte | Unveraendert besser, aber ueberhitzt | Wegen Wochenende bleiben die Kursdaten beim 2026-05-29-Schluss: SK Hynix, Micron und SanDisk sind sehr nahe an Hochs. Die naechsten neuen Bewegungsimpulse kommen von NVIDIA/COMPUTEX, US-Makro und Broadcom-Q2, nicht von neuen Wochenendkursen. |
| HDD-/Nearline-Watchlist | Leicht positiv, keine Reaktivierung | WDC und STX haben am 2026-06-02/03 Konferenzen. Erst neue Aussagen zu Exabytes, LTAs, ASPs, Margen, FCF oder 2027/2028-Sichtbarkeit waeren echte Reaktivierungssignale. |
| Primaere Follow-on-Watchlist | Aktiv, Broadcom im Fokus | Broadcom-Q2 am 2026-06-03 ist der harte Pruefpunkt fuer Custom AI Accelerators, AI Networking und Hyperscaler-ASICs. NVIDIA/COMPUTEX kann HBM/Networking/Optics-Roadmap-Erwartungen erhoehen. |
| Erweiterte Watchlist | Dell bleibt Nachfrageproxy, nicht Depottrigger | Dell-BofA am 2026-06-02 muss zeigen, ob AI-Server-Wachstum auch Marge, Backlog-Qualitaet, Storage-Attach, FCF und EPS stutzt. |
| Makro/Sentiment | Neutral bis gemischt | US-Zinsen/Kreditdaten stabil: 10Y 4.45%, 2Y 3.98%, Real Yield 2.07%, HY OAS 2.72%, NFCI -0.510. Negativ gemischt: China Manufacturing PMI nur 50.0 und Hormuz-/Energiepreisrisiko bleibt aktiv. |

Einordnung: Die Boom-Rahmenbedingungen bleiben Gruen/Gelb. Unternehmensseitig verbessert sich der AI-Infrastruktur-Readthrough durch Dell/NVIDIA weiter; makroseitig ist die Woche aber empfindlich, weil Payrolls, ISM, Eurozonen-Inflation und Energiepreise den Diskontsatz und Risikoappetit schnell drehen koennen.

### Zusatz 2026-05-31 17:43 CEST: Dell-Transcript als harter Engpass-Readthrough

| Bereich | Status | Kurzgrund |
|---|---|---|
| Depotwerte | Besser, aber weiter ueberhitzt | Dell nennt Memory als primaere Komponentengrenze und erwaehnt DRAM/NAND; das bestaetigt das Umfeld fuer SK Hynix, Micron und SanDisk, ohne direkte Margen-/EPS-Daten fuer diese Werte zu liefern. |
| HDD-/Nearline-Watchlist | Leicht positiv, keine Reaktivierung | Dell nennt Hard Drives spaeter in der Engpasskette. Das ist ein positives Umfeldsignal, aber STX/WDC brauchen weiter eigene Exabytes-, LTA-, ASP-, Margen- und FCF-Bestaetigung. |
| Follow-on-Watchlist | Aktiv, Broadcom/Dell/NVIDIA im Fokus | Dell zeigt starke AI-Server-Nachfrage und Engpaesse; Broadcom-Q2 am 2026-06-03 und NVIDIA/COMPUTEX liefern die naechsten harten bzw. Roadmap-Pruefpunkte. |
| Makro/Sentiment | Neutral bis gemischt | Kein Kredit-/Volatilitaetsstress, aber Realrendite 2.07% und China-PMI 50.0 halten die Ampel nicht sauber gruen. |

Einordnung: Das neue Dell-Transcript ist eine relevante Kombination aus hartem Backlog-/Pipeline-Signal und Managementaussage zu Memory-/Storage-Engpaessen. Es rechtfertigt eine Handlungspruefung der Watchlist-Prioritaeten, aber keine automatische Depotentscheidung.

## Ausgabeformat fuer Folgeantworten

Wenn eine Anfrage eine echte Analyse ist, im Fazit kurz melden:

| Bereich | Status |
|---|---|
| Depotwerte | Rendite/Umfeld: besser, schlechter, unveraendert oder unklar |
| Follow-on-Watchlist | Neue Ausbruchssignale oder "keine neuen Signale" |
| HDD-/Nearline-Watchlist | Neue Reaktivierungs-/Warnsignale oder "unveraendert" |
| Boom-Rahmenbedingungen | Gruen, Gelb, Rot oder Unklar |
| Makro/Sentiment | besser, schlechter, unveraendert oder unklar |

## Speicherregel

- Aktuelle Kurse und Performance in `05_data/latest_quotes.md` speichern.
- Relevante Nachrichten in `05_data/latest_news.md` speichern.
- Echte Signalwechsel in `03_state/evaluation_log.md` dokumentieren.
- Betroffene Unternehmensakte oder Watchlist aktualisieren, wenn sich These, Risiko oder Reaktivierungssignal aendert.
- Quellenqualitaet gemaess `01_knowledge/source_quality.md` pruefen.
