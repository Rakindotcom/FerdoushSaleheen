import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import { Play } from "lucide-react";

import { InnerPage, SectionHeading } from "@/components/inner-page";
import { createBreadcrumbJsonLd, StructuredData } from "@/components/structured-data";
import { YouTubeEmbed } from "@/components/youtube-embed";
import { podcastEpisodes } from "@/lib/podcast-data";

export const metadata: Metadata = createPageMetadata({
  locale: "en",
  title: "Podcast",
  siteNameFirst: true,
  description: "Watch selected long-form conversations with Dr. Ferdoush Saleheen about faith, life, Qur'anic reflection, and questions of our time.",
  banglaPath: "/podcast",
  englishPath: "/en/podcast",
});

export default function EnglishPodcastPage() {
  return <InnerPage locale="en" eyebrow="Listen · Pause · Think again" title={<>Dr. Ferdoush Saleheen <span className="gold-text">Podcast</span></>} description="An organized collection of conversations about faith, life, Qur'anic reflection, supply chain, and important questions of our time.">
    <StructuredData data={createBreadcrumbJsonLd([{ name: "Home", path: "/en" }, { name: "Podcast", path: "/en/podcast" }])} />
    <section className="py-24 md:py-32"><div className="page-shell"><SectionHeading eyebrow="Featured episode" description="Watch and listen directly from YouTube.">Latest <span className="gold-text">conversation</span></SectionHeading><article className="overflow-hidden rounded-3xl border border-white/10 bg-[#0d0d0c] p-2 sm:p-3"><YouTubeEmbed videoId={podcastEpisodes[0].videoId} title={podcastEpisodes[0].titleEn} locale="en" loading="eager" className="rounded-[1.15rem]" /><div className="flex flex-col gap-4 px-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6"><div><span className="text-xs tracking-[0.15em] text-[#d6a642]">PODCAST · EPISODE 01</span><h3 className="mt-2 max-w-3xl text-xl font-medium leading-snug text-white">{podcastEpisodes[0].titleEn}</h3></div><span className="inline-flex shrink-0 items-center gap-2 text-sm text-[#969289]"><Play className="size-4 fill-current text-[#d6a642]" /> Play video</span></div></article></div></section>
    <section className="border-t border-white/[0.07] bg-[#0a0a09] py-24"><div className="page-shell"><SectionHeading eyebrow="Episodes">More <span className="gold-text">episodes</span></SectionHeading><div className="grid gap-6 md:grid-cols-2">{podcastEpisodes.slice(1).map((episode) => <article key={episode.videoId} className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0e0e0d] p-2"><YouTubeEmbed videoId={episode.videoId} title={episode.titleEn} locale="en" className="rounded-xl" /><div className="px-3 py-4"><span className="inline-flex items-center gap-2 text-xs text-[#d6a642]"><Play className="size-4 fill-current" /> Episode {episode.number}</span><h3 className="mt-2 text-lg font-medium leading-snug text-white">{episode.titleEn}</h3><span className="mt-3 block text-xs text-[#8e8a81]">Open player</span></div></article>)}</div></div></section>
  </InnerPage>;
}
