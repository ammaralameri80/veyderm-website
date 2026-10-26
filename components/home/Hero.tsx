import Image from "next/image";
import { Button, TextLink } from "@/components/ui/Button";
import { HOME } from "@/lib/site";

function Check() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  );
}

/** Simple two-column hero: copy on the left, the scanned portrait on the
 *  right, three quiet reading chips and one approval card. */
export function Hero() {
  const [h1a, h1em, h1b] = HOME.hero.h1;
  return (
    <header className="hero" id="top">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <span className="kicker">{HOME.hero.kicker}</span>
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

        <div className="scan" role="img" aria-label="Portrait of a woman lit in violet light while veyderm's AI reads her skin: pigmentation, texture and hydration, with the plan approved by a licensed dermatologist.">
          <Image src="/images/hero-scan.webp" alt="" fill priority sizes="(max-width: 920px) 92vw, 48vw" className="scan-img" />
          <span className="scan-line" aria-hidden="true" />
          <ul className="scan-chips" aria-hidden="true">
            <li style={{ left: "63%", top: "37%" }}><i />Pigmentation</li>
            <li style={{ left: "38%", top: "53%" }}><i />Texture</li>
            <li style={{ left: "58%", top: "64%" }}><i />Hydration 72%</li>
          </ul>
          <div className="scan-card scan-card-top" aria-hidden="true">
            <small>AI skin analysis</small>
            <b>SkinPrint ready</b>
          </div>
          <div className="scan-card scan-card-bottom" aria-hidden="true">
            <span className="ok"><Check /></span>
            <span><b>Plan approved</b><small>Dr. Noor · licensed dermatologist</small></span>
          </div>
        </div>
      </div>
    </header>
  );
}
