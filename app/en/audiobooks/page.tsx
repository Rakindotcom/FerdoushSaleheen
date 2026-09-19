import type { Metadata } from "next";
import { absoluteUrl, createPageMetadata } from "@/lib/seo";
import Link from "next/link";
import { BookOpen, Headphones, RotateCcw } from "lucide-react";

import { AudiobookHero } from "@/components/heroes/cohesive/audiobook-hero";
import { AudiobookModalLauncher } from "@/components/audiobook-modal-launcher";
import { InnerPage, SectionHeading } from "@/components/inner-page";
import { createBreadcrumbJsonLd, StructuredData } from "@/components/structured-data";
import { Button } from "@/components/ui/button";
import { surahAlFatihahAudiobook } from "@/lib/audiobook-data";

export const metadata: Metadata = createPageMetadata({
  locale: "en",
  title: "Surah Al-Fatihah: The Seven Verses Audiobook",
  description: "Listen online to the complete Bangla audiobook of Surah Al-Fatihah: The Seven Verses by Dr. Ferdoush Saleheen.",
  banglaPath: "/audiobooks",
  englishPath: "/en/audiobooks",
  image: "/bookImage.webp",
});

const audiobookJsonLd = {
  "@context": "https://schema.org",
  "@type": "Audiobook",
  "@id": `${absoluteUrl("/audiobooks")}#audiobook`,
  name: "সুরা আল-ফাতিহা: সাতটি আয়াত",
  alternateName: "Surah Al-Fatihah: The Seven Verses — Bangla Audiobook",
  description: surahAlFatihahAudiobook.description,
  url: absoluteUrl("/audiobooks"),
  image: absoluteUrl(surahAlFatihahAudiobook.cover),
  inLanguage: "bn-BD",
  author: { "@id": `${absoluteUrl()}#person` },
  readBy: { "@id": `${absoluteUrl()}#person` },
  isAccessibleForFree: true,
  associatedMedia: {
    "@type": "AudioObject",
    contentUrl: absoluteUrl(surahAlFatihahAudiobook.tracks[0].src),
    encodingFormat: "audio/mpeg",
    inLanguage: "bn-BD",
  },
};

const englishTracks = surahAlFatihahAudiobook.tracks.map((track) => ({ ...track, title: "Complete audiobook" }));

export default function EnglishAudiobookPage() {
  return (
    <InnerPage
      locale="en"
      hero={<AudiobookHero locale="en" />}
    >
      <StructuredData data={[audiobookJsonLd, createBreadcrumbJsonLd([{ name: "Home", path: "/en" }, { name: "Audiobook", path: "/en/audiobooks" }])]} />
      <section id="audiobook-player-section" className="py-24 md:py-32">

        <div className="page-shell">
          <SectionHeading
            eyebrow="Available audiobook"
            description="Listen to the complete Bangla audiobook free of charge. This browser will remember your position."
          >
            Surah Al-Fatihah:<br /><span className="gold-text">The Seven Verses</span>
          </SectionHeading>
          <article className="mx-auto grid max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#0d0c0a] shadow-[0_30px_90px_-55px_rgba(214,166,66,.55)] md:grid-cols-[.8fr_1.2fr]">
            <AudiobookModalLauncher
              cover={surahAlFatihahAudiobook.cover}
              coverAlt="Cover of Surah Al-Fatihah: The Seven Verses audiobook"
              title="Surah Al-Fatihah: The Seven Verses"
              author="Dr. Ferdoush Saleheen"
              tracks={englishTracks}
              locale="en"
              priority
            />
            <div className="flex flex-col justify-center border-t border-white/[0.08] p-6 sm:p-10 md:border-l md:border-t-0 lg:p-12">
              <span className="inline-flex items-center gap-2 text-xs font-semibold text-[#d6a642]">
                <Headphones className="size-4" /> LISTEN FREE
              </span>
              <h2 className="mt-4 text-3xl font-medium text-white sm:text-4xl">Surah Al-Fatihah: The Seven Verses</h2>
              <p className="mt-2 text-sm text-[#8e8a81]">Dr. Ferdoush Saleheen</p>
              <p className="mt-5 text-sm leading-7 text-[#99958c]">A complete audio experience exploring the seven verses through life, worship, guidance, and self-reflection. The recording is in Bangla.</p>
              <Button asChild variant="outline" className="mt-6">
                <Link href="/en/books"><BookOpen className="size-4" /> View the book</Link>
              </Button>
              <div className="mt-6 flex items-start gap-3 border-t border-white/[0.08] pt-6 text-sm leading-6 text-[#8e8a81]">
                <RotateCcw className="mt-1 size-4 shrink-0 text-[#d6a642]" aria-hidden="true" />
                <p>When you stop listening, this browser will remember your position and offer to resume from there next time.</p>
              </div>
            </div>
          </article>
        </div>
      </section>
    </InnerPage>
  );
}
