import type { Metadata, Viewport } from "next";
import { Archivo, Geist, Geist_Mono, IBM_Plex_Sans_Arabic } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";
import { ConsentBanner } from "@/components/ConsentBanner";
import { content, isLang, type Lang } from "@/lib/content";

// Self-hosted at build time (no external runtime font requests).
// Archivo carries all marketing voice: its width axis gives condensed display
// headlines (pharma-label feel) and normal-width body from one family. Geist +
// Geist Mono stay confined to the simulated product UIs.
const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-geist-mono",
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

const title = "veyderm — the intelligence layer for dermatology";
const description =
  "veyderm turns each patient's skin into a SkinPrint, then builds a Tailored Plan their dermatologist approves. AI prepares; dermatologists decide. Built in the UAE.";

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
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "veyderm — the intelligence layer for dermatology." }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/og-image.png"] },
  category: "health",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#FFFFFF",
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
      className={`${archivo.variable} ${geist.variable} ${geistMono.variable} ${plexArabic.variable}`}
    >
      <body>
        {children}
        <ConsentBanner lang={lang} />
      </body>
    </html>
  );
}
