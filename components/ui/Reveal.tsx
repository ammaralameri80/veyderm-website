"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** stagger within a group, in seconds */
  delay?: number;
  className?: string;
  /** translate-y distance; keep small */
  y?: number;
};

/**
 * One reveal primitive used everywhere: a quiet fade + rise, once, when the
 * element first enters the viewport. Implemented with a CSS class toggled by
 * an IntersectionObserver so server and client markup match exactly (no
 * hydration mismatch). Reduced motion is honored in CSS (.reveal is shown).
 */
export function Reveal({ children, delay = 0, className, y = 14 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: "-10% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal${shown ? " in" : ""}${className ? ` ${className}` : ""}`}
      style={{ transitionDelay: `${delay}s`, ["--rv-y" as string]: `${y}px` }}
    >
      {children}
    </div>
  );
}
