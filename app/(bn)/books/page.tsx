import type { Metadata } from "next";

import { BooksHero } from "@/components/heroes/books-hero";
import { InnerPage } from "@/components/inner-page";
import { PublicationsCatalog } from "@/components/publications-catalog";
import { createBreadcrumbJsonLd, StructuredData } from "@/components/structured-data";
import { bookPurchaseUrl } from "@/lib/podcast-data";
import { sustainableSupplyChainBook } from "@/lib/publication-data";
import { absoluteUrl, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  locale: "bn",
  title: "বই ও প্রকাশনা",
  description: "ড. ফেরদৌস সালেহীনের সাপ্লাই চেইনবিষয়ক একাডেমিক প্রকাশনা এবং পৃথক দাওয়াহ ও কুরআনিক অনুধ্যানগ্রন্থ দেখুন।",
  banglaPath: "/books",
  englishPath: "/en/books",
  image: sustainableSupplyChainBook.cover,
});

const supplyChainBookJsonLd = {
  "@context": "https://schema.org",
  "@type": "Book",
  "@id": `${absoluteUrl("/books")}#supply-chain-publication`,
  name: sustainableSupplyChainBook.title,
  alternateName: `${sustainableSupplyChainBook.title}: ${sustainableSupplyChainBook.subtitle}`,
  description: "স্থিতিস্থাপক ও টেকসই সাপ্লাই চেইন ম্যানেজমেন্ট নিয়ে শিল্প-অভিজ্ঞতাভিত্তিক পেশাগত ও একাডেমিক গ্রন্থ।",
  url: `${absoluteUrl("/books")}#supply-chain-publication`,
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
  "@id": `${absoluteUrl("/books")}#dawah-publication`,
  name: "সুরা আল-ফাতিহা: সাতটি আয়াত",
  alternateName: "Surah Al-Fatihah: The Seven Verses",
  description: "সুরা আল-ফাতিহার সাতটি আয়াতকে কৃতজ্ঞতা, ইবাদত, হেদায়াত, জবাবদিহি ও জীবনের আলোকে অনুধ্যানের একটি বাংলা বই।",
  url: `${absoluteUrl("/books")}#dawah-publication`,
  image: absoluteUrl("/bookImage.webp"),
  inLanguage: "bn-BD",
  author: { "@id": `${absoluteUrl()}#person` },
  genre: ["Islamic literature", "Qur'anic reflection"],
  sameAs: [bookPurchaseUrl],
};

export default function BooksPage() {
  return (
    <InnerPage
      locale="bn"
      hero={<BooksHero locale="bn" />}
    >
      <StructuredData data={[supplyChainBookJsonLd, dawahBookJsonLd, createBreadcrumbJsonLd([{ name: "হোমপেজ", path: "/" }, { name: "বই ও প্রকাশনা", path: "/books" }])]} />
      <PublicationsCatalog locale="bn" />
    </InnerPage>
  );
}
