import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { HOME } from "@/lib/site";

const PORTRAIT = "/images/hero-cutout3.webp";
const SIZES = "(max-width: 920px) 100vw, 46vw";
const PROOF_ICONS: IconName[] = ["shield", "package"];

/** Hero: a cool lavender stage the nav floats over — the message on the left,
 *  a cut-out portrait on the right standing on the same stage. An AI scan
 *  sweeps the face, the readouts report what it mapped, and the case is handed
 *  on for dermatologist review — status only, no invented results. */
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
          <li className="probe probe-tone">
            <span className="aitag"><span className="aitag-pt" /><b>Pigmentation</b>mapped</span>
          </li>
          <li className="probe probe-hydra">
            <span className="aitag"><span className="aitag-pt" /><b>Skin texture</b>assessed</span>
          </li>
        </ul>

        <div className="hcard hcard-progress" aria-hidden="true">
          <span className="hc-ic"><Icon name="scan-face" /></span>
          <span className="hc-case">
            <small>AI case analysis</small>
            <b>Ready for dermatologist review</b>
          </span>
        </div>
      </div>

      <div className="wrap hero-inner">
        <div className="hero-copy">
          <span className="kicker"><span className="kdot" aria-hidden="true" />{hero.kicker}</span>
          <h1 className="display">{hero.h1}</h1>
          <p className="lead">{hero.sub}</p>
          <div className="hero-cta">
            <Button href={hero.primary.href} role={hero.primary.role} cta="hero_primary" arrow>
              {hero.primary.label}
            </Button>
            <Button href={hero.secondary.href} variant="soft" spark cta="hero_secondary">
              {hero.secondary.label}
            </Button>
          </div>
          <ul className="hero-proof" aria-label="What veyderm promises">
            {HOME.proof.map((p, i) => (
              <li key={p}><span className="pf-ic"><Icon name={PROOF_ICONS[i]} aria-hidden="true" /></span>{p}</li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
