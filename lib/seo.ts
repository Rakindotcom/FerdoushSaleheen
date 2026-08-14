import type { Metadata } from "next";

const FALLBACK_SITE_URL = "https://ferdoushsaleheen.com";

function withProtocol(value: string) {
  return /^https?:\/\//i.test(value) ? value : `https://${value}`;
}

export function getSiteUrl() {
  const configuredUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.SITE_URL ??
    process.env.VERCEL_PROJECT_PRODUCTION_URL ??
    process.env.VERCEL_URL ??
    process.env.CF_PAGES_URL ??
    (process.env.NETLIFY === "true" ? process.env.URL : undefined) ??
    process.env.RENDER_EXTERNAL_URL;

  return new URL(withProtocol(configuredUrl ?? FALLBACK_SITE_URL));
}

export function absoluteUrl(path = "/") {
  return new URL(path, getSiteUrl()).toString();
}

export const siteName = {
  bn: "ড. ফেরদৌস সালেহীন",
  en: "Dr. Ferdoush Saleheen",
} as const;

export const siteDescription = {
  bn: "ড. ফেরদৌস সালেহীনের পেশাগত পরিচিতি, বই, বাংলা অডিওবুক, পডকাস্ট, গবেষণা ও কুরআনিক অনুধ্যানের অফিসিয়াল ডিজিটাল প্ল্যাটফর্ম।",
  en: "The official digital platform of Dr. Ferdoush Saleheen—academic, supply chain leader, researcher, author, and speaker—featuring his profile, books, audiobook, and podcasts.",
} as const;

export function languageAlternates(banglaPath: string, englishPath: string) {
  return {
    "bn-BD": banglaPath,
    en: englishPath,
    "x-default": banglaPath,
  };
}

export function createPageMetadata({
  locale,
  title,
  siteNameFirst = false,
  description,
  banglaPath,
  englishPath,
  image = "/opengraph-image",
  noIndex = false,
}: {
  locale: "bn" | "en";
  title: string;
  siteNameFirst?: boolean;
  description: string;
  banglaPath: string;
  englishPath: string;
  image?: string;
  noIndex?: boolean;
}): Metadata {
  const canonical = locale === "bn" ? banglaPath : englishPath;
  const fullTitle = siteNameFirst
    ? `${siteName[locale]} | ${title}`
    : `${title} | ${siteName[locale]}`;

  return {
    title: { absolute: fullTitle },
    description,
    alternates: {
      canonical,
      languages: languageAlternates(banglaPath, englishPath),
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      siteName: siteName.en,
      locale: locale === "bn" ? "bn_BD" : "en_US",
      alternateLocale: [locale === "bn" ? "en_US" : "bn_BD"],
      type: "website",
      images: [{ url: image, alt: fullTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
    robots: noIndex ? { index: false, follow: true } : undefined,
  };
}
