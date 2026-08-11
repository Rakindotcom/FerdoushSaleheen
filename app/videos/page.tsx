import type { Metadata } from "next";
import Image from "next/image";
import { Play, Video } from "lucide-react";

import { InnerPage, SectionHeading } from "@/components/inner-page";

export const metadata: Metadata = { title: "ভিডিও | ড. ফেরদৌস সালেহীন", description: "লেকচার, সাক্ষাৎকার, বই আলোচনা ও কুরআনিক অনুধ্যানের ভিডিও সংগ্রহ।" };

const videos = [
  ["তাফসির", "সুরা আল-ফাতিহা কেন জীবনের মানচিত্র", "১২:৪৮"],
  ["সালাত", "সালাতে মনোযোগ ফিরে পাওয়ার তিনটি পথ", "০৮:২১"],
  ["জীবন", "কৃতজ্ঞতা: বিশ্বাস থেকে প্রতিদিনের অভ্যাস", "১৫:০৪"],
  ["বই আলোচনা", "সাতটি আয়াত নিয়ে একটি বই লেখার পেছনের গল্প", "২১:৩০"],
  ["সংক্ষিপ্ত স্মরণিকা", "হেদায়াত চাওয়ার অর্থ কী?", "০৬:১৭"],
  ["সাক্ষাৎকার", "লেখালেখি, পাঠক ও ভবিষ্যতের জ্ঞানভুবন", "২৮:৪৫"],
];

export default function VideosPage() {
  return (
    <InnerPage eyebrow="দেখুন ও জানুন" title={<>কথা, দৃশ্য ও <span className="gold-text">অনুধ্যান</span></>} description="লেকচার, সাক্ষাৎকার, বই আলোচনা, তাফসির ও সংক্ষিপ্ত স্মরণিকাকে একটি সুসংগঠিত ভিডিও আর্কাইভে দেখুন।">
      <section className="py-24 md:py-32"><div className="page-shell"><SectionHeading eyebrow="ভিডিও লাইব্রেরি" description="চূড়ান্ত ভিডিও উৎস হিসেবে অনুমোদিত YouTube বা অন্য প্ল্যাটফর্মের লিংক যুক্ত হবে।">নির্বাচিত <span className="gold-text">ভিডিও</span></SectionHeading>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{videos.map(([category, title, duration], index) => <article key={title} className="group overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0d0d0c]"><div className="relative aspect-video overflow-hidden"><Image src={index % 3 === 1 ? "/fsPhoto.png" : "/FSwithTheBook.png"} alt="" fill sizes="(max-width: 768px) 100vw, 33vw" className={`object-cover opacity-55 grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0 ${index % 3 === 1 ? "object-top" : "object-[62%_center]"}`} /><div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" /><span className="absolute left-4 top-4 grid size-11 place-items-center rounded-full border border-white/20 bg-black/35 text-white backdrop-blur"><Play className="ml-0.5 size-4 fill-current" /></span><span className="absolute bottom-4 right-4 rounded-full bg-black/65 px-2.5 py-1 text-xs text-white">{duration}</span></div><div className="p-6"><span className="text-xs text-[#a87b30]">{category}</span><h2 className="mt-3 text-xl font-medium leading-snug text-[#e6e2da]">{title}</h2><div className="mt-5 flex items-center gap-2 text-xs text-[#67645d]"><Video className="size-3.5" /> ভিডিও উৎস শিগগিরই</div></div></article>)}</div>
      </div></section>
    </InnerPage>
  );
}
