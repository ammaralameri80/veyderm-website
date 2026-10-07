import { homeContent } from "@/lib/content";

export function AiFlow() {
  const t = homeContent.ai;
  return (
    <section className="ai-band" id="intelligence">
      <div className="wrap">
        <div className="sec-tag ai-tag">{t.tag}</div>
        <h2 className="ai-h">{t.h2}</h2>
        <p className="ai-sub">{t.sub}</p>
        <div className="ai-flow">
          {t.flow.map((step, i) => (
            <div className="ai-step" key={step}>
              <span className="ai-node">{i + 1}</span>
              <span className="ai-label">{step}</span>
            </div>
          ))}
          <div className="ai-flow-line" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
