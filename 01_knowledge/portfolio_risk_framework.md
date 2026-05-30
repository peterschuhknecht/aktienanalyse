# Portfolio-Risiko-Framework

Zweck: Dieses Framework verhindert, dass Aktien isoliert gut aussehen, waehrend das Depot als Ganzes zu konzentriert, zu korreliert oder zu abhaengig von einem Szenario wird.

## Wann Pflicht

Dieses Framework ist Pflicht bei:

- Kauf, Nachkauf, Verkauf, Reduktion oder Umschichtung.
- Fragen wie "welche 2 von 3 behalten?", "was soll raus?", "was ist besser?".
- Depot-, Branchen- oder Zukunftsfragen mit Einfluss auf Positionsgroessen.
- Watchlist-Vergleichen gegen aktive Depotwerte.

## Portfolio Minimum Pack

Wenn Daten verfuegbar sind oder der Nutzer sie genannt hat, erfassen:

| Feld | Zweck |
|---|---|
| position_size | Absolute Positionsgroesse |
| portfolio_weight | Gewicht im Gesamtdepot |
| entry_price | Einstandskurs |
| current_price | aktueller Kurs |
| unrealized_return | Buchgewinn oder -verlust |
| target_weight | gewuenschte Zielgewichtung, falls bekannt |
| max_weight | maximale tolerierte Gewichtung, falls bekannt |
| currency | USD, EUR, KRW, JPY usw. |
| thesis_bucket | HBM/DRAM, NAND, HDD, Networking, Power, WFE usw. |
| correlation_risk | hoch, mittel, niedrig |
| liquidity_risk | hoch, mittel, niedrig |
| next_catalyst | naechster harter Termin |

Fehlende persoenliche Daten werden nicht erfunden. Sie werden in `02_context/portfolio_policy.md` oder `03_state/open_questions.md` als offen gefuehrt.

## Konzentrationscheck

Bei jeder Depotentscheidung pruefen:

| Risiko | Frage |
|---|---|
| Themenkonzentration | Haengen mehrere Positionen am gleichen AI-Capex-/Memory-Zyklus? |
| Bewertungsrisiko | Sind mehrere Werte gleichzeitig nahe Hochs und auf Forward-EPS angewiesen? |
| Katalysatorrisiko | Faellt der naechste harte Pruefpunkt fuer mehrere Werte in denselben Zeitraum? |
| Waehrungsrisiko | Gibt es konzentriertes USD, KRW, JPY oder EUR Exposure? |
| Liquiditaetsrisiko | Ist der Handelsplatz oder ADR/OTC-Zugang eingeschraenkt? |
| Makrohebel | Wie stark waere das Depot bei steigenden Realzinsen oder Kreditstress betroffen? |

## Reduktionslogik

Eine Reduktion wird geprueft, wenn mindestens zwei Punkte zutreffen:

- Kurs steigt deutlich schneller als EPS-/Umsatz-/FCF-Schaetzungen.
- Bewertung liegt klar ueber Peers oder eigener Historie ohne neue harte Daten.
- Position ist redundant zu einem staerkeren Depotwert.
- These bleibt intakt, aber Momentum/Crowding ist extrem.
- Naechster Katalysator hat asymmetrisch negatives Enttaeuschungsrisiko.
- Makro-/Kreditstress verschlechtert sich, waehrend Multiple hoch bleibt.
- Ein Watchlist-Wert bietet bessere Datenqualitaet, besseren Katalysator oder guenstigere Bewertung bei aehnlicher These.

## Nachkauf-Logik

Ein Nachkauf wird nur geprueft, wenn mehrere Punkte zusammenkommen:

- These durch Primaerquelle, Guidance, Margen, Preise oder Backlog bestaetigt.
- Bewertung nach Ruecksetzer plausibler als vorher.
- Keine neue Red-Flag bei Bilanz, Margen, Capex, Inventory oder Kundenqualifikation.
- Position bleibt nach Nachkauf innerhalb der offenen oder definierten Maximalgewichtung.
- Opportunity Cost gegen andere Depot- und Watchlistwerte ist positiv.

## Opportunity-Cost-Ranking

Bei Watchlist- oder Umschichtungsfragen immer vergleichen:

| Vergleich | Leitfrage |
|---|---|
| Wachstum | Wessen Umsatz/EPS/FCF wird staerker und belastbarer revidiert? |
| Bewertung | Wer ist relativ zum Wachstum plausibler bewertet? |
| Datenqualitaet | Wer hat Primaerdaten statt nur Story oder Analystenfolge? |
| Zyklusrisiko | Wer ist am staerksten von Preisnormalisierung oder Ueberangebot betroffen? |
| Katalysator | Wer hat den naechsten harten, entscheidenden Pruefpunkt? |
| Korrelation | Reduziert oder erhoeht der Wert das bestehende Depotrisiko? |

## Ergebnisformat

Bei Depotentscheidungen immer kurz ausgeben:

| Bereich | Ergebnis |
|---|---|
| Depotwirkung | Konzentration hoeher, niedriger oder unveraendert |
| Hauptkorrelation | z. B. AI-Capex, HBM/DRAM, NAND, Datacenter-Power |
| Reduktionskandidat | Wert und Begruendung |
| Besserer Ersatz? | Ja/nein/unklar und warum |
| Datenluecke | Welche persoenlichen oder Marktdaten fehlen |

Keine Anlageentscheidung als Gewissheit formulieren. Immer Szenarien, Unsicherheit und Gegenargumente nennen.
