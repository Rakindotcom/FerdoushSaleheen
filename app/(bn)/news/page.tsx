import type { Metadata } from "next";

import { NewsHero } from "@/components/heroes/cohesive/news-hero";
import { InnerPage } from "@/components/inner-page";
import { NewsIndex } from "@/components/news-index";
import { createBreadcrumbJsonLd, StructuredData } from "@/components/structured-data";
import { newsItems } from "@/lib/news-data";
import { absoluteUrl, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  locale: "bn",
  title: "সংবাদ ও গণমাধ্যম",
  description: "ড. ফেরদৌস সালেহীনের সাপ্লাই চেইন নেতৃত্ব ও গবেষণাসংশ্লিষ্ট সংবাদ, মতামত নিবন্ধ এবং অফিসিয়াল প্রকাশনার আপডেট।",
  banglaPath: "/news",
  englishPath: "/en/news",
  image: "/news/gulf-news-dr-saleheen.webp",
});

const newsCollectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${absoluteUrl("/news")}#news`,
  url: absoluteUrl("/news"),
  name: "সংবাদ ও গণমাধ্যম — ড. ফেরদৌস সালেহীন",
  inLanguage: "bn-BD",
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

export default function NewsPage() {
  return (
    <InnerPage
      locale="bn"
      hero={<NewsHero locale="bn" />}
    >
      <StructuredData data={[newsCollectionJsonLd, createBreadcrumbJsonLd([{ name: "হোমপেজ", path: "/" }, { name: "সংবাদ ও গণমাধ্যম", path: "/news" }])]} />
      <NewsIndex locale="bn" />
    </InnerPage>
  );
}
