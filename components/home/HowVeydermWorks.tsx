import { homeContent } from "@/lib/content";

export function HowVeydermWorks() {
  const t = homeContent.how;
  return (
    <section className="vsec" id="how">
      <div className="wrap">
        <div className="vhead">
          <h2>{t.h2}</h2>
          <p>{t.p}</p>
        </div>
        <ol className="vhow-steps">
          {t.steps.map((s, i) => (
            <li className="vstep" key={s.t}>
              <span className="vstep-dot">{String(i + 1).padStart(2, "0")}</span>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
