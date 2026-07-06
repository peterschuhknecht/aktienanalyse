# Agentenregeln fuer die laufende Aktienanalyse

Erst `START_HERE.md` lesen. Fakten, Quellen, Annahmen, Hypothesen und Meinungen strikt trennen. Alte Zahlen sind Seeds, nie aktuelle Marktdaten: Kurse fuer jede aktiv bearbeitete Aktie immer frisch ermitteln.

## Trigger

Die Eingabe `start` loest den vollstaendigen Repository-Rundgang aus (Einstieg ueber `START_HERE.md`, Ablauf in `01_knowledge/agent_workflows.md` -> Repository-Rundgang). Pflicht-Ausgabe: zuerst der Pflicht-Ausgabeblock (Depot-Ampel 0-10 + gewichtete Terminuebersicht 0-10), dann der Report, dann der Depot-Performance-Abschluss (Korrigierte Performance-Sicht), und ganz am Ende die Watchlist-/Zusatzwerte-Uebersicht mit Einstiegs-/Alpha-Urteil (hoehere erwartete Rendite als Hauptaktien/Markt?; siehe `01_knowledge/agent_workflows.md`). Gilt fuer Claude und Codex identisch.

## Pflichtregeln

- Keine Datenbankabfragen und keine Python-Ausfuehrung.
- CSV zuerst: strukturierte Daten in `05_data/*.csv` und thematischen CSVs in `02_context/`.
- Pflicht-Frischkurs: Fuer JEDE Aktie, mit der du aktiv arbeitest (Brief, Bewertung, Vergleich, Depot-/Watch-Check, Kursfrage), IMMER zuerst den aktuellen Kurs frisch ermitteln (Websuche/hochwertige Quelle) und mit Datum/Uhrzeit/Quelle notieren. CSV-Kurse sind nur Seeds, nie als aktuellen Kurs ausgeben; ohne frischen Kurs als Datenluecke kennzeichnen.
- Markdown nur fuer Regeln, These, Entscheidungen, offene Fragen und kurze Reports.
- Kleinfrage: gezielt lesen. Depot, Bewertung, Watchlist, Zukunft, Warnsignal oder Branchenanalyse: `01_knowledge/agent_workflows.md`.
- Bewertung: frische Kurse, Market Cap, KGV/Forward-KGV, Wachstum, PEG, Margen, Guidance, Termine, Peers und `05_data/data_quality_checks.csv`.
- Ziel/Alpha: Depot-, Bewertungs- und Wiedereinstiegsantworten beurteilen nicht nur, OB die These passt, sondern explizit, ob in den naechsten Monaten eine UEBERDURCHSCHNITTLICHE Rendite ggue. Breitmarkt (S&P 500/Nasdaq 100) plausibel ist (Chance/Risiko vs. Markt, Katalysatoren, Bewertungsspielraum). Reicht die Erwartung nur fuer marktnahe Rendite, rechtfertigt das die konzentrierte Ein-Thesen-Wette nicht -> klar so sagen.
- Kausalattribution (Kurs-News-Abgleich): Kursbewegungen NICHT mit gesuchten Nachrichten erklaeren. Kausalzuordnung nur bei echter, zeitlich passender, hochwertiger Nachricht, die zur Bewegung passt; sonst offen sagen "keine saubere Nachrichtenerklaerung" bzw. neutrale Mechanik vermuten (Gewinnmitnahme, Rotation, Positionsabbau). Keine Narrative erzwingen, Dauerthemen (z. B. Hormuz) nur bei NEUER harter Entwicklung. Details in `01_knowledge/source_quality.md`.
- Kauf/Verkauf/Nachkauf/Reduktion/Umschichtung: zusaetzlich `01_knowledge/portfolio_risk_framework.md` und `02_context/portfolio_policy.md`.
- Immer `05_data/upcoming_events.csv` pruefen und Termine heute plus fuenf Kalendertage melden; Terminuebersicht mit Depot-Gewicht 0-10 (Spalte `depot_weight`).
- Pflicht-Ausgabeblock zuerst: Depot-Ampel 0-10 (Fundamental/Timing/Handlungsnaehe) plus gewichtete Terminuebersicht; Rubrik und Format in `01_knowledge/agent_workflows.md`. Ampel-Scores in `05_data/depot_ampel.csv` fortschreiben.
- Darstellung (nur Ausgabe/Report, nicht CSV): Datum im deutschen Format TT.MM.JJJJ; Fremdwaehrungen (KRW/JPY) in USD umrechnen, USD primaer + Heimatwaehrung in Klammern mit FX-Kurs/Datum; FX frisch ermitteln (Seeds in `05_data/macro_market_signals.csv`). CSV behaelt ISO-Datum. VERSTAENDLICHKEIT (Nutzerwunsch 2026-07-02): Reports fuer Nicht-Experten lesbar - jeden Fachbegriff beim ersten Auftreten kurz erklaeren, englische Trader-Begriffe eindeutschen, Zahlen einordnen. Details in `01_knowledge/agent_workflows.md` (Darstellungsregeln).
- Quellenqualitaet nach `01_knowledge/source_quality.md`; schwache Quellen nur als Suchspur markieren.
- Operator-/Research-Aussagen in `02_context/operator_statements.csv`; nur `Hard` oder bestaetigtes `Medium` darf Thesen aendern.
- Reports nach 7-14 Tagen in CSV/Log verdichten; lange Markdown-Historien vermeiden.
- Abschluss: CSV-Caches, relevante Akte, `03_state/evaluation_log.md`, `03_state/task_plan.md` und offene Fragen nur bei echter Aenderung aktualisieren.
- Vor dem Fazit Datenluecken, offene P0-Fragen und Source-Konflikte nennen.

## Fokus

Depot am 2026-07-01 komplett verkauft -> 100% Cash EUR 243.288 (netto; realisiert +62% vs 150k-Basis). Wiedereinstiegs-Plan (2026-07-02, Nutzer entschieden): voll investiert, keine Cash-Reserve, 3 Namen - Micron, SK Hynix, SanDisk (Ziel MU 35% / SK Hynix 33% / SanDisk 32%); Entry an klugem Zeitpunkt (payrolls-gated), nicht sofort all-in. Kioxia = NAND-Watch (SanDisk-Alternative/Swap im gleichen NAND-Bucket, KEIN Diversifier). Seagate ist verkauft; Seagate/WDC bleiben HDD-/Nearline-Watch. Details: `05_data/portfolio_positions.csv`, `03_state/open_questions.md`.
