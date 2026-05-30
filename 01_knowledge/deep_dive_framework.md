# Deep-Dive-Framework

Zweck: Dieses Framework erzwingt bei umfangreichen Aktien-, Depot-, Branchen- und Watchlist-Analysen mehr Tiefe, Vergleichbarkeit und These-Widerlegung.

## Wann Pflicht

Dieses Framework ist Pflicht bei:

- Kauf-, Verkauf-, Nachkauf-, Reduktions- oder Umschichtungsfragen.
- Deep-Dives zu einzelnen Unternehmen.
- Vergleichen zwischen Depotwerten und Watchlist-Werten.
- Fragen, ob eine These noch intakt ist.
- Analysen nach Earnings, Guidance, Investor-Konferenzen oder starken Kursbewegungen.

Bei kleinen Nachfragen reicht eine gezielte Sichtung, sofern keine aktuelle Lage, Zukunft, Bewertung oder Entscheidung gefragt ist.

## Minimum Data Pack

Vor einer belastbaren Einschaetzung muessen mindestens diese Daten frisch geprueft oder als fehlend markiert werden:

| Bereich | Pflichtdaten |
|---|---|
| Markt | Kurs, Marktkapitalisierung, Handelsplatz, Waehrung, 52W-Abstand, 1D/5D/1M/3M/YTD wenn verfuegbar |
| Bewertung | KGV TTM, Forward-KGV, EV/Sales oder EV/EBITDA falls sinnvoll, PEG mit Methode, Peer-Multiples |
| Wachstum | Umsatzwachstum, EPS-Wachstum, Guidance, Analystenrevisionen falls belastbar |
| Profitabilitaet | Bruttomarge, operative Marge, FCF-Marge, Free Cash Flow, Netto-Schulden oder Netto-Cash |
| Zyklus | Capex, Inventory Days oder Lagertrend, ASP-/Preisumfeld, Auslastung, Lieferzeiten |
| Katalysatoren | Naechster Earnings-Termin, Konferenzen, Produkt-/Kunden-/Branchenereignisse |
| Risiken | wichtigste Red-Flags, These-Brechung, Gegenargumente, Makro-/Sentiment-Overlay |
| Quellen | Quelle, Datum, Zeitraum, Quellenqualitaet, berechnet oder uebernommen |

Wenn ein Pflichtwert fehlt, darf er nicht geraten werden. Der Agent schreibt "nicht belastbar verfuegbar" und legt bei Relevanz eine offene Frage in `03_state/open_questions.md` an.

## Analyseablauf

1. Alte These und letzte Entscheidung aus Unternehmensakte, `03_state/evaluation_log.md` und `03_state/assumptions_and_decisions.md` lesen.
2. Aktuellen Datenstand aus Kursen, News, Events, Makro, Monitoring und relevanten Primaerquellen bestimmen.
3. Treiber trennen: Nachfrage, Preise, Angebot, Margen, Bewertung, Wettbewerb, Makro, Sentiment.
4. Bewertung nicht isoliert betrachten: optische Bewertung, wachstumsbereinigte Bewertung, Zyklusrisiko und Peer-Bewertung gemeinsam pruefen.
5. Falsifikationspruefung durchfuehren: Welche Daten wuerden die These brechen, und sind erste Hinweise sichtbar?
6. Opportunity Cost pruefen: Ist ein Watchlist-Wert besser als ein Depotwert oder nur ebenfalls interessant?
7. Bull/Base/Bear mit konkreten Annahmen formulieren.
8. Entscheidungshilfe geben: beobachten, halten, reduzieren pruefen, nachkaufen nur wenn, verkaufen pruefen wenn.

## Harte News-Wirkungsregel

Eine Nachricht darf die These nur dann veraendern, wenn sie mindestens eine dieser Kategorien betrifft:

- gemeldete Zahlen,
- Guidance,
- Preise oder ASPs,
- Margen,
- Kapazitaet, Auslastung, Yield oder Lagerbestand,
- Kundenvertrag, LTA, Backlog oder Design-Win,
- EPS-/Umsatzrevisionen,
- regulatorisches, geopolitisches oder bilanzielles Risiko,
- harter Makro- oder Kreditstress.

Analysten-Kursziele sind Meinung. Sie duerfen nur dann hoeher gewichtet werden, wenn zugleich EPS-, Umsatz-, Margen- oder FCF-Schaetzungen nachvollziehbar geaendert wurden.

## Pflichtblock: Gegen die eigene These

Jede umfangreiche Analyse enthaelt einen kurzen Block:

| Frage | Antwort |
|---|---|
| Was spricht heute gegen meine bisherige Meinung? | TBD |
| Welche Daten wuerden die These brechen? | TBD |
| Welche Gegenargumente sind neu oder staerker geworden? | TBD |
| Welche Risiken sind nur Timing/Crowding und welche sind fundamental? | TBD |

## Company Scorecard

Unternehmensakten sollen bei naechster groesserer Aktualisierung diese Kurzscorecard enthalten:

| Feld | Inhalt |
|---|---|
| Thesis Status | Bestaetigt, geschwaecht, veraendert, unklar |
| Datenqualitaet | Frisch, teilweise frisch, alt, widerspruechlich |
| Bewertung | Guenstig, fair, anspruchsvoll, ueberhitzt, unklar |
| Momentum | Stark, positiv, neutral, schwach, ueberhitzt |
| Wichtigster Treiber | Nachfrage, Preise, Marge, Kapazitaet, Kunde, Makro |
| Wichtigster Kill-Punkt | Konkretes Ereignis oder Kennzahl, die die These brechen wuerde |
| Naechster Katalysator | Datum und Ereignis |
| Confidence | Hoch, mittel, niedrig, nur Watch |

## Update-Regel

Nach jedem Deep-Dive pruefen:

- Unternehmensakte aktualisieren, wenn These, Risiko, Bewertung oder Katalysator geaendert wurde.
- `03_state/evaluation_log.md` aktualisieren, wenn eine Entscheidung, These-Aenderung oder Red-Flag entsteht.
- `03_state/open_questions.md` aktualisieren, wenn Pflichtdaten fehlen oder Quellen widersprechen.
- `05_data/peer_benchmarks.md` aktualisieren, wenn ein Peer-Vergleich neue Prioritaeten ergibt.
