import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/home/Hero";
import { ProSection } from "@/components/home/ProSection";
import { SenaSection } from "@/components/home/SenaSection";
import { BrandsSection } from "@/components/home/BrandsSection";
import { Guardrails } from "@/components/home/Guardrails";
import { CtaForm } from "@/components/CtaForm";
import { SiteFooter } from "@/components/SiteFooter";
import { ENABLE_ARABIC } from "@/lib/content";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.veyderm.com").replace(/\/$/, "");

const title = "veyderm — the UAE's first AI platform for dermatology";
const description =
  "veyderm turns each patient's skin into a SkinPrint, then builds a Tailored Plan their dermatologist approves. AI prepares; dermatologists decide. Built in the UAE.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/",
    languages: ENABLE_ARABIC ? { en: "/", ar: "/ar", "x-default": "/" } : undefined,
  },
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
      logo: `${siteUrl}/og-image.png`,
      description,
      email: "info@veyderm.com",
      address: { "@type": "PostalAddress", addressLocality: "Dubai", addressCountry: "AE" },
    },
    { "@type": "WebSite", "@id": `${siteUrl}/#website`, name: "veyderm", url: siteUrl, publisher: { "@id": `${siteUrl}/#organization` } },
  ],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SiteHeader />
      <main id="top">
        <Hero />
        <ProSection />
        <SenaSection />
        <BrandsSection />
        <Guardrails />
        <CtaForm lang="en" />
      </main>
      <SiteFooter />
    </>
  );
}
