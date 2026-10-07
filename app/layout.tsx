import type { Metadata, Viewport } from "next";
import { Fraunces, Hanken_Grotesk, IBM_Plex_Sans_Arabic } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";
import { ConsentBanner } from "@/components/ConsentBanner";
import { content, isLang, type Lang } from "@/lib/content";

// Self-hosted at build time (no external runtime font requests).
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-hanken",
  display: "swap",
});

const plexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex-arabic",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.veyderm.com";
// Only the production canonical should be indexable — preview / dev domains stay
// noindex so the review environment is never indexed.
const isProduction = siteUrl.replace(/\/$/, "") === "https://www.veyderm.com";

const title = "veyderm — AI Dermatology for the UAE";
const description =
  "veyderm helps licensed dermatologists build evidence-based treatment plans, surface clinically verified products, and deliver personalized care — in minutes. An AI-powered dermatology platform built for the UAE.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: "%s — veyderm" },
  description,
  applicationName: "veyderm",
  keywords: ["dermatology", "AI dermatology", "UAE", "dermatologists", "treatment plans", "dermocosmetics", "skin care", "Dubai"],
  authors: [{ name: "veyderm" }],
  creator: "veyderm",
  publisher: "veyderm",
  alternates: { canonical: "/" },
  robots: isProduction
    ? {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
      }
    : { index: false, follow: false, googleBot: { index: false, follow: false } },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: [{ url: "/apple-touch-icon-180.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    siteName: "veyderm",
    title,
    description,
    url: siteUrl,
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "veyderm — AI dermatology, doctor-led." }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/og-image.png"] },
  category: "health",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#6C65C2",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = (await headers()).get("x-pathname") || "";
  const seg = pathname.split("/")[1];
  const lang: Lang = isLang(seg) ? seg : "en";
  const dir = content[lang].dir;

  return (
    <html
      lang={content[lang].htmlLang}
      dir={dir}
      className={`${fraunces.variable} ${hanken.variable} ${plexArabic.variable}`}
    >
      <body>
        {children}
        <ConsentBanner lang={lang} />
      </body>
    </html>
  );
}
