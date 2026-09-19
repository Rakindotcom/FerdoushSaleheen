import { Play } from "lucide-react";

import { HeroEyebrow, HeroFrame, HeroTextLink, HeroTitle } from "@/components/heroes/hero-parts";
import type { SiteLocale } from "@/lib/locale";
import { podcastEpisodes } from "@/lib/podcast-data";

interface PodcastHeroProps { locale?: SiteLocale }

export function PodcastHero({ locale = "bn" }: PodcastHeroProps) {
  const isEn = locale === "en";
  const featured = podcastEpisodes[0];

  return (
    <HeroFrame locale={locale} section={isEn ? "Podcast" : "পডকাস্ট"}>
      <div className="mt-10 grid items-center gap-12 lg:grid-cols-[.82fr_1.18fr]">
        <div>
          <HeroEyebrow>{isEn ? "Long-form conversations" : "দীর্ঘ আলাপ"}</HeroEyebrow>
          <HeroTitle locale={locale}>{isEn ? <>Stay for the <span className="gold-text">idea.</span></> : <>কথার ভেতর <span className="gold-text">ভাবনা।</span></>}</HeroTitle>
          <p className="mt-7 max-w-xl text-base leading-8 text-[#aaa69c] md:text-lg">
            {isEn ? "Unhurried conversations on faith, leadership, wealth, ethics, and the systems that shape modern life." : "বিশ্বাস, নেতৃত্ব, সম্পদ, নৈতিকতা ও আধুনিক জীবনকে গড়ে তোলা ব্যবস্থা নিয়ে গভীর আলাপ।"}
          </p>
          <div className="mt-8"><HeroTextLink href="#featured-podcast"><Play className="size-4 fill-current" />{isEn ? "Watch featured episode" : "প্রধান পর্ব দেখুন"}</HeroTextLink></div>
        </div>

        <a href={featured.href} target="_blank" rel="noreferrer" className="group overflow-hidden rounded-3xl border border-white/10 bg-[#0d0d0c] p-2 sm:p-3">
          <div className="relative aspect-video overflow-hidden rounded-[1.15rem] bg-black">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`https://img.youtube.com/vi/${featured.videoId}/hqdefault.jpg`} alt={isEn ? featured.titleEn : featured.titleBn} className="size-full object-cover transition duration-700 group-hover:scale-[1.025]" />
            <div className="absolute inset-0 bg-black/20 transition group-hover:bg-black/10" />
            <span className="absolute left-1/2 top-1/2 grid size-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[#d6a642] text-[#090806] shadow-2xl transition group-hover:scale-105"><Play className="ml-1 size-6 fill-current" /></span>
          </div>
          <div className="px-4 py-5 sm:px-5">
            <span className="text-xs font-semibold text-[#d6a642]">{isEn ? "Featured podcast · Episode 01" : "নির্বাচিত পডকাস্ট · পর্ব ০১"}</span>
            <h2 className="mt-2 text-xl font-medium leading-snug text-white md:text-2xl">{isEn ? featured.titleEn : featured.titleBn}</h2>
          </div>
        </a>
      </div>
    </HeroFrame>
  );
}
