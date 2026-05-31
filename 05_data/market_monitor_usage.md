# Market Monitor Nutzung

Zweck: Diese Datei verankert, wie Agenten die lokale SQLite-Datenbank nutzen. Markdown bleibt die Wissens-, Thesen- und Entscheidungsebene. SQLite ist die Mess-, Historien- und Alert-Ebene.

## Dateien

| Datei | Rolle |
|---|---|
| `05_data/market_monitor.sqlite` | Lokale laufende SQLite-Datenbank |
| `05_data/market_monitor_schema.sql` | Versioniertes, idempotentes Schema |
| `05_data/market_monitor_seed.sql` | Initiales Symboluniversum aus `05_data/covered_symbols.md` |
| `05_data/market_monitor_schema.md` | Fachliche Beschreibung der Tabellen |
| `05_data/latest_quotes.md` | Menschlich lesbarer aktueller Kurs-Cache |
| `05_data/latest_news.md` | Menschlich lesbarer aktueller News-Cache |
| `05_data/upcoming_events.md` | Menschlich lesbarer aktueller Event-Cache |

## Grundregel

- In SQLite speichern: wiederholbare Daten, Verlauf, Snapshots, Quellen-Metadaten, Alerts, Retention-Status.
- In Markdown speichern: These, Einordnung, Entscheidungen, Gegenargumente, offene Fragen, Reports.
- Bei Widerspruch zwischen SQLite und Markdown gilt: Primaerquelle pruefen, Konflikt in `03_state/open_questions.md` notieren und danach beide Ebenen bereinigen.
- Jede schreibende SQLite-Verbindung muss explizit mit `PRAGMA foreign_keys=ON;` starten, weil SQLite diese Einstellung pro Verbindung behandelt.

## Initialisierung

Vom Repository-Root:

```sh
sqlite3 05_data/market_monitor.sqlite ".read 05_data/market_monitor_schema.sql"
sqlite3 05_data/market_monitor.sqlite ".read 05_data/market_monitor_seed.sql"
sqlite3 05_data/market_monitor.sqlite "PRAGMA integrity_check;"
```

Bei manuellen Inserts oder Updates:

```sh
sqlite3 05_data/market_monitor.sqlite "PRAGMA foreign_keys=ON; BEGIN IMMEDIATE; ... COMMIT;"
```

## Pflichtnutzung bei Marktanalysen

Bei jeder sachlichen Aktien-, Depot-, Branchen-, Watchlist- oder Zukunftsanfrage:

1. Repository-Rundgang nach `AGENTS.md` ausfuehren.
2. `05_data/market_monitor_usage.md` und `05_data/market_monitor_schema.md` pruefen.
3. Relevante Symbole aus `05_data/covered_symbols.md` und `symbols` bestimmen.
4. Frische Kurse, News, Events, Makro- und Fundamentaldaten aus hochwertigen Quellen abrufen.
5. Neue strukturierte Daten in SQLite schreiben:
   - Kurse in `quote_snapshots`
   - Fundamentaldaten in `fundamentals_snapshots`
   - News in `news_items`
   - Signale in `signal_snapshots`
   - Termine in `event_calendar`
   - Makro in `macro_snapshots`
   - Branchensignale in `industry_signal_snapshots`
6. `latest_quotes.md`, `latest_news.md` und `upcoming_events.md` als lesbare Caches aktualisieren.
7. Nur echte These-, Risiko-, Alert- oder Entscheidungswechsel in Unternehmensakten, Watchlists und `03_state/evaluation_log.md` verdichten.

Bei jedem Schreibvorgang gilt: `PRAGMA foreign_keys=ON;` setzen, dann in einer Transaktion schreiben. Wenn der Schreibvorgang nur ein Test ist, am Ende `ROLLBACK` statt `COMMIT` nutzen.

## Nuetzliche Abfragen

```sh
sqlite3 -header -column 05_data/market_monitor.sqlite "SELECT symbol, company, group_name, active_status FROM symbols ORDER BY group_name, symbol;"
```

```sh
sqlite3 -header -column 05_data/market_monitor.sqlite "SELECT symbol, price, return_1d, distance_52w_high, source FROM latest_quote_snapshots ORDER BY symbol;"
```

```sh
sqlite3 -header -column 05_data/market_monitor.sqlite "SELECT event_date, event_time, symbol, event_name, importance FROM events_next_5_days;"
```

```sh
sqlite3 -header -column 05_data/market_monitor.sqlite "SELECT news_date, symbol, headline, thesis_effect, action_required FROM unprocessed_news LIMIT 20;"
```

```sh
sqlite3 -header -column 05_data/market_monitor.sqlite "SELECT symbol, alert_status, signal_reason, action_required FROM alert_candidates;"
```

## Datenqualitaet

- Fehlende Werte bleiben `NULL`; keine Schaetzungen erfinden.
- Jeder Snapshot braucht Quelle, Quelldatum oder Abrufzeit und Quellenqualitaet.
- Fremdschluessel auf `symbols(symbol)` duerfen nicht umgangen werden; unbekannte Symbole zuerst in `symbols`, `05_data/covered_symbols.md` und bei Bedarf `05_data/market_monitor_seed.sql` ergaenzen.
- Aggregatoren duerfen fuer Kursueberblick genutzt werden; Bewertungs- und These-aendernde Daten nach Moeglichkeit gegen Primaerquelle oder hochwertigen Finanzdatenanbieter pruefen.
- Nachrichten juenger als 30 Tage koennen in `latest_news.md` bleiben. Aeltere Nachrichten bleiben in SQLite erhalten; in Markdown bleiben sie nur, wenn sie These, Bewertung, Katalysator oder Red-Flag weiter beeinflussen.

## Pflege

- Wenn `05_data/covered_symbols.md` geaendert wird, auch `symbols` und `05_data/market_monitor_seed.sql` aktualisieren.
- Wenn neue Datenarten noetig werden, zuerst `05_data/market_monitor_schema.md` fachlich aktualisieren, dann `05_data/market_monitor_schema.sql` erweitern.
- Nach Schemaaenderungen `PRAGMA integrity_check;` ausfuehren und das Ergebnis in `03_state/evaluation_log.md` oder `03_state/task_plan.md` kurz vermerken.
