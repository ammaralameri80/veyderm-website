import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Portal } from "./Portal";
import { HOME } from "@/lib/site";

/** Centered hero, then the product in a browser frame. */
export function Hero() {
  const [h1a, h1em, h1b] = HOME.hero.h1;
  return (
    <header className="hero" id="top">
      <div className="wrap">
        <div className="hero-copy">
          <span className="kicker"><Icon name="sparkles" />{HOME.hero.kicker}</span>
          <h1 className="display">
            {h1a}
            <span className="accent">{h1em}</span>
            {h1b}
          </h1>
          <p className="lead">{HOME.hero.sub}</p>
          <ul className="hero-proof" aria-label="What veyderm promises">
            {HOME.proof.map((p) => (
              <li key={p}><Icon name="check" />{p}</li>
            ))}
          </ul>
          <div className="hero-cta">
            <Button href={HOME.hero.primary.href} role={HOME.hero.primary.role} cta="hero_primary" arrow>
              {HOME.hero.primary.label}
            </Button>
            <Button href={HOME.hero.secondary.href} variant="ghost" cta="hero_secondary">
              {HOME.hero.secondary.label}
            </Button>
          </div>
        </div>
        <div className="hero-shot">
          <Portal />
        </div>
      </div>
    </header>
  );
}
