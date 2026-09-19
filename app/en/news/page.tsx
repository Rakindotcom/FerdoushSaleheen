import type { Metadata } from "next";

import { NewsHero } from "@/components/heroes/cohesive/news-hero";
import { InnerPage } from "@/components/inner-page";
import { NewsIndex } from "@/components/news-index";
import { createBreadcrumbJsonLd, StructuredData } from "@/components/structured-data";
import { newsItems } from "@/lib/news-data";
import { absoluteUrl, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  locale: "en",
  title: "News and Media",
  description: "Media coverage, opinion articles, and official publication news related to Dr. Ferdoush Saleheen’s supply-chain leadership and scholarship.",
  banglaPath: "/news",
  englishPath: "/en/news",
  image: "/news/gulf-news-dr-saleheen.jpg",
});

const newsCollectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${absoluteUrl("/en/news")}#news`,
  url: absoluteUrl("/en/news"),
  name: "News and Media — Dr. Ferdoush Saleheen",
  inLanguage: "en",
  about: { "@id": `${absoluteUrl()}#person` },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: newsItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.title,
      url: item.href,
    })),
  },
};

export default function EnglishNewsPage() {
  return (
    <InnerPage
      locale="en"
      hero={<NewsHero locale="en" />}
    >
      <StructuredData data={[newsCollectionJsonLd, createBreadcrumbJsonLd([{ name: "Home", path: "/en" }, { name: "News and Media", path: "/en/news" }])]} />
      <NewsIndex locale="en" />
    </InnerPage>
  );
}
