import Link from "next/link";
import { ArrowLeft, CheckCircle2, Lock, Scale, ShieldCheck, Sparkles } from "lucide-react";

import type { SiteLocale } from "@/lib/locale";
import { localizePath } from "@/lib/locale";

interface LegalHeroProps {
  title: string;
  highlightText: string;
  description: string;
  type: "privacy" | "terms";
  locale?: SiteLocale;
}

export function LegalHero({ title, highlightText, description, type, locale = "bn" }: LegalHeroProps) {
  const isEn = locale === "en";

  return (
    <section className="relative overflow-hidden border-b border-white/[0.08] bg-[#050505] pt-32 pb-16 lg:pt-36 lg:pb-20">
      {/* Ambient background glows */}
      <div className="grid-veil pointer-events-none absolute inset-0 opacity-80" />
      <div className="paper-noise pointer-events-none absolute inset-0 opacity-[0.03]" />
      <div className="hero-mesh-bg pointer-events-none absolute inset-0" />
      <div className="animate-breathe pointer-events-none absolute -right-28 top-16 size-[38rem] rounded-full bg-[#d6a642]/[0.08] blur-[140px]" />

      <div className="page-shell relative z-10">
        {/* Navigation Breadcrumb */}
        <div className="mb-8 flex items-center gap-3">
          <Link
            href={localizePath("/", locale)}
            className="group inline-flex items-center gap-2 text-xs font-medium text-[#88847b] transition hover:text-[#d6a642]"
          >
            <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-1" />
            {isEn ? "Back to Home" : "হোমে ফিরুন"}
          </Link>
          <span className="text-white/20">/</span>
          <span className="text-xs text-[#d6a642] font-medium">
            {type === "privacy" ? (isEn ? "Privacy" : "গোপনীয়তা") : (isEn ? "Terms" : "শর্তাবলি")}
          </span>
        </div>

        {/* Hero Content */}
        <div className="max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d6a642]/30 bg-[#14120c]/80 px-3.5 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-[#f2d080] backdrop-blur-md">
            {type === "privacy" ? (
              <ShieldCheck className="size-3 text-[#d6a642]" />
            ) : (
              <Scale className="size-3 text-[#d6a642]" />
            )}
            {isEn ? "Official Platform Charter" : "অফিসিয়াল নীতিমালা ও নির্দেশিকা"}
          </div>

          <h1 className="text-balance text-[clamp(2.8rem,6.5vw,5.4rem)] font-medium leading-[0.92] tracking-[-0.045em] text-white">
            {title} <span className="gold-text">{highlightText}</span>
          </h1>

          <p className="mt-6 text-balance text-base leading-relaxed text-[#aaa69c] md:text-lg">
            {description}
          </p>

          {/* Trust Guarantees Matrix */}
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#0d0d0c] px-3.5 py-2 text-xs text-[#c4c0b5]">
              <CheckCircle2 className="size-3.5 text-[#d6a642]" />
              {isEn ? "Zero Third-Party Data Selling" : "কোনো বাণিজ্যিক তথ্য বিক্রয় নয়"}
            </span>
            <span className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#0d0d0c] px-3.5 py-2 text-xs text-[#c4c0b5]">
              <Lock className="size-3.5 text-[#77bfd4]" />
              {isEn ? "SSL Secured Experience" : "নিরাপদ এনক্রিপশন"}
            </span>
            <span className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#0d0d0c] px-3.5 py-2 text-xs text-[#c4c0b5]">
              <Scale className="size-3.5 text-[#d6a642]" />
              {isEn ? "Updated 2026" : "হালনাগাদ: ২০২৬"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
