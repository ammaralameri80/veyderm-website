import Image from "next/image";
import { Button, TextLink } from "@/components/ui/Button";
import { AiReading } from "./AiReading";
import { HOME } from "@/lib/site";

/** Centered headline, then the product at work: a real consultation with the
 *  AI's reading streaming over it. Pattern: Product Demo + Features. */
export function Hero() {
  const [h1a, h1em, h1b] = HOME.hero.h1;
  return (
    <header className="hero" id="top">
      <div className="wrap">
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

        <div className="stage" role="img" aria-label="A dermatologist examines a patient's cheek in a bright clinic while veyderm's AI streams its reading: analysis, a drafted plan, a passed safety check, and the dermatologist's approval.">
          <Image src="/images/clinic-consult.webp" alt="" fill priority sizes="(max-width: 1248px) 100vw, 1200px" className="stage-img" />
          <div className="stage-shade" />
          <span className="illustrative">Illustrative</span>
          <AiReading />
          <ul className="stage-chips" aria-hidden="true">
            {HOME.proof.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
