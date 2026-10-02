import { OrbitDiagram } from "./OrbitDiagram";
import { content, type Lang } from "@/lib/content";

const ICO = {
  width: 20, height: 20, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor",
  strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const,
};

const CARD_ICONS = [
  (
    <svg key="0" {...ICO} aria-hidden="true">
      <path d="M6 3v5a4 4 0 0 0 8 0V3" /><path d="M5 3h2M13 3h2" />
      <path d="M10 16a5 5 0 0 0 10 0v-1.5" /><circle cx="20" cy="12.5" r="2" />
    </svg>
  ),
  (
    <svg key="1" {...ICO} aria-hidden="true">
      <path d="M21 8 12 3 3 8v8l9 5 9-5z" /><path d="M3 8l9 5 9-5" /><path d="M12 13v9" />
    </svg>
  ),
  (
    <svg key="2" {...ICO} aria-hidden="true">
      <path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 20.5l1.6-5.5A8.4 8.4 0 1 1 21 11.5z" />
      <path d="M8.5 12h.01M12 12h.01M15.5 12h.01" />
    </svg>
  ),
];

export function AiAgent({ lang }: { lang: Lang }) {
  const t = content[lang].agent;
  return (
    <section className="engine" id="agent">
      <div className="wrap">
        <div className="sec-tag">{t.tag}</div>
        <h2>{t.h2}</h2>
        <p className="q">{t.q}</p>

        <div className="agent-split">
          <div className="agent-cards">
            {t.cards.map((c, i) => (
              <div className="acard" key={c.title}>
                <div className="ah">
                  <span className="ai">{CARD_ICONS[i]}</span>
                  <h3>{c.title}</h3>
                </div>
                <ul>
                  {c.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="agent-demo" role="img" aria-label={`${t.demo.sample}: ${t.demo.patient}`}>
            <div className="demo-head" aria-hidden="true">
              <span className="demo-dot" />
              {t.tag}
              <span className="demo-sample">{t.demo.sample}</span>
            </div>
            <div className="demo-thread" aria-hidden="true">
              <div className="d-msg patient">
                <p>{t.demo.patient}</p>
              </div>
              <div className="d-msg agent">
                <p>{t.demo.agent}</p>
                <span className="d-ev">{t.demo.evidence}</span>
              </div>
              <div className="d-flow">
                <span className="d-state pending">
                  <svg {...ICO} width={15} height={15}>
                    <circle cx="12" cy="12" r="9" /><path d="M12 7.5V12l3 2" />
                  </svg>
                  {t.demo.pending}
                </span>
                <span className="d-arrow" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" /><path d="m13 6 6 6-6 6" />
                  </svg>
                </span>
                <span className="d-state approved">
                  <svg {...ICO} width={15} height={15}>
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  {t.demo.approved}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="agent-orbit">
          <OrbitDiagram />
        </div>

        <a className="btn btn-mint" href="#access" data-cta="ai_agent">
          {t.cta}
        </a>
      </div>
    </section>
  );
}
