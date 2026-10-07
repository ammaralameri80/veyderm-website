import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { HomeHero } from "@/components/home/HomeHero";
import { ProductSplit } from "@/components/home/ProductSplit";
import { HowItConnects } from "@/components/home/HowItConnects";
import { TrustRow } from "@/components/home/TrustRow";
import { Faq } from "@/components/Faq";
import { CtaForm } from "@/components/CtaForm";
import { SiteFooter } from "@/components/SiteFooter";
import { ScrollReveal } from "@/components/ScrollReveal";
import { homeContent, ENABLE_ARABIC } from "@/lib/content";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.veyderm.com").replace(/\/$/, "");

const title = "Veyderm — a dermatology platform with two products";
const description =
  "Veyderm is a dermatology platform with two products: veyderm Pro for dermatologists, clinics and distributors, and Sena, an AI skin assistant for patients. Doctor-led, authorized products only.";

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
      name: "Veyderm",
      url: siteUrl,
      logo: `${siteUrl}/og-image.png`,
      description,
      email: "info@veyderm.com",
      address: { "@type": "PostalAddress", addressLocality: "Dubai", addressCountry: "AE" },
    },
    { "@type": "WebSite", "@id": `${siteUrl}/#website`, name: "Veyderm", url: siteUrl, publisher: { "@id": `${siteUrl}/#organization` } },
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
        <ProductSplit />
        <HowItConnects />
        <TrustRow />
        <Faq items={homeContent.faq} tag={homeContent.faqTitle.tag} title={homeContent.faqTitle.h2} />
        <CtaForm lang="en" />
      </main>
      <SiteFooter />
    </>
  );
}
