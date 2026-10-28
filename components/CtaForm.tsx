"use client";

import { useEffect, useRef, useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { content, type Lang } from "@/lib/content";
import { ROLES } from "@/lib/site";

// Role values sent to the API (must match the server's VALID_ROLES). These
// double as the display labels. Page CTAs preselect via [data-role].
const ROLE_VALUES = [ROLES.derm, ROLES.brand, ROLES.patient] as const;

export function CtaForm({ lang }: { lang: Lang }) {
  const t = content[lang].cta;
  const formRef = useRef<HTMLFormElement>(null);
  const [role, setRole] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");
  const okRef = useRef<HTMLHeadingElement>(null);

  // Wire every [data-role] control on the page to preselect the role.
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-role]"));
    const handler = (e: Event) => {
      const value = (e.currentTarget as HTMLElement).getAttribute("data-role");
      if (value) setRole(value);
    };
    els.forEach((el) => el.addEventListener("click", handler));
    return () => els.forEach((el) => el.removeEventListener("click", handler));
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || ""),
      email: String(data.get("email") || ""),
      role: String(data.get("role") || ""),
      company: String(data.get("company") || ""), // honeypot
    };

    setPending(true);
    setError("");
    try {
      const res = await fetch("/api/early-access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const body = (await res.json().catch(() => null)) as { error?: string } | null;
        setError(body?.error || "We couldn't send your request. Please try again.");
        setPending(false);
        return;
      }
      trackEvent("generate_lead", { role: payload.role });
      setSubmitted(true);
      requestAnimationFrame(() => okRef.current?.focus());
    } catch {
      setError("You appear to be offline. Check your connection and try again.");
      setPending(false);
    }
  }

  return (
    <section className="access section" id="access">
      <div className="wrap">
      <div className="access-stage access-grid">
        <div className="access-copy">
          <span className="kicker">For clinics, patients and brands</span>
          <h2 className="heading">
            Get early access.
          </h2>
          <p>Tell us who you are. We&rsquo;ll reach out personally when your access is ready.</p>
          <div className="access-roles">
            <a className="btn btn-ghost" href="#access" data-role={ROLES.derm} data-cta="access_doctor">
              I&rsquo;m a dermatologist
            </a>
            <a className="btn btn-ghost" href="#access" data-role={ROLES.patient} data-cta="access_patient">
              I&rsquo;m a patient
            </a>
            <a className="btn btn-ghost" href="#access" data-role={ROLES.brand} data-cta="access_brand">
              I&rsquo;m a skincare brand
            </a>
          </div>
        </div>

        <div className="form-card">
          <form
            id="accessForm"
            ref={formRef}
            noValidate
            onSubmit={onSubmit}
            onChange={() => error && setError("")}
            style={{ display: submitted ? "none" : undefined }}
          >
            <h3>Request access</h3>
            <p className="hint">{t.hint}</p>
            {/* Honeypot: hidden from users; bots that fill it are dropped. */}
            <div className="hp" aria-hidden="true">
              <label htmlFor="company">Company (leave blank)</label>
              <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
            </div>
            <div className="field">
              <label htmlFor="name">{t.name}</label>
              <input id="name" name="name" type="text" required autoComplete="name" placeholder={t.namePh} />
            </div>
            <div className="field">
              <label htmlFor="email">{t.email}</label>
              <input id="email" name="email" type="email" required autoComplete="email" inputMode="email" placeholder={t.emailPh} />
            </div>
            <div className="field">
              <label htmlFor="role">{t.role}</label>
              <select id="role" name="role" required value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="" disabled>
                  {t.roleSelect}
                </option>
                {ROLE_VALUES.map((value) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </div>
            {error && (
              <p className="form-error" role="alert">
                {error}
              </p>
            )}
            <button type="submit" className="btn btn-primary" disabled={pending} aria-busy={pending}>
              {pending && <span className="spin" aria-hidden="true" />}
              {pending ? t.sending : t.submit}
            </button>
            <p className="privacy">{t.privacy}</p>
          </form>
          <div className={`form-ok${submitted ? " show" : ""}`} role="status">
            <div className="tick" aria-hidden="true">✓</div>
            <h3 ref={okRef} tabIndex={-1}>{t.okTitle}</h3>
            <p>{t.okP}</p>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
