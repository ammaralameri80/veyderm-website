import { HeroMockup } from "./HeroMockup";

const TRUST = [
  "Doctor approves every plan",
  "Authorized products only",
  "WhatsApp-ready",
];

export function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <div className="hero-copy">
          <span className="eyebrow">
            <span className="dot" />
            UAE&apos;s first AI-powered dermatology platform
          </span>
          <h1>
            AI dermatology,
            <br />
            <em>doctor-led.</em>
          </h1>
          <p className="sub">
            Veyderm is an AI agent that helps UAE dermatologists build
            evidence-based treatment plans, recommend verified products, and stay
            connected to patients on WhatsApp.
          </p>
          <div className="hero-cta">
            <a className="btn btn-primary" href="#access">
              Request Early Access
            </a>
            <a className="btn btn-ghost" href="#how">
              See how it works
            </a>
          </div>
          <ul className="hero-trust">
            {TRUST.map((t) => (
              <li key={t}>
                <svg
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                {t}
              </li>
            ))}
          </ul>
        </div>
        <div className="hero-visual">
          <HeroMockup />
        </div>
      </div>
    </section>
  );
}
