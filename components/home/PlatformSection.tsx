import { homeContent } from "@/lib/content";

export function PlatformSection() {
  const t = homeContent.platform;
  return (
    <section className="sec platform-sec" id="platform">
      <div className="wrap">
        <div className="sec-tag">{t.tag}</div>
        <h2 className="platform-h">{t.h2}</h2>
        <p className="lede platform-lede">{t.sub}</p>

        <div className="eco">
          <div className="eco-core">
            <span className="eco-core-mark">V</span>
            <div>
              <div className="eco-core-name">{t.core.name}</div>
              <div className="eco-core-sub">{t.core.sub}</div>
            </div>
          </div>
          <div className="eco-stem" aria-hidden="true" />
          <div className="eco-nodes">
            {t.nodes.map((n, i) => (
              <a className={`eco-node ${i === 0 ? "pro" : "sena"}`} href={n.href} key={n.name} data-cta={i === 0 ? "eco_pro" : "eco_sena"}>
                <div className="eco-node-audience">{n.audience}</div>
                <div className="eco-node-name">{n.name}</div>
                <p className="eco-node-desc">{n.desc}</p>
                <span className="eco-node-cta">
                  {n.cta}
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></svg>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
