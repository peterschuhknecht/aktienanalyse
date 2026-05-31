# Datenarchitektur: Markdown vs. Datenbank

Stand: 2026-05-30.

## Kurzempfehlung

Markdown wird nicht durch eine Datenbank ersetzt. Der Hybrid ist umgesetzt:

- Markdown fuer These, Regeln, Watchlists, Unternehmensakten, qualitative Einordnung und Entscheidungen.
- Lokale SQLite-Datenbank fuer Kurse, Renditen, Kennzahlen, News-Metadaten, Events, Makro, Signale, Run-Logs und Verlaufshistorie.

## Warum Markdown weiter sinnvoll ist

- Sehr gut lesbar fuer Mensch und KI-Agent.
- Gut fuer Investmentthesen, Szenarien, Red-Flags, offene Fragen und Entscheidungen.
- Einfach versionierbar.
- Keine technische Huerde fuer schnelle Anpassungen.

## Warum eine Datenbank zusaetzlich sinnvoll waere

- Zeitreihen lassen sich sauber speichern: Kurs, 1D, 5D, 1M, 3M, YTD, Benchmark-Vergleich.
- Signale lassen sich automatisch berechnen: Momentum dreht hoch, relative Staerke, neues Hoch, Warnsignal.
- Alte News und Kursstaende koennen historisch erhalten bleiben, ohne Markdown-Dateien aufzublasen.
- Abfragen werden robuster: "Welche Watchlist-Werte drehen gerade nach oben?" oder "Welche Werte haben bessere EPS-Revisionen als Kursanstieg?"

## Umgesetzte Datenbank

Die lokale SQLite-Datei liegt unter `05_data/market_monitor.sqlite`.

Die fachliche Tabellenstruktur steht in `05_data/market_monitor_schema.md`. Die technische, idempotent wiederholbare Struktur steht in `05_data/market_monitor_schema.sql`; das initiale Symboluniversum steht in `05_data/market_monitor_seed.sql`; die Agenten-Nutzung steht in `05_data/market_monitor_usage.md`.

Moegliche Tabellen:

| Tabelle | Zweck |
|---|---|
| symbols | Ticker, Name, Kategorie, Status, Watchlist/Depot-Zuordnung |
| quote_snapshots | Preis, Datum, 1D, 5D, 1M, 3M, YTD, 52W-Abstand, Quelle |
| fundamentals_snapshots | KGV, Forward-KGV, Umsatzwachstum, EPS-Wachstum, Margen, Guidance |
| news_items | Datum, Quelle, Headline, Link, Impact, These-Effekt, Retention |
| signal_snapshots | Momentum-Status, Umfeld-Status, Alert-Status, Begruendung |
| thesis_events | Wichtige Entscheidungen, These-Aenderungen, Verkauf/Kauf/Watchlist-Status |
| macro_snapshots | Zinsen, Realzinsen, Kreditstress, VIX, USD, Sentiment |
| industry_signal_snapshots | DRAM/NAND/HDD/Compute-/Capex-/Infrastruktur-Fruehindikatoren |
| event_calendar | Earnings, Konferenzen, Produkt- und Makrotermine |
| run_log | Welche Laeufe was aktualisiert haben |

## Empfohlener Workflow

1. Markdown bleibt die Wissensbasis und erklaert, wie Agenten denken sollen.
2. SQLite speichert wiederholbare Zahlen und Zeitreihen.
3. Agent liest zuerst `START_HERE.md` und `AGENTS.md`.
4. Agent aktualisiert dann strukturierte Daten.
5. Agent nutzt `05_data/peer_benchmarks.md` fuer Peer- und Opportunity-Cost-Vergleiche.
6. Agent schreibt nur die Interpretation und echte Signalwechsel zurueck in Markdown.

## Entscheidung

Aktueller Stand: SQLite ist aktiv. Markdown bleibt die Wissensbasis; `05_data/market_monitor.sqlite` ist die strukturierte Historie. `05_data/latest_quotes.md`, `05_data/latest_news.md` und `05_data/upcoming_events.md` bleiben lesbare aktuelle Caches, nicht die einzige Datenquelle.
