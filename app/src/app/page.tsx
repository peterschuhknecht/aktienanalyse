"use client";

import { useEffect, useRef, useState } from "react";
import { AmpelSection } from "@/components/AmpelSection";
import { ChatPanel } from "@/components/ChatPanel";
import { ContentHeader } from "@/components/ContentHeader";
import { EmptyState } from "@/components/EmptyState";
import { EventsSection } from "@/components/EventsSection";
import { NewThesisModal, type NewThesisInput } from "@/components/NewThesisModal";
import { PerformanceSection } from "@/components/PerformanceSection";
import { ReportSection } from "@/components/ReportSection";
import { RiskSection } from "@/components/RiskSection";
import { Sidebar } from "@/components/Sidebar";
import { WatchlistSection } from "@/components/WatchlistSection";
import { demoEvaluation, demoTheses } from "@/lib/demo-data";
import type { Thesis } from "@/lib/types";

export default function Home() {
  const [theses, setTheses] = useState<Thesis[]>(demoTheses);
  const [selectedId, setSelectedId] = useState<string>(demoTheses[0].id);
  const [modalOpen, setModalOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const mainRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    return () => {
      if (toastTimer.current) clearTimeout(toastTimer.current);
    };
  }, []);

  function showToast(message: string) {
    if (toastTimer.current) clearTimeout(toastTimer.current);
    setToast(message);
    toastTimer.current = setTimeout(() => setToast(null), 3600);
  }

  function selectThesis(id: string) {
    setSelectedId(id);
    mainRef.current?.scrollTo({ top: 0 });
  }

  function createThesis(input: NewThesisInput) {
    const id = `these-${Date.now()}`;
    const thesis: Thesis = {
      id,
      title: input.title,
      description: input.description,
      status: "entwurf",
      symbols: input.symbols,
      updatedAt: "03.07.2026",
      hasEvaluation: false,
    };
    setTheses((prev) => [...prev, thesis]);
    setModalOpen(false);
    selectThesis(id);
    showToast("These als Entwurf angelegt — in der Layout-Vorschau nur lokal, ohne Speichern.");
  }

  const selected = theses.find((t) => t.id === selectedId) ?? theses[0];

  return (
    <div className="shell">
      <Sidebar
        theses={theses}
        selectedId={selected.id}
        onSelect={selectThesis}
        onNew={() => setModalOpen(true)}
      />

      <main className="main" ref={mainRef}>
        <ContentHeader
          thesis={selected}
          chips={selected.hasEvaluation ? demoEvaluation.chips : undefined}
          standLabel={selected.hasEvaluation ? demoEvaluation.standLabel : undefined}
          onAction={showToast}
        />

        <div className="content-body">
          {selected.hasEvaluation ? (
            <>
              <AmpelSection data={demoEvaluation.ampel} />
              <EventsSection data={demoEvaluation.events} />
              <ReportSection data={demoEvaluation.report} />
              <PerformanceSection data={demoEvaluation.performance} />
              <RiskSection data={demoEvaluation.risks} />
              <WatchlistSection data={demoEvaluation.watchlist} />
              <ChatPanel />
            </>
          ) : (
            <EmptyState thesis={selected} onAction={showToast} />
          )}

          <footer className="page-foot">
            Demo-Daten · Stand 03.07.2026 · Kurse sind Seeds aus dem Analyse-Repository,
            keine Live-Daten · Keine Anlageberatung
          </footer>
        </div>
      </main>

      {modalOpen ? (
        <NewThesisModal onClose={() => setModalOpen(false)} onCreate={createThesis} />
      ) : null}

      {toast ? (
        <div className="toast" role="status">
          {toast}
        </div>
      ) : null}
    </div>
  );
}
