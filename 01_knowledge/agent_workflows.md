# Agenten-Workflows

## Pflicht-Ausgabeblock (Ampel + Termine)

Jede sachliche Aktien-/Depotantwort - besonders der `start`-Rundgang - beginnt mit diesen zwei Bloecken, danach folgt der eigentliche Report.

### 1. Depot-Ampel (0-10; 10 = gruen/top, 0 = rot)

- Fundamental: Zahlen, Margen, Guidance, Preise/ASPs, Backlog, FCF.
- Timing: Momentum, Crowding, Bewertungsdehnung, Realzins/Makro.
- Handlungsnaehe: Naehe zu konkreter Aktion. Ohne bekannte Positionsgroessen (P0) maximal 4.

Rubrik je Achse: 9-10 sehr stark/klar, 7-8 stark, 5-6 gemischt, 3-4 schwach/blockiert, 0-2 negativ. Gesamt = gewichtetes Urteil (Fundamental wiegt am hoechsten), nicht das arithmetische Mittel. Je aktive Position eine Kurzzeile `Name Fund/Timing/Aktion`. Danach 2-3 Saetze Kurzfassung: was hat sich seit dem letzten Lauf HART geaendert - in EINFACHER Sprache ohne unerklaerte Fachbegriffe (siehe Darstellungsregeln/Verstaendlichkeit). Scores als neue Zeile in `05_data/depot_ampel.csv` fortschreiben (Zeitreihe).

CASH-PHASE-SEMANTIK: Solange das Depot Cash ist, ist die Ampel die WIEDEREINSTIEGS-Sicht - Fundamental = These-/Datenlage der Reentry-Ziele; Timing = Entry-Qualitaet JETZT (nicht Halte-Qualitaet); Handlungsnaehe = Naehe zum Entry-Trigger (Entry-Gate-Status). Kurzzeilen je Reentry-Ziel statt je Position.

### 2. Terminuebersicht (Depot-Gewicht 0-10; 10 = extrem wichtig)

- Pflichtfenster heute + 5 Kalendertage aus `05_data/upcoming_events.csv`, plus nach `depot_weight` sortierte Vorschau bis ~30 Tage.
- Gewicht: 9-10 direkter Depot-Katalysator (Earnings einer Kernposition), 6-8 relevanter Makro-/Peer-Termin, 3-5 indirekt, 0-2 Randnotiz.
- Je Zeile: Datum, Event, Gewicht, ein Satz Relevanz. TBD-/erwartete Termine klar markieren.

## Depot-Performance-Abschluss (Pflicht ganz am Ende des `start`-Rundgangs)

Jeder `start`-Rundgang ENDET mit ZWEI Tabellen (Nutzerwunsch 2026-06-30), ganz unten:

1. "Korrigierte Performance-Sicht": Depotstart-Basis (EUR 150.000, Start 22.04.2026), aktueller Depotwert, Gewinn absolut + %, Cash-Quote, geschaetzter Trailing-Peak + Abstand. Darunter die Positionszeilen (Stueck, aktueller Wert EUR, Gewicht). Quelle: `05_data/portfolio_positions.csv` (inkl. Zeile `DEPOT`). WICHTIG: Einzel-Einstaende sind durch Umschichtungen verfaelscht -> Gewinn/Verlust NUR auf Depot-Ebene gegen die 150.000-Basis (und Trailing-Peak) rechnen, nie per Position. Positionswerte mit frischen Kursen aktualisieren.
2. "Risikogrenzen-Status": je Limit Grenze, aktueller Wert, Ampel-Status (gruen/gelb/rot). Quelle: `05_data/portfolio_risk_limits.csv`. Zeilen: Einzelposition (Warn 30/Max 35%), HBM/DRAM-Bucket (60/70%), NAND-Bucket (30/40%), Depot-Giveback (-15% NAND trimmen / -25% Leg de-risken, gemessen am Trailing-Peak), Basis-Schutz (Floor ~180-190k). FX ist KEINE Regel (Nutzerwunsch raus); EUR/USD nur als Datenpunkt frisch ziehen. Gewinnmitnahme/Verkauf nur bei These-Bruch oder Limit-Verletzung; kein Cash-Puffer (voll investiert gewollt).

CASH-PHASE-VARIANTE (aktiv seit 2026-07-01, gilt bis Wiedereinstieg vollzogen): Solange das Depot 100% Cash ist, ersetzt die Cash-Sicht die Positionszeilen. Tabelle 1 zeigt: realisierter Stand EUR 243.288,43 (netto) vs 150.000-Basis = +62,2%, Verkaufsdatum 01.07.2026, KEIN Trailing-Peak/Giveback (startet neu ab Entry). Statt Positionstabelle: die drei Reentry-Ziele (MU 35% / SK Hynix 33% / SanDisk 32%) mit frischen Kursen + Entry-Gate-Status aus `02_context/portfolio_policy.md`. Tabelle 2 (Risikogrenzen): nur Basis-Schutz aktiv (Cash-Stand vs Floor); uebrige Limits als "schlaeft bis Entry" fuehren. Nach dem Entry gilt wieder das Standardformat (Nach-Entry-Reset in `portfolio_policy.md`).

## Watchlist-/Zusatzwerte-Uebersicht (Pflicht ganz am Ende des `start`-Rundgangs, NACH dem Depot-Performance-Abschluss)

Nutzerwunsch 2026-07-02: Der `start`-Rundgang endet nach dem Depot-Performance-Abschluss mit einer kurzen Uebersicht der zusaetzlich beobachteten Werte plus Einstiegs-/Alpha-Urteil - lohnt dort ein Einstieg, d. h. ist die erwartete Rendite ueber die naechsten Monate HOEHER als bei den Hauptaktien UND dem Markt?

- Scope (Nutzerwunsch 2026-07-02: andere Wellen mitnehmen): Standard sind Primary-Follow-on (AVGO, MRVL, ANET, VRT, Samsung), HDD-Watch (STX, WDC) UND Extended/andere Wellen - Power/Grid/Energie (CEG, VST, GEV, ETN, BE), Optik (GLW/Corning), WFE/Packaging (ASML, AMAT, LRCX, AMKR). Background (Hyperscaler/GPU: NVDA, MSFT, AMZN, GOOGL, META, AMD ...) nur bei LIVE-Katalysator/Alert.
- Andere Wellen (Power/Grid/Optik/WFE) sind besonders als ECHTE Diversifikation zu bewerten: geringere Korrelation zum Memory-PREISzyklus als die Follow-on-Halbleiter. Daher zwei Dimensionen trennen - (1) Rendite-Alpha vs Hauptaktien/Markt UND (2) Diversifikations-Nutzen (Korrelation). Ein Wert kann trotz nur marktnaher Rendite interessant sein, wenn er echte Streuung bringt; das explizit kennzeichnen.
- Bei grossem Scope: jeden beurteilten Wert frisch bepreisen; Werte ohne Frischkurs als Datenluecke ("kein Urteil") fuehren, nicht stillschweigend weglassen. Low-Priority-Namen ohne Alert kompakt in einer Sammelzeile.
- NAND-Alternative: Kioxia (285A.T) - seit dem 3-Namen-Entscheid (2026-07-02) NICHT mehr Hauptaktie, sondern NAND-Watch. Beurteilen als guenstigere SanDisk-ALTERNATIVE/Swap im GLEICHEN NAND-Bucket (JV bis 2034 -> hoch korreliert, KEINE Diversifikation); Frage ist relative Bewertung vs SanDisk, nicht Zusatzposition.
- Pflicht-Frischkurs gilt auch hier: fuer jeden beurteilten Wert Kurs frisch ziehen (Datum/Quelle). Ohne frischen Kurs KEIN Alpha-Urteil -> als Datenluecke markieren.
- Je Zeile: Wert, frischer Kurs (+ Tagesbewegung), Forward-KGV, ein Satz Status, und ein Alpha-Urteil in drei Stufen ggue. (a) Hauptaktien (MU/SK Hynix/SanDisk) UND (b) Breitmarkt (S&P 500/Nasdaq 100): "besser" / "gleichwertig" / "schlechter".
- "Einstieg pruefen" nur, wenn ein Wert klar HOEHERE erwartete Rendite als Hauptaktien UND Markt bietet, mit harter Begruendung (Bewertung, Katalysator, EPS-Revisionen, relative Staerke) - nicht nur gute Story. Sonst "Watch only".
- Kausalattribution + Alpha-Regeln gelten (keine erzwungenen News; Alpha explizit vs Markt). Kurz halten; Deep-Dive nur bei echtem Alert.

## Darstellungsregeln (Verstaendlichkeit + Datum + Waehrung)

Gelten fuer jede Chat-Ausgabe und jeden Report, NICHT fuer die CSV-Speicherung.

### Verstaendlichkeit (Nutzerwunsch 2026-07-02, PFLICHT fuer den `start`-Rundgang)

Die Auswertung muss ohne Boersen-Fachwissen lesbar sein. Fachbegriffe sind erlaubt (Praezision), aber nie unerklaert.

- Jeden Fachbegriff beim ERSTEN Auftreten in Klammern kurz auf Deutsch erklaeren. Beispiele: "Forward-KGV (Kurs geteilt durch den fuer die naechsten 12 Monate erwarteten Gewinn; je niedriger, desto guenstiger)", "Sidecar (automatische kurze Handelspause an der Boerse Seoul)", "settled Close (endgueltiger bestaetigter Schlusskurs)", "ATH (Allzeithoch)", "HBM (Spezial-Speicherchips fuer KI-Rechenzentren)".
- Englische Trader-Begriffe eindeutschen, wenn es ein gutes deutsches Wort gibt: "Flush" -> "Ausverkauf", "Rout" -> "Kurssturz", "hot/soft Print" -> "staerker/schwaecher als erwartet", "Tape" -> "Marktlage", "Crowding" -> "zu viele Anleger im selben Trade", "Giveback" -> "Rueckgabe vom Hoechststand".
- Zahlen einordnen statt nackt nennen: nicht nur "KGV 6", sondern "KGV 6 = sehr guenstig; ueblich waeren 10-15" bzw. was die Zahl praktisch bedeutet.
- Nach jeder Tabelle und jedem Pflichtblock 1 Satz Klartext: "Was heisst das praktisch fuer mich?"
- Die Kurzfassung nach der Ampel in einfacher Sprache schreiben (3-5 Saetze, keine unerklaerten Abkuerzungen); Details/Fachtiefe danach.
- Abkuerzungen sparsam; AHE, U3, WFE, LTA usw. nur mit Erklaerung.

- Datum: in der Ausgabe immer deutsches Format TT.MM.JJJJ (z. B. 26.06.2026), Uhrzeit 24h HH:MM. In CSV bleibt ISO 8601 (2026-06-26) fuer korrekte Sortierung und Eindeutigkeit.
- Waehrung: Fremdwaehrungen (KRW, JPY, ...) in USD umrechnen und USD primaer zeigen, Heimatwaehrung in Klammern, mit FX-Kurs und Datum. Beispiel: `$1.890 (KRW 2.917.000; USD/KRW 1.543,43, 25.06.2026)`.
- Der Heimatschluss bleibt der harte Fakt; die USD-Umrechnung ist abgeleitet. FX fuer JEDE Umrechnung frisch ermitteln (CSV-FX = Seed); ohne frischen FX die Umrechnung als Datenluecke markieren.
- FX-Seeds liegen in `05_data/macro_market_signals.csv` (Zeilen `FX USD/KRW`, `FX USD/JPY`).
- Zahlen in der Ausgabe in deutscher Notation: Tausenderpunkt, Dezimalkomma.

## Repository-Rundgang

Pflicht bei aktueller Lage, Zukunft, Depot, Kauf/Verkauf, Watchlist, Bewertung oder Branchenanalyse.

1. Inventar knapp: `rg --files -g '*.md' -g '*.csv'`.
2. Kern lesen: `START_HERE.md`, `AGENTS.md`, Depot/Policy, Marktthese, Boom-Status, passende Watchlists, `03_state/*`.
3. CSV zuerst lesen: `05_data/covered_symbols.csv`, `latest_quotes.csv`, `latest_news.csv`, `upcoming_events.csv`, `monitoring_status.csv`, `macro_market_signals.csv`, `peer_benchmarks.csv`, `data_quality_checks.csv`.
4. Nur relevante Unternehmensakten aus `02_context/companies/` lesen; bei Depot-/Wiedereinstiegsfragen die drei Reentry-Akten (micron.md, sk_hynix.md, sandisk.md), bei NAND-/Swap-Fragen zusaetzlich kioxia.md (NAND-Watch).
5. Pflicht-Frischkurs: fuer JEDE aktiv bearbeitete Aktie zuerst den aktuellen Kurs frisch aus hochwertiger Quelle holen (mit Datum/Zeit/Quelle); dann uebrige frische News/Fundamentaldaten; alles in CSV speichern. CSV-Kurse sind nur Seeds.
6. Bei Bewertung/Depotentscheidung Quality Gate manuell in `05_data/data_quality_checks.csv`, `source_conflicts.csv` und `decision_gate_results.csv` pruefen.
7. Ausgabe beginnt mit dem Pflicht-Ausgabeblock (Depot-Ampel 0-10 + gewichtete Terminuebersicht), danach Report, dann der Depot-Performance-Abschluss (Korrigierte Performance-Sicht) und ganz am Ende die Watchlist-/Zusatzwerte-Uebersicht mit Einstiegs-/Alpha-Urteil (siehe eigene Abschnitte).
8. Nur echte These-, Risiko-, Entscheidungs- oder Datenqualitaetswechsel in Markdown verdichten.
9. Reports nach 7-14 Tagen als CSV-/Log-Zeile archivieren; lange Report-Historien vermeiden.

## Daily-Brief-Workflow

Trigger: Daily Brief, Neuigkeiten, Cockpit, Statusseite, Kurzlage.

1. Scope: relevante Symbole, Depot, Watchlists und offene P0-Fragen bestimmen.
2. Frische Daten: Kurse, News, Events, Makro, Fundamentals, Operator-Signale und Branchenindikatoren pruefen. Kurs fuer jede genannte Aktie immer frisch ermitteln (CSV = Seed, nicht als aktueller Kurs ausgeben).
3. Schreiben: CSV-Caches aktualisieren; Markdown nur bei Entscheidung/These/Red-Flag.
4. Gate: `data_quality_checks.csv` und `source_conflicts.csv` pruefen; Blocker/Warnungen nennen.
5. Ausgabe im Chat: zuerst Pflicht-Ausgabeblock (Depot-Ampel 0-10 + gewichtete Terminuebersicht), dann Kurzfassung, Fakten, Einordnung, Rahmenbedingungen, Depotbewegung, Datenluecken.

## Bewertungsfragen

- Minimum Data Pack aus `01_knowledge/deep_dive_framework.md`.
- Aktuell neu pruefen: Kurs, Market Cap, TTM/Forward-KGV, Umsatz-/EPS-Wachstum, PEG, Margen, FCF, Guidance, naechste Termine, Peer-Daten. Der Kurs (und daraus Market Cap/KGV) ist fuer jede bewertete Aktie zwingend frisch zu ermitteln, nie aus CSV uebernehmen.
- Analysten-Kursziele sind Meinung; nur mit nachvollziehbaren EPS-/Umsatz-/Marge-/FCF-Revisionen hoeher gewichten.
- These nur bei harten Daten aendern: Zahlen, Guidance, Preise/ASPs, Margen, Kapazitaet/Yield, Kunden/LTAs/Backlog/Design-Wins, Revisionen, Regulierung, Makro-/Kreditstress.
- ZIEL IST ALPHA, nicht nur These-Bestaetigung (Nutzerwunsch 2026-07-02): explizit beurteilen, ob in den naechsten Monaten eine ueberdurchschnittliche Rendite ggue. Breitmarkt (S&P 500/Nasdaq 100) plausibel ist - erwartetes Chance/Risiko vs. Markt, Katalysatoren, Bewertungsspielraum, Zyklusphase. Nur marktnahe Erwartung rechtfertigt die konzentrierte Ein-Thesen-Wette NICHT; dann Cash/Markt-ETF als Benchmark-Alternative nennen.

## Portfolio-Fragen

- Zusaetzlich `01_knowledge/portfolio_risk_framework.md`, `02_context/portfolio_policy.md`, `05_data/portfolio_positions.csv`, `05_data/portfolio_risk_limits.csv`.
- Immer nennen: Konzentration, Korrelation, Waehrung, Liquiditaet, Katalysatorrisiko, Opportunity Cost, fehlende Nutzerdaten.
- Ergebnis als Szenario/Pruefung formulieren, nie als Gewissheit.

## Kausalattribution (Kurs-News-Abgleich)

Nutzerwunsch 2026-07-02: Newsabgleich massiv strenger. Kursbewegungen NICHT mit gesuchten Nachrichten erklaeren.

- Kausalzuordnung nur bei echter, hochwertiger, zeitlich passender Nachricht, die zur Bewegung passt (Richtung/Groesse/betroffene Werte). Sonst offen "keine saubere Nachrichtenerklaerung" sagen und hoechstens neutrale Mechanik VERMUTEN (Gewinnmitnahme, Rotation, Positionsabbau, Rebalancing).
- Widerspruchstest: erklaert dieselbe Nachricht mal Plus, mal Minus, ist sie keine Ursache -> verwerfen. Dauerthemen (Hormuz/Oel) nur bei NEUER harter Entwicklung + realer Marktreaktion.
- Vollstaendige Regeln in `01_knowledge/source_quality.md` (Abschnitt Kausalattribution).

## Kontextbudget

- Datei-Lesen mit `rg`, `sed -n`, `wc -l`, `head`.
- Keine langen Dumps. CSV-Zeilen statt Markdown-Tabellen laden.
- Markdown knapp halten; historische Tagesketten und alte Reports ins CSV-/Log-Archiv verdichten.
- CSV-notes kurz halten (max. 2-3 Saetze: Fakt, Delta, naechster Schritt). Einordnung/Erzaehlung gehoert ins `03_state/evaluation_log.md`, nicht in CSV-Zellen.
