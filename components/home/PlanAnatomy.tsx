import { homeContent } from "@/lib/content";
import { PlanHead, PlanSteps, PlanSafety, PlanSign } from "./PlanSheet";

/**
 * The hero's plan, taken apart: each part of the sheet sits on the left with a
 * plain explanation beside it. The last part (follow-up) lives on the
 * patient's phone, not the sheet, so it gets a reminder instead.
 */
export function PlanAnatomy() {
  const t = homeContent.anatomy;
  const fragment: Record<string, React.ReactNode> = {
    profile: <PlanHead />,
    steps: <PlanSteps />,
    safety: <PlanSafety />,
    sign: <PlanSign />,
    follow: (
      <div className="pl-remind">
        <span className="pl-remind-from">Sena</span>
        <p>{homeContent.people.fragments.patient.msg}</p>
      </div>
    ),
  };

  return (
    <section className="anat" id="plan">
      <div className="wrap">
        <div className="anat-head">
          <h2>{t.h2}</h2>
          <p>{t.p}</p>
        </div>
        <div className="anat-rows">
          {t.parts.map((p) => (
            <div className={`anat-row k-${p.k}`} key={p.k}>
              <div className="anat-frag" aria-hidden="true">
                {fragment[p.k]}
              </div>
              <div className="anat-note">
                <h3>{p.t}</h3>
                <p>{p.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
