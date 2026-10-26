import type { Metadata } from "next";
import { Nav } from "@/components/ui/Nav";
import { Footer } from "@/components/ui/Footer";
import { PageHero, FeatureGrid, Closer } from "@/components/ui/PageParts";
import { Section } from "@/components/ui/Section";
import { SENA_PAGE } from "@/lib/site";

const title = "Sena — your AI skin companion";
const description = "Sena is the AI agent that looks after your skin — on WhatsApp and in store. Share a photo, get an analysis, and receive a plan approved by a licensed dermatologist. Guidance, not a medical diagnosis.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/sena" },
  openGraph: { title, description, url: "/sena" },
  twitter: { title, description },
};

export default function SenaPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          kicker={SENA_PAGE.kicker}
          heading={SENA_PAGE.h1}
          sub={SENA_PAGE.sub}
          photo={{ src: "/images/portrait-studio-front.webp", alt: "A woman with calm, healthy skin in soft studio light", position: "50% 42%" }}
        />
        <Section tight className="section--mist">
          <FeatureGrid items={SENA_PAGE.features} icons={["globe", "camera", "badge"]} />
          <p className="feature-caption" style={{ textAlign: "center", marginTop: 28 }}>{SENA_PAGE.disclaimer}</p>
        </Section>
        <Closer heading="Your skin, finally understood." cta={SENA_PAGE.cta} />
      </main>
      <Footer />
    </>
  );
}
