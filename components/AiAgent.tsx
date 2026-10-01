import { OrbitDiagram } from "./OrbitDiagram";

const ICO = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const CARDS = [
  {
    title: "For doctors",
    points: ["Evidence-ranked product picks", "Automatic safety & interaction checks"],
    icon: (
      <svg {...ICO} aria-hidden="true">
        <path d="M6 3v5a4 4 0 0 0 8 0V3" />
        <path d="M5 3h2M13 3h2" />
        <path d="M10 16a5 5 0 0 0 10 0v-1.5" />
        <circle cx="20" cy="12.5" r="2" />
      </svg>
    ),
  },
  {
    title: "For distributors",
    points: ["Real demand signals", "Structured RFQs, not scattered chats"],
    icon: (
      <svg {...ICO} aria-hidden="true">
        <path d="M21 8 12 3 3 8v8l9 5 9-5z" />
        <path d="M3 8l9 5 9-5" />
        <path d="M12 13v9" />
      </svg>
    ),
  },
  {
    title: "For patients",
    points: ["24/7 answers on WhatsApp", "Reminders & easy reordering"],
    icon: (
      <svg {...ICO} aria-hidden="true">
        <path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 20.5l1.6-5.5A8.4 8.4 0 1 1 21 11.5z" />
        <path d="M8.5 12h.01M12 12h.01M15.5 12h.01" />
      </svg>
    ),
  },
];

export function AiAgent() {
  return (
    <section className="engine" id="agent">
      <div className="wrap">
        <div className="sec-tag">The Veyderm AI Agent</div>
        <h2>One agent. Insight for every side.</h2>
        <p className="q">Reads the evidence, drafts the plan, answers patients.</p>

        <div className="agent-split">
          <div className="agent-cards">
            {CARDS.map((c) => (
              <div className="acard" key={c.title}>
                <div className="ah">
                  <span className="ai">{c.icon}</span>
                  <h3>{c.title}</h3>
                </div>
                <ul>
                  {c.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div
            className="agent-demo"
            role="img"
            aria-label="Sample agent chat: a patient asks what to use for worsening melasma; the agent recommends azelaic acid 20% with strong evidence and daily SPF, then the plan moves from awaiting doctor approval to approved."
          >
            <div className="demo-head" aria-hidden="true">
              <span className="demo-dot" />
              Veyderm agent
              <span className="demo-sample">Illustrative example</span>
            </div>
            <div className="demo-thread" aria-hidden="true">
              <div className="d-msg patient">
                <p>My melasma is worse with the summer sun — what can I use?</p>
              </div>
              <div className="d-msg agent">
                <p>
                  For melasma, start with <b>azelaic acid 20%</b> plus daily SPF.
                </p>
                <span className="d-ev">Strong evidence</span>
              </div>
              <div className="d-flow">
                <span className="d-state pending">
                  <svg {...ICO} width={15} height={15}>
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7.5V12l3 2" />
                  </svg>
                  Awaiting doctor approval
                </span>
                <span className="d-arrow" aria-hidden="true">→</span>
                <span className="d-state approved">
                  <svg {...ICO} width={15} height={15}>
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Approved
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="agent-orbit">
          <OrbitDiagram />
        </div>

        <a className="btn btn-mint" href="#access">
          Request Early Access
        </a>
      </div>
    </section>
  );
}
