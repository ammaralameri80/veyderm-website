import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SenaWorld } from "@/components/home/SenaWorld";
import { SafetyStatement } from "@/components/home/SafetyStatement";
import { Faq } from "@/components/Faq";
import { CtaForm } from "@/components/CtaForm";
import { SiteFooter } from "@/components/SiteFooter";
import { senaFaq } from "@/lib/content";

const title = "Sena — your skin, finally understood";
const description =
  "Sena is veyderm's AI skin assistant. Chat, share a photo or video, get your SkinPrint, see your options, and book a dermatologist. Sena provides AI guidance, not a medical diagnosis.";

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
      <SiteHeader />
      <main id="top">
        <SenaWorld />
        <SafetyStatement />
        <Faq items={senaFaq} tag="FAQ · Sena" title="Good to know." />
        <CtaForm lang="en" />
      </main>
      <SiteFooter />
    </>
  );
}
