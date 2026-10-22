"use client";

import Image from "next/image";
import { Button, TextLink } from "@/components/ui/Button";
import { HOME } from "@/lib/site";

function Spark() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" width="13" height="13">
      <path d="M12 2l1.8 6.2 6.2 1.8-6.2 1.8L12 22l-1.8-6.2L4 14l6.2-1.8z" />
    </svg>
  );
}

export function Hero() {
  const [h1a, h1em, h1b] = HOME.hero.h1;
  return (
    <header className="hero" id="top">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <span className="kicker">AI dermatology, built in the UAE</span>
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

        <div className="scan" role="img" aria-label="An AI skin analysis of a patient, with a recommended plan and skin-progress reading.">
          <Image src="/images/hero-ai.png" alt="" fill priority sizes="(max-width: 920px) 90vw, 46vw" />
          <span className="scan-ring" aria-hidden="true" />
          <span className="scan-beam" aria-hidden="true" />

          <span className="scan-pill" aria-hidden="true"><Spark />AI skin analysis · SkinPrint ready</span>

          <div className="hero-card hc-rec" aria-hidden="true">
            <small>Recommended by your dermatologist</small>
            <b>Azelaic serum 20%</b>
            <span className="ev">Strong evidence</span>
          </div>

          <div className="hero-card hc-prog" aria-hidden="true">
            <div className="hc-head">
              <span className="hc-av">LH</span>
              <span><b>Lana H.</b><small>Skin progress</small></span>
            </div>
            <p className="hc-big">+18%</p>
            <small>since last visit</small>
          </div>
        </div>
      </div>
    </header>
  );
}
