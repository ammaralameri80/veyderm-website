import { Fragment } from "react";
import { content, type Lang } from "@/lib/content";

const ICO = {
  width: 22, height: 22, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor",
  strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const,
};

const CARD_ICONS = [
  (
    <svg key="0" {...ICO} aria-hidden="true">
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  (
    <svg key="1" {...ICO} aria-hidden="true">
      <rect width="8" height="4" x="8" y="2" rx="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="m9 14 2 2 4-4" />
    </svg>
  ),
  (
    <svg key="2" {...ICO} aria-hidden="true">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  ),
];

const CTRL_ICONS = [
  (
    <svg key="0" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />
    </svg>
  ),
  (
    <svg key="1" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" /><circle cx="12" cy="12" r="3" />
    </svg>
  ),
  (
    <svg key="2" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  ),
];

function Arrow() {
  return (
    <li className="cf-arrow" aria-hidden="true">
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14" /><path d="m13 6 6 6-6 6" />
      </svg>
    </li>
  );
}

export function ForDoctors({ lang }: { lang: Lang }) {
  const t = content[lang].doctors;
  return (
    <section className="sec aud" id="doctors">
      <div className="wrap">
        <div className="aud-head">
          <div>
            <div className="sec-tag">{t.tag}</div>
            <h2>{t.h2}</h2>
            <p className="lede">{t.lede}</p>
          </div>
          <div className="reassure">
            <div className="rq">
              {t.reassureA}
              <br />
              <em>{t.reassureEm}</em>
            </div>
            <p>{t.reassureP}</p>
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

        <div className="control">
          <div className="control-t">{t.controlT}</div>
          <ol className="control-flow">
            {t.control.map((c, i) => (
              <Fragment key={c.title}>
                {i > 0 && <Arrow />}
                <li className="cf-step">
                  <span className="cf-ic">{CTRL_ICONS[i]}</span>
                  <h3>{c.title}</h3>
                  <p>{c.body}</p>
                </li>
              </Fragment>
            ))}
          </ol>
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
          <a className="btn btn-primary" href="#access" data-role="Dermatologist" data-cta="for_doctors">
            {t.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
