"use client";

import { Languages } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { readLanguagePreference, saveLanguagePreference } from "@/lib/language-preference";
import { alternateLocalePath, isEnglishPath, type SiteLocale } from "@/lib/locale";

type GateState = "checking" | "prompt" | "ready" | "redirecting";

export function LanguagePreferenceGate() {
  const pathname = usePathname();
  const router = useRouter();
  const englishButtonRef = useRef<HTMLButtonElement>(null);
  const [state, setState] = useState<GateState>("checking");

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const preference = readLanguagePreference();

      if (!preference) {
        setState("prompt");
        return;
      }

      const currentLocale: SiteLocale = isEnglishPath(pathname) ? "en" : "bn";
      if (preference !== currentLocale) {
        setState("redirecting");
        router.replace(alternateLocalePath(pathname));
        return;
      }

      setState("ready");
    });

    return () => window.cancelAnimationFrame(frame);
  }, [pathname, router]);

  useEffect(() => {
    if (state !== "prompt") return;

    englishButtonRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [state]);

  function chooseLanguage(locale: SiteLocale) {
    saveLanguagePreference(locale);
    const currentLocale: SiteLocale = isEnglishPath(pathname) ? "en" : "bn";

    if (locale === currentLocale) {
      setState("ready");
      return;
    }

    setState("redirecting");
    router.replace(alternateLocalePath(pathname));
  }

  if (state === "ready") return null;

  if (state === "checking" || state === "redirecting") {
    return <div className="fixed inset-0 z-[200] bg-[#050505]" aria-hidden="true" />;
  }

  return (
    <div className="fixed inset-0 z-[200] grid place-items-center overflow-y-auto bg-black/90 p-4 backdrop-blur-xl sm:p-8">
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="language-dialog-title"
        aria-describedby="language-dialog-description"
        className="paper-noise relative w-full max-w-2xl overflow-hidden rounded-[2rem] border border-[#d6a642]/25 bg-[#0d0d0c] p-6 shadow-[0_32px_100px_rgba(0,0,0,.75)] sm:p-10"
      >
        <div className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-[#d6a642]/10 blur-[80px]" />
        <div className="relative">
          <span className="mb-6 grid size-12 place-items-center rounded-full border border-[#d6a642]/30 bg-[#d6a642]/10 text-[#e7bd63]">
            <Languages className="size-5" aria-hidden="true" />
          </span>
          <p className="eyebrow mb-4">Language preference · ভাষা নির্বাচন</p>
          <h2 id="language-dialog-title" className="text-balance text-3xl font-medium leading-tight text-white sm:text-5xl">
            Choose your preferred language
          </h2>
          <p id="language-dialog-description" className="mt-4 max-w-xl text-base leading-7 text-[#99958c]">
            আপনার পছন্দের ভাষা নির্বাচন করুন। পরবর্তীবার এই ওয়েবসাইট আপনার নির্বাচন মনে রাখবে।
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <button
              ref={englishButtonRef}
              type="button"
              onClick={() => chooseLanguage("en")}
              className="group rounded-2xl border border-white/10 bg-white/[0.025] p-5 text-left transition hover:border-[#d6a642]/55 hover:bg-[#d6a642]/[0.07] focus-visible:border-[#e7bd63] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d6a642]/35"
            >
              <span className="block text-xl font-medium text-white">English</span>
              <span className="mt-2 block text-sm text-[#858178]">Continue in English</span>
            </button>
            <button
              type="button"
              onClick={() => chooseLanguage("bn")}
              className="group rounded-2xl border border-white/10 bg-white/[0.025] p-5 text-left transition hover:border-[#d6a642]/55 hover:bg-[#d6a642]/[0.07] focus-visible:border-[#e7bd63] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d6a642]/35"
            >
              <span className="block text-xl font-medium text-white">বাংলা</span>
              <span className="mt-2 block text-sm text-[#858178]">বাংলায় দেখুন</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
