"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { galleryItems } from "@/lib/gallery-data";
import type { GalleryCategory } from "@/lib/gallery-data";
import type { SiteLocale } from "@/lib/locale";

type GalleryFilter = "all" | GalleryCategory;

const filters: GalleryFilter[] = ["all", "events", "media", "milestones", "journey"];

const filterLabels = {
  bn: {
    all: "সব ছবি",
    events: "আয়োজন",
    media: "গণমাধ্যম",
    milestones: "মাইলফলক",
    journey: "ভ্রমণ ও স্মৃতি",
  },
  en: {
    all: "All photos",
    events: "Events",
    media: "Media",
    milestones: "Milestones",
    journey: "Journey",
  },
} as const;

export function GalleryExperience({ locale }: { locale: SiteLocale }) {
  const [filter, setFilter] = useState<GalleryFilter>("all");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const isEn = locale === "en";

  const filteredItems = useMemo(
    () => (filter === "all" ? galleryItems : galleryItems.filter((item) => item.category === filter)),
    [filter],
  );
  const activeItem = activeIndex === null ? null : filteredItems[activeIndex];

  const closeLightbox = useCallback(() => setActiveIndex(null), []);
  const showPrevious = useCallback(() => {
    setActiveIndex((current) => current === null ? null : (current - 1 + filteredItems.length) % filteredItems.length);
  }, [filteredItems.length]);
  const showNext = useCallback(() => {
    setActiveIndex((current) => current === null ? null : (current + 1) % filteredItems.length);
  }, [filteredItems.length]);

  useEffect(() => {
    if (activeIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, closeLightbox, showNext, showPrevious]);

  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute -left-40 top-16 size-[30rem] rounded-full bg-[#d6a642]/[0.055] blur-[130px]" />
      <div className="page-shell relative">
        <div className="mb-10 flex flex-col gap-6 border-b border-white/[0.08] pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm leading-7 text-[#918d84]">
              {isEn
                ? `${filteredItems.length} photographs in this collection`
                : `এই সংগ্রহে ${filteredItems.length.toLocaleString("bn-BD")}টি ছবি`}
            </p>
          </div>
          <div className="flex flex-wrap gap-2" role="group" aria-label={isEn ? "Filter gallery" : "গ্যালারি ফিল্টার করুন"}>
            {filters.map((filterName) => (
              <button
                key={filterName}
                type="button"
                onClick={() => {
                  setFilter(filterName);
                  setActiveIndex(null);
                }}
                aria-pressed={filter === filterName}
                className={`rounded-full border px-4 py-2 text-xs font-medium transition sm:text-sm ${filter === filterName ? "border-[#d6a642]/60 bg-[#d6a642]/15 text-[#f0c86a]" : "border-white/10 bg-white/[0.025] text-[#918d84] hover:border-white/25 hover:text-white"}`}
              >
                {filterLabels[locale][filterName]}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredItems.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`${isEn ? "Open photo" : "ছবি খুলুন"}: ${isEn ? item.titleEn : item.titleBn}`}
              className="group relative h-72 w-full overflow-hidden rounded-2xl border border-white/[0.09] bg-[#0d0d0c] shadow-[0_20px_65px_-45px_rgba(0,0,0,.9)] transition duration-300 hover:-translate-y-1 hover:border-[#d6a642]/40 sm:h-64 lg:h-60 xl:h-56"
            >
              <Image
                src={item.src}
                alt={isEn ? item.altEn : item.altBn}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                className="object-cover transition duration-700 group-hover:scale-[1.035] group-hover:opacity-90"
              />
              <span className="absolute right-4 top-4 grid size-10 place-items-center rounded-full border border-white/15 bg-black/45 text-white opacity-0 backdrop-blur-md transition group-hover:opacity-100 group-focus-visible:opacity-100">
                <Expand className="size-4" />
              </span>
            </button>
          ))}
        </div>
      </div>

      {activeItem && activeIndex !== null ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={isEn ? "Photo viewer" : "ছবি প্রদর্শক"}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/95 p-3 backdrop-blur-xl sm:p-6"
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) closeLightbox();
          }}
        >
          <div className="relative flex h-full w-full max-w-[92rem] flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#080807]">
            <div className="flex items-center justify-end gap-3 border-b border-white/10 px-4 py-3 sm:px-6">
              <span className="text-xs text-[#918d84]">
                {activeIndex + 1} / {filteredItems.length}
              </span>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={closeLightbox}
                aria-label={isEn ? "Close photo viewer" : "ছবি প্রদর্শক বন্ধ করুন"}
                className="grid size-10 place-items-center rounded-full border border-white/10 text-white transition hover:border-[#d6a642]/50 hover:bg-[#d6a642]/10"
              >
                <X className="size-5" />
              </button>
            </div>

            <div className="relative min-h-0 flex-1 bg-black">
              <Image
                src={activeItem.src}
                alt={isEn ? activeItem.altEn : activeItem.altBn}
                fill
                sizes="100vw"
                className="object-contain p-2 sm:p-5"
                priority
              />
              <button
                type="button"
                onClick={showPrevious}
                aria-label={isEn ? "Previous photo" : "আগের ছবি"}
                className="absolute left-3 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-black/55 text-white backdrop-blur-md transition hover:border-[#d6a642]/60 hover:bg-[#d6a642]/20 sm:left-5 sm:size-12"
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                type="button"
                onClick={showNext}
                aria-label={isEn ? "Next photo" : "পরের ছবি"}
                className="absolute right-3 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-black/55 text-white backdrop-blur-md transition hover:border-[#d6a642]/60 hover:bg-[#d6a642]/20 sm:right-5 sm:size-12"
              >
                <ChevronRight className="size-5" />
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
