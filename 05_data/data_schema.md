# Datenschema fuer laufende Aktienanalyse

Nutze dieses Schema, wenn aktuelle Daten manuell oder automatisch erfasst werden.

## Markt- und Bewertungsdaten

| Feld | Beschreibung |
|---|---|
| date | Datum der Erfassung |
| company | Unternehmensname |
| ticker | Ticker oder Broker-Symbol |
| currency | Waehrung |
| price | Kurs |
| market_cap | Marktkapitalisierung |
| revenue_ttm | Umsatz letzte 12 Monate |
| revenue_growth_yoy | Umsatzwachstum YoY |
| eps_ttm | Gewinn je Aktie TTM |
| eps_growth_expected | erwartetes EPS-Wachstum |
| pe_ttm | KGV TTM |
| pe_forward | Forward-KGV |
| peg | PEG, mit Berechnungsmethode |
| gross_margin | Bruttomarge |
| operating_margin | operative Marge |
| fcf_margin | Free-Cash-Flow-Marge |
| net_debt | Netto-Schulden oder Netto-Cash |
| capex | Investitionsausgaben |
| next_earnings_date | naechster Quartalstermin |
| source | Quelle |
| source_quality | Primaerquelle, hochwertige Sekundaerquelle, Finanzdatenanbieter, Fachmedium, schwache/unklare Quelle |
| source_date | Datum der Quelle |
| notes | Anmerkungen |

## Monitoring-Signale

| Feld | Beschreibung |
|---|---|
| date | Datum der Erfassung |
| company | Unternehmen |
| ticker | Symbol |
| group | Depot, HDD-Watchlist, Follow-on-Watchlist, Erweiterte Watchlist, Hintergrundwert |
| return_1d | Rendite 1 Tag |
| return_5d | Rendite 5 Tage |
| return_1m | Rendite 1 Monat |
| return_3m | Rendite 3 Monate |
| return_ytd | Rendite seit Jahresbeginn |
| benchmark_return | Rendite relevanter Benchmark |
| relative_strength | Besser, schlechter oder gleich zur Benchmark/Peer-Gruppe |
| distance_52w_high | Abstand zum 52-Wochen-Hoch |
| momentum_status | Dreht hoch, positiv, neutral, schwach, kippt |
| environment_status | Besser, schlechter, unveraendert, unklar |
| alert_status | Kein Alert, Watch, Alert, Red Flag |
| signal_reason | Kurze Begruendung |
| source | Quelle |
| source_quality | Quellenqualitaet |

## Branchensignale

Diese Felder dienen fuer Spotmarkt-, Preis-, Deal- und Infrastrukturindikatoren. Sie sind fuer Fruehwarnung gedacht und muessen von Unternehmensdaten oder hochwertigen Sekundaerquellen bestaetigt werden, bevor sie eine These veraendern.

| Feld | Beschreibung |
|---|---|
| date | Datum der Erfassung |
| signal_name | Name des beobachteten Signals, z. B. DDR5 spot price, B200 compute spot price, AI infrastructure deal value |
| market_segment | DRAM, HBM, LPDDR, NAND, Enterprise-SSD, GPU-Compute, SOX/SMH, Hyperscaler-Capex, Private AI-Infrastructure |
| latest_value | Zuletzt beobachteter Wert, falls verfuegbar |
| trend_1w_1m | Kurztrend ueber eine Woche bis einen Monat: steigend, fallend, stabil, gemischt, unklar |
| confirmation_status | Unbestaetigt, durch Spotdaten bestaetigt, durch Vertragspreise bestaetigt, durch Unternehmensdaten bestaetigt, widerspruechlich |
| source | Konkrete Quelle oder Anbieter |
| source_quality | Primaerquelle, hochwertige Sekundaerquelle, Finanzdatenanbieter, Fachmedium, schwache/unklare Quelle |
| source_date | Datum der Quelle oder des Datenabrufs |
| interpretation | Kurze Wirkung auf Boom-Rahmenbedingungen, Depotwerte oder Watchlist |
| action_required | Ob `latest_news.md`, `evaluation_log.md`, Unternehmensakte oder Watchlist aktualisiert werden soll |

## Makro- und Sentimentsignale

Diese Felder dienen fuer Zins-, Liquiditaets-, Kredit-, Volatilitaets- und Sentimentindikatoren. Sie bilden das Marktregime ab und werden als Overlay zu Unternehmensdaten genutzt.

| Feld | Beschreibung |
|---|---|
| date | Datum der Erfassung |
| macro_signal | Name des Signals, z. B. US 10Y, 10Y real yield, HY OAS, VIX, Fear & Greed |
| market_area | Rates, Real Yields, Yield Curve, Credit, Financial Conditions, Volatility, USD, Sentiment, Leverage |
| latest_value | Zuletzt beobachteter Wert, falls verfuegbar |
| trend_1w_1m | Kurztrend ueber eine Woche bis einen Monat: steigend, fallend, stabil, gemischt, unklar |
| risk_status | Besser, unveraendert, schlechter, Red Flag, Contrarian Watch, unklar |
| source | Konkrete Quelle oder Anbieter |
| source_quality | Primaerquelle, offizielle Datenquelle, hochwertige Sekundaerquelle, Finanzdatenanbieter, Sentiment-Aggregator |
| source_date | Datum der Quelle oder des Datenabrufs |
| interpretation | Kurze Wirkung auf Bewertung, Risikoappetit, Timing oder Boom-Rahmenbedingungen |
| action_required | Ob `latest_news.md`, `evaluation_log.md`, `macro_market_signals.md` oder Report aktualisiert werden soll |

## Nachrichten-Cache

| Feld | Beschreibung |
|---|---|
| date | Datum der Nachricht |
| discovered_at | Zeitpunkt, zu dem der Agent die Nachricht gefunden hat |
| company | Betroffenes Unternehmen |
| ticker | Symbol |
| category | Earnings, Guidance, Analyst, Kunde, Produktion, Preise, Makro, Risiko |
| headline | Kurzer Titel |
| summary | 1-3 Saetze zur Relevanz |
| impact | Bullish, Bearish, Mixed, Neutral |
| thesis_effect | Bestaetigt, schwaecht, veraendert, unklar |
| source | Quelle |
| source_quality | Primaerquelle, hochwertige Sekundaerquelle, Finanzdatenanbieter, Fachmedium, schwache/unklare Quelle |
| url | Link |
| keep_until | Datum fuer Cache-Bereinigung |
| action_required | Ob Unternehmensakte, Evaluation Log oder Watchlist aktualisiert werden muss |

## Kommende Ereignisse

Diese Felder dienen fuer `05_data/upcoming_events.md`.

| Feld | Beschreibung |
|---|---|
| event_date | Datum des Ereignisses |
| event_time | Uhrzeit und Zeitzone, falls bekannt |
| company | Direkt oder indirekt betroffene Unternehmen |
| ticker | Symbol(e) |
| event_type | Earnings, Investor Conference, Product Event, Industry Event, Macro, Regulatory, TBD |
| event_name | Kurzer Name des Ereignisses |
| importance | Hoch, mittel, niedrig |
| relevance | Warum der Termin fuer Depot, Watchlist oder These wichtig ist |
| source | Konkrete Quelle |
| source_quality | Primaerquelle, offizielle Eventseite, Finanzdatenanbieter, hochwertige Sekundaerquelle, schwache/unklare Quelle |
| status | Bestaetigt, erwartet, TBD, unbestaetigt |
| action_after_event | Ob `latest_news.md`, Unternehmensakte, Watchlist oder `evaluation_log.md` aktualisiert werden soll |

## Datenqualitaetsbefunde

Diese Felder dienen fuer `data_quality_issues` in `05_data/market_monitor.sqlite`. Das Quality Gate wird mit `python3 tools/market_monitor_validate.py` ausgefuehrt und schreibt nur mit `--write-issues`.

| Feld | Beschreibung |
|---|---|
| created_at | Zeitpunkt der Erkennung |
| resolved_at | Zeitpunkt der Klaerung, falls geloest |
| status | open, resolved oder ignored |
| issue_type | Art des Problems, z. B. stale_quote, quote_outlier, cache_db_mismatch |
| severity | info, warning oder blocker |
| ticker | Optional betroffener Ticker |
| field_name | Betroffenes Feld |
| observed_value | Beobachteter Wert oder Konflikt |
| expected_rule | Gebrochene Datenqualitaetsregel |
| source | Quelle des betroffenen Datenpunkts |
| detected_by | Werkzeug oder Agent, der den Befund erzeugt hat |

## Peer-Benchmark-Snapshots

Diese Felder dienen fuer `05_data/peer_benchmarks.md` und fuer strukturierte Peer-Vergleiche in Deep-Dives.

| Feld | Beschreibung |
|---|---|
| date | Datum der Erfassung |
| peer_group | HBM/DRAM, NAND/SSD, HDD/Nearline, Networking, Power/Cooling, WFE/Packaging, Hyperscaler |
| company | Unternehmen |
| ticker | Symbol |
| portfolio_status | Depot, Watchlist, Hintergrund, verkauft |
| revenue_growth_yoy | Umsatzwachstum YoY |
| eps_growth_expected | erwartetes EPS-Wachstum |
| pe_forward | Forward-KGV |
| peg | PEG mit Methode |
| gross_margin | Bruttomarge |
| operating_margin | operative Marge |
| fcf_margin | Free-Cash-Flow-Marge |
| net_debt_or_cash | Netto-Schulden oder Netto-Cash |
| capex_trend | steigend, fallend, stabil, unklar |
| inventory_trend | steigend, fallend, stabil, unklar |
| relative_strength | besser, schlechter oder gleich zur Peer-Gruppe |
| next_catalyst | naechster harter Termin |
| opportunity_cost_status | besser als Depotwert, gleichwertig, schlechter, unklar |
| source | Quelle |
| source_quality | Quellenqualitaet |

## Portfolio-Risikodaten

Diese Felder dienen fuer `02_context/portfolio_policy.md` und das Portfolio-Risiko-Framework. Persoenliche Angaben werden nur eingetragen, wenn der Nutzer sie nennt.

| Feld | Beschreibung |
|---|---|
| date | Datum der Erfassung |
| company | Unternehmen |
| ticker | Symbol |
| position_size | Positionsgroesse, falls bekannt |
| portfolio_weight | Depotgewicht, falls bekannt |
| entry_price | Einstandskurs, falls bekannt |
| current_price | aktueller Kurs |
| unrealized_return | Buchgewinn/-verlust, falls berechenbar |
| target_weight | Zielgewichtung, falls bekannt |
| max_weight | Maximalgewichtung, falls bekannt |
| currency | Waehrung |
| thesis_bucket | HBM/DRAM, NAND, HDD, Networking, Power, WFE usw. |
| correlation_risk | hoch, mittel, niedrig |
| liquidity_risk | hoch, mittel, niedrig |
| reduction_trigger | Bedingung, die Reduktion ausloesen wuerde |
| add_trigger | Bedingung, die Nachkauf pruefbar macht |
| notes | Anmerkungen |

## Market-Monitor-Struktur

Die vollstaendige Tabellenstruktur fuer die aktive lokale SQLite-Historie steht in `05_data/market_monitor_schema.md`; die technische Umsetzung steht in `05_data/market_monitor_schema.sql`; die Agenten-Nutzung steht in `05_data/market_monitor_usage.md`. Dieses Datenschema bleibt die fachliche Feldreferenz.

## Branchenspezifische Daten

| Feld | Relevanz |
|---|---|
| hbm_capacity_status | Ausverkauft, knapp, normal, Ueberangebot |
| hbm_generation | HBM3e, HBM4, etc. |
| hbm_yield_comment | Management-/Analystenkommentar |
| dram_price_trend | Preisentwicklung DRAM |
| lpddr_demand_signal | Hinweise auf Server-/KI-Nachfrage |
| nand_price_trend | Preisentwicklung NAND |
| enterprise_ssd_lead_time | Lieferzeiten SSD |
| gpu_compute_spot_price | Spot-/Mietpreis fuer H100, H200, B200 oder vergleichbare GPU-Compute-Angebote |
| ai_infrastructure_deal_value | Quartalsweiser Deal Value fuer AI-/Advanced-Computing-Infrastruktur |
| sox_smh_momentum | Momentum und Trendabstand von SOX/SMH als Marktbreite-Signal |
| us_10y_yield | US-10-Jahreszins als Diskontsatzsignal |
| us_10y_real_yield | US-10-Jahres-Realzins als Bewertungsdruck fuer Growth-Aktien |
| yield_curve_signal | 10Y-2Y und 10Y-3M als Rezessions-/Liquiditaetssignal |
| credit_spread_signal | High-Yield-OAS oder vergleichbarer Kreditstress-Indikator |
| volatility_sentiment_signal | VIX, Fear & Greed, AAII oder Margin Debt als Risikoappetit-/Crowding-Signal |
| hdd_nearline_exabytes | ausgelieferte Nearline-Exabytes |
| hdd_cost_per_tb | HDD-Kosten pro TB |
| ssd_cost_per_tb | SSD-Kosten pro TB |
| hyperscaler_capex_signal | Capex-Signal der grossen Cloudanbieter |
