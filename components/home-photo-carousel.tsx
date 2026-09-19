"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Images } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

import { galleryItems } from "@/lib/gallery-data";
import type { SiteLocale } from "@/lib/locale";

const visiblePhotoCount = 3;
const cardGap = 16;
const extendedGalleryItems = [
  ...galleryItems.slice(-visiblePhotoCount),
  ...galleryItems,
  ...galleryItems.slice(0, visiblePhotoCount),
];

export function HomePhotoCarousel({ locale }: { locale: SiteLocale }) {
  const [trackIndex, setTrackIndex] = useState(visiblePhotoCount);
  const [slideStep, setSlideStep] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [paused, setPaused] = useState(false);
  const viewportRef = useRef<HTMLDivElement>(null);
  const isEn = locale === "en";
  const activeIndex = ((trackIndex - visiblePhotoCount) % galleryItems.length + galleryItems.length) % galleryItems.length;
  const galleryHref = isEn ? "/en/gallery" : "/gallery";

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const measure = () => {
      const cardWidth = (viewport.clientWidth - cardGap * (visiblePhotoCount - 1)) / visiblePhotoCount;
      setSlideStep(cardWidth + cardGap);
    };

    measure();
    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(viewport);

    const firstFrame = window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => setTransitionEnabled(true));
    });

    return () => {
      window.cancelAnimationFrame(firstFrame);
      resizeObserver.disconnect();
    };
  }, []);

  const showPrevious = useCallback(() => {
    if (isAnimating || slideStep === 0) return;
    setTransitionEnabled(true);
    setIsAnimating(true);
    setTrackIndex((current) => current - 1);
  }, [isAnimating, slideStep]);

  const showNext = useCallback(() => {
    if (isAnimating || slideStep === 0) return;
    setTransitionEnabled(true);
    setIsAnimating(true);
    setTrackIndex((current) => current + 1);
  }, [isAnimating, slideStep]);

  useEffect(() => {
    if (paused || isAnimating || slideStep === 0 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = window.setTimeout(() => {
      showNext();
    }, 5500);

    return () => window.clearTimeout(timer);
  }, [isAnimating, paused, showNext, slideStep]);

  const handleTrackTransitionEnd = (event: React.TransitionEvent<HTMLDivElement>) => {
    if (event.currentTarget !== event.target || event.propertyName !== "transform") return;

    setIsAnimating(false);

    let resetIndex: number | null = null;
    if (trackIndex < visiblePhotoCount) resetIndex = galleryItems.length + visiblePhotoCount - 1;
    if (trackIndex > galleryItems.length + visiblePhotoCount - 1) resetIndex = visiblePhotoCount;
    if (resetIndex === null) return;

    setTransitionEnabled(false);
    setTrackIndex(resetIndex);
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => setTransitionEnabled(true));
    });
  };

  return (
    <section
      id="gallery-preview"
      className="relative overflow-hidden border-b border-white/[0.06] bg-[#080807] py-24 md:py-32"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
      }}
    >
      <div className="pointer-events-none absolute -right-40 top-20 size-[30rem] rounded-full bg-[#d6a642]/[0.07] blur-[130px]" />
      <div className="page-shell relative">
        <div className="mb-12 flex flex-col justify-between gap-7 md:flex-row md:items-end">
          <div>
            <span className="eyebrow mb-5">{isEn ? "In pictures" : "ছবিতে পথচলা"}</span>
            <h2 className="section-title text-balance">
              {isEn ? (
                <>Moments, milestones &amp; <span className="gold-text">memories</span></>
              ) : (
                <>মুহূর্ত, অর্জন ও <span className="gold-text">স্মৃতির অ্যালবাম</span></>
              )}
            </h2>
          </div>
          <div className="max-w-md md:text-right">
            <p className="text-sm leading-7 text-[#918d84] md:text-base">
              {isEn
                ? "Selected moments from academic life, international events, media features, publications, and personal journeys."
                : "একাডেমিক জীবন, আন্তর্জাতিক আয়োজন, গণমাধ্যম, প্রকাশনা এবং ব্যক্তিগত পথচলার নির্বাচিত কিছু মুহূর্ত।"}
            </p>
            <Link href={galleryHref} className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#e8bd64] transition hover:text-white">
              <Images className="size-4" />
              {isEn ? "View full gallery" : "সম্পূর্ণ গ্যালারি দেখুন"}
            </Link>
          </div>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-white/[0.09] bg-[#0e0e0c] shadow-[0_35px_100px_-55px_rgba(214,166,66,.35)]">
          <div className="relative overflow-hidden bg-black" style={{ padding: "1rem" }}>
            <div ref={viewportRef} className="overflow-hidden">
              <div
                onTransitionEnd={handleTrackTransitionEnd}
                style={{
                  display: "flex",
                  gap: `${cardGap}px`,
                  opacity: slideStep > 0 ? 1 : 0,
                  transform: `translate3d(-${trackIndex * slideStep}px, 0, 0)`,
                  transition: transitionEnabled ? "transform 650ms cubic-bezier(0.22, 1, 0.36, 1)" : "none",
                  willChange: "transform",
                }}
              >
                {extendedGalleryItems.map((item, itemIndex) => {
                  const isClone = itemIndex < visiblePhotoCount || itemIndex >= galleryItems.length + visiblePhotoCount;
                  const isVisible = itemIndex >= trackIndex && itemIndex < trackIndex + visiblePhotoCount;

                  return (
                    <div
                      key={`${item.id}-${itemIndex}`}
                      aria-hidden={!isVisible}
                      className="relative shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0a] shadow-[0_20px_55px_-35px_rgba(0,0,0,.95)]"
                      style={{ height: "20rem", flexBasis: `calc((100% - ${cardGap * (visiblePhotoCount - 1)}px) / ${visiblePhotoCount})` }}
                    >
                      <Image
                        src={item.src}
                        alt={isVisible && !isClone ? (isEn ? item.altEn : item.altBn) : ""}
                        fill
                        sizes="33vw"
                        className="object-cover"
                        priority={itemIndex >= visiblePhotoCount && itemIndex < visiblePhotoCount * 2}
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            <button
              type="button"
              onClick={showPrevious}
              disabled={isAnimating}
              aria-label={isEn ? "Show previous photo" : "আগের ছবি দেখুন"}
              className="absolute left-6 top-1/2 z-30 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-md transition hover:border-[#d6a642]/60 hover:bg-[#d6a642]/25"
              style={{ left: "1.5rem", top: "50%", transform: "translateY(-50%)" }}
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={showNext}
              disabled={isAnimating}
              aria-label={isEn ? "Show next photo" : "পরের ছবি দেখুন"}
              className="absolute right-6 top-1/2 z-30 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-md transition hover:border-[#d6a642]/60 hover:bg-[#d6a642]/25"
              style={{ right: "1.5rem", top: "50%", transform: "translateY(-50%)" }}
            >
              <ChevronRight className="size-5" />
            </button>
          </div>

          <div className="border-t border-white/[0.08] p-4 sm:px-6 sm:py-5">
            <div className="flex items-center gap-4">
              <span className="shrink-0 text-xs text-white/70">
                {String(activeIndex + 1).padStart(2, "0")} / {String(galleryItems.length).padStart(2, "0")}
              </span>
              <div className="flex-1 overflow-hidden rounded-full bg-white/10" style={{ height: "0.25rem" }}>
                <div
                  className="h-full rounded-full transition-[width] duration-500"
                  style={{ width: `${((activeIndex + 1) / galleryItems.length) * 100}%`, height: "100%", background: "#d6a642" }}
                />
              </div>
            </div>
            <p className="mt-4 text-xs leading-5 text-[#77736b]">
              {isEn ? "Use the arrows to browse the complete photo collection." : "সম্পূর্ণ ছবির সংগ্রহ দেখতে তীরচিহ্ন ব্যবহার করুন।"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
