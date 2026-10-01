import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Veyderm collects and uses personal information on this marketing website.",
  robots: { index: true, follow: true },
};

function DraftNote() {
  return (
    <div className="legal-draft" role="note">
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" />
        <path d="M12 9v4" />
        <path d="M12 17h.01" />
      </svg>
      <span>
        <strong>Draft for review.</strong> This is placeholder content and has not
        been reviewed by a qualified lawyer. It must be checked against UAE data
        protection law (including the PDPL) before the site goes live.
      </span>
    </div>
  );
}

export default function PrivacyPage() {
  return (
    <section className="sec legal">
      <div className="wrap">
        <DraftNote />
        <h1>Privacy Policy</h1>
        <p className="updated">Last updated: 1 October 2026 · Draft</p>

        <p>
          This policy explains how Veyderm (&ldquo;we&rdquo;, &ldquo;us&rdquo;)
          handles personal information collected through this marketing website.
          It covers the early-access request form and website analytics only.
        </p>

        <h2>Information we collect</h2>
        <p>When you submit the early-access form, we collect:</p>
        <ul>
          <li><strong>Name</strong> — so we can address you personally.</li>
          <li><strong>Work email</strong> — so we can contact you.</li>
          <li><strong>Role</strong> — e.g. dermatologist, clinic, distributor or patient.</li>
        </ul>
        <p>
          If you accept analytics cookies, we also collect standard usage data
          (such as pages viewed and approximate region) through Google Analytics.
          Analytics do not load unless you accept the cookie banner.
        </p>

        <h2>Why we use it</h2>
        <p>
          We use your details for one purpose: to contact you about access to
          Veyderm and related updates you&apos;ve asked for. Analytics help us
          understand how the site is used so we can improve it.
        </p>

        <h2>Cookies &amp; analytics</h2>
        <p>
          We use analytics cookies only after you consent via the banner. You can
          decline, and you can clear the stored choice in your browser at any time
          to be asked again.
        </p>

        <h2>How it&apos;s stored and shared</h2>
        <p>
          We <strong>do not sell</strong> your personal data. We use trusted
          service providers to run the site and store submissions (for example a
          hosting provider and a database provider), who process data on our
          behalf. We don&apos;t share your details with anyone else for their own
          marketing.
        </p>

        <h2>Retention</h2>
        <p>
          We keep early-access submissions only as long as needed to evaluate and
          contact you about access, after which we delete or anonymise them.
        </p>

        <h2>Your rights</h2>
        <p>
          You can ask us to access, correct, or delete your personal information,
          or to stop contacting you. Email{" "}
          <a href="mailto:info@veyderm.com">info@veyderm.com</a> and we&apos;ll
          action your request.
        </p>

        <h2>Security</h2>
        <p>
          We take reasonable technical and organisational measures to protect your
          information. No method of transmission or storage is completely secure,
          but we work to keep your data safe.
        </p>

        <h2>Children</h2>
        <p>
          This site is intended for healthcare professionals, distributors and
          adults. It is not directed at children.
        </p>

        <h2>Changes</h2>
        <p>
          We may update this policy as the product develops. We&apos;ll post any
          changes on this page with a new &ldquo;last updated&rdquo; date.
        </p>

        <h2>Contact</h2>
        <p>
          Veyderm — Dubai, United Arab Emirates.
          <br />
          <a href="mailto:info@veyderm.com">info@veyderm.com</a>
        </p>

        <a className="back" href="/">← Back to home</a>
      </div>
    </section>
  );
}
