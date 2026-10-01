// Honest stat tiles. Numbers are placeholders for the client to fill — no
// invented figures. The `data-count` attribute marks each value so an
// animated count-up can be wired up later without changing the markup.

const STATS = [
  { value: "[REPLACE: number of verified brands]", label: "verified product brands" },
  { value: "[REPLACE: number of partner clinics]", label: "clinics & dermatologists onboard" },
  { value: "[REPLACE: plans created]", label: "treatment plans created" },
];

export function Metrics() {
  return (
    <section className="stats">
      <div className="wrap">
        <div className="stats-grid">
          {STATS.map((s) => (
            <div className="stat" key={s.label}>
              <div className="n" data-count>
                {s.value}
              </div>
              <div className="k">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
