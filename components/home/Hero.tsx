"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
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

const READOUTS = [
  { label: "Hydration", from: 68, to: 74, unit: "%" },
  { label: "Pigmentation", from: 88, to: 94, unit: "" },
  { label: "Texture", from: 79, to: 86, unit: "" },
];

/** Drifting particle constellation behind the hero. */
function useParticles(ref: React.RefObject<HTMLCanvasElement | null>, reduce: boolean) {
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let raf = 0;
    let w = 0, h = 0, dpr = Math.min(window.devicePixelRatio || 1, 2);
    type Pt = { x: number; y: number; vx: number; vy: number };
    let pts: Pt[] = [];

    const resize = () => {
      w = canvas.offsetWidth; h = canvas.offsetHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(54, Math.round((w * h) / 16000));
      pts = Array.from({ length: count }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25, vy: (Math.random() - 0.5) * 0.25,
      }));
    };

    const frame = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of pts) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
      }
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
          const d = Math.hypot(dx, dy);
          if (d < 130) {
            ctx.strokeStyle = `rgba(157,140,245,${(1 - d / 130) * 0.16})`;
            ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y); ctx.stroke();
          }
        }
      }
      for (const p of pts) {
        ctx.fillStyle = "rgba(183,172,228,0.7)";
        ctx.beginPath(); ctx.arc(p.x, p.y, 1.3, 0, Math.PI * 2); ctx.fill();
      }
      raf = requestAnimationFrame(frame);
    };

    resize();
    if (reduce) { frame(); cancelAnimationFrame(raf); } // one static frame
    else raf = requestAnimationFrame(frame);
    window.addEventListener("resize", resize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, [ref, reduce]);
}

export function Hero() {
  const [h1a, h1em, h1b] = HOME.hero.h1;
  const reduce = useReducedMotion();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useParticles(canvasRef, !!reduce);

  // live data readouts tick upward and hold
  const [t, setT] = useState(0);
  useEffect(() => {
    if (reduce) { setT(1); return; }
    let v = 0;
    const id = setInterval(() => { v = v >= 1 ? 0 : Math.min(1, v + 0.1); setT(v); }, 420);
    return () => clearInterval(id);
  }, [reduce]);
  const val = (r: (typeof READOUTS)[number]) => Math.round(r.from + (r.to - r.from) * t) + r.unit;

  return (
    <header className="hero" id="top">
      <canvas className="hero-canvas" ref={canvasRef} aria-hidden="true" />
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
          <Image src="/images/hero-portrait.jpg" alt="" fill priority sizes="(max-width: 920px) 90vw, 46vw" />
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
            <span><small>{READOUTS[0].label}</small><span className="mini">{val(READOUTS[0])}</span></span>
          </div>
          <div className="scan-chip sc-2" aria-hidden="true">
            <span><small>{READOUTS[1].label}</small><b>Even tone</b></span>
          </div>
          <div className="scan-chip sc-3" aria-hidden="true">
            <span><small>SkinPrint</small><b>Ready · reviewed by Dr. Noor</b></span>
          </div>
        </div>
      </div>
    </header>
  );
}
