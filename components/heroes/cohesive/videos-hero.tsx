import Image from "next/image";
import { Play } from "lucide-react";

import { HeroEyebrow, HeroFrame, HeroTextLink, HeroTitle } from "@/components/heroes/hero-parts";
import type { SiteLocale } from "@/lib/locale";
import { facebookVideos } from "@/lib/facebook-videos";

interface VideosHeroProps { locale?: SiteLocale }

export function VideosHero({ locale = "bn" }: VideosHeroProps) {
  const isEn = locale === "en";
  const frames = facebookVideos.slice(0, 3);

  return (
    <HeroFrame locale={locale} section={isEn ? "Videos" : "ভিডিও"}>
      <div className="mt-10 grid items-center gap-12 lg:grid-cols-[.78fr_1.22fr]">
        <div>
          <HeroEyebrow>{isEn ? "Short form · complete thought" : "ছোট ভিডিও · সম্পূর্ণ ভাবনা"}</HeroEyebrow>
          <HeroTitle locale={locale}>{isEn ? <>Ideas in <span className="gold-text">motion.</span></> : <>চলমান <span className="gold-text">ভাবনা।</span></>}</HeroTitle>
          <p className="mt-7 max-w-xl text-base leading-8 text-[#aaa69c] md:text-lg">
            {isEn ? "Concise reflections on faith, leadership, careers, and resilience—made to be watched with attention." : "বিশ্বাস, নেতৃত্ব, কর্মজীবন ও সহনশীলতা নিয়ে সংক্ষিপ্ত, মনোযোগী ভাবনা।"}
          </p>
          <div className="mt-8"><HeroTextLink href="#video-grid">{isEn ? "Browse all videos" : "সব ভিডিও দেখুন"}</HeroTextLink></div>
        </div>

        <div className="grid grid-cols-3 gap-3 rounded-3xl border border-white/[0.08] bg-[#0d0d0c] p-3 sm:p-4">
          {frames.map((video, index) => (
            <a key={video.id} href={video.url} target="_blank" rel="noreferrer" className="group relative aspect-[9/16] overflow-hidden rounded-2xl border border-white/[0.08] bg-black">
              <Image src={`/facebook-videos/${video.id}.webp`} alt={isEn ? video.titleEn : video.titleBn} fill priority={index === 0} sizes="(max-width: 1024px) 30vw, 210px" className="object-cover transition duration-500 group-hover:scale-[1.03]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />
              <span className="absolute bottom-3 right-3 grid size-10 place-items-center rounded-full bg-[#f7f3e8] text-[#090806]"><Play className="ml-0.5 size-4 fill-current" /></span>
              <span className="absolute left-3 top-3 text-xs font-semibold text-white/80">0{index + 1}</span>
            </a>
          ))}
        </div>
      </div>
    </HeroFrame>
  );
}
