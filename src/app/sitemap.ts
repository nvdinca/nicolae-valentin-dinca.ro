import type { MetadataRoute } from "next";

const BASE_URL = "https://nicolae-valentin-dinca.ro";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  return [
    {
      url: BASE_URL + "/",
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: BASE_URL + "/about",
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: BASE_URL + "/services",
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: BASE_URL + "/work",
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: BASE_URL + "/process",
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: BASE_URL + "/faq",
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: BASE_URL + "/contact",
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: BASE_URL + "/privacy",
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.4,
    },
    {
      url: BASE_URL + "/termeni",
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.4,
    },
  ];
}

