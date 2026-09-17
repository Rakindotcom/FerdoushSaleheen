import Image from "next/image";
import { ArrowUpRight, BookOpenText, Library, Newspaper, Quote } from "lucide-react";

import type { SiteLocale } from "@/lib/locale";
import { newsItems } from "@/lib/news-data";

const copy = {
  en: {
    featured: "Featured coverage",
    latest: "Coverage, commentary & publication news",
    description: "Independent media coverage, co-authored opinion, and official publisher updates related to Dr. Ferdoush Saleheen’s supply-chain work.",
    read: "Read at source",
    source: "External source",
  },
  bn: {
    featured: "নির্বাচিত সংবাদ",
    latest: "সংবাদ, মতামত ও প্রকাশনার খবর",
    description: "ড. ফেরদৌস সালেহীনের সাপ্লাই চেইনবিষয়ক কাজ নিয়ে স্বাধীন সংবাদমাধ্যমের ফিচার, যৌথ মতামত এবং অফিসিয়াল প্রকাশকের আপডেট।",
    read: "মূল সূত্রে পড়ুন",
    source: "বহিরাগত সূত্র",
  },
} as const;

const cardIcons = [Quote, Newspaper, BookOpenText, Library] as const;

export function NewsIndex({ locale }: { locale: SiteLocale }) {
  const text = copy[locale];
  const featured = newsItems.find((item) => item.featured) ?? newsItems[0];
  const remaining = newsItems.filter((item) => !item.featured);

  return (
    <>
      <section id="news-articles" className="relative overflow-hidden border-b border-white/[0.06] py-24 md:py-32">
        <div className="pointer-events-none absolute -right-36 top-20 size-[30rem] rounded-full bg-[#4d9db7]/[0.08] blur-[120px]" />
        <div className="page-shell relative">
          <div className="mb-10 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#83ccdf]"><Newspaper className="size-4" /> {text.featured}</div>
          <a href={featured.href} target="_blank" rel="noreferrer" className="group grid overflow-hidden rounded-[2rem] border border-[#5aa3b9]/25 bg-[linear-gradient(145deg,#0e181c,#0b0d0e_62%)] lg:grid-cols-[.92fr_1.08fr]">
            <div className="relative min-h-[28rem] overflow-hidden bg-[#e8e8e5]">
              <Image src={featured.image} alt={featured.imageAlt} fill priority sizes="(max-width: 1024px) 100vw, 46vw" className="object-cover object-center transition duration-700 group-hover:scale-[1.02]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <span className="absolute bottom-5 left-5 rounded-full border border-white/15 bg-black/60 px-4 py-2 text-xs text-white backdrop-blur-md">{featured.source}</span>
            </div>
            <div className="flex flex-col justify-center border-t border-white/[0.08] p-7 md:p-12 lg:border-l lg:border-t-0">
              <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.12em]"><span className="text-[#83ccdf]">{locale === "en" ? featured.typeEn : featured.typeBn}</span><span className="text-[#555f61]">•</span><time dateTime={featured.datePublished} className="text-[#7e898b]">{locale === "en" ? featured.dateEn : featured.dateBn}</time></div>
              <h2 className="mt-6 text-balance text-4xl font-medium leading-[1.04] text-white md:text-6xl">{featured.title}</h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-[#a4a6a0]">{locale === "en" ? featured.summaryEn : featured.summaryBn}</p>
              <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[#83ccdf]">{text.read} <ArrowUpRight className="size-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></span>
            </div>
          </a>
        </div>
      </section>

      <section className="bg-[#090908] py-24 md:py-32">
        <div className="page-shell">
          <div className="mb-14 grid gap-5 md:grid-cols-[1fr_.72fr] md:items-end">
            <div><span className="eyebrow mb-5">{text.source}</span><h2 className="section-title">{text.latest}</h2></div>
            <p className="max-w-lg text-sm leading-7 text-[#918d84] md:justify-self-end">{text.description}</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {remaining.map((item, index) => {
              const Icon = cardIcons[index] ?? Newspaper;
              const isBook = item.id === "routledge-book-listing";
              return (
                <a key={item.id} href={item.href} target="_blank" rel="noreferrer" className="group relative flex min-h-[34rem] flex-col overflow-hidden rounded-[1.6rem] border border-white/[0.08] bg-[#0d0d0c] transition hover:border-[#d6a642]/30 hover:bg-[#12110e]">
                  <div className={`relative h-56 overflow-hidden border-b border-white/[0.08] ${isBook ? "bg-[radial-gradient(circle_at_center,rgba(214,166,66,.16),#10100e_68%)]" : "bg-[#141413]"}`}>
                    <Image src={item.image} alt={item.imageAlt} fill sizes="(max-width: 768px) 100vw, 50vw" className={`${isBook ? "object-contain p-5" : "object-cover object-center"} transition duration-700 group-hover:scale-[1.025]`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <span className="absolute bottom-4 left-4 rounded-full border border-white/15 bg-black/65 px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-white backdrop-blur-md">{item.source}</span>
                  </div>
                  <div className="flex flex-1 flex-col p-7 md:p-9">
                    <div className="flex items-start justify-between gap-5">
                      <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.1em] text-[#d6a642]"><Icon className="size-4" /> {locale === "en" ? item.typeEn : item.typeBn}</span>
                      <ArrowUpRight className="size-5 text-[#706b62] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#d6a642]" />
                    </div>
                    <h3 className="mt-6 max-w-xl text-balance text-2xl font-medium leading-tight text-white md:text-3xl">{item.title}</h3>
                    <p className="mt-5 max-w-xl text-sm leading-7 text-[#969289]">{locale === "en" ? item.summaryEn : item.summaryBn}</p>
                    <div className="mt-auto flex items-end justify-between gap-4 pt-8"><time dateTime={item.datePublished} className="text-xs text-[#77736b]">{locale === "en" ? item.dateEn : item.dateBn}</time><span className="text-sm text-[#d6a642]">{text.read}</span></div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
