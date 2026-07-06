"use client";

import type { Thesis, ThesisStatus } from "@/lib/types";
import { LogoMark, PlusIcon } from "./Icons";

const statusLabel: Record<ThesisStatus, string> = {
  aktiv: "Aktiv",
  beobachtung: "Beobachtung",
  entwurf: "Entwurf",
};

export function Sidebar({
  theses,
  selectedId,
  onSelect,
  onNew,
}: {
  theses: Thesis[];
  selectedId: string;
  onSelect: (id: string) => void;
  onNew: () => void;
}) {
  return (
    <aside className="sidebar">
      <div className="brand">
        <LogoMark />
        <div className="brand-text">
          <div className="brand-name">Aktienanalyse</div>
          <div className="brand-sub">Thesen-Cockpit</div>
        </div>
      </div>

      <div className="side-scroll">
        <div className="side-label-row">
          <span className="side-label">Thesen</span>
          <span className="count-pill num">{theses.length}</span>
        </div>

        <nav className="thesis-list" aria-label="Thesen">
          {theses.map((t) => (
            <button
              key={t.id}
              type="button"
              className={`thesis-card ${t.id === selectedId ? "selected" : ""}`}
              onClick={() => onSelect(t.id)}
              aria-current={t.id === selectedId ? "true" : undefined}
            >
              <div className="thesis-card-top">
                <span className="thesis-title">{t.title}</span>
                <span className={`badge ${t.status}`}>{statusLabel[t.status]}</span>
              </div>
              <div className="thesis-desc">{t.description}</div>
              <div className="thesis-meta num">
                <span>
                  {t.symbols.length} {t.symbols.length === 1 ? "Wert" : "Werte"}
                </span>
                <span className="sep">·</span>
                <span>Stand {t.updatedAt}</span>
              </div>
            </button>
          ))}
        </nav>

        <button type="button" className="new-thesis-btn" onClick={onNew}>
          <PlusIcon />
          Neue These
        </button>
      </div>

      <div className="side-foot">
        <div className="row">
          <span className="dot-live" />
          <span>Layout-Vorschau V1 · Demo-Daten vom 03.07.2026</span>
        </div>
        <div>Keine Anlageberatung</div>
      </div>
    </aside>
  );
}
