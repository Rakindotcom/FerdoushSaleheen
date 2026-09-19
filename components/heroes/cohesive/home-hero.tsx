import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Headphones } from "lucide-react";

import { HeroEyebrow, HeroFrame, HeroTitle } from "@/components/heroes/hero-parts";
import { Button } from "@/components/ui/button";
import type { SiteLocale } from "@/lib/locale";
import { localizePath } from "@/lib/locale";

interface HomeHeroProps { locale?: SiteLocale }

export function HomeHero({ locale = "bn" }: HomeHeroProps) {
  const isEn = locale === "en";

  return (
    <HeroFrame locale={locale} home className="pt-32 md:pt-36">
      <div className="grid items-center gap-12 lg:min-h-[36rem] lg:grid-cols-[1.02fr_.98fr]">
        <div className="max-w-2xl">
          <HeroEyebrow>{isEn ? "Academic · Executive · Author" : "শিক্ষাবিদ · নির্বাহী · লেখক"}</HeroEyebrow>
          <HeroTitle locale={locale} className="max-w-[9ch]">
            {isEn ? <>Ferdoush <span className="gold-text">Saleheen</span></> : <>ফেরদৌস <span className="gold-text">সালেহীন</span></>}
          </HeroTitle>
          <p className="mt-7 max-w-xl text-balance text-lg font-medium leading-8 text-[#d5d1c8] md:text-xl">
            {isEn ? "Connecting industry experience with education, research, and thoughtful public conversation." : "শিল্পের অভিজ্ঞতাকে শিক্ষা, গবেষণা ও মননশীল জনআলোচনার সঙ্গে যুক্ত করা।"}
          </p>
          <p className="mt-4 max-w-xl text-sm leading-7 text-[#918d84] md:text-base">
            {isEn ? "Two decades across supply chains, logistics, higher education, and reflective writing." : "সাপ্লাই চেইন, লজিস্টিকস, উচ্চশিক্ষা ও মননশীল লেখালেখিতে দুই দশকের পথচলা।"}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild><Link href={localizePath("/about", locale)}>{isEn ? "Explore the profile" : "পরিচিতি দেখুন"}<ArrowRight className="size-4" /></Link></Button>
            <Button asChild variant="outline"><Link href={localizePath("/audiobooks", locale)}><Headphones className="size-4" />{isEn ? "Listen to the audiobook" : "অডিওবুক শুনুন"}</Link></Button>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/[0.08] pt-5 text-xs text-[#7f7b73]">
            <span>PhD · FCILT</span><span>{isEn ? "Sharjah, UAE" : "শারজাহ, ইউএই"}</span><span>{isEn ? "Dhaka, Bangladesh" : "ঢাকা, বাংলাদেশ"}</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[33rem]">
          <div className="gold-glow-card relative aspect-[4/4.35] overflow-hidden rounded-3xl border border-white/10 bg-[#0d0d0c]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_58%_28%,rgba(214,166,66,.32),transparent_48%)]" />
            <div className="absolute inset-x-8 bottom-0 top-12 rounded-t-[12rem] border border-[#d6a642]/15 bg-[#d6a642]/[0.055]" />
            <Image src="/fsPhoto-cutout.png" alt={isEn ? "Portrait of Dr. Ferdoush Saleheen" : "ড. ফেরদৌস সালেহীনের প্রতিকৃতি"} fill priority sizes="(max-width: 1024px) 92vw, 530px" className="object-contain object-bottom grayscale contrast-110" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0d0d0c] to-transparent" />
            <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/10 bg-[#090908]/85 p-4 backdrop-blur-xl">
              <p className="text-xs font-semibold text-[#d6a642]">{isEn ? "Current appointment" : "বর্তমান দায়িত্ব"}</p>
              <p className="mt-1 text-sm font-medium text-white">{isEn ? "Head of Maritime Logistics & SCM Department" : "মেরিটাইম লজিস্টিকস ও এসসিএম বিভাগের প্রধান"}</p>
              <p className="mt-1 text-xs text-[#88847b]">Sharjah Maritime Academy</p>
            </div>
          </div>
        </div>
      </div>
    </HeroFrame>
  );
}
