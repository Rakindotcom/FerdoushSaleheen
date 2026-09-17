import Link from "next/link";
import { ArrowLeft, Mic2, Play, Radio, Sparkles, Tv, Youtube } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { SiteLocale } from "@/lib/locale";
import { localizePath } from "@/lib/locale";
import { podcastEpisodes } from "@/lib/podcast-data";

interface PodcastHeroProps {
  locale?: SiteLocale;
}

export function PodcastHero({ locale = "bn" }: PodcastHeroProps) {
  const isEn = locale === "en";
  const featured = podcastEpisodes[0];

  return (
    <section className="relative overflow-hidden border-b border-white/[0.08] bg-[#050505] pt-32 pb-16 lg:pt-36 lg:pb-20">
      {/* Ambient background glows */}
      <div className="grid-veil pointer-events-none absolute inset-0 opacity-80" />
      <div className="paper-noise pointer-events-none absolute inset-0 opacity-[0.03]" />
      <div className="hero-mesh-bg pointer-events-none absolute inset-0" />
      <div className="animate-breathe pointer-events-none absolute -right-28 top-16 size-[38rem] rounded-full bg-[#d6a642]/[0.09] blur-[140px]" />
      <div className="animate-glow-pulse pointer-events-none absolute -left-28 bottom-10 size-[32rem] rounded-full bg-[#e53e3e]/[0.04] blur-[140px]" />

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
            {isEn ? "Podcast Archive" : "পডকাস্ট আর্কাইভ"}
          </span>
        </div>

        {/* Hero Grid */}
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          {/* Left Column: Heading & Broadcast Aesthetics */}
          <div>
            {/* ON AIR Badge */}
            <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-red-500/30 bg-[#180d0d]/80 px-4 py-1.5 backdrop-blur-md">
              <span className="relative flex size-2.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex size-2.5 rounded-full bg-red-500" />
              </span>
              <span className="text-[0.7rem] font-bold tracking-[0.2em] text-red-400 uppercase">
                ON AIR · STUDIO
              </span>
              <span className="h-3 w-px bg-white/20" />
              <span className="text-[0.68rem] text-[#c7c2b6]">
                {isEn ? "Long-Form Conversations" : "পূর্ণাঙ্গ আলোচনা ও সাক্ষাৎকার"}
              </span>
            </div>

            <h1 className="text-balance text-[clamp(2.8rem,6.5vw,5.6rem)] font-medium leading-[0.92] tracking-[-0.045em] text-white">
              {isEn ? (
                <>
                  Dr. Ferdoush Saleheen <br />
                  <span className="gold-text">Podcast</span>
                </>
              ) : (
                <>
                  ড. ফেরদৌস সালেহীন <br />
                  <span className="gold-text">পডকাস্ট</span>
                </>
              )}
            </h1>

            <p className="mt-6 text-balance text-base leading-relaxed text-[#aaa69c] md:text-lg">
              {isEn
                ? "An organized archive of in-depth dialogues exploring faith, Qur’anic contemplation, corporate strategy, ethics, and critical questions of contemporary life."
                : "বিশ্বাস, জীবন, কুরআনিক অনুধ্যান, সাপ্লাই চেইন ও সময়ের গুরুত্বপূর্ণ প্রশ্ন নিয়ে সুসংগঠিত দীর্ঘ আলাপের আর্কাইভ। শুনুন, থামুন এবং নতুন দৃষ্টিকোণে ভাবুন।"}
            </p>

            {/* Quick platform indicators */}
            <div className="mt-8 flex flex-wrap gap-2.5">
              <span className="flex items-center gap-1.5 rounded-xl border border-white/10 bg-[#0d0d0c] px-3.5 py-2 text-xs text-[#c4c0b5]">
                <Youtube className="size-4 text-red-500" />
                {isEn ? "YouTube 4K Video" : "YouTube 4K ভিডিও"}
              </span>
              <span className="flex items-center gap-1.5 rounded-xl border border-white/10 bg-[#0d0d0c] px-3.5 py-2 text-xs text-[#c4c0b5]">
                <Mic2 className="size-4 text-[#d6a642]" />
                {isEn ? "4 Full Episodes" : "৪টি পূর্ণাঙ্গ পর্ব"}
              </span>
              <span className="flex items-center gap-1.5 rounded-xl border border-white/10 bg-[#0d0d0c] px-3.5 py-2 text-xs text-[#c4c0b5]">
                <Radio className="size-4 text-[#77bfd4]" />
                {isEn ? "Studio Sound" : "হাই-ফিডেলিটি অডিও"}
              </span>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <Button asChild size="lg" className="group shadow-[0_12px_36px_-10px_rgba(214,166,66,0.4)]">
                <a href="#featured-podcast" className="flex items-center gap-2">
                  <Play className="size-4 fill-current transition-transform group-hover:scale-110" />
                  {isEn ? "Watch Featured Episode" : "নির্বাচিত পর্বটি দেখুন"}
                </a>
              </Button>
            </div>
          </div>

          {/* Right Column: Featured Episode Spotlight Card */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="gold-glow-card relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0e0e0d] p-6 backdrop-blur-xl shadow-[0_30px_70px_rgba(0,0,0,0.7)]">
              {/* Top tag */}
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#d6a642]">
                  <Sparkles className="size-3.5" />
                  {isEn ? "Featured Episode #01" : "নির্বাচিত পর্ব ০১"}
                </span>
                <span className="rounded-full bg-red-500/10 px-2.5 py-0.5 text-[0.68rem] font-semibold text-red-400">
                  YouTube
                </span>
              </div>

              {/* YouTube Thumbnail Preview */}
              <div className="relative mt-4 aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-black">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://img.youtube.com/vi/${featured.videoId}/hqdefault.jpg`}
                  alt={isEn ? featured.titleEn : featured.titleBn}
                  className="size-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/35 flex items-center justify-center">
                  <span className="grid size-12 place-items-center rounded-full bg-[#d6a642] text-black shadow-lg">
                    <Play className="size-5 fill-current translate-x-0.5" />
                  </span>
                </div>
              </div>

              {/* Episode Title & Teaser */}
              <h2 className="mt-4 text-base font-medium leading-snug text-white">
                {isEn ? featured.titleEn : featured.titleBn}
              </h2>
              <p className="mt-2 text-xs leading-relaxed text-[#969289]">
                {isEn
                  ? "A compelling discussion addressing strategic wealth building, mindset, and principles in modern global hubs."
                  : "দুবাই ও বৈশ্বিক অর্থনৈতিক বাস্তবতায় সম্পদ, ক্যারিয়ার ও সঠিক মানসিকতার ওপর বিশেষ বিশ্লেষণ।"
                }
              </p>

              {/* Action */}
              <div className="mt-5 border-t border-white/[0.08] pt-4">
                <a
                  href={`https://youtu.be/${featured.videoId}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-medium text-[#d6a642] transition hover:text-[#f0c86a]"
                >
                  <Play className="size-3.5 fill-current" />
                  {isEn ? "Watch in high definition on YouTube" : "YouTube-এ পূর্ণাঙ্গ ভিডিও দেখুন"}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
