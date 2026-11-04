import type { Metadata } from "next";
import { Nav } from "@/components/ui/Nav";
import { Footer } from "@/components/ui/Footer";
import { PageHero, FeatureGrid, Closer } from "@/components/ui/PageParts";
import { Section } from "@/components/ui/Section";
import { BRANDS_PAGE } from "@/lib/site";
import { OG_BASE, TWITTER_BASE } from "@/lib/seo";

const title = "For skincare brands — grow with the dermatologists who prescribe";
const description = "veyderm connects your brand to UAE dermatologists — from medical education to the order. Share the science, generate qualified leads, and upgrade the rep and ordering experience.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/brands" },
  openGraph: { ...OG_BASE, title, description, url: "/brands" },
  twitter: { ...TWITTER_BASE, title, description },
};

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.veyderm.com").replace(/\/$/, "");
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${siteUrl}/brands#service`,
  name: "veyderm Partners",
  serviceType: "AI insight platform for skincare and pharma brands",
  url: `${siteUrl}/brands`,
  description,
  provider: { "@id": `${siteUrl}/#organization` },
  areaServed: { "@type": "Country", name: "United Arab Emirates" },
  audience: { "@type": "Audience", audienceType: "Skincare and pharmaceutical brands" },
};

export default function BrandsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />
      <main>
        <PageHero
          kicker={BRANDS_PAGE.kicker}
          heading={BRANDS_PAGE.h1}
          sub={BRANDS_PAGE.sub}
          print
        />
        <Section tight className="section--mist">
          <FeatureGrid items={BRANDS_PAGE.features} icons={["book", "target", "briefcase", "cart"]} />
        </Section>
        <Closer heading="Reach the clinicians who prescribe your category." cta={BRANDS_PAGE.cta} />
      </main>
      <Footer />
    </>
  );
}
