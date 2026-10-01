"use client";

import { useEffect, useState } from "react";
import { getConsent, setConsent, loadGa, trackEvent } from "@/lib/analytics";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export function ConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Track main-CTA clicks via delegation. trackEvent no-ops until GA loads,
    // so this is harmless before/without consent and needs no cleanup churn.
    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement | null)?.closest<HTMLElement>("[data-cta]");
      if (el) trackEvent("cta_click", { cta_location: el.getAttribute("data-cta") });
    };
    document.addEventListener("click", onClick);

    if (GA_ID) {
      const consent = getConsent();
      if (consent === "granted") loadGa(GA_ID);
      else if (consent === null) setVisible(true);
    }

    return () => document.removeEventListener("click", onClick);
  }, []);

  if (!GA_ID || !visible) return null;

  function accept() {
    setConsent("granted");
    if (GA_ID) loadGa(GA_ID);
    setVisible(false);
  }

  function decline() {
    setConsent("denied");
    setVisible(false);
  }

  return (
    <div
      className="consent"
      role="dialog"
      aria-modal="false"
      aria-labelledby="consent-title"
    >
      <div className="consent-inner">
        <div className="consent-copy">
          <p id="consent-title" className="consent-h">
            We use analytics cookies
          </p>
          <p className="consent-p">
            Only to understand how the site is used, and only if you agree. No
            ads, and we never sell your data. See our{" "}
            <a href="/privacy">Privacy Policy</a>.
          </p>
        </div>
        <div className="consent-actions">
          <button type="button" className="btn btn-ghost" onClick={decline}>
            Decline
          </button>
          <button type="button" className="btn btn-primary" onClick={accept}>
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
