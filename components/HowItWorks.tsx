import { content, type Lang } from "@/lib/content";

const ICO = {
  width: 22, height: 22, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor",
  strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const,
};

const STEP_ICONS = [
  (
    <svg key="0" {...ICO} aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></svg>
  ),
  (
    <svg key="1" {...ICO} aria-hidden="true">
      <path d="M8 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2" />
      <rect x="8" y="2" width="8" height="4" rx="1" /><path d="m9 13 2 2 4-4" />
    </svg>
  ),
  (
    <svg key="2" {...ICO} aria-hidden="true">
      <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
      <path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4" />
    </svg>
  ),
  (
    <svg key="3" {...ICO} aria-hidden="true">
      <circle cx="9" cy="20" r="1.3" /><circle cx="18" cy="20" r="1.3" />
      <path d="M2 3h2.2l2.1 11.2a1.6 1.6 0 0 0 1.6 1.3h8.9a1.6 1.6 0 0 0 1.6-1.3L20 7H6" />
    </svg>
  ),
];

export function HowItWorks({ lang }: { lang: Lang }) {
  const t = content[lang].how;
  return (
    <section className="sec" id="how">
      <div className="wrap">
        <div className="sec-tag">{t.tag}</div>
        <h2>{t.h2}</h2>
        <p className="lede">{t.lede}</p>
        <div className="steps">
          {t.steps.map((s, i) => (
            <div className="step" key={s.title}>
              <div className="step-ic">{STEP_ICONS[i]}</div>
              <div className="num">{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              <div className="step-ui" aria-hidden="true">
                {i === 0 && (
                  <div className="ui-search">
                    <svg {...ICO} width={15} height={15}><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></svg>
                    <span>{t.ui.search}</span>
                    <span className="ui-caret" />
                  </div>
                )}
                {i === 1 && (
                  <div className="ui-table">
                    <div className="ui-row"><span>{content[lang].mockup.products[0].name}</span><span className="ui-ev strong">{t.ui.strong}</span></div>
                    <div className="ui-row"><span>{content[lang].mockup.products[2].name}</span><span className="ui-ev mod">{t.ui.moderate}</span></div>
                  </div>
                )}
                {i === 2 && (
                  <div className="ui-wa">
                    <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true">
                      <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1 0 12 2zm5.3 14.1c-.2.6-1.2 1.1-1.7 1.2-.5.1-1 .2-3.2-.7-2.7-1-4.4-3.7-4.5-3.9-.1-.2-1-1.4-1-2.6s.7-1.8.9-2.1c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5.2.5.8 2 .9 2.1 0 .1.1.3 0 .5l-.4.6-.4.4c-.1.1-.3.3-.1.5.2.3.7 1 1.4 1.7.9.8 1.7 1.1 2 1.2.2.1.4.1.5-.1l.8-1c.2-.2.4-.2.6-.1.3.1 1.5.7 1.8.9.3.1.4.2.5.3.1.2.1.6-.1 1.2z" />
                    </svg>
                    {t.ui.send}
                  </div>
                )}
                {i === 3 && (
                  <div className="ui-rfq">
                    <span className="ui-rfq-l">{t.ui.qty}</span>
                    <span className="ui-qty">12</span>
                    <span className="ui-btn">{t.ui.quote}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
