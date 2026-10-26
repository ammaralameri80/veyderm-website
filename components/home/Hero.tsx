import Image from "next/image";
import { Button, TextLink } from "@/components/ui/Button";
import { AiReading } from "./AiReading";
import { HOME } from "@/lib/site";

/** Type is the hero. One statement, one line of context, one photograph. */
export function Hero() {
  const [h1a, h1em, h1b] = HOME.hero.h1;
  return (
    <header className="hero" id="top">
      <div className="wrap">
        <div className="hero-top">
          <span className="kicker">{HOME.hero.kicker}</span>
          <h1 className="display">
            {h1a}
            <span className="accent">{h1em}</span>
            {h1b}
          </h1>
        </div>
        <div className="hero-row">
          <p className="lead">{HOME.hero.sub}</p>
          <div className="hero-cta">
            <TextLink href={HOME.hero.secondary.href} cta="hero_secondary">
              {HOME.hero.secondary.label}
            </TextLink>
            <Button href={HOME.hero.primary.href} role={HOME.hero.primary.role} cta="hero_primary" arrow>
              {HOME.hero.primary.label}
            </Button>
          </div>
        </div>

        <div className="stage" role="img" aria-label="A dermatologist examines a patient's cheek in a bright Dubai clinic.">
          <Image src="/images/clinic-consult.webp" alt="" fill priority sizes="(max-width: 1400px) 100vw, 1360px" className="stage-img" />
          <span className="illustrative">Illustrative</span>
        </div>
        <div className="stage-foot">
          <AiReading />
          <span className="stage-cap">A consultation, prepared by veyderm AI</span>
        </div>
      </div>
    </header>
  );
}
