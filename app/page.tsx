import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { WhatIsVeyderm } from "@/components/WhatIsVeyderm";
import { TrustStrip } from "@/components/TrustStrip";
import { Metrics } from "@/components/Metrics";
import { Problems } from "@/components/Problems";
import { AiAgent } from "@/components/AiAgent";
import { HowItWorks } from "@/components/HowItWorks";
import { PatientJourney } from "@/components/PatientJourney";
import { ForDoctors } from "@/components/ForDoctors";
import { ForDistributors } from "@/components/ForDistributors";
import { FoundingPartners } from "@/components/FoundingPartners";
import { Faq } from "@/components/Faq";
import { FAQ_ITEMS, cleanAnswer } from "@/lib/faq";
import { CtaForm } from "@/components/CtaForm";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.veyderm.com").replace(
  /\/$/,
  ""
);

// Structured data. Only verifiable claims — no "first", no fabricated figures,
// partners or social profiles.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Veyderm",
      url: siteUrl,
      logo: `${siteUrl}/og-image.png`,
      description:
        "An AI-powered dermatology platform built for the UAE that helps licensed dermatologists build evidence-based treatment plans, recommend verified products, and stay connected with patients on WhatsApp.",
      email: "info@veyderm.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dubai",
        addressCountry: "AE",
      },
      contactPoint: {
        "@type": "ContactPoint",
        email: "info@veyderm.com",
        contactType: "customer support",
        areaServed: "AE",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "Veyderm",
      url: siteUrl,
      publisher: { "@id": `${siteUrl}/#organization` },
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      mainEntity: FAQ_ITEMS.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: cleanAnswer(item.a) },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ScrollReveal />
      <Header />
      <main id="top">
        <Hero />
        <WhatIsVeyderm />
        <Metrics />
        <TrustStrip />
        <Problems />
        <AiAgent />
        <HowItWorks />
        <PatientJourney />
        <ForDoctors />
        <ForDistributors />
        <FoundingPartners />
        <Faq />
        <CtaForm />
      </main>
      <Footer />
    </>
  );
}
