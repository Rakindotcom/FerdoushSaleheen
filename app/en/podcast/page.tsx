import type { Metadata } from "next";
import { Play } from "lucide-react";

import { InnerPage, SectionHeading } from "@/components/inner-page";
import { YouTubeEmbed } from "@/components/youtube-embed";
import { podcastEpisodes } from "@/lib/podcast-data";

export const metadata: Metadata = { title: "Podcast", description: "Selected long-form conversations with Dr. Ferdoush Saleheen.", alternates: { canonical: "/en/podcast", languages: { "bn-BD": "/podcast", en: "/en/podcast" } } };

export default function EnglishPodcastPage() {
  return <InnerPage locale="en" eyebrow="Long-form conversations" title={<>Listen. Pause.<br /><span className="gold-text">Think again.</span></>} description="An organized collection of conversations about faith, life, Qur'anic reflection, and important questions of our time.">
    <section className="py-24 md:py-32"><div className="page-shell"><SectionHeading eyebrow="Featured episode" description="Watch and listen directly from YouTube.">Latest <span className="gold-text">conversation</span></SectionHeading><article className="overflow-hidden rounded-3xl border border-white/10 bg-[#0d0d0c] p-2 sm:p-3"><YouTubeEmbed videoId={podcastEpisodes[0].videoId} title="Dr. Ferdoush Saleheen podcast: Episode 01" locale="en" loading="eager" className="rounded-[1.15rem]" /><div className="flex justify-between gap-4 px-4 py-5 sm:px-6"><span className="text-xs tracking-[0.15em] text-[#d6a642]">PODCAST · EPISODE 01</span><span className="inline-flex items-center gap-2 text-sm text-[#969289]"><Play className="size-4 fill-current text-[#d6a642]" /> Play video</span></div></article></div></section>
    <section className="border-t border-white/[0.07] bg-[#0a0a09] py-24"><div className="page-shell"><SectionHeading eyebrow="Episodes">More <span className="gold-text">episodes</span></SectionHeading><div className="grid gap-6 md:grid-cols-2">{podcastEpisodes.slice(1).map((episode) => <article key={episode.videoId} className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0e0e0d] p-2"><YouTubeEmbed videoId={episode.videoId} title={`Dr. Ferdoush Saleheen podcast: Episode ${episode.no}`} locale="en" className="rounded-xl" /><div className="flex items-center justify-between px-3 py-4"><span className="inline-flex items-center gap-2 text-sm text-[#d8d4ca]"><Play className="size-4 fill-current text-[#d6a642]" /> Episode {episode.no}</span><span className="text-xs text-[#8e8a81]">Open player</span></div></article>)}</div></div></section>
  </InnerPage>;
}
