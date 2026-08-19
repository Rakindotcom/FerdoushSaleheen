"use client";

import Image from "next/image";
import { Play, X } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type FacebookVideoEmbedProps = {
  url: string;
  title: string;
  className?: string;
  locale?: "bn" | "en";
};

export function FacebookVideoEmbed({
  url,
  title,
  className = "",
  locale = "bn",
}: FacebookVideoEmbedProps) {
  const [isOpen, setIsOpen] = useState(false);
  const reelId = url.split("/").filter(Boolean).at(-1);
  const embedUrl =
    "https://www.facebook.com/plugins/video.php?href=" +
    encodeURIComponent(url) +
    "&show_text=false&autoplay=true&width=500";

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
    <div className={["relative aspect-[9/16] overflow-hidden bg-black", className].filter(Boolean).join(" ")}>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label={locale === "en" ? "Play " + title + " in a dialog" : title + ": পপ-আপে চালু করুন"}
        aria-haspopup="dialog"
        className="group absolute inset-0 size-full text-white"
      >
        {reelId ? (
          <Image
            src={"/facebook-videos/" + reelId + ".webp"}
            alt=""
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
          />
        ) : null}
        <span className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/65 transition group-hover:from-black/15 group-hover:to-black/75" />
        <span className="absolute left-1/2 top-1/2 grid size-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[#d6a642] text-black shadow-[0_10px_40px_rgba(0,0,0,.45)] transition duration-300 group-hover:scale-110">
          <Play className="ml-1 size-6 fill-current" />
        </span>
        <span className="absolute bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/20 bg-black/65 px-5 py-2.5 text-sm font-semibold backdrop-blur-md transition group-hover:border-[#d6a642]/60 group-hover:text-[#efc976]">
          {locale === "en" ? "Watch video" : "ভিডিও দেখুন"}
        </span>
      </button>

      {isOpen ? createPortal(
        <div
          role="dialog"
          aria-modal="true"
          aria-label={title}
          className="fixed inset-0 z-[100] grid place-items-center bg-black/85 p-4 backdrop-blur-md sm:p-8"
          onMouseDown={() => setIsOpen(false)}
        >
          <div className="relative w-full max-w-md" onMouseDown={(event) => event.stopPropagation()}>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label={locale === "en" ? "Close video" : "ভিডিও বন্ধ করুন"}
              className="absolute -top-14 right-0 grid size-11 place-items-center rounded-full border border-white/20 bg-black/70 text-white transition hover:border-[#d6a642]/60 hover:text-[#d6a642]"
            >
              <X className="size-5" />
            </button>
            <div className="relative aspect-[9/16] max-h-[calc(100vh-7rem)] overflow-hidden rounded-2xl border border-white/15 bg-black shadow-2xl">
              <iframe
                src={embedUrl}
                title={title}
                loading="eager"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="absolute inset-0 size-full border-0"
              />
            </div>
          </div>
        </div>,
        document.body,
      ) : null}
    </div>
  );
}