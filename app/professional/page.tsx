import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { ProWorld } from "@/components/home/ProWorld";
import { SafetyStatement } from "@/components/home/SafetyStatement";
import { Faq } from "@/components/Faq";
import { CtaForm } from "@/components/CtaForm";
import { SiteFooter } from "@/components/SiteFooter";
import { proFaq } from "@/lib/content";

const title = "veyderm Professional — prescribe with precision";
const description =
  "veyderm Professional turns each patient into a SkinPrint and a Tailored Plan — Evidence Match, SafeCheck and one-click ordering. AI prepares; the dermatologist reviews, adjusts and signs.";

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
      <SiteHeader />
      <main id="top">
        <ProWorld />
        <SafetyStatement />
        <Faq items={proFaq} tag="Common questions" title="For dermatology teams." />
        <CtaForm lang="en" />
      </main>
      <SiteFooter />
    </>
  );
}
