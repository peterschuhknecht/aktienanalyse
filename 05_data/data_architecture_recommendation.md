# Datenarchitektur: Markdown vs. Datenbank

Stand: 2026-05-27.

## Kurzempfehlung

Nicht Markdown durch eine Datenbank ersetzen. Besser ist ein Hybrid:

- Markdown fuer These, Regeln, Watchlists, Unternehmensakten, qualitative Einordnung und Entscheidungen.
- Strukturierte Datenbank oder CSV-Dateien fuer Kurse, Renditen, Kennzahlen, News-Metadaten und Verlaufssignale.

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

## Minimal sinnvolle Datenbank

Eine lokale SQLite-Datei waere ausreichend, z. B. `05_data/market_monitor.sqlite`.

Moegliche Tabellen:

| Tabelle | Zweck |
|---|---|
| symbols | Ticker, Name, Kategorie, Status, Watchlist/Depot-Zuordnung |
| quote_snapshots | Preis, Datum, 1D, 5D, 1M, 3M, YTD, 52W-Abstand, Quelle |
| fundamentals_snapshots | KGV, Forward-KGV, Umsatzwachstum, EPS-Wachstum, Margen, Guidance |
| news_items | Datum, Quelle, Headline, Link, Impact, These-Effekt, Retention |
| signal_snapshots | Momentum-Status, Umfeld-Status, Alert-Status, Begruendung |
| thesis_events | Wichtige Entscheidungen, These-Aenderungen, Verkauf/Kauf/Watchlist-Status |

## Empfohlener Workflow

1. Markdown bleibt die Wissensbasis und erklaert, wie Agenten denken sollen.
2. Datenbank oder CSV speichert wiederholbare Zahlen und Zeitreihen.
3. Agent liest zuerst `START_HERE.md` und `AGENTS.md`.
4. Agent aktualisiert dann strukturierte Daten.
5. Agent schreibt nur die Interpretation und echte Signalwechsel zurueck in Markdown.

## Entscheidung

Aktueller Stand: Markdown reicht fuer die Wissensbasis. Fuer dauerhaftes Monitoring mit Rendite-, Momentum- und Alertverlauf ist eine lokale SQLite-Datenbank mittelfristig sinnvoll.
