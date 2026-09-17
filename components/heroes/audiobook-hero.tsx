import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Headphones, Mic2, Play, Radio, RotateCcw, Sparkles, Volume2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { SiteLocale } from "@/lib/locale";
import { localizePath } from "@/lib/locale";
import { surahAlFatihahAudiobook } from "@/lib/audiobook-data";

interface AudiobookHeroProps {
  locale?: SiteLocale;
}

export function AudiobookHero({ locale = "bn" }: AudiobookHeroProps) {
  const isEn = locale === "en";

  return (
    <section className="relative overflow-hidden border-b border-white/[0.08] bg-[#050505] pt-32 pb-16 lg:pt-36 lg:pb-20">
      {/* Ambient background glows */}
      <div className="grid-veil pointer-events-none absolute inset-0 opacity-80" />
      <div className="paper-noise pointer-events-none absolute inset-0 opacity-[0.03]" />
      <div className="hero-mesh-bg pointer-events-none absolute inset-0" />
      <div className="animate-breathe pointer-events-none absolute -right-28 top-16 size-[38rem] rounded-full bg-[#d6a642]/[0.09] blur-[140px]" />
      <div className="animate-glow-pulse pointer-events-none absolute -left-28 bottom-10 size-[32rem] rounded-full bg-[#77bfd4]/[0.05] blur-[140px]" />

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
            {isEn ? "Audiobook" : "অডিওবুক"}
          </span>
        </div>

        {/* Hero Grid */}
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Left: Heading, Acoustic Atmosphere & Smart Features */}
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d6a642]/30 bg-[#14120c]/80 px-3.5 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-[#f2d080] backdrop-blur-md">
              <span className="flex size-2 rounded-full bg-[#d6a642] animate-ping" />
              <Headphones className="size-3 text-[#d6a642]" />
              {isEn ? "Official Audio Edition · Free Streaming" : "অফিসিয়াল পূর্ণাঙ্গ বাংলা অডিওবুক"}
            </div>

            <h1 className="text-balance text-[clamp(2.8rem,6.5vw,5.4rem)] font-medium leading-[0.92] tracking-[-0.045em] text-white">
              {isEn ? (
                <>
                  Surah Al-Fatihah:<br />
                  <span className="gold-text">The Seven Verses</span>
                </>
              ) : (
                <>
                  সুরা আল-ফাতিহা:<br />
                  <span className="gold-text">সাতটি আয়াত অডিওবুক</span>
                </>
              )}
            </h1>

            <p className="mt-6 text-balance text-base leading-relaxed text-[#aaa69c] md:text-lg">
              {isEn
                ? "Immerse yourself in Dr. Ferdoush Saleheen's spoken reflections on Surah Al-Fatihah. Listen whenever it suits you—while travelling, resting, or in quiet contemplation."
                : "ড. ফেরদৌস সালেহীনের বইয়ের গভীর ভাবনা, ব্যাখ্যা ও আত্মঅনুসন্ধান এবার শুনুন আপনার সুবিধামতো সময়ে, যাত্রাপথে, অবসরে কিংবা নীরব গভীর মনোযোগে। সম্পূর্ণ বিনামূল্যে শুনুন।"}
            </p>

            {/* Acoustic Features Matrix */}
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-white/[0.08] bg-[#0c0c0b] p-3.5">
                <span className="flex items-center gap-1.5 text-[0.68rem] text-[#d6a642]">
                  <Clock className="size-3" />
                  {isEn ? "Full Duration" : "মোট সময়"}
                </span>
                <strong className="mt-1 block text-sm font-semibold text-white">১ ঘণ্টা ২১ মিনিট</strong>
              </div>

              <div className="rounded-xl border border-white/[0.08] bg-[#0c0c0b] p-3.5">
                <span className="flex items-center gap-1.5 text-[0.68rem] text-[#d6a642]">
                  <Mic2 className="size-3" />
                  {isEn ? "Narration" : "কণ্ঠ ও পাঠ"}
                </span>
                <strong className="mt-1 block text-sm font-semibold text-white">
                  {isEn ? "Author Himself" : "ড. ফেরদৌস সালেহীন"}
                </strong>
              </div>

              <div className="rounded-xl border border-white/[0.08] bg-[#0c0c0b] p-3.5 col-span-2 sm:col-span-1">
                <span className="flex items-center gap-1.5 text-[0.68rem] text-[#d6a642]">
                  <RotateCcw className="size-3" />
                  {isEn ? "Auto-Save" : "অগ্রগতি সংরক্ষণ"}
                </span>
                <strong className="mt-1 block text-sm font-semibold text-white">
                  {isEn ? "Saved in Browser" : "ব্রাউজারে সংরক্ষিত"}
                </strong>
              </div>
            </div>

            {/* Equalizer Animation & CTA */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button asChild size="lg" className="group shadow-[0_12px_36px_-10px_rgba(214,166,66,0.4)]">
                <a href="#audiobook-player-section" className="flex items-center gap-2">
                  <Play className="size-4 fill-current transition-transform group-hover:scale-110" />
                  {isEn ? "Listen to Audiobook Now" : "এখনই অডিওবুক শুনুন"}
                </a>
              </Button>

              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-xs text-[#c4c0b5]">
                <Volume2 className="size-4 text-[#d6a642]" />
                <span>{isEn ? "High-Fidelity Mastered Audio" : "উচ্চমানের স্টুডিও অডিও"}</span>
                <div className="equalizer flex h-4 items-end gap-[2px]">
                  <span className="h-full w-[2px] bg-[#d6a642]" />
                  <span className="h-full w-[2px] bg-[#d6a642]" />
                  <span className="h-full w-[2px] bg-[#d6a642]" />
                  <span className="h-full w-[2px] bg-[#d6a642]" />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Acoustic Lounge Visual with Rotating Vinyl & Book Cover */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative flex items-center justify-center p-6">
              {/* Rotating Vinyl Record Effect in background */}
              <div className="animate-spin-slow absolute size-64 sm:size-80 rounded-full border border-white/10 bg-[radial-gradient(circle,#1a1a18_20%,#090908_60%,#181816_100%)] opacity-85 shadow-[0_0_80px_rgba(214,166,66,0.15)]">
                {/* Vinyl Grooves */}
                <div className="absolute inset-4 rounded-full border border-white/[0.04]" />
                <div className="absolute inset-8 rounded-full border border-white/[0.04]" />
                <div className="absolute inset-12 rounded-full border border-white/[0.04]" />
                <div className="absolute inset-16 rounded-full border border-white/[0.04]" />
                <div className="absolute inset-20 rounded-full border border-white/[0.04]" />
                {/* Vinyl Label Center */}
                <div className="absolute inset-0 m-auto size-24 rounded-full border border-[#d6a642]/40 bg-[#d6a642]/15 flex items-center justify-center">
                  <span className="text-[0.6rem] font-semibold text-[#f0c86a] tracking-widest uppercase">AUDIO</span>
                </div>
              </div>

              {/* Book Cover Showcase Card (Overlapping Vinyl) */}
              <div className="gold-glow-card relative z-10 aspect-[3/4] w-56 sm:w-64 overflow-hidden rounded-2xl border border-white/15 bg-[#121210] shadow-[0_30px_70px_rgba(0,0,0,0.8)]">
                <Image
                  src={surahAlFatihahAudiobook.cover}
                  alt={surahAlFatihahAudiobook.title}
                  fill
                  priority
                  sizes="280px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                <div className="absolute inset-x-3 bottom-3 rounded-xl border border-white/10 bg-black/80 p-2.5 backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <strong className="block text-xs text-white">সুরা আল-ফাতিহা</strong>
                      <span className="text-[0.65rem] text-[#d6a642]">৭ আয়াত · অডিওবুক</span>
                    </div>
                    <div className="grid size-8 place-items-center rounded-full bg-[#d6a642] text-black">
                      <Headphones className="size-3.5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
