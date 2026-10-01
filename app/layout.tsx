import type { Metadata, Viewport } from "next";
import { Fraunces, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { ConsentBanner } from "@/components/ConsentBanner";

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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.veyderm.com";
const title = "Veyderm — AI Dermatology for the UAE";
const description =
  "Veyderm helps licensed dermatologists build evidence-based treatment plans, surface clinically verified products, and deliver personalized care — in minutes. An AI-powered dermatology platform built for the UAE.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s — Veyderm",
  },
  description,
  applicationName: "Veyderm",
  keywords: [
    "dermatology",
    "AI dermatology",
    "UAE",
    "dermatologists",
    "treatment plans",
    "dermocosmetics",
    "skin care",
    "Dubai",
  ],
  authors: [{ name: "Veyderm" }],
  creator: "Veyderm",
  publisher: "Veyderm",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
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
    siteName: "Veyderm",
    title,
    description,
    url: siteUrl,
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Veyderm — AI dermatology, doctor-led.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"],
  },
  category: "health",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#6C65C2",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${hanken.variable}`}>
      <body>
        {children}
        <ConsentBanner />
      </body>
    </html>
  );
}
