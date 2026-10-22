"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { Button, TextLink } from "@/components/ui/Button";
import { HOME } from "@/lib/site";

// Stylised facial-landmark mesh in a 100×125 space over the portrait.
const P: Record<string, [number, number]> = {
  fh: [52, 26], tl: [40, 36], tr: [64, 36], nb: [52, 46], nt: [52, 58],
  cl: [42, 50], cl2: [41, 60], cr: [63, 50], cr2: [64, 60],
  jl: [43, 70], jr: [63, 70], ch: [52, 80],
};
const EDGES: [string, string][] = [
  ["fh", "tl"], ["fh", "tr"], ["fh", "nb"], ["tl", "cl"], ["tr", "cr"], ["nb", "cl"], ["nb", "cr"],
  ["nb", "nt"], ["cl", "nt"], ["cr", "nt"], ["cl", "cl2"], ["cr", "cr2"], ["cl2", "jl"], ["cr2", "jr"],
  ["nt", "cl2"], ["nt", "cr2"], ["jl", "ch"], ["jr", "ch"], ["nt", "ch"],
];

const READOUTS = [{ from: 68, to: 74 }];

export function Hero() {
  const [h1a, h1em, h1b] = HOME.hero.h1;
  const reduce = useReducedMotion();

  const [t, setT] = useState(0);
  useEffect(() => {
    if (reduce) { setT(1); return; }
    let v = 0;
    const id = setInterval(() => { v = v >= 1 ? 0 : Math.min(1, v + 0.1); setT(v); }, 420);
    return () => clearInterval(id);
  }, [reduce]);
  const hydration = Math.round(READOUTS[0].from + (READOUTS[0].to - READOUTS[0].from) * t);

  return (
    <header className="hero" id="top">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <span className="kicker">Built in the UAE</span>
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

        <div className="scan" role="img" aria-label="An AI skin analysis scanning a patient's face in real time">
          <Image src="/images/hero-portrait-3.jpg" alt="" fill priority sizes="(max-width: 920px) 90vw, 46vw" />
          <span className="scan-ring" aria-hidden="true" />
          <svg className="scan-mesh" viewBox="0 0 100 125" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
            {EDGES.map(([a, b], i) => (
              <line key={i} className="scan-edge" x1={P[a][0]} y1={P[a][1]} x2={P[b][0]} y2={P[b][1]} pathLength={1} style={{ animationDelay: `${0.6 + i * 0.04}s` }} />
            ))}
            {Object.values(P).map(([x, y], i) => (
              <circle key={i} className="scan-node" cx={x} cy={y} r="0.9" style={{ animationDelay: `${(i % 6) * 0.3}s` }} />
            ))}
          </svg>
          <span className="scan-beam" aria-hidden="true" />
          <span className="scan-tag" aria-hidden="true"><span className="live" />Analyzing skin</span>

          <div className="scan-chip sc-1" aria-hidden="true">
            <span><small>Hydration</small><span className="mini">{hydration}%</span></span>
          </div>
          <div className="scan-chip sc-2" aria-hidden="true">
            <span><small>Pigmentation</small><b>Even tone</b></span>
          </div>
          <div className="scan-chip sc-3" aria-hidden="true">
            <span><small>SkinPrint</small><b>Ready · reviewed by Dr. Noor</b></span>
          </div>
        </div>
      </div>
    </header>
  );
}
