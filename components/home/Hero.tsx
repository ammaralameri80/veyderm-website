import { Button, TextLink } from "@/components/ui/Button";
import { SkinPrint } from "./SkinPrint";
import { HOME } from "@/lib/site";

function Check() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  );
}

export function Hero() {
  const [h1a, h1em, h1b] = HOME.hero.h1;
  return (
    <header className="hero" id="top">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <span className="kicker">SkinPrint · a live reading</span>
          <h1 className="display">
            {h1a}
            <span className="accent">{h1em}</span>
            {h1b}
          </h1>
          <p className="lead">{HOME.hero.sub}</p>
          <div className="hero-cta">
            <Button href={HOME.hero.primary.href} role={HOME.hero.primary.role} cta="hero_primary" arrow>
              {HOME.hero.primary.label}
            </Button>
            <TextLink href={HOME.hero.secondary.href} cta="hero_secondary">
              {HOME.hero.secondary.label}
            </TextLink>
          </div>
        </div>

        <div className="print-stage" role="img" aria-label="A SkinPrint: an AI reading of a patient's skin, rendered as living contour lines and approved by a licensed dermatologist.">
          <SkinPrint />
          <div className="print-note pn-a" aria-hidden="true">
            <small>Hydration</small>
            <b>74<span>%</span></b>
          </div>
          <div className="print-note pn-b" aria-hidden="true">
            <span className="ok"><Check /></span>
            <span><b>Plan approved</b><small>Dr. Noor · licensed dermatologist</small></span>
          </div>
        </div>
      </div>
    </header>
  );
}
