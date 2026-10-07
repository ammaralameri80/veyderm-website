"use client";

import { useEffect, useRef, useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { content, type Lang } from "@/lib/content";

// Role values sent to the API (must match the server's VALID_ROLES). These
// double as the display labels. The home/door/path CTAs preselect via data-role.
const ROLE_VALUES = [
  "Dermatologist / Clinic",
  "Distributor / Brand",
  "Patient — Sena waitlist",
] as const;

export function CtaForm({ lang }: { lang: Lang }) {
  const t = content[lang].cta;
  const formRef = useRef<HTMLFormElement>(null);
  const [role, setRole] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [pending, setPending] = useState(false);

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
    try {
      const res = await fetch("/api/early-access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const body = (await res.json().catch(() => null)) as { error?: string } | null;
        form.setAttribute("data-error", body?.error || "Something went wrong. Please try again.");
        setPending(false);
        return;
      }
      trackEvent("generate_lead", { role: payload.role });
      setSubmitted(true);
    } catch {
      form.setAttribute("data-error", "Network error. Please check your connection and try again.");
      setPending(false);
    }
  }

  return (
    <section className="cta" id="access">
      <div className="wrap">
        <div className="grid">
          <div>
            <div className="sec-tag">{t.tag}</div>
            <h2>{t.h2}</h2>
            <p>{t.p}</p>
            <div className="cta-roles">
              <a className="btn btn-mint" href="#access" data-role="Dermatologist / Clinic" data-cta="cta_doctor">
                {t.roleDoctor}
              </a>
              <a className="btn btn-outline-light" href="#access" data-role="Distributor / Brand" data-cta="cta_distributor">
                {t.roleDistributor}
              </a>
            </div>
          </div>
          <div className="card">
            <form
              id="accessForm"
              ref={formRef}
              noValidate
              onSubmit={onSubmit}
              style={{ display: submitted ? "none" : undefined }}
            >
              <h3>{t.formTitle}</h3>
              <p className="hint">{t.hint}</p>
              {/* Honeypot: hidden from users; bots that fill it are dropped. */}
              <div className="hp" aria-hidden="true">
                <label htmlFor="company">Company (leave blank)</label>
                <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
              </div>
              <div className="field">
                <label htmlFor="name">{t.name}</label>
                <input id="name" name="name" type="text" required placeholder={t.namePh} />
              </div>
              <div className="field">
                <label htmlFor="email">{t.email}</label>
                <input id="email" name="email" type="email" required placeholder={t.emailPh} />
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
              <button type="submit" className="btn btn-primary" disabled={pending}>
                {pending ? t.sending : t.submit}
              </button>
              <p className="privacy">{t.privacy}</p>
            </form>
            <div className={`ok${submitted ? " show" : ""}`} id="okState">
              <div className="tick">✓</div>
              <h3>{t.okTitle}</h3>
              <p>{t.okP}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
