"use client";

import { useEffect, useRef } from "react";
import { ProConsole } from "./ProConsole";
import { SenaChatDemo } from "./SenaChatDemo";

const LAPTOP_W = 900;  // natural width the console is laid out at
const PHONE_W = 380;   // natural width the chat is laid out at

/**
 * The product on its devices: veyderm Pro on a laptop, Sena on a phone in
 * front of it. Both screens are the real UI components, laid out at their
 * natural size and scaled to fit, so they stay crisp and keep their motion
 * (the chat plays, the dermatologist signs).
 */
function useFit(ref: React.RefObject<HTMLDivElement | null>, natural: number) {
  useEffect(() => {
    const screen = ref.current;
    if (!screen) return;
    const inner = screen.firstElementChild as HTMLElement | null;
    if (!inner) return;
    const fit = () => {
      const s = screen.clientWidth / natural;
      inner.style.transform = `scale(${s})`;
      screen.style.height = `${inner.offsetHeight * s}px`;
    };
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(screen);
    ro.observe(inner);
    return () => ro.disconnect();
  }, [ref, natural]);
}

export function Devices() {
  const laptop = useRef<HTMLDivElement>(null);
  const phone = useRef<HTMLDivElement>(null);
  useFit(laptop, LAPTOP_W);
  useFit(phone, PHONE_W);

  return (
    <div className="dev" aria-label="veyderm Pro on a laptop and Sena on a phone, illustrative">
      <div className="dev-laptop">
        <div className="dev-lid">
          <div className="dev-screen" ref={laptop}>
            <div className="dev-fit" style={{ width: LAPTOP_W }}>
              <ProConsole />
            </div>
          </div>
        </div>
        <div className="dev-base" aria-hidden="true" />
      </div>
      <div className="dev-phone">
        <div className="dev-pscreen" ref={phone}>
          <div className="dev-fit" style={{ width: PHONE_W }}>
            <SenaChatDemo />
          </div>
        </div>
      </div>
    </div>
  );
}
