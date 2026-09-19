import { LockKeyhole, Scale } from "lucide-react";

import { HeroEyebrow, HeroFrame, HeroTitle } from "@/components/heroes/hero-parts";
import type { SiteLocale } from "@/lib/locale";

interface LegalHeroProps {
  title: string;
  highlightText: string;
  description: string;
  type: "privacy" | "terms";
  locale?: SiteLocale;
}

export function LegalHero({ title, highlightText, description, type, locale = "bn" }: LegalHeroProps) {
  const isEn = locale === "en";
  const privacy = type === "privacy";

  return (
    <HeroFrame locale={locale} section={privacy ? (isEn ? "Privacy" : "গোপনীয়তা") : (isEn ? "Terms" : "শর্তাবলি")}>
      <div className="mt-12 grid items-end gap-12 lg:grid-cols-[1fr_.72fr]">
        <div>
          <HeroEyebrow>{privacy ? <LockKeyhole className="size-4" /> : <Scale className="size-4" />}{privacy ? (isEn ? "Clear data practices" : "স্বচ্ছ তথ্য ব্যবস্থাপনা") : (isEn ? "A clear agreement" : "স্পষ্ট সমঝোতা")}</HeroEyebrow>
          <HeroTitle locale={locale} className="max-w-[12ch]">{title} <span className="gold-text">{highlightText}</span></HeroTitle>
        </div>
        <div className="rounded-3xl border border-white/[0.08] bg-[#0d0d0c] p-6 md:p-8">
          <p className="text-base leading-8 text-[#aaa69c] md:text-lg">{description}</p>
          <div className="mt-7 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] text-sm">
            <div className="bg-[#10100f] p-4"><strong className="block font-medium text-white">{privacy ? (isEn ? "No sale" : "বিক্রি নয়") : (isEn ? "Plain language" : "সহজ ভাষা")}</strong><span className="mt-1 block text-xs text-[#77736b]">{privacy ? (isEn ? "of personal data" : "ব্যক্তিগত তথ্য") : (isEn ? "readable terms" : "পাঠযোগ্য শর্ত")}</span></div>
            <div className="bg-[#10100f] p-4"><strong className="block font-medium text-white">{isEn ? "Updated" : "হালনাগাদ"}</strong><span className="mt-1 block text-xs text-[#77736b]">2026</span></div>
          </div>
        </div>
      </div>
    </HeroFrame>
  );
}
