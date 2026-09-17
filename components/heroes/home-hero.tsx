import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, Award, BookOpen, Building2, ChevronRight, Compass, GraduationCap, Headphones, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { SiteLocale } from "@/lib/locale";
import { localizePath } from "@/lib/locale";

interface HomeHeroProps {
  locale?: SiteLocale;
}

export function HomeHero({ locale = "bn" }: HomeHeroProps) {
  const isEn = locale === "en";

  return (
    <section className="relative min-h-[56rem] overflow-hidden border-b border-white/[0.08] bg-[#050505] pt-32 pb-16 lg:min-h-screen lg:pt-36 lg:pb-20">
      {/* Ambient background glows */}
      <div className="grid-veil pointer-events-none absolute inset-0 opacity-80" />
      <div className="paper-noise pointer-events-none absolute inset-0 opacity-[0.03]" />
      <div className="hero-mesh-bg pointer-events-none absolute inset-0" />
      <div className="animate-breathe pointer-events-none absolute -right-32 top-16 size-[40rem] rounded-full bg-[#d6a642]/[0.09] blur-[140px]" />
      <div className="animate-glow-pulse pointer-events-none absolute -left-32 top-1/2 size-[32rem] rounded-full bg-[#77bfd4]/[0.04] blur-[140px]" />

      <div className="page-shell relative z-10 flex min-h-[calc(100vh-14rem)] flex-col justify-between">
        <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
          {/* Left Column: Typography & CTAs */}
          <div className="relative z-10 max-w-3xl">
            {/* Live status badge */}
            <div className="mb-6 inline-flex flex-wrap items-center gap-2.5 rounded-full border border-[#d6a642]/30 bg-[#14120c]/80 px-4 py-1.5 backdrop-blur-md">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#d6a642] opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-[#f0c86a]" />
              </span>
              <span className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[#f2d080]">
                {isEn ? "Supply Chain Leader · Academic · Author" : "সাপ্লাই চেইন ও মেরিটাইম লজিস্টিকস বিশেষজ্ঞ · গবেষক · লেখক"}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-balance text-[clamp(3.6rem,7.5vw,6.8rem)] font-medium leading-[0.88] tracking-[-0.05em] text-white">
              {isEn ? (
                <>
                  Dr. Ferdoush<br />
                  <span className="gold-text">Saleheen</span>
                </>
              ) : (
                <>
                  ড. ফেরদৌস<br />
                  <span className="gold-text">সালেহীন</span>
                </>
              )}
            </h1>

            {/* Tagline / Subtitle */}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <span className="inline-block h-px w-8 bg-[#d6a642]/60" />
              <p className="text-balance text-[clamp(1.25rem,2.5vw,1.9rem)] font-medium leading-snug tracking-[-0.025em] text-[#e8e4db]">
                {isEn
                  ? "Leadership in supply chains. Reflection rooted in faith."
                  : "সাপ্লাই চেইনে নেতৃত্ব। বিশ্বাসের আলোকে অনুধ্যান।"}
              </p>
            </div>

            {/* Description Paragraph */}
            <p className="mt-6 max-w-2xl text-balance text-base leading-relaxed text-[#aaa69c] md:text-lg">
              {isEn
                ? "Connecting two distinct realms with uncompromised depth: global industry-driven supply-chain scholarship and contemplative Qur’anic literature—each cultivated for its own purpose and audience."
                : "দুটি স্বতন্ত্র কাজের ধারা—শিল্প-অভিজ্ঞতাভিত্তিক সাপ্লাই চেইন গবেষণা এবং দাওয়াহকেন্দ্রিক কুরআনিক অনুধ্যান; নিজ নিজ উদ্দেশ্য ও পাঠকের জন্য গভীর মর্যাদায় উপস্থাপিত।"}
            </p>

            {/* CTA Group */}
            <div className="mt-9 flex flex-wrap items-center gap-3.5">
              <Button asChild size="lg" className="group shadow-[0_12px_36px_-10px_rgba(214,166,66,0.4)]">
                <Link href={localizePath("/about", locale)} className="flex items-center gap-2 font-medium">
                  {isEn ? "Explore Biography" : "পেশাগত পরিচিতি"}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>

              <Button asChild size="lg" variant="outline" className="border-white/15 bg-white/[0.03] backdrop-blur-md hover:border-[#d6a642]/50 hover:bg-[#d6a642]/10">
                <Link href={localizePath("/books", locale)} className="flex items-center gap-2">
                  <BookOpen className="size-4 text-[#d6a642]" />
                  {isEn ? "Publications" : "বই ও প্রকাশনা"}
                </Link>
              </Button>

              <Link
                href={localizePath("/audiobooks", locale)}
                className="group inline-flex items-center gap-2.5 rounded-xl border border-white/10 bg-[#0d0d0c]/70 px-4 py-2.5 text-xs text-[#c4c0b5] backdrop-blur-md transition hover:border-[#d6a642]/40 hover:text-white"
              >
                <span className="flex size-7 items-center justify-center rounded-lg bg-[#d6a642]/15 text-[#f0c86a]">
                  <Headphones className="size-3.5" />
                </span>
                <span className="flex flex-col text-left">
                  <strong className="text-[0.72rem] font-medium leading-none text-white">
                    {isEn ? "Bangla Audiobook" : "বাংলা অডিওবুক"}
                  </strong>
                  <span className="mt-0.5 text-[0.62rem] text-[#918d84]">
                    {isEn ? "Surah Al-Fatihah" : "সুরা আল-ফাতিহা"}
                  </span>
                </span>
                <div className="equalizer ml-1 flex h-3 items-end gap-[2px]">
                  <span className="h-full w-[2px] bg-[#d6a642]" />
                  <span className="h-full w-[2px] bg-[#d6a642]" />
                  <span className="h-full w-[2px] bg-[#d6a642]" />
                </div>
              </Link>
            </div>

            {/* Quick trust indicators */}
            <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-white/[0.08] pt-6 text-xs text-[#8c887f]">
              <span className="flex items-center gap-2">
                <GraduationCap className="size-4 text-[#d6a642]" />
                {isEn ? "Sharjah Maritime Academy, UAE" : "শারজাহ মেরিটাইম একাডেমি, ইউএই"}
              </span>
              <span className="flex items-center gap-2">
                <Award className="size-4 text-[#d6a642]" />
                {isEn ? "FCILT Chartered Fellow" : "এফসিআইএলটি ফেলো"}
              </span>
              <span className="flex items-center gap-2">
                <Sparkles className="size-4 text-[#d6a642]" />
                {isEn ? "Taylor & Francis Author" : "টেইলর অ্যান্ড ফ্রান্সিস লেখক"}
              </span>
            </div>
          </div>

          {/* Right Column: Luxury Framed Visual Showcase */}
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            {/* Background halo glow */}
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-[#d6a642]/20 via-[#77bfd4]/10 to-transparent blur-2xl opacity-60" />

            {/* Main Portrait Container */}
            <div className="gold-glow-card relative aspect-[4/4.7] w-full overflow-hidden rounded-[2rem] border border-white/10 bg-[#0e0e0d] shadow-[0_32px_90px_rgba(0,0,0,0.7)]">
              <Image
                src="/fsPhoto.webp"
                alt={isEn ? "Portrait of Dr. Ferdoush Saleheen" : "ড. ফেরদৌস সালেহীনের প্রতিকৃতি"}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-top filter brightness-[1.02] contrast-[1.03]"
              />

              {/* Atmospheric lighting gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#060606] via-[#060606]/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/30" />

              {/* Floating Badge: Top Right */}
              <div className="animate-float-slow absolute right-4 top-4 z-20 max-w-[15rem] rounded-xl border border-white/15 bg-black/75 p-3 backdrop-blur-xl shadow-xl">
                <div className="flex items-start gap-2.5">
                  <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-lg bg-[#d6a642]/20 text-[#f0c86a]">
                    <Building2 className="size-3.5" />
                  </span>
                  <div>
                    <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-[#d6a642]">
                      {isEn ? "Current Appointment" : "বর্তমান পদমর্যাদা"}
                    </span>
                    <strong className="mt-0.5 block text-xs font-medium leading-tight text-white">
                      {isEn ? "Head of Maritime Logistics & SCM" : "বিভাগীয় প্রধান · মেরিটাইম লজিস্টিকস"}
                    </strong>
                    <span className="block text-[0.65rem] text-[#918d84]">
                      {isEn ? "Sharjah Maritime Academy · UAE" : "Sharjah Maritime Academy · UAE"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Multi-Channel Floating Card */}
              <div className="absolute inset-x-4 bottom-4 z-20 grid grid-cols-2 gap-2 rounded-2xl border border-white/10 bg-[#0b0b0a]/85 p-2 backdrop-blur-xl shadow-2xl">
                <div className="rounded-xl border border-white/[0.07] bg-white/[0.03] p-3 transition hover:border-[#77bfd4]/30">
                  <span className="mb-1 flex items-center gap-1.5 text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-[#77bfd4]">
                    <GraduationCap className="size-3" />
                    {isEn ? "Academic" : "একাডেমিক"}
                  </span>
                  <strong className="block text-xs font-medium leading-snug text-white">
                    {isEn ? "Global Supply Chain & Logistics" : "সাপ্লাই চেইন ও লজিস্টিকস"}
                  </strong>
                  <span className="mt-1 block text-[0.62rem] text-[#99958c]">
                    {isEn ? "34+ Research Works" : "৩৪+ গবেষণা ও প্রকাশনা"}
                  </span>
                </div>

                <div className="rounded-xl border border-white/[0.07] bg-white/[0.03] p-3 transition hover:border-[#f0c86a]/30">
                  <span className="mb-1 flex items-center gap-1.5 text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-[#f0c86a]">
                    <BookOpen className="size-3" />
                    {isEn ? "Dawah" : "দাওয়াহ"}
                  </span>
                  <strong className="block text-xs font-medium leading-snug text-white">
                    {isEn ? "Surah Al-Fatihah" : "সুরা আল-ফাতিহা: ৭ আয়াত"}
                  </strong>
                  <span className="mt-1 block text-[0.62rem] text-[#99958c]">
                    {isEn ? "Book & Bangla Audiobook" : "বই ও পূর্ণাঙ্গ অডিওবুক"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Metrics Ribbon */}
        <div className="mt-14 rounded-2xl border border-white/[0.08] bg-[#0c0c0b]/80 p-5 backdrop-blur-xl">
          <div className="grid grid-cols-2 gap-4 divide-y divide-white/[0.06] sm:grid-cols-4 sm:divide-x sm:divide-y-0">
            <div className="flex flex-col items-center justify-center px-4 py-2 text-center">
              <strong className="gold-text text-3xl font-semibold tracking-tight md:text-4xl">
                {isEn ? "20+" : "২০+"}
              </strong>
              <span className="mt-1 text-xs text-[#9c988f]">
                {isEn ? "Years Leadership & Experience" : "বছরের অভিজ্ঞতা ও নেতৃত্ব"}
              </span>
            </div>
            <div className="flex flex-col items-center justify-center px-4 py-2 text-center">
              <strong className="gold-text text-3xl font-semibold tracking-tight md:text-4xl">
                {isEn ? "34+" : "৩৪+"}
              </strong>
              <span className="mt-1 text-xs text-[#9c988f]">
                {isEn ? "Publications & Book Chapters" : "গবেষণা ও গ্রন্থ অধ্যায়"}
              </span>
            </div>
            <div className="flex flex-col items-center justify-center px-4 py-2 text-center">
              <strong className="gold-text text-3xl font-semibold tracking-tight md:text-4xl">
                {isEn ? "100+" : "১০০+"}
              </strong>
              <span className="mt-1 text-xs text-[#9c988f]">
                {isEn ? "Executive Training Workshops" : "কর্পোরেট প্রশিক্ষণ কর্মশালা"}
              </span>
            </div>
            <div className="flex flex-col items-center justify-center px-4 py-2 text-center">
              <strong className="gold-text text-3xl font-semibold tracking-tight md:text-4xl">
                {isEn ? "02" : "০২"}
              </strong>
              <span className="mt-1 text-xs text-[#9c988f]">
                {isEn ? "Distinct Intellectual Streams" : "স্বতন্ত্র বুদ্ধিবৃত্তিক ধারা"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
