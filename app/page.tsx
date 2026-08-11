import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  BookOpen,
  Download,
  Headphones,
  LibraryBig,
  Mic2,
  Play,
  Quote,
  Sparkles,
  Video,
} from "lucide-react";

import { AudioPlayer } from "@/components/audio-player";
import { NewsletterForm } from "@/components/newsletter-form";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

const exploreItems = [
  { icon: BookOpen, number: "০১", title: "বই", description: "প্রকাশিত ও আগামীর বই—একটি সমৃদ্ধ পাঠভুবন।", href: "/books" },
  { icon: Mic2, number: "০২", title: "পডকাস্ট", description: "বিশ্বাস, জীবন ও সময়ের প্রশ্ন নিয়ে গভীর আলাপ।", href: "/podcast" },
  { icon: Headphones, number: "০৩", title: "অডিওবুক", description: "চলতে চলতে শুনুন নির্বাচিত অধ্যায় ও ভাবনা।", href: "/audiobooks" },
  { icon: LibraryBig, number: "০৪", title: "অনুধ্যান", description: "কুরআন, সালাত ও জীবনের আলোকে পাঠ ও প্রতিফলন।", href: "/reflections" },
  { icon: Video, number: "০৫", title: "ভিডিও", description: "লেকচার, সাক্ষাৎকার ও সংক্ষিপ্ত স্মরণিকা।", href: "/videos" },
  { icon: Download, number: "০৬", title: "রিসোর্স", description: "নির্বাচিত নোট, গাইড ও দাওয়াহ উপকরণ।", href: "/resources" },
];

const reflections = [
  { label: "কুরআনিক অনুধ্যান", title: "আলহামদুলিল্লাহ—কৃতজ্ঞতা যখন জীবন দেখার ভাষা", read: "৬ মিনিট পাঠ" },
  { label: "সালাত", title: "প্রতিদিনের কথোপকথন: কেন ফাতিহা বারবার ফিরে আসে", read: "৮ মিনিট পাঠ" },
  { label: "জীবন ও পরকাল", title: "হেদায়াত চাওয়া মানে কোন পথে হাঁটার অঙ্গীকার?", read: "৫ মিনিট পাঠ" },
];

export default function HomePage() {
  return (
    <main id="top" className="bg-[#050505] text-[#f7f3e8]">
      <SiteHeader />

      <section className="relative min-h-[52rem] overflow-hidden border-b border-white/[0.06] lg:min-h-screen">
        <div className="grid-veil pointer-events-none absolute inset-0" />
        <div className="paper-noise pointer-events-none absolute inset-0 opacity-[0.025]" />
        <div className="animate-breathe pointer-events-none absolute -right-40 top-20 size-[36rem] rounded-full bg-[#b77e24]/10 blur-[120px]" />

        <div className="page-shell relative z-10 grid min-h-[52rem] items-end gap-10 pb-12 pt-32 lg:min-h-screen lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:pb-10 lg:pt-28">
          <div className="relative z-10 max-w-3xl lg:pb-10">
            <div className="eyebrow mb-7">জ্ঞান · অনুধ্যান · প্রতিফলন</div>
            <h1 className="text-balance text-[clamp(3.8rem,9vw,7.9rem)] font-medium leading-[0.83] tracking-[-0.055em] text-white">
              বই থেকে<br />
              <span className="gold-text">জীবনের পথে</span>
            </h1>
            <p className="mt-8 max-w-xl text-balance text-lg leading-8 text-[#aaa69c] md:text-xl">
              ড. ফেরদৌস সালেহীনের বই, কুরআনিক অনুধ্যান, পডকাস্ট, অডিওবুক ও দাওয়াহ কার্যক্রমের স্থায়ী ডিজিটাল ঠিকানা।
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/books">বইটি সম্পর্কে জানুন <ArrowRight className="size-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/audiobooks"><Play className="size-4 fill-current" /> শুনুন</Link>
              </Button>
            </div>
            <div className="mt-12 flex items-center gap-4 text-xs uppercase tracking-[0.18em] text-[#77746c]">
              <ArrowDown className="size-4 text-[#c7973b]" /> আরও আবিষ্কার করুন
            </div>
          </div>

          <div className="relative -mx-4 h-[30rem] self-end sm:h-[38rem] lg:absolute lg:inset-y-0 lg:right-0 lg:mx-0 lg:h-auto lg:w-[55%]">
            <div className="absolute inset-0 z-10 bg-[linear-gradient(90deg,#050505_0%,transparent_34%),linear-gradient(0deg,#050505_0%,transparent_26%)] lg:bg-[linear-gradient(90deg,#050505_0%,transparent_40%),linear-gradient(0deg,#050505_0%,transparent_20%)]" />
            <Image
              src="/FSwithTheBook.png"
              alt="হাতে সুরা আল-ফাতিহা বই নিয়ে ড. ফেরদৌস সালেহীন"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover object-[62%_center] grayscale-[15%] contrast-[1.03]"
            />
            <div className="absolute bottom-10 right-5 z-20 hidden rounded-2xl border border-[#d6a642]/25 bg-black/45 px-5 py-4 backdrop-blur-lg sm:block lg:bottom-20 lg:right-12">
              <span className="mb-1 block text-[0.6rem] uppercase tracking-[0.2em] text-[#aaa69c]">Featured publication</span>
              <strong className="text-sm font-medium text-[#e8c573]">সুরা আল-ফাতিহা · সাতটি আয়াত</strong>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="border-b border-white/[0.06] bg-[#0a0a09]">
        <div className="page-shell grid gap-8 py-8 md:grid-cols-[auto_1fr_auto] md:items-center">
          <div className="flex items-center gap-4">
            <div className="relative size-14 overflow-hidden rounded-full border border-[#d6a642]/30">
              <Image src="/fsPhoto.png" alt="ড. ফেরদৌস সালেহীনের প্রতিকৃতি" fill sizes="56px" className="object-cover" />
            </div>
            <div><strong className="block text-sm font-medium">ড. ফেরদৌস সালেহীন</strong><span className="text-xs text-[#858178]">লেখক · চিন্তক · বক্তা</span></div>
          </div>
          <p className="max-w-2xl text-sm leading-6 text-[#99958c] md:border-l md:border-white/10 md:pl-8">
            কুরআনের বাণীকে দৈনন্দিন জীবনের বোধ ও অনুশীলনের সঙ্গে যুক্ত করার এক আন্তরিক প্রয়াস।
          </p>
          <Link href="/about" className="group inline-flex items-center gap-2 text-sm text-[#d6a642]">পরিচিতি পড়ুন <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></Link>
        </div>
      </section>

      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="page-shell">
          <div className="mb-14 grid gap-6 md:grid-cols-[1fr_.7fr] md:items-end">
            <div><span className="eyebrow mb-5">একটি সংযুক্ত জ্ঞানভুবন</span><h2 className="section-title text-balance">পড়ুন, শুনুন, দেখুন—<span className="gold-text">নিজের গতিতে</span></h2></div>
            <p className="max-w-lg text-base leading-7 text-[#918d84] md:justify-self-end">প্রতিটি মাধ্যম পরস্পরের সঙ্গে যুক্ত—একটি ভাবনা থেকে বই, অডিও, ভিডিও কিংবা আরও গভীর পাঠে পৌঁছে যান।</p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] md:grid-cols-2 lg:grid-cols-3">
            {exploreItems.map(({ icon: Icon, number, title, description, href }) => (
              <Link key={title} href={href} className="group relative min-h-60 overflow-hidden bg-[#0c0c0b] p-7 transition duration-300 hover:bg-[#12100c] md:p-8">
                <Icon className="absolute -bottom-8 -right-5 size-32 rotate-[-9deg] text-[#d6a642] opacity-[0.035] transition duration-500 group-hover:rotate-0 group-hover:opacity-[0.09]" />
                <div className="flex items-start justify-between"><span className="text-[0.65rem] tracking-[0.2em] text-[#68655f]">{number}</span><ArrowRight className="size-4 text-[#77736a] transition group-hover:translate-x-1 group-hover:text-[#d6a642]" /></div>
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
              <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-[#928e84]">সুরা আল-ফাতিহাকে শুধু পাঠ নয়—জীবন, ইবাদত, হেদায়াত ও পরকালের আলোকে নতুন করে দেখার আমন্ত্রণ।</p>
            </div>
          }
        >
          <div className="grid h-full md:grid-cols-[.9fr_1.1fr]">
            <div className="relative min-h-56 overflow-hidden bg-[radial-gradient(circle_at_center,rgba(214,166,66,.14),transparent_60%)]">
              <Image src="/bookImage.png" alt="সুরা আল-ফাতিহা: সাতটি আয়াত বইয়ের প্রচ্ছদ" fill sizes="(max-width: 768px) 100vw, 40vw" className="object-contain p-8 drop-shadow-[0_28px_35px_rgba(0,0,0,.65)] md:p-12" />
            </div>
            <div className="flex flex-col justify-center border-t border-white/10 p-7 md:border-l md:border-t-0 md:p-12">
              <span className="text-xs font-semibold tracking-[0.12em] text-[#d6a642]">তাফসির ও জীবনের প্রতিফলন</span>
              <h3 className="mt-4 text-balance text-3xl font-medium leading-tight text-white md:text-5xl">সুরা আল-ফাতিহা<br />সাতটি আয়াত</h3>
              <p className="mt-5 max-w-lg text-sm leading-7 text-[#aaa69c] md:text-base">যে সাতটি আয়াত আমাদের প্রতিটি সালাতে ফিরে আসে—তার অর্থ, শিক্ষা এবং জীবন বদলে দেওয়ার শক্তিকে সহজ ভাষায় অনুধাবনের প্রচেষ্টা।</p>
              <div className="mt-6 flex flex-wrap gap-2 text-xs text-[#aaa69c]">
                {["জীবন", "ইবাদত", "হেদায়াত", "পরকাল"].map((item) => <span key={item} className="rounded-full border border-white/10 px-3 py-1.5">{item}</span>)}
              </div>
              <div id="order" className="mt-8 flex flex-wrap gap-3"><Button asChild><Link href="/books#order">বইটি অর্ডার করুন <ArrowRight className="size-4" /></Link></Button><Button asChild variant="outline"><Link href="/audiobooks"><Headphones className="size-4" /> অডিওবুক</Link></Button></div>
            </div>
          </div>
        </ContainerScroll>
      </section>

      <section id="podcast" className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute -left-32 top-32 size-96 rounded-full bg-[#d6a642]/[0.05] blur-[100px]" />
        <div className="page-shell relative">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div><span className="eyebrow mb-5">কণ্ঠে দীর্ঘ আলাপ</span><h2 className="section-title">নির্বাচিত <span className="gold-text">পডকাস্ট</span></h2></div>
            <Link href="/podcast" className="group inline-flex items-center gap-2 text-sm text-[#d6a642]">সব পর্ব দেখুন <ArrowRight className="size-4 transition group-hover:translate-x-1" /></Link>
          </div>
          <article className="grid overflow-hidden rounded-3xl border border-white/10 bg-[#0d0d0c] lg:grid-cols-[1.1fr_.9fr]">
            <div className="relative min-h-[25rem] overflow-hidden lg:min-h-[34rem]">
              <Image src="/FSwithTheBook.png" alt="পডকাস্ট আলোচনায় ড. ফেরদৌস সালেহীন" fill sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover object-[62%_center] opacity-70 grayscale-[35%] transition duration-700 hover:scale-[1.03]" />
              <div className="absolute inset-0 bg-[linear-gradient(0deg,#0d0d0c,transparent_65%)]" />
              <button type="button" aria-label="পডকাস্ট চালু করুন" className="absolute left-7 top-7 grid size-16 place-items-center rounded-full border border-[#e5bb60]/35 bg-black/40 text-[#e5bb60] backdrop-blur-lg transition hover:scale-105 hover:bg-[#d6a642] hover:text-black"><Play className="ml-1 size-5 fill-current" /></button>
            </div>
            <div className="flex flex-col justify-center p-7 md:p-12">
              <div className="mb-6 flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.16em] text-[#8f8b82]"><span className="text-[#d6a642]">বিশেষ পর্ব</span><span className="size-1 rounded-full bg-[#5e5b55]" /><span>৪২ মিনিট</span></div>
              <h3 className="text-balance text-3xl font-medium leading-tight text-white md:text-5xl">ফাতিহা: যে সংলাপ প্রতিদিন আমাদের ভেতর বদলায়</h3>
              <p className="mt-5 text-base leading-7 text-[#969289]">সালাতে ফিরে আসা সাতটি আয়াত কীভাবে আমাদের কৃতজ্ঞতা, নির্ভরতা ও পথচলার মানচিত্র গড়ে দেয়—তা নিয়ে মন্থর, গভীর এক আলোচনা।</p>
              <Button asChild variant="outline" className="mt-8 w-fit"><Link href="/podcast"><Play className="size-4 fill-current" /> পর্বটি শুনুন</Link></Button>
            </div>
          </article>
        </div>
      </section>

      <section id="audiobook" className="border-y border-white/[0.06] bg-[#0a0a09] py-24 md:py-32">
        <div className="page-shell grid gap-14 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div>
            <span className="eyebrow mb-5">পাঠ এখন কণ্ঠে</span>
            <h2 className="section-title">অডিওবুক—<br /><span className="gold-text">যেখানেই থাকুন</span></h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-[#969289]">অধ্যায় ধরে শুনুন, থামুন, আবার ঠিক সেখান থেকেই শুরু করুন। বইয়ের ভাবনাগুলোকে সঙ্গে রাখুন প্রতিদিনের যাত্রায়।</p>
            <div className="mt-8 flex gap-8"><div><strong className="block text-2xl font-medium text-white">১২</strong><span className="text-xs text-[#827e75]">অধ্যায়</span></div><div><strong className="block text-2xl font-medium text-white">৩ঘ ২৪মি</strong><span className="text-xs text-[#827e75]">মোট সময়</span></div><div><strong className="block text-2xl font-medium text-white">ফ্রি</strong><span className="text-xs text-[#827e75]">নির্বাচিত অধ্যায়</span></div></div>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#11100e] p-5 shadow-[0_0_70px_-35px_rgba(214,166,66,.3)] sm:p-7">
            <div className="absolute -right-16 -top-20 size-64 rounded-full bg-[#d6a642]/10 blur-[80px]" />
            <div className="relative mb-5 flex items-center gap-4">
              <div className="relative h-24 w-16 shrink-0 overflow-hidden rounded-lg border border-[#d6a642]/25"><Image src="/bookImage.png" alt="অডিওবুক প্রচ্ছদ" fill sizes="64px" className="object-cover" /></div>
              <div><span className="text-[0.65rem] uppercase tracking-[0.17em] text-[#d6a642]">সুরা আল-ফাতিহা</span><h3 className="mt-1 text-xl font-medium text-white">তাফসির ও জীবনের প্রতিফলন</h3><p className="mt-1 text-xs text-[#817d74]">কণ্ঠে: ড. ফেরদৌস সালেহীন</p></div>
            </div>
            <AudioPlayer />
          </div>
        </div>
      </section>

      <section id="reflections" className="py-24 md:py-32">
        <div className="page-shell">
          <div className="mb-14 grid gap-6 md:grid-cols-[1fr_.65fr] md:items-end">
            <div><span className="eyebrow mb-5">পাঠ ও অনুধ্যান</span><h2 className="section-title">শব্দের ভেতর <span className="gold-text">থামার জায়গা</span></h2></div>
            <p className="text-base leading-7 text-[#918d84]">কুরআন, সালাত, বিশ্বাস ও জীবনের নানা প্রশ্নে নির্বাচিত লেখা। ধীরে পড়ার, ভাবার এবং ফিরে দেখার জন্য।</p>
          </div>
          <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
            {reflections.map((item, index) => (
              <article key={item.title} className="group grid gap-5 py-8 md:grid-cols-[5rem_1fr_auto] md:items-center">
                <span className="text-sm tabular-nums text-[#58554f]">০{index + 1}</span>
                <div><span className="mb-2 block text-xs font-medium text-[#bd8e35]">{item.label}</span><h3 className="max-w-3xl text-balance text-2xl font-medium leading-tight text-[#e9e6df] transition group-hover:text-white md:text-3xl">{item.title}</h3></div>
                <div className="flex items-center gap-5"><span className="text-xs text-[#77736b]">{item.read}</span><Link href="/reflections" aria-label={`${item.title} পড়ুন`} className="grid size-11 place-items-center rounded-full border border-white/10 transition group-hover:border-[#d6a642]/50 group-hover:text-[#d6a642]"><ArrowRight className="size-4" /></Link></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="videos" className="border-y border-white/[0.06] bg-[#090908] py-24 md:py-32">
        <div className="page-shell">
          <div className="mb-12 flex items-end justify-between gap-6"><div><span className="eyebrow mb-5">দেখুন ও জানুন</span><h2 className="section-title">সাম্প্রতিক <span className="gold-text">ভিডিও</span></h2></div><Link href="/videos" className="hidden items-center gap-2 text-sm text-[#d6a642] sm:inline-flex">সব ভিডিও <ArrowRight className="size-4" /></Link></div>
          <div className="grid gap-5 md:grid-cols-3">
            {["সুরা আল-ফাতিহা কেন জীবনের মানচিত্র", "সালাতে মনোযোগ ফিরে পাওয়ার তিনটি পথ", "কৃতজ্ঞতা: বিশ্বাস থেকে প্রতিদিনের অভ্যাস"].map((title, index) => (
              <article key={title} className="group overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0e0e0d]">
                <div className="relative aspect-video overflow-hidden">
                  <Image src={index === 1 ? "/fsPhoto.png" : "/FSwithTheBook.png"} alt="" fill sizes="(max-width: 768px) 100vw, 33vw" className={`object-cover opacity-60 grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0 ${index === 1 ? "object-top" : "object-[62%_center]"}`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <span className="absolute bottom-4 right-4 rounded-full bg-black/60 px-2.5 py-1 text-[0.65rem] text-white backdrop-blur">{["১২:৪৮", "০৮:২১", "১৫:০৪"][index]}</span>
                  <span className="absolute left-4 top-4 grid size-10 place-items-center rounded-full border border-white/20 bg-black/30 text-white backdrop-blur"><Play className="ml-0.5 size-3.5 fill-current" /></span>
                </div>
                <div className="p-6"><span className="text-[0.65rem] uppercase tracking-[0.15em] text-[#9f762d]">{["তাফসির", "সালাত", "জীবন"][index]}</span><h3 className="mt-3 text-xl font-medium leading-snug text-[#e5e2db]">{title}</h3></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about-detail" className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute left-1/2 top-1/2 h-px w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#d6a642]/20 to-transparent" />
        <div className="page-shell relative grid gap-8 md:grid-cols-[.8fr_1.2fr] md:items-center">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2rem] border border-white/10 bg-[#efefed]">
            <Image src="/fsPhoto.png" alt="ড. ফেরদৌস সালেহীন" fill sizes="384px" className="object-cover object-top" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-7 pt-24"><span className="text-sm text-[#e4bc65]">লেখক · চিন্তক · বক্তা</span></div>
          </div>
          <div className="md:pl-10">
            <span className="eyebrow mb-5">লেখকের কথা</span>
            <Quote className="mb-6 size-10 text-[#d6a642]/45" />
            <blockquote className="text-balance text-3xl font-medium leading-[1.35] text-[#eeebe4] md:text-5xl">“বইয়ের পাতায় একটি ভাবনার শুরু—জীবনে তার অর্থ খুঁজে পাওয়াই আমাদের প্রকৃত যাত্রা।”</blockquote>
            <p className="mt-7 max-w-xl text-base leading-7 text-[#918d84]">এই প্ল্যাটফর্মের লক্ষ্য শুধু তথ্য দেওয়া নয়; বরং পাঠ, শ্রবণ ও আলোচনার মধ্য দিয়ে কুরআনের শিক্ষাকে জীবনের সঙ্গে যুক্ত করার একটি বিশ্বস্ত পরিসর তৈরি করা।</p>
            <Button asChild variant="outline" className="mt-8"><Link href="/about">আরও জানুন <ArrowRight className="size-4" /></Link></Button>
          </div>
        </div>
      </section>

      <section id="resources" className="border-y border-white/[0.06] bg-[#0c0b09] py-24">
        <div className="page-shell grid gap-10 md:grid-cols-[.85fr_1.15fr] md:items-center">
          <div><div className="mb-5 grid size-12 place-items-center rounded-xl border border-[#d6a642]/25 bg-[#d6a642]/10"><Sparkles className="size-5 text-[#d6a642]" /></div><h2 className="text-balance text-4xl font-medium leading-tight md:text-5xl">ফাতিহা অনুধ্যানের<br /><span className="gold-text">বিনামূল্যের সহায়ক</span></h2></div>
          <div className="rounded-2xl border border-white/10 bg-black/25 p-6 md:p-8"><span className="text-xs text-[#b48734]">PDF · ১৮ পৃষ্ঠা</span><h3 className="mt-3 text-2xl font-medium text-white">সাত আয়াতের রিফ্লেকশন জার্নাল</h3><p className="mt-3 text-sm leading-6 text-[#8f8b81]">প্রতিটি আয়াত নিয়ে থামুন, ভাবুন এবং নিজের উপলব্ধি লিখে রাখুন—ব্যক্তিগত পাঠচর্চা বা স্টাডি সার্কেলের জন্য।</p><Button asChild className="mt-6"><Link href="/resources"><Download className="size-4" /> রিসোর্স দেখুন</Link></Button></div>
        </div>
      </section>

      <section id="contact" className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute left-1/2 top-1/2 size-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d6a642]/[0.055] blur-[130px]" />
        <div className="page-shell relative rounded-[2rem] border border-[#d6a642]/20 bg-[#0d0c0a]/80 p-7 md:p-14">
          <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
            <div><span className="eyebrow mb-5">যুক্ত থাকুন</span><h2 className="text-balance text-4xl font-medium leading-[1.05] md:text-6xl">নতুন লেখা, অডিও ও আয়োজনের খবর <span className="gold-text">সবার আগে</span></h2></div>
            <div><p className="mb-6 max-w-lg text-sm leading-6 text-[#918d84]">নির্বাচিত কনটেন্ট ও গুরুত্বপূর্ণ আপডেট সরাসরি আপনার ইনবক্সে। অপ্রয়োজনীয় কোনো বার্তা নয়।</p><NewsletterForm /><p className="mt-3 text-[0.65rem] text-[#625f59]">সাবস্ক্রাইব করে আপনি আমাদের গোপনীয়তা নীতিতে সম্মতি দিচ্ছেন।</p></div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
