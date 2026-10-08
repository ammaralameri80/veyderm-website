import { homeContent } from "@/lib/content";

const P = homeContent.plan;

export const SIGNATURE_D =
  "M6 30c9-17 17-21 21-10s-6 13 2 6 12-19 18-11-4 17 6 9 14-13 20-5 8 9 18 1 22-7 30-3";

/** Evidence strength as three pips; the label is for screen readers and tooltips. */
export function Evidence({ level }: { level: number }) {
  const label = P.evidenceLabel[level - 1];
  return (
    <span className="pl-ev" title={label}>
      {[1, 2, 3].map((i) => (
        <i key={i} className={i <= level ? "on" : undefined} />
      ))}
      <span className="sr">{label}</span>
    </span>
  );
}

export function PlanHead() {
  return (
    <div className="pl-head">
      <div className="pl-title">{P.title}</div>
      <div className="pl-patient">{P.patient}</div>
      <ul className="pl-profile">
        {P.profile.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
    </div>
  );
}

export function PlanSteps() {
  return (
    <ol className="pl-steps">
      {P.steps.map((s) => (
        <li key={s.n} className={`pl-step t-${s.time.toLowerCase()}`}>
          <span className="pl-time">{s.time}</span>
          <span className="pl-n">
            {s.n}
            <small>{s.how}</small>
          </span>
          <Evidence level={s.ev} />
        </li>
      ))}
    </ol>
  );
}

export function PlanSafety() {
  return (
    <div className="pl-safety">
      <p className="pl-flag">{P.safety}</p>
      <p className="pl-ok">{P.checked}</p>
    </div>
  );
}

export function PlanSign() {
  return (
    <div className="pl-sign">
      <svg className="pl-sig" viewBox="0 0 160 40" aria-hidden="true">
        <path pathLength={1} d={SIGNATURE_D} />
      </svg>
      <div className="pl-doc">
        <span>{P.doctor}</span>
        <span>{P.signedAt}</span>
      </div>
    </div>
  );
}

/**
 * The full plan as a single printed sheet: the hero's one orchestrated moment.
 * Lines print in order, the safety check lands, then the dermatologist signs.
 * All of it is CSS (see .pl-sheet.is-live); reduced motion shows the end state.
 */
export function PlanSheet({ live = false }: { live?: boolean }) {
  return (
    <figure className={`pl-sheet${live ? " is-live" : ""}`} aria-label={`${P.title} for ${P.patient}, ${P.note.toLowerCase()}`}>
      <PlanHead />
      <PlanSteps />
      <PlanSafety />
      <PlanSign />
      <figcaption className="pl-note">{P.note}</figcaption>
    </figure>
  );
}
