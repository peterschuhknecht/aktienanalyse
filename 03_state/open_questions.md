# Offene Fragen

P0 blockiert konkrete Depot-/Bewertungsentscheidungen. P1 beeinflusst Risiko, Timing oder Opportunity Cost. P2 ist Backlog.

## P0

- TEIL-BEANTWORTET (2026-07-01/02): GESAMTDEPOT VERKAUFT -> 100% Cash EUR 243.288,43 (netto). Wiedereinstiegs-PARAMETER vom Nutzer ENTSCHIEDEN: (a) Deployment = SOFORT WIEDER VOLL REIN, aber bei KLUGEM ZEITPUNKT (kein Staffeln); (b) KEINE dauerhafte Cash-Reserve (wieder voll investiert, alte Regel); (c) 3 NAMEN: Micron + SK Hynix + SanDisk (Kioxia raus, doppelt SanDisk). Ziel-Allokation: MU 35% / SK Hynix 33% / SanDisk 32% (HBM/DRAM-Bucket ~68% Warnzone <70 Max, NAND 32% <40 Max). [UPDATE 07-03: Payrolls-Print RESOLVED = SOFT (+57k vs ~110-115k erw, U-Quote 4,2%, Loehne zahm) -> soft/in-line-Zweig aktiv (Entry nur auf bestaetigte Stabilisierung). ENTRY TROTZDEM WEITER AUSGESETZT: Memory ignorierte den guten Makro und fiel 07-02 WEITER (MU ~$978, SNDK ~$1.755) auf ein neues Angebots-Glut-Narrativ (Samsung/SKH-Kapazitaetsplaene + Capex-Peak-2026); 07-03 nur Korea-Sentiment-Bounce (SK Hynix +~4%), US-Legs (MU/SNDK, 67%) wg US-Feiertag dark. Naechster echter Read = Mo 07-06 US-Reopen: settled Up-Tag/Reclaim ueber alle drei = Entry-Bestaetigung. Kein These-Bruch, Glut = Medium/Meinung; Hard-Test bleibt TrendForce-Q3-Contract-Preise.] [UPDATE 07-06 frueh: Asien Tag 2 gruen (SKH live +3-11%, KOSPI +2,7%), NQ-Futures +0,83% -> Gate kann HEUTE ABEND aufloesen (SKH-Schluss 08:30 CEST, MU/SNDK settled 22:00 CEST); bei 3x gruen Execution fruehestens Di-Vormittag, Samsung-Prelim (Di ~01:30 CEST) als Zusatz-Read; SKH-Fr-Schluss-Konflikt (2.187.000 vs 2.289.000) vor Order settled aufloesen.] OFFEN bleibt nur der EXAKTE ENTRY-ZEITPUNKT: payrolls-gated (07-02 14:30 CEST Print), Regel = nicht vor dem Print voll rein; danach auf die Markt-REAKTION reagieren (soft/in-line -> Entry auf bestaetigte Stabilisierung/Up-Reaktion; hot -> tieferen Flush abwarten bis keine tieferen Tiefs, dann billiger rein). KONSEQUENZ der Wahl (Nutzer akzeptiert): voll investiert + keine Reserve + Einmal-Entry = gesamtes Timing-Risiko auf EINE Entscheidung, keine Averaging-Cushion -> Entry-Trigger-Disziplin + Zyklus-Turn-Exit (Contract-Preise/Margen rollen QoQ) sind die EINZIGEN Risikokontrollen. Kern-Risiko unveraendert: billiges Forward-KGV (7-8) bei zyklischem Gewinn-Peak = Value-Trap; Rendite-weit-ueber-Markt an intakten Zyklus gebunden.
- [HISTORISCH/ERLEDIGT 2026-06-30 via Broker-Screenshot] Positionsgroessen vor Verkauf: Micron 96 Stk @EUR 710,98, SK Hynix 58 Stk GDR @EUR 1.196,98, SanDisk 25 Stk @EUR 922,78, Kioxia 90 Stk @EUR 423,98. Basiswaehrung EUR. Am 2026-07-01 alle verkauft.
- [BEANTWORTET 2026-06-30] Der 4-Positionen-Sleeve IST das GESAMTE Depot (100% AI-Speicher, 0% Cash). Basis EUR 150.000 (Start 22.04.2026), aktuell ~271.640 (+81%). Einzel-Einstaende reshuffling-verfaelscht -> G/V nur auf Depot-Ebene.
- [BEANTWORTET/BESTAETIGT 2026-06-30] Risikolimits: Einzelposition Warn 30/Max 35%, HBM/DRAM 60/70%, NAND 30/40%; Depot-Giveback -15%/-25% vs Peak; Basis-Schutz Floor ~180-190k. Voll investiert (kein Cash-Puffer); Verkauf NUR bei These-Bruch oder Limit-Verletzung; FX-Regel verworfen. Details `05_data/portfolio_risk_limits.csv` + `02_context/portfolio_policy.md`.
- OFFEN (klein, P1): Handelsplaetze je Wert + dauerhafte Kurs-/FX-Quelle.
- OFFEN (P1, Nutzerueberlegung 2026-07-01): Konsolidierung auf je 1 NAND + 1 HBM/DRAM-Wert erwogen (1-2-J-Sicht). ANALYSE: 4->2 senkt kein Markt-/Themenrisiko (Depot bleibt 100% eine These), konzentriert nur Einzelwert-Risiko + zwingt zu Vorab-Pick des Intra-Bucket-Gewinners. HARTER KONFLIKT: 2 Namen (~je 50%) verletzen Einzelposition-Max 35% -> Limits verlangen faktisch >=3 Namen. Kein Verkaufs-Trigger (kein These-Bruch/Limit-Verletzung). Lean falls doch: HBM/DRAM Micron (Liquiditaet/Diversifikation/bewiesen) vs SK Hynix (max HBM-Leader-Upside, billiger, mehr FX/Verwaesserungs-Friktion); NAND SanDisk (US-Pure-Play/Katalysator) vs Kioxia (billiger, JPY/Overhang) - ~Muenzwurf wegen JV-Kopplung. Blocker fuer Entscheid: Zeithorizont-Liquiditaetsbedarf, STEUER auf ~+81% realisierte Gewinne, Broker-Kosten/Handelsplaetze.

### P0 beantwortet am 2026-06-24/26 (Details im evaluation_log)

- [BEANTWORTET JA] Micron Q3 FY2026: HBM-Ramp, Margenverbesserung und 2027-Sichtbarkeit hart bestaetigt (HBM bis 2027 in 2028 ausverkauft, GM 84.9%->~86%, Q4-Guidance $50B/$31).
- [BEANTWORTET, mit Vorbehalt] Kioxia rechtfertigt die parallele Haltung zu SanDisk fundamental besser (starke Ergebnisse, JV bis 2034) - aber die Bucket-Ueberlappung bleibt das groesste Einzelfaktor-Risiko; FCF/Working-Capital/JV-Split noch gegen Primaerfiling pruefen.

## P1

- Welche dauerhafte Kurs-/FX-/Brokerquelle soll fuer SK Hynix, Kioxia und SanDisk genutzt werden?
- Welche Benchmark gilt fuer relative Staerke: Nasdaq 100, SMH/SOX, Peer-Gruppe oder alle drei?
- Welche Quellen sollen fuer DRAM-, HBM-, NAND-, Enterprise-SSD- und HDD/Nearline-Preise dauerhaft genutzt werden?
- Sind Broadcom-/Marvell-/Arista-, WDC-/STX- oder Power/Grid-Werte harte Opportunity-Cost-Kandidaten oder nur Watch?
- OFFEN (P1, Nutzerueberlegung 2026-07-01): HDD-Bucket (WDC + Seagate) als Diversifikations-Ergaenzung erwogen. BEFUND: HDD-Reaktivierungshuerde inzwischen groesstenteils erfuellt (sold out ~2027, LTAs 2027/28, Exabytes +29% ohne ASP-Verfall, Seagate GM 47%, HAMR liefert). Diversifikationsnutzen REAL aber begrenzt: Pure-HDD Seagate entkoppelte im 06-26-Memory-Selloff (+0,28%), WDC fiel mit (-10,58%) -> fuer Streuung reicht EIN Name (Seagate, Technologiefuehrer). Bleibt dieselbe AI-Capex-These (kein Makro-Hedge). BLOCKER: voll investiert (0% Cash) -> HDD = Memory-Reduktion + Steuer; neues Bucket-Ziel-/Max-Limit noch zu definieren; HDD fwd-KGV ~35-38 (stale, frisch rechnen) optisch teuer vs Memory ~7-9. Offen: harte EPS-Revisionen + relative Staerke vs Micron/SanDisk.
- Hat das SK-Hynix-Cheongju-Ereignis Produktions-, Yield-, Liefer-, Behoerden- oder Kundenfolgen?

## P2

- Soll alte Kurs-/News-Historie in CSV-Archive verdichtet werden?
- Soll Energie/Kuehlung/Grid als eigene Infrastrukturwelle aktiver verfolgt werden?
- Zu welchem Kurs und Ergebnis wurde Seagate verkauft?
- Welche steuerlichen, brokerseitigen, Liquiditaets- oder persoenlichen Restriktionen sollen Depotentscheidungen begrenzen?
