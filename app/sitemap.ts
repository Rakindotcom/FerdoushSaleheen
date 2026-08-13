import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const banglaRoutes = ["", "/about", "/books", "/podcast", "/audiobooks", "/privacy", "/terms"];
  const routes = [...banglaRoutes, ...banglaRoutes.map((route) => `/en${route}`)];
  return routes.map((route, index) => ({
    url: `${baseUrl}${route}`,
    changeFrequency: index === 0 ? "weekly" : "monthly",
    priority: index === 0 ? 1 : 0.8,
  }));
}
