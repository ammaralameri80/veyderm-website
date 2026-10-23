import type { Metadata } from "next";
import { Nav } from "@/components/ui/Nav";
import { Footer } from "@/components/ui/Footer";
import { PageHero, FeatureGrid, Closer } from "@/components/ui/PageParts";
import { Section } from "@/components/ui/Section";
import { BRANDS_PAGE } from "@/lib/site";

const title = "For skincare brands — grow with the dermatologists who prescribe";
const description = "veyderm connects your brand to UAE dermatologists — from medical education to the order. Share the science, generate qualified leads, and upgrade the rep and ordering experience.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/brands" },
  openGraph: { title, description, url: "/brands" },
  twitter: { title, description },
};

export default function BrandsPage() {
  return (
    <>
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
