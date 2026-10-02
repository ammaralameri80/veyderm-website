// Standards the platform is built around. This is an alignment statement, not a
// certification claim — see the "Built around recognised standards" label.

const STANDARDS = [
  "EU Cosmetics Regulation 1223/2009",
  "EU Cosmetic Claims Regulation 655/2013",
  "ISO 22716 (Cosmetics GMP)",
  "UAE MOHAP labelling & registration",
];

export function TrustStrip() {
  return (
    <section className="strip" aria-label="Recognised standards">
      <div className="wrap">
        <div className="lbl">Built around recognised standards</div>
        <div className="set">
          {STANDARDS.map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
