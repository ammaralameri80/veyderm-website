import { homeContent } from "@/lib/content";

export function SafetyStatement() {
  const t = homeContent.safety;
  return (
    <section className="vsafe" id="safety">
      <div className="wrap">
        <span className="vsafe-badge">{t.badge}</span>
        <h2 className="vsafe-h">{t.a}<span className="b2">{t.b}</span></h2>
        <div className="vsafe-cols">
          <div className="vsafe-col">
            <div className="k pro">{t.pro.k}</div>
            <p>{t.pro.p}</p>
          </div>
          <div className="vsafe-col">
            <div className="k sena">{t.sena.k}</div>
            <p>{t.sena.p}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
