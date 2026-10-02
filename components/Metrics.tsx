// Honest, non-numeric value tiles — no invented figures. Each states a
// principle of the product rather than a metric.

const STATS = [
  {
    head: "Authorized products only",
    label: "from verified distributors and brands",
  },
  {
    head: "Doctor-approved plans",
    label: "nothing reaches a patient without the doctor's approval",
  },
  {
    head: "24/7 on WhatsApp",
    label: "patients get answers any time",
  },
];

export function Metrics() {
  return (
    <section className="stats">
      <div className="wrap">
        <div className="stats-grid">
          {STATS.map((s) => (
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
