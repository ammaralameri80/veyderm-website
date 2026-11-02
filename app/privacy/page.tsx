import type { Metadata } from "next";
import { Nav } from "@/components/ui/Nav";
import { Footer } from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How veyderm collects, uses and protects personal data on this website, in line with UAE Federal Decree-Law No. 45 of 2021 (PDPL).",
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main className="sec legal" id="top">
      <div className="wrap">
        <h1>Privacy Policy</h1>
        <p className="updated">Last updated: 2 November 2026</p>

        <p>
          This Privacy Policy explains how veyderm (&ldquo;veyderm&rdquo;,
          &ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our&rdquo;) collects, uses,
          shares and protects personal data through this website
          (www.veyderm.com). We are the data controller for this website and are
          based in Dubai, United Arab Emirates.
        </p>
        <p>
          We handle personal data in line with UAE Federal Decree-Law No. 45 of
          2021 on the Protection of Personal Data (the &ldquo;PDPL&rdquo;) and its
          implementing regulations. This policy covers the website only — the
          early-access request form and website analytics. It does not cover the
          veyderm clinical platform or any patient data processed within it, which
          are governed by separate agreements and notices.
        </p>

        <h2>Personal data we collect</h2>
        <p>When you submit the early-access request form, we collect:</p>
        <ul>
          <li><strong>Full name</strong> — so we can address you personally.</li>
          <li><strong>Email address</strong> — so we can contact you about access.</li>
          <li><strong>Role</strong> — e.g. dermatologist or clinic, skincare brand or distributor, or patient.</li>
        </ul>
        <p>
          We also process limited <strong>technical data</strong> automatically:
          your IP address (used briefly to protect the form against abuse and spam)
          and, if you accept analytics cookies, standard usage data such as pages
          viewed, device and browser type, and approximate region, collected
          through Google Analytics. Analytics do not load unless you accept the
          cookie banner.
        </p>
        <p>
          We do not ask for, and you should not submit, any health information or
          other sensitive personal data through this website.
        </p>

        <h2>How we use your data and our legal basis</h2>
        <p>Under the PDPL, we process your personal data on these bases:</p>
        <ul>
          <li>
            <strong>Your consent</strong> — to respond to your early-access
            request and send you the updates you asked for, and to run analytics
            cookies. You can withdraw consent at any time (see &ldquo;Your
            rights&rdquo;).
          </li>
          <li>
            <strong>Our legitimate interests</strong> — to keep the website secure,
            prevent abuse of the form, and understand and improve how the site is
            used, in a way that does not override your rights.
          </li>
        </ul>

        <h2>Cookies and analytics</h2>
        <p>
          We use analytics cookies only after you agree through the consent banner.
          You can decline, and you can clear the stored choice in your browser at
          any time to be asked again. We do not use advertising cookies and we do
          not sell your data.
        </p>

        <h2>Sharing and service providers</h2>
        <p>
          We <strong>do not sell</strong> your personal data and we do not share it
          with third parties for their own marketing. We use trusted service
          providers (processors) who handle data only on our instructions to run
          this website:
        </p>
        <ul>
          <li><strong>Hosting and delivery</strong> — our website host serves the site and processes technical logs.</li>
          <li><strong>Database</strong> — our database provider securely stores form submissions.</li>
          <li><strong>Analytics</strong> — our analytics provider processes usage data, where you have consented.</li>
        </ul>
        <p>
          We may also disclose personal data where required by law, regulation or a
          lawful request from a competent UAE authority.
        </p>

        <h2>International data transfers</h2>
        <p>
          Some of our service providers process data on servers located outside the
          UAE. Where personal data is transferred abroad, we take the steps required
          by the PDPL to ensure an adequate level of protection — for example
          relying on jurisdictions recognised as providing adequate protection, or
          putting appropriate contractual safeguards in place with the recipient.
        </p>

        <h2>Data retention</h2>
        <p>
          We keep early-access submissions only for as long as needed to evaluate
          and contact you about access, and for a reasonable period afterwards to
          meet legal and record-keeping obligations, after which we delete or
          anonymise them. Analytics data is retained for a limited period in line
          with our analytics settings.
        </p>

        <h2>Your rights</h2>
        <p>Subject to the PDPL, you have the right to:</p>
        <ul>
          <li>access the personal data we hold about you;</li>
          <li>have inaccurate or incomplete data corrected;</li>
          <li>request deletion of your data;</li>
          <li>restrict or object to certain processing;</li>
          <li>request a copy of your data in a portable format;</li>
          <li>withdraw consent at any time, without affecting prior processing; and</li>
          <li>lodge a complaint with the UAE Data Office.</li>
        </ul>
        <p>
          To exercise any of these rights, email{" "}
          <a href="mailto:info@veyderm.com">info@veyderm.com</a>. We will respond
          within the timeframes required by law.
        </p>

        <h2>Security</h2>
        <p>
          We apply appropriate technical and organisational measures to protect your
          personal data against loss, misuse and unauthorised access, including
          encryption in transit and access controls. No method of transmission or
          storage is completely secure, but we work continuously to keep your data
          safe, and we will notify you and the relevant authority of a personal data
          breach where the law requires.
        </p>

        <h2>Children</h2>
        <p>
          This website is intended for healthcare professionals, businesses and
          adults. It is not directed at children, and we do not knowingly collect
          personal data from children through it.
        </p>

        <h2>Changes to this policy</h2>
        <p>
          We may update this policy as veyderm develops or as the law changes. We
          will post any changes on this page with a new &ldquo;last updated&rdquo;
          date.
        </p>

        <h2>Contact us</h2>
        <p>
          veyderm
          <br />
          One Business Centre, Emaar Square, Dubai, United Arab Emirates
          <br />
          <a href="mailto:info@veyderm.com">info@veyderm.com</a>
        </p>

        <a className="back" href="/">← Back to home</a>
      </div>
      </main>
      <Footer />
    </>
  );
}
