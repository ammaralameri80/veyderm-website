// Client-side analytics helpers. GA4 is loaded only after the visitor accepts
// the cookie-consent banner; until then (and if they decline) nothing loads and
// every trackEvent call is a no-op.

export const CONSENT_KEY = "veyderm-consent";
export type Consent = "granted" | "denied";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function getConsent(): Consent | null {
  try {
    const v = localStorage.getItem(CONSENT_KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    return null;
  }
}

export function setConsent(value: Consent): void {
  try {
    localStorage.setItem(CONSENT_KEY, value);
  } catch {
    /* storage unavailable — consent simply won't persist */
  }
}

let gaLoaded = false;

/** Inject gtag.js once and initialise GA4. Safe to call multiple times. */
export function loadGa(gaId: string): void {
  if (gaLoaded || typeof window === "undefined" || !gaId) return;
  gaLoaded = true;

  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
  document.head.appendChild(s);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", gaId, { anonymize_ip: true });
}

/** Fire a GA4 event. No-ops when GA hasn't loaded (no consent yet). */
export function trackEvent(
  name: string,
  params?: Record<string, unknown>
): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", name, params ?? {});
}
