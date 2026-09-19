import Image from "next/image";
import { Headphones } from "lucide-react";

import { HeroEyebrow, HeroFrame, HeroTextLink, HeroTitle } from "@/components/heroes/hero-parts";
import type { SiteLocale } from "@/lib/locale";
import { localizePath } from "@/lib/locale";
import { bookPurchaseUrl } from "@/lib/podcast-data";
import { sustainableSupplyChainBook } from "@/lib/publication-data";

interface BooksHeroProps { locale?: SiteLocale }

export function BooksHero({ locale = "bn" }: BooksHeroProps) {
  const isEn = locale === "en";

  return (
    <HeroFrame locale={locale} section={isEn ? "Books & publications" : "বই ও প্রকাশনা"}>
      <div className="mt-10 grid items-center gap-12 lg:grid-cols-[.9fr_1.1fr]">
        <div>
          <HeroEyebrow>{isEn ? "Two fields · one commitment" : "দুই ক্ষেত্র · এক নিষ্ঠা"}</HeroEyebrow>
          <HeroTitle locale={locale}>{isEn ? <>Research and <span className="gold-text">reflection.</span></> : <>গবেষণা ও <span className="gold-text">মনন।</span></>}</HeroTitle>
          <p className="mt-7 max-w-xl text-base leading-8 text-[#aaa69c] md:text-lg">
            {isEn ? "Industry-led supply-chain scholarship and Qur’anic reflection, presented as two distinct bodies of work." : "শিল্পভিত্তিক সাপ্লাই চেইন গবেষণা ও কুরআনকেন্দ্রিক মনন—দুটি স্বতন্ত্র কাজের ধারা।"}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <HeroTextLink href={sustainableSupplyChainBook.purchaseLinks[0].href} external>{isEn ? "Academic volume" : "একাডেমিক বই"}</HeroTextLink>
            <HeroTextLink href={localizePath("/audiobooks", locale)}><Headphones className="size-4" />{isEn ? "Listen" : "শুনুন"}</HeroTextLink>
          </div>
        </div>

        <div className="grid gap-4 rounded-3xl border border-white/[0.08] bg-[#0d0d0c] p-4 sm:grid-cols-2 sm:p-6">
          <a href={sustainableSupplyChainBook.purchaseLinks[0].href} target="_blank" rel="noreferrer" className="group rounded-2xl border border-white/[0.08] bg-[#11110f] p-4 transition hover:border-[#d6a642]/35">
            <div className="relative mx-auto aspect-[3/4] w-full max-w-52 overflow-hidden rounded-xl shadow-2xl"><Image src={sustainableSupplyChainBook.cover} alt={sustainableSupplyChainBook.title} fill priority sizes="220px" className="object-cover" /></div>
            <span className="mt-4 block text-xs text-[#d6a642]">01 · CRC Press</span>
            <p className="mt-2 text-sm font-medium leading-6 text-white">Sustainable Supply Chain Management</p>
          </a>
          <a href={bookPurchaseUrl} target="_blank" rel="noreferrer" className="group rounded-2xl border border-white/[0.08] bg-[#11110f] p-4 transition hover:border-[#d6a642]/35">
            <div className="relative mx-auto aspect-[3/4] w-full max-w-52 overflow-hidden rounded-xl shadow-2xl"><Image src="/bookImage.webp" alt={isEn ? "Surah Al-Fatihah: Seven Verses" : "সূরা আল-ফাতিহা: সাতটি আয়াত"} fill priority sizes="220px" className="object-cover" /></div>
            <span className="mt-4 block text-xs text-[#d6a642]">02 · {isEn ? "Qur’anic reflection" : "কুরআনিক মনন"}</span>
            <p className="mt-2 text-sm font-medium leading-6 text-white">{isEn ? "Surah Al-Fatihah: Seven Verses" : "সূরা আল-ফাতিহা: সাতটি আয়াত"}</p>
          </a>
        </div>
      </div>
    </HeroFrame>
  );
}
