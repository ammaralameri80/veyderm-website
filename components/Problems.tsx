const ICO = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const PROBLEMS = [
  {
    title: "Patients are left guessing",
    body: "Confusing advice, grey-market products, no one to ask.",
    icon: (
      <svg {...ICO} aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M9.2 9.3a3 3 0 0 1 5.6 1c0 2-2.8 2.4-2.8 4" />
        <path d="M12 17.5h.01" />
      </svg>
    ),
  },
  {
    title: "Doctors decide without data",
    body: "Evidence scattered; no view of who follows the plan.",
    icon: (
      <svg {...ICO} aria-hidden="true">
        <path d="M3 3v18h18" />
        <path d="M18 8l-4.5 5-3-2.5L7 15" />
      </svg>
    ),
  },
  {
    title: "No follow-up, no adherence",
    body: "The consult ends and the relationship goes quiet.",
    icon: (
      <svg {...ICO} aria-hidden="true">
        <path d="M18 8.5a6 6 0 0 0-12 0c0 7-2.5 8.5-2.5 8.5h17" />
        <path d="M10.3 20.5a2 2 0 0 0 3.4 0" />
        <path d="M3 3l18 18" />
      </svg>
    ),
  },
  {
    title: "Distributors fly blind",
    body: "No real demand signal from the ground.",
    icon: (
      <svg {...ICO} aria-hidden="true">
        <path d="M21 8 12 3 3 8v8l9 5 9-5z" />
        <path d="M3 8l9 5 9-5" />
        <path d="M12 13v9" />
      </svg>
    ),
  },
];

export function Problems() {
  return (
    <section className="sec tint">
      <div className="wrap">
        <div className="sec-tag">Problems to solve</div>
        <h2>The patient journey is broken at every handoff.</h2>
        <p className="lede">
          Patients, doctors, and distributors work in disconnected silos.
        </p>
        <div className="prob-grid">
          {PROBLEMS.map((p) => (
            <div className="prob" key={p.title}>
              <div className="ic">{p.icon}</div>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
