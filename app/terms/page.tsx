import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "The terms that govern use of the Veyderm marketing website.",
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
        been reviewed by a qualified lawyer. It must be checked against UAE law
        before the site goes live.
      </span>
    </div>
  );
}

export default function TermsPage() {
  return (
    <section className="sec legal">
      <div className="wrap">
        <DraftNote />
        <h1>Terms of Use</h1>
        <p className="updated">Last updated: 1 October 2026 · Draft</p>

        <p>
          These terms govern your use of the Veyderm marketing website. By using
          the site or submitting the early-access form, you agree to them.
        </p>

        <h2>What this site is</h2>
        <p>
          This is a marketing and early-access site for Veyderm, a platform that
          helps licensed dermatologists build evidence-based treatment plans,
          surface authorized products, and stay connected with patients. The site
          itself does not provide the product or store patient records.
        </p>

        <h2>Not medical advice</h2>
        <p>
          Content on this site is for general information only and is{" "}
          <strong>not medical advice</strong>. Any sample plans, products or
          evidence levels shown are illustrative examples, not recommendations.
          Always consult a qualified healthcare professional for diagnosis and
          treatment.
        </p>

        <h2>Early access</h2>
        <p>
          Submitting the form is a request to be considered for early access. It
          does not create any obligation on us to provide access, and features
          shown may change or not ship.
        </p>

        <h2>Acceptable use</h2>
        <p>
          Don&apos;t misuse the site: no attempts to disrupt it, access it without
          authorisation, submit false information, or use it unlawfully.
        </p>

        <h2>Intellectual property</h2>
        <p>
          The Veyderm name, logo, content and design are owned by Veyderm or its
          licensors and may not be copied or reused without permission.
        </p>

        <h2>Disclaimers &amp; liability</h2>
        <p>
          The site is provided &ldquo;as is&rdquo; without warranties of any kind.
          To the extent permitted by law, we are not liable for any loss arising
          from your use of the site.
        </p>

        <h2>Governing law</h2>
        <p>
          These terms are governed by the laws of the United Arab Emirates, and
          the courts of the UAE have jurisdiction over any dispute.
        </p>

        <h2>Changes</h2>
        <p>
          We may update these terms as the product develops; the current version
          will always be posted here.
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
