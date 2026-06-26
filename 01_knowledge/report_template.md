# Report-Template

## Daily-Brief-Chatformat fuer `start`

Dieses Format hat Vorrang vor der allgemeinen Analysegliederung, wenn der Nutzer nur `start`, "Daily Brief", "Neuigkeiten", "Cockpit", "Statusseite" oder "Kurzlage" fragt.

Depot-Ampel: fundamental Gruen/Gelb, Timing Gelb-Rot, Handlungsnaehe Watch/Gelb. Ein Satz mit wichtigstem Grund.

Kurzfassung:
1-3 Saetze: Was ist seit dem letzten Lauf neu, was ist nicht neu, was ist die wichtigste Unsicherheit?

Fakten:
Kurze Bullet-Liste mit harten Ereignissen, Primaerquellen, hochwertigen Sekundaerquellen, Makro-/Branchenpunkten und den wichtigen Nachrichten fuer alle aktiven Depotwerte aus heute plus den letzten drei Kalendertagen. Reine Kursbewegungen der vier aktiven Depotwerte nicht wiederholen, ausser sie sind fuer These, Risiko oder Handlungsszenario relevant.

Datenluecken/Source-Konflikte:
P0-Fragen, offene Source-Konflikte und fehlende harte Speicherbelege nennen, bevor eine Einordnung oder ein Fazit handlungsnah wird.

Einordnung:
SK Hynix, Micron, SanDisk/Kioxia-Bucket und relevante Watch-/Makroeffekte knapp einordnen. Keine Gewissheit, sondern Szenario/Pruefung.

Termine Heute:
Nur Termine von heute aus `05_data/upcoming_events.csv`, mit Depot-Einfluss.

Naechste fuenf Kalendertage:
Termine bis heute plus fuenf Kalendertage, mit Depot-Einfluss.

Datenqualitaet/Bewegung:
Kein eigener Abschnitt `Depotbewegung`. Hier nur Datenqualitaet, gemischte Sessions, FX-/Brokerluecken und Bewegungs-/Momentumdaten nennen, wenn sie fuer Risiko oder Handlungsszenario relevant sind.

Psychologische Einschaetzung:
Freundlich, beruhigend und realistisch; Gier, Angst, FOMO und Stress benennen, ohne Risiken weichzuzeichnen.

Weitere Infos:
Kurz nennen, welche CSV-Caches/Logs aktualisiert wurden und ob `git diff --check` oder Parsercheck bestanden hat, falls geprueft.

Quellen:
Kurze Quellenliste mit Links oder Quellnamen. Keine langen Zitate.

## Allgemeine Analysegliederung

1. Depot-Ampel/Ampel-Einschaetzung: fundamental, Timing, Handlungsnaehe, kurze Begruendung.
2. Kurzfazit: Ergebnis, Aenderung, wichtigste Unsicherheit.
3. Fakten: neue harte Ereignisse, Primaerquellen, hochwertige Sekundaerquellen, Makro-/Branchenpunkte. Reine Kursbewegungen der vier aktiven Depotwerte nicht wiederholen, ausser sie sind fuer These, Risiko oder Handlungsszenario relevant.
4. Datenstand: Kurs, Market Cap, Wachstum, TTM/Forward-KGV, PEG, Margen, FCF, Quelle/Datum; im Chat nur knapp und entscheidungsrelevant, nicht als eigener `Depotbewegung`-Block.
5. Depot-News intern pruefen: je aktivem Depotwert wichtige Nachrichten aus `05_data/latest_news.csv`, mit Quelle/Datum, Wirkung und offener Nachpruefung; im Chat in `Fakten` und `Einordnung` integrieren, keinen eigenen Abschnitt `Depot-Newsfenster` verwenden.
6. These: bisherige These, neue Infos, bestaetigt/geschwaecht/unveraendert.
7. Makro/Sentiment: Zinsen/Realzins, Kreditstress, VIX/USD/Sentiment.
8. Bull/Base/Bear mit Annahmen und Konsequenz.
9. Peer/Opportunity Cost: direkte Peers, bester Peer, Bewertung/Wachstum/Margen, besserer Watchlistwert?
10. Gegen die These: neue Gegenargumente, Kill Points, Timing vs. fundamental.
11. Red Flags: neu, entkraeftet, offen.
12. Portfolio: Konzentration, Hauptkorrelation, Waehrung/Liquiditaet, Reduktions-/Ersatzkandidat, fehlende Nutzerdaten.
13. Entscheidungshilfe: beobachten, nachkaufen nur wenn, reduzieren/verkaufen pruefen wenn, naechster Termin.
14. Psychologische Einschaetzung: freundlich, beruhigend und realistisch; Gier, Angst, FOMO und Stress benennen, ohne Risiken weichzuzeichnen.
15. Fachbegriffe: im Chat kurz in Klammern erklaeren, z.B. ISM (US-Einkaufsmanagerindex), PMI (Einkaufsmanagerindex), JOLTS (US-Bericht zu offenen Stellen), Realzins (Zins nach Inflation), Credit Spread (Risikoaufschlag fuer Unternehmensanleihen), Payrolls (monatlicher US-Arbeitsmarktbericht), Guidance (Unternehmensausblick).
16. Expected vs Actual nur nach Event: Erwartung, Ist, Wirkung.
