// Plain-language "What is Veyderm?" band, directly under the hero — three
// columns with line icons that answer the question in five seconds.

const ICON = {
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  fill: "none",
  width: 26,
  height: 26,
  viewBox: "0 0 24 24",
};

const COLS = [
  {
    title: "An AI agent for dermatologists",
    body: "It reads the evidence and drafts a treatment plan — the doctor reviews, edits, and approves every one.",
    icon: (
      <svg {...ICON} aria-hidden="true">
        <rect x="4" y="8" width="16" height="12" rx="3" />
        <path d="M12 8V4" />
        <circle cx="12" cy="3" r="1.4" />
        <circle cx="9" cy="14" r="1" />
        <circle cx="15" cy="14" r="1" />
        <path d="M9.5 17.5h5" />
      </svg>
    ),
  },
  {
    title: "Verified products only",
    body: "Recommendations come from authorized distributors — no fakes and no grey-market stock.",
    icon: (
      <svg {...ICON} aria-hidden="true">
        <path d="M12 3 5 6v5c0 4.2 2.8 7.3 7 8.5 4.2-1.2 7-4.3 7-8.5V6l-7-3z" />
        <path d="m9 11.5 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Patients followed up on WhatsApp",
    body: "Plans arrive where patients already are, with reminders and a 24/7 chat for questions.",
    icon: (
      <svg {...ICON} aria-hidden="true">
        <path d="M20 11.5a7.5 7.5 0 0 1-10.9 6.7L4 19.5l1.3-5A7.5 7.5 0 1 1 20 11.5z" />
        <path d="M9.5 10.5c.5 2 2 3.5 4 4" />
      </svg>
    ),
  },
];

export function WhatIsVeyderm() {
  return (
    <section className="sec whatis" id="what">
      <div className="wrap">
        <h2>What is Veyderm?</h2>
        <div className="whatis-grid">
          {COLS.map((c) => (
            <div className="whatis-col" key={c.title}>
              <div className="whatis-ic">{c.icon}</div>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
