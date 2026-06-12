# Einstieg fuer KI-Agenten

Ziel: kompakte Aktienanalyse mit kurzer Markdown-Wissensbasis und CSV-only-Datenebene. Keine Datenbankabfragen. Kein Python ausfuehren.

## Schnellstart

1. `AGENTS.md` lesen.
2. Anfrage einstufen: klein = gezielte Sichtung; Depot/Bewertung/Watchlist/Zukunft/News = Workflow in `01_knowledge/agent_workflows.md`.
3. CSV zuerst: relevante Werte aus `05_data/covered_symbols.csv` bestimmen.
4. Aktuelle Daten aus CSV pruefen: `latest_quotes.csv`, `latest_news.csv`, `upcoming_events.csv`, `monitoring_status.csv`, `macro_market_signals.csv`, `peer_benchmarks.csv`.
5. Bei Bewertung/Depotentscheidung `05_data/data_quality_checks.csv` auf Blocker/Warnungen pruefen und ggf. aktualisieren.
6. Ausgabe immer mit Depot-Ampel/Ampel-Einschaetzung beginnen; kurze Begruendung zu fundamentalem Zustand, Timing und Handlungsnaehe.
7. Termine heute plus fuenf Kalendertage aus `05_data/upcoming_events.csv` melden.
8. Bei jeder Auswertung fuer alle aktiven Depotwerte die wichtigen Nachrichten von heute plus den letzten drei Kalendertagen aus `05_data/latest_news.csv` zusammenfassen, damit nichts Wesentliches uebersehen wird.
9. Kein eigener Abschnitt `Depotbewegung`; reine Kursbewegungen der vier aktiven Depotwerte nicht in `Fakten` wiederholen, ausser sie sind fuer These, Risiko oder Handlungsszenario relevant.
10. Nur relevante Akten/Logs kurz aktualisieren; Reports nach 7-14 Tagen in CSV/Log verdichten.

## Kernpfade

| Zweck | Datei |
|---|---|
| Regeln/Workflow | `AGENTS.md`, `01_knowledge/agent_workflows.md` |
| Depot/Policy | `02_context/current_portfolio.md`, `02_context/portfolio_policy.md`, `05_data/portfolio_positions.csv` |
| These/Boom/Watch | `02_context/market_thesis_ai_memory_storage.md`, `02_context/best_case_conditions_ai_memory_boom.md`, `02_context/watchlist_follow_on_ai_waves.md`, `02_context/watchlist_hdd_nearline_storage.md` |
| Daten | `05_data/*.csv`, `05_data/csv_data_usage.md`, `05_data/csv_data_schema.md` |
| Analysewissen | `01_knowledge/deep_dive_framework.md`, `01_knowledge/valuation_metrics.md`, `01_knowledge/source_quality.md`, `01_knowledge/red_flags.md` |
| Zustand | `03_state/evaluation_log.md`, `03_state/task_plan.md`, `03_state/open_questions.md`, `03_state/assumptions_and_decisions.md` |

## Fokus

Aktives Depot seit 2026-06-02: SK Hynix, Micron, SanDisk, Kioxia. SanDisk/Kioxia = gemeinsamer NAND-/Enterprise-SSD-Bucket. Seagate ist verkauft; Seagate/WDC bleiben HDD-/Nearline-Watch.
