import { Fragment } from "react";
import { homeContent } from "@/lib/content";
import { Icon } from "./Icons";

export function Credibility() {
  const t = homeContent.cred;
  return (
    <section className="vcred" id="uae">
      <div className="wrap">
        <div className="vcred-grid">
          <div className="vcred-copy">
            <span className="v-kicker"><span className="dot" />{t.kicker}</span>
            <h2>{t.h2}</h2>
            <p>{t.p}</p>
          </div>
          <div className="vcred-chain">
            {t.chain.map((c, i) => (
              <Fragment key={c.n}>
                <div className={`vchain${c.ai ? " ai" : ""}`}>
                  <span className="ci"><Icon name={c.ic} size={18} /></span>
                  <span>
                    <span className="cn" style={{ display: "block" }}>{c.n}</span>
                    <span className="cd">{c.d}</span>
                  </span>
                </div>
                {i < t.chain.length - 1 && <span className="conn" />}
              </Fragment>
            ))}
          </div>
        </div>
        <div className="vstd">
          <span className="lbl">{t.standardsLabel}</span>
          <div className="set">
            {t.standards.map((s) => <span key={s}>{s}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}
