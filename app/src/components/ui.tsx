import type { AlphaVerdict } from "@/lib/types";

/** Rubrik 0–10 → Farbklasse (9–10 grün … 0–2 rot) */
export function scoreTone(value: number): string {
  if (value >= 9) return "tone-9";
  if (value >= 7) return "tone-7";
  if (value >= 5) return "tone-5";
  if (value >= 3) return "tone-3";
  return "tone-0";
}

function segFill(value: number): string {
  if (value >= 9) return "fill-9";
  if (value >= 7) return "fill-7";
  if (value >= 5) return "fill-5";
  if (value >= 3) return "fill-3";
  return "fill-0";
}

export function SegBar({ value }: { value: number }) {
  const fill = segFill(value);
  return (
    <div className="seg-bar" aria-hidden="true">
      {Array.from({ length: 10 }, (_, i) => (
        <span key={i} className={`seg ${i < value ? fill : ""}`} />
      ))}
    </div>
  );
}

export function ScorePill({ value }: { value: number }) {
  return (
    <span className={`pill-score ${scoreTone(value)}`}>
      {value}
      <span style={{ opacity: 0.5, fontWeight: 500 }}>/10</span>
    </span>
  );
}

export function SectionCard({
  kicker,
  title,
  meta,
  children,
}: {
  kicker: string;
  title: string;
  meta?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="card">
      <div className="card-head">
        <div>
          <div className="kicker">{kicker}</div>
          <h2 className="card-title">{title}</h2>
        </div>
        {meta ? <div className="card-meta">{meta}</div> : null}
      </div>
      {children}
    </section>
  );
}

export function PlainNote({ children }: { children: React.ReactNode }) {
  return (
    <div className="plain">
      <strong>Was heißt das praktisch?</strong> {children}
    </div>
  );
}

export function AlphaBadge({ verdict }: { verdict: AlphaVerdict }) {
  const cls =
    verdict === "besser"
      ? "besser"
      : verdict === "schlechter"
        ? "schlechter"
        : verdict === "offen"
          ? "offen"
          : "";
  return <span className={`alpha-badge ${cls}`}>{verdict}</span>;
}
