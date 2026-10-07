import { homeContent } from "@/lib/content";

const CAP_ICONS = [
  // Assess
  (<svg key="0" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></svg>),
  // Understand
  (<svg key="1" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3 5 6v5c0 4.2 2.8 7.3 7 8.5 4.2-1.2 7-4.3 7-8.5V6l-7-3z" /><path d="m9 11.5 2 2 4-4" /></svg>),
  // Decide
  (<svg key="2" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M9 3H5a2 2 0 0 0-2 2v4M15 3h4a2 2 0 0 1 2 2v4M9 21H5a2 2 0 0 1-2-2v-4M15 21h4a2 2 0 0 0 2-2v-4" /><path d="m9 12 2 2 4-4" /></svg>),
  // Build
  (<svg key="3" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16v4H4zM4 12h10v8H4zM18 12h2v8h-2z" /></svg>),
  // Engage
  (<svg key="4" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 20.5l1.6-5.5A8.4 8.4 0 1 1 21 11.5z" /></svg>),
];

function Mockup() {
  return (
    <div className="promock" aria-hidden="true">
      <div className="promock-top">
        <span className="promock-kicker">Case · Treatment plan</span>
        <span className="promock-sample">Illustrative</span>
      </div>
      <div className="promock-grid">
        <div className="promock-side">
          <div className="promock-pill active">Assessment</div>
          <div className="promock-pill">Products</div>
          <div className="promock-pill">Safety</div>
          <div className="promock-pill">Plan</div>
        </div>
        <div className="promock-main">
          <div className="promock-row"><span>Azelaic acid 20%</span><span className="promock-ev">Strong</span></div>
          <div className="promock-row"><span>Niacinamide 10%</span><span className="promock-ev mod">Moderate</span></div>
          <div className="promock-safe"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>Safety check passed</div>
          <div className="promock-flag"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" /><path d="M12 9v4M12 17h.01" /></svg>Pregnancy: avoid retinoids</div>
          <div className="promock-approve">Approve &amp; send</div>
        </div>
      </div>
    </div>
  );
}

export function ProfessionalTeaser() {
  const t = homeContent.professional;
  return (
    <section className="sec pro-teaser" id="professional">
      <div className="wrap">
        <div className="teaser-grid">
          <div className="teaser-copy">
            <div className="sec-tag pro-tag">{t.tag}</div>
            <div className="teaser-audience">{t.audience}</div>
            <h2>{t.h2}</h2>
            <p className="lede">{t.sub}</p>
            <ul className="cap-list">
              {t.capabilities.map((c, i) => (
                <li key={c.t}>
                  <span className="cap-ic">{CAP_ICONS[i]}</span>
                  <span><b>{c.t}</b> — {c.d}</span>
                </li>
              ))}
            </ul>
            <a className="btn btn-primary" href={t.href} data-cta="pro_teaser">{t.cta}</a>
          </div>
          <div className="teaser-visual">
            <Mockup />
          </div>
        </div>
      </div>
    </section>
  );
}
