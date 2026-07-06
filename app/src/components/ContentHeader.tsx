"use client";

import type { Evaluation, Thesis } from "@/lib/types";
import { DownloadIcon, PlayIcon } from "./Icons";

export function ContentHeader({
  thesis,
  chips,
  standLabel,
  onAction,
}: {
  thesis: Thesis;
  chips?: Evaluation["chips"];
  standLabel?: string;
  onAction: (message: string) => void;
}) {
  const kicker =
    thesis.status === "aktiv"
      ? "Aktive These"
      : thesis.status === "beobachtung"
        ? "Beobachtungs-These"
        : "These (Entwurf)";

  return (
    <header className="content-header">
      <div className="content-header-inner">
        <div className="header-top">
          <div>
            <div className="header-kicker">{kicker}</div>
            <h1 className="header-title">{thesis.title}</h1>
            <p className="header-desc">{thesis.description}</p>
          </div>
          <div className="header-actions">
            <button
              type="button"
              className="btn btn-ghost"
              title="In der Layout-Vorschau ohne Funktion"
              onClick={() =>
                onAction("Layout-Vorschau: Der Bericht-Export folgt in einer späteren Ausbaustufe.")
              }
            >
              <DownloadIcon />
              Exportieren
            </button>
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
        </div>

        <div className="chip-row">
          {(chips ?? [{ label: "Noch keine Auswertung vorhanden", tone: "neutral" as const }]).map(
            (c) => (
              <span key={c.label} className={`chip ${c.tone === "neutral" ? "" : c.tone}`}>
                <span className="chip-dot" />
                {c.label}
              </span>
            ),
          )}
          {standLabel ? <span className="stand-note">{standLabel}</span> : null}
        </div>
      </div>
    </header>
  );
}
