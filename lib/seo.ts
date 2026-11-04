import type { Metadata } from "next";

/**
 * Next.js replaces a parent's `openGraph` / `twitter` objects outright when a
 * page sets its own, so every page that overrides them must spread these in or
 * it silently loses the share image, site name and card type.
 */
export const OG_BASE = {
  type: "website",
  siteName: "veyderm",
  locale: "en_US",
  images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "veyderm — AI dermatology platform, built in the UAE." }],
} satisfies Metadata["openGraph"];

export const TWITTER_BASE = {
  card: "summary_large_image",
  images: ["/og-image.png"],
} satisfies Metadata["twitter"];
