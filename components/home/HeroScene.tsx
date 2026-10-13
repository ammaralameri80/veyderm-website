"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

/**
 * Full-bleed hero scene: the Adobe-expanded clinic photo fills the section
 * (object-fit: cover), and an overlay layer is sized and positioned to the
 * *rendered* image so everything on it — the hologram light, particles,
 * threads and product cards — stays registered to the photo at any viewport.
 * All overlay coordinates are in source-image pixels (2280×1280).
 */
const IW = 2280, IH = 1280;
const POS_X = 0.72, POS_Y = 0.4; // must match object-position below

const PARTICLES = [
  [8, 0, 3.2], [22, 0.6, 2.8], [35, 1.4, 3.6], [48, 0.3, 3.0], [60, 1.9, 2.6], [72, 1.1, 3.4],
  [85, 2.4, 3.0], [15, 2.9, 3.8], [55, 3.3, 2.9], [92, 0.9, 3.3], [40, 2.2, 3.1], [67, 3.8, 2.7],
] as const;

// Hologram centre and thread end points (source-image px).
const HOLO = [1585, 525];
const THREADS = [
  [1500, 700],  // safety check
  [1200, 945],  // veyderm Pro
  [1890, 790],  // Sena
  [1960, 1050], // brand insights
];

const pct = (v: number, of: number) => `${(v / of) * 100}%`;

export function HeroScene() {
  const box = useRef<HTMLDivElement>(null);
  const layer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const b = box.current, l = layer.current;
    if (!b || !l) return;
    const fit = () => {
      const W = b.clientWidth, H = b.clientHeight;
      const s = Math.max(W / IW, H / IH);
      const rw = IW * s, rh = IH * s;
      l.style.width = `${rw}px`;
      l.style.height = `${rh}px`;
      l.style.left = `${(W - rw) * POS_X}px`;
      l.style.top = `${(H - rh) * POS_Y}px`;
      l.style.setProperty("--k", s.toFixed(4));
    };
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(b);
    return () => ro.disconnect();
  }, []);

  const [hx, hy] = HOLO;

  return (
    <div className="cine-scene" ref={box}>
      <div className="cine-kb">
        <Image
          src="/images/hero-wide.webp"
          alt="A dermatologist in a Dubai clinic reviewing a holographic AI analysis rising from her tablet, with the city skyline behind her"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: `${POS_X * 100}% ${POS_Y * 100}%` }}
        />
        <div className="cine-layer" ref={layer} aria-hidden="true">
          {/* Light registered to the hologram */}
          <span className="cine-glow" style={{ left: pct(hx - 250, IW), top: pct(hy - 250, IH), width: pct(500, IW), height: pct(500, IH) }} />
          <svg className="cine-rings" viewBox="0 0 200 200" style={{ left: pct(hx - 205, IW), top: pct(hy - 205, IH), width: pct(410, IW), height: pct(410, IH) }}>
            <ellipse className="r1" cx="100" cy="100" rx="96" ry="26" pathLength={1} />
            <ellipse className="r2" cx="100" cy="100" rx="70" ry="18" pathLength={1} />
          </svg>
          <span className="cine-scan" style={{ left: pct(1406, IW), top: pct(356, IH), width: pct(360, IW), height: pct(298, IH) }}><i /></span>
          <span className="cine-particles" style={{ left: pct(1480, IW), top: pct(482, IH), width: pct(225, IW), height: pct(229, IH) }}>
            {PARTICLES.map(([x, d, t], i) => (
              <i key={i} style={{ left: `${x}%`, animationDelay: `${d}s`, animationDuration: `${t}s` }} />
            ))}
          </span>

          {/* Threads from the hologram to each card */}
          <svg className="cine-threads" viewBox={`0 0 ${IW} ${IH}`} preserveAspectRatio="none">
            <defs>
              <linearGradient id="cine-t" x1="0" x2="1">
                <stop offset="0" stopColor="#22B3D6" stopOpacity="0" />
                <stop offset=".5" stopColor="#8B7CFF" />
                <stop offset="1" stopColor="#22B3D6" stopOpacity="0" />
              </linearGradient>
            </defs>
            {THREADS.map(([x, y], i) => {
              const d = `M${hx} ${hy} C ${(hx + x) / 2} ${hy + 40}, ${x} ${(hy + y) / 2}, ${x} ${y}`;
              return (
                <g key={i}>
                  <path className="cine-track" d={d} vectorEffect="non-scaling-stroke" />
                  <path className={`cine-pulse t${i + 1}`} d={d} pathLength={1} vectorEffect="non-scaling-stroke" />
                </g>
              );
            })}
          </svg>

          {/* Product cards anchored to places in the photo */}
          <div className="hp-card cine-card c-safe" style={{ left: "49.5%", top: "50%" }}>
            <p className="hp-safe-h"><span className="hp-shield" />Safety check passed</p>
            <ul className="cine-list">
              <li>No interactions</li>
              <li className="warn">Retinoids excluded: pregnancy planned</li>
            </ul>
          </div>
          <div className="hp-card cine-card c-pro" style={{ left: "44%", top: "74%" }}>
            <p className="hp-k">veyderm Pro</p>
            <div className="hp-row">
              <span className="hp-av">LH</span>
              <span className="hp-tx"><b>Lana H.</b><span>Draft plan ready</span></span>
              <span className="hp-btn">Review</span>
            </div>
          </div>
          <div className="hp-card cine-card c-sena" style={{ left: "83%", top: "52%" }}>
            <div className="hp-sena-h"><span className="hp-orb" /><span><b>Sena</b><span>AI skin agent</span></span></div>
            <p className="hp-msg">Your routine is approved. Start tonight with azelaic acid.</p>
          </div>
          <div className="hp-card cine-card c-brand" style={{ left: "84%", top: "82%" }}>
            <span className="hp-up">+18%</span>
            <span className="hp-brand-tx"><b>Brand insights</b><span>Prescriptions this month</span></span>
          </div>
        </div>
      </div>
      <span className="cine-fade" aria-hidden="true" />
    </div>
  );
}
