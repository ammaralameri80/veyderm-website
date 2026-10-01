"use client";

import { useEffect } from "react";

// Reusable scroll-reveal. Tags section headings and cards, then fades them up
// as they enter the viewport. It never hides anything when JS is off or before
// hydration (the hidden state is gated on the .reveal-ready class we add here),
// and it is fully skipped under prefers-reduced-motion.
const SELECTOR = [
  ".sec h2",
  ".engine h2",
  ".cta h2",
  ".prob",
  ".acard",
  ".bcard",
  ".jstep",
  ".step",
  ".ba-col",
  ".stat",
  ".reassure",
].join(",");

export function ScrollReveal() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const els = Array.from(
      document.querySelectorAll<HTMLElement>(SELECTOR)
    );
    if (els.length === 0) return;

    document.documentElement.classList.add("reveal-ready");
    els.forEach((el) => el.classList.add("reveal"));

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
