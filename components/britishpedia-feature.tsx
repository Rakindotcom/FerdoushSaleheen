import Image from "next/image";
import { ArrowUpRight, Award, BookOpen, Globe2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { SiteLocale } from "@/lib/locale";

const BRITISHPEDIA_INTERVIEW_URL =
  "https://www.middleeastbulletin.com/dr-ferdoush-saleheen-featured-in-britishpedia-encyclopedia";

const content = {
  en: {
    eyebrow: "International recognition",
    heading: (
      <>
        Featured in <span className="gold-text">Britishpedia</span>
      </>
    ),
    description:
      "An interview marking Dr. Ferdoush Saleheen’s inclusion in Britishpedia’s encyclopedia of successful people.",
    edition: "Successful People in Malaysia & Singapore",
    label: "Britishpedia interview",
    title: "A journey from industry leadership to academia, recognized internationally",
    body: "The feature reflects on more than two decades across supply chain leadership, higher education, and research—and the people and institutions that shaped that journey.",
    facts: [
      { icon: BookOpen, value: "Britishpedia", label: "Encyclopedia profile" },
      { icon: Globe2, value: "Malaysia & Singapore", label: "Featured edition" },
      { icon: Award, value: "20+ years", label: "Industry and academia" },
    ],
    cta: "Read the interview",
    source: "Published by Middle East Bulletin",
    imageAlt: "Dr. Ferdoush Saleheen featured in Britishpedia",
    britishpediaLogoAlt: "Britishpedia logo",
    publisherLogoAlt: "Middle East Bulletin logo",
  },
  bn: {
    eyebrow: "আন্তর্জাতিক স্বীকৃতি",
    heading: (
      <>
        ব্রিটিশপিডিয়ায় <span className="gold-text">বিশেষভাবে প্রকাশিত</span>
      </>
    ),
    description:
      "ব্রিটিশপিডিয়ার সফল ব্যক্তিদের বিশ্বকোষে ড. ফেরদৌস সালেহীনের অন্তর্ভুক্তি উপলক্ষে প্রকাশিত সাক্ষাৎকার।",
    edition: "Successful People in Malaysia & Singapore",
    label: "ব্রিটিশপিডিয়া সাক্ষাৎকার",
    title: "শিল্পখাতের নেতৃত্ব থেকে শিক্ষাজগৎ—আন্তর্জাতিকভাবে স্বীকৃত এক পথচলা",
    body: "সাপ্লাই চেইন নেতৃত্ব, উচ্চশিক্ষা ও গবেষণায় দুই দশকেরও বেশি সময়ের পথচলা এবং এই যাত্রায় ভূমিকা রাখা মানুষ ও প্রতিষ্ঠানগুলো উঠে এসেছে এই বিশেষ প্রকাশনায়।",
    facts: [
      { icon: BookOpen, value: "ব্রিটিশপিডিয়া", label: "বিশ্বকোষে প্রোফাইল" },
      { icon: Globe2, value: "মালয়েশিয়া ও সিঙ্গাপুর", label: "নির্বাচিত সংস্করণ" },
      { icon: Award, value: "২০+ বছর", label: "শিল্প ও শিক্ষাজগৎ" },
    ],
    cta: "সাক্ষাৎকারটি পড়ুন",
    source: "মিডল ইস্ট বুলেটিনে প্রকাশিত",
    imageAlt: "ব্রিটিশপিডিয়ায় প্রকাশিত ড. ফেরদৌস সালেহীন",
    britishpediaLogoAlt: "ব্রিটিশপিডিয়া লোগো",
    publisherLogoAlt: "মিডল ইস্ট বুলেটিন লোগো",
  },
} as const;

export function BritishpediaFeature({ locale }: { locale: SiteLocale }) {
  const copy = content[locale];

  return (
    <section
      id="britishpedia"
      aria-labelledby={`britishpedia-heading-${locale}`}
      className="relative overflow-hidden border-y border-white/[0.07] bg-[#0a0a09] py-24 md:py-32"
    >
      <div className="pointer-events-none absolute -right-40 top-1/4 size-[32rem] rounded-full bg-[#d6a642]/[0.055] blur-[130px]" />
      <div className="page-shell relative">
        <div className="mb-12 grid gap-5 md:grid-cols-[1fr_.7fr] md:items-end">
          <div>
            <span className="eyebrow mb-5">{copy.eyebrow}</span>
            <h2
              id={`britishpedia-heading-${locale}`}
              className="text-balance text-4xl font-medium leading-[1.02] tracking-[-.035em] text-white md:text-6xl"
            >
              {copy.heading}
            </h2>
          </div>
          <p className="max-w-lg text-sm leading-7 text-[#918d84] md:justify-self-end">{copy.description}</p>
        </div>

        <article className="grid overflow-hidden rounded-[2rem] border border-white/[0.09] bg-[#0d0d0c] shadow-[0_32px_90px_-55px_rgba(214,166,66,.42)] lg:grid-cols-[.82fr_1.18fr]">
          <div className="relative min-h-[28rem] overflow-hidden border-b border-white/[0.08] bg-[radial-gradient(circle_at_50%_18%,rgba(214,166,66,.2),transparent_46%),linear-gradient(145deg,#18140d,#070707_68%)] lg:min-h-[38rem] lg:border-r lg:border-b-0">
            <div className="absolute inset-x-0 top-6 z-10 flex items-center justify-between gap-4 px-6 md:px-8">
              <div className="relative size-24 shrink-0 overflow-hidden rounded-2xl border border-[#d6a642]/25 bg-white shadow-[0_16px_45px_-18px_rgba(214,166,66,.65)] md:size-28">
                <Image
                  src="/company-logos/britishpedia.webp"
                  alt={copy.britishpediaLogoAlt}
                  fill
                  sizes="112px"
                  className="object-contain p-1.5"
                />
              </div>
              <div className="max-w-56 text-right">
                <span className="text-[.62rem] font-semibold uppercase tracking-[.25em] text-[#d6a642]">Encyclopedia of Successful People</span>
                <p className="mt-3 text-xs leading-5 text-white/50">{copy.edition}</p>
              </div>
            </div>
            <div aria-hidden="true" className="absolute inset-x-0 top-36 text-center text-[clamp(3.8rem,8vw,7rem)] font-semibold leading-none tracking-[-.07em] text-white/[0.045]">
              BRITISH
              <br />
              PEDIA
            </div>
            <Image
              src="/fsPhoto-cutout.webp"
              alt={copy.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="z-[1] object-contain object-bottom px-4 pt-32"
            />
            <div className="absolute inset-x-0 bottom-0 z-[2] h-36 bg-gradient-to-t from-[#080807] to-transparent" />
          </div>

          <div className="flex flex-col justify-center p-7 md:p-10 lg:p-14">
            <span className="text-xs font-semibold uppercase tracking-[.18em] text-[#d6a642]">{copy.label}</span>
            <h3 className="mt-6 max-w-3xl text-balance text-3xl font-medium leading-tight text-white md:text-5xl">{copy.title}</h3>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#aaa69c]">{copy.body}</p>

            <div className="mt-9 grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-3">
              {copy.facts.map(({ icon: Icon, value, label }) => (
                <div key={label} className="bg-[#11110f] p-5">
                  <Icon className="size-5 text-[#d6a642]" aria-hidden="true" />
                  <strong className="mt-4 block text-sm font-medium text-white">{value}</strong>
                  <span className="mt-1 block text-xs leading-5 text-[#77736b]">{label}</span>
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <Button asChild>
                <a href={BRITISHPEDIA_INTERVIEW_URL} target="_blank" rel="noreferrer">
                  {copy.cta} <ArrowUpRight className="size-4" aria-hidden="true" />
                </a>
              </Button>
              <a
                href={BRITISHPEDIA_INTERVIEW_URL}
                target="_blank"
                rel="noreferrer"
                aria-label={copy.source}
                className="group flex w-fit items-center gap-3"
              >
                <span className="max-w-24 text-right text-[.65rem] leading-4 text-[#77736b] transition group-hover:text-[#aaa69c]">{copy.source}</span>
                <span className="relative block h-14 w-40 overflow-hidden rounded-xl border border-white/10 bg-white shadow-[0_12px_32px_-20px_rgba(255,255,255,.6)]">
                  <Image
                    src="/company-logos/middle-east-bulletin.webp"
                    alt={copy.publisherLogoAlt}
                    fill
                    sizes="160px"
                    className="object-contain"
                  />
                </span>
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
