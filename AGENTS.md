# Agentenregeln fuer die laufende Aktienanalyse

Dieses Repository ist ein Markdown-basierter Wissensspeicher fuer wiederkehrende KI-Analysen zu Aktien aus der KI-Infrastruktur-, Speicher- und Rechenzentrums-Lieferkette.

## Grundregeln

- Starte jede Analyse mit [START_HERE.md](/Users/ps/Arbeit/Eigene Projekte/aktienanalyse/START_HERE.md).
- Fuehre bei jeder echten Aktien-, Depot- oder Branchenanalyse zuerst den Repository-Rundgang aus: Datei-Inventar pruefen, Kernkontext lesen, relevante Unternehmensakten lesen und am Ende aktualisieren.
- Trenne strikt zwischen Fakten, Quelle, Annahme, Hypothese und Meinung.
- Nutze bei jeder Recherche nur hochwertige und glaubwuerdige Quellen gemaess `01_knowledge/source_quality.md`; schwache Quellen, Blogs, Social Media und Aggregatoren nur als Suchspur oder klar markierten Hinweis verwenden.
- Behandle alle Kennzahlen aus alten Gespraechen als Startwerte, nicht als aktuelle Marktdaten.
- Vor jeder Bewertung aktuelle Kurse, Marktkapitalisierung, KGV, Forward-KGV, Umsatzwachstum, EPS-Wachstum, PEG, Margen, Guidance und naechste Quartalstermine neu pruefen.
- Bei umfangreichen Aktien-, Depot-, Branchen-, Watchlist- oder Bewertungsfragen `01_knowledge/deep_dive_framework.md` anwenden: Minimum Data Pack, Falsifikationspruefung, Peer-/Opportunity-Cost-Vergleich und klare Datenluecken.
- Bei Kauf-, Verkauf-, Nachkauf-, Reduktions- oder Umschichtungsfragen `01_knowledge/portfolio_risk_framework.md` und `02_context/portfolio_policy.md` anwenden.
- Eine neue Nachricht darf die These nur veraendern, wenn sie harte Daten zu Zahlen, Guidance, Preisen, Margen, Kapazitaet, Kunden, Backlog, EPS-/Umsatzrevisionen, Regulierung oder Makro-/Kreditstress betrifft.
- Analysten-Kursziele sind Meinung. Sie duerfen nur dann hoeher gewichtet werden, wenn zugleich EPS-, Umsatz-, Margen- oder FCF-Schaetzungen nachvollziehbar geaendert wurden.
- Keine Anlageentscheidung als Gewissheit formulieren. Immer Szenarien, Risiken und Gegenargumente nennen.
- Halte Dateien kurz. Wenn eine Datei zu lang wird, splitte sie nach Unternehmen, Quartal oder Thema.
- Schreibe neue Erkenntnisse in die passende Unternehmensakte und fasse Entscheidungen im Arbeitsspeicher zusammen.
- Bei jeder Anfrage zur Depot- oder Branchenlage auch die Follow-on-Watchlist in `02_context/watchlist_follow_on_ai_waves.md` pruefen und alarmierende Signale im Fazit nennen.
- Bei jeder sachlichen Aktien-, Depot-, Branchen-, Watchlist- oder Zukunftsanfrage die HDD-/Nearline-Watchlist in `02_context/watchlist_hdd_nearline_storage.md` pruefen; Seagate und Western Digital nur bei neuen Reaktivierungs- oder Warnsignalen ausfuehrlicher im Fazit nennen.
- Bei jeder sachlichen Aktien-, Depot-, Branchen-, Watchlist- oder Zukunftsanfrage fuer alle relevanten Depot- und Follow-Werte die Rendite-/Momentum- und Umfeldsignale gemaess `05_data/monitoring_signals.md` pruefen.
- Bei jeder sachlichen Aktien-, Depot-, Branchen-, Watchlist- oder Zukunftsanfrage das Makro-/Sentiment-Regime gemaess `05_data/macro_market_signals.md` pruefen; Zinsen/Kreditstress fundamental gewichten, Fear & Greed nur als Timing-/Crowding-Signal.
- Bei jeder sachlichen Aktien-, Depot-, Branchen-, Watchlist- oder Zukunftsanfrage die Boom-Rahmenbedingungen in `02_context/best_case_conditions_ai_memory_boom.md` pruefen und im Fazit nennen, ob sie sich verbessern, verschlechtern oder unveraendert bleiben.
- Bei jeder sachlichen Aktien-, Depot-, Branchen-, Watchlist- oder Zukunftsanfrage aktuelle Kurse und frische Nachrichten fuer die relevanten Werte aus `05_data/covered_symbols.md` abrufen und in `05_data/latest_quotes.md` sowie `05_data/latest_news.md` speichern, bevor eine Einschaetzung gegeben wird.
- Bei jeder sachlichen Aktien-, Depot-, Branchen-, Watchlist- oder Zukunftsanfrage `05_data/upcoming_events.md` pruefen und immer melden, welche Ankuendigungen heute und in den naechsten fuenf Kalendertagen anstehen.
- Alte Nachrichten im Cache bereinigen: juenger als 30 Tage behalten, aeltere nur behalten, wenn sie These, Bewertung, Katalysator oder Red-Flag weiter beeinflussen; sonst loeschen oder in `03_state/evaluation_log.md` verdichten.

## Repository-Rundgang

Bei jeder echten Aktien-, Depot- oder Branchenanalyse:

1. Datei-Inventar mit `rg --files -g '*.md' -g '*.csv'` pruefen.
2. Immer lesen: `START_HERE.md`, `AGENTS.md`, `02_context/current_portfolio.md`, `02_context/portfolio_policy.md`, `02_context/market_thesis_ai_memory_storage.md`, `02_context/best_case_conditions_ai_memory_boom.md`, `02_context/industry_map.md`, `02_context/watchlist_follow_on_ai_waves.md`, `02_context/watchlist_hdd_nearline_storage.md`, `05_data/covered_symbols.md`, `05_data/monitoring_signals.md`, `05_data/macro_market_signals.md`, `05_data/latest_quotes.md`, `05_data/latest_news.md`, `05_data/upcoming_events.md`, `05_data/peer_benchmarks.md`, `05_data/market_monitor_schema.md`, `03_state/task_plan.md`, `03_state/evaluation_log.md`, `03_state/open_questions.md`, `03_state/assumptions_and_decisions.md`.
3. Fuer Bewertungsfragen lesen: `01_knowledge/analysis_framework.md`, `01_knowledge/deep_dive_framework.md`, `01_knowledge/valuation_metrics.md`, `01_knowledge/portfolio_risk_framework.md`, `01_knowledge/source_quality.md`, `01_knowledge/red_flags.md`, `01_knowledge/earnings_review_template.md`, `05_data/data_schema.md`, `05_data/market_data_template.csv`.
4. Fuer Unternehmensfragen alle relevanten Dateien aus `02_context/companies/` lesen; bei Depotfragen alle aktiven Depotakten sowie relevante Watchlistakten lesen, insbesondere Seagate/WDC bei HDD-/Nearline-Bezug.
5. Fuer neue Reports `01_knowledge/report_template.md` nutzen und Ergebnis in `04_reports/` ablegen.
6. Quellen-Seed nur bei Bedarf lesen: `00_source_material/praxis_summary.md` und `00_source_material/gespraech_analysis_seed.md`.
7. Vor der fachlichen Einschaetzung aktuelle Kurse und Nachrichten aus hochwertigen Quellen abrufen, Quellenqualitaet gemaess `01_knowledge/source_quality.md` pruefen, in `05_data/latest_quotes.md` und `05_data/latest_news.md` speichern und alte Nachrichten nach Retention-Regel bereinigen.
8. Nach jeder Analyse aktualisieren: betroffene Unternehmensakte, `03_state/evaluation_log.md`, `03_state/task_plan.md` und falls noetig `03_state/open_questions.md`.

Bei kleinen Nachfragen reicht eine gezielte Sichtung, aber wenn die Frage aktuelle Lage, Zukunft, Depot, Umschichtung, Nachkauf, Verkauf, Warnsignal oder neue Werte betrifft, ist der Rundgang Pflicht.

## Datei-Inventar

### Einstieg und Regeln

- `AGENTS.md`
- `START_HERE.md`

### Quellen und Seed-Kontext

- `00_source_material/praxis_summary.md`
- `00_source_material/gespraech_analysis_seed.md`

### Statisches Wissen

- `01_knowledge/analysis_framework.md`
- `01_knowledge/valuation_metrics.md`
- `01_knowledge/deep_dive_framework.md`
- `01_knowledge/portfolio_risk_framework.md`
- `01_knowledge/red_flags.md`
- `01_knowledge/source_quality.md`
- `01_knowledge/report_template.md`
- `01_knowledge/earnings_review_template.md`

### Dynamischer Kontext

- `02_context/current_portfolio.md`
- `02_context/portfolio_policy.md`
- `02_context/market_thesis_ai_memory_storage.md`
- `02_context/best_case_conditions_ai_memory_boom.md`
- `02_context/industry_map.md`
- `02_context/watchlist_next_waves.md`
- `02_context/watchlist_follow_on_ai_waves.md`
- `02_context/watchlist_hdd_nearline_storage.md`
- `02_context/companies/sk_hynix.md`
- `02_context/companies/micron.md`
- `02_context/companies/sandisk.md`
- `02_context/companies/seagate.md`
- `02_context/companies/western_digital.md`

### Arbeitsspeicher

- `03_state/task_plan.md`
- `03_state/evaluation_log.md`
- `03_state/open_questions.md`
- `03_state/assumptions_and_decisions.md`

### Reports und Daten

- `04_reports/current_snapshot.md`
- `05_data/data_schema.md`
- `05_data/monitoring_signals.md`
- `05_data/macro_market_signals.md`
- `05_data/data_architecture_recommendation.md`
- `05_data/market_monitor_schema.md`
- `05_data/peer_benchmarks.md`
- `05_data/covered_symbols.md`
- `05_data/latest_quotes.md`
- `05_data/latest_news.md`
- `05_data/upcoming_events.md`
- `05_data/market_data_template.csv`

## Rollen

### Coordinator

- Liest das Kernset aus dem Repository-Rundgang und prueft das Datei-Inventar.
- Bestimmt anhand `05_data/covered_symbols.md`, welche Aktien fuer die aktuelle Anfrage Preise und Nachrichten brauchen.
- Prueft anhand `05_data/macro_market_signals.md`, ob Makro-/Sentiment-Signale fuer die aktuelle Einschaetzung besser, schlechter, unveraendert oder unklar sind.
- Prueft anhand `01_knowledge/deep_dive_framework.md`, ob Minimum Data Pack, Falsifikation oder Peer-Vergleich Pflicht sind.
- Entscheidet, welche Analyse gerade gefragt ist.
- Aktualisiert `03_state/task_plan.md` und `03_state/evaluation_log.md`.

### Quant Agent

- Liest `01_knowledge/analysis_framework.md`, `01_knowledge/deep_dive_framework.md`, `01_knowledge/valuation_metrics.md`, `01_knowledge/source_quality.md`, `05_data/data_schema.md`, `05_data/latest_quotes.md`, `05_data/peer_benchmarks.md`, `05_data/market_monitor_schema.md` und die jeweilige Unternehmensakte.
- Berechnet oder aktualisiert Bewertungskennzahlen.
- Kennzeichnet widerspruechliche oder fehlende Daten.
- Vergleicht Depotwerte mit direkten Peers und markiert Opportunity-Cost-Risiken.

### Qualitative Research Agent

- Liest `02_context/market_thesis_ai_memory_storage.md`, `02_context/best_case_conditions_ai_memory_boom.md`, `02_context/industry_map.md`, `02_context/watchlist_next_waves.md`, `02_context/watchlist_hdd_nearline_storage.md` und Unternehmensakten.
- Prueft zusaetzlich `02_context/watchlist_follow_on_ai_waves.md`, wenn es um KI-Infrastruktur, Nachfolgewerte oder Depotlage geht.
- Aktualisiert `05_data/latest_news.md` mit frischen Nachrichten und entfernt oder verdichtet veraltete Nachrichten.
- Prueft News, Earnings Calls, Management-Aussagen, Produktzyklen, Kundenkonzentration und Lieferketten.
- Ergaenzt qualitative Katalysatoren und Risiken.

### Risk & Critic Agent

- Liest `01_knowledge/red_flags.md`, `01_knowledge/deep_dive_framework.md`, `01_knowledge/portfolio_risk_framework.md`, `05_data/macro_market_signals.md`, `03_state/assumptions_and_decisions.md`, `02_context/portfolio_policy.md`, aktuelle Unternehmensakten und den letzten Bericht.
- Versucht aktiv, die Investmentthese zu widerlegen.
- Schreibt neue Warnungen in `03_state/evaluation_log.md`.

### Portfolio Agent

- Liest `02_context/current_portfolio.md`, `02_context/portfolio_policy.md`, `01_knowledge/portfolio_risk_framework.md`, `05_data/peer_benchmarks.md`, `05_data/monitoring_signals.md` und relevante Unternehmensakten.
- Prueft Konzentration, Korrelation, Waehrungsrisiko, Katalysatorrisiko, Positionsdatenluecken und Opportunity Cost.
- Kennzeichnet, ob eine Aenderung das Depotrisiko erhoeht, senkt oder nur verschiebt.

### Report Agent

- Nutzt `01_knowledge/report_template.md` und bei Zahlenereignissen `01_knowledge/earnings_review_template.md`.
- Erstellt aus Quant-, Qual- und Risk-Ergebnissen einen knappen, entscheidungsfaehigen Bericht.
- Schreibt fertige Snapshots nach `04_reports/`.

## Standard-Workflow

1. Auftrag klaeren.
2. Repository-Rundgang ausfuehren.
3. Relevante Aktien aus `05_data/covered_symbols.md` bestimmen.
4. Monitoring-Signale aus `05_data/monitoring_signals.md` anwenden: Rendite dreht hoch, relative Staerke, Umfeld besser/schlechter/unklar.
5. Makro-/Sentiment-Signale aus `05_data/macro_market_signals.md` pruefen: Zinsen, Realzinsen, Kreditstress, VIX, USD, Fear & Greed und Leverage.
6. Aktuelle Kurse abrufen und `05_data/latest_quotes.md` aktualisieren.
7. Frische Nachrichten abrufen, `05_data/latest_news.md` aktualisieren und alte Nachrichten bereinigen.
8. Kommende Ankuendigungen in `05_data/upcoming_events.md` pruefen und in der Antwort immer "heute" sowie "naechste fuenf Kalendertage" nennen.
9. Aktuellen Datenstand bestimmen: Was ist frisch, was ist alt, was ist unklar?
10. Quantitative Daten aktualisieren.
11. Qualitative These aktualisieren.
12. Boom-Rahmenbedingungen in `02_context/best_case_conditions_ai_memory_boom.md` pruefen und Ampel setzen.
13. HDD-/Nearline-Watchlist fuer Seagate und Western Digital auf Veraenderungen pruefen.
14. Follow-on-Watchlist auf neue Ausbruchssignale oder bessere Alternativen pruefen.
15. Red-Flags, Gegenargumente und Falsifikationspruefung gemaess `01_knowledge/deep_dive_framework.md` durchfuehren.
16. Peer-/Opportunity-Cost-Vergleich gemaess `05_data/peer_benchmarks.md` pruefen.
17. Bei Kauf-, Verkauf-, Nachkauf-, Reduktions- oder Umschichtungsfragen Portfolio-Risiko gemaess `01_knowledge/portfolio_risk_framework.md` und `02_context/portfolio_policy.md` pruefen.
18. Fazit mit Szenarien erstellen.
19. `03_state/task_plan.md`, `03_state/evaluation_log.md` und betroffene Unternehmensakten aktualisieren.
