import { content, type Lang } from "@/lib/content";

const ICO = {
  width: 22, height: 22, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor",
  strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const,
};

const CARD_ICONS = [
  (
    <svg key="0" {...ICO} aria-hidden="true">
      <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
    </svg>
  ),
  (
    <svg key="1" {...ICO} aria-hidden="true">
      <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
      <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
    </svg>
  ),
  (
    <svg key="2" {...ICO} aria-hidden="true">
      <path d="M3 3v18h18" /><path d="M18 17V9" /><path d="M13 17V5" /><path d="M8 17v-3" />
    </svg>
  ),
];

export function ForDistributors({ lang }: { lang: Lang }) {
  const t = content[lang].distributors;
  return (
    <section className="sec tint aud" id="distributors">
      <div className="wrap">
        <div className="sec-tag">{t.tag}</div>
        <h2>{t.h2}</h2>
        <p className="lede">{t.lede}</p>

        <div className="ba">
          <div className="ba-col before">
            <div className="ba-t">{t.beforeT}</div>
            <ul>
              {t.before.map((b) => <li key={b}>{b}</li>)}
            </ul>
          </div>
          <div className="ba-arrow" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" /><path d="m13 6 6 6-6 6" />
            </svg>
          </div>
          <div className="ba-col after">
            <div className="ba-t">{t.afterT}</div>
            <ul>
              {t.after.map((a) => <li key={a}>{a}</li>)}
            </ul>
          </div>
        </div>

        <div className="dist-widgets">
          <div className="rfq-card">
            <div className="rfq-head">
              <span className="rfq-badge">{t.rfqBadge}</span>
              <span className="rfq-time">{t.rfqTime}</span>
            </div>
            <div className="rfq-clinic">{t.rfqClinic}</div>
            <ul className="rfq-items">
              <li><span>{t.rfqItems[0]}</span><span className="rfq-qty">×24</span></li>
              <li><span>{t.rfqItems[1]}</span><span className="rfq-qty">×40</span></li>
            </ul>
            <div className="rfq-foot">
              <span className="rfq-sample">{t.rfqSample}</span>
              <span className="rfq-action">{t.rfqAction}</span>
            </div>
          </div>

          <div className="trend-card">
            <div className="trend-head">
              <div>
                <div className="trend-title">{t.trendTitle}</div>
                <div className="trend-sub">{t.trendSub}</div>
              </div>
              <span className="trend-up">{t.trendUp}</span>
            </div>
            <svg className="spark" viewBox="0 0 240 72" preserveAspectRatio="none" role="img" aria-label={t.trendFoot}>
              <defs>
                <linearGradient id="sparkFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="rgba(108,101,194,.28)" />
                  <stop offset="100%" stopColor="rgba(108,101,194,0)" />
                </linearGradient>
              </defs>
              <path d="M0 58 L34 52 L68 54 L102 40 L136 44 L170 26 L204 24 L240 10 L240 72 L0 72 Z" fill="url(#sparkFill)" />
              <path d="M0 58 L34 52 L68 54 L102 40 L136 44 L170 26 L204 24 L240 10" fill="none" stroke="var(--purple)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="240" cy="10" r="3.5" fill="var(--purple)" />
            </svg>
            <div className="trend-foot">{t.trendFoot}</div>
          </div>
        </div>

        <div className="bgrid">
          {t.cards.map((c, i) => (
            <div className="bcard" key={c.title}>
              <div className="bi">{CARD_ICONS[i]}</div>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </div>
          ))}
        </div>

        <div className="start">
          <div className="start-t">{t.startT}</div>
          <ol className="s3">
            {t.steps.map((s, i) => (
              <li key={s}>
                <b>{i + 1}</b>
                <span>{s}</span>
              </li>
            ))}
          </ol>
          <a className="btn btn-primary" href="#access" data-role="Authorized Distributor" data-cta="for_distributors">
            {t.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
