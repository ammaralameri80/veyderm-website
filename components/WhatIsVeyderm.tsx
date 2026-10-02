import { content, type Lang } from "@/lib/content";

const ICON = {
  stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const, fill: "none", width: 26, height: 26, viewBox: "0 0 24 24",
};

const ICONS = [
  (
    <svg key="a" {...ICON} aria-hidden="true">
      <rect x="4" y="8" width="16" height="12" rx="3" />
      <path d="M12 8V4" /><circle cx="12" cy="3" r="1.4" />
      <circle cx="9" cy="14" r="1" /><circle cx="15" cy="14" r="1" /><path d="M9.5 17.5h5" />
    </svg>
  ),
  (
    <svg key="b" {...ICON} aria-hidden="true">
      <path d="M12 3 5 6v5c0 4.2 2.8 7.3 7 8.5 4.2-1.2 7-4.3 7-8.5V6l-7-3z" />
      <path d="m9 11.5 2 2 4-4" />
    </svg>
  ),
  (
    <svg key="c" {...ICON} aria-hidden="true">
      <path d="M20 11.5a7.5 7.5 0 0 1-10.9 6.7L4 19.5l1.3-5A7.5 7.5 0 1 1 20 11.5z" />
      <path d="M9.5 10.5c.5 2 2 3.5 4 4" />
    </svg>
  ),
];

export function WhatIsVeyderm({ lang }: { lang: Lang }) {
  const t = content[lang].whatis;
  return (
    <section className="sec whatis" id="what">
      <div className="wrap">
        <h2>{t.h2}</h2>
        <div className="whatis-grid">
          {t.cols.map((c, i) => (
            <div className="whatis-col" key={c.title}>
              <div className="whatis-ic">{ICONS[i]}</div>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
