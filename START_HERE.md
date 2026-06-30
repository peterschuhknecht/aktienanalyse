# Einstieg fuer KI-Agenten

Ziel: kompakte Aktienanalyse mit kurzer Markdown-Wissensbasis und CSV-only-Datenebene. Keine Datenbankabfragen. Kein Python ausfuehren.

## Trigger `start`

Die Eingabe `start` loest den vollstaendigen Repository-Rundgang aus (Ablauf: `01_knowledge/agent_workflows.md` -> Repository-Rundgang). Die Antwort beginnt IMMER mit dem Pflicht-Ausgabeblock - (1) Depot-Ampel 0-10 und (2) gewichtete Terminuebersicht 0-10 - liefert danach den Report und ENDET mit dem Depot-Performance-Abschluss (Korrigierte Performance-Sicht: Basis 150.000/Start 22.04.2026, aktueller Wert, Gewinn, Cash, Peak-Abstand + Positionszeilen). Format/Rubrik siehe `01_knowledge/agent_workflows.md` (Abschnitt "Pflicht-Ausgabeblock"). Gilt identisch fuer Claude (`CLAUDE.md`) und Codex (`AGENTS.md`).

## Schnellstart

1. `AGENTS.md` lesen.
2. Anfrage einstufen: klein = gezielte Sichtung; Depot/Bewertung/Watchlist/Zukunft/News = Workflow in `01_knowledge/agent_workflows.md`.
3. CSV zuerst: relevante Werte aus `05_data/covered_symbols.csv` bestimmen.
4. CSV-Caches als Ausgangsbasis pruefen: `latest_quotes.csv`, `latest_news.csv`, `upcoming_events.csv`, `monitoring_status.csv`, `macro_market_signals.csv`, `peer_benchmarks.csv`. Wichtig: CSV-Kurse sind nur Seeds - fuer JEDE aktiv bearbeitete Aktie den aktuellen Kurs immer frisch ermitteln (mit Datum/Zeit/Quelle).
5. Bei Bewertung/Depotentscheidung `05_data/data_quality_checks.csv` auf Blocker/Warnungen pruefen und ggf. aktualisieren.
6. Termine heute plus fuenf Kalendertage aus `05_data/upcoming_events.csv` melden, gewichtet ueber `depot_weight` (0-10).
7. Antwort mit Pflicht-Ausgabeblock beginnen: Depot-Ampel 0-10 + gewichtete Terminuebersicht; Ampel-Scores in `05_data/depot_ampel.csv` fortschreiben.
8. Nur relevante Akten/Logs kurz aktualisieren; Reports nach 7-14 Tagen in CSV/Log verdichten.

## Kernpfade

| Zweck | Datei |
|---|---|
| Regeln/Workflow | `AGENTS.md`, `01_knowledge/agent_workflows.md` |
| Depot/Policy | `02_context/current_portfolio.md`, `02_context/portfolio_policy.md`, `05_data/portfolio_positions.csv` |
| These/Boom/Watch | `02_context/market_thesis_ai_memory_storage.md`, `02_context/best_case_conditions_ai_memory_boom.md`, `02_context/watchlist_follow_on_ai_waves.md`, `02_context/watchlist_hdd_nearline_storage.md` |
| Daten | `05_data/*.csv`, `05_data/csv_data_usage.md`, `05_data/csv_data_schema.md` |
| Ampel/Output | `05_data/depot_ampel.csv`, `01_knowledge/agent_workflows.md` (Pflicht-Ausgabeblock) |
| Analysewissen | `01_knowledge/deep_dive_framework.md`, `01_knowledge/valuation_metrics.md`, `01_knowledge/source_quality.md`, `01_knowledge/red_flags.md` |
| Zustand | `03_state/evaluation_log.md`, `03_state/task_plan.md`, `03_state/open_questions.md`, `03_state/assumptions_and_decisions.md` |

## Fokus

Aktives Depot seit 2026-06-02: SK Hynix, Micron, SanDisk, Kioxia. SanDisk/Kioxia = gemeinsamer NAND-/Enterprise-SSD-Bucket. Seagate ist verkauft; Seagate/WDC bleiben HDD-/Nearline-Watch.
