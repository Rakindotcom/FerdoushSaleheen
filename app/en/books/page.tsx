import type { Metadata } from "next";

import { BooksHero } from "@/components/heroes/books-hero";
import { InnerPage } from "@/components/inner-page";
import { PublicationsCatalog } from "@/components/publications-catalog";
import { createBreadcrumbJsonLd, StructuredData } from "@/components/structured-data";
import { bookPurchaseUrl } from "@/lib/podcast-data";
import { sustainableSupplyChainBook } from "@/lib/publication-data";
import { absoluteUrl, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  locale: "en",
  title: "Books and Publications",
  description: "Explore Dr. Ferdoush Saleheen’s academic supply-chain publication and his separate work of Dawah and Qur’anic reflection.",
  banglaPath: "/books",
  englishPath: "/en/books",
  image: sustainableSupplyChainBook.cover,
});

const supplyChainBookJsonLd = {
  "@context": "https://schema.org",
  "@type": "Book",
  "@id": `${absoluteUrl("/en/books")}#supply-chain-publication`,
  name: sustainableSupplyChainBook.title,
  alternateName: `${sustainableSupplyChainBook.title}: ${sustainableSupplyChainBook.subtitle}`,
  description: "An industry-driven professional and academic volume on resilient and sustainable supply-chain management.",
  url: `${absoluteUrl("/en/books")}#supply-chain-publication`,
  image: absoluteUrl(sustainableSupplyChainBook.cover),
  inLanguage: "en",
  isbn: sustainableSupplyChainBook.isbn13,
  editor: sustainableSupplyChainBook.editors.map((name) => ({ "@type": "Person", name })),
  publisher: { "@type": "Organization", name: "CRC Press · Taylor & Francis Group" },
  genre: ["Supply chain management", "Sustainability", "Business and management"],
  sameAs: sustainableSupplyChainBook.purchaseLinks.map(({ href }) => href),
};

const dawahBookJsonLd = {
  "@context": "https://schema.org",
  "@type": "Book",
  "@id": `${absoluteUrl("/en/books")}#dawah-publication`,
  name: "Surah Al-Fatihah: The Seven Verses",
  alternateName: "সুরা আল-ফাতিহা: সাতটি আয়াত",
  description: "A Bangla reflection on Surah Al-Fatihah through gratitude, worship, guidance, accountability, and life.",
  url: `${absoluteUrl("/en/books")}#dawah-publication`,
  image: absoluteUrl("/bookImage.webp"),
  inLanguage: "bn-BD",
  author: { "@id": `${absoluteUrl()}#person` },
  genre: ["Islamic literature", "Qur'anic reflection"],
  sameAs: [bookPurchaseUrl],
};

export default function EnglishBooksPage() {
  return (
    <InnerPage
      locale="en"
      hero={<BooksHero locale="en" />}
    >
      <StructuredData data={[supplyChainBookJsonLd, dawahBookJsonLd, createBreadcrumbJsonLd([{ name: "Home", path: "/en" }, { name: "Books and Publications", path: "/en/books" }])]} />
      <PublicationsCatalog locale="en" />
    </InnerPage>
  );
}
