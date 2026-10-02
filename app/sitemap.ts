import type { MetadataRoute } from "next";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.veyderm.com").replace(/\/$/, "");

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
      alternates: { languages: { en: siteUrl, ar: `${siteUrl}/ar` } },
    },
    {
      url: `${siteUrl}/ar`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: { languages: { en: siteUrl, ar: `${siteUrl}/ar` } },
    },
    { url: `${siteUrl}/privacy`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteUrl}/terms`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];
}
