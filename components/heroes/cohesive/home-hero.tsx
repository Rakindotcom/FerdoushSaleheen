import Link from "next/link";
import { ArrowDown, ArrowRight, Headphones } from "lucide-react";

import { HeroEyebrow, HeroFrame } from "@/components/heroes/hero-parts";
import { Button } from "@/components/ui/button";
import type { SiteLocale } from "@/lib/locale";
import { localizePath } from "@/lib/locale";

interface HomeHeroProps { locale?: SiteLocale }

export function HomeHero({ locale = "bn" }: HomeHeroProps) {
  const isEn = locale === "en";

  return (
    <HeroFrame locale={locale} home className="pt-32 md:pt-36">
      <div className="home-hero-layout relative flex flex-col items-center text-center">
        <div className="pointer-events-none absolute left-1/2 top-48 h-96 w-96 -translate-x-1/2 rounded-full bg-[#d6a642]/10 blur-[110px] md:h-[32rem] md:w-[32rem]" />
        <div className="pointer-events-none absolute inset-x-0 top-24 mx-auto h-px max-w-5xl bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="relative z-20 flex max-w-5xl flex-col items-center">
          <HeroEyebrow>{isEn ? "Academic · Executive · Author" : "শিক্ষাবিদ · নির্বাহী · লেখক"}</HeroEyebrow>
          <h1 className={isEn
            ? "home-hero-title hero-display text-balance text-white"
            : "home-hero-title home-hero-title-bn hero-display-bn text-balance text-white"
          }>
            {isEn ? <>Dr. Ferdoush<br /><span className="gold-text">Saleheen</span></> : <>ড. ফেরদৌস<br /><span className="gold-text">সালেহীন</span></>}
          </h1>
          <p className="mt-7 max-w-2xl text-balance text-base font-medium leading-8 text-[#d5d1c8] md:text-xl">
            {isEn ? "Connecting industry experience with education, research, and thoughtful public conversation." : "শিল্পের অভিজ্ঞতাকে শিক্ষা, গবেষণা ও মননশীল জনআলোচনার সঙ্গে যুক্ত করা।"}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild><Link href={localizePath("/about", locale)}>{isEn ? "Explore the profile" : "পরিচিতি দেখুন"}<ArrowRight className="size-4" /></Link></Button>
            <Button asChild variant="outline"><Link href={localizePath("/audiobooks", locale)}><Headphones className="size-4" />{isEn ? "Listen to the audiobook" : "অডিওবুক শুনুন"}</Link></Button>
          </div>
        </div>

        <div className="home-hero-stage relative mt-8 w-full max-w-6xl flex-1">
          <div className="home-hero-orbit pointer-events-none absolute left-1/2 top-8 -translate-x-1/2 rounded-full border border-[#d6a642]/20" />
          <div className="home-hero-orbit-inner pointer-events-none absolute left-1/2 -translate-x-1/2 rounded-full border border-dashed border-white/10" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-px w-full max-w-5xl -translate-x-1/2 bg-gradient-to-r from-transparent via-[#d6a642]/25 to-transparent" />

          <div className="absolute left-0 top-12 hidden w-56 text-left lg:block">
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#77736b]">{isEn ? "Experience" : "অভিজ্ঞতা"}</span>
            <p className="mt-3 text-3xl font-medium text-white">20+ <span className="text-sm text-[#8f8a81]">{isEn ? "years" : "বছর"}</span></p>
            <p className="mt-2 text-sm leading-6 text-[#8f8a81]">{isEn ? "Across industry leadership and higher education" : "শিল্প নেতৃত্ব ও উচ্চশিক্ষাজুড়ে"}</p>
          </div>

          <div className="absolute right-0 top-12 hidden w-56 text-right lg:block">
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#77736b]">{isEn ? "Based across" : "কর্মপরিসর"}</span>
            <p className="mt-3 text-xl font-medium text-white">{isEn ? "UAE · Bangladesh" : "ইউএই · বাংলাদেশ"}</p>
            <p className="mt-2 text-sm leading-6 text-[#8f8a81]">{isEn ? "Connecting regional practice with global ideas" : "আঞ্চলিক অভিজ্ঞতা ও বৈশ্বিক ভাবনার সংযোগ"}</p>
          </div>

          <div className="absolute inset-x-2 top-1/2 z-10 mx-auto max-w-xl -translate-y-1/2 rounded-2xl border border-white/10 bg-[#0a0a09]/90 px-5 py-4 text-center shadow-[0_18px_60px_rgba(0,0,0,.45)] backdrop-blur-xl sm:px-7">
            <div className="flex flex-col items-center justify-center gap-1 sm:flex-row sm:gap-3">
              <span className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[#d6a642]">{isEn ? "Current role" : "বর্তমান দায়িত্ব"}</span>
              <span className="hidden h-3 w-px bg-white/15 sm:block" />
              <p className="text-sm font-medium text-white">{isEn ? "Head of Maritime Logistics & SCM" : "মেরিটাইম লজিস্টিকস ও এসসিএম বিভাগের প্রধান"}</p>
            </div>
            <p className="mt-1 text-xs text-[#88847b]">Sharjah Maritime Academy · PhD · FCILT</p>
          </div>

          <Link href="#professional-journey" aria-label={isEn ? "Continue to professional journey" : "পেশাগত পথচলায় যান"} className="absolute bottom-5 right-0 hidden size-11 place-items-center rounded-full border border-white/10 text-[#8f8a81] transition hover:border-[#d6a642]/50 hover:text-[#d6a642] lg:grid">
            <ArrowDown className="size-4" />
          </Link>
        </div>
      </div>
    </HeroFrame>
  );
}
