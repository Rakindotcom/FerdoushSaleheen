import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clapperboard, ExternalLink, Facebook, Film, Play, Sparkles, Video } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { SiteLocale } from "@/lib/locale";
import { localizePath } from "@/lib/locale";
import { facebookVideos } from "@/lib/facebook-videos";

interface VideosHeroProps {
  locale?: SiteLocale;
}

export function VideosHero({ locale = "bn" }: VideosHeroProps) {
  const isEn = locale === "en";

  return (
    <section className="relative overflow-hidden border-b border-white/[0.08] bg-[#050505] pt-32 pb-16 lg:pt-36 lg:pb-20">
      {/* Ambient background glows */}
      <div className="grid-veil pointer-events-none absolute inset-0 opacity-80" />
      <div className="paper-noise pointer-events-none absolute inset-0 opacity-[0.03]" />
      <div className="hero-mesh-bg pointer-events-none absolute inset-0" />
      <div className="animate-breathe pointer-events-none absolute -right-28 top-16 size-[38rem] rounded-full bg-[#d6a642]/[0.08] blur-[140px]" />
      <div className="animate-glow-pulse pointer-events-none absolute -left-28 bottom-10 size-[32rem] rounded-full bg-[#1877f2]/[0.05] blur-[140px]" />

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
            {isEn ? "Videos & Reels" : "ভিডিও ও রিলস"}
          </span>
        </div>

        {/* Hero Content */}
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d6a642]/30 bg-[#14120c]/80 px-3.5 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-[#f2d080] backdrop-blur-md">
              <Film className="size-3 text-[#d6a642]" />
              {isEn ? "Cinematic Video Archive · Facebook Reels" : "সংক্ষিপ্ত ভাবনা ও ভিডিও অনুধ্যানের সংকলন"}
            </div>

            <h1 className="text-balance text-[clamp(2.8rem,6.5vw,5.6rem)] font-medium leading-[0.92] tracking-[-0.045em] text-white">
              {isEn ? (
                <>
                  Selected <span className="gold-text">Videos &amp; Reels</span>
                </>
              ) : (
                <>
                  নির্বাচিত <span className="gold-text">ভিডিও ও রিলস</span>
                </>
              )}
            </h1>

            <p className="mt-6 text-balance text-base leading-relaxed text-[#aaa69c] md:text-lg">
              {isEn
                ? "Bite-sized reflections, insights on faith, Qur’anic thought, executive leadership, and modern career ethics delivered directly by Dr. Ferdoush Saleheen."
                : "বিশ্বাস, জীবন, কুরআনিক অনুধ্যান, নেতৃত্ব ও ব্যবসা বিষয়ে ড. ফেরদৌস সালেহীনের সংক্ষিপ্ত ভিডিও এবং রিলের নির্বাচিত সংগ্রহ। দেখুন, ভাবুন এবং প্রাত্যহিক জীবনে ধারণ করুন।"}
            </p>

            {/* Quick badges */}
            <div className="mt-8 flex flex-wrap gap-2.5">
              <span className="flex items-center gap-1.5 rounded-xl border border-white/10 bg-[#0d0d0c] px-3.5 py-2 text-xs text-[#c4c0b5]">
                <Facebook className="size-4 text-[#1877f2]" />
                {isEn ? "Facebook Watch Library" : "Facebook Watch ভিডিও"}
              </span>
              <span className="flex items-center gap-1.5 rounded-xl border border-white/10 bg-[#0d0d0c] px-3.5 py-2 text-xs text-[#c4c0b5]">
                <Video className="size-4 text-[#d6a642]" />
                {isEn ? `${facebookVideos.length} Curated Videos` : `${facebookVideos.length}টি নির্বাচিত ভিডিও`}
              </span>
              <span className="flex items-center gap-1.5 rounded-xl border border-white/10 bg-[#0d0d0c] px-3.5 py-2 text-xs text-[#c4c0b5]">
                <Clapperboard className="size-4 text-[#77bfd4]" />
                {isEn ? "High-Impact Short Form" : "সংক্ষিপ্ত অনুধ্যান"}
              </span>
            </div>

            {/* Jump CTA */}
            <div className="mt-8">
              <Button asChild size="lg" className="group shadow-[0_12px_36px_-10px_rgba(214,166,66,0.4)]">
                <a href="#video-grid" className="flex items-center gap-2">
                  <Play className="size-4 fill-current transition-transform group-hover:scale-110" />
                  {isEn ? "Browse All Video Clips" : "সকল ভিডিও দেখুন"}
                </a>
              </Button>
            </div>
          </div>

          {/* Right Column: Cinema Spotlight Aesthetic Card */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="gold-glow-card relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0e0e0d] p-6 backdrop-blur-xl shadow-[0_30px_70px_rgba(0,0,0,0.7)]">
              {/* Film Frame Visual Header */}
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                <div className="flex items-center gap-2 text-xs text-[#d6a642]">
                  <Film className="size-4" />
                  <span className="font-semibold uppercase tracking-[0.14em]">
                    {isEn ? "Video Reel 01" : "ভিডিও ০১"}
                  </span>
                </div>
                <span className="rounded-full bg-[#1877f2]/15 px-2.5 py-0.5 text-[0.68rem] font-semibold text-[#5ba2f7]">
                  Facebook Watch
                </span>
              </div>

              {/* Video preview teaser */}
              <div className="relative mt-4 aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-[#141412]">
                <Image
                  src={`/facebook-videos/${facebookVideos[0].id}.webp`}
                  alt={isEn ? facebookVideos[0].titleEn : facebookVideos[0].titleBn}
                  fill
                  sizes="(max-width: 1024px) 100vw, 34vw"
                  className="size-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <span className="grid size-12 place-items-center rounded-full bg-[#d6a642] text-black shadow-lg">
                    <Play className="size-5 fill-current translate-x-0.5" />
                  </span>
                </div>
              </div>

              <h2 className="mt-4 text-base font-medium leading-snug text-white">
                {isEn ? facebookVideos[0].titleEn : facebookVideos[0].titleBn}
              </h2>
              <p className="mt-2 text-xs text-[#969289]">
                {isEn
                  ? "Directly playable in the browser or on the official Facebook page."
                  : "ব্রাউজারেই সরাসরি দেখার সুবিধা অথবা Facebook অ্যাপে ওপেন করার লিংক।"
                }
              </p>

              <div className="mt-5 border-t border-white/[0.08] pt-4">
                <a
                  href={facebookVideos[0].url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-medium text-[#d6a642] transition hover:text-[#f0c86a]"
                >
                  <ExternalLink className="size-3.5" />
                  {isEn ? "Open directly on Facebook" : "Facebook-এ সরাসরি দেখুন"}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
