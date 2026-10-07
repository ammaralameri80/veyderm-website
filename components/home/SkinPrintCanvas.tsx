"use client";

import { useEffect, useRef, useState } from "react";

/**
 * "SkinPrint forming" — the hero's signature AI visual.
 * Particles drift in and organise into a fingerprint-like whorl, then thin data
 * lines connect it to glass chips that fill in one by one. Canvas 2D, no library.
 * Reduced-motion and small screens get a static SVG of the final state.
 */

type Pt = { x: number; y: number; th: number };

// Deterministic fingerprint geometry in a 100x100 space (shared by canvas + SVG).
function buildRings(): Pt[][] {
  const CX = 50, CY = 49, count = 7;
  const rings: Pt[][] = [];
  for (let i = 0; i < count; i++) {
    const baseR = 7 + i * 5.4;
    const K = 36 + i * 8;
    const shift = (count - i) * 0.5;
    const pts: Pt[] = [];
    for (let k = 0; k < K; k++) {
      const th = (k / K) * Math.PI * 2;
      const wob =
        1.5 * Math.sin(3 * th + i * 0.7) +
        0.9 * Math.sin(5 * th - i * 0.5) +
        0.6 * Math.sin(2 * th + i);
      const r = baseR + wob;
      pts.push({
        x: CX + shift * 0.3 + r * Math.cos(th),
        y: CY - shift * 0.2 + r * Math.sin(th) * 1.12,
        th,
      });
    }
    rings.push(pts);
  }
  return rings;
}

const RINGS = buildRings();
const ringPath = (pts: Pt[]) =>
  pts.map((p, i) => `${i ? "L" : "M"}${p.x.toFixed(2)} ${p.y.toFixed(2)}`).join(" ") + "Z";

// Chip anchors in 100-space (where the connector line ends) + CSS placement.
type Slot = { anchor: [number, number]; style: React.CSSProperties; pulse?: boolean };
const CHIP_SLOTS: Slot[] = [
  { anchor: [20, 15], style: { top: "7%", insetInlineStart: "0%" } },
  { anchor: [82, 22], style: { top: "15%", insetInlineEnd: "0%" } },
  { anchor: [87, 58], style: { top: "49%", insetInlineEnd: "-2%" } },
  { anchor: [40, 90], style: { bottom: "1%", insetInlineStart: "7%" }, pulse: true },
];

export function SkinPrintCanvas({ chips, label }: { chips: string[]; label: string }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mode, setMode] = useState<"static" | "canvas">("static");

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const small = window.matchMedia("(max-width: 760px)").matches;
    setMode(reduce || small ? "static" : "canvas");
  }, []);

  // Parallax (desktop canvas only).
  useEffect(() => {
    if (mode !== "canvas") return;
    const el = wrapRef.current;
    if (!el) return;
    let raf = 0;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.setProperty("--px", px.toFixed(3));
        el.style.setProperty("--py", py.toFixed(3));
      });
    };
    const onLeave = () => {
      el.style.setProperty("--px", "0");
      el.style.setProperty("--py", "0");
    };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, [mode]);

  // Canvas animation.
  useEffect(() => {
    if (mode !== "canvas") return;
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let size = 0, dpr = 1, scale = 1;
    const fit = () => {
      const rect = wrap.getBoundingClientRect();
      size = Math.min(rect.width, rect.height);
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(size * dpr);
      canvas.height = Math.round(size * dpr);
      canvas.style.width = `${size}px`;
      canvas.style.height = `${size}px`;
      scale = (size * dpr) / 100;
    };
    fit();

    // Particles grouped per ring; each starts off-centre and eases home.
    type P = { sx: number; sy: number; tx: number; ty: number; th: number; delay: number };
    const groups: P[][] = RINGS.map((ring) =>
      ring.map((p) => {
        const a = Math.random() * Math.PI * 2;
        const d = 34 + Math.random() * 46;
        return {
          sx: 50 + Math.cos(a) * d,
          sy: 50 + Math.sin(a) * d,
          tx: p.x,
          ty: p.y,
          th: p.th,
          delay: Math.random() * 520,
        };
      })
    );
    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
    const FORM = 1600;

    let start = performance.now();
    let raf = 0;
    let running = true;

    const draw = (now: number) => {
      if (!running) return;
      const t = now - start;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      // breathing + parallax, about the centre
      const breathe = 1 + 0.01 * Math.sin(t / 1400);
      const px = parseFloat(wrap.style.getPropertyValue("--px") || "0");
      const py = parseFloat(wrap.style.getPropertyValue("--py") || "0");
      const cx = canvas.width / 2 + px * 10 * dpr;
      const cy = canvas.height / 2 + py * 10 * dpr;
      ctx.translate(cx, cy);
      ctx.scale(breathe, breathe);
      ctx.translate(-canvas.width / 2, -canvas.height / 2);

      const sweep = (t / 2600) * Math.PI * 2;
      const ringAlpha = Math.max(0, Math.min(1, (t - 760) / 820));

      // ring strokes (through current particle positions) — inner rings read
      // heavier than outer ones, so the whorl has depth rather than a flat even weight.
      groups.forEach((g, gi) => {
        ctx.beginPath();
        g.forEach((p, i) => {
          const tt = Math.max(0, Math.min(1, (t - p.delay) / FORM));
          const e = easeOut(tt);
          const x = (p.sx + (p.tx - p.sx) * e) * scale;
          const y = (p.sy + (p.ty - p.sy) * e) * scale;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        });
        ctx.closePath();
        ctx.lineWidth = Math.max(0.6, 1.12 - gi * 0.07) * dpr;
        ctx.strokeStyle = `rgba(139,129,232,${(0.46 - gi * 0.03) * ringAlpha})`;
        ctx.stroke();
      });

      // particles with a rotating "scan" glint
      groups.forEach((g) => {
        g.forEach((p) => {
          const tt = Math.max(0, Math.min(1, (t - p.delay) / FORM));
          const e = easeOut(tt);
          const x = (p.sx + (p.tx - p.sx) * e) * scale;
          const y = (p.sy + (p.ty - p.sy) * e) * scale;
          const glint = Math.max(0, Math.cos(p.th - sweep));
          ctx.beginPath();
          ctx.arc(x, y, (0.8 + 0.8 * glint) * dpr, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${108 - glint * 20},${101 - glint * 10},${194 + glint * 40},${(0.35 + 0.6 * glint) * e})`;
          ctx.fill();
        });
      });

      // connector lines to chips, drawn one by one
      CHIP_SLOTS.forEach((slot, i) => {
        const prog = Math.max(0, Math.min(1, (t - (1800 + i * 500)) / 520));
        if (prog <= 0) return;
        const [ax, ay] = slot.anchor;
        const dx = ax - 50, dy = ay - 49;
        const len = Math.hypot(dx, dy) || 1;
        const sx = (50 + (dx / len) * 40) * scale;
        const sy = (49 + (dy / len) * 40) * scale;
        const ex = (50 + dx * prog) * scale;
        const ey = (49 + dy * prog) * scale;
        ctx.beginPath();
        ctx.moveTo(sx, sy);
        ctx.lineTo(ex, ey);
        ctx.lineWidth = 1 * dpr;
        ctx.strokeStyle = "rgba(139,129,232,0.5)";
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(ex, ey, 2 * dpr, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(108,101,194,0.9)";
        ctx.fill();
      });

      ctx.restore();
      raf = requestAnimationFrame(draw);
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting && !running) {
            running = true;
            start = performance.now();
            raf = requestAnimationFrame(draw);
          } else if (!en.isIntersecting && running) {
            running = false;
            cancelAnimationFrame(raf);
          }
        });
      },
      { threshold: 0.05 }
    );
    io.observe(wrap);

    const onResize = () => fit();
    window.addEventListener("resize", onResize);
    raf = requestAnimationFrame(draw);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("resize", onResize);
    };
  }, [mode]);

  return (
    <div ref={wrapRef} className={`skp skp-${mode}`}>
      <div className="skp-stage">
        {mode === "canvas" ? (
          <canvas ref={canvasRef} className="skp-canvas" aria-hidden="true" />
        ) : (
          <svg className="skp-svg" viewBox="0 0 100 100" aria-hidden="true">
            {CHIP_SLOTS.map((s, i) => {
              const [ax, ay] = s.anchor;
              const dx = ax - 50, dy = ay - 49;
              const len = Math.hypot(dx, dy) || 1;
              return (
                <line
                  key={i}
                  x1={50 + (dx / len) * 40}
                  y1={49 + (dy / len) * 40}
                  x2={ax}
                  y2={ay}
                  className="skp-conn"
                />
              );
            })}
            {RINGS.map((r, i) => (
              <path
                key={i}
                d={ringPath(r)}
                className="skp-ring"
                style={{ opacity: Math.max(0.3, 0.64 - i * 0.045), strokeWidth: 0.6 - i * 0.03 }}
              />
            ))}
          </svg>
        )}

        <span className="skp-label mono">{label}</span>
        {chips.map((c, i) => (
          <span
            key={c}
            className={`skp-chip d${i + 1}${CHIP_SLOTS[i]?.pulse ? " final" : ""}`}
            style={CHIP_SLOTS[i]?.style as React.CSSProperties}
          >
            {CHIP_SLOTS[i]?.pulse && <span className="tick">✓</span>}
            {c}
          </span>
        ))}
      </div>
    </div>
  );
}
