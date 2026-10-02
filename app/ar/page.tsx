import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

const title = "Veyderm — أمراض جلدية بالذكاء الاصطناعي في الإمارات";
const description =
  "Veyderm يساعد أطباء الجلدية المرخّصين في الإمارات على بناء خطط علاجية قائمة على الأدلّة، والتوصية بمنتجات موثّقة، والبقاء على تواصل مع المرضى عبر واتساب. منصّة أمراض جلدية مدعومة بالذكاء الاصطناعي مبنيّة لدولة الإمارات.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/ar",
    languages: { en: "/", ar: "/ar", "x-default": "/" },
  },
  openGraph: {
    title,
    description,
    locale: "ar_AE",
    url: "/ar",
  },
  twitter: { title, description },
};

export default function ArabicHome() {
  return <PageShell lang="ar" />;
}
