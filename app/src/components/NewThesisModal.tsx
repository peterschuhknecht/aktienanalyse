"use client";

import { useEffect, useRef, useState } from "react";

export interface NewThesisInput {
  title: string;
  description: string;
  symbols: string[];
}

export function NewThesisModal({
  onClose,
  onCreate,
}: {
  onClose: () => void;
  onCreate: (input: NewThesisInput) => void;
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [symbols, setSymbols] = useState("");
  const titleRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    titleRef.current?.focus();
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const t = title.trim();
    if (!t) {
      titleRef.current?.focus();
      return;
    }
    onCreate({
      title: t,
      description: description.trim() || "Noch keine Beschreibung hinterlegt.",
      symbols: symbols
        .split(",")
        .map((s) => s.trim().toUpperCase())
        .filter(Boolean),
    });
  }

  return (
    <div
      className="overlay"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="nt-title">
        <h2 className="modal-title" id="nt-title">
          Neue These anlegen
        </h2>
        <p className="modal-sub">
          Eine These bündelt Werte, Regeln und Auswertungen zu einer Investment-Idee.
        </p>

        <form onSubmit={submit}>
          <div className="field">
            <label htmlFor="nt-name">
              Titel <span className="req">*</span>
            </label>
            <input
              id="nt-name"
              ref={titleRef}
              className="input"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="z. B. Robotik: Sensorik & Aktuatorik"
            />
          </div>

          <div className="field">
            <label htmlFor="nt-desc">Kurzbeschreibung</label>
            <textarea
              id="nt-desc"
              className="input"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Kernidee in ein bis zwei Sätzen — was ist die Wette, was der Treiber?"
            />
          </div>

          <div className="field">
            <label htmlFor="nt-symbols">Werte / Symbole (Komma-getrennt)</label>
            <input
              id="nt-symbols"
              className="input"
              value={symbols}
              onChange={(e) => setSymbols(e.target.value)}
              placeholder="z. B. MU, 000660.KS, SNDK"
            />
          </div>

          <div className="modal-actions">
            <button type="button" className="btn btn-ghost" onClick={onClose}>
              Abbrechen
            </button>
            <button type="submit" className="btn btn-primary">
              These anlegen
            </button>
          </div>
        </form>

        <p className="modal-note">
          Layout-Vorschau: Die These wird nur lokal in dieser Sitzung angelegt, nicht
          gespeichert.
        </p>
      </div>
    </div>
  );
}
