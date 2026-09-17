"use client";

import { Check, Headphones, Play, Share2, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";

import { AudiobookPlayer } from "@/components/audiobook-player";
import type { AudiobookTrack } from "@/lib/audiobook-data";

type AudiobookModalLauncherProps = {
  cover: string;
  coverAlt: string;
  title: string;
  author: string;
  tracks: AudiobookTrack[];
  locale?: "bn" | "en";
  priority?: boolean;
};

function subscribeToLocationChange(callback: () => void) {
  window.addEventListener("popstate", callback);
  return () => window.removeEventListener("popstate", callback);
}

function getDeepLinkSnapshot() {
  return new URLSearchParams(window.location.search).get("listen") === "1";
}

function getServerDeepLinkSnapshot() {
  return false;
}

async function copyToClipboard(value: string) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(value);
    return;
  }

  const textarea = document.createElement("textarea");
  textarea.value = value;
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  const didCopy = document.execCommand("copy");
  textarea.remove();

  if (!didCopy) throw new Error("Could not copy the audiobook link");
}

export function AudiobookModalLauncher({
  cover,
  coverAlt,
  title,
  author,
  tracks,
  locale = "bn",
  priority = false,
}: AudiobookModalLauncherProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const copiedTimerRef = useRef<number | null>(null);
  const isDeepLink = useSyncExternalStore(
    subscribeToLocationChange,
    getDeepLinkSnapshot,
    getServerDeepLinkSnapshot,
  );
  const [isManuallyOpen, setIsManuallyOpen] = useState(false);
  const [isDeepLinkDismissed, setIsDeepLinkDismissed] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const isOpen = isManuallyOpen || (isDeepLink && !isDeepLinkDismissed);

  const copy = locale === "en"
    ? {
        close: "Close audiobook player",
        open: `Play ${title}`,
        hint: "Click the cover to listen",
        label: "Audiobook player",
        nowPlaying: "Listen now",
        share: "Share audiobook",
        shared: "Link copied",
        shareText: `Listen to ${title} by ${author}`,
      }
    : {
        close: "অডিওবুক প্লেয়ার বন্ধ করুন",
        open: `${title} শুনুন`,
        hint: "শুনতে প্রচ্ছদে ক্লিক করুন",
        label: "অডিওবুক প্লেয়ার",
        nowPlaying: "এখন শুনুন",
        share: "অডিওবুক শেয়ার করুন",
        shared: "লিংক কপি হয়েছে",
        shareText: `${author}-এর ${title} অডিওবুকটি শুনুন`,
      };

  useEffect(() => () => {
    if (copiedTimerRef.current) window.clearTimeout(copiedTimerRef.current);
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen && !dialog.open) {
      dialog.showModal();
    } else if (!isOpen && dialog.open) {
      dialog.close();
    }
  }, [isOpen]);

  const closeModal = () => {
    setIsManuallyOpen(false);
    setIsDeepLinkDismissed(true);
    window.requestAnimationFrame(() => triggerRef.current?.focus());
  };

  const confirmCopied = () => {
    setIsCopied(true);
    if (copiedTimerRef.current) window.clearTimeout(copiedTimerRef.current);
    copiedTimerRef.current = window.setTimeout(() => setIsCopied(false), 2500);
  };

  const shareAudiobook = async () => {
    const shareUrl = new URL(window.location.href);
    shareUrl.search = "";
    shareUrl.searchParams.set("listen", "1");
    shareUrl.hash = "";

    try {
      if (navigator.share) {
        await navigator.share({ title, text: copy.shareText, url: shareUrl.toString() });
        return;
      }

      await copyToClipboard(shareUrl.toString());
      confirmCopied();
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") return;

      try {
        await copyToClipboard(shareUrl.toString());
        confirmCopied();
      } catch {
        // The share controls remain available so the visitor can try again.
      }
    }
  };

  return (
    <>
      <div className="relative">
        <button
          ref={triggerRef}
          type="button"
          onClick={() => {
            setIsDeepLinkDismissed(false);
            setIsManuallyOpen(true);
          }}
          aria-haspopup="dialog"
          aria-expanded={isOpen}
          aria-label={copy.open}
          className="group relative block aspect-[4/5] w-full cursor-pointer overflow-hidden bg-[radial-gradient(circle_at_center,rgba(214,166,66,.16),transparent_68%)] text-left"
        >
          <Image
            src={cover}
            alt={coverAlt}
            fill
            sizes="(max-width: 768px) 100vw, 34rem"
            className="object-contain p-8 drop-shadow-[0_25px_45px_rgba(0,0,0,.7)] transition duration-500 group-hover:scale-[1.025] sm:p-12"
            priority={priority}
          />
          <span className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent opacity-80 transition group-hover:opacity-100" />
          <span className="absolute bottom-5 left-5 z-10 max-w-[calc(100%-7rem)] text-sm font-medium text-white drop-shadow-md sm:bottom-7 sm:left-7">
            {copy.hint}
          </span>
          <span className="absolute bottom-4 right-4 z-10 grid size-16 place-items-center rounded-full bg-[#d6a642] text-black shadow-[0_16px_35px_rgba(0,0,0,.45)] transition duration-300 group-hover:scale-110 group-hover:bg-[#efc66a] sm:bottom-6 sm:right-6">
            <Play className="ml-1 size-7 fill-current" aria-hidden="true" />
          </span>
        </button>
        <button
          type="button"
          onClick={() => void shareAudiobook()}
          aria-label={isCopied ? copy.shared : copy.share}
          className="absolute right-4 top-4 z-20 inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 bg-black/65 px-4 text-xs font-semibold text-white shadow-lg backdrop-blur transition hover:border-[#d6a642]/60 hover:bg-black/85 sm:right-6 sm:top-6"
        >
          {isCopied ? <Check className="size-4 text-[#efc66a]" aria-hidden="true" /> : <Share2 className="size-4" aria-hidden="true" />}
          {isCopied ? copy.shared : copy.share}
        </button>
      </div>

      <dialog
        ref={dialogRef}
        aria-label={copy.label}
        onCancel={(event) => {
          event.preventDefault();
          closeModal();
        }}
        onClose={() => {
          setIsManuallyOpen(false);
          setIsDeepLinkDismissed(true);
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeModal();
        }}
        className="m-auto max-h-[calc(100dvh-2rem)] w-[calc(100%-1.5rem)] max-w-4xl overflow-y-auto rounded-[2rem] border border-white/15 bg-[#080806] p-0 text-[#f7f3e8] shadow-[0_40px_120px_rgba(0,0,0,.8)] backdrop:bg-black/80 backdrop:backdrop-blur-md"
      >
        {isOpen ? (
          <div className="relative overflow-hidden rounded-[2rem]">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_18%_15%,rgba(214,166,66,.24),transparent_58%)]" />
            <button
              type="button"
              onClick={() => void shareAudiobook()}
              aria-label={isCopied ? copy.shared : copy.share}
              className="absolute right-[4.25rem] top-4 z-20 grid size-11 place-items-center rounded-full border border-white/15 bg-black/50 text-white backdrop-blur transition hover:border-white/35 hover:bg-black/80 sm:right-[5rem] sm:top-6"
            >
              {isCopied ? <Check className="size-5 text-[#efc66a]" aria-hidden="true" /> : <Share2 className="size-5" aria-hidden="true" />}
            </button>
            <button
              type="button"
              onClick={closeModal}
              aria-label={copy.close}
              className="absolute right-4 top-4 z-20 grid size-11 place-items-center rounded-full border border-white/15 bg-black/50 text-white backdrop-blur transition hover:border-white/35 hover:bg-black/80 sm:right-6 sm:top-6"
            >
              <X className="size-5" aria-hidden="true" />
            </button>

            <div className="relative grid gap-5 px-5 pb-5 pt-20 sm:grid-cols-[8rem_1fr] sm:items-end sm:px-8 sm:pb-8 sm:pt-10">
              <div className="relative aspect-[4/5] w-28 overflow-hidden rounded-xl border border-white/10 bg-black/30 shadow-2xl sm:w-32">
                <Image src={cover} alt="" fill sizes="128px" className="object-contain" />
              </div>
              <div className="min-w-0 pb-1">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.13em] text-[#d6a642]">
                  <Headphones className="size-4" aria-hidden="true" /> {copy.nowPlaying}
                </span>
                <h2 className="mt-3 text-balance text-2xl font-medium text-white sm:text-4xl">{title}</h2>
                <p className="mt-2 text-sm text-[#aaa69c]">{author}</p>
              </div>
            </div>

            <div className="relative px-3 pb-3 sm:px-5 sm:pb-5">
              <AudiobookPlayer
                tracks={tracks}
                locale={locale}
                onShare={() => void shareAudiobook()}
                isShared={isCopied}
              />
            </div>
          </div>
        ) : null}
      </dialog>
    </>
  );
}
