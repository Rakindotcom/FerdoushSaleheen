import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import { Play } from "lucide-react";

import { InnerPage, SectionHeading } from "@/components/inner-page";
import { createBreadcrumbJsonLd, StructuredData } from "@/components/structured-data";
import { YouTubeEmbed } from "@/components/youtube-embed";
import { podcastEpisodes } from "@/lib/podcast-data";

export const metadata: Metadata = createPageMetadata({
  locale: "bn",
  title: "পডকাস্ট",
  siteNameFirst: true,
  description: "বিশ্বাস, জীবন, কুরআনিক অনুধ্যান ও সময়ের গুরুত্বপূর্ণ প্রশ্ন নিয়ে ড. ফেরদৌস সালেহীনের নির্বাচিত পূর্ণাঙ্গ পডকাস্ট দেখুন।",
  banglaPath: "/podcast",
  englishPath: "/en/podcast",
});

export default function PodcastPage() {
  return (
    <InnerPage eyebrow="শুনুন · থামুন · আবার ভাবুন" title={<>ড. ফেরদৌস সালেহীন <span className="gold-text">পডকাস্ট</span></>} description="বিশ্বাস, জীবন, কুরআনিক অনুধ্যান, সাপ্লাই চেইন ও সময়ের গুরুত্বপূর্ণ প্রশ্ন নিয়ে সুসংগঠিত দীর্ঘ আলাপের আর্কাইভ।">
      <StructuredData data={createBreadcrumbJsonLd([{ name: "হোমপেজ", path: "/" }, { name: "পডকাস্ট", path: "/podcast" }])} />
      <section className="py-24 md:py-32"><div className="page-shell">
        <SectionHeading eyebrow="নির্বাচিত পর্ব" description="ড. ফেরদৌস সালেহীনের নির্বাচিত পূর্ণাঙ্গ আলোচনা সরাসরি YouTube থেকে দেখুন ও শুনুন।">সাম্প্রতিক <span className="gold-text">আলাপ</span></SectionHeading>
        <article className="overflow-hidden rounded-3xl border border-white/10 bg-[#0d0d0c] p-2 sm:p-3">
          <YouTubeEmbed videoId={podcastEpisodes[0].videoId} title={podcastEpisodes[0].titleBn} loading="eager" className="rounded-[1.15rem]" />
          <div className="flex flex-col gap-4 px-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <div><span className="text-xs tracking-[0.15em] text-[#d6a642]">পডকাস্ট · পর্ব ০১</span><h3 className="mt-2 max-w-3xl text-xl font-medium leading-snug text-white">{podcastEpisodes[0].titleBn}</h3><p className="mt-2 text-sm text-[#969289]">ভিডিওতে চাপুন। একটি বড় পপ-আপ প্লেয়ারে দেখুন।</p></div>
            <span className="inline-flex items-center gap-2 text-sm font-medium text-[#d6a642]"><Play className="size-4 fill-current" /> ভিডিও চালু করুন</span>
          </div>
        </article>
      </div></section>
      <section className="border-t border-white/[0.07] bg-[#0a0a09] py-24"><div className="page-shell"><SectionHeading eyebrow="পর্বসমূহ">আরও <span className="gold-text">এপিসোড</span></SectionHeading><div className="grid gap-6 md:grid-cols-2">{podcastEpisodes.slice(1).map((episode) => <article key={episode.videoId} className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0e0e0d] p-2"><YouTubeEmbed videoId={episode.videoId} title={episode.titleBn} className="rounded-xl" /><div className="px-3 py-4"><span className="inline-flex items-center gap-2 text-xs text-[#d6a642]"><Play className="size-4 fill-current" /> পর্ব {episode.no}</span><h3 className="mt-2 text-lg font-medium leading-snug text-white">{episode.titleBn}</h3><span className="mt-3 block text-xs text-[#8e8a81]">চাপুন · পপ-আপে দেখুন</span></div></article>)}</div></div></section>
    </InnerPage>
  );
}
