import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpenText, Clock3 } from "lucide-react";

import { InnerPage, SectionHeading } from "@/components/inner-page";

export const metadata: Metadata = { title: "অনুধ্যান | ড. ফেরদৌস সালেহীন", description: "কুরআন, সালাত, বিশ্বাস ও জীবন নিয়ে নির্বাচিত বাংলা অনুধ্যান।" };

const articles = [
  { category: "কুরআনিক অনুধ্যান", title: "আলহামদুলিল্লাহ—কৃতজ্ঞতা যখন জীবন দেখার ভাষা", excerpt: "কৃতজ্ঞতা কি শুধু একটি উচ্চারণ, নাকি আমাদের দেখা, পাওয়া ও হারানোর অর্থ বদলে দেওয়া একটি অবস্থান?", read: "৬ মিনিট" },
  { category: "সালাত", title: "প্রতিদিনের কথোপকথন: কেন ফাতিহা বারবার ফিরে আসে", excerpt: "একই সাতটি আয়াত প্রতিটি রাকাতে ফিরে আসে—এই পুনরাবৃত্তির ভেতর কী শিক্ষা লুকিয়ে আছে?", read: "৮ মিনিট" },
  { category: "হেদায়াত", title: "সিরাতুল মুস্তাকিম—পথ চাওয়া এবং পথে থাকার অঙ্গীকার", excerpt: "হেদায়াতের দুআ কেবল গন্তব্যের জন্য নয়; প্রতিটি সিদ্ধান্তে সঠিক পথ বেছে নেওয়ার দায়িত্বও।", read: "৫ মিনিট" },
  { category: "জীবন ও পরকাল", title: "জবাবদিহির বোধ কীভাবে আজকের জীবনকে বদলায়", excerpt: "পরকালের বিশ্বাস ভবিষ্যৎ নিয়ে কেবল একটি ধারণা নয়—এটি বর্তমানের কাজ, সম্পর্ক ও অগ্রাধিকারের মানদণ্ড।", read: "৭ মিনিট" },
  { category: "ইবাদত", title: "ইয়্যাকা না’বুদু: সমর্পণের ভেতর সত্যিকারের স্বাধীনতা", excerpt: "শুধু তোমারই ইবাদত করি—এই ঘোষণা আমাদের নির্ভরতা ও স্বাধীনতার সংজ্ঞা কোথায় নিয়ে যায়?", read: "৯ মিনিট" },
  { category: "চরিত্র", title: "রহমতের পরিচয় থেকে মানুষের প্রতি কোমলতা", excerpt: "রবকে রহমান ও রহিম নামে জানার প্রভাব আমাদের আচরণ, বিচার ও মানুষের সঙ্গে সম্পর্কে কী হওয়া উচিত?", read: "৬ মিনিট" },
];

export default function ReflectionsPage() {
  return (
    <InnerPage eyebrow="পাঠ ও অনুধ্যান" title={<>শব্দের ভেতর <span className="gold-text">থামার জায়গা</span></>} description="কুরআন, সালাত, বিশ্বাস ও জীবনের নানা প্রশ্নে ধীরে পড়ার, ভাবার এবং ফিরে দেখার জন্য নির্বাচিত লেখা।">
      <section className="py-24 md:py-32"><div className="page-shell"><SectionHeading eyebrow="সাম্প্রতিক লেখা" description="ধর্মীয় উদ্ধৃতি, অনুবাদ ও তাফসির প্রকাশের আগে অনুমোদিত উৎস ও স্পষ্ট কনটেন্ট শ্রেণিবিন্যাস যুক্ত করা হবে।">অনুধ্যানের <span className="gold-text">পাঠাগার</span></SectionHeading>
        <div className="grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] md:grid-cols-2 lg:grid-cols-3">{articles.map((article, index) => <article key={article.title} className="group flex min-h-[21rem] flex-col bg-[#0d0d0c] p-7 transition hover:bg-[#12100c]"><div className="flex items-start justify-between"><span className="text-xs text-[#ac7e31]">{article.category}</span><span className="text-xs text-[#56534d]">০{index + 1}</span></div><BookOpenText className="mt-10 size-7 text-[#d6a642]/55" /><h2 className="mt-5 text-balance text-2xl font-medium leading-snug text-[#e8e4dc]">{article.title}</h2><p className="mt-4 text-sm leading-6 text-[#858178]">{article.excerpt}</p><div className="mt-auto flex items-center justify-between pt-7"><span className="flex items-center gap-2 text-xs text-[#68655f]"><Clock3 className="size-3.5" /> {article.read}</span><Link href="#" aria-label={`${article.title} পড়ুন`} className="grid size-10 place-items-center rounded-full border border-white/10 transition group-hover:border-[#d6a642]/45 group-hover:text-[#d6a642]"><ArrowRight className="size-4" /></Link></div></article>)}</div>
      </div></section>
    </InnerPage>
  );
}
