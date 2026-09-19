import Image from "next/image";
import { Mail, MapPin } from "lucide-react";

import { HeroEyebrow, HeroFrame, HeroTextLink, HeroTitle } from "@/components/heroes/hero-parts";
import type { SiteLocale } from "@/lib/locale";
import { profile } from "@/lib/profile-data";
import { profileBn } from "@/lib/profile-data-bn";

interface AboutHeroProps { locale?: SiteLocale }

export function AboutHero({ locale = "bn" }: AboutHeroProps) {
  const isEn = locale === "en";
  const data = isEn ? profile : profileBn;

  return (
    <HeroFrame locale={locale} section={isEn ? "Profile" : "পরিচিতি"}>
      <div className="mt-10 grid items-center gap-12 lg:grid-cols-[1fr_.82fr]">
        <div>
          <HeroEyebrow>{isEn ? "Professional profile" : "পেশাগত পরিচিতি"}</HeroEyebrow>
          <HeroTitle locale={locale}>{isEn ? <>Experience made <span className="gold-text">useful.</span></> : <>অভিজ্ঞতা, যা <span className="gold-text">কাজে লাগে।</span></>}</HeroTitle>
          <p className="mt-7 max-w-2xl text-balance text-lg leading-8 text-[#aaa69c]">
            {isEn ? "Corporate leadership brought into the classroom—and academic thinking made practical for industry." : "কর্পোরেট নেতৃত্বের অভিজ্ঞতা শ্রেণিকক্ষে, আর একাডেমিক চিন্তা বাস্তব শিল্পক্ষেত্রে।"}
          </p>
          <div className="mt-8 grid max-w-xl grid-cols-3 gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08]">
            {[["20+", isEn ? "Years" : "বছর"], ["34+", isEn ? "Works" : "প্রকাশনা"], ["100+", isEn ? "Programs" : "প্রোগ্রাম"]].map(([value, label]) => (
              <div key={label} className="bg-[#0d0d0c] px-3 py-5 text-center"><strong className="gold-text block text-2xl font-semibold">{value}</strong><span className="mt-1 block text-xs text-[#77736b]">{label}</span></div>
            ))}
          </div>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <HeroTextLink href={`mailto:${data.email}`}><Mail className="size-4" />{isEn ? "Email" : "ইমেইল"}</HeroTextLink>
            <HeroTextLink href={data.linkedIn} external>LinkedIn</HeroTextLink>
            <span className="inline-flex items-center gap-2 px-2 text-xs text-[#77736b]"><MapPin className="size-3.5" />{data.contactLocation}</span>
          </div>
        </div>

        <div className="gold-glow-card relative min-h-[30rem] overflow-hidden rounded-3xl border border-white/10 bg-[#0d0d0c]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_32%,rgba(214,166,66,.3),transparent_52%)]" />
          <Image src="/fsPhoto-cutout.webp" alt={isEn ? "Dr. Ferdoush Saleheen" : "ড. ফেরদৌস সালেহীন"} fill priority sizes="(max-width: 1024px) 100vw, 460px" className="object-contain object-bottom grayscale contrast-110" />
          <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/10 bg-[#090908]/88 p-5 backdrop-blur-xl">
            <span className="text-xs font-semibold text-[#d6a642]">{isEn ? "Current appointment" : "বর্তমান দায়িত্ব"}</span>
            <p className="mt-2 font-medium leading-snug text-white">{data.currentTitle}</p>
            <p className="mt-2 text-xs text-[#88847b]">Sharjah Maritime Academy · UAE</p>
          </div>
        </div>
      </div>
    </HeroFrame>
  );
}
