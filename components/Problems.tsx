import { content, type Lang } from "@/lib/content";

const ICO = {
  width: 22, height: 22, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor",
  strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const,
};

const ICONS = [
  (
    <svg key="0" {...ICO} aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M9.2 9.3a3 3 0 0 1 5.6 1c0 2-2.8 2.4-2.8 4" />
      <path d="M12 17.5h.01" />
    </svg>
  ),
  (
    <svg key="1" {...ICO} aria-hidden="true">
      <path d="M3 3v18h18" /><path d="M18 8l-4.5 5-3-2.5L7 15" />
    </svg>
  ),
  (
    <svg key="2" {...ICO} aria-hidden="true">
      <path d="M18 8.5a6 6 0 0 0-12 0c0 7-2.5 8.5-2.5 8.5h17" />
      <path d="M10.3 20.5a2 2 0 0 0 3.4 0" /><path d="M3 3l18 18" />
    </svg>
  ),
  (
    <svg key="3" {...ICO} aria-hidden="true">
      <path d="M21 8 12 3 3 8v8l9 5 9-5z" /><path d="M3 8l9 5 9-5" /><path d="M12 13v9" />
    </svg>
  ),
];

export function Problems({ lang }: { lang: Lang }) {
  const t = content[lang].problems;
  return (
    <section className="sec tint">
      <div className="wrap">
        <div className="sec-tag">{t.tag}</div>
        <h2>{t.h2}</h2>
        <p className="lede">{t.lede}</p>
        <div className="prob-grid">
          {t.items.map((p, i) => (
            <div className="prob" key={p.title}>
              <div className="ic">{ICONS[i]}</div>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
