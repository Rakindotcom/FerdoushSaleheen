import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, BookOpen, ExternalLink, GraduationCap, Headphones, Linkedin, Mic2, Play, UserRound } from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

import { YouTubeEmbed } from "@/components/youtube-embed";
import { bookPurchaseUrl, podcastEpisodes } from "@/lib/podcast-data";
import { experiences, profile } from "@/lib/profile-data";
import { linkedInActivityUrl, linkedInPosts } from "@/lib/linkedin-posts";
const exploreItems = [
  { icon: UserRound, number: "০১", title: "পরিচিতি", description: "পেশাগত অভিজ্ঞতা, শিক্ষা, গবেষণা ও প্রকাশনা।", href: "/about" },
  { icon: BookOpen, number: "০২", title: "বই", description: "প্রকাশিত বই ‘সুরা আল-ফাতিহা: সাতটি আয়াত’।", href: "/books" },
  { icon: Mic2, number: "০৩", title: "পডকাস্ট", description: "নির্বাচিত পূর্ণাঙ্গ আলোচনা ও সাক্ষাৎকার।", href: "/podcast" },
  { icon: Headphones, number: "০৪", title: "অডিওবুক", description: "সুরা আল-ফাতিহা: সাতটি আয়াত। এখন সরাসরি শুনুন।", href: "/audiobooks" },
];

const featuredOrganizations = experiences.flatMap(({ organization, website, logo }) =>
  logo ? [{ organization, website, ...logo }] : [],
).slice(0, 8);

export const metadata: Metadata = createPageMetadata({
  locale: "bn",
  title: "Supply Chain & Logistics Expert, Author",
  siteNameFirst: true,
  description: "ড. ফেরদৌস সালেহীনের পেশাগত পরিচিতি, বই, বাংলা অডিওবুক, পডকাস্ট, গবেষণা ও কুরআনিক অনুধ্যানের অফিসিয়াল ডিজিটাল প্ল্যাটফর্ম।",
  banglaPath: "/",
  englishPath: "/en",
});


export default function HomePage() {
  return (
    <main id="top" className="bg-[#050505] text-[#f7f3e8]">
      <SiteHeader />

      <section className="relative min-h-[52rem] overflow-hidden border-b border-white/[0.06] lg:min-h-screen">
        <div className="grid-veil pointer-events-none absolute inset-0" />
        <div className="paper-noise pointer-events-none absolute inset-0 opacity-[0.025]" />
        <div className="animate-breathe pointer-events-none absolute -right-40 top-20 size-[36rem] rounded-full bg-[#b77e24]/10 blur-[120px]" />

        <div className="page-shell relative z-10 grid min-h-[52rem] items-center gap-12 pb-14 pt-32 lg:min-h-screen lg:grid-cols-[minmax(0,.9fr)_minmax(28rem,1.1fr)] lg:gap-14 lg:pb-10 lg:pt-28">
          <div className="relative z-10 max-w-3xl">
            <div className="eyebrow mb-7">সাপ্লাই চেইন ও লজিস্টিকস · শিক্ষা · গবেষণা</div>
            <h1 className="text-balance text-[clamp(3.5rem,7vw,6.4rem)] font-medium leading-[0.88] tracking-[-0.05em] text-white">
              ড. ফেরদৌস<br />
              <span className="gold-text">সালেহীন</span>
            </h1>
            <p className="mt-6 text-balance text-[clamp(1.7rem,3.6vw,3rem)] font-medium leading-tight tracking-[-0.035em] text-white">বই থেকে জীবনের পথে</p>
            <p className="mt-8 max-w-xl text-balance text-lg leading-8 text-[#aaa69c] md:text-xl">
              ড. ফেরদৌস সালেহীনের পেশাগত পরিচিতি, প্রকাশিত বই এবং নির্বাচিত পডকাস্টের অফিসিয়াল ডিজিটাল ঠিকানা।
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/books">বইটি সম্পর্কে জানুন <ArrowRight className="size-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/podcast"><Play className="size-4 fill-current" /> পডকাস্ট দেখুন</Link>
              </Button>
            </div>
            <div className="mt-12 flex items-center gap-4 text-xs uppercase tracking-[0.18em] text-[#77746c]">
              <ArrowDown className="size-4 text-[#c7973b]" /> আরও আবিষ্কার করুন
            </div>
          </div>

          <div className="relative aspect-[3/2] w-full overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-[#121311] shadow-[0_32px_90px_rgba(0,0,0,.48)] lg:translate-y-4">
            <div className="absolute inset-0 z-10 bg-[linear-gradient(90deg,rgba(5,5,5,.2)_0%,transparent_34%),linear-gradient(0deg,rgba(5,5,5,.48)_0%,transparent_32%)]" />
            <Image
              src="/FSwithTheBook.webp"
              alt="হাতে সুরা আল-ফাতিহা বই নিয়ে ড. ফেরদৌস সালেহীন"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="object-cover object-center grayscale-[8%] contrast-[1.03]"
            />
            <div className="absolute bottom-5 right-5 z-20 hidden rounded-2xl border border-[#d6a642]/25 bg-black/55 px-5 py-4 backdrop-blur-lg sm:block">
              <span className="mb-1 block text-[0.6rem] uppercase tracking-[0.2em] text-[#aaa69c]">নির্বাচিত প্রকাশনা</span>
              <strong className="text-sm font-medium text-[#e8c573]">সুরা আল-ফাতিহা · সাতটি আয়াত</strong>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="border-b border-white/[0.06] bg-[#0a0a09]">
        <div className="page-shell grid gap-8 py-8 md:grid-cols-[auto_1fr_auto] md:items-center">
          <div className="flex items-center gap-4">
            <div className="relative size-14 overflow-hidden rounded-full border border-[#d6a642]/30">
              <Image src="/fsPhoto.webp" alt="ড. ফেরদৌস সালেহীনের প্রতিকৃতি" fill sizes="56px" className="object-cover" />
            </div>
            <div><strong className="block text-sm font-medium">ড. ফেরদৌস সালেহীন</strong><span className="text-xs text-[#858178]">পিএইচডি · এফসিআইএলটি</span></div>
          </div>
          <p className="max-w-2xl text-sm leading-6 text-[#99958c] md:border-l md:border-white/10 md:pl-8">
            সাপ্লাই চেইন ও লজিস্টিকস বিশেষজ্ঞ, শিক্ষাবিদ, গবেষক এবং ‘সুরা আল-ফাতিহা: সাতটি আয়াত’ বইয়ের লেখক।
          </p>
          <Link href="/about" className="group inline-flex items-center gap-2 text-sm text-[#d6a642]">পরিচিতি পড়ুন <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></Link>
        </div>
      </section>

      <section id="professional-journey" className="relative overflow-hidden border-b border-white/[0.06] py-24 md:py-32">
        <div className="pointer-events-none absolute -left-40 top-24 size-[28rem] rounded-full bg-[#d6a642]/[0.06] blur-[120px]" />
        <div className="page-shell relative">
          <div className="mb-14 grid gap-6 md:grid-cols-[1fr_.72fr] md:items-end">
            <div>
              <span className="eyebrow mb-5">পেশাগত পথচলা</span>
              <h2 className="section-title text-balance">শিল্পের নেতৃত্ব থেকে <span className="gold-text">শ্রেণিকক্ষ ও গবেষণায়</span></h2>
            </div>
            <p className="max-w-lg text-base leading-7 text-[#918d84] md:justify-self-end">এশিয়া ও উপসাগরীয় অঞ্চলে সাপ্লাই চেইন, লজিস্টিকস, কর্পোরেট রূপান্তর এবং উচ্চশিক্ষায় দুই দশকেরও বেশি অভিজ্ঞতা।</p>
          </div>

          <div className="grid overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#0c0c0b] lg:grid-cols-[.82fr_1.18fr]">
            <div className="relative min-h-[34rem] overflow-hidden bg-[#ecebea]">
              <Image
                src="/fsPhoto.webp"
                alt="ড. ফেরদৌস সালেহীন, পিএইচডি, এফসিআইএলটি"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-top"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/45 to-transparent p-7 pt-28">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#e8bd64]">বর্তমান নেতৃত্ব</span>
                <p className="mt-2 max-w-sm text-lg font-medium leading-snug text-white">মেরিটাইম লজিস্টিকস ও সাপ্লাই চেইন ম্যানেজমেন্ট বিভাগের প্রধান</p>
                <p className="mt-1 text-sm text-white/60">Sharjah Maritime Academy · সংযুক্ত আরব আমিরাত</p>
              </div>
            </div>

            <div className="flex flex-col justify-center border-t border-white/[0.08] p-7 md:p-12 lg:border-l lg:border-t-0">
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.13em] text-[#d6a642]"><GraduationCap className="size-4" /> শিক্ষা · শিল্প · গবেষণা</span>
              <h3 className="mt-5 text-balance text-3xl font-medium leading-tight text-white md:text-5xl">বাস্তব শিল্প-অভিজ্ঞতা ও একাডেমিক জ্ঞানের সংযোগ</h3>
              <p className="mt-6 text-base leading-8 text-[#aaa69c]">এফএমসিজি, রিটেইল, ইলেকট্রনিকস ও কৃষিভিত্তিক ব্যবসায় শীর্ষ নির্বাহী এবং জ্যেষ্ঠ নেতৃত্বের পর তিনি এখন মেরিটাইম লজিস্টিকস ও সাপ্লাই চেইন শিক্ষায় নেতৃত্ব দিচ্ছেন। পাঠদান, পাঠ্যক্রম উন্নয়ন, গবেষণা, সম্পাদকীয় দায়িত্ব এবং কর্পোরেট প্রশিক্ষণ মিলিয়ে তাঁর কাজ শিল্প ও শিক্ষার মধ্যে একটি কার্যকর সেতু তৈরি করেছে।</p>

              <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-3">
                {[
                  ["২০+", "বছরের অভিজ্ঞতা"],
                  ["৩৪+", "প্রকাশনা ও অধ্যায়"],
                  ["১০০+", "কর্পোরেট প্রশিক্ষণ"],
                ].map(([value, label]) => (
                  <div key={label} className="bg-[#10100f] px-4 py-5 text-center">
                    <strong className="gold-text block text-3xl font-semibold">{value}</strong>
                    <span className="mt-2 block text-xs leading-5 text-[#8e8a81]">{label}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild><Link href="/about">সম্পূর্ণ পরিচিতি <ArrowRight className="size-4" /></Link></Button>
                <Button asChild variant="outline"><a href={profile.linkedIn} target="_blank" rel="noreferrer"><Linkedin className="size-4" /> LinkedIn</a></Button>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <p className="mb-5 text-center text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#918d84]">নির্বাচিত প্রতিষ্ঠান ও সংস্থা</p>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
              {featuredOrganizations.map(({ organization, website, src, onDark }) => (
                <a
                  key={organization}
                  href={website}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${organization} ওয়েবসাইট`}
                  className={`relative h-20 overflow-hidden rounded-xl border p-3 transition hover:-translate-y-1 hover:border-[#d6a642]/45 ${onDark ? "border-white/10 bg-[#151515]" : "border-black/10 bg-[#f2efe8]"}`}
                >
                  <Image src={src} alt={`${organization} লোগো`} fill sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 150px" className="object-contain p-3" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="page-shell">
          <div className="mb-14 grid gap-6 md:grid-cols-[1fr_.7fr] md:items-end">
            <div><span className="eyebrow mb-5">অফিসিয়াল প্ল্যাটফর্ম</span><h2 className="section-title text-balance">পরিচিতি, বই ও <span className="gold-text">পডকাস্ট</span></h2></div>
            <p className="max-w-lg text-base leading-7 text-[#918d84] md:justify-self-end">যাচাইকৃত পেশাগত তথ্য, প্রকাশিত বই এবং নির্বাচিত পূর্ণাঙ্গ আলোচনা এক জায়গায়।</p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] md:grid-cols-2 lg:grid-cols-4">
            {exploreItems.map(({ icon: Icon, number, title, description, href }) => (
              <Link key={title} href={href} className="group relative min-h-60 overflow-hidden bg-[#0c0c0b] p-7 transition duration-300 hover:bg-[#12100c] md:p-8">
                <Icon className="absolute -bottom-8 -right-5 size-32 rotate-[-9deg] text-[#d6a642] opacity-[0.035] transition duration-500 group-hover:rotate-0 group-hover:opacity-[0.09]" />
                <div className="flex items-start justify-between"><span className="text-[0.65rem] tracking-[0.2em] text-[#918d84]">{number}</span><ArrowRight className="size-4 text-[#77736a] transition group-hover:translate-x-1 group-hover:text-[#d6a642]" /></div>
                <div className="mt-14"><div className="mb-4 grid size-11 place-items-center rounded-xl border border-[#d6a642]/20 bg-[#d6a642]/[0.06]"><Icon className="size-5 text-[#d6a642]" /></div><h3 className="text-2xl font-medium text-white">{title}</h3><p className="mt-2 max-w-xs text-sm leading-6 text-[#88847b]">{description}</p></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="book" className="relative overflow-hidden border-y border-white/[0.06] bg-[#090908]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_58%,rgba(214,166,66,.09),transparent_37%)]" />
        <ContainerScroll
          titleComponent={
            <div>
              <span className="eyebrow mb-5">প্রথম প্রকাশনা</span>
              <h2 className="mx-auto max-w-4xl text-balance text-[clamp(2.6rem,6vw,5.8rem)] font-medium leading-[.92] tracking-[-.045em]">সাতটি আয়াত।<br /><span className="gold-text">এক জীবনের প্রতিফলন।</span></h2>
              <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-[#928e84]">সুরা আল-ফাতিহাকে শুধু পাঠ নয়, জীবন, ইবাদত, হেদায়াত ও পরকালের আলোকে নতুন করে দেখার আমন্ত্রণ।</p>
            </div>
          }
        >
          <div className="grid h-full md:grid-cols-[.9fr_1.1fr]">
            <div className="relative min-h-56 overflow-hidden bg-[radial-gradient(circle_at_center,rgba(214,166,66,.14),transparent_60%)]">
              <Image src="/bookImage.webp" alt="সুরা আল-ফাতিহা: সাতটি আয়াত বইয়ের প্রচ্ছদ" fill sizes="(max-width: 768px) 100vw, 40vw" className="object-contain p-8 drop-shadow-[0_28px_35px_rgba(0,0,0,.65)] md:p-12" />
            </div>
            <div className="flex flex-col justify-center border-t border-white/10 p-7 md:border-l md:border-t-0 md:p-12">
              <span className="text-xs font-semibold tracking-[0.12em] text-[#d6a642]">তাফসির ও জীবনের প্রতিফলন</span>
              <h3 className="mt-4 text-balance text-3xl font-medium leading-tight text-white md:text-5xl">সুরা আল-ফাতিহা<br />সাতটি আয়াত</h3>
              <p className="mt-5 max-w-lg text-sm leading-7 text-[#aaa69c] md:text-base">যে সাতটি আয়াত আমাদের প্রতিটি সালাতে ফিরে আসে, তার অর্থ, শিক্ষা এবং জীবন বদলে দেওয়ার শক্তিকে সহজ ভাষায় অনুধাবনের প্রচেষ্টা।</p>
              <div className="mt-6 flex flex-wrap gap-2 text-xs text-[#aaa69c]">
                {["জীবন", "ইবাদত", "হেদায়াত", "পরকাল"].map((item) => <span key={item} className="rounded-full border border-white/10 px-3 py-1.5">{item}</span>)}
              </div>
              <div id="order" className="mt-8"><Button asChild><Link href={bookPurchaseUrl} target="_blank" rel="noreferrer">রকমারি থেকে কিনুন <ArrowRight className="size-4" /></Link></Button></div>
            </div>
          </div>
        </ContainerScroll>
      </section>

      <section id="linkedin-highlights" className="relative overflow-hidden border-b border-white/[0.06] bg-[#0a0a09] py-24 md:py-32">
        <div className="pointer-events-none absolute -right-32 top-20 size-96 rounded-full bg-[#0a66c2]/[0.06] blur-[110px]" />
        <div className="page-shell relative">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="eyebrow mb-5">LinkedIn থেকে নির্বাচিত</span>
              <h2 className="section-title text-balance">সাম্প্রতিক ভাবনা ও <span className="gold-text">পেশাগত অন্তর্দৃষ্টি</span></h2>
            </div>
            <a href={linkedInActivityUrl} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 text-sm text-[#d6a642]">
              সব পোস্ট দেখুন <ExternalLink className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>

          <div className="grid gap-px overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.08] md:grid-cols-2">
            {linkedInPosts.map((post, index) => (
              <a
                key={post.href}
                href={post.href}
                target="_blank"
                rel="noreferrer"
                className="group relative flex min-h-80 flex-col overflow-hidden bg-[#0d0d0c] p-7 transition duration-300 hover:bg-[#12110e] md:p-9"
              >
                <Linkedin className="absolute -bottom-10 -right-8 size-44 text-[#0a66c2] opacity-[0.035] transition duration-500 group-hover:-rotate-3 group-hover:opacity-[0.09]" aria-hidden="true" />
                <div className="relative flex items-center justify-between gap-4">
                  <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.1em] text-[#d6a642]"><Linkedin className="size-4 text-[#4c9fe8]" />{post.category}</span>
                  <span className="text-xs text-[#918d84]">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="relative mt-10 max-w-xl text-balance text-2xl font-medium leading-tight text-white md:text-3xl">{post.title}</h3>
                <p className="relative mt-5 max-w-xl text-sm leading-7 text-[#969289]">{post.summary}</p>
                <span className="relative mt-auto inline-flex items-center gap-2 pt-8 text-sm text-[#d6a642]">LinkedIn-এ পড়ুন <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="podcast" className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute -left-32 top-32 size-96 rounded-full bg-[#d6a642]/[0.05] blur-[100px]" />
        <div className="page-shell relative">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div><span className="eyebrow mb-5">কণ্ঠে দীর্ঘ আলাপ</span><h2 className="section-title">নির্বাচিত <span className="gold-text">পডকাস্ট</span></h2></div>
            <Link href="/podcast" className="group inline-flex items-center gap-2 text-sm text-[#d6a642]">সব পর্ব দেখুন <ArrowRight className="size-4 transition group-hover:translate-x-1" /></Link>
          </div>
          <article className="overflow-hidden rounded-3xl border border-white/10 bg-[#0d0d0c] p-2 sm:p-3">
            <YouTubeEmbed videoId={podcastEpisodes[0].videoId} title={podcastEpisodes[0].titleBn} className="rounded-[1.15rem]" />
            <div className="flex flex-col gap-4 px-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
              <span className="text-xs tracking-[0.15em] text-[#d6a642]">নির্বাচিত পডকাস্ট</span>
              <span className="inline-flex items-center gap-2 text-sm text-[#969289]"><Play className="size-4 fill-current text-[#d6a642]" /> ভিডিওতে চাপুন · পপ-আপে দেখুন</span>
            </div>
          </article>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
