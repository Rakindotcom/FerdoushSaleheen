"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div role="status" className="flex min-h-14 items-center gap-3 rounded-full border border-[#d6a642]/30 bg-[#d6a642]/10 px-5 text-sm text-[#f0d08a]">
        <Check className="size-4" /> ধন্যবাদ—আপনি এখন আমাদের সঙ্গে যুক্ত।
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="grid gap-3 sm:grid-cols-[1fr_1.2fr_auto]" aria-label="নিউজলেটার সাবস্ক্রিপশন">
      <label className="sr-only" htmlFor="name">নাম</label>
      <input id="name" name="name" required placeholder="আপনার নাম" className="h-14 rounded-full border border-white/10 bg-black/35 px-5 text-sm text-white placeholder:text-white/35 focus:border-[#d6a642] focus:outline-none" />
      <label className="sr-only" htmlFor="email">ইমেইল</label>
      <input id="email" name="email" type="email" required placeholder="ইমেইল ঠিকানা" className="h-14 rounded-full border border-white/10 bg-black/35 px-5 text-sm text-white placeholder:text-white/35 focus:border-[#d6a642] focus:outline-none" />
      <button type="submit" aria-label="যুক্ত হোন" className="grid size-14 place-items-center rounded-full bg-[linear-gradient(135deg,#a87629,#e6bc62)] text-black transition hover:scale-105">
        <ArrowRight className="size-5" />
      </button>
    </form>
  );
}
