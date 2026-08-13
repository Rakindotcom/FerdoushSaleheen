import type { Metadata } from "next";
import { Play } from "lucide-react";

import { InnerPage, SectionHeading } from "@/components/inner-page";
import { YouTubeEmbed } from "@/components/youtube-embed";
import { podcastEpisodes } from "@/lib/podcast-data";

export const metadata: Metadata = { title: "পডকাস্ট | ড. ফেরদৌস সালেহীন", description: "বিশ্বাস, জীবন ও কুরআনিক অনুধ্যান নিয়ে নির্বাচিত পডকাস্ট পর্ব।", alternates: { canonical: "/podcast", languages: { "bn-BD": "/podcast", en: "/en/podcast" } } };

export default function PodcastPage() {
  return (
    <InnerPage eyebrow="দীর্ঘ আলাপ" title={<>শুনুন। থামুন।<br /><span className="gold-text">আবার ভাবুন।</span></>} description="বিশ্বাস, জীবন, কুরআনিক অনুধ্যান ও সময়ের গুরুত্বপূর্ণ প্রশ্ন নিয়ে সুসংগঠিত দীর্ঘ আলাপের আর্কাইভ।">
      <section className="py-24 md:py-32"><div className="page-shell">
        <SectionHeading eyebrow="নির্বাচিত পর্ব" description="ড. ফেরদৌস সালেহীনের নির্বাচিত পূর্ণাঙ্গ আলোচনা সরাসরি YouTube থেকে দেখুন ও শুনুন।">সাম্প্রতিক <span className="gold-text">আলাপ</span></SectionHeading>
        <article className="overflow-hidden rounded-3xl border border-white/10 bg-[#0d0d0c] p-2 sm:p-3">
          <YouTubeEmbed videoId={podcastEpisodes[0].videoId} title="ড. ফেরদৌস সালেহীনের পডকাস্ট: পর্ব ০১" loading="eager" className="rounded-[1.15rem]" />
          <div className="flex flex-col gap-4 px-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <div><span className="text-xs tracking-[0.15em] text-[#d6a642]">পডকাস্ট · পর্ব ০১</span><p className="mt-2 text-sm text-[#969289]">ভিডিওতে চাপুন। একটি বড় পপ-আপ প্লেয়ারে দেখুন।</p></div>
            <span className="inline-flex items-center gap-2 text-sm font-medium text-[#d6a642]"><Play className="size-4 fill-current" /> ভিডিও চালু করুন</span>
          </div>
        </article>
      </div></section>
      <section className="border-t border-white/[0.07] bg-[#0a0a09] py-24"><div className="page-shell"><SectionHeading eyebrow="পর্বসমূহ">আরও <span className="gold-text">এপিসোড</span></SectionHeading><div className="grid gap-6 md:grid-cols-2">{podcastEpisodes.slice(1).map((episode) => <article key={episode.videoId} className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0e0e0d] p-2"><YouTubeEmbed videoId={episode.videoId} title={`ড. ফেরদৌস সালেহীনের পডকাস্ট: পর্ব ${episode.no}`} className="rounded-xl" /><div className="flex items-center justify-between gap-4 px-3 py-4"><span className="inline-flex items-center gap-2 text-sm text-[#d8d4ca]"><Play className="size-4 fill-current text-[#d6a642]" /> পর্ব {episode.no}</span><span className="text-xs text-[#8e8a81]">চাপুন · পপ-আপে দেখুন</span></div></article>)}</div></div></section>
    </InnerPage>
  );
}
