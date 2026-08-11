import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock3, Mic2, Play } from "lucide-react";

import { InnerPage, SectionHeading } from "@/components/inner-page";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = { title: "পডকাস্ট | ড. ফেরদৌস সালেহীন", description: "বিশ্বাস, জীবন ও কুরআনিক অনুধ্যান নিয়ে নির্বাচিত পডকাস্ট পর্ব।" };

const episodes = [
  { no: "০১", title: "ফাতিহা: যে সংলাপ প্রতিদিন আমাদের ভেতর বদলায়", topic: "সুরা আল-ফাতিহা", duration: "৪২ মিনিট" },
  { no: "০২", title: "কৃতজ্ঞতা—একটি শব্দ থেকে জীবনের দৃষ্টিভঙ্গি", topic: "জীবন ও বিশ্বাস", duration: "৩৬ মিনিট" },
  { no: "০৩", title: "ইয়্যাকা না’বুদু: ইবাদত, নির্ভরতা ও স্বাধীনতা", topic: "ইবাদত", duration: "৪৮ মিনিট" },
];

export default function PodcastPage() {
  return (
    <InnerPage eyebrow="দীর্ঘ আলাপ" title={<>শুনুন। থামুন।<br /><span className="gold-text">আবার ভাবুন।</span></>} description="বিশ্বাস, জীবন, কুরআনিক অনুধ্যান ও সময়ের গুরুত্বপূর্ণ প্রশ্ন নিয়ে সুসংগঠিত দীর্ঘ আলাপের আর্কাইভ।">
      <section className="py-24 md:py-32"><div className="page-shell">
        <SectionHeading eyebrow="নির্বাচিত পর্ব" description="অনুমোদিত অডিও বা ভিডিও উৎস যুক্ত হলে প্লেয়ার থেকে সরাসরি পূর্ণ পর্ব শোনা যাবে।">এই সপ্তাহের <span className="gold-text">আলাপ</span></SectionHeading>
        <article className="grid overflow-hidden rounded-3xl border border-white/10 bg-[#0d0d0c] lg:grid-cols-[1.15fr_.85fr]">
          <div className="relative min-h-[27rem] overflow-hidden"><Image src="/FSwithTheBook.png" alt="ড. ফেরদৌস সালেহীনের নির্বাচিত পডকাস্ট" fill sizes="(max-width: 1024px) 100vw, 58vw" className="object-cover object-[62%_center] opacity-65 grayscale-[35%]" priority /><div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0c] via-transparent to-transparent" /><span className="absolute left-7 top-7 grid size-16 place-items-center rounded-full border border-[#d6a642]/40 bg-black/40 text-[#e8bd64] backdrop-blur"><Play className="ml-1 size-5 fill-current" /></span></div>
          <div className="flex flex-col justify-center p-8 md:p-12"><span className="text-xs tracking-[0.15em] text-[#d6a642]">EPISODE 01</span><h2 className="mt-5 text-balance text-3xl font-medium leading-tight text-white md:text-5xl">ফাতিহা: যে সংলাপ প্রতিদিন আমাদের ভেতর বদলায়</h2><p className="mt-5 text-sm leading-7 text-[#969289]">সালাতে ফিরে আসা সাতটি আয়াত কীভাবে কৃতজ্ঞতা, নির্ভরতা ও পথচলার মানচিত্র গড়ে দেয়—তা নিয়ে মন্থর, গভীর আলোচনা।</p><div className="mt-6 flex items-center gap-2 text-xs text-[#77736b]"><Clock3 className="size-4" /> ৪২ মিনিট</div><Button className="mt-8 w-fit" disabled><Play className="size-4 fill-current" /> অডিও শিগগিরই</Button></div>
        </article>
      </div></section>
      <section className="border-t border-white/[0.07] bg-[#0a0a09] py-24"><div className="page-shell"><SectionHeading eyebrow="পর্বসমূহ">সাম্প্রতিক <span className="gold-text">এপিসোড</span></SectionHeading><div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">{episodes.map((episode) => <article key={episode.no} className="group grid gap-5 py-7 md:grid-cols-[4rem_1fr_auto] md:items-center"><span className="text-sm text-[#5f5b54]">{episode.no}</span><div><span className="text-xs text-[#a77b2f]">{episode.topic}</span><h3 className="mt-2 text-2xl font-medium text-[#e7e4dd]">{episode.title}</h3></div><div className="flex items-center gap-5"><span className="text-xs text-[#77736b]">{episode.duration}</span><Link href="#" aria-label={`${episode.title} খুলুন`} className="grid size-11 place-items-center rounded-full border border-white/10 text-[#aaa69c] transition group-hover:border-[#d6a642]/40 group-hover:text-[#d6a642]"><ArrowRight className="size-4" /></Link></div></article>)}</div></div></section>
    </InnerPage>
  );
}
