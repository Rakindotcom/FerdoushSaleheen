import type { Metadata } from "next";
import { Building2, Mail, MessageCircle, Mic2 } from "lucide-react";

import { ContactForm } from "@/components/contact-form";
import { InnerPage } from "@/components/inner-page";

export const metadata: Metadata = { title: "যোগাযোগ | ড. ফেরদৌস সালেহীন", description: "সাধারণ যোগাযোগ, বই সহায়তা, মিডিয়া ও বক্তব্যের আমন্ত্রণ পাঠান।" };

const channels = [
  { icon: MessageCircle, title: "সাধারণ যোগাযোগ", text: "প্ল্যাটফর্ম, লেখা বা অন্যান্য সাধারণ প্রশ্ন।" },
  { icon: Mic2, title: "বক্তব্যের আমন্ত্রণ", text: "আয়োজন, বিষয়, তারিখ ও প্রত্যাশিত শ্রোতার তথ্য।" },
  { icon: Building2, title: "প্রাতিষ্ঠানিক যোগাযোগ", text: "বাল্ক বই, শিক্ষা প্রতিষ্ঠান ও সহযোগিতার প্রস্তাব।" },
  { icon: Mail, title: "মিডিয়া", text: "সাক্ষাৎকার, সংবাদ ও আনুষ্ঠানিক মিডিয়া অনুরোধ।" },
];

export default function ContactPage() {
  return (
    <InnerPage eyebrow="যোগাযোগ" title={<>আসুন, <span className="gold-text">কথা বলি</span></>} description="সাধারণ যোগাযোগ, বই অর্ডার সহায়তা, বক্তব্যের আমন্ত্রণ, মিডিয়া বা প্রাতিষ্ঠানিক প্রস্তাব—সঠিক বিভাগ বেছে বিস্তারিত জানান।">
      <section className="py-24 md:py-32"><div className="page-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
        <div><span className="eyebrow mb-5">যোগাযোগের ধরন</span><h2 className="text-balance text-4xl font-medium leading-tight text-white md:text-5xl">আপনার প্রয়োজন অনুযায়ী <span className="gold-text">সঠিক পথটি বেছে নিন</span></h2><div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">{channels.map(({ icon: Icon, title, text }) => <article key={title} className="flex gap-4 rounded-2xl border border-white/[0.08] bg-[#0c0c0b] p-5"><span className="grid size-11 shrink-0 place-items-center rounded-xl border border-[#d6a642]/20 bg-[#d6a642]/[0.07]"><Icon className="size-4 text-[#d6a642]" /></span><div><h3 className="font-medium text-white">{title}</h3><p className="mt-1 text-xs leading-5 text-[#7e7a72]">{text}</p></div></article>)}</div></div>
        <div className="rounded-3xl border border-white/10 bg-[#0d0d0c] p-6 md:p-9"><h2 className="mb-2 text-2xl font-medium text-white">আপনার বার্তা লিখুন</h2><p className="mb-7 text-sm text-[#817d74]">প্রয়োজনীয় তথ্য দিলে দ্রুত ও যথাযথভাবে উত্তর দেওয়া সহজ হবে।</p><ContactForm /></div>
      </div></section>
    </InnerPage>
  );
}
