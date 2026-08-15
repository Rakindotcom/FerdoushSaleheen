"use client";

import { Play, X } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type YouTubeEmbedProps = {
  videoId: string;
  title: string;
  className?: string;
  loading?: "eager" | "lazy";
  locale?: "bn" | "en";
};

export function YouTubeEmbed({
  videoId,
  title,
  className = "",
  loading = "lazy",
  locale = "bn",
}: YouTubeEmbedProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  return (
    <div className={`relative aspect-video overflow-hidden bg-black ${className}`}>
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label={locale === "en" ? `Play ${title} in a dialog` : `${title}: পপ-আপে চালু করুন`}
          aria-haspopup="dialog"
          className="group absolute inset-0 size-full bg-cover bg-center text-white"
          style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,.08), rgba(0,0,0,.62)), url(https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg)` }}
        >
          <span className="absolute inset-0 bg-black/5 transition duration-300 group-hover:bg-black/15" />
          <span className="absolute left-1/2 top-1/2 grid size-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[#d6a642] text-black shadow-[0_10px_40px_rgba(0,0,0,.45)] transition duration-300 group-hover:scale-110 sm:size-20">
            <Play className="ml-1 size-6 fill-current sm:size-8" />
          </span>
          <span className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full border border-white/20 bg-black/65 px-5 py-2.5 text-sm font-semibold backdrop-blur-md transition group-hover:border-[#d6a642]/60 group-hover:text-[#efc976]">{locale === "en" ? "Watch video" : "ভিডিও দেখুন"}</span>
        </button>
      {isOpen && createPortal(
        <div
          role="dialog"
          aria-modal="true"
          aria-label={title}
          className="fixed inset-0 z-[100] grid place-items-center bg-black/85 p-4 backdrop-blur-md sm:p-8"
          onMouseDown={() => setIsOpen(false)}
        >
          <div className="relative w-full max-w-6xl" onMouseDown={(event) => event.stopPropagation()}>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label={locale === "en" ? "Close video" : "ভিডিও বন্ধ করুন"}
              className="absolute -top-14 right-0 grid size-11 place-items-center rounded-full border border-white/20 bg-black/70 text-white transition hover:border-[#d6a642]/60 hover:text-[#d6a642]"
            >
              <X className="size-5" />
            </button>
            <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/15 bg-black shadow-2xl">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&loop=1&playlist=${videoId}&iv_load_policy=3&playsinline=1`}
                title={title}
                loading={loading}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="absolute inset-0 size-full border-0"
              />
            </div>
          </div>
        </div>,
        document.body,
      )}
    </div>
  );
}
