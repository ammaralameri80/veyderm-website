import type { Metadata } from "next";
import { Nav } from "@/components/ui/Nav";
import { Footer } from "@/components/ui/Footer";
import { Hero } from "@/components/home/Hero";
import { Platform, ProductCards, Features } from "@/components/home/HomeSections";
import { CtaForm } from "@/components/CtaForm";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.veyderm.com").replace(/\/$/, "");

const title = "veyderm — the UAE's first AI platform for dermatology";
const description =
  "veyderm is the UAE's first AI platform for dermatology. AI prepares every recommendation; a licensed dermatologist approves it. Built in the UAE.";

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
      <Nav />
      <main>
        <Hero />
        <Platform />
        <ProductCards />
        <Features />
        <CtaForm lang="en" />
      </main>
      <Footer />
    </>
  );
}
