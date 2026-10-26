import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Instrument_Serif } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";
import { ConsentBanner } from "@/components/ConsentBanner";
import { content, isLang, type Lang } from "@/lib/content";

// Exactly two families, self-hosted at build time (no runtime font requests).
// Plus Jakarta Sans carries the whole site — UI, headings, body. Instrument
// Serif (italic) is reserved for the accent phrase inside a headline.
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.veyderm.com";
// Only the production canonical should be indexable — preview / dev domains stay
// noindex so the review environment is never indexed.
const isProduction = siteUrl.replace(/\/$/, "") === "https://www.veyderm.com";

const title = "veyderm — the UAE's first AI platform for dermatology";
const description =
  "veyderm is the UAE's first AI platform for dermatology. AI prepares every recommendation; a licensed dermatologist approves it. Built in the UAE.";

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
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "veyderm — the UAE's first AI platform for dermatology." }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/og-image.png"] },
  category: "health",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#faf9f6",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = (await headers()).get("x-pathname") || "";
  const seg = pathname.split("/")[1];
  const lang: Lang = isLang(seg) ? seg : "en";
  const dir = content[lang].dir;

  return (
    <html lang={content[lang].htmlLang} dir={dir} className={`${jakarta.variable} ${instrument.variable}`}>
      <body>
        <a className="skip" href="#top">Skip to content</a>
        {children}
        <ConsentBanner lang={lang} />
      </body>
    </html>
  );
}
