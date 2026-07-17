import type { MetadataRoute } from "next";
import { getAllSlugs } from "@/lib/articles";

export const dynamic = "force-static";

const BASE = "https://co2.ug";

export default function sitemap(): MetadataRoute.Sitemap {
  const slugs = getAllSlugs();
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [
    { url: `${BASE}/en`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${BASE}/en/insights`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
  ];
  for (const slug of slugs) {
    entries.push({
      url: `${BASE}/en/insights/${slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }
  return entries;
}
