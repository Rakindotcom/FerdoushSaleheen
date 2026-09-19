"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { LanguageMenu } from "@/components/language-menu";
import { isEnglishPath, localizePath } from "@/lib/locale";
import { cn } from "@/lib/utils";

const navigation = {
  bn: [
    ["হোমপেজ", "/"],
    ["পরিচিতি", "/about"],
    ["বই", "/books"],
    ["সংবাদ", "/news"],
    ["পডকাস্ট", "/podcast"],
    ["ভিডিও", "/videos"],
    ["গ্যালারি", "/gallery"],
    ["অডিওবুক", "/audiobooks"],
  ],
  en: [
    ["Home", "/"],
    ["About", "/about"],
    ["Books", "/books"],
    ["News", "/news"],
    ["Podcast", "/podcast"],
    ["Videos", "/videos"],
    ["Gallery", "/gallery"],
    ["Audiobook", "/audiobooks"],
  ],
} as const;

export function SiteHeader() {
  const pathname = usePathname();
  const locale = isEnglishPath(pathname) ? "en" : "bn";
  const navItems = navigation[locale].map(([label, path]) => [label, localizePath(path, locale)] as const);
  const homeHref = localizePath("/", locale);
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
        aria-label={locale === "en" ? "Primary navigation" : "প্রধান নেভিগেশন"}
        className={cn(
          "page-shell rounded-2xl border border-transparent transition-all duration-300",
          scrolled || open ? "border-white/10 bg-[#080807]/85 shadow-[0_12px_60px_-24px_rgba(214,166,66,.35)] backdrop-blur-xl" : "bg-transparent",
        )}
      >
        <div className="flex h-[4.5rem] items-center justify-between px-3 md:px-5">
          <Link
            href={homeHref}
            className="group shrink-0 overflow-hidden rounded-lg bg-white p-1 shadow-[0_8px_24px_rgba(0,0,0,.18)] ring-1 ring-white/15 transition hover:ring-[#d6a642]/70"
            aria-label={locale === "en" ? "Dr. Ferdoush Saleheen Talks home page" : "ড. ফেরদৌস সালেহীন টকস হোমপেজ"}
          >
            <Image
              src="/brand-logo.webp"
              alt="Dr. Ferdoush Saleheen Talks — Life Healing with Islamic Values"
              width={398}
              height={135}
              priority
              sizes="160px"
              className="h-auto w-40"
            />
          </Link>

          <div className="hidden items-center gap-3 lg:flex xl:gap-4">
            {navItems.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                aria-current={pathname === href ? "page" : undefined}
                className={cn(
                  "text-xs text-[#aaa69c] transition hover:text-[#e8bd64] xl:text-sm",
                  pathname === href && "text-[#e8bd64]",
                )}
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <LanguageMenu locale={locale} />
            <button
              type="button"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? (locale === "en" ? "Close menu" : "মেনু বন্ধ করুন") : (locale === "en" ? "Open menu" : "মেনু খুলুন")}
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
                <Link
                  key={href}
                  href={href}
                  aria-current={pathname === href ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={cn("rounded-xl px-3 py-3 text-base text-[#c9c5bb] hover:bg-white/5 hover:text-white", pathname === href && "bg-[#d6a642]/10 text-[#e8bd64]")}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
