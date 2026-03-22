import type { MetadataRoute } from "next";

const BASE_URL = "https://nicolae-valentin-dinca.ro";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    host: BASE_URL,
    sitemap: BASE_URL + "/sitemap.xml",
  };
}

