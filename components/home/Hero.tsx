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

const PORTRAIT = "/images/hero-radiance.webp";
const SIZES = "(max-width: 920px) 100vw, 44vw";

/** Hero: a warm full-bleed stage the nav floats over — the message on the
 *  left, a luminous portrait on the right. An AI scan window sweeps the face
 *  and leaves the skin brighter and more even behind it: the analysis and
 *  the result in one moment. */
export function Hero() {
  const { hero } = HOME;
  return (
    <header className="hero" id="top">
      <div className="hero-visual" role="img" aria-label="A portrait with luminous, even skin. veyderm's AI scans the face, measures tone and hydration, and previews a brighter, more even result approved by a dermatologist.">
        <div className="hero-bg" aria-hidden="true">
          <Image src={PORTRAIT} alt="" fill priority sizes={SIZES} className="hero-img" />
          {/* the same frame, brightened and evened, revealed by the scan */}
          <Image src={PORTRAIT} alt="" fill priority sizes={SIZES} className="hero-img hero-img-after" />
        </div>
        <div className="scan" aria-hidden="true">
          <span className="scan-frame" />
          <span className="scan-line" />
        </div>
        <ul className="probes" aria-hidden="true">
          <li className="probe probe-tone"><i /><span>Even tone<b>92%</b></span></li>
          <li className="probe probe-hydra"><i /><span>Hydration<b>78%</b></span></li>
        </ul>

        <div className="hcard hcard-progress" aria-hidden="true">
          <span className="hc-ic"><Icon name="sparkles" /></span>
          <span className="hc-prog">
            <small>Radiance in 8 weeks</small>
            <b>+24%<em>Approved by Dr. Noor</em></b>
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
