import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.veyderm.com";
const isProduction = siteUrl.replace(/\/$/, "") === "https://www.veyderm.com";

export default function robots(): MetadataRoute.Robots {
  // On preview / dev domains, disallow all crawling so the review environment
  // is never indexed. Only the production canonical is crawlable.
  if (!isProduction) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
