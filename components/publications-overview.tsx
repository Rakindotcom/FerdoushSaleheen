import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpenText, Boxes, HeartHandshake } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { SiteLocale } from "@/lib/locale";
import { localizePath } from "@/lib/locale";
import { sustainableSupplyChainBook } from "@/lib/publication-data";

const copy = {
  en: {
    eyebrow: "Two distinct bodies of work",
    title: <>Professional scholarship and <span className="gold-text">faith-centred reflection</span></>,
    description: "Each publication belongs to its own field, audience, and conversation—presented here without blending the two.",
    professional: {
      lane: "Supply Chain · Academic & Professional",
      role: "Co-editor",
      description: "An industry-driven volume on resilient, sustainable supply chains, co-edited with Md. Mamun Habib and published by CRC Press.",
      cta: "Explore the academic book",
    },
    faith: {
      lane: "Dawah · Qur’anic Reflection",
      role: "Author",
      title: "Surah Al-Fatihah: The Seven Verses",
      description: "A Bangla reflection on the seven verses recited in every salah—through gratitude, worship, guidance, and accountability.",
      cta: "Explore the Dawah book",
    },
  },
  bn: {
    eyebrow: "কাজের দুটি স্বতন্ত্র ধারা",
    title: <>পেশাগত গবেষণা এবং <span className="gold-text">দাওয়াহভিত্তিক অনুধ্যান</span></>,
    description: "প্রতিটি প্রকাশনা তার নিজস্ব বিষয়, পাঠক ও আলোচনার পরিসরে—দুটি ধারাকে একে অন্যের সঙ্গে না মিশিয়ে আলাদাভাবে উপস্থাপন করা হয়েছে।",
    professional: {
      lane: "সাপ্লাই চেইন · একাডেমিক ও পেশাগত",
      role: "সহ-সম্পাদক",
      description: "স্থিতিস্থাপক ও টেকসই সাপ্লাই চেইন নিয়ে শিল্প-অভিজ্ঞতাভিত্তিক গ্রন্থ; মো. মামুন হাবিবের সঙ্গে সহ-সম্পাদিত এবং CRC Press থেকে প্রকাশিত।",
      cta: "একাডেমিক বইটি দেখুন",
    },
    faith: {
      lane: "দাওয়াহ · কুরআনিক অনুধ্যান",
      role: "লেখক",
      title: "সুরা আল-ফাতিহা: সাতটি আয়াত",
      description: "প্রতিদিনের সালাতে ফিরে আসা সাতটি আয়াতকে কৃতজ্ঞতা, ইবাদত, হেদায়াত ও জবাবদিহির আলোকে দেখার বাংলা অনুধ্যান।",
      cta: "দাওয়াহর বইটি দেখুন",
    },
  },
} as const;

export function PublicationsOverview({ locale }: { locale: SiteLocale }) {
  const text = copy[locale];
  const booksPath = localizePath("/books", locale);

  return (
    <section id="work-streams" className="relative overflow-hidden border-y border-white/[0.06] bg-[#090908] py-24 md:py-32">
      <div className="pointer-events-none absolute -left-36 top-20 size-96 rounded-full bg-[#3e7c93]/[0.08] blur-[120px]" />
      <div className="pointer-events-none absolute -right-36 bottom-10 size-96 rounded-full bg-[#d6a642]/[0.07] blur-[120px]" />
      <div className="page-shell relative">
        <div className="mb-14 grid gap-6 md:grid-cols-[1fr_.72fr] md:items-end">
          <div>
            <span className="eyebrow mb-5">{text.eyebrow}</span>
            <h2 className="section-title text-balance">{text.title}</h2>
          </div>
          <p className="max-w-lg text-base leading-7 text-[#918d84] md:justify-self-end">{text.description}</p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          <article className="group overflow-hidden rounded-[2rem] border border-[#4e9bb4]/25 bg-[linear-gradient(145deg,#0d171b,#0b0d0e_58%)]">
            <div className="flex items-center justify-between border-b border-white/[0.08] px-6 py-5 md:px-8">
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.1em] text-[#7cc7dc]"><Boxes className="size-4" /> {text.professional.lane}</span>
              <span className="rounded-full border border-[#7cc7dc]/20 px-3 py-1 text-[0.65rem] text-[#9bcbd8]">{text.professional.role}</span>
            </div>
            <div className="grid min-h-[33rem] sm:grid-cols-[.78fr_1.22fr]">
              <div className="relative min-h-80 bg-[radial-gradient(circle_at_center,rgba(79,155,181,.16),transparent_65%)] sm:min-h-full">
                <Image src={sustainableSupplyChainBook.cover} alt={`Cover of ${sustainableSupplyChainBook.title}`} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 42vw, 20vw" className="object-contain p-8 drop-shadow-[0_24px_30px_rgba(0,0,0,.55)]" />
              </div>
              <div className="flex flex-col justify-center border-t border-white/[0.08] p-7 sm:border-l sm:border-t-0 md:p-8">
                <BookOpenText className="size-6 text-[#7cc7dc]" />
                <h3 className="mt-5 text-balance text-3xl font-medium leading-tight text-white">{sustainableSupplyChainBook.title}</h3>
                <p className="mt-3 text-sm font-medium leading-6 text-[#8bc1d0]">{sustainableSupplyChainBook.subtitle}</p>
                <p className="mt-5 text-sm leading-7 text-[#9b9a94]">{text.professional.description}</p>
                <Button asChild variant="outline" className="mt-7 self-start border-[#5f9daf]/35 text-[#a9d7e3] hover:bg-[#5f9daf]/10">
                  <Link href={`${booksPath}#supply-chain-publication`}>{text.professional.cta} <ArrowRight className="size-4" /></Link>
                </Button>
              </div>
            </div>
          </article>

          <article className="group overflow-hidden rounded-[2rem] border border-[#d6a642]/20 bg-[linear-gradient(145deg,#17130c,#0d0c0a_58%)]">
            <div className="flex items-center justify-between border-b border-white/[0.08] px-6 py-5 md:px-8">
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.1em] text-[#e2b75b]"><HeartHandshake className="size-4" /> {text.faith.lane}</span>
              <span className="rounded-full border border-[#d6a642]/20 px-3 py-1 text-[0.65rem] text-[#d9bd7f]">{text.faith.role}</span>
            </div>
            <div className="grid min-h-[33rem] sm:grid-cols-[.78fr_1.22fr]">
              <div className="relative min-h-80 bg-[radial-gradient(circle_at_center,rgba(214,166,66,.14),transparent_65%)] sm:min-h-full">
                <Image src="/bookImage.webp" alt={locale === "en" ? "Cover of Surah Al-Fatihah: The Seven Verses" : "সুরা আল-ফাতিহা: সাতটি আয়াত বইয়ের প্রচ্ছদ"} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 42vw, 20vw" className="object-contain p-8 drop-shadow-[0_24px_30px_rgba(0,0,0,.55)]" />
              </div>
              <div className="flex flex-col justify-center border-t border-white/[0.08] p-7 sm:border-l sm:border-t-0 md:p-8">
                <HeartHandshake className="size-6 text-[#d6a642]" />
                <h3 className="mt-5 text-balance text-3xl font-medium leading-tight text-white">{text.faith.title}</h3>
                <p className="mt-5 text-sm leading-7 text-[#9b9a94]">{text.faith.description}</p>
                <Button asChild variant="outline" className="mt-7 self-start">
                  <Link href={`${booksPath}#dawah-publication`}>{text.faith.cta} <ArrowRight className="size-4" /></Link>
                </Button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
