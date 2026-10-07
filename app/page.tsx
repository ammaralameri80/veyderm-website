import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/home/Hero";
import { Ecosystem } from "@/components/home/Ecosystem";
import { HowVeydermWorks } from "@/components/home/HowVeydermWorks";
import { ProWorld } from "@/components/home/ProWorld";
import { SenaWorld } from "@/components/home/SenaWorld";
import { SafetyStatement } from "@/components/home/SafetyStatement";
import { Credibility } from "@/components/home/Credibility";
import { FinalCta } from "@/components/home/FinalCta";
import { CtaForm } from "@/components/CtaForm";
import { SiteFooter } from "@/components/SiteFooter";
import { ENABLE_ARABIC } from "@/lib/content";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.veyderm.com").replace(/\/$/, "");

const title = "veyderm — UAE's first AI-powered dermatology platform";
const description =
  "veyderm is the UAE's first AI-powered dermatology platform. AI-assisted clinical decision support for dermatologists, and intelligent guidance for patients through Sena. AI assists; dermatologists decide.";

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
        <Ecosystem />
        <HowVeydermWorks />
        <ProWorld />
        <SenaWorld />
        <SafetyStatement />
        <Credibility />
        <FinalCta />
        <CtaForm lang="en" />
      </main>
      <SiteFooter />
    </>
  );
}
