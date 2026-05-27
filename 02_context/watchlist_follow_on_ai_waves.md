# Watchlist: Nachfolgewerte der KI-Infrastrukturwellen

Stand: 2026-05-26.

Diese Datei enthaelt Werte, die nach der ersten NVIDIA/GPU-Welle und der zweiten Speicherwelle als moegliche naechste Profiteure beobachtet werden sollen. Sie sind keine aktuellen Depotpositionen, sondern Kandidaten fuer kuenftige Analysen und moegliche Alerts.

Hinweis zu Namen aus der Nutzerangabe:

- "Arcstar" wird als Arista Networks interpretiert.
- "Marvel" wird als Marvell Technology interpretiert.
- "Seiko Samsung Electronics" wird als Samsung Electronics interpretiert.

## Wellenmodell

| Welle | Thema | Typische Profiteure | Status im aktuellen Analyseuniversum |
|---|---|---|---|
| 1 | GPU/Compute | NVIDIA, AMD, ASICs | Erste Welle, bereits weit gelaufen |
| 2 | Speicher | SK Hynix, Micron, SanDisk, Seagate | Aktuelles Depotthema |
| 3 | Netzwerk, Custom Silicon, Kuehlung, Strom | Arista, Broadcom, Marvell, Vertiv, Eaton, GE Vernova, Corning | Follow-on-Watchlist |
| 4 | Energieversorgung, Standortinfrastruktur, Software-Adoption | Constellation, Vistra, Bloom Energy, Microsoft, industrielle KI-Anwender | Erweiterte Watchlist |

## Primaere Follow-on-Kandidaten

| Unternehmen | Moegliches Symbol | Welle | Rolle | Warum beobachten? | Alert-Signale |
|---|---|---|---|---|---|
| Arista Networks | ANET | Netzwerk | KI-Switching, Ethernet-Netzwerke fuer GPU-Cluster | Wenn Cluster wachsen, wird Netzwerkdurchsatz ein Engpass. | KI-/Cloud-Umsatz beschleunigt, Cloud-Kunden bestellen mehr, Aktie bricht relativ zum Nasdaq/SMH aus. |
| Broadcom | AVGO | Netzwerk/Custom Silicon | ASICs, Networking, KI-Infrastrukturchips | Profitiert von Hyperscaler-ASICs und Netzwerkbedarf als NVIDIA-Alternative/Ergaenzung. | KI-Umsatzanteil steigt stark, neue Hyperscaler-Design-Wins, Guidance-Anhebung. |
| Marvell Technology | MRVL | Custom Silicon/Networking | Custom AI Silicon, Interconnect, optische/elektrische Verbindung | Hebel auf "Build your own AI chips" bei Hyperscalern. | Neue ASIC-Programme, starkes Data-Center-Wachstum, Margenverbesserung. |
| Vertiv | VRT | Kuehlung/Power | Direct-to-chip liquid cooling, Rechenzentrumsinfrastruktur | Physische Infrastruktur kann nach Speicher der naechste Engpass werden. | Backlog und Auftragseingang steigen, Guidance hoch, Liquid-Cooling-Anteil waechst. |
| Western Digital | WDC | HDD/Storage-Alternative | Nearline-HDD, Kontext zu Seagate und SanDisk-Spin-off | Duopol-Streuung zu Seagate; relevant falls HDD-These staerker als erwartet wird. Eigene Akte: `02_context/companies/western_digital.md`. | Nearline-Exabytes, HDD-Margen, Free Cash Flow und 2027/2028-Backlog ziehen staerker als bei Seagate. |
| Samsung Electronics | 005930.KS / SSNLF | Speicher-Allrounder | DRAM, HBM, NAND, Smartphones, Foundry | Breiterer Speicherwert als SK Hynix/Micron; moeglicher Aufholer bei HBM. | HBM-Yield-Probleme geloest, NVIDIA/AMD-Qualifikation, Bewertung bleibt attraktiv. |

## Erweiterte Watchlist

| Unternehmen | Symbol | Rolle | Warum beobachten? |
|---|---|---|---|
| Eaton | ETN | Stromnetz, Transformatoren, elektrische Infrastruktur | Rechenzentren brauchen Netzanschluss und Stromverteilung. |
| GE Vernova | GEV | Grid, Turbinen, Netzinfrastruktur | Profitiert von Stromnetz-Ausbau und Energieknappheit. |
| Corning | GLW | Glasfaser, optische Infrastruktur | Optische Verbindungen koennen bei grossen KI-Clustern wichtiger werden. |
| Constellation Energy | CEG | CO2-arme Stromversorgung | Hyperscaler suchen langfristige Energievertraege. |
| Vistra | VST | Stromerzeugung | Profiteur steigender Stromnachfrage durch Rechenzentren. |
| Bloom Energy | BE | On-site Power | Hochriskante Wette auf schnelle lokale Energieversorgung fuer Datacenter. |

## Alert-Kriterien

Ein Agent soll bei jeder Aktienanfrage diese Datei kurz gegenpruefen und einen Hinweis geben, wenn mindestens zwei der folgenden Punkte bei einem Watchlist-Wert auftreten:

- Kursentwicklung ueber 1 Monat groesser als +20 Prozent und besser als Nasdaq 100 oder SMH.
- Kursentwicklung ueber 3 Monate groesser als +40 Prozent.
- Neues 52-Wochen-Hoch nach Earnings oder Guidance-Anhebung.
- Umsatz- oder EPS-Guidance wird deutlich angehoben.
- KI-, Datacenter-, Networking-, Cooling- oder Power-Backlog waechst deutlich schneller als der Gesamtumsatz.
- Forward-KGV oder PEG ist trotz Rallye noch plausibel im Vergleich zum Wachstum.
- Analysten heben Schaetzungen an, nicht nur Kursziele.
- Management nennt explizit Hyperscaler, KI-Cluster, Liquid Cooling, Custom AI Silicon, Ethernet AI Fabric, optische Verbindungen oder Datacenter-Power als Haupttreiber.

## Re-Rating-Kandidaten nach UBS-/Micron-Logik

Die UBS-/Micron-Logik bedeutet: Der Markt bewertet ein Unternehmen nicht mehr als normalen Zykliker oder Industrie-/Komponentenwert, sondern als knappen strategischen AI-Infrastrukturengpass mit mehrjaehriger Nachfrage, Preissetzungsmacht und EPS-Revisionen.

| Rang | Bereich | Kandidaten | Warum aehnliches Re-Rating moeglich? | Was dafuer passieren muss | Hauptrisiko |
|---:|---|---|---|---|---|
| 1 | HBM/DRAM-Aufholer | Samsung Electronics | Breiter Speicherwert mit moeglichem HBM-Aufholhebel und niedrigerer relativer Bewertung als viele US-AI-Werte. | HBM4E/HBM4-Qualifikation, NVIDIA/AMD/Hyperscaler-Design-Wins, steigende Memory-Margen. | Foundry-/Konglomeratabschlag, Aufholstory scheitert. |
| 2 | NAND/Enterprise-SSD | SanDisk, WDC indirekt | Markt koennte NAND/SSD von Commodity zu AI-Datacenter-Engpass umbewerten. | Datacenter-SSD-Umsatz, NAND-Preise, Margen und EPS-Schaetzungen steigen gleichzeitig. | NAND-Zyklus dreht schnell, Bewertung zu euphorisch. |
| 3 | Custom AI Silicon / Networking | Broadcom, Marvell | ASICs, AI Networking und optische Interconnects koennten als naechster Flaschenhals nach GPUs/HBM gelten. | Neue Hyperscaler-Design-Wins, langfristiger Backlog, AI-Umsatzanteil steigt schneller als erwartet. | Bereits hohe Bewertung; Kundenzentrierung und Design-Win-Timing. |
| 4 | Ethernet AI Fabric | Arista | Wenn Ethernet klarer Standard fuer AI-Cluster wird, kann Arista eine strategische Fabric-Praemie bekommen. | AI-Sales-Ziele steigen, Cloud-Titanen bestellen weiter, Margen bleiben hoch. | Nvidia/InfiniBand oder eigene Hyperscaler-Loesungen begrenzen Marktanteil. |
| 5 | Power/Cooling | Vertiv, Eaton | Physische Rechenzentrumsinfrastruktur kann vom Nebenprodukt zum Engpass werden. | Backlog, Orders, Liquid-Cooling-/Power-Module und EPS werden weiter hochrevidiert. | Bewertung bei Vertiv bereits hoch; Projekt- und Ausfuehrungsrisiko. |
| 6 | Grid/Power Generation | GE Vernova, Constellation, Vistra | Strom, Netzanschluss und 24/7-Power koennten der begrenzende Faktor fuer AI-Factories werden. | Langfristige Datacenter-Vertraege, Grid-/Turbinen-Backlog, bessere Margen und sichtbarer Free Cash Flow. | Regulierung, Projektlaufzeiten, Rohstoff-/Zinsrisiko. |
| 7 | Optics/Fiber | Corning | AI-Cluster brauchen optische Verbindungen; langfristige Hyperscaler-Vertraege koennen alte Glas-/Fiber-Bewertung veraendern. | Weitere Hyperscaler-Vertraege, Photonics-Wachstum, Margen- und EPS-Revisionen. | Aktie bereits stark gelaufen; nicht alle Segmente sind AI-nah. |
| 8 | WFE/Advanced Packaging | ASML, Applied Materials, Lam Research, Amkor | HBM, DRAM, advanced packaging und AI-logic brauchen mehr Tools und Packaging-Kapazitaet. | Orders/Backlog steigen mehrjaehrig, Packaging wird Engpass, Exportkontrollen bleiben beherrschbar. | Capex-Zyklus, China-/Exportkontrollen, hohe Erwartungen. |

### Vorlaeufige Priorisierung

- Hohe Re-Rating-Chance, aber schon stark gelaufen: Samsung, SanDisk, Broadcom, Marvell, Vertiv.
- Gute These mit potenziell besserem Chance/Risiko: Eaton, GE Vernova, Corning, WDC.
- Solide Picks-and-Shovels, aber weniger "UBS-Moment": ASML, AMAT, LRCX, AMKR.
- HDD-/Nearline bleibt separat in `02_context/watchlist_hdd_nearline_storage.md` zu pruefen.

## Red-Flags vor einem Einstieg

- Aktie steigt nur wegen Story, aber Umsatz/Gewinn-Schaetzungen steigen nicht.
- PEG deutlich ueber 2,0 ohne Sondergrund.
- Bruttomarge faellt trotz KI-Narrativ.
- Auftragsbestand steigt, aber Free Cash Flow bleibt schwach.
- Unternehmen ist nur indirekt KI-nah und wird vom Markt trotzdem wie ein Pure-Play bewertet.
- Bewertung liegt deutlich ueber eigener Historie und Peers, ohne dass Wachstum beschleunigt.

## Arbeitsanweisung fuer Agenten

Bei jeder neuen Anfrage zur aktuellen Depotlage:

1. Diese Datei mitlesen.
2. Pruefen, ob einer der primaeren Follow-on-Kandidaten aktuell staerker loslaeuft als die Depotwerte.
3. Wenn ja, im Antwortfazit einen Abschnitt "Follow-on-Watchlist" ergaenzen.
4. Neue Kandidaten oder entfernte Kandidaten hier dokumentieren.
5. Bei echten Alert-Signalen `03_state/evaluation_log.md` aktualisieren.
