import { Fragment } from "react";
import { homeContent } from "@/lib/content";
import { Icon, Arrow } from "./Icons";

export function Ecosystem() {
  const t = homeContent.ecosystem;
  return (
    <section className="vsec" id="platform">
      <div className="wrap">
        <div className="vhead">
          <h2>{t.h2}</h2>
          <p>{t.p}</p>
        </div>
        <div className="veco-loop">
          {t.nodes.map((n, i) => (
            <Fragment key={n.r}>
              <div className={`veco-node${n.ai ? " is-ai" : ""}`}>
                <span className="veco-ic"><Icon name={n.ic} size={22} /></span>
                <span className="r">{n.r}</span>
                <span className="n">{n.n}</span>
              </div>
              {i < t.nodes.length - 1 && (
                <span className="veco-arrow"><Arrow size={22} /></span>
              )}
            </Fragment>
          ))}
        </div>
        <p className="veco-return">
          <Icon name="continue" size={18} />
          {t.loop}
        </p>
      </div>
    </section>
  );
}
