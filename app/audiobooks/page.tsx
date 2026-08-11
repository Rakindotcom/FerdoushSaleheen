import type { Metadata } from "next";
import Image from "next/image";
import { Clock3, Headphones, ListMusic, Play } from "lucide-react";

import { AudioPlayer } from "@/components/audio-player";
import { InnerPage, SectionHeading } from "@/components/inner-page";

export const metadata: Metadata = { title: "অডিওবুক | ড. ফেরদৌস সালেহীন", description: "অধ্যায় ধরে শুনুন ড. ফেরদৌস সালেহীনের অডিওবুক।" };

const chapters = [
  ["অধ্যায় ০১", "ভূমিকা: সাতটি আয়াতের কাছে ফেরা", "১২:৩৪"],
  ["অধ্যায় ০২", "আলহামদুলিল্লাহি রব্বিল আলামিন", "১৮:৪২"],
  ["অধ্যায় ০৩", "আর-রহমানির রাহিম", "১৬:০৮"],
  ["অধ্যায় ০৪", "মালিকি ইয়াওমিদ্দিন", "২১:১৫"],
];

export default function AudiobooksPage() {
  return (
    <InnerPage eyebrow="পাঠ এখন কণ্ঠে" title={<>শুনতে শুনতে <span className="gold-text">আরও গভীরে</span></>} description="অধ্যায় ধরে শুনুন, বিরতি নিন, আবার ঠিক সেখান থেকে শুরু করুন—বইয়ের ভাবনাগুলোকে রাখুন প্রতিদিনের যাত্রাসঙ্গী।">
      <section className="py-24 md:py-32"><div className="page-shell grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:items-center">
        <div className="relative mx-auto aspect-[.62] w-full max-w-xs overflow-hidden rounded-2xl border border-[#d6a642]/25 bg-[#0d0c0a]"><Image src="/bookImage.png" alt="সুরা আল-ফাতিহা অডিওবুক প্রচ্ছদ" fill sizes="320px" className="object-cover" priority /></div>
        <div><span className="eyebrow mb-5">প্রথম অডিওবুক</span><h2 className="text-balance text-4xl font-medium leading-tight text-white md:text-6xl">সুরা আল-ফাতিহা:<br /><span className="gold-text">তাফসির ও জীবনের প্রতিফলন</span></h2><p className="mt-6 max-w-xl text-base leading-8 text-[#99958c]">সম্পূর্ণ বইটি কণ্ঠে শোনার জন্য পরিকল্পিত অধ্যায়ভিত্তিক অভিজ্ঞতা। অনুমোদিত অডিও ফাইল যুক্ত হওয়ার পর প্লেয়ারটি বাস্তব স্ট্রিমিং ও রিজিউম সুবিধা দেবে।</p><div className="mt-7 flex gap-6 text-xs text-[#8e8a81]"><span className="flex items-center gap-2"><ListMusic className="size-4 text-[#d6a642]" /> ১২ অধ্যায়</span><span className="flex items-center gap-2"><Clock3 className="size-4 text-[#d6a642]" /> ৩ঘ ২৪মি</span></div><div className="mt-8 max-w-2xl"><AudioPlayer /></div></div>
      </div></section>
      <section className="border-t border-white/[0.07] bg-[#0a0a09] py-24"><div className="page-shell"><SectionHeading eyebrow="অধ্যায় তালিকা" description="বর্তমান তালিকাটি কনটেন্ট কাঠামোর নমুনা; চূড়ান্ত নাম ও সময় অডিও অনুমোদনের পর হালনাগাদ হবে।">এক অধ্যায় থেকে <span className="gold-text">পরের অধ্যায়ে</span></SectionHeading><div className="overflow-hidden rounded-2xl border border-white/[0.08]">{chapters.map(([number, title, duration], index) => <article key={number} className="group grid gap-4 border-b border-white/[0.07] bg-[#0d0d0c] p-5 last:border-0 sm:grid-cols-[auto_1fr_auto] sm:items-center md:p-6"><button type="button" aria-label={`${title} শুনুন`} disabled className="grid size-11 place-items-center rounded-full border border-white/10 text-[#77736b]"><Play className="ml-0.5 size-4 fill-current" /></button><div><span className="text-[0.65rem] tracking-[0.12em] text-[#9c722c]">{number}</span><h3 className="mt-1 text-lg font-medium text-[#ddd9d1]">{title}</h3></div><span className="text-xs text-[#716e67]">{duration}</span></article>)}</div><div className="mt-5 flex items-center gap-2 text-xs text-[#6f6b64]"><Headphones className="size-4" /> নমুনা অডিও প্রকাশের অপেক্ষায়</div></div></section>
    </InnerPage>
  );
}
