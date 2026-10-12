import { homeContent } from "@/lib/content";

export function Guardrails() {
  const t = homeContent.guard;
  return (
    <section className="guard">
      <div className="wrap guard-grid">
        <div className="sec-head">
          <h2>{t.h2}</h2>
          <p>{t.p}</p>
        </div>
        <dl className="guard-list">
          {t.items.map((it) => (
            <div key={it.t}>
              <dt>{it.t}</dt>
              <dd>{it.d}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
