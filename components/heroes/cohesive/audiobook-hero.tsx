import { Headphones, Play } from "lucide-react";

import { HeroEyebrow, HeroFrame, HeroTextLink, HeroTitle } from "@/components/heroes/hero-parts";
import type { SiteLocale } from "@/lib/locale";

interface AudiobookHeroProps { locale?: SiteLocale }

const waveBars = [38, 72, 48, 88, 58, 100, 66, 44, 80, 54, 92, 40, 72, 50, 84, 60];

export function AudiobookHero({ locale = "bn" }: AudiobookHeroProps) {
  const isEn = locale === "en";

  return (
    <HeroFrame locale={locale} section={isEn ? "Audiobook" : "অডিওবুক"}>
      <div className="mt-10 grid items-center gap-12 lg:grid-cols-[.9fr_1.1fr]">
        <div>
          <HeroEyebrow><Headphones className="size-4" />{isEn ? "Read by the author" : "লেখকের কণ্ঠে"}</HeroEyebrow>
          <HeroTitle locale={locale}>{isEn ? <>A quieter way to <span className="gold-text">read.</span></> : <>শোনার ভেতর <span className="gold-text">পাঠ।</span></>}</HeroTitle>
          <p className="mt-7 max-w-xl text-base leading-8 text-[#aaa69c] md:text-lg">
            {isEn ? "The complete Bangla audio edition of Surah Al-Fatihah: Seven Verses, available to stream freely." : "‘সূরা আল-ফাতিহা: সাতটি আয়াত’-এর পূর্ণাঙ্গ বাংলা অডিও সংস্করণ—বিনামূল্যে শুনুন।"}
          </p>
          <div className="mt-8"><HeroTextLink href="#audiobook-player-section"><Play className="size-4 fill-current" />{isEn ? "Start listening" : "শোনা শুরু করুন"}</HeroTextLink></div>
        </div>

        <div className="gold-glow-card rounded-3xl border border-white/10 bg-[#0d0d0c] p-7 sm:p-9">
          <div>
            <span className="inline-flex size-12 items-center justify-center rounded-full bg-[#d6a642] text-[#090806]"><Play className="ml-0.5 size-5 fill-current" /></span>
            <p className="mt-5 text-xs font-semibold text-[#d6a642]">{isEn ? "Complete audiobook" : "পূর্ণাঙ্গ অডিওবুক"}</p>
            <h2 className="mt-2 text-2xl font-medium leading-tight text-white">{isEn ? "Surah Al-Fatihah: Seven Verses" : "সূরা আল-ফাতিহা: সাতটি আয়াত"}</h2>
            <div className="hero-wave mt-7 flex h-10 items-center gap-[3px] overflow-hidden" aria-hidden="true">
              {waveBars.map((height, index) => <span key={`${height}-${index}`} className="w-1 rounded-full bg-[#d6a642]" style={{ height: `${height}%` }} />)}
            </div>
            <p className="mt-3 text-xs text-[#77736b]">MP3 · {isEn ? "Free stream" : "বিনামূল্যে শুনুন"}</p>
          </div>
        </div>
      </div>
    </HeroFrame>
  );
}
