import type { Metadata } from "next";
import { Nav } from "@/components/ui/Nav";
import { Footer } from "@/components/ui/Footer";
import { Hero } from "@/components/home/Hero";
import { ProductChapters } from "@/components/home/ProductChapters";
import { Faq } from "@/components/home/Faq";
import { CtaForm } from "@/components/CtaForm";
import { FAQ, FOOTER } from "@/lib/site";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.veyderm.com").replace(/\/$/, "");

const title = "veyderm — AI dermatology platform, built in the UAE";
const description =
  "veyderm is an AI dermatology platform built in the UAE. AI supports every step of dermatology — from case assessment and product intelligence to treatment planning and patient care — with the dermatologist always in control.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: { title, description, url: "/" },
  twitter: { title, description },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "veyderm",
      url: siteUrl,
      logo: `${siteUrl}/veyderm-icon-512.png`,
      description,
      email: "info@veyderm.com",
      sameAs: FOOTER.social.map((s) => s.href),
      address: {
        "@type": "PostalAddress",
        streetAddress: "One Business Centre, Emaar Square",
        addressLocality: "Dubai",
        addressCountry: "AE",
      },
    },
    { "@type": "WebSite", "@id": `${siteUrl}/#website`, name: "veyderm", url: siteUrl, publisher: { "@id": `${siteUrl}/#organization` } },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      mainEntity: FAQ.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />
      <main>
        <Hero />
        <ProductChapters />
        <Faq />
        <CtaForm lang="en" />
      </main>
      <Footer />
    </>
  );
}
