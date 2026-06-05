# Datenschema fuer laufende Aktienanalyse

Technische Details stehen in `05_data/csv_data_schema.md`. Diese Datei dient nur als Feld-Checkliste.

## Pflichtfelder je Datentyp

| Typ | Kernfelder |
|---|---|
| Markt/Bewertung | date, company, ticker, currency, price, session, market_cap, revenue_growth_yoy, eps_growth_expected, pe_ttm, pe_forward, peg+method, gross_margin, operating_margin, fcf_margin, net_debt/cash, capex, next_earnings_date, source, source_date, source_quality |
| Monitoring | date, ticker, group, return_1d/5d/1m/3m/ytd, benchmark_return, relative_strength, distance_52w_high, momentum_status, environment_status, alert_status, signal_reason, source_quality |
| News | date, discovered_at, ticker/scope, category, headline, summary, impact, thesis_effect, source, url, keep_until, action_required |
| Events | event_date, event_time, ticker/scope, event_type, event_name, event_uid/dedupe_key, importance, relevance, source, source_quality, status, action_after_event |
| Macro/industry | date, signal_name, segment/area, latest_value/value_text, trend, risk/confirmation_status, source, source_date, source_quality, interpretation |
| Peer | date, peer_group, ticker, status, revenue/eps growth, pe_forward, peg, margins, revisions, net_debt/cash, capex/inventory, relative_strength, kill_point, next_catalyst, source_quality |
| Portfolio | date, ticker, position_size, portfolio_weight, entry_price, current_price, target/max_weight, currency, thesis_bucket, correlation_risk, liquidity_risk, reduction/add_trigger |
| Quality/source conflicts | created_at, status, issue/conflict_type, severity, ticker, field_name, observed/value_a/value_b, expected_rule/resolution, source, detected_by |
| Decision gates | rule_name, priority, metric_name, expected/watch/reduction/break_condition, next_check_date, observed_value/text, result_gate |

## Branchenspezifische Felder

HBM capacity/generation/yield, DRAM/NAND/SSD price trend, enterprise-SSD lead time, GPU compute spot price, private AI infrastructure deal value, SOX/SMH momentum, US 10Y/real yield, yield curve, credit spread, volatility/sentiment, HDD nearline exabytes, HDD/SSD cost per TB, hyperscaler capex.
