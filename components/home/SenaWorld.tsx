"use client";

import { useEffect, useRef } from "react";
import { homeContent } from "@/lib/content";

export function SenaWorld() {
  const t = homeContent.sena;
  const c = t.chat;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("in");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { el.classList.add("in"); io.disconnect(); } }),
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="sw" id="sena-home">
      <div className="wrap sw-grid">
        <div className="sw-copy">
          <span className="mono sw-num">{t.n} — {t.label}</span>
          <h2 className="sw-h2">
            {t.h2a} <span className="ital">{t.h2b}</span>
          </h2>
          <p className="sw-sub">{t.sub}</p>
          <ol className="sw-steps">
            {t.steps.map((s, i) => (
              <li key={s}>
                <span className="mono sw-step-n">{String(i + 1).padStart(2, "0")}</span>
                <span>{s}</span>
              </li>
            ))}
          </ol>
          <a className="btn btn-dark" href="/#access" data-role="Patient — Sena waitlist" data-cta="sena_cta">{t.cta}</a>
        </div>

        <div className="sw-phone-wrap">
          <div className="sw-glow" aria-hidden="true" />
          <div className="iphone" ref={ref} aria-hidden="true">
            <div className="iphone-notch" />
            <div className="iphone-top">
              <span className="sena-orb" />
              <div>
                <div className="iphone-name">Sena</div>
                <div className="iphone-status">online</div>
              </div>
            </div>
            <div className="iphone-body">
              <div className="ip-msg sena d1">{c.greeting}</div>
              <div className="ip-msg user d2">{c.patient}</div>
              <div className="ip-photo d3"><span className="ip-photo-img"><i className="ip-ring" /></span>{c.photoNote}</div>
              <div className="ip-msg sena d4">{c.analysis}</div>
              <div className="ip-recs d5">
                {c.products.map((p) => (
                  <div className="ip-rec" key={p.n}>
                    <span>{p.n}</span>
                    <span className="ip-rec-tag">{p.tag}</span>
                  </div>
                ))}
              </div>
              <div className="ip-book d6">{c.book}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
