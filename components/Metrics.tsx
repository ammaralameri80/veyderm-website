import { content, type Lang } from "@/lib/content";

export function Metrics({ lang }: { lang: Lang }) {
  const stats = content[lang].metrics;
  return (
    <section className="stats">
      <div className="wrap">
        <div className="stats-grid">
          {stats.map((s) => (
            <div className="stat" key={s.head}>
              <div className="n">{s.head}</div>
              <div className="k">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
