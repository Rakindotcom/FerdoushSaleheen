"use client";

import { Check, ChevronDown, Languages } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { saveLanguagePreference } from "@/lib/language-preference";
import { alternateLocalePath, type SiteLocale } from "@/lib/locale";
import { cn } from "@/lib/utils";

export function LanguageMenu({ locale }: { locale: SiteLocale }) {
  const pathname = usePathname();
  const router = useRouter();
  const menuRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    function handlePointerDown(event: PointerEvent) {
      if (!menuRef.current?.contains(event.target as Node)) setOpen(false);
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  function selectLanguage(nextLocale: SiteLocale) {
    saveLanguagePreference(nextLocale);
    setOpen(false);
    if (nextLocale !== locale) router.push(alternateLocalePath(pathname));
  }

  return (
    <div ref={menuRef} className="relative">
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls="language-menu"
        onClick={() => setOpen((value) => !value)}
        className="inline-flex h-9 items-center gap-1.5 rounded-full border border-white/10 px-3 text-xs font-semibold text-[#c9c5bb] transition hover:border-[#d6a642]/45 hover:text-[#e8bd64]"
      >
        <Languages className="size-3.5" aria-hidden="true" />
        <span>{locale === "en" ? "English" : "বাংলা"}</span>
        <ChevronDown className={cn("size-3.5 transition-transform", open && "rotate-180")} aria-hidden="true" />
      </button>

      {open ? (
        <div
          id="language-menu"
          role="menu"
          aria-label={locale === "en" ? "Choose language" : "ভাষা নির্বাচন করুন"}
          className="absolute right-0 top-[calc(100%+.55rem)] min-w-44 overflow-hidden rounded-xl border border-white/10 bg-[#0d0d0c]/95 p-1.5 shadow-[0_18px_50px_rgba(0,0,0,.55)] backdrop-blur-xl"
        >
          {(["bn", "en"] as const).map((option) => {
            const selected = option === locale;
            return (
              <button
                key={option}
                type="button"
                role="menuitemradio"
                aria-checked={selected}
                onClick={() => selectLanguage(option)}
                className={cn(
                  "flex w-full items-center justify-between gap-4 rounded-lg px-3 py-2.5 text-left text-sm transition hover:bg-white/[0.06] hover:text-white",
                  selected ? "bg-[#d6a642]/10 text-[#e8bd64]" : "text-[#aaa69c]",
                )}
              >
                <span>{option === "en" ? "English" : "বাংলা"}</span>
                {selected ? <Check className="size-4" aria-hidden="true" /> : null}
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
