import Image from "next/image";
import { Button, TextLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { HOME } from "@/lib/site";

function Check() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  );
}

/** Hero: a calm full-bleed stage the nav floats over — the message on the
 *  left, a real portrait on the right melting into the same soft grey, with
 *  the AI quietly reading the skin. */
export function Hero() {
  const { hero } = HOME;
  return (
    <header className="hero" id="top">
      <div className="hero-visual" role="img" aria-label="A woman with clear, healthy skin in soft daylight while veyderm's AI reads her skin and tracks her progress.">
        <div className="hero-bg" aria-hidden="true">
          <Image src="/images/hero-glow.webp" alt="" fill priority sizes="(max-width: 920px) 100vw, 60vw" className="hero-img" />
        </div>
        <div className="scan" aria-hidden="true">
          <span className="scan-line" />
        </div>

        <div className="hcard hcard-analysis" aria-hidden="true">
          <span className="hc-ic"><Icon name="sparkles" /></span>
          <span><small>AI skin analysis</small><b>SkinPrint ready</b></span>
        </div>
        <div className="hcard hcard-progress" aria-hidden="true">
          <span className="pt-av">LH</span>
          <span className="hc-prog">
            <small>Approved by Dr. Noor</small>
            <b>+18%<em>skin clarity</em></b>
          </span>
        </div>
      </div>

      <div className="wrap hero-inner">
        <div className="hero-copy">
          <span className="kicker"><Icon name="sparkles" />{hero.kicker}</span>
          <h1 className="display">{hero.h1}</h1>
          <p className="lead">{hero.sub}</p>
          <div className="hero-cta">
            <Button href={hero.primary.href} role={hero.primary.role} cta="hero_primary" arrow>
              {hero.primary.label}
            </Button>
            <TextLink href={hero.secondary.href} cta="hero_secondary">
              {hero.secondary.label}
            </TextLink>
          </div>
          <ul className="hero-proof" aria-label="What veyderm promises">
            {HOME.proof.map((p) => (
              <li key={p}><Check />{p}</li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
