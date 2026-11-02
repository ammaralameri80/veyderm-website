import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";
import { ConsentBanner } from "@/components/ConsentBanner";
import { content, isLang, type Lang } from "@/lib/content";

// Self-hosted at build time (no runtime font requests). Plus Jakarta Sans is
// the one typeface site-wide — UI, headings, body.
const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.veyderm.com";
// Only the production canonical should be indexable — preview / dev domains stay
// noindex so the review environment is never indexed.
const isProduction = siteUrl.replace(/\/$/, "") === "https://www.veyderm.com";

const title = "veyderm — AI dermatology platform, built in the UAE";
const description =
  "veyderm is an AI dermatology platform built in the UAE. AI supports every step of dermatology — from case assessment and product intelligence to treatment planning and patient care — with the dermatologist always in control.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: "%s — veyderm" },
  description,
  applicationName: "veyderm",
  keywords: ["dermatology", "AI dermatology", "UAE", "dermatologists", "treatment plans", "dermocosmetics", "skin care", "Dubai"],
  authors: [{ name: "veyderm" }],
  creator: "veyderm",
  publisher: "veyderm",
  // Bing Webmaster Tools site verification (msvalidate.01). Keep this even
  // after verification succeeds — removing it un-verifies the site.
  verification: { other: { "msvalidate.01": "78CC9730E6E267F1C2D87A48B31F89CC" } },
  robots: isProduction
    ? {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
      }
    : { index: false, follow: false, googleBot: { index: false, follow: false } },
  icons: {
    // Solid white tile + ink "vd" (matches the social avatars). Google's search
    // favicon wants a square icon whose size is a multiple of 48px.
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/favicon-96.png", type: "image/png", sizes: "96x96" },
      { url: "/favicon-48.png", type: "image/png", sizes: "48x48" },
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
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "veyderm — AI dermatology platform, built in the UAE." }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/og-image.png"] },
  category: "health",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#ffffff",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = (await headers()).get("x-pathname") || "";
  const seg = pathname.split("/")[1];
  const lang: Lang = isLang(seg) ? seg : "en";
  const dir = content[lang].dir;

  return (
    <html lang={content[lang].htmlLang} dir={dir} className={sans.variable}>
      <body>
        <a className="skip" href="#top">Skip to content</a>
        {children}
        <ConsentBanner lang={lang} />
      </body>
    </html>
  );
}
