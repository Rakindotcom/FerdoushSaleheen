import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Headphones, ShoppingBag } from "lucide-react";

import { InnerPage, SectionHeading } from "@/components/inner-page";
import { Button } from "@/components/ui/button";
import { bookPurchaseUrl } from "@/lib/podcast-data";

export const metadata: Metadata = { title: "Books", description: "Books by Dr. Ferdoush Saleheen.", alternates: { canonical: "/en/books", languages: { "bn-BD": "/books", en: "/en/books" } } };

export default function EnglishBooksPage() {
  return <InnerPage locale="en" eyebrow="Publications" title={<>Books that begin a <span className="gold-text">journey of reflection</span></>} description="Each book opens a path to related audio, reflection, video, and conversation.">
    <section className="py-24 md:py-32"><div className="page-shell"><SectionHeading eyebrow="Published book" description="The first publication by Dr. Ferdoush Saleheen.">Surah Al-Fatihah:<br /><span className="gold-text">The Seven Verses</span></SectionHeading><article className="grid overflow-hidden rounded-[2rem] border border-[#d6a642]/20 bg-[#0d0c0a] lg:grid-cols-[.85fr_1.15fr]">
      <div className="relative min-h-[34rem]"><Image src="/bookImage.png" alt="Cover of Surah Al-Fatihah: The Seven Verses" fill sizes="(max-width: 1024px) 100vw, 42vw" className="object-contain p-10" priority /></div>
      <div className="flex flex-col justify-center border-t border-white/10 p-7 md:p-12 lg:border-l lg:border-t-0"><span className="text-xs font-semibold tracking-[0.13em] text-[#d6a642]">TAFSIR AND REFLECTION FOR LIFE</span><h2 className="mt-5 text-balance text-4xl font-medium text-white md:text-6xl">The verses that changed my perspective and life</h2><p className="mt-6 max-w-xl text-base leading-8 text-[#99958c]">A readable reflection on the seven verses recited in every salah, viewed through gratitude, knowledge of the Lord, accountability, worship, and guidance.</p><div className="mt-7 flex flex-wrap gap-2">{["Life", "Worship", "Al-Fatihah", "Guidance", "Hereafter"].map((tag) => <span key={tag} className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-[#aaa69c]">{tag}</span>)}</div><div className="mt-8 flex flex-wrap gap-3"><Button asChild size="lg"><Link href={bookPurchaseUrl} target="_blank" rel="noreferrer"><ShoppingBag className="size-4" /> Buy from Rokomari</Link></Button><Button asChild size="lg" variant="outline"><Link href="/en/audiobooks"><Headphones className="size-4" /> Listen to audiobook</Link></Button></div></div>
    </article></div></section>
  </InnerPage>;
}
