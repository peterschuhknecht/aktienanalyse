# Einstieg fuer KI-Agenten

Ziel: Dieses Repository soll Folgeanfragen zur Aktienanalyse schneller, konsistenter und weniger halluzinationsanfaellig machen. Es bildet die bisherige Diskussion aus `gespraech.pdf` und die Strukturidee aus `praxis.pdf` als dauerhafte Markdown-Wissensbasis ab.

## Schnellstart

1. Lies zuerst [AGENTS.md](/Users/ps/Arbeit/Eigene Projekte/aktienanalyse/AGENTS.md).
2. Fuehre bei Depot-, Branchen-, Zukunfts-, Kauf-/Verkauf- oder Watchlist-Fragen den Repository-Rundgang aus `AGENTS.md` aus.
3. Bestimme die relevanten Werte aus [05_data/covered_symbols.md](/Users/ps/Arbeit/Eigene Projekte/aktienanalyse/05_data/covered_symbols.md).
4. Nutze fuer Recherche und Datenabruf nur hochwertige Quellen nach [01_knowledge/source_quality.md](/Users/ps/Arbeit/Eigene Projekte/aktienanalyse/01_knowledge/source_quality.md); schwache Quellen nur als klar markierte Suchspur.
5. Wende [05_data/monitoring_signals.md](/Users/ps/Arbeit/Eigene Projekte/aktienanalyse/05_data/monitoring_signals.md) an: Rendite dreht hoch, relative Staerke, Umfeld besser/schlechter/unklar.
6. Pruefe [05_data/macro_market_signals.md](/Users/ps/Arbeit/Eigene Projekte/aktienanalyse/05_data/macro_market_signals.md): Zinsen, Realzinsen, Kreditstress, VIX, USD, Fear & Greed und Leverage.
7. Aktualisiere vor der Einschaetzung aktuelle Kurse in [05_data/latest_quotes.md](/Users/ps/Arbeit/Eigene Projekte/aktienanalyse/05_data/latest_quotes.md).
8. Aktualisiere vor der Einschaetzung frische Nachrichten in [05_data/latest_news.md](/Users/ps/Arbeit/Eigene Projekte/aktienanalyse/05_data/latest_news.md) und bereinige alte Nachrichten.
9. Pruefe das aktuelle Depot in [02_context/current_portfolio.md](/Users/ps/Arbeit/Eigene Projekte/aktienanalyse/02_context/current_portfolio.md).
10. Lies die zentrale Markthese in [02_context/market_thesis_ai_memory_storage.md](/Users/ps/Arbeit/Eigene Projekte/aktienanalyse/02_context/market_thesis_ai_memory_storage.md).
11. Pruefe die Boom-Rahmenbedingungen in [02_context/best_case_conditions_ai_memory_boom.md](/Users/ps/Arbeit/Eigene Projekte/aktienanalyse/02_context/best_case_conditions_ai_memory_boom.md) und nenne im Fazit, ob sie besser, schlechter oder unveraendert sind.
12. Lies die Branchenkarte in [02_context/industry_map.md](/Users/ps/Arbeit/Eigene Projekte/aktienanalyse/02_context/industry_map.md).
13. Nutze die Unternehmensakten in [02_context/companies](/Users/ps/Arbeit/Eigene Projekte/aktienanalyse/02_context/companies).
14. Pruefe die HDD-/Nearline-Watchlist in [02_context/watchlist_hdd_nearline_storage.md](/Users/ps/Arbeit/Eigene Projekte/aktienanalyse/02_context/watchlist_hdd_nearline_storage.md), besonders Seagate und Western Digital.
15. Pruefe die Follow-on-Watchlist in [02_context/watchlist_follow_on_ai_waves.md](/Users/ps/Arbeit/Eigene Projekte/aktienanalyse/02_context/watchlist_follow_on_ai_waves.md) und die breitere Watchlist in [02_context/watchlist_next_waves.md](/Users/ps/Arbeit/Eigene Projekte/aktienanalyse/02_context/watchlist_next_waves.md).
16. Fuer Bewertung: [01_knowledge/analysis_framework.md](/Users/ps/Arbeit/Eigene Projekte/aktienanalyse/01_knowledge/analysis_framework.md), [01_knowledge/valuation_metrics.md](/Users/ps/Arbeit/Eigene Projekte/aktienanalyse/01_knowledge/valuation_metrics.md), [01_knowledge/source_quality.md](/Users/ps/Arbeit/Eigene Projekte/aktienanalyse/01_knowledge/source_quality.md).
17. Fuer Risiken: [01_knowledge/red_flags.md](/Users/ps/Arbeit/Eigene Projekte/aktienanalyse/01_knowledge/red_flags.md).
18. Fuer neue Reports: [01_knowledge/report_template.md](/Users/ps/Arbeit/Eigene Projekte/aktienanalyse/01_knowledge/report_template.md).
19. Aktualisiere am Ende den Arbeitsspeicher in [03_state](/Users/ps/Arbeit/Eigene Projekte/aktienanalyse/03_state).

## Repository-Inventar

Nutze dieses Inventar als Checkliste. Wenn eine neue Markdown-Datei entsteht, ergaenze sie hier und in `AGENTS.md`.

| Bereich | Dateien |
|---|---|
| Einstieg | [AGENTS.md](/Users/ps/Arbeit/Eigene Projekte/aktienanalyse/AGENTS.md), [START_HERE.md](/Users/ps/Arbeit/Eigene Projekte/aktienanalyse/START_HERE.md) |
| Quellen | [00_source_material/praxis_summary.md](/Users/ps/Arbeit/Eigene Projekte/aktienanalyse/00_source_material/praxis_summary.md), [00_source_material/gespraech_analysis_seed.md](/Users/ps/Arbeit/Eigene Projekte/aktienanalyse/00_source_material/gespraech_analysis_seed.md) |
| Wissen | [01_knowledge/analysis_framework.md](/Users/ps/Arbeit/Eigene Projekte/aktienanalyse/01_knowledge/analysis_framework.md), [01_knowledge/valuation_metrics.md](/Users/ps/Arbeit/Eigene Projekte/aktienanalyse/01_knowledge/valuation_metrics.md), [01_knowledge/red_flags.md](/Users/ps/Arbeit/Eigene Projekte/aktienanalyse/01_knowledge/red_flags.md), [01_knowledge/source_quality.md](/Users/ps/Arbeit/Eigene Projekte/aktienanalyse/01_knowledge/source_quality.md), [01_knowledge/report_template.md](/Users/ps/Arbeit/Eigene Projekte/aktienanalyse/01_knowledge/report_template.md) |
| Kontext | [02_context/current_portfolio.md](/Users/ps/Arbeit/Eigene Projekte/aktienanalyse/02_context/current_portfolio.md), [02_context/market_thesis_ai_memory_storage.md](/Users/ps/Arbeit/Eigene Projekte/aktienanalyse/02_context/market_thesis_ai_memory_storage.md), [02_context/best_case_conditions_ai_memory_boom.md](/Users/ps/Arbeit/Eigene Projekte/aktienanalyse/02_context/best_case_conditions_ai_memory_boom.md), [02_context/industry_map.md](/Users/ps/Arbeit/Eigene Projekte/aktienanalyse/02_context/industry_map.md), [02_context/watchlist_next_waves.md](/Users/ps/Arbeit/Eigene Projekte/aktienanalyse/02_context/watchlist_next_waves.md), [02_context/watchlist_follow_on_ai_waves.md](/Users/ps/Arbeit/Eigene Projekte/aktienanalyse/02_context/watchlist_follow_on_ai_waves.md), [02_context/watchlist_hdd_nearline_storage.md](/Users/ps/Arbeit/Eigene Projekte/aktienanalyse/02_context/watchlist_hdd_nearline_storage.md) |
| Unternehmensakten | [02_context/companies/sk_hynix.md](/Users/ps/Arbeit/Eigene Projekte/aktienanalyse/02_context/companies/sk_hynix.md), [02_context/companies/micron.md](/Users/ps/Arbeit/Eigene Projekte/aktienanalyse/02_context/companies/micron.md), [02_context/companies/sandisk.md](/Users/ps/Arbeit/Eigene Projekte/aktienanalyse/02_context/companies/sandisk.md), [02_context/companies/seagate.md](/Users/ps/Arbeit/Eigene Projekte/aktienanalyse/02_context/companies/seagate.md), [02_context/companies/western_digital.md](/Users/ps/Arbeit/Eigene Projekte/aktienanalyse/02_context/companies/western_digital.md) |
| Arbeitsspeicher | [03_state/task_plan.md](/Users/ps/Arbeit/Eigene Projekte/aktienanalyse/03_state/task_plan.md), [03_state/evaluation_log.md](/Users/ps/Arbeit/Eigene Projekte/aktienanalyse/03_state/evaluation_log.md), [03_state/open_questions.md](/Users/ps/Arbeit/Eigene Projekte/aktienanalyse/03_state/open_questions.md), [03_state/assumptions_and_decisions.md](/Users/ps/Arbeit/Eigene Projekte/aktienanalyse/03_state/assumptions_and_decisions.md) |
| Reports und Daten | [04_reports/current_snapshot.md](/Users/ps/Arbeit/Eigene Projekte/aktienanalyse/04_reports/current_snapshot.md), [05_data/data_schema.md](/Users/ps/Arbeit/Eigene Projekte/aktienanalyse/05_data/data_schema.md), [05_data/data_architecture_recommendation.md](/Users/ps/Arbeit/Eigene Projekte/aktienanalyse/05_data/data_architecture_recommendation.md), [05_data/monitoring_signals.md](/Users/ps/Arbeit/Eigene Projekte/aktienanalyse/05_data/monitoring_signals.md), [05_data/macro_market_signals.md](/Users/ps/Arbeit/Eigene Projekte/aktienanalyse/05_data/macro_market_signals.md), [05_data/covered_symbols.md](/Users/ps/Arbeit/Eigene Projekte/aktienanalyse/05_data/covered_symbols.md), [05_data/latest_quotes.md](/Users/ps/Arbeit/Eigene Projekte/aktienanalyse/05_data/latest_quotes.md), [05_data/latest_news.md](/Users/ps/Arbeit/Eigene Projekte/aktienanalyse/05_data/latest_news.md), [05_data/market_data_template.csv](/Users/ps/Arbeit/Eigene Projekte/aktienanalyse/05_data/market_data_template.csv) |
 
## Aktualisierungsregel

Am Ende einer Analyse pruefen:

- Hat sich die Depotthese geaendert? Dann `02_context/current_portfolio.md`, Unternehmensakte und `03_state/assumptions_and_decisions.md` aktualisieren.
- Wurden neue Informationen verwendet? Dann Quellenqualitaet gemaess `01_knowledge/source_quality.md` pruefen und schwache Quellen klar markieren oder nicht als Hauptgrundlage verwenden.
- Haben sich Rendite, relative Staerke oder Umfeldsignale bei Depot- oder Follow-Werten geaendert? Dann `05_data/monitoring_signals.md`, `05_data/latest_quotes.md`, `05_data/latest_news.md` und bei echten Signalwechseln `03_state/evaluation_log.md` aktualisieren.
- Hat sich das Makro-/Sentiment-Regime geaendert? Dann `05_data/macro_market_signals.md`, `05_data/monitoring_signals.md` und bei echten Signalwechseln `03_state/evaluation_log.md` aktualisieren.
- Haben sich die Boom-Rahmenbedingungen verbessert oder verschlechtert? Dann `02_context/best_case_conditions_ai_memory_boom.md` und `03_state/evaluation_log.md` aktualisieren.
- Wurden Kurse oder Nachrichten abgerufen? Dann `05_data/latest_quotes.md` und `05_data/latest_news.md` aktualisieren.
- Sind Nachrichten aelter als 30 Tage und nicht mehr thesesrelevant? Dann aus `05_data/latest_news.md` entfernen; wichtige alte Nachrichten in `03_state/evaluation_log.md` verdichten.
- Gab es neue Daten, Termine, Warnsignale oder Alerts? Dann `03_state/evaluation_log.md` aktualisieren.
- Entsteht eine offene Frage? Dann `03_state/open_questions.md` aktualisieren.
- Ist ein Follow-on-Wert auffaellig geworden? Dann `02_context/watchlist_follow_on_ai_waves.md` und `03_state/evaluation_log.md` aktualisieren.
- Hat sich bei Seagate oder Western Digital die HDD-/Nearline-These geaendert? Dann `02_context/watchlist_hdd_nearline_storage.md`, Unternehmensakte und `03_state/evaluation_log.md` aktualisieren.
- Entsteht ein fertiger Analyse-Snapshot? Dann in `04_reports/` speichern.

## Aktueller Fokus

Das aktuelle Depot laut Nutzerangabe vom 2026-05-27:

| Unternehmen | Rolle in der These | Status |
|---|---|---|
| SK Hynix | DRAM/HBM/LPDDR, KI-Speicher | Aktuelle Position |
| Micron | DRAM/HBM/LPDDR, US-Speicherchampion | Aktuelle Position |
| SanDisk | NAND/Enterprise-SSD, Flash-Pure-Play | Aktuelle Position |
| Seagate | HDD, Massenspeicher/Archiv, HAMR/Mozaic | Verkauf angekuendigt; HDD-Watchlist |

Seagate und Western Digital werden gemeinsam in `02_context/watchlist_hdd_nearline_storage.md` beobachtet. Western Digital, Samsung, Kioxia, Vertiv, Eaton, Bloom Energy, Marvell, Broadcom, Arista, Corning, AMAT und Lam Research sind Kontext- oder Watchlist-Werte, aber nicht Teil des aktuell genannten aktiven Depots.

## Wichtiger Hinweis zu Daten

Die PDFs enthalten eine bisherige Analyse und teils konkrete Kennzahlen. Diese Zahlen sind in dieser Wissensbasis als Seed-Hypothesen uebernommen. Vor jeder echten Bewertung muessen sie mit aktuellen Quellen neu verifiziert werden.
