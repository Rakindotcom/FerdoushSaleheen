import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, BookOpen, ExternalLink, Globe, Headphones, Layers, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { SiteLocale } from "@/lib/locale";
import { localizePath } from "@/lib/locale";
import { bookPurchaseUrl } from "@/lib/podcast-data";
import { sustainableSupplyChainBook } from "@/lib/publication-data";

interface BooksHeroProps {
  locale?: SiteLocale;
}

export function BooksHero({ locale = "bn" }: BooksHeroProps) {
  const isEn = locale === "en";

  return (
    <section className="relative overflow-hidden border-b border-white/[0.08] bg-[#050505] pt-32 pb-16 lg:pt-36 lg:pb-20">
      {/* Ambient background glows */}
      <div className="grid-veil pointer-events-none absolute inset-0 opacity-80" />
      <div className="paper-noise pointer-events-none absolute inset-0 opacity-[0.03]" />
      <div className="hero-mesh-bg pointer-events-none absolute inset-0" />
      <div className="animate-breathe pointer-events-none absolute -right-28 top-16 size-[38rem] rounded-full bg-[#d6a642]/[0.08] blur-[140px]" />
      <div className="animate-glow-pulse pointer-events-none absolute -left-28 bottom-10 size-[32rem] rounded-full bg-[#77bfd4]/[0.05] blur-[140px]" />

      <div className="page-shell relative z-10">
        {/* Navigation Breadcrumb */}
        <div className="mb-8 flex items-center gap-3">
          <Link
            href={localizePath("/", locale)}
            className="group inline-flex items-center gap-2 text-xs font-medium text-[#88847b] transition hover:text-[#d6a642]"
          >
            <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-1" />
            {isEn ? "Back to Home" : "হোমে ফিরুন"}
          </Link>
          <span className="text-white/20">/</span>
          <span className="text-xs text-[#d6a642] font-medium">
            {isEn ? "Publications" : "বই ও প্রকাশনা"}
          </span>
        </div>

        {/* Header Title Section */}
        <div className="max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d6a642]/30 bg-[#14120c]/80 px-3.5 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-[#f2d080] backdrop-blur-md">
            <Sparkles className="size-3 text-[#d6a642]" />
            {isEn ? "Two Disciplines · Two Reading Journeys" : "দুটি ক্ষেত্র · দুটি স্বতন্ত্র পাঠযাত্রা"}
          </div>

          <h1 className="text-balance text-[clamp(2.8rem,6.5vw,5.6rem)] font-medium leading-[0.92] tracking-[-0.045em] text-white">
            {isEn ? (
              <>
                Books &amp; <span className="gold-text">Scholarly Works</span>
              </>
            ) : (
              <>
                বই ও <span className="gold-text">সম্পাদিত প্রকাশনা</span>
              </>
            )}
          </h1>

          <p className="mt-6 text-balance text-base leading-relaxed text-[#aaa69c] md:text-lg">
            {isEn
              ? "Dr. Ferdoush Saleheen’s publications span two purposeful domains: global academic supply-chain volumes published with CRC Press / Taylor & Francis, and contemplative Qur’anic literature for spiritual grounding."
              : "সাপ্লাই চেইনের পেশাগত ও একাডেমিক প্রকাশনা এবং দাওয়াহ ও কুরআনিক অনুধ্যানের কাজ—এখানে বিষয়, পাঠক ও বৈশ্বিক রিসোর্স অনুযায়ী দুটি স্বতন্ত্র ধারায় সজ্জিত।"}
          </p>
        </div>

        {/* Dual Book Exhibition Showcase Grid */}
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Card 1: Academic Supply Chain Volume */}
          <div className="gold-glow-card relative flex flex-col justify-between overflow-hidden rounded-[2rem] border border-white/10 bg-[#0d0d0c] p-6 sm:p-8 backdrop-blur-xl">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
              {/* 3D Book Cover Container */}
              <div className="relative mx-auto aspect-[3/4] w-40 shrink-0 overflow-hidden rounded-xl border border-white/15 bg-[#181816] shadow-[0_20px_50px_rgba(0,0,0,0.6)] sm:mx-0">
                <Image
                  src={sustainableSupplyChainBook.cover}
                  alt={sustainableSupplyChainBook.title}
                  fill
                  sizes="160px"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Book Details */}
              <div className="flex-1">
                <div className="inline-flex items-center gap-1.5 rounded-md border border-[#77bfd4]/30 bg-[#77bfd4]/10 px-2.5 py-0.5 text-[0.68rem] font-semibold text-[#77bfd4]">
                  <Globe className="size-3" />
                  {isEn ? "Academic & Industry Reference" : "একাডেমিক ও শিল্প প্রকাশনা"}
                </div>

                <h2 className="mt-3 text-xl font-medium leading-snug text-white sm:text-2xl">
                  {sustainableSupplyChainBook.title}
                </h2>
                <p className="mt-1 text-xs text-[#d8b35c]">
                  {sustainableSupplyChainBook.subtitle}
                </p>

                <p className="mt-3 text-xs leading-relaxed text-[#918d84]">
                  {isEn
                    ? "Published by CRC Press · Taylor & Francis Group. An industry-driven volume on resilient, sustainable supply chains."
                    : "সিআরসি প্রেস · টেইলর অ্যান্ড ফ্রান্সিস গ্রুপ প্রকাশিত। স্থিতিস্থাপক ও টেকসই সাপ্লাই চেইন নিয়ে বৈশ্বিক গ্রন্থ।"}
                </p>

                <div className="mt-4 flex flex-wrap gap-2 text-[0.68rem] text-[#aaa69c]">
                  <span className="rounded border border-white/10 bg-white/[0.04] px-2 py-0.5">
                    ISBN: {sustainableSupplyChainBook.isbn13}
                  </span>
                  <span className="rounded border border-white/10 bg-white/[0.04] px-2 py-0.5">
                    CRC Press / Taylor &amp; Francis
                  </span>
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.08] pt-5">
              <a
                href={sustainableSupplyChainBook.purchaseLinks[0].href}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-xl bg-[#d6a642] px-4 py-2 text-xs font-semibold text-black transition hover:bg-[#f0c86a]"
              >
                {isEn ? "View on Amazon" : "Amazon-এ দেখুন"}
                <ExternalLink className="size-3.5" />
              </a>
              <span className="text-xs text-[#7e7a71]">
                {isEn ? "Global print & Kindle editions" : "প্রিন্ট ও কিন্ডল সংস্করণ"}
              </span>
            </div>
          </div>

          {/* Card 2: Dawah & Spiritual Reflection Volume */}
          <div className="gold-glow-card relative flex flex-col justify-between overflow-hidden rounded-[2rem] border border-white/10 bg-[#0d0d0c] p-6 sm:p-8 backdrop-blur-xl">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
              {/* 3D Book Cover Container */}
              <div className="relative mx-auto aspect-[3/4] w-40 shrink-0 overflow-hidden rounded-xl border border-white/15 bg-[#181816] shadow-[0_20px_50px_rgba(0,0,0,0.6)] sm:mx-0">
                <Image
                  src="/bookImage.webp"
                  alt="সুরা আল-ফাতিহা: সাতটি আয়াত"
                  fill
                  sizes="160px"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Book Details */}
              <div className="flex-1">
                <div className="inline-flex items-center gap-1.5 rounded-md border border-[#f0c86a]/30 bg-[#f0c86a]/10 px-2.5 py-0.5 text-[0.68rem] font-semibold text-[#f0c86a]">
                  <BookOpen className="size-3" />
                  {isEn ? "Qur'anic Reflection · Spiritual" : "কুরআনিক অনুধ্যান · দাওয়াহ"}
                </div>

                <h2 className="mt-3 text-xl font-medium leading-snug text-white sm:text-2xl">
                  {isEn ? "Surah Al-Fatihah: The Seven Verses" : "সুরা আল-ফাতিহা: সাতটি আয়াত"}
                </h2>
                <p className="mt-1 text-xs text-[#d8b35c]">
                  {isEn ? "Reflections on Life, Gratitude & Guidance" : "কৃতজ্ঞতা, ইবাদত, হেদায়াত ও জীবনের আলোকে অনুধ্যান"}
                </p>

                <p className="mt-3 text-xs leading-relaxed text-[#918d84]">
                  {isEn
                    ? "A deeply reflective Bangla book exploring the foundational opening chapter of the Qur’an with contemporary relevance."
                    : "সুরা আল-ফাতিহার সাতটি আয়াতকে জীবনের প্রতিটি বাঁকে অনুধাবন ও আত্মসচেতনতার আলোকে সাজানো গভীর আত্মঅনুসন্ধানমূলক গ্রন্থ।"}
                </p>

                <div className="mt-4 flex flex-wrap gap-2 text-[0.68rem] text-[#aaa69c]">
                  <span className="rounded border border-white/10 bg-white/[0.04] px-2 py-0.5">
                    {isEn ? "Rokomari Bestseller" : "রকমারি বেস্টসেলার"}
                  </span>
                  <span className="flex items-center gap-1 rounded border border-[#d6a642]/30 bg-[#d6a642]/10 px-2 py-0.5 text-[#f0c86a]">
                    <Headphones className="size-3" />
                    {isEn ? "Free Audio Edition" : "বিনামূল্যে অডিও সংস্করণ"}
                  </span>
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.08] pt-5">
              <div className="flex flex-wrap gap-2">
                <a
                  href={bookPurchaseUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 rounded-xl bg-[#d6a642] px-4 py-2 text-xs font-semibold text-black transition hover:bg-[#f0c86a]"
                >
                  {isEn ? "Order on Rokomari" : "রকমারিতে সংগ্রহ করুন"}
                  <ExternalLink className="size-3.5" />
                </a>

                <Button asChild size="sm" variant="outline" className="border-white/15 text-xs hover:border-[#d6a642]/50">
                  <Link href={localizePath("/audiobooks", locale)}>
                    <Headphones className="size-3.5 text-[#d6a642]" />
                    {isEn ? "Listen to Audiobook" : "অডিওবুক শুনুন"}
                  </Link>
                </Button>
              </div>

              <span className="text-xs text-[#7e7a71]">
                {isEn ? "Available in print & audio" : "প্রিন্ট ও অডিও উভয় মাধ্যমে"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
