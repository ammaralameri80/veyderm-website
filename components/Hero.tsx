import { OrbitDiagram } from "./OrbitDiagram";

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
            Evidence-based plans and verified products, built in minutes — with the
            doctor always in control.
          </p>
          <div className="hero-cta">
            <a className="btn btn-primary" href="#access">
              Request Early Access
            </a>
            <a className="btn btn-ghost" href="#how">
              See how it works
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <OrbitDiagram />
        </div>
      </div>
    </section>
  );
}
