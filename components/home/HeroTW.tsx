import { homeContent } from "@/lib/content";

export function HeroTW() {
  const t = homeContent.hero;
  return (
    <section className="hx">
      <div className="wrap hx-wrap">
        <span className="mono hx-eyebrow">{t.eyebrow}</span>
        <h1 className="hx-h1">
          {t.h1a}
          <br />
          <span className="ital">{t.h1b}</span>
        </h1>
        <p className="hx-sub">{t.sub}</p>
      </div>
    </section>
  );
}
