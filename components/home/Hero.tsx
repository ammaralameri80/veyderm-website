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

const PORTRAIT = "/images/hero-cutout2.webp";
const SIZES = "(max-width: 920px) 100vw, 46vw";

/** Hero: a cool lavender stage the nav floats over — the message on the
 *  left, a studio portrait on the right whose white backdrop melts into the
 *  stage (multiply). An AI scan window sweeps the face, maps what it reads,
 *  and hands the case on for dermatologist review — no invented results. */
export function Hero() {
  const { hero } = HOME;
  return (
    <header className="hero" id="top">
      <div className="hero-visual" role="img" aria-label="A portrait while veyderm's AI scans the face, maps pigmentation and texture, and prepares the case for dermatologist review.">
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
          <li className="probe probe-tone"><i /><span><em className="pdot" />Pigmentation<b>mapped</b></span></li>
          <li className="probe probe-hydra"><i /><span><em className="pdot" />Texture<b>analyzed</b></span></li>
        </ul>

        <div className="hcard hcard-progress" aria-hidden="true">
          <span className="hc-ic"><Icon name="sparkles" /></span>
          <span className="hc-case">
            <small>AI case assessment</small>
            <b>Ready for dermatologist review</b>
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
