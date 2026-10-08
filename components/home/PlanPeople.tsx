import { homeContent } from "@/lib/content";

/**
 * Who touches the plan, as three full-width rows rather than three cards: the
 * role is set large on the left, what it means for them and a small piece of
 * their view of the product on the right.
 */
export function PlanPeople() {
  const t = homeContent.people;
  const f = t.fragments;

  const views: React.ReactNode[] = [
    <div className="pp-view pp-derm" key="derm">
      <span>{f.derm.pending}</span>
      <span className="pp-btn">{f.derm.action}</span>
    </div>,
    <div className="pp-view pp-brand" key="brand">
      <ol>
        {f.brand.rows.map(([n, r], i) => (
          <li key={n} className={i === 0 ? "you" : undefined}>
            <span>{n}</span>
            <span>{r}</span>
          </li>
        ))}
      </ol>
      <span className="pp-cap">{f.brand.caption}</span>
    </div>,
    <div className="pp-view pp-patient" key="patient">
      <span className="pp-from">{f.patient.from}</span>
      <p>{f.patient.msg}</p>
      <span className="pp-btn">{f.patient.done}</span>
    </div>,
  ];

  return (
    <section className="ppl">
      <div className="wrap">
        <h2 className="ppl-h">{t.h2}</h2>
        <div className="ppl-rows">
          {t.rows.map((r, i) => (
            <article className="ppl-row" id={r.id} key={r.id}>
              <div className="ppl-who">
                <span className="ppl-role">{r.who}</span>
                <h3>{r.verb}</h3>
              </div>
              <div className="ppl-body">
                <p>{r.d}</p>
                <a className="ppl-cta" href="#access" data-role={r.role} data-cta={`people_${i}`}>
                  {r.cta}
                </a>
              </div>
              <div className="ppl-view" aria-hidden="true">
                {views[i]}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
