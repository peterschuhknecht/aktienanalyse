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
| source_date | Datum der Quelle |
| notes | Anmerkungen |

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
| hdd_nearline_exabytes | ausgelieferte Nearline-Exabytes |
| hdd_cost_per_tb | HDD-Kosten pro TB |
| ssd_cost_per_tb | SSD-Kosten pro TB |
| hyperscaler_capex_signal | Capex-Signal der grossen Cloudanbieter |

