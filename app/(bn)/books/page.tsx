import type { Metadata } from "next";
import { absoluteUrl, createPageMetadata } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import { Headphones, ShoppingBag } from "lucide-react";

import { InnerPage, SectionHeading } from "@/components/inner-page";
import { createBreadcrumbJsonLd, StructuredData } from "@/components/structured-data";
import { Button } from "@/components/ui/button";
import { bookPurchaseUrl } from "@/lib/podcast-data";

export const metadata: Metadata = createPageMetadata({
  locale: "bn",
  title: "বই ও প্রকাশনা",
  description: "ড. ফেরদৌস সালেহীনের ‘সুরা আল-ফাতিহা: সাতটি আয়াত’ বইয়ের বিষয়বস্তু, পাঠভাবনা, অডিওবুক ও ক্রয়ের তথ্য জানুন।",
  banglaPath: "/books",
  englishPath: "/en/books",
  image: "/bookImage.png",
});

const bookJsonLd = {
  "@context": "https://schema.org",
  "@type": "Book",
  "@id": `${absoluteUrl("/books")}#book`,
  name: "সুরা আল-ফাতিহা: সাতটি আয়াত",
  alternateName: "Surah Al-Fatihah: The Seven Verses",
  description: "সুরা আল-ফাতিহার সাতটি আয়াতকে কৃতজ্ঞতা, ইবাদত, হেদায়াত, জবাবদিহি ও জীবনের আলোকে অনুধ্যানের একটি বাংলা বই।",
  url: absoluteUrl("/books"),
  image: absoluteUrl("/bookImage.png"),
  inLanguage: "bn-BD",
  author: { "@id": `${absoluteUrl()}#person` },
  genre: ["Islamic literature", "Qur'anic reflection"],
  sameAs: [bookPurchaseUrl],
};

export default function BooksPage() {
  return (
    <InnerPage eyebrow="বইয়ের পাতায় ভাবনার শুরু" title={<>ড. ফেরদৌস সালেহীনের <span className="gold-text">বই ও প্রকাশনা</span></>} description="প্রতিটি বই একটি স্বতন্ত্র পাঠযাত্রা। তার সঙ্গে যুক্ত অডিও, অনুধ্যান, ভিডিও ও আলোচনার আরও বিস্তৃত জগৎ।">
      <StructuredData data={[bookJsonLd, createBreadcrumbJsonLd([{ name: "হোমপেজ", path: "/" }, { name: "বই ও প্রকাশনা", path: "/books" }])]} />
      <section className="py-24 md:py-32">
        <div className="page-shell">
          <SectionHeading eyebrow="প্রকাশিত বই" description="ড. ফেরদৌস সালেহীনের প্রকাশিত বই।">সুরা আল-ফাতিহা:<br /><span className="gold-text">সাতটি আয়াত</span></SectionHeading>
          <article className="grid overflow-hidden rounded-[2rem] border border-[#d6a642]/20 bg-[#0d0c0a] lg:grid-cols-[.85fr_1.15fr]">
            <div className="relative min-h-[34rem] bg-[radial-gradient(circle_at_center,rgba(214,166,66,.14),transparent_60%)]">
              <Image src="/bookImage.png" alt="সুরা আল-ফাতিহা: সাতটি আয়াত বইয়ের প্রচ্ছদ" fill sizes="(max-width: 1024px) 100vw, 42vw" className="object-contain p-10 drop-shadow-[0_30px_45px_rgba(0,0,0,.7)] md:p-16" priority />
            </div>
            <div className="flex flex-col justify-center border-t border-white/10 p-7 md:p-12 lg:border-l lg:border-t-0">
              <span className="text-xs font-semibold tracking-[0.13em] text-[#d6a642]">তাফসির ও জীবনের প্রতিফলন</span>
              <h2 className="mt-5 text-balance text-4xl font-medium leading-tight text-white md:text-6xl">যা আমার দৃষ্টিভঙ্গি এবং জীবন বদলে দিয়েছে</h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-[#99958c]">প্রতিদিনের সালাতে ফিরে আসা সাতটি আয়াত। কৃতজ্ঞতা, রবের পরিচয়, জবাবদিহি, ইবাদত ও হেদায়াতের আলোকে জীবনকে নতুন করে দেখার একটি সহজপাঠ্য অনুধ্যান।</p>
              <div className="mt-7 flex flex-wrap gap-2">{["জীবন", "ইবাদত", "আল-ফাতিহা", "হেদায়াত", "পরকাল"].map((tag) => <span key={tag} className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-[#aaa69c]">{tag}</span>)}</div>
              <dl className="mt-8 grid grid-cols-2 gap-5 border-y border-white/[0.08] py-6 text-sm sm:grid-cols-3"><div><dt className="text-[#68655f]">ভাষা</dt><dd className="mt-1 text-white">বাংলা</dd></div><div><dt className="text-[#68655f]">ফরম্যাট</dt><dd className="mt-1 text-white">হার্ডকভার</dd></div><div><dt className="text-[#68655f]">অবস্থা</dt><dd className="mt-1 text-[#e2b75b]">প্রকাশিত</dd></div></dl>
              <div id="order" className="mt-8 flex flex-wrap gap-3"><Button asChild size="lg"><Link href={bookPurchaseUrl} target="_blank" rel="noreferrer"><ShoppingBag className="size-4" /> রকমারি থেকে কিনুন</Link></Button><Button asChild size="lg" variant="outline"><Link href="/audiobooks"><Headphones className="size-4" /> অডিওবুক শুনুন</Link></Button></div>
            </div>
          </article>
        </div>
      </section>
    </InnerPage>
  );
}
