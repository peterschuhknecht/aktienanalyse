# CSV-Datenschema

CSV ist die einzige strukturierte Datenebene. Technische Tabellen sind bewusst klein, flach und agentenfreundlich.

| Bereich | Primaere CSV |
|---|---|
| Universum | `covered_symbols.csv`, `02_context/company_scorecards.csv` |
| Kurse/Bewertung | `latest_quotes.csv`, optional `archive/latest_quotes_history_*.csv` |
| News | `latest_news.csv`, optional `archive/latest_news_history_*.csv` |
| Events | `upcoming_events.csv` |
| Monitoring/Makro | `monitoring_status.csv`, `macro_market_signals.csv` |
| Peers | `peer_benchmarks.csv` |
| Portfolio | `portfolio_positions.csv`, `portfolio_risk_limits.csv` |
| Operator-Signale | `02_context/operator_signal_people.csv`, `02_context/operator_statements.csv` |
| Qualitaet/Entscheidung | `data_quality_checks.csv`, `source_conflicts.csv`, `decision_gate_results.csv`, `run_log.csv` |

Pflichtfelder je neuer CSV: Datum oder Abrufzeit, betroffene Symbole, Quelle, Quellenqualitaet, Status/Wirkung, naechste Aktion. Reihenfolge: aktuelle Zeilen zuerst; Historie nur verdichtet oder archiviert.
