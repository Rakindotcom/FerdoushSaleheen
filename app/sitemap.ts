import type { MetadataRoute } from "next";

import { getSiteUrl, languageAlternates } from "@/lib/seo";

const routes = [
  { bn: "/", en: "/en", changeFrequency: "weekly", priority: 1 },
  { bn: "/about", en: "/en/about", changeFrequency: "monthly", priority: 0.9 },
  { bn: "/books", en: "/en/books", changeFrequency: "monthly", priority: 0.9 },
  { bn: "/audiobooks", en: "/en/audiobooks", changeFrequency: "monthly", priority: 0.8 },
  { bn: "/podcast", en: "/en/podcast", changeFrequency: "weekly", priority: 0.8 },
  { bn: "/videos", en: "/en/videos", changeFrequency: "weekly", priority: 0.8 },
] as const;

const contentLastModified = new Date("2026-08-15T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();

  return routes.flatMap(({ bn, en, changeFrequency, priority }) => {
    const languages = Object.fromEntries(
      Object.entries(languageAlternates(bn, en)).map(([language, path]) => [
        language,
        new URL(path, baseUrl).toString(),
      ]),
    );

    return [bn, en].map((path) => ({
      url: new URL(path, baseUrl).toString(),
      lastModified: contentLastModified,
      changeFrequency,
      priority,
      alternates: { languages },
    }));
  });
}
