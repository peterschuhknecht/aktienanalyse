# Agentenregeln fuer die laufende Aktienanalyse

Erst `START_HERE.md` lesen. Fakten, Quellen, Annahmen, Hypothesen und Meinungen strikt trennen. Alte Zahlen sind Seeds, nie aktuelle Marktdaten: Kurse fuer jede aktiv bearbeitete Aktie immer frisch ermitteln.

Trigger: Die Eingabe `start` loest den vollstaendigen Repository-Rundgang aus (Einstieg ueber `START_HERE.md`, Ablauf in `01_knowledge/agent_workflows.md`). Der `start`-Rundgang ENDET immer mit dem Depot-Performance-Abschluss (Korrigierte Performance-Sicht). Identisch fuer Claude und Codex (`AGENTS.md`).

## Pflichtregeln

- Keine Datenbankabfragen und keine Python-Ausfuehrung.
- CSV zuerst: strukturierte Daten in `05_data/*.csv` und thematischen CSVs in `02_context/`.
- Pflicht-Frischkurs: Fuer JEDE Aktie, mit der du aktiv arbeitest (Brief, Bewertung, Vergleich, Depot-/Watch-Check, Kursfrage), IMMER zuerst den aktuellen Kurs frisch ermitteln (Websuche/hochwertige Quelle) und mit Datum/Uhrzeit/Quelle notieren. CSV-Kurse sind nur Seeds, nie als aktuellen Kurs ausgeben; ohne frischen Kurs als Datenluecke kennzeichnen.
- Markdown nur fuer Regeln, These, Entscheidungen, offene Fragen und kurze Reports.
- Kleinfrage: gezielt lesen. Depot, Bewertung, Watchlist, Zukunft, Warnsignal oder Branchenanalyse: `01_knowledge/agent_workflows.md`.
- Bewertung: frische Kurse, Market Cap, KGV/Forward-KGV, Wachstum, PEG, Margen, Guidance, Termine, Peers und `05_data/data_quality_checks.csv`.
- Kauf/Verkauf/Nachkauf/Reduktion/Umschichtung: zusaetzlich `01_knowledge/portfolio_risk_framework.md` und `02_context/portfolio_policy.md`.
- Immer `05_data/upcoming_events.csv` pruefen und Termine heute plus fuenf Kalendertage melden; Terminuebersicht mit Depot-Gewicht 0-10 (Spalte `depot_weight`).
- Pflicht-Ausgabeblock zuerst: jede Aktien-/Depotantwort beginnt mit Depot-Ampel 0-10 (Fundamental/Timing/Handlungsnaehe) und gewichteter Terminuebersicht 0-10; Format/Rubrik in `01_knowledge/agent_workflows.md`, Scores fortschreiben in `05_data/depot_ampel.csv`.
- Darstellung (nur Ausgabe/Report, nicht CSV): Datum im deutschen Format TT.MM.JJJJ; Fremdwaehrungen (KRW/JPY) in USD umrechnen, USD primaer + Heimatwaehrung in Klammern mit FX-Kurs/Datum; FX frisch ermitteln (Seeds in `05_data/macro_market_signals.csv`). CSV behaelt ISO-Datum. Details in `01_knowledge/agent_workflows.md` (Darstellungsregeln).
- Quellenqualitaet nach `01_knowledge/source_quality.md`; schwache Quellen nur als Suchspur markieren.
- Operator-/Research-Aussagen in `02_context/operator_statements.csv`; nur `Hard` oder bestaetigtes `Medium` darf Thesen aendern.
- Reports nach 7-14 Tagen in CSV/Log verdichten; lange Markdown-Historien vermeiden.
- Abschluss: CSV-Caches, relevante Akte, `03_state/evaluation_log.md`, `03_state/task_plan.md` und offene Fragen nur bei echter Aenderung aktualisieren.
- Vor dem Fazit Datenluecken, offene P0-Fragen und Source-Konflikte nennen.

## Fokus

Aktives Depot seit 2026-06-02: SK Hynix, Micron, SanDisk, Kioxia. SanDisk/Kioxia = gemeinsamer NAND-/Enterprise-SSD-Bucket. Seagate ist verkauft; Seagate/WDC bleiben HDD-/Nearline-Watch.
