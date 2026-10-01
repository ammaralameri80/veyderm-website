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
import { CtaForm } from "@/components/CtaForm";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
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
        <CtaForm />
      </main>
      <Footer />
    </>
  );
}
