import { content, type Lang } from "@/lib/content";

const ICO = {
  width: 20, height: 20, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor",
  strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const,
};

const STEP_ICONS = [
  (
    <svg key="0" {...ICO} aria-hidden="true">
      <path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 20.5l1.6-5.5A8.4 8.4 0 1 1 21 11.5z" />
      <path d="M9.6 9.6a2.4 2.4 0 0 1 4 1.6c0 1.4-1.8 1.5-1.8 2.8" /><path d="M11.9 16.5h.01" />
    </svg>
  ),
  (
    <svg key="1" {...ICO} aria-hidden="true">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="m16 11 2 2 4-4" />
    </svg>
  ),
  (
    <svg key="2" {...ICO} aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" /><path d="M9 13h6M9 17h4" />
    </svg>
  ),
  (
    <svg key="3" {...ICO} aria-hidden="true">
      <path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 20.5l1.6-5.5A8.4 8.4 0 1 1 21 11.5z" />
      <path d="M8.5 12h.01M12 12h.01M15.5 12h.01" />
    </svg>
  ),
  (
    <svg key="4" {...ICO} aria-hidden="true">
      <path d="M3 11a9 9 0 0 1 14.9-6.6L21 7" /><path d="M21 3v4h-4" />
      <path d="M21 13a9 9 0 0 1-14.9 6.6L3 17" /><path d="M3 21v-4h4" />
    </svg>
  ),
];

export function PatientJourney({ lang }: { lang: Lang }) {
  const t = content[lang].journey;
  return (
    <section className="sec" id="journey">
      <div className="wrap">
        <div className="sec-tag">{t.tag}</div>
        <h2>{t.h2}</h2>
        <p className="lede">{t.lede}</p>

        <div className="journey-split">
          <ol className="timeline">
            {t.steps.map((s, i) => (
              <li className="tl-step" key={s.title}>
                <span className="tl-ic">{STEP_ICONS[i]}</span>
                <div className="tl-body">
                  <h3>{s.title}</h3>
                  {s.tag && <span className="wa">● {s.tag}</span>}
                  <p>{s.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="phone-wrap">
            <div className="phone" role="img" aria-label={t.cap}>
              <div className="phone-notch" aria-hidden="true" />
              <div className="wa-top" aria-hidden="true">
                <span className="wa-avatar">V</span>
                <div>
                  <div className="wa-name">{t.phoneName}</div>
                  <div className="wa-online">{t.online}</div>
                </div>
              </div>
              <div className="wa-body" aria-hidden="true">
                {t.messages.map((m, i) => (
                  <div className={`wa-msg ${m.in ? "in" : "out"}`} key={i}>
                    {m.text}
                    <span className="wa-time">{m.time}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="phone-cap">{t.cap}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
