"use client";

import Link from "next/link";
import { Menu, Search, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  ["পরিচিতি", "#about"],
  ["বই", "#book"],
  ["পডকাস্ট", "#podcast"],
  ["অডিওবুক", "#audiobook"],
  ["অনুধ্যান", "#reflections"],
  ["ভিডিও", "#videos"],
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3">
      <nav
        aria-label="প্রধান নেভিগেশন"
        className={cn(
          "page-shell rounded-2xl border border-transparent transition-all duration-300",
          scrolled || open ? "border-white/10 bg-[#080807]/85 shadow-[0_12px_60px_-24px_rgba(214,166,66,.35)] backdrop-blur-xl" : "bg-transparent",
        )}
      >
        <div className="flex h-[4.5rem] items-center justify-between px-3 md:px-5">
          <Link href="#top" className="group flex items-center gap-3" aria-label="হোম পেইজ">
            <span className="grid size-10 place-items-center rounded-full border border-[#d6a642]/40 bg-[#d6a642]/10 text-lg font-semibold text-[#e6bc61] transition group-hover:border-[#e6bc61]">ফ</span>
            <span className="leading-none">
              <strong className="block text-[1rem] font-semibold text-white">ফেরদৌস সালেহীন</strong>
              <small className="mt-1 block text-[0.58rem] uppercase tracking-[0.24em] text-[#9e9a91]">Official Platform</small>
            </span>
          </Link>

          <div className="hidden items-center gap-6 lg:flex">
            {navItems.map(([label, href]) => (
              <Link key={href} href={href} className="text-sm text-[#aaa69c] transition hover:text-[#e8bd64]">
                {label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button aria-label="অনুসন্ধান" className="hidden size-11 place-items-center rounded-full text-[#b9b5aa] transition hover:bg-white/5 hover:text-white sm:grid">
              <Search className="size-4" />
            </button>
            <Button asChild size="sm" className="hidden sm:inline-flex">
              <Link href="#order">বই অর্ডার</Link>
            </Button>
            <button
              type="button"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "মেনু বন্ধ করুন" : "মেনু খুলুন"}
              onClick={() => setOpen((value) => !value)}
              className="grid size-11 place-items-center rounded-full border border-white/10 text-white lg:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        <div id="mobile-menu" className={cn("grid transition-all duration-300 lg:hidden", open ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
          <div className="overflow-hidden">
            <div className="grid gap-1 border-t border-white/8 px-4 py-4">
              {navItems.map(([label, href]) => (
                <Link key={href} href={href} onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 text-base text-[#c9c5bb] hover:bg-white/5 hover:text-white">
                  {label}
                </Link>
              ))}
              <Button asChild className="mt-2 sm:hidden">
                <Link href="#order" onClick={() => setOpen(false)}>বই অর্ডার</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
