import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { HomeHero } from "@/components/home/HomeHero";
import { PlatformSection } from "@/components/home/PlatformSection";
import { ProfessionalTeaser } from "@/components/home/ProfessionalTeaser";
import { SenaTeaser } from "@/components/home/SenaTeaser";
import { AiFlow } from "@/components/home/AiFlow";
import { TrustSection } from "@/components/home/TrustSection";
import { Faq } from "@/components/Faq";
import { CtaForm } from "@/components/CtaForm";
import { SiteFooter } from "@/components/SiteFooter";
import { ScrollReveal } from "@/components/ScrollReveal";
import { homeContent, ENABLE_ARABIC } from "@/lib/content";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.veyderm.com").replace(/\/$/, "");

const title = "veyderm — AI-powered dermatology intelligence";
const description =
  "veyderm is an AI-powered dermatology intelligence platform. veyderm Professional gives clinicians case assessment, product and safety intelligence and treatment planning; Sena is an AI dermatology companion for patients.";

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
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      mainEntity: homeContent.faq.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ScrollReveal />
      <SiteHeader />
      <main id="top">
        <HomeHero />
        <PlatformSection />
        <ProfessionalTeaser />
        <SenaTeaser />
        <AiFlow />
        <TrustSection />
        <Faq items={homeContent.faq} tag={homeContent.faqTitle.tag} title={homeContent.faqTitle.h2} />
        <CtaForm lang="en" />
      </main>
      <SiteFooter />
    </>
  );
}
