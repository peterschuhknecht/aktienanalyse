"use client";

import type { Thesis } from "@/lib/types";
import { ChartIcon, PlayIcon } from "./Icons";

export function EmptyState({
  thesis,
  onAction,
}: {
  thesis: Thesis;
  onAction: (message: string) => void;
}) {
  return (
    <div className="empty">
      <div className="empty-icon">
        <ChartIcon />
      </div>
      <h2 className="empty-title">Noch keine Auswertung vorhanden</h2>
      <p className="empty-text">
        Für die These „{thesis.title}“ wurde noch kein Auswertungslauf gespeichert. Eine
        Auswertung entspricht dem „start“-Rundgang der Analyse: Depot-Ampel,
        Terminübersicht, Lagebericht, Performance-Sicht, Risikogrenzen und Watchlist.
      </p>
      <button
        type="button"
        className="btn btn-primary"
        title="In der Layout-Vorschau ohne Funktion"
        onClick={() =>
          onAction(
            "Layout-Vorschau: Der Auswertungslauf („start“) wird in einer späteren Ausbaustufe angebunden.",
          )
        }
      >
        <PlayIcon />
        Auswertung starten
      </button>
    </div>
  );
}
