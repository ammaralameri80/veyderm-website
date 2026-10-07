import { homeContent } from "@/lib/content";

export function JourneyTiles() {
  const t = homeContent.journey;
  return (
    <section className="jy">
      <div className="wrap">
        <div className="jy-head">
          <span className="mono jy-num">{t.n} — {t.label}</span>
          <h2 className="jy-h2">{t.h2}</h2>
        </div>
        <div className="jtiles">
          {t.tiles.map((tile, i) => (
            <div className={`jtile jtile-${tile.tone}`} key={tile.who}>
              <span className="mono jtile-n">{String(i + 1).padStart(2, "0")}</span>
              <div className="jtile-who">{tile.who}</div>
              <div className="jtile-what">{tile.what}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
