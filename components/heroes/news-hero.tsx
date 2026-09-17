import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Globe, Newspaper, Radio, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { SiteLocale } from "@/lib/locale";
import { localizePath } from "@/lib/locale";
import { newsItems } from "@/lib/news-data";

interface NewsHeroProps {
  locale?: SiteLocale;
}

export function NewsHero({ locale = "bn" }: NewsHeroProps) {
  const isEn = locale === "en";
  const featuredNews = newsItems.find((item) => item.featured) || newsItems[0];

  return (
    <section className="relative overflow-hidden border-b border-white/[0.08] bg-[#050505] pt-32 pb-16 lg:pt-36 lg:pb-20">
      {/* Ambient background glows */}
      <div className="grid-veil pointer-events-none absolute inset-0 opacity-80" />
      <div className="paper-noise pointer-events-none absolute inset-0 opacity-[0.03]" />
      <div className="hero-mesh-bg pointer-events-none absolute inset-0" />
      <div className="animate-breathe pointer-events-none absolute -right-28 top-16 size-[38rem] rounded-full bg-[#d6a642]/[0.08] blur-[140px]" />
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
            {isEn ? "News & Media" : "সংবাদ ও গণমাধ্যম"}
          </span>
        </div>

        {/* Hero Grid */}
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          {/* Left Column: Heading, Badges, & Press Dispatch Overview */}
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d6a642]/30 bg-[#14120c]/80 px-3.5 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-[#f2d080] backdrop-blur-md">
              <Newspaper className="size-3 text-[#d6a642]" />
              {isEn ? "Press Dispatch · Editorial Media" : "সংবাদ · গণমাধ্যম · বিশেষজ্ঞ মতামত"}
            </div>

            <h1 className="text-balance text-[clamp(2.8rem,6.5vw,5.6rem)] font-medium leading-[0.92] tracking-[-0.045em] text-white">
              {isEn ? (
                <>
                  In the News &amp; <br />
                  <span className="gold-text">Editorial Media</span>
                </>
              ) : (
                <>
                  সংবাদে এবং <br />
                  <span className="gold-text">প্রকাশনায়</span>
                </>
              )}
            </h1>

            <p className="mt-6 text-balance text-base leading-relaxed text-[#aaa69c] md:text-lg">
              {isEn
                ? "Verified press coverage, co-authored opinion columns, and publisher news spotlighting Dr. Ferdoush Saleheen’s vision for strategic global supply chains and resilient trade corridors."
                : "ড. ফেরদৌস সালেহীনের সাপ্লাই চেইন ও মেরিটাইম লজিস্টিকসের কাজ নিয়ে আন্তর্জাতিক ও জাতীয় গণমাধ্যমে প্রকাশিত সংবাদ, যৌথ মতামত নিবন্ধ এবং অফিসিয়াল প্রকাশনা আপডেট।"}
            </p>

            {/* Media Outlet Badges */}
            <div className="mt-8 flex flex-wrap gap-2.5">
              <span className="flex items-center gap-1.5 rounded-xl border border-white/10 bg-[#0d0d0c] px-3.5 py-2 text-xs text-[#c4c0b5]">
                <Globe className="size-3.5 text-[#77bfd4]" />
                Gulf News (UAE)
              </span>
              <span className="flex items-center gap-1.5 rounded-xl border border-white/10 bg-[#0d0d0c] px-3.5 py-2 text-xs text-[#c4c0b5]">
                <Newspaper className="size-3.5 text-[#d6a642]" />
                The Financial Express
              </span>
              <span className="flex items-center gap-1.5 rounded-xl border border-white/10 bg-[#0d0d0c] px-3.5 py-2 text-xs text-[#c4c0b5]">
                <Newspaper className="size-3.5 text-[#d6a642]" />
                Bonik Barta
              </span>
            </div>

            {/* Jump CTA */}
            <div className="mt-8">
              <Button asChild size="lg" className="group shadow-[0_12px_36px_-10px_rgba(214,166,66,0.4)]">
                <a href="#news-articles" className="flex items-center gap-2">
                  {isEn ? "Explore Media Coverage" : "সকল সংবাদ ও নিবন্ধ দেখুন"}
                  <ExternalLink className="size-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right Column: Featured Media Spotlight Card */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="gold-glow-card relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0e0e0d] p-6 backdrop-blur-xl shadow-[0_30px_70px_rgba(0,0,0,0.7)]">
              {/* Media Outlet Tag & Date */}
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                <span className="rounded-md border border-[#d6a642]/40 bg-[#d6a642]/10 px-2.5 py-0.5 text-xs font-semibold text-[#f0c86a]">
                  {featuredNews.source}
                </span>
                <span className="text-xs text-[#8e8a81]">
                  {isEn ? featuredNews.dateEn : featuredNews.dateBn}
                </span>
              </div>

              {/* Lead Image */}
              <div className="relative mt-4 aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-[#161614]">
                <Image
                  src={featuredNews.image}
                  alt={featuredNews.imageAlt}
                  fill
                  sizes="380px"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Title & Excerpt */}
              <h2 className="mt-4 text-base font-medium leading-snug text-white">
                {featuredNews.title}
              </h2>
              <p className="mt-2 text-xs leading-relaxed text-[#969289]">
                {isEn ? featuredNews.summaryEn : featuredNews.summaryBn}
              </p>

              {/* Direct Link */}
              <div className="mt-5 border-t border-white/[0.08] pt-4">
                <a
                  href={featuredNews.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-medium text-[#d6a642] transition hover:text-[#f0c86a]"
                >
                  {isEn ? "Read full story on Gulf News" : "Gulf News-এ সম্পূর্ণ প্রতিবেদনটি পড়ুন"}
                  <ExternalLink className="size-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
