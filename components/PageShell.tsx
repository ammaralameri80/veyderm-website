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
import { CtaForm } from "@/components/CtaForm";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { content, type Lang } from "@/lib/content";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.veyderm.com").replace(/\/$/, "");

function jsonLdFor(lang: Lang) {
  const t = content[lang];
  const url = lang === "ar" ? `${siteUrl}/ar` : siteUrl;
  return {
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
        address: { "@type": "PostalAddress", addressLocality: "Dubai", addressCountry: "AE" },
        contactPoint: { "@type": "ContactPoint", email: "info@veyderm.com", contactType: "customer support", areaServed: "AE" },
      },
      { "@type": "WebSite", "@id": `${url}/#website`, name: "Veyderm", url, inLanguage: t.htmlLang, publisher: { "@id": `${siteUrl}/#organization` } },
      {
        "@type": "FAQPage",
        "@id": `${url}/#faq`,
        inLanguage: t.htmlLang,
        mainEntity: t.faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
    ],
  };
}

export function PageShell({ lang }: { lang: Lang }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFor(lang)) }} />
      <ScrollReveal />
      <Header lang={lang} />
      <main id="top">
        <Hero lang={lang} />
        <WhatIsVeyderm lang={lang} />
        <Metrics lang={lang} />
        <TrustStrip lang={lang} />
        <Problems lang={lang} />
        <AiAgent lang={lang} />
        <HowItWorks lang={lang} />
        <PatientJourney lang={lang} />
        <ForDoctors lang={lang} />
        <ForDistributors lang={lang} />
        <FoundingPartners />
        <Faq lang={lang} />
        <CtaForm lang={lang} />
      </main>
      <Footer lang={lang} />
    </>
  );
}
