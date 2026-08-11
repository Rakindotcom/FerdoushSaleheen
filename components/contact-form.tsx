"use client";

import { FormEvent, useState } from "react";
import { Check, Send } from "lucide-react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  if (sent) return <div role="status" className="flex min-h-72 flex-col items-center justify-center rounded-2xl border border-[#d6a642]/25 bg-[#d6a642]/[0.06] p-8 text-center"><span className="grid size-14 place-items-center rounded-full bg-[#d6a642]/15 text-[#e7bd63]"><Check className="size-6" /></span><h2 className="mt-5 text-2xl font-medium text-white">আপনার বার্তাটি গ্রহণ করা হয়েছে</h2><p className="mt-2 text-sm text-[#8f8b82]">ব্যাকএন্ড সংযোগের পর এটি নির্ধারিত ইমেইলে পাঠানো হবে।</p></div>;

  return (
    <form onSubmit={handleSubmit} className="grid gap-5" aria-label="যোগাযোগ ফর্ম">
      <div className="grid gap-5 sm:grid-cols-2"><Field label="আপনার নাম" name="name" placeholder="পূর্ণ নাম" /><Field label="ইমেইল" name="email" type="email" placeholder="name@example.com" /></div>
      <div className="grid gap-5 sm:grid-cols-2"><label className="grid gap-2 text-sm text-[#b9b5ab]">যোগাযোগের ধরন<select name="type" className="h-13 rounded-xl border border-white/10 bg-black/35 px-4 text-sm text-white focus:border-[#d6a642] focus:outline-none"><option>সাধারণ যোগাযোগ</option><option>বই অর্ডার সহায়তা</option><option>বক্তব্যের আমন্ত্রণ</option><option>মিডিয়া</option><option>প্রাতিষ্ঠানিক যোগাযোগ</option></select></label><Field label="ফোন নম্বর" name="phone" type="tel" placeholder="01XXXXXXXXX" /></div>
      <label className="grid gap-2 text-sm text-[#b9b5ab]">বার্তা<textarea name="message" required rows={6} placeholder="আপনার বার্তা লিখুন" className="rounded-xl border border-white/10 bg-black/35 px-4 py-3 text-sm leading-6 text-white placeholder:text-white/30 focus:border-[#d6a642] focus:outline-none" /></label>
      <button type="submit" className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-[linear-gradient(110deg,#a97628,#e1b751)] px-6 font-semibold text-[#090806] transition hover:-translate-y-0.5"><Send className="size-4" /> বার্তা পাঠান</button>
    </form>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder: string }) {
  return <label className="grid gap-2 text-sm text-[#b9b5ab]">{label}<input name={name} type={type} required className="h-13 rounded-xl border border-white/10 bg-black/35 px-4 text-sm text-white placeholder:text-white/30 focus:border-[#d6a642] focus:outline-none" placeholder={placeholder} /></label>;
}
