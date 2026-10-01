"use client";

import { useEffect, useRef, useState } from "react";

const ROLES = [
  "Dermatologist",
  "Clinic / Hospital",
  "Authorized Distributor",
  "Patient",
  "Other",
] as const;

export function CtaForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [role, setRole] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [pending, setPending] = useState(false);

  // Wire every [data-role] control on the page (the "I'm a doctor" /
  // "I'm a distributor" buttons here, plus "Join as a doctor" and
  // "Become a partner" elsewhere) to preselect the role — matching the
  // reference behavior 1:1.
  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll<HTMLElement>("[data-role]")
    );
    const handler = (e: Event) => {
      const target = e.currentTarget as HTMLElement;
      const value = target.getAttribute("data-role");
      if (value) setRole(value);
    };
    els.forEach((el) => el.addEventListener("click", handler));
    return () => els.forEach((el) => el.removeEventListener("click", handler));
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;
    // Same UX as the reference: client-side validation first.
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || ""),
      email: String(data.get("email") || ""),
      role: String(data.get("role") || ""),
    };

    setPending(true);
    try {
      const res = await fetch("/api/early-access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        // Surface server-side validation without leaving the success path
        // for genuinely bad input.
        const body = (await res.json().catch(() => null)) as
          | { error?: string }
          | null;
        form.setAttribute(
          "data-error",
          body?.error || "Something went wrong. Please try again."
        );
        setPending(false);
        return;
      }
      setSubmitted(true);
    } catch {
      // Network failure — keep the form so the user can retry.
      form.setAttribute(
        "data-error",
        "Network error. Please check your connection and try again."
      );
      setPending(false);
    }
  }

  return (
    <section className="cta" id="access">
      <div className="wrap">
        <div className="grid">
          <div>
            <div className="sec-tag">Get started</div>
            <h2>Join Veyderm early — and grow with it.</h2>
            <p>
              We&apos;re onboarding a limited number of dermatologists and
              distributors in the UAE.
            </p>
            <div className="cta-roles">
              <a className="btn btn-mint" href="#access" data-role="Dermatologist">
                I&apos;m a doctor
              </a>
              <a
                className="btn btn-outline-light"
                href="#access"
                data-role="Authorized Distributor"
              >
                I&apos;m a distributor
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
              <h3>Request early access</h3>
              <p className="hint">
                We&apos;ll reach out with your invitation when your region goes
                live.
              </p>
              <div className="field">
                <label htmlFor="name">Full name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Dr. Full Name"
                />
              </div>
              <div className="field">
                <label htmlFor="email">Work email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@clinic.com"
                />
              </div>
              <div className="field">
                <label htmlFor="role">I am a…</label>
                <select
                  id="role"
                  name="role"
                  required
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option value="" disabled>
                    Select one
                  </option>
                  {ROLES.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </div>
              <button type="submit" className="btn btn-primary" disabled={pending}>
                {pending ? "Sending…" : "Request Early Access"}
              </button>
              <p className="privacy">
                Your information is only used to contact you about Veyderm access.
                We never share your data.
              </p>
            </form>
            <div className={`ok${submitted ? " show" : ""}`} id="okState">
              <div className="tick">✓</div>
              <h3>You&apos;re on the list.</h3>
              <p>We&apos;ll be in touch at the email you provided.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
