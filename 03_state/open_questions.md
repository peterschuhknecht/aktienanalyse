# Offene Fragen

P0 blockiert konkrete Depot-/Bewertungsentscheidungen. P1 beeinflusst Risiko, Timing oder Opportunity Cost. P2 ist Backlog.

## P0

- [BEANTWORTET 2026-06-30 via Broker-Screenshot] Positionsgroessen, Einstaende, Gewichte, Instrumente, Basiswaehrung: Micron 96 Stk @EUR 710,98 (35,3%), SK Hynix 58 Stk GDR @EUR 1.196,98 (32,0%), SanDisk 25 Stk @EUR 922,78 (16,6%), Kioxia 90 Stk @EUR 423,98 (16,1%). Basiswaehrung EUR; Details in `05_data/portfolio_positions.csv`.
- [BEANTWORTET 2026-06-30] Der 4-Positionen-Sleeve IST das GESAMTE Depot (100% AI-Speicher, 0% Cash). Basis EUR 150.000 (Start 22.04.2026), aktuell ~271.640 (+81%). Einzel-Einstaende reshuffling-verfaelscht -> G/V nur auf Depot-Ebene.
- [BEANTWORTET/BESTAETIGT 2026-06-30] Risikolimits: Einzelposition Warn 30/Max 35%, HBM/DRAM 60/70%, NAND 30/40%; Depot-Giveback -15%/-25% vs Peak; Basis-Schutz Floor ~180-190k. Voll investiert (kein Cash-Puffer); Verkauf NUR bei These-Bruch oder Limit-Verletzung; FX-Regel verworfen. Details `05_data/portfolio_risk_limits.csv` + `02_context/portfolio_policy.md`.
- OFFEN (klein, P1): Handelsplaetze je Wert + dauerhafte Kurs-/FX-Quelle.

### P0 beantwortet am 2026-06-24/26 (Details im evaluation_log)

- [BEANTWORTET JA] Micron Q3 FY2026: HBM-Ramp, Margenverbesserung und 2027-Sichtbarkeit hart bestaetigt (HBM bis 2027 in 2028 ausverkauft, GM 84.9%->~86%, Q4-Guidance $50B/$31).
- [BEANTWORTET, mit Vorbehalt] Kioxia rechtfertigt die parallele Haltung zu SanDisk fundamental besser (starke Ergebnisse, JV bis 2034) - aber die Bucket-Ueberlappung bleibt das groesste Einzelfaktor-Risiko; FCF/Working-Capital/JV-Split noch gegen Primaerfiling pruefen.

## P1

- Welche dauerhafte Kurs-/FX-/Brokerquelle soll fuer SK Hynix, Kioxia und SanDisk genutzt werden?
- Welche Benchmark gilt fuer relative Staerke: Nasdaq 100, SMH/SOX, Peer-Gruppe oder alle drei?
- Welche Quellen sollen fuer DRAM-, HBM-, NAND-, Enterprise-SSD- und HDD/Nearline-Preise dauerhaft genutzt werden?
- Sind Broadcom-/Marvell-/Arista-, WDC-/STX- oder Power/Grid-Werte harte Opportunity-Cost-Kandidaten oder nur Watch?
- Hat das SK-Hynix-Cheongju-Ereignis Produktions-, Yield-, Liefer-, Behoerden- oder Kundenfolgen?

## P2

- Soll alte Kurs-/News-Historie in CSV-Archive verdichtet werden?
- Soll Energie/Kuehlung/Grid als eigene Infrastrukturwelle aktiver verfolgt werden?
- Zu welchem Kurs und Ergebnis wurde Seagate verkauft?
- Welche steuerlichen, brokerseitigen, Liquiditaets- oder persoenlichen Restriktionen sollen Depotentscheidungen begrenzen?
