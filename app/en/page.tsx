import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, ExternalLink, GraduationCap, Headphones, Linkedin, Mic2, Play, UserRound } from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { YouTubeEmbed } from "@/components/youtube-embed";
import { linkedInActivityUrl, linkedInPostsEn } from "@/lib/linkedin-posts";
import { podcastEpisodes } from "@/lib/podcast-data";
import { experiences, profile } from "@/lib/profile-data";


export const metadata: Metadata = createPageMetadata({
  locale: "en",
  title: "Supply Chain & Logistics Expert, Educator & Author",
  siteNameFirst: true,
  description: "The official digital platform of Dr. Ferdoush Saleheen—academic, supply chain leader, researcher, author, and speaker—featuring his profile, books, audiobook, and podcasts.",
  banglaPath: "/",
  englishPath: "/en",
});

const exploreItems = [
  { icon: UserRound, number: "01", title: "About", description: "Professional experience, education, research, and publications.", href: "/en/about" },
  { icon: BookOpen, number: "02", title: "Books", description: "Explore Surah Al-Fatihah: The Seven Verses.", href: "/en/books" },
  { icon: Mic2, number: "03", title: "Podcast", description: "Selected long-form conversations and interviews.", href: "/en/podcast" },
  { icon: Headphones, number: "04", title: "Audiobook", description: "Listen to the complete Bangla audiobook online.", href: "/en/audiobooks" },
];

const featuredOrganizations = experiences.flatMap(({ organization, website, logo }) =>
  logo ? [{ organization, website, ...logo }] : [],
).slice(0, 8);

export default function EnglishHomePage() {
  return (
    <main className="bg-[#050505] text-[#f7f3e8]">
      <SiteHeader />

      <section className="relative min-h-[52rem] overflow-hidden border-b border-white/[0.06] lg:min-h-screen">
        <div className="grid-veil pointer-events-none absolute inset-0" />
        <div className="paper-noise pointer-events-none absolute inset-0 opacity-[0.025]" />
        <div className="animate-breathe pointer-events-none absolute -right-40 top-20 size-[36rem] rounded-full bg-[#b77e24]/10 blur-[120px]" />
        <div className="page-shell relative z-10 grid min-h-[52rem] items-center gap-12 pb-14 pt-32 lg:min-h-screen lg:grid-cols-[minmax(0,.9fr)_minmax(28rem,1.1fr)] lg:gap-14 lg:pt-28">
          <div className="max-w-3xl">
            <div className="eyebrow mb-7">Author · Researcher · Educator</div>
            <h1 className="text-balance text-[clamp(3.5rem,7vw,6.4rem)] font-medium leading-[0.88] tracking-[-0.05em] text-white">Dr. Ferdoush<br /><span className="gold-text">Saleheen</span></h1>
            <p className="mt-6 text-balance text-[clamp(1.7rem,3.6vw,3rem)] font-medium leading-tight tracking-[-0.035em] text-white">From the book to the journey of life</p>
            <p className="mt-8 max-w-xl text-balance text-lg leading-8 text-[#aaa69c] md:text-xl">The official digital home of Dr. Ferdoush Saleheen, bringing together his professional journey, published work, audiobook, and selected conversations.</p>
            <div className="mt-9 flex flex-wrap gap-3"><Button asChild size="lg"><Link href="/en/books">Explore the book <ArrowRight className="size-4" /></Link></Button><Button asChild size="lg" variant="outline"><Link href="/en/audiobooks"><Headphones className="size-4" /> Listen now</Link></Button></div>
          </div>
          <div className="relative aspect-[3/2] w-full overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-[#121311] shadow-[0_32px_90px_rgba(0,0,0,.48)]">
            <Image src="/FSwithTheBook.png" alt="Dr. Ferdoush Saleheen holding his book on Surah Al-Fatihah" fill priority sizes="(max-width: 1024px) 100vw, 48vw" className="object-cover object-center" />
            <div className="absolute bottom-5 right-5 hidden rounded-2xl border border-[#d6a642]/25 bg-black/65 px-5 py-4 backdrop-blur-lg sm:block"><span className="mb-1 block text-[0.6rem] uppercase tracking-[0.2em] text-[#aaa69c]">Featured publication</span><strong className="text-sm font-medium text-[#e8c573]">Surah Al-Fatihah · The Seven Verses</strong></div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/[0.06] bg-[#0a0a09]"><div className="page-shell grid gap-8 py-8 md:grid-cols-[auto_1fr_auto] md:items-center"><div className="flex items-center gap-4"><div className="relative size-14 overflow-hidden rounded-full border border-[#d6a642]/30"><Image src="/fsPhoto.png" alt="Portrait of Dr. Ferdous Saleheen" fill sizes="56px" className="object-cover" /></div><div><strong className="block text-sm font-medium">Dr. Ferdoush Saleheen</strong><span className="text-xs text-[#858178]">PhD · FCILT</span></div></div><p className="max-w-2xl text-sm leading-6 text-[#99958c] md:border-l md:border-white/10 md:pl-8">Supply chain and logistics specialist, academic, researcher, and author of Surah Al-Fatihah: The Seven Verses.</p><Link href="/en/about" className="inline-flex items-center gap-2 text-sm text-[#d6a642]">Read profile <ArrowRight className="size-4" /></Link></div></section>

      <section className="relative overflow-hidden border-b border-white/[0.06] py-24 md:py-32"><div className="page-shell"><div className="mb-14 grid gap-6 md:grid-cols-[1fr_.72fr] md:items-end"><div><span className="eyebrow mb-5">Professional journey</span><h2 className="section-title">From industry leadership to <span className="gold-text">teaching and research</span></h2></div><p className="max-w-lg text-base leading-7 text-[#918d84] md:justify-self-end">More than two decades across supply chain, logistics, corporate transformation, and higher education in Asia and the Gulf.</p></div><div className="grid overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#0c0c0b] lg:grid-cols-[.82fr_1.18fr]">
        <div className="relative min-h-[34rem] bg-[#ecebea]"><Image src="/fsPhoto.png" alt="Dr. Ferdous Saleheen, PhD, FCILT" fill sizes="(max-width: 1024px) 100vw, 42vw" className="object-cover object-top" /><div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/45 to-transparent p-7 pt-28"><span className="text-xs uppercase tracking-[0.14em] text-[#e8bd64]">Current leadership</span><p className="mt-2 text-lg font-medium text-white">Head of Maritime Logistics &amp; SCM Department</p><p className="mt-1 text-sm text-white/60">Sharjah Maritime Academy · UAE</p></div></div>
        <div className="flex flex-col justify-center border-t border-white/[0.08] p-7 md:p-12 lg:border-l lg:border-t-0"><span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.13em] text-[#d6a642]"><GraduationCap className="size-4" /> Education · Industry · Research</span><h3 className="mt-5 text-balance text-3xl font-medium leading-tight text-white md:text-5xl">Connecting industry experience with academic knowledge</h3><p className="mt-6 text-base leading-8 text-[#aaa69c]">Following senior and C-suite roles across FMCG, retail, electronics, and agribusiness, he now leads maritime logistics and supply chain education. His work spans teaching, curriculum development, research, editorial service, and corporate training.</p><div className="mt-8 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08]">{[["20+", "Years"], ["34+", "Publications"], ["100+", "Training programs"]].map(([value, label]) => <div key={label} className="bg-[#10100f] px-3 py-5 text-center"><strong className="gold-text block text-3xl font-semibold">{value}</strong><span className="mt-2 block text-xs text-[#8e8a81]">{label}</span></div>)}</div><div className="mt-8 flex gap-3"><Button asChild><Link href="/en/about">Full profile <ArrowRight className="size-4" /></Link></Button><Button asChild variant="outline"><a href={profile.linkedIn} target="_blank" rel="noreferrer"><Linkedin className="size-4" /> LinkedIn</a></Button></div></div>
      </div><div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">{featuredOrganizations.map(({ organization, website, src, onDark }) => <a key={organization} href={website} target="_blank" rel="noreferrer" aria-label={`${organization} website`} className={`relative h-20 overflow-hidden rounded-xl border ${onDark ? "border-white/10 bg-[#151515]" : "border-black/10 bg-[#f2efe8]"}`}><Image src={src} alt={`${organization} logo`} fill sizes="150px" className="object-contain p-3" /></a>)}</div></div></section>

      <section className="py-24 md:py-32"><div className="page-shell"><div className="mb-14"><span className="eyebrow mb-5">Official platform</span><h2 className="section-title">Explore the <span className="gold-text">platform</span></h2></div><div className="grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] md:grid-cols-2 lg:grid-cols-4">{exploreItems.map(({ icon: Icon, number, title, description, href }) => <Link key={title} href={href} className="group relative min-h-60 bg-[#0c0c0b] p-7 transition hover:bg-[#12100c]"><div className="flex justify-between"><span className="text-xs text-[#918d84]">{number}</span><ArrowRight className="size-4 text-[#77736a]" /></div><Icon className="mt-14 size-6 text-[#d6a642]" /><h3 className="mt-4 text-2xl font-medium text-white">{title}</h3><p className="mt-2 text-sm leading-6 text-[#88847b]">{description}</p></Link>)}</div></div></section>

      <section className="border-y border-white/[0.06] bg-[#090908] py-24 md:py-32"><div className="page-shell grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-center"><div className="relative min-h-[32rem]"><Image src="/bookImage.png" alt="Cover of Surah Al-Fatihah: The Seven Verses" fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-contain p-10" /></div><div><span className="eyebrow mb-5">First publication</span><h2 className="section-title">Seven verses.<br /><span className="gold-text">A reflection for life.</span></h2><p className="mt-6 max-w-xl text-base leading-8 text-[#aaa69c]">An invitation to encounter Surah Al-Fatihah through gratitude, worship, guidance, accountability, and the Hereafter.</p><div className="mt-8 flex gap-3"><Button asChild><Link href="/en/books">Explore the book</Link></Button><Button asChild variant="outline"><Link href="/en/audiobooks">Listen</Link></Button></div></div></div></section>

      <section className="border-b border-white/[0.06] bg-[#0a0a09] py-24 md:py-32"><div className="page-shell"><div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><span className="eyebrow mb-5">Selected from LinkedIn</span><h2 className="section-title">Recent ideas and <span className="gold-text">professional insights</span></h2></div><a href={linkedInActivityUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-[#d6a642]">View all posts <ExternalLink className="size-4" /></a></div><div className="grid gap-px overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.08] md:grid-cols-2">{linkedInPostsEn.map((post) => <a key={post.href} href={post.href} target="_blank" rel="noreferrer" className="flex min-h-72 flex-col bg-[#0d0d0c] p-7 transition hover:bg-[#12110e] md:p-9"><span className="text-xs font-semibold text-[#d6a642]">{post.category}</span><h3 className="mt-8 text-2xl font-medium leading-tight text-white">{post.title}</h3><p className="mt-5 text-sm leading-7 text-[#969289]">{post.summary}</p><span className="mt-auto inline-flex items-center gap-2 pt-8 text-sm text-[#d6a642]">Read on LinkedIn <ArrowRight className="size-4" /></span></a>)}</div></div></section>

      <section className="py-24 md:py-32"><div className="page-shell"><div className="mb-14 flex items-end justify-between"><div><span className="eyebrow mb-5">Long-form conversations</span><h2 className="section-title">Selected <span className="gold-text">podcast</span></h2></div><Link href="/en/podcast" className="text-sm text-[#d6a642]">View episodes</Link></div><article className="overflow-hidden rounded-3xl border border-white/10 bg-[#0d0d0c] p-2 sm:p-3"><YouTubeEmbed videoId={podcastEpisodes[0].videoId} title={podcastEpisodes[0].titleEn} locale="en" className="rounded-[1.15rem]" /><div className="flex justify-between gap-4 px-4 py-5"><span className="text-xs text-[#d6a642]">FEATURED PODCAST</span><span className="inline-flex items-center gap-2 text-sm text-[#969289]"><Play className="size-4 fill-current text-[#d6a642]" /> Play video</span></div></article></div></section>

      <SiteFooter />
    </main>
  );
}
