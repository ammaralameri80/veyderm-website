import { homeContent } from "@/lib/content";

const ICONS = [
  (<svg key="0" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3 5 6v5c0 4.2 2.8 7.3 7 8.5 4.2-1.2 7-4.3 7-8.5V6l-7-3z" /><path d="m9 11.5 2 2 4-4" /></svg>),
  (<svg key="1" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" /><path d="M12 9v4M12 17h.01" /></svg>),
  (<svg key="2" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3v5a4 4 0 0 0 8 0V3" /><path d="M5 3h2M13 3h2" /><path d="M10 16a5 5 0 0 0 10 0v-1.5" /><circle cx="20" cy="12.5" r="2" /></svg>),
];

export function TrustSection() {
  const t = homeContent.trust;
  return (
    <section className="sec trust-sec" id="trust">
      <div className="wrap">
        <div className="sec-tag">{t.tag}</div>
        <h2>{t.h2}</h2>
        <div className="trust-grid">
          {t.points.map((p, i) => (
            <div className="trust-card" key={p.t}>
              <span className="trust-card-ic">{ICONS[i]}</span>
              <div className="trust-card-t">{p.t}</div>
              <p className="trust-card-d">{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
