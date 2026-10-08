import { homeContent } from "@/lib/content";

export function Climate() {
  const t = homeContent.climate;
  return (
    <section className="clim">
      <div className="wrap clim-grid">
        <div>
          <h2>{t.h2}</h2>
          <p>{t.p}</p>
        </div>
        <dl className="clim-facts">
          {t.facts.map((f) => (
            <div key={f.v}>
              <dt>{f.v}</dt>
              <dd>{f.d}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
