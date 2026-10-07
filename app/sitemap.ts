import type { MetadataRoute } from "next";
import { ENABLE_ARABIC } from "@/lib/content";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.veyderm.com").replace(/\/$/, "");

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const languages = ENABLE_ARABIC ? { en: siteUrl, ar: `${siteUrl}/ar` } : undefined;

  const entries: MetadataRoute.Sitemap = [
    { url: siteUrl, lastModified, changeFrequency: "weekly", priority: 1, alternates: languages ? { languages } : undefined },
    { url: `${siteUrl}/pro`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteUrl}/sena`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteUrl}/privacy`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteUrl}/terms`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];

  if (ENABLE_ARABIC) {
    entries.push({
      url: `${siteUrl}/ar`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: { languages: { en: siteUrl, ar: `${siteUrl}/ar` } },
    });
  }

  return entries;
}
