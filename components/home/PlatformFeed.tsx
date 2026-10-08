"use client";

import { useEffect, useRef, useState } from "react";
import { homeContent } from "@/lib/content";

const F = homeContent.hero.feed;
const VISIBLE = 5;
const EVERY = 2200;

type Row = { id: number; k: string; t: string; d: string };

/**
 * The platform working, as a live activity stream: intake → AI draft →
 * safety check → dermatologist signs → Sena guides the patient → brand
 * insight updates. Events loop continuously; under reduced motion the
 * stream is a fixed list of the first five.
 */
export function PlatformFeed() {
  const [rows, setRows] = useState<Row[]>(() =>
    F.events.slice(0, VISIBLE).map((e, i) => ({ id: i, ...e }))
  );
  const [live, setLive] = useState(false);
  const next = useRef(VISIBLE);
  const wrap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = wrap.current;
    if (!el) return;
    let timer = 0;
    const start = () => {
      setLive(true);
      timer = window.setInterval(() => {
        const i = next.current++;
        const e = F.events[i % F.events.length];
        setRows((r) => [...r.slice(-(VISIBLE - 1)), { id: i, ...e }]);
      }, EVERY);
    };
    const stop = () => {
      setLive(false);
      window.clearInterval(timer);
      timer = 0;
    };
    const io = new IntersectionObserver(
      (entries) => entries.forEach((en) => (en.isIntersecting ? !timer && start() : stop())),
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      window.clearInterval(timer);
    };
  }, []);

  return (
    <div className="pf-wrap" ref={wrap}>
      <span className="pf-glow" aria-hidden="true" />
      <div className="pf" aria-label={`${F.title}, ${F.caption.toLowerCase()}`}>
        <div className="pf-head">
          <span className="sc-orb sm" aria-hidden="true" />
          <b>{F.title}</b>
          <span className={`pf-live${live ? " on" : ""}`}>
            <i aria-hidden="true" />
            {F.live}
          </span>
          <span className="pf-eq" aria-hidden="true">
            <i /><i /><i /><i /><i />
          </span>
        </div>

        <ol className="pf-rows" aria-live="off">
          {rows.map((r, i) => (
            <li key={r.id} className={`pf-row k-${r.k}${i === rows.length - 1 ? " new" : ""}`}>
              <span className="pf-tag">{F.legend.find((l) => l.k === r.k)?.t}</span>
              <span className="pf-tx">
                <b>{r.t}</b>
                <span>{r.d}</span>
              </span>
              <span className="pf-tick" aria-hidden="true" />
            </li>
          ))}
        </ol>

        <ul className="pf-legend" aria-label="Products on the platform">
          {F.legend.map((l) => (
            <li key={l.k} className={`k-${l.k}`}>
              <i aria-hidden="true" />
              {l.t}
            </li>
          ))}
        </ul>
      </div>
      <p className="pf-cap">{F.caption}</p>
    </div>
  );
}
