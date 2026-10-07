"use client";

import { useEffect, useRef } from "react";
import { homeContent } from "@/lib/content";
import { Icon, Arrow } from "./Icons";

export function SenaWorld({ page = "home" }: { page?: "home" | "solo" }) {
  const t = homeContent.sena;
  const ch = t.chat;
  const appRef = useRef<HTMLDivElement>(null);

  // Reveal the conversation in sequence once it scrolls into view. Under
  // reduced motion the CSS keeps everything visible, so we just add .in.
  useEffect(() => {
    const el = appRef.current;
    if (!el) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) { el.classList.add("in"); return; }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { el.classList.add("in"); io.disconnect(); }
      }),
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="vsena" id="sena">
      <div className="wrap">
        <div className="vsena-grid">
          <div className="vsena-copy">
            <span className="v-kicker"><span className="dot" />{t.kicker}</span>
            <h2 className="vsena-h2">{t.h2}</h2>
            <p className="vsena-sub">{t.sub}</p>
            <ol className="vsena-points">
              {t.points.map((p, i) => (
                <li key={p}><span className="pn">{i + 1}</span>{p}</li>
              ))}
            </ol>
            {page === "solo" ? (
              <a className="btn btn-primary btn-lg" href="#access" data-role={t.role} data-cta="sena_access">
                Join the Sena waitlist<Arrow className="ar" />
              </a>
            ) : (
              <a className="btn btn-primary btn-lg" href="/sena" data-cta="sena_meet">
                {t.cta}<Arrow className="ar" />
              </a>
            )}
          </div>

          <div className="vsena-app-wrap">
            <div className="vapp" ref={appRef}>
              <div className="vapp-head">
                <span className="vorb" />
                <span className="vapp-id">
                  <span className="vapp-name">Sena</span>
                  <span className="vapp-role">AI skin assistant</span>
                </span>
                <span className="vapp-online"><span className="gd" />online</span>
              </div>
              <div className="vapp-body">
                <div className="vmsg user d1">{ch.user}</div>
                <div className="vphoto d2"><span className="th" />{ch.photo}</div>
                <div className="vmsg sena d3">{ch.sena1}</div>
                <div className="vanalysis d4">
                  <div className="vanalysis-top">
                    <span className="vanalysis-img"><span className="ring" /></span>
                    <span className="vanalysis-cap">{ch.analysisCap}<b>{ch.analysisTitle}</b></span>
                  </div>
                  <ul className="vobs">
                    {ch.obs.map((o) => (
                      <li key={o}><span className="ck"><Icon name="check" size={11} /></span>{o}</li>
                    ))}
                  </ul>
                  <p className="vnote"><Icon name="check" size={12} />{ch.note}</p>
                </div>
                <div className="vrecs d5">
                  {ch.recs.map((r) => (
                    <div className="vrec" key={r.n}>
                      <span className="rn"><span className="ro" />{r.n}</span>
                      <span className="vrec-tag">{r.tag}</span>
                    </div>
                  ))}
                </div>
                <div className="vbook d6">
                  <span className="bl">
                    <span className="bt">{ch.book.t}</span>
                    <span className="bs">{ch.book.s}</span>
                  </span>
                  <span className="bb">{ch.book.b}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="vjourney">
          <div className="vjourney-flow">
            {t.journey.map((j, i) => (
              <div className="vjstep" key={j.t}>
                <span className="jn">{String(i + 1).padStart(2, "0")} · {j.t}</span>
                <div className="jbar"><i style={{ width: j.w } as React.CSSProperties} /></div>
                <h3>{j.t}</h3>
                <p>{j.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
