import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { HeroTW } from "@/components/home/HeroTW";
import { Doors } from "@/components/home/Doors";
import { ProWorld } from "@/components/home/ProWorld";
import { SenaWorld } from "@/components/home/SenaWorld";
import { JourneyTiles } from "@/components/home/JourneyTiles";
import { SafetyStatement } from "@/components/home/SafetyStatement";
import { Paths } from "@/components/home/Paths";
import { CtaForm } from "@/components/CtaForm";
import { SiteFooter } from "@/components/SiteFooter";
import { ENABLE_ARABIC } from "@/lib/content";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.veyderm.com").replace(/\/$/, "");

const title = "veyderm — skin intelligence, two ways in";
const description =
  "veyderm is the dermatology intelligence platform. A clinical system for doctors, and Sena, an AI skin assistant for patients. AI suggests; your dermatologist decides.";

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
        <HeroTW />
        <Doors />
        <ProWorld />
        <SenaWorld />
        <JourneyTiles />
        <SafetyStatement />
        <Paths />
        <CtaForm lang="en" />
      </main>
      <SiteFooter />
    </>
  );
}
