import type { Metadata } from "next";
import { Nav } from "@/components/ui/Nav";
import { Footer } from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "The terms that govern use of the veyderm website, under the laws of the United Arab Emirates.",
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <>
      <Nav />
      <main className="sec legal" id="top">
      <div className="wrap">
        <h1>Terms of Use</h1>
        <p className="updated">Last updated: 2 November 2026</p>

        <p>
          These Terms of Use (&ldquo;Terms&rdquo;) govern your access to and use of
          the veyderm website (www.veyderm.com). By using the website or submitting
          the early-access request form, you agree to these Terms. If you do not
          agree, please do not use the website. veyderm is operated from Dubai,
          United Arab Emirates.
        </p>

        <h2>What this website is</h2>
        <p>
          This is the marketing and early-access website for veyderm, an AI
          dermatology platform built in the UAE that supports licensed
          dermatologists, patients and skincare brands. The website itself does not
          provide the clinical platform and does not store patient records. Access
          to the platform is governed by separate agreements.
        </p>

        <h2>Not medical advice</h2>
        <p>
          Content on this website is for general information only and is{" "}
          <strong>not medical advice, diagnosis or treatment</strong>. Any sample
          plans, products, concerns or outputs shown are illustrative examples, not
          recommendations. veyderm supports, and does not replace, the judgment of a
          licensed dermatologist; a licensed dermatologist reviews and approves
          clinical outputs on the platform. Always consult a qualified healthcare
          professional for any medical concern, and never disregard professional
          advice because of something you read here.
        </p>

        <h2>Early access</h2>
        <p>
          Submitting the form is a request to be considered for early access. It
          creates no obligation on us to provide access, and features shown on the
          website may change, be delayed, or not ship. You agree that the
          information you submit is accurate and that you are entitled to provide it.
        </p>

        <h2>Acceptable use</h2>
        <p>
          You agree to use the website lawfully and not to: disrupt or interfere
          with it or its security; attempt to gain unauthorised access to it or any
          connected system; submit false, misleading or unlawful information;
          introduce malicious code; or copy, scrape or harvest its content or data
          without our permission.
        </p>

        <h2>Intellectual property</h2>
        <p>
          The veyderm name, logo, trademarks, content, design and software are owned
          by veyderm or its licensors and are protected by applicable laws. You may
          not copy, modify, distribute or reuse them without our prior written
          permission.
        </p>

        <h2>Third-party links</h2>
        <p>
          The website may link to third-party sites or services (for example our
          social media pages). We are not responsible for the content or practices
          of those third parties, and their own terms and privacy policies apply.
        </p>

        <h2>Disclaimers</h2>
        <p>
          The website is provided on an &ldquo;as is&rdquo; and &ldquo;as
          available&rdquo; basis, without warranties of any kind, whether express or
          implied, to the fullest extent permitted by law. We do not warrant that
          the website will be uninterrupted, error-free or free of harmful
          components.
        </p>

        <h2>Limitation of liability</h2>
        <p>
          To the fullest extent permitted by the laws of the United Arab Emirates,
          veyderm shall not be liable for any indirect, incidental or consequential
          loss, or any loss of data, profits or goodwill, arising from your use of
          or inability to use the website. Nothing in these Terms excludes liability
          that cannot be excluded under applicable law.
        </p>

        <h2>Governing law and jurisdiction</h2>
        <p>
          These Terms are governed by the laws of the United Arab Emirates as
          applied in the Emirate of Dubai. The courts of Dubai, United Arab
          Emirates, have exclusive jurisdiction over any dispute arising from or in
          connection with these Terms or the website.
        </p>

        <h2>Changes to these Terms</h2>
        <p>
          We may update these Terms as veyderm develops or as the law changes. The
          current version will always be posted on this page with the date above.
          Continued use of the website after changes means you accept the updated
          Terms.
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
