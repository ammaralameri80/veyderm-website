import type { Metadata } from "next";
import { Nav } from "@/components/ui/Nav";
import { Footer } from "@/components/ui/Footer";
import { PageHero, FeatureGrid, Closer } from "@/components/ui/PageParts";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { DeviceFrame, ProScreen } from "@/components/home/Screens";
import { PRO_PAGE } from "@/lib/site";

const title = "veyderm Pro — the professional platform for dermatologists";
const description = "AI prepares every consultation. veyderm Pro drafts treatment plans, matches authorized products, and carries secure patient communication. You stay in control.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/professional" },
  openGraph: { title, description, url: "/professional" },
  twitter: { title, description },
};

export default function ProfessionalPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero kicker={PRO_PAGE.kicker} heading={PRO_PAGE.h1} sub={PRO_PAGE.sub} />
        <Section tight>
          <Reveal>
            <div style={{ maxWidth: 760, marginInline: "auto" }}>
              <DeviceFrame><ProScreen /></DeviceFrame>
            </div>
          </Reveal>
        </Section>
        <Section tight>
          <FeatureGrid items={PRO_PAGE.features} icons={["sparkles", "package", "message", "sun"]} />
        </Section>
        <Closer heading="Bring AI-prepared consultations to your clinic." cta={PRO_PAGE.cta} />
      </main>
      <Footer />
    </>
  );
}
