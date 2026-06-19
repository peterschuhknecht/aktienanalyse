# ThesisRadar MVP

Dieses Verzeichnis enthaelt einen isolierten Web-App-Prototyp fuer die KI-gestuetzte Aktienanalyse.
Der Rest des Analyse-Repositories bleibt unveraendert.

## Ziel

- Bezahlter Kundenzugang zum Lesen kuratierter Auswertungen.
- Admin-Zugang fuer Themen, Reports, Kundenstatus und Qualitaets-Gates.
- Mehrere Investment-Themen statt nur AI-Memory.
- MVP ohne Datenbank, ohne echte KI-Anbindung und ohne externe Marktdaten.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- lucide-react fuer Icons
- Lokale Mockdaten in `src/lib/mock-data.ts`

## Scripts

```bash
npm install
npm run dev
npm run build
npm run typecheck
```

## MVP-Grenzen

- Auth ist als Rollenumschalter simuliert.
- Stripe ist als Paid-Access-Konzept sichtbar, aber nicht angebunden.
- Reports, Quellen, Events und Datenluecken sind Mockdaten.
- Es werden keine Dateien aus dem Analyse-Repository gelesen oder geschrieben.

## Naechste Ausbaustufen

1. Auth.js oder Clerk fuer Login und Rollen.
2. Stripe Billing fuer Abo, Customer Portal und Webhooks.
3. Postgres/Supabase/Neon fuer Topics, Reports, Entitlements und Audit Log.
4. Import-Pipeline aus CSV/KI-Analyse mit Quality-Gate vor Publikation.
5. Admin-Freigabeprozess fuer Reports mit Quellenqualitaet, Datenluecken und Konflikten.
