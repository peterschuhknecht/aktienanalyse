# Aktienanalyse · Thesen-Cockpit (Frontend)

Dunkles, aufgeräumtes Frontend-Layout für die laufende Aktienanalyse — **Layout-Vorschau ohne Backend-Funktion**.

## Starten

```bash
cd app
npm install
npm run dev
```

Danach im Browser: <http://localhost:3000>

## Was die Vorschau zeigt

- **Linke Seitenleiste:** Thesen-Liste (Demo: „KI-Infrastruktur: Memory" als aktive These, zwei Beobachtungs-Thesen) plus „Neue These" (legt nur lokal einen Entwurf an, kein Speichern).
- **Content-Bereich:** die Auswertung der These im Format des `start`-Rundgangs — Depot-Ampel, Terminübersicht, Lagebericht, korrigierte Performance-Sicht, Risikogrenzen-Status und Watchlist mit Alpha-Urteil.
- **Darunter:** Analyse-Chat für Rückfragen an die KI (in dieser Ausbaustufe mit Platzhalter-Antwort, noch ohne KI-Anbindung).

## Demo-Daten

Alle Inhalte sind ein statischer Schnappschuss (Stand 03.07.2026) aus dem Analyse-Repository (`05_data/*.csv`, `03_state/*`), fest verdrahtet in `src/lib/demo-data.ts`. Kurse sind Seeds, **keine Live-Daten** — die App ersetzt nicht die Pflicht zum frischen Kurs.

## Struktur

```
src/
  app/          Layout, Seite, globales Design-System (CSS)
  components/   Sidebar, Auswertungs-Sektionen, Chat, Modal
  lib/          Typen und Demo-Daten
```

## Nächste Ausbaustufen (nicht enthalten)

- KI-Anbindung des Chats (API-Route, Streaming)
- Auswertungslauf („start") aus der App starten
- Thesen persistent speichern; später Login
