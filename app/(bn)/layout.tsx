import type { Metadata } from "next";

import { SiteDocument } from "@/components/site-document";
import { getSiteUrl, siteDescription, siteName } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: getSiteUrl(),
  title: {
    default: `${siteName.bn} | অফিসিয়াল ডিজিটাল প্ল্যাটফর্ম`,
    template: `%s | ${siteName.bn}`,
  },
  description: siteDescription.bn,
  applicationName: siteName.bn,
  authors: [{ name: siteName.en, url: "/about" }],
  creator: siteName.en,
  publisher: siteName.en,
  icons: { icon: [{ url: "/icon.webp", type: "image/webp" }] },
  category: "Education, books, podcasts, and Islamic reflection",
  keywords: [
    "ফেরদৌস সালেহীন",
    "Ferdoush Saleheen",
    "সুরা আল-ফাতিহা",
    "সুরা আল-ফাতিহা সাতটি আয়াত",
    "বাংলা ইসলামিক বই",
    "বাংলা অডিওবুক",
    "কুরআনিক অনুধ্যান",
    "সাপ্লাই চেইন বিশেষজ্ঞ",
    "supply chain management",
  ],
  alternates: {
    canonical: "/",
    languages: { "bn-BD": "/", en: "/en", "x-default": "/" },
  },
  openGraph: {
    title: siteName.bn,
    description: siteDescription.bn,
    url: "/",
    siteName: siteName.en,
    locale: "bn_BD",
    alternateLocale: ["en_US"],
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: `${siteName.en} official digital platform` }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName.bn,
    description: siteDescription.bn,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  referrer: "origin-when-cross-origin",
};

export default function BanglaRootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <SiteDocument language="bn">{children}</SiteDocument>;
}
