import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { ENABLE_ARABIC } from "@/lib/content";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
    languages: ENABLE_ARABIC ? { en: "/", ar: "/ar", "x-default": "/" } : undefined,
  },
};

export default function Home() {
  return <PageShell lang="en" />;
}
