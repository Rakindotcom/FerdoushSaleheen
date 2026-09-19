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
  locale: "bn",
  title: "সুরা আল-ফাতিহা: সাতটি আয়াত অডিওবুক",
  description: "ড. ফেরদৌস সালেহীনের ‘সুরা আল-ফাতিহা: সাতটি আয়াত’ পূর্ণাঙ্গ বাংলা অডিওবুকটি অনলাইনে বিনামূল্যে শুনুন।",
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

export default function AudiobooksPage() {
  const audiobook = surahAlFatihahAudiobook;

  return (
    <InnerPage
      locale="bn"
      hero={<AudiobookHero locale="bn" />}
    >
      <StructuredData data={[audiobookJsonLd, createBreadcrumbJsonLd([{ name: "হোমপেজ", path: "/" }, { name: "অডিওবুক", path: "/audiobooks" }])]} />
      <section id="audiobook-player-section" className="py-24 md:py-32">

        <div className="page-shell">
          <SectionHeading
            eyebrow="বর্তমান অডিওবুক"
            description="সম্পূর্ণ অডিওটি বিনামূল্যে শুনুন। আপনার শোনার অবস্থান এই ব্রাউজারে সংরক্ষিত থাকবে।"
          >
            সুরা আল-ফাতিহা:<br /><span className="gold-text">সাতটি আয়াত</span>
          </SectionHeading>

          <article className="mx-auto grid max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#0d0c0a] shadow-[0_30px_90px_-55px_rgba(214,166,66,.55)] md:grid-cols-[.8fr_1.2fr]">
            <AudiobookModalLauncher
              cover={audiobook.cover}
              coverAlt={`${audiobook.title} অডিওবুকের প্রচ্ছদ`}
              title={audiobook.title}
              author={audiobook.author}
              tracks={audiobook.tracks}
              priority
            />
            <div className="flex flex-col justify-center border-t border-white/[0.08] p-6 sm:p-10 md:border-l md:border-t-0 lg:p-12">
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.13em] text-[#d6a642]">
                <Headphones className="size-4" /> বিনামূল্যে শুনুন
              </span>
              <h2 className="mt-4 text-3xl font-medium text-white sm:text-4xl">{audiobook.title}</h2>
              <p className="mt-2 text-sm text-[#8e8a81]">{audiobook.author}</p>
              <p className="mt-5 text-sm leading-7 text-[#99958c]">{audiobook.description}</p>
              <Button asChild variant="outline" className="mt-6">
                <Link href="/books"><BookOpen className="size-4" /> বইটি দেখুন</Link>
              </Button>
              <div className="mt-6 flex items-start gap-3 border-t border-white/[0.08] pt-6 text-sm leading-6 text-[#8e8a81]">
                <RotateCcw className="mt-1 size-4 shrink-0 text-[#d6a642]" aria-hidden="true" />
                <p>আপনি যেখানে শোনা থামাবেন, এই ব্রাউজার পরেরবার সেখান থেকেই অডিওটি চালানোর জন্য অবস্থানটি মনে রাখবে।</p>
              </div>
            </div>
          </article>
        </div>
      </section>
    </InnerPage>
  );
}
