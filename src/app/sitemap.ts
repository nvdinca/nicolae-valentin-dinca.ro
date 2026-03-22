import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { SITE_ORIGIN } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const staticEntries: MetadataRoute.Sitemap = [
    {
      url: SITE_ORIGIN + "/",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: SITE_ORIGIN + "/about",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: SITE_ORIGIN + "/services",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: SITE_ORIGIN + "/work",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: SITE_ORIGIN + "/process",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: SITE_ORIGIN + "/faq",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: SITE_ORIGIN + "/contact",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: SITE_ORIGIN + "/privacy",
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: SITE_ORIGIN + "/termeni",
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ];

  const workProjectEntries: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${SITE_ORIGIN}/work/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.65,
  }));

  return [...staticEntries, ...workProjectEntries];
}
