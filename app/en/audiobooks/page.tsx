import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, Headphones, RotateCcw } from "lucide-react";

import { AudiobookPlayer } from "@/components/audiobook-player";
import { InnerPage, SectionHeading } from "@/components/inner-page";
import { Button } from "@/components/ui/button";
import { surahAlFatihahAudiobook } from "@/lib/audiobook-data";

export const metadata: Metadata = { title: "Audiobook", description: "Listen to the complete Bangla audiobook of Surah Al-Fatihah: The Seven Verses.", alternates: { canonical: "/en/audiobooks", languages: { "bn-BD": "/audiobooks", en: "/en/audiobooks" } } };

const englishTracks = surahAlFatihahAudiobook.tracks.map((track) => ({ ...track, title: "Complete audiobook" }));

export default function EnglishAudiobookPage() {
  return <InnerPage locale="en" eyebrow="Listen" title={<>Listen with attention.<br /><span className="gold-text">Carry it in your heart.</span></>} description="Hear the book's reflections and explanations whenever it suits you, while travelling, resting, or listening quietly.">
    <section className="py-24 md:py-32"><div className="page-shell"><SectionHeading eyebrow="Available audiobook" description="Listen to the complete Bangla audiobook free of charge. This browser will remember your position.">Surah Al-Fatihah:<br /><span className="gold-text">The Seven Verses</span></SectionHeading><div className="grid gap-8 lg:grid-cols-[.75fr_1.25fr] lg:items-start">
      <article className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#0d0c0a]"><div className="relative aspect-[4/5]"><Image src={surahAlFatihahAudiobook.cover} alt="Audiobook cover" fill sizes="(max-width: 1024px) 100vw, 36vw" className="object-contain p-8" priority /></div><div className="border-t border-white/[0.08] p-6 sm:p-8"><span className="inline-flex items-center gap-2 text-xs font-semibold text-[#d6a642]"><Headphones className="size-4" /> LISTEN FREE</span><h2 className="mt-4 text-2xl font-medium text-white">Surah Al-Fatihah: The Seven Verses</h2><p className="mt-2 text-sm text-[#8e8a81]">Dr. Ferdoush Saleheen</p><p className="mt-5 text-sm leading-7 text-[#99958c]">A complete audio experience exploring the seven verses through life, worship, guidance, and self-reflection. The recording is in Bangla.</p><Button asChild variant="outline" className="mt-6"><Link href="/en/books"><BookOpen className="size-4" /> View the book</Link></Button></div></article>
      <div><AudiobookPlayer tracks={englishTracks} locale="en" /><div className="mt-5 flex items-start gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.025] px-5 py-4 text-sm leading-6 text-[#8e8a81]"><RotateCcw className="mt-1 size-4 shrink-0 text-[#d6a642]" /><p>When you stop listening, this browser will remember your position and offer to resume from there next time.</p></div></div>
    </div></div></section>
  </InnerPage>;
}
