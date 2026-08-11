import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarDays, MapPin, Mic2 } from "lucide-react";

import { InnerPage, SectionHeading } from "@/components/inner-page";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = { title: "আয়োজন ও বক্তব্য | ড. ফেরদৌস সালেহীন", description: "আসন্ন আয়োজন দেখুন অথবা ড. ফেরদৌস সালেহীনকে বক্তব্যের জন্য আমন্ত্রণ জানান।" };

export default function EventsPage() {
  return (
    <InnerPage eyebrow="আয়োজন ও বক্তব্য" title={<>মানুষের সঙ্গে <span className="gold-text">সরাসরি সংযোগ</span></>} description="বই আলোচনা, কুরআনিক অনুধ্যান, শিক্ষামূলক সেশন ও প্রাতিষ্ঠানিক আয়োজনে অংশগ্রহণের তথ্য।">
      <section className="py-24 md:py-32"><div className="page-shell"><SectionHeading eyebrow="আসন্ন আয়োজন" description="নতুন কোনো আয়োজন অনুমোদিত হলে তারিখ, সময়, ভেন্যু ও নিবন্ধনের তথ্য এখানে প্রকাশিত হবে।">ক্যালেন্ডারে এখন <span className="gold-text">নির্ধারিত আয়োজন নেই</span></SectionHeading>
        <div className="rounded-3xl border border-dashed border-white/12 bg-[#0b0b0a] p-9 text-center md:p-16"><CalendarDays className="mx-auto size-11 text-[#d6a642]/60" /><h2 className="mt-6 text-3xl font-medium text-white">পরবর্তী আয়োজনের অপেক্ষায়</h2><p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-[#858178]">আয়োজন ঘোষণার সঙ্গে সঙ্গে এখানে বিস্তারিত তথ্য ও নিবন্ধন লিংক পাওয়া যাবে। আপডেট পেতে নিউজলেটারে যুক্ত থাকুন।</p><Button asChild variant="outline" className="mt-7"><Link href="/#contact">আপডেট নিন <ArrowRight className="size-4" /></Link></Button></div>
      </div></section>
      <section id="speaking" className="border-t border-white/[0.07] bg-[#0a0a09] py-24"><div className="page-shell grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-center"><div><span className="grid size-12 place-items-center rounded-xl border border-[#d6a642]/25 bg-[#d6a642]/10"><Mic2 className="size-5 text-[#d6a642]" /></span><h2 className="mt-7 text-balance text-4xl font-medium leading-tight text-white md:text-6xl">বক্তব্যের জন্য <span className="gold-text">আমন্ত্রণ জানান</span></h2><p className="mt-5 max-w-xl text-base leading-8 text-[#918d84]">মসজিদ, বিশ্ববিদ্যালয়, শিক্ষা প্রতিষ্ঠান, কমিউনিটি সংগঠন ও মিডিয়া আয়োজনের জন্য বিস্তারিত প্রস্তাব পাঠাতে পারেন।</p></div><div className="rounded-2xl border border-white/10 bg-[#0f0f0e] p-7 md:p-9"><div className="grid gap-5 sm:grid-cols-2"><div className="rounded-xl border border-white/[0.07] p-5"><CalendarDays className="size-5 text-[#d6a642]" /><h3 className="mt-4 font-medium text-white">প্রস্তাবিত তারিখ</h3><p className="mt-2 text-xs leading-6 text-[#7f7b73]">কমপক্ষে কয়েক সপ্তাহ আগে যোগাযোগ করুন।</p></div><div className="rounded-xl border border-white/[0.07] p-5"><MapPin className="size-5 text-[#d6a642]" /><h3 className="mt-4 font-medium text-white">স্থান ও শ্রোতা</h3><p className="mt-2 text-xs leading-6 text-[#7f7b73]">ভেন্যু, শহর ও প্রত্যাশিত শ্রোতা উল্লেখ করুন।</p></div></div><Button asChild size="lg" className="mt-6 w-full"><Link href="/contact?type=speaking">আমন্ত্রণের তথ্য পাঠান <ArrowRight className="size-4" /></Link></Button></div></div></section>
    </InnerPage>
  );
}
