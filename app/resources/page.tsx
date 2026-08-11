import type { Metadata } from "next";
import { BookOpenCheck, Download, FileText, Presentation, ScrollText } from "lucide-react";

import { InnerPage, SectionHeading } from "@/components/inner-page";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = { title: "দাওয়াহ রিসোর্স | ড. ফেরদৌস সালেহীন", description: "নির্বাচিত স্টাডি গাইড, রিফ্লেকশন শিট ও দাওয়াহ উপকরণ।" };

const resources = [
  { icon: ScrollText, type: "PDF · ১৮ পৃষ্ঠা", title: "সাত আয়াতের রিফ্লেকশন জার্নাল", text: "প্রতিটি আয়াত নিয়ে থামা, ভাবা ও নিজের উপলব্ধি লিখে রাখার নির্দেশিত জার্নাল।" },
  { icon: BookOpenCheck, type: "PDF · স্টাডি গাইড", title: "সুরা আল-ফাতিহা পাঠচক্র সহায়িকা", text: "ছোট দল বা পরিবারে আলোচনার জন্য প্রশ্ন, বিষয় ও সেশন কাঠামো।" },
  { icon: FileText, type: "প্রিন্টেবল · A4", title: "সালাতে ফাতিহা: মনোযোগের নোট", text: "সালাতের আগে ও পরে সংক্ষিপ্ত অনুধ্যানের জন্য এক পাতার সহায়ক।" },
  { icon: Presentation, type: "স্লাইড · উপস্থাপনা", title: "সাত আয়াত: একটি পরিচিতিমূলক সেশন", text: "শিক্ষামূলক সেশন বা বই আলোচনার জন্য প্রাথমিক উপস্থাপনা কাঠামো।" },
];

export default function ResourcesPage() {
  return (
    <InnerPage eyebrow="বিনামূল্যের উপকরণ" title={<>শেখা থেকে <span className="gold-text">অনুশীলনে</span></>} description="ব্যক্তিগত পাঠ, পরিবার, স্টাডি সার্কেল ও শিক্ষামূলক আয়োজনের জন্য নির্বাচিত গাইড, নোট ও প্রিন্টেবল উপকরণ।">
      <section className="py-24 md:py-32"><div className="page-shell"><SectionHeading eyebrow="রিসোর্স লাইব্রেরি" description="প্রতিটি ধর্মীয় উপকরণ চূড়ান্ত প্রকাশের আগে লেখক ও অনুমোদিত উৎসের পর্যালোচনা পাবে।">ডাউনলোড করুন,<br /><span className="gold-text">ভাগ করে নিন</span></SectionHeading>
        <div className="grid gap-5 md:grid-cols-2">{resources.map(({ icon: Icon, type, title, text }) => <article key={title} className="group rounded-2xl border border-white/[0.08] bg-[#0d0d0c] p-7 transition hover:-translate-y-1 hover:border-[#d6a642]/35 md:p-8"><div className="flex items-start justify-between"><span className="grid size-12 place-items-center rounded-xl border border-[#d6a642]/20 bg-[#d6a642]/[0.07]"><Icon className="size-5 text-[#d6a642]" /></span><span className="text-xs text-[#8f6929]">{type}</span></div><h2 className="mt-10 text-2xl font-medium text-white">{title}</h2><p className="mt-3 text-sm leading-7 text-[#88847b]">{text}</p><Button variant="outline" className="mt-7" disabled><Download className="size-4" /> ফাইল শিগগিরই</Button></article>)}</div>
      </div></section>
    </InnerPage>
  );
}
