"use client";

import { useState } from "react";
import { homeContent } from "@/lib/content";

/**
 * The AI pipeline as selectable steps (left) and the model's output for the
 * selected step (right), so visitors can see what the AI actually produces.
 */
export function AiTrace() {
  const t = homeContent.trace;
  const [active, setActive] = useState(0);
  const step = t.steps[active];

  return (
    <section className="trace" id="how">
      <div className="wrap">
        <div className="sec-head">
          <h2>{t.h2}</h2>
          <p>{t.p}</p>
        </div>
        <div className="trace-grid">
          <div className="trace-steps" role="tablist" aria-label={t.h2}>
            {t.steps.map((s, i) => (
              <button
                key={s.t}
                type="button"
                role="tab"
                id={`trace-tab-${i}`}
                aria-selected={i === active}
                aria-controls="trace-panel"
                className="trace-step"
                onClick={() => setActive(i)}
              >
                <span className="trace-n">{i + 1}</span>
                <span className="trace-tx">
                  <b>{s.t}</b>
                  <span>{s.d}</span>
                </span>
              </button>
            ))}
          </div>
          <div className="trace-panel" id="trace-panel" role="tabpanel" aria-labelledby={`trace-tab-${active}`}>
            <div className="trace-bar">
              <span className="trace-dot" aria-hidden="true" />
              <span>veyderm AI</span>
              <span className="trace-stage">
                Step {active + 1} of {t.steps.length}
              </span>
            </div>
            <div className="trace-out" key={active}>
              <p className="trace-label">{step.t}</p>
              <dl>
                {step.out.map(([k, v]) => (
                  <div key={k}>
                    <dt>{k}</dt>
                    <dd>{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="trace-progress" aria-hidden="true">
              {t.steps.map((s, i) => (
                <i key={s.t} className={i <= active ? "on" : undefined} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
