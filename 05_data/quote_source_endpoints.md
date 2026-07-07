# Kurs-/FX-Quelle: Abruf-Protokoll (Frischkurs)

Verbindliche Quelle fuer JEDE frisch benoetigte Kurs-/FX-Zahl. Ersetzt WebSearch als Primaerquelle (Suchindex ist verzoegert und verwechselt Vorschluss/Vorboerse/Settled). Regelkonform: nur ein Lese-Abruf (`WebFetch`)/MCP-Call, kein Python, keine DB.

## Quellen-Architektur (nach Anlageklasse)

| Klasse | Primaer | Fallback |
|---|---|---|
| US-Aktien (MU, SNDK, Watchlist) | Alpha-Vantage-MCP `GLOBAL_QUOTE` / `REALTIME_BULK_QUOTES` (sobald verbunden) | Yahoo-Chart-JSON -> Stooq |
| KRX/TSE-Aktien (000660.KS, 285A.T, 005930.KS) | **Yahoo-Chart-JSON** (verifiziert 07.07.2026) | Browser (Control Chrome); AV nur wenn Coverage bestaetigt |
| FX (USD/KRW, USD/JPY, EUR/USD) | Alpha-Vantage-MCP `CURRENCY_EXCHANGE_RATE` (sobald verbunden) | Yahoo `KRW=X`/`JPY=X`/`EURUSD=X` |
| Marktstatus (offen/zu) | Alpha-Vantage-MCP `MARKET_STATUS` | Boersenkalender |

### Alpha-Vantage-MCP (strukturierte, keyed Primaerquelle - sobald die Tools live sind)
- Im Nutzer-Setup registriert (allow-list in `.claude/settings.local.json`); Tools: `GLOBAL_QUOTE`, `REALTIME_BULK_QUOTES`, `CURRENCY_EXCHANGE_RATE`, `MARKET_STATUS`, `SYMBOL_SEARCH`.
- STAERKE: US-Aktien + FX + Marktstatus, strukturiert (kein Scraping, keine Prev-Close-Verwechslung).
- CAVEAT: KRX/TSE-Realtime bei Alpha Vantage historisch schwach -> vor Nutzung fuer 000660.KS/285A.T/005930.KS mit `SYMBOL_SEARCH`/`REALTIME_BULK_QUOTES` GEGENPRUEFEN; bis bestaetigt bleibt Yahoo fuer Korea/Japan Primaer.
- STATUS 07.07.2026: MCP-Tools in der Session noch NICHT abrufbar (nur allow-list gesetzt) -> Coverage-Test offen.

## Yahoo-Finance-Chart-JSON (KRX/TSE-Primaer + universeller Fallback)

```
https://query1.finance.yahoo.com/v8/finance/chart/{SYMBOL}?interval=1d&range=1d
```

Fallback-Host bei Fehler/Ratelimit: `https://query2.finance.yahoo.com/v8/finance/chart/{SYMBOL}?interval=1d&range=1d`

### Zu lesende Felder (aus `chart.result[0].meta`)

| Feld | Bedeutung | beseitigt Fehler |
|---|---|---|
| `regularMarketPrice` | aktueller/letzter Kurs (live in der Session, sonst letzter Schluss) | — |
| `chartPreviousClose` | expliziter Vorschluss | falsches „previousClose"-Feld |
| `regularMarketTime` | Unix-Zeitstempel des Kurses -> **in Ortszeit umrechnen, Datenalter nennen** | Settled/Live-Verwechslung |
| `currency` | Waehrung (KRW/JPY/USD) | — |
| `regularMarketDayHigh` / `regularMarketDayLow` | Tagesspanne | Plausibilitaet |
| `preMarketPrice` / `postMarketPrice` (+ ts) | US-Randzeiten (sonst `null`) | „Vorboerse als Schluss" |

Tagesbewegung selbst rechnen: `(regularMarketPrice - chartPreviousClose) / chartPreviousClose`. Provider-„%" nie ungeprueft uebernehmen.

## Symbol-Map

- **Aktien:** stehen in `05_data/covered_symbols.csv` (Spalte `symbol`). Yahoo-Suffixe: `.KS` = KRX (Korea, z. B. `000660.KS`, `005930.KS`), `.T` = TSE (Japan, z. B. `285A.T`), kein Suffix = US (z. B. `MU`, `SNDK`, `STX`).
- **FX (eine feste Referenz, konsistent ueber alle Werte):** `KRW=X` (USD/KRW), `JPY=X` (USD/JPY), `EURUSD=X` (EUR/USD direkt).
- **Benchmarks (Alpha-Vergleich):** `^GSPC` (S&P 500), `^NDX` (Nasdaq 100), `^SOX` bzw. `SMH` (Halbleiter).

## Fallback-Kette (bei Ausfall NACH oben absteigen)

1. Yahoo `query1` (primaer)
2. Yahoo `query2` (anderer Host)
3. **Stooq** keyless CSV fuer US/EU: `https://stooq.com/q/l/?s=mu.us&f=sd2t2ohlcv&e=csv` (Suffix `.us`)
4. **Browser** (Control Chrome / claude-in-chrome) fuer Asien-Intraday live (KRX/TSE), wenn JSON klemmt
5. **WebSearch** nur als letztes Mittel -> Wert dann als **Datenluecke** kennzeichnen, NIE als „aktueller Kurs" ausgeben

## Betriebsregeln

- **WebFetch-Cache:** Antworten werden 15 Min pro URL gecacht. Fuer einen erneuten Frischabruf im selben Lauf die URL variieren (z. B. `range=5d` statt `1d` oder einen Wegwerf-Param anhaengen).
- **Frische-Gate:** Ist der Markt offen, `regularMarketTime` aber alt (> ~20 Min), als Datenluecke behandeln und Fallback ziehen.
- **Order-Cross-Check bleibt:** Vor einer echten Kauf-/Verkaufsorder den Settled-Schluss zusaetzlich gegen Heimatboerse/Broker pruefen (Execution-Gate in `02_context/portfolio_policy.md`). Yahoo ist Rang-6-Anbieter, die Heimatboerse bleibt Rang 1 (`01_knowledge/source_quality.md`).
- **Notieren:** je Wert Kurs + `chartPreviousClose` + Ortszeit(-alter) + `currency` + Quelle in `05_data/latest_quotes.csv`; Fremdwaehrung mit frischem FX in USD umrechnen.

## Beispiel (verifiziert 07.07.2026)

`.../chart/000660.KS` -> `regularMarketPrice` 2.127.000, `chartPreviousClose` 2.343.000, `currency` KRW = **-9,2 %** (deckt sich mit der Live-Marktbewegung). WebSearch lieferte am selben Tag faelschlich -1,2 %.
