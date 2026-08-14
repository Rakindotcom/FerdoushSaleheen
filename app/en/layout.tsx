import type { Metadata } from "next";

import { SiteDocument } from "@/components/site-document";
import { getSiteUrl, siteDescription, siteName } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: getSiteUrl(),
  title: {
    default: `${siteName.en} | Official Digital Platform`,
    template: `%s | ${siteName.en}`,
  },
  description: siteDescription.en,
  applicationName: siteName.en,
  authors: [{ name: siteName.en, url: "/en/about" }],
  creator: siteName.en,
  publisher: siteName.en,
  category: "Education, books, podcasts, and Islamic reflection",
  alternates: {
    canonical: "/en",
    languages: { "bn-BD": "/", en: "/en", "x-default": "/" },
  },
  openGraph: {
    title: siteName.en,
    description: siteDescription.en,
    url: "/en",
    siteName: siteName.en,
    locale: "en_US",
    alternateLocale: ["bn_BD"],
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: `${siteName.en} official digital platform` }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName.en,
    description: siteDescription.en,
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

export default function EnglishRootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <SiteDocument language="en">{children}</SiteDocument>;
}
