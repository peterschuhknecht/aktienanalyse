import type { Evaluation } from "@/lib/types";
import { SectionCard } from "./ui";

export function ReportSection({ data }: { data: Evaluation["report"] }) {
  return (
    <SectionCard
      kicker="Analyse"
      title="Lagebericht zum Wiedereinstieg"
      meta="Fakten, Einordnung und Plan — strikt getrennt"
    >
      {data.sections.map((s) => (
        <div className="report-section" key={s.heading}>
          <h3 className="report-heading">{s.heading}</h3>
          <p className="report-text">{s.text}</p>
        </div>
      ))}
    </SectionCard>
  );
}
