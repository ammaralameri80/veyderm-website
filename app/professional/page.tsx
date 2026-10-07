import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { ProWorld } from "@/components/home/ProWorld";
import { SafetyStatement } from "@/components/home/SafetyStatement";
import { Faq } from "@/components/Faq";
import { CtaForm } from "@/components/CtaForm";
import { SiteFooter } from "@/components/SiteFooter";
import { proFaq } from "@/lib/content";

const title = "veyderm Professional — AI co-pilot for dermatology";
const description =
  "veyderm Professional gives dermatologists, clinics and aesthetic doctors AI-assisted case assessment, product and safety intelligence, and treatment planning. AI suggests; the doctor decides.";

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
        <Faq items={proFaq} tag="FAQ · Professional" title="For dermatology teams." />
        <CtaForm lang="en" />
      </main>
      <SiteFooter />
    </>
  );
}
