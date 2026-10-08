import { homeContent } from "@/lib/content";
import { ProConsole } from "./ProConsole";

export function ProSection() {
  const t = homeContent.proSection;
  return (
    <section className="feat feat-pro" id="pro">
      <div className="wrap">
        <div className="feat-head">
          <p className="feat-name">{t.name}</p>
          <h2>{t.h2}</h2>
          <p>{t.p}</p>
        </div>
        <ProConsole />
        <div className="feat-grid">
          <ul className="feat-facts">
            {t.facts.map((f) => (
              <li key={f.t}>
                <b>{f.t}</b>
                <span>{f.d}</span>
              </li>
            ))}
          </ul>
          <div className="feat-actions">
            <a className="btn btn-primary btn-lg" href="#access" data-role={t.role} data-cta="pro_access">{t.cta}</a>
            <a className="feat-link" href={t.link.href}>{t.link.label}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
