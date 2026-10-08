import { homeContent } from "@/lib/content";
import { Icon } from "./Icons";

export function Products() {
  const t = homeContent.products;
  const { sena, pro, brands } = t;

  return (
    <section className="prod" id="products">
      <div className="wrap">
        <div className="sec-head">
          <h2>{t.h2}</h2>
        </div>

        <div className="prod-grid">
          <article className="prod-card is-sena">
            <p className="prod-tag">{sena.tag}</p>
            <h3>{sena.name}</h3>
            <p className="prod-d">{sena.d}</p>
            <ul className="prod-points">
              {sena.points.map((p) => (
                <li key={p}><Icon name="check" size={16} />{p}</li>
              ))}
            </ul>
            <div className="prod-mini sena-mini" aria-hidden="true">
              <span className="sc-orb sm" />
              <span className="sena-mini-msg">Time for your evening step: azelaic acid, a thin layer.</span>
            </div>
            <div className="prod-actions">
              <a className="btn btn-primary" href="#access" data-role={sena.role} data-cta="prod_sena">{sena.cta}</a>
              <a className="prod-link" href={sena.link.href}>{sena.link.label}</a>
            </div>
          </article>

          <article className="prod-card is-pro" id="professional">
            <p className="prod-tag">{pro.tag}</p>
            <h3>{pro.name}</h3>
            <p className="prod-d">{pro.d}</p>
            <ul className="prod-points">
              {pro.points.map((p) => (
                <li key={p}><Icon name="check" size={16} />{p}</li>
              ))}
            </ul>
            <div className="prod-mini pro-mini" aria-hidden="true">
              {pro.queue.map((q) => (
                <div key={q.n} className="pro-row">
                  <span className="pro-n">{q.n}</span>
                  <span className="pro-c">{q.c}</span>
                  <span className={`pro-s${q.s === "Drafting" ? " busy" : ""}`}>{q.s}</span>
                </div>
              ))}
            </div>
            <div className="prod-actions">
              <a className="btn btn-primary" href="#access" data-role={pro.role} data-cta="prod_pro">{pro.cta}</a>
              <a className="prod-link" href={pro.link.href}>{pro.link.label}</a>
            </div>
          </article>
        </div>

        <div className="prod-brands" id="brands">
          <div>
            <h3>{brands.t}</h3>
            <p>{brands.d}</p>
          </div>
          <a className="btn btn-light" href="#access" data-role={brands.role} data-cta="prod_brand">{brands.cta}</a>
        </div>
      </div>
    </section>
  );
}
