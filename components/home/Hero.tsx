import { homeContent } from "@/lib/content";
import { Icon, Arrow } from "./Icons";

export function Hero() {
  const t = homeContent.hero;
  const s = t.scan;
  const flowIcons = ["understand", "assist", "plan"];
  return (
    <section className="vhero">
      <div className="wrap vhero-grid">
        <div className="vhero-copy">
          <span className="v-kicker"><span className="dot" />{t.kicker}</span>
          <h1 className="vhero-h1">{t.h1}</h1>
          <p className="vhero-sub">{t.sub}</p>
          <div className="vhero-cta">
            <a className="btn btn-primary btn-lg" href="/professional" data-cta="hero_pro">
              {t.ctaPro}<Arrow className="ar" />
            </a>
            <a className="btn btn-light btn-lg" href="/sena" data-cta="hero_sena">
              {t.ctaSena}<Arrow className="ar" />
            </a>
          </div>
          <p className="vhero-note">
            <span className="tick"><Icon name="check" size={17} /></span>
            {t.note}
          </p>
        </div>

        <div className="vhero-visual">
          <div className="vscan">
            <div className="vscan-img">
              <span className="vscan-chip"><span className="dot" />{s.chip}</span>
              <span className="vscan-scan" />
              {s.markers.map((m, i) => (
                <span key={m} className={`vscan-mk m${i + 1}`}><span>{m}</span></span>
              ))}
            </div>
            <div className="vscan-flow">
              {s.flow.map((f, i) => (
                <div className="vscan-node" key={f.k}>
                  <span className="vscan-ic"><Icon name={flowIcons[i]} size={17} /></span>
                  <span className="vscan-tx">
                    <span className="k">{f.k}</span>
                    <span className="v">{f.v}</span>
                  </span>
                </div>
              ))}
              <div className="vscan-node is-derm">
                <span className="vscan-ic"><Icon name="steth" size={17} /></span>
                <span className="vscan-tx">
                  <span className="k">{s.derm.k}</span>
                  <span className="v">{s.derm.v}</span>
                </span>
              </div>
            </div>
            <span className="vscan-ev">{s.evidence}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
