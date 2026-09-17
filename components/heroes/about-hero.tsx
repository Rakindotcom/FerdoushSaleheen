import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Award, BookOpen, Building2, CheckCircle2, ExternalLink, Facebook, GraduationCap, Linkedin, Mail, MapPin, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { SiteLocale } from "@/lib/locale";
import { localizePath } from "@/lib/locale";
import { profile } from "@/lib/profile-data";
import { profileBn } from "@/lib/profile-data-bn";

interface AboutHeroProps {
  locale?: SiteLocale;
}

export function AboutHero({ locale = "bn" }: AboutHeroProps) {
  const isEn = locale === "en";
  const data = isEn ? profile : profileBn;

  return (
    <section className="relative overflow-hidden border-b border-white/[0.08] bg-[#050505] pt-32 pb-16 lg:pt-36 lg:pb-20">
      {/* Ambient background glows */}
      <div className="grid-veil pointer-events-none absolute inset-0 opacity-80" />
      <div className="paper-noise pointer-events-none absolute inset-0 opacity-[0.03]" />
      <div className="hero-mesh-bg pointer-events-none absolute inset-0" />
      <div className="animate-breathe pointer-events-none absolute -right-28 top-20 size-[36rem] rounded-full bg-[#d6a642]/[0.08] blur-[130px]" />
      <div className="animate-glow-pulse pointer-events-none absolute -left-28 bottom-10 size-[32rem] rounded-full bg-[#77bfd4]/[0.05] blur-[130px]" />

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
            {isEn ? "Professional Profile" : "পেশাগত পরিচিতি"}
          </span>
        </div>

        {/* Hero Grid */}
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Left: Bio, Titles, and Contact Dock */}
          <div>
            {/* Status tag */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d6a642]/30 bg-[#14120c]/80 px-3.5 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-[#f2d080] backdrop-blur-md">
              <Sparkles className="size-3 text-[#d6a642]" />
              {isEn ? "Academician · Industry Leader · Author" : "শিক্ষাবিদ · শিল্পনেতা · গবেষক · লেখক"}
            </div>

            {/* Name with credentials */}
            <h1 className="text-balance text-[clamp(2.8rem,6vw,5.2rem)] font-medium leading-[0.92] tracking-[-0.045em] text-white">
              {isEn ? (
                <>
                  Dr. Ferdoush <span className="gold-text">Saleheen</span>
                </>
              ) : (
                <>
                  ড. ফেরদৌস <span className="gold-text">সালেহীন</span>
                </>
              )}
            </h1>

            {/* Post nominal credential badge */}
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <span className="rounded-md border border-[#d6a642]/40 bg-[#d6a642]/10 px-2.5 py-0.5 text-xs font-semibold text-[#f0c86a]">
                PhD
              </span>
              <span className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-0.5 text-xs font-medium text-[#c5c1b6]">
                FCILT (Chartered Fellow)
              </span>
              <span className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-0.5 text-xs font-medium text-[#c5c1b6]">
                Scopus &amp; WoS Author
              </span>
            </div>

            {/* Current Executive Appointment Banner */}
            <div className="mt-6 rounded-2xl border border-white/[0.09] bg-[#0f0e0c]/90 p-5 backdrop-blur-md shadow-lg">
              <span className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[#d6a642]">
                {isEn ? "Current Executive Leadership" : "বর্তমান একাডেমিক ও প্রাতিষ্ঠানিক দায়িত্ব"}
              </span>
              <h2 className="mt-1 text-lg font-medium leading-snug text-white md:text-xl">
                {isEn ? profile.currentTitle : profileBn.currentTitle}
              </h2>
              <p className="mt-1 flex items-center gap-2 text-xs text-[#9c978d]">
                <Building2 className="size-3.5 text-[#d6a642]" />
                Sharjah Maritime Academy · {isEn ? "Sharjah, United Arab Emirates" : "শারজাহ, সংযুক্ত আরব আমিরাত"}
              </p>
            </div>

            {/* Concise Bio Snapshot */}
            <p className="mt-6 text-balance text-base leading-relaxed text-[#aaa69c] md:text-lg">
              {isEn
                ? "Over two decades of transformative leadership bridging corporate executive roles across FMCG, retail, agribusiness, and higher education. He spearheads maritime logistics education, applied research, and corporate capability development."
                : "সাপ্লাই চেইন, লজিস্টিকস, কর্পোরেট রূপান্তর ও উচ্চশিক্ষায় দুই দশকেরও বেশি অভিজ্ঞতা। এফএমসিজি, রিটেইল ও এগ্রিবিজনেস-এ শীর্ষ নির্বাহী নেতৃত্বের পর বর্তমানে তিনি মেরিটাইম লজিস্টিকস ও সাপ্লাই চেইন শিক্ষায় দিকনির্দেশনা দিচ্ছেন।"}
            </p>

            {/* Quick Contact & Social Dock */}
            <div className="mt-8 flex flex-wrap gap-2.5">
              <a
                href={`mailto:${data.email}`}
                className="group flex items-center gap-2.5 rounded-xl border border-white/10 bg-[#0d0d0c] px-4 py-2.5 text-xs text-[#aaa69c] transition hover:border-[#d6a642]/40 hover:text-white"
              >
                <Mail className="size-3.5 text-[#d6a642]" />
                <span className="font-medium">{data.email}</span>
              </a>

              <a
                href={data.linkedIn}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-2 rounded-xl border border-white/10 bg-[#0d0d0c] px-4 py-2.5 text-xs text-[#aaa69c] transition hover:border-[#d6a642]/40 hover:text-white"
              >
                <Linkedin className="size-3.5 text-[#d6a642]" />
                <span className="font-medium">LinkedIn</span>
                <ExternalLink className="size-3 opacity-60 group-hover:opacity-100" />
              </a>

              <a
                href={data.facebook}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-2 rounded-xl border border-white/10 bg-[#0d0d0c] px-4 py-2.5 text-xs text-[#aaa69c] transition hover:border-[#d6a642]/40 hover:text-white"
              >
                <Facebook className="size-3.5 text-[#d6a642]" />
                <span className="font-medium">Facebook</span>
                <ExternalLink className="size-3 opacity-60 group-hover:opacity-100" />
              </a>

              <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#0d0d0c] px-4 py-2.5 text-xs text-[#8c877e]">
                <MapPin className="size-3.5 text-[#d6a642]" />
                <span>{isEn ? profile.contactLocation : profileBn.contactLocation}</span>
              </div>
            </div>
          </div>

          {/* Right: Framed Scholar Portrait Card with Floating Accreditation */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="gold-glow-card relative aspect-[4/4.8] w-full overflow-hidden rounded-[2rem] border border-white/10 bg-[#0e0e0d] shadow-[0_32px_90px_rgba(0,0,0,0.7)]">
              <Image
                src="/fsPhoto.webp"
                alt={isEn ? "Dr. Ferdoush Saleheen" : "ড. ফেরদৌস সালেহীন"}
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 440px"
                className="object-cover object-top filter brightness-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060606] via-[#060606]/20 to-transparent" />

              {/* Bottom Info Ribbon */}
              <div className="absolute inset-x-4 bottom-4 z-20 rounded-2xl border border-white/10 bg-[#0b0b0a]/90 p-4 backdrop-blur-xl shadow-2xl">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[#d6a642]">
                      {isEn ? "Verified Scholar & Author" : "যাচাইকৃত শিক্ষাবিদ ও লেখক"}
                    </span>
                    <strong className="block text-sm font-medium text-white">
                      {isEn ? "Dr. Ferdoush Saleheen" : "ড. ফেরদৌস সালেহীন"}
                    </strong>
                    <span className="block text-[0.68rem] text-[#9c978d]">
                      {isEn ? "Sharjah Maritime Academy, UAE" : "Sharjah Maritime Academy, UAE"}
                    </span>
                  </div>
                  <div className="grid size-11 place-items-center rounded-xl border border-[#d6a642]/30 bg-[#d6a642]/10 text-[#f0c86a]">
                    <Award className="size-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Integrated 5-Pillar Stats Dashboard */}
        <div className="mt-14 rounded-2xl border border-white/[0.08] bg-[#0c0c0b]/80 p-5 backdrop-blur-xl">
          <div className="grid grid-cols-2 gap-4 divide-y divide-white/[0.06] sm:grid-cols-3 sm:divide-x sm:divide-y-0 lg:grid-cols-5">
            <div className="flex flex-col items-center justify-center px-3 py-2 text-center">
              <strong className="gold-text text-3xl font-semibold tracking-tight md:text-4xl">
                {isEn ? "20+" : "২০+"}
              </strong>
              <span className="mt-1 text-xs text-[#9c988f]">
                {isEn ? "Years Experience" : "বছরের সামগ্রিক অভিজ্ঞতা"}
              </span>
            </div>
            <div className="flex flex-col items-center justify-center px-3 py-2 text-center">
              <strong className="gold-text text-3xl font-semibold tracking-tight md:text-4xl">
                {isEn ? "34+" : "৩৪+"}
              </strong>
              <span className="mt-1 text-xs text-[#9c988f]">
                {isEn ? "Research & Chapters" : "গবেষণা ও প্রকাশনা"}
              </span>
            </div>
            <div className="flex flex-col items-center justify-center px-3 py-2 text-center">
              <strong className="gold-text text-3xl font-semibold tracking-tight md:text-4xl">
                {isEn ? "100+" : "১০০+"}
              </strong>
              <span className="mt-1 text-xs text-[#9c988f]">
                {isEn ? "Corporate Workshops" : "কর্পোরেট প্রশিক্ষণ"}
              </span>
            </div>
            <div className="flex flex-col items-center justify-center px-3 py-2 text-center">
              <strong className="gold-text text-3xl font-semibold tracking-tight md:text-4xl">
                {isEn ? "15+" : "১৫+"}
              </strong>
              <span className="mt-1 text-xs text-[#9c988f]">
                {isEn ? "Years Corporate Lead" : "বছর কর্পোরেট নেতৃত্ব"}
              </span>
            </div>
            <div className="flex flex-col items-center justify-center px-3 py-2 text-center">
              <strong className="gold-text text-3xl font-semibold tracking-tight md:text-4xl">
                {isEn ? "10+" : "১০+"}
              </strong>
              <span className="mt-1 text-xs text-[#9c988f]">
                {isEn ? "Years in Academia" : "বছর উচ্চশিক্ষা ও গবেষণা"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
