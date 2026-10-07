import { homeContent } from "@/lib/content";

const ICO = {
  width: 22, height: 22, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor",
  strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const,
};

const ICONS = [
  // doctor-led
  (<svg key="0" {...ICO} aria-hidden="true"><path d="M6 3v5a4 4 0 0 0 8 0V3" /><path d="M5 3h2M13 3h2" /><path d="M10 16a5 5 0 0 0 10 0v-1.5" /><circle cx="20" cy="12.5" r="2" /></svg>),
  // authorized products
  (<svg key="1" {...ICO} aria-hidden="true"><path d="M12 3 5 6v5c0 4.2 2.8 7.3 7 8.5 4.2-1.2 7-4.3 7-8.5V6l-7-3z" /><path d="m9 11.5 2 2 4-4" /></svg>),
  // privacy & consent
  (<svg key="2" {...ICO} aria-hidden="true"><rect x="4" y="10" width="16" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></svg>),
  // UAE-built
  (<svg key="3" {...ICO} aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18" /></svg>),
];

export function TrustRow() {
  return (
    <section className="sec trust-row-sec">
      <div className="wrap">
        <div className="trust-row">
          {homeContent.trust.map((p, i) => (
            <div className="trust-pillar" key={p.title}>
              <span className="trust-ic">{ICONS[i]}</span>
              <div>
                <div className="trust-t">{p.title}</div>
                <div className="trust-b">{p.body}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
