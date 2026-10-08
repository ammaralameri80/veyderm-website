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
        <ul className="guard-list">
          {t.items.map((it) => (
            <li key={it.t}>
              <b>{it.t}</b>
              <span>{it.d}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
