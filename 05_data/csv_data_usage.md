# CSV-Datennutzung

Dieses Repository nutzt keine lokale oder serverbasierte Datenbank. Strukturierte Daten liegen in kleinen CSV-Dateien; Markdown bleibt kurz und interpretativ.

## Pflichtdateien

| Datei | Zweck |
|---|---|
| `05_data/covered_symbols.csv` | beobachtetes Universum |
| `05_data/latest_quotes.csv` | aktueller Kurs-/Bewertungs-Cache |
| `05_data/latest_news.csv` | relevante Nachrichten im 30-Tage-Fenster |
| `05_data/upcoming_events.csv` | Termine und Katalysatoren |
| `05_data/monitoring_status.csv` | Momentum-/Umfeldstatus |
| `05_data/macro_market_signals.csv` | Zins-, Kredit-, Sentiment- und Makrosignale |
| `05_data/peer_benchmarks.csv` | Peer-/Opportunity-Cost-Vergleich |
| `05_data/data_quality_checks.csv` | manuelles Quality Gate |
| `05_data/decision_gate_results.csv` | These-/Entscheidungsereignisse |
| `05_data/run_log.csv` | Analyse-/Refresh-Laufprotokoll |

## Regeln

- Keine Datenbankabfragen und keine Python-Ausfuehrung.
- CSV-Zeilen brauchen Datum, Quelle, Quellenqualitaet und klare Datenluecken.
- Fehlende Werte bleiben leer oder `TBD`; nichts schaetzen.
- Markdown nur aktualisieren, wenn These, Risiko, Entscheidung oder offene Frage wirklich betroffen ist.
- Alte Nachrichten aus `latest_news.csv` nach 30 Tagen entfernen, ausser sie bleiben These, Katalysator oder Red Flag.
- Reports nach 7-14 Tagen in `05_data/run_log.csv`, `decision_gate_results.csv` oder ein CSV-Archiv verdichten.
- Kein `05_data/README.md` anlegen; `csv_data_usage.md` und `csv_data_schema.md` getrennt halten.

## Quality Gate

Vor Bewertung, Kauf/Verkauf, Nachkauf, Reduktion oder These-Aenderung `05_data/data_quality_checks.csv` manuell pruefen und neue Blocker/Warnungen dort eintragen. Blocker verhindern harte Folgerungen bis zur Gegenpruefung; Warnungen muessen im Fazit genannt werden.
