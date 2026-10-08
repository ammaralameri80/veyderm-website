"use client";

import { useEffect, useRef } from "react";

/**
 * The veyderm AI core: a sphere of ~1,000 light points rotating in 3D with
 * threads between near neighbours, a scan band sweeping over it, and three
 * tilted orbits carrying the products the AI powers. Canvas 2D, no library.
 * Reduced motion renders one still frame.
 */

const N = 1000;
const ORBITS = [
  { label: "veyderm Pro", tilt: 0.42, yaw: 0.2, r: 1.42, speed: 0.22, phase: 0.0, color: "#4A3FC4" },
  { label: "Sena", tilt: -0.55, yaw: -0.6, r: 1.56, speed: -0.17, phase: 2.1, color: "#0E7490" },
  { label: "Brands", tilt: 0.95, yaw: 1.3, r: 1.72, speed: 0.13, phase: 4.2, color: "#13795B" },
];

type V3 = [number, number, number];

function sphere(n: number): V3[] {
  const pts: V3[] = [];
  const g = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < n; i++) {
    const y = 1 - (i / (n - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const a = g * i;
    pts.push([Math.cos(a) * r, y, Math.sin(a) * r]);
  }
  return pts;
}

function links(pts: V3[], maxD: number): [number, number][] {
  const out: [number, number][] = [];
  const m2 = maxD * maxD;
  for (let i = 0; i < pts.length; i++) {
    for (let j = i + 1; j < pts.length; j++) {
      const dx = pts[i][0] - pts[j][0], dy = pts[i][1] - pts[j][1], dz = pts[i][2] - pts[j][2];
      if (dx * dx + dy * dy + dz * dz < m2) out.push([i, j]);
    }
  }
  return out;
}

export function AiCore() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const pts = sphere(N);
    const edges = links(pts, 0.165);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let W = 0, H = 0, dpr = 1, R = 0;
    const fit = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = rect.width; H = rect.height;
      canvas.width = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      R = Math.min(W, H) * 0.23;
    };
    fit();

    const proj = new Float32Array(N * 3); // x, y, depth(0..1)
    const F = 5.5; // camera distance in sphere radii

    const draw = (t: number) => {
      const cx = W / 2, cy = H / 2;
      const ry = t * 0.00022;            // slow spin
      const rx = 0.35 + Math.sin(t * 0.00009) * 0.12; // gentle nod
      const cy1 = Math.cos(ry), sy1 = Math.sin(ry), cx1 = Math.cos(rx), sx1 = Math.sin(rx);
      const band = ((t * 0.00035) % 2) - 1; // scan band y position, -1..1

      ctx.clearRect(0, 0, W, H);

      // halo
      const halo = ctx.createRadialGradient(cx, cy, R * 0.2, cx, cy, R * 2.3);
      halo.addColorStop(0, "rgba(109,93,245,.22)");
      halo.addColorStop(0.5, "rgba(79,141,247,.08)");
      halo.addColorStop(1, "rgba(34,179,214,0)");
      ctx.fillStyle = halo;
      ctx.fillRect(0, 0, W, H);

      // project points
      for (let i = 0; i < N; i++) {
        const [x0, y0, z0] = pts[i];
        // rotate Y then X
        const x1 = x0 * cy1 + z0 * sy1, z1 = -x0 * sy1 + z0 * cy1;
        const y2 = y0 * cx1 - z1 * sx1, z2 = y0 * sx1 + z1 * cx1;
        const s = F / (F - z2);
        proj[i * 3] = cx + x1 * R * s;
        proj[i * 3 + 1] = cy + y2 * R * s;
        proj[i * 3 + 2] = (z2 + 1) / 2; // 0 back .. 1 front
      }

      // threads
      ctx.lineWidth = 0.7;
      for (let e = 0; e < edges.length; e++) {
        const [i, j] = edges[e];
        const d = (proj[i * 3 + 2] + proj[j * 3 + 2]) / 2;
        if (d < 0.35) continue;
        const a = (d - 0.35) * 0.55;
        ctx.strokeStyle = `rgba(99,96,232,${a.toFixed(3)})`;
        ctx.beginPath();
        ctx.moveTo(proj[i * 3], proj[i * 3 + 1]);
        ctx.lineTo(proj[j * 3], proj[j * 3 + 1]);
        ctx.stroke();
      }

      // points (+ scan band highlight)
      for (let i = 0; i < N; i++) {
        const d = proj[i * 3 + 2];
        if (d < 0.2) continue;
        const near = 1 - Math.min(1, Math.abs(pts[i][1] - band) / 0.14);
        const size = 0.7 + d * 1.6 + near * 1.4;
        const r = 109 - near * 60, g = 93 + near * 86, b = 245 - near * 31; // violet → cyan on the band
        ctx.fillStyle = `rgba(${r | 0},${g | 0},${b | 0},${(0.25 + d * 0.65).toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(proj[i * 3], proj[i * 3 + 1], size, 0, Math.PI * 2);
        ctx.fill();
      }

      // orbits
      ctx.font = "600 12px system-ui, -apple-system, 'Segoe UI', sans-serif";
      ctx.textBaseline = "middle";
      for (const o of ORBITS) {
        const ct = Math.cos(o.tilt), st = Math.sin(o.tilt), cyw = Math.cos(o.yaw), syw = Math.sin(o.yaw);
        const ring: [number, number, number][] = [];
        for (let k = 0; k <= 90; k++) {
          const a = (k / 90) * Math.PI * 2;
          let x = Math.cos(a) * o.r, y = 0, z = Math.sin(a) * o.r;
          let y1 = y * ct - z * st, z1 = y * st + z * ct; // tilt
          const x2 = x * cyw + z1 * syw, z2 = -x * syw + z1 * cyw; // yaw
          const s = F / (F - z2);
          ring.push([cx + x2 * R * s, cy + y1 * R * s, z2]);
          x = y = z = 0; y1 = z1 = 0;
        }
        ctx.lineWidth = 1;
        ctx.beginPath();
        ring.forEach(([x, y, z], k) => {
          ctx.strokeStyle = `rgba(99,96,232,${(0.08 + ((z + o.r) / (2 * o.r)) * 0.22).toFixed(3)})`;
          if (k === 0) ctx.moveTo(x, y); else { ctx.lineTo(x, y); ctx.stroke(); ctx.beginPath(); ctx.moveTo(x, y); }
        });

        // travelling node
        const a = reduce ? o.phase : o.phase + t * 0.001 * o.speed;
        const x = Math.cos(a) * o.r, z = Math.sin(a) * o.r;
        const y1 = -z * st, z1 = z * ct;
        const x2 = x * cyw + z1 * syw, z2 = -x * syw + z1 * cyw;
        const s = F / (F - z2);
        const nx = cx + x2 * R * s, ny = cy + y1 * R * s;
        const front = z2 > 0;
        ctx.fillStyle = front ? "rgba(255,255,255,.9)" : "rgba(255,255,255,.6)";
        ctx.beginPath(); ctx.arc(nx, ny, 9 * s, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = o.color;
        ctx.globalAlpha = front ? 1 : 0.45;
        ctx.beginPath(); ctx.arc(nx, ny, 5 * s, 0, Math.PI * 2); ctx.fill();
        // label pill (on small canvases, only while the node is in front)
        if (!front && W < 480) { ctx.globalAlpha = 1; continue; }
        const label = o.label;
        const tw = ctx.measureText(label).width;
        const pw0 = tw + 18;
        const right = nx > cx; // keep labels inside the frame
        const px = right ? nx - 14 * s - pw0 : nx + 14 * s, py = ny;
        ctx.fillStyle = "rgba(255,255,255,.92)";
        ctx.strokeStyle = "rgba(227,230,239,1)";
        const ph = 22, pw = pw0;
        ctx.beginPath();
        ctx.roundRect(px, py - ph / 2, pw, ph, 11);
        ctx.fill(); ctx.stroke();
        ctx.fillStyle = o.color;
        ctx.fillText(label, px + 9, py + 0.5);
        ctx.globalAlpha = 1;
      }
    };

    let raf = 0, running = true;
    const loop = (t: number) => { if (!running) return; draw(t); raf = requestAnimationFrame(loop); };
    if (reduce) { draw(4000); }
    else {
      const io = new IntersectionObserver((es) => {
        es.forEach((e) => {
          if (e.isIntersecting && !running) { running = true; raf = requestAnimationFrame(loop); }
          else if (!e.isIntersecting && running) { running = false; cancelAnimationFrame(raf); }
        });
      }, { threshold: 0.05 });
      io.observe(canvas);
      raf = requestAnimationFrame(loop);
      const onResize = () => fit();
      window.addEventListener("resize", onResize);
      return () => { running = false; cancelAnimationFrame(raf); io.disconnect(); window.removeEventListener("resize", onResize); };
    }
  }, []);

  return (
    <div className="core">
      <canvas ref={ref} className="core-canvas" aria-label="veyderm AI: one intelligence powering veyderm Pro, Sena and brand insights" role="img" />
    </div>
  );
}
