import { homeContent } from "@/lib/content";

const ICO = {
  width: 26, height: 26, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor",
  strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const,
};

const ICONS = [
  // patient
  (<svg key="0" {...ICO} aria-hidden="true"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>),
  // doctor
  (<svg key="1" {...ICO} aria-hidden="true"><path d="M6 3v5a4 4 0 0 0 8 0V3" /><path d="M5 3h2M13 3h2" /><path d="M10 16a5 5 0 0 0 10 0v-1.5" /><circle cx="20" cy="12.5" r="2" /></svg>),
  // products
  (<svg key="2" {...ICO} aria-hidden="true"><path d="M21 8 12 3 3 8v8l9 5 9-5z" /><path d="M3 8l9 5 9-5" /><path d="M12 13v9" /></svg>),
];

function Arrow() {
  return (
    <div className="connect-arrow" aria-hidden="true">
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14" /><path d="m13 6 6 6-6 6" />
      </svg>
    </div>
  );
}

export function HowItConnects() {
  const t = homeContent.connects;
  return (
    <section className="sec connects-sec" id="how">
      <div className="wrap">
        <div className="sec-tag">{t.tag}</div>
        <h2>{t.h2}</h2>
        <div className="connects">
          {t.steps.map((s, i) => (
            <div className="connect-group" key={s.title}>
              {i > 0 && <Arrow />}
              <div className="connect-node">
                <span className="connect-ic">{ICONS[i]}</span>
                <div className="connect-t">{s.title}</div>
                <div className="connect-s">{s.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
