import { homeContent } from "@/lib/content";
import { Icon } from "./Icons";

export function Trust() {
  const t = homeContent.trust;
  return (
    <section className="vtrust" id="trust">
      <div className="wrap">
        <h2 className="vtrust-h">{t.h2}</h2>
        <ul className="vtrust-grid">
          {t.points.map((p) => (
            <li key={p.t}>
              <span className="vtrust-ic"><Icon name={p.ic} size={20} /></span>
              <span className="vtrust-t">{p.t}</span>
              <span className="vtrust-d">{p.d}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
