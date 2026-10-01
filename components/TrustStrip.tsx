// Standards / trust strip. Labels are placeholders for the client to fill with
// real, verifiable standards — no invented certifications.

const STANDARDS = [
  "[REPLACE: standard 1]",
  "[REPLACE: standard 2]",
  "[REPLACE: standard 3]",
  "[REPLACE: standard 4]",
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
