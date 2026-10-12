"use client";

import { useEffect, useRef } from "react";

/**
 * Hero composition: four product panels floating at different depths over a
 * soft light field, joined by light lines that carry data between them.
 *   back   — veyderm Pro console (the core product)
 *   mid    — Sena chat (patient) and brand insights (market)
 *   front  — the safety check that sits between AI and dermatologist
 * Authored at a fixed 640×560 stage and scaled to its container, so every
 * panel stays pixel-crisp. Pointer parallax on desktop; reduced motion gets
 * a still, fully-composed frame.
 */
const W = 640, H = 560;

export function HeroStack() {
  const box = useRef<HTMLDivElement>(null);
  const stage = useRef<HTMLDivElement>(null);

  // Scale the fixed stage to the container width.
  useEffect(() => {
    const b = box.current, s = stage.current;
    if (!b || !s) return;
    const fit = () => {
      const k = b.clientWidth / W;
      s.style.transform = `scale(${k})`;
      b.style.height = `${H * k}px`;
    };
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(b);
    return () => ro.disconnect();
  }, []);

  // Pointer parallax: each layer moves by its depth.
  useEffect(() => {
    const b = box.current;
    if (!b) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    let raf = 0;
    const onMove = (e: PointerEvent) => {
      const r = b.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        b.style.setProperty("--mx", x.toFixed(3));
        b.style.setProperty("--my", y.toFixed(3));
      });
    };
    const reset = () => { b.style.setProperty("--mx", "0"); b.style.setProperty("--my", "0"); };
    window.addEventListener("pointermove", onMove);
    b.addEventListener("pointerleave", reset);
    return () => { window.removeEventListener("pointermove", onMove); b.removeEventListener("pointerleave", reset); cancelAnimationFrame(raf); };
  }, []);

  return (
    <div className="hs" ref={box} role="img" aria-label="veyderm Pro console, Sena chat, a safety check and brand insights working together. Illustrative.">
      <div className="hs-stage" ref={stage} aria-hidden="true">
        {/* light field */}
        <span className="hs-glow g1" />
        <span className="hs-glow g2" />
        <span className="hs-glow g3" />

        {/* light lines between panels */}
        <svg className="hs-lines" viewBox={`0 0 ${W} ${H}`}>
          <defs>
            <linearGradient id="hs-l" x1="0" x2="1">
              <stop offset="0" stopColor="#6D5DF5" stopOpacity="0" />
              <stop offset=".5" stopColor="#6D5DF5" />
              <stop offset="1" stopColor="#22B3D6" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path className="hs-track" d="M420 190 C 462 190, 482 214, 500 214" />
          <path className="hs-pulse p1" d="M420 190 C 462 190, 482 214, 500 214" pathLength={1} />
          <path className="hs-track" d="M420 290 C 466 290, 490 330, 502 392" />
          <path className="hs-pulse p2" d="M420 290 C 466 290, 490 330, 502 392" pathLength={1} />
          <path className="hs-track" d="M292 452 C 330 454, 360 462, 388 462" />
          <path className="hs-pulse p3" d="M292 452 C 330 454, 360 462, 388 462" pathLength={1} />
        </svg>

        {/* BACK — veyderm Pro console */}
        <div className="hs-layer d1">
          <div className="hs-card hs-pro">
            <div className="hs-bar">
              <i /><i /><i />
              <span className="hs-pro-tag">veyderm Pro</span>
              <span className="hs-url">app.veyderm.com</span>
            </div>
            <div className="hs-pro-body">
              <div className="hs-patient">
                <span className="hs-av">LH</span>
                <span className="hs-pt"><b>Lana H.</b><span>Melasma · skin type IV</span></span>
                <span className="hs-chip ai">Draft ready</span>
              </div>
              <div className="hs-cols">
                <div>
                  <p className="hs-k">SkinPrint</p>
                  {[["Pigmentation", 78], ["Barrier", 54], ["Sensitivity", 32]].map(([l, v]) => (
                    <div className="hs-meter" key={l as string}>
                      <span>{l}</span>
                      <i><b style={{ width: `${v}%` }} /></i>
                      <em>{v}</em>
                    </div>
                  ))}
                </div>
                <div>
                  <p className="hs-k">Tailored plan</p>
                  {[["AM", "SPF 50", "Strong"], ["PM", "Azelaic acid 20%", "Strong"], ["PM", "Niacinamide 10%", "Moderate"]].map(([t, n, e]) => (
                    <div className="hs-step" key={n}>
                      <span className={`hs-t ${t.toLowerCase()}`}>{t}</span>
                      <span className="hs-n">{n}</span>
                      <span className={`hs-ev ${e === "Strong" ? "s" : "m"}`}>{e}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="hs-sign">
                <svg viewBox="0 0 160 40"><path pathLength={1} d="M6 28c10-18 18-22 22-10s-6 14 2 6 12-20 18-12-4 18 6 10 14-14 20-6 8 10 18 2 22-8 30-4" /></svg>
                <span className="hs-btn">Approve &amp; sign</span>
              </div>
            </div>
          </div>
        </div>

        {/* MID — Sena chat */}
        <div className="hs-layer d2">
          <div className="hs-card hs-sena">
            <div className="hs-sena-h">
              <span className="hs-orb" />
              <span><b>Sena</b><span>AI skin agent · online</span></span>
            </div>
            <p className="hs-msg me">Dark patches since summer. What should I use?</p>
            <p className="hs-msg ai">Your dermatologist approved a routine. Start tonight with azelaic acid.</p>
            <span className="hs-typing"><i /><i /><i /></span>
          </div>
        </div>

        {/* MID — brand insights */}
        <div className="hs-layer d2b">
          <div className="hs-card hs-brand">
            <div className="hs-brand-h">
              <span><b>Brand insights</b><span>Azelaic serum 20%</span></span>
              <span className="hs-up">+18%</span>
            </div>
            <svg className="hs-spark" viewBox="0 0 200 56">
              <defs>
                <linearGradient id="hs-a" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0" stopColor="#6D5DF5" stopOpacity=".28" />
                  <stop offset="1" stopColor="#22B3D6" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="hs-s" x1="0" x2="1">
                  <stop offset="0" stopColor="#6D5DF5" />
                  <stop offset="1" stopColor="#22B3D6" />
                </linearGradient>
              </defs>
              <path d="M0 46 L22 40 L44 42 L66 32 L88 34 L110 26 L132 28 L154 18 L176 14 L200 6 L200 56 L0 56Z" fill="url(#hs-a)" />
              <path className="hs-spark-l" pathLength={1} d="M0 46 L22 40 L44 42 L66 32 L88 34 L110 26 L132 28 L154 18 L176 14 L200 6" stroke="url(#hs-s)" />
              <circle cx="200" cy="6" r="3.5" className="hs-spark-d" />
            </svg>
            <div className="hs-brand-f"><span>Rank for melasma</span><b>#1 of 14</b></div>
          </div>
        </div>

        {/* FRONT — safety check */}
        <div className="hs-layer d3">
          <div className="hs-card hs-safe">
            <p className="hs-safe-h"><span className="hs-shield" />Safety check</p>
            <ul>
              <li className="c1">No interactions found</li>
              <li className="c2">Allergies cleared</li>
              <li className="c3 warn">Retinoids excluded: pregnancy planned</li>
            </ul>
          </div>
        </div>
      </div>
      <p className="hs-cap">Illustrative example</p>
    </div>
  );
}
