import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const routes = ["", "/about", "/books", "/podcast", "/audiobooks", "/reflections", "/videos", "/events", "/resources", "/contact", "/privacy", "/terms"];
  return routes.map((route, index) => ({
    url: `${baseUrl}${route}`,
    changeFrequency: index === 0 ? "weekly" : "monthly",
    priority: index === 0 ? 1 : 0.8,
  }));
}
