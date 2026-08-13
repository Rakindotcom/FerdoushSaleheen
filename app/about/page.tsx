import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  BookOpen,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  ExternalLink,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Microscope,
  ShieldCheck,
} from "lucide-react";

import { InnerPage, SectionHeading } from "@/components/inner-page";
import { Button } from "@/components/ui/button";
import { educationBn, experiencesBn, profileBn } from "@/lib/profile-data-bn";

export const metadata: Metadata = {
  title: "পরিচিতি | ড. ফেরদৌস সালেহীন, PhD, FCILT",
  description:
    "ড. ফেরদৌস সালেহীনের ২০+ বছরের সাপ্লাই চেইন, লজিস্টিকস, একাডেমিক নেতৃত্ব, গবেষণা, প্রকাশনা ও কর্পোরেট অভিজ্ঞতার পূর্ণ পরিচিতি।",
  openGraph: {
    title: "ড. ফেরদৌস সালেহীন, পিএইচডি, এফসিআইএলটি",
    description: "মেরিটাইম লজিস্টিকস ও সাপ্লাই চেইন ম্যানেজমেন্ট বিভাগের প্রধান, শিক্ষাবিদ, গবেষক, লেখক ও শিল্পনেতা।",
    images: ["/fsPhoto.png"],
  },
  alternates: { canonical: "/about", languages: { "bn-BD": "/about", en: "/en/about" } },
};

export default function AboutPage() {
  return (
    <InnerPage
      eyebrow="শিক্ষাবিদ · সাপ্লাই চেইন নেতা · লেখক"
      title={<>ড. ফেরদৌস <span className="gold-text">সালেহীন</span></>}
      description="পিএইচডি, এফসিআইএলটি | শিল্পনেতা, শিক্ষাবিদ, গবেষক, পাঠ্যক্রম নির্মাতা, কর্পোরেট প্রশিক্ষক ও লেখক।"
    >
      <section className="py-20 md:py-28">
        <div className="page-shell grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:items-center">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] border border-white/10 bg-[#efefed]">
            <Image
              src="/fsPhoto.png"
              alt="ড. ফেরদৌস সালেহীন, পিএইচডি, এফসিআইএলটি"
              fill
              sizes="(max-width: 1024px) 90vw, 420px"
              className="object-cover object-top"
              priority
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/50 to-transparent p-7 pt-28">
              <span className="text-sm text-[#e7c36f]">পিএইচডি · এফসিআইএলটি</span>
              <p className="mt-1 text-xs text-white/65">সাপ্লাই চেইন ম্যানেজমেন্ট ও লজিস্টিকস</p>
            </div>
          </div>

          <div>
            <span className="eyebrow mb-5">পেশাগত পরিচিতি</span>
            <h2 className="text-balance text-4xl font-medium leading-[1.05] text-white md:text-6xl">{profileBn.name}</h2>
            <p className="mt-5 text-xl leading-snug text-[#d8b35c] md:text-2xl">{profileBn.currentTitle}</p>
            <p className="mt-2 text-sm text-[#88847b]">{profileBn.country}</p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <a href={`mailto:${profileBn.email}`} className="group flex min-h-14 items-center gap-3 rounded-xl border border-white/[0.08] bg-[#0d0d0c] px-4 text-sm text-[#aaa69c] transition hover:border-[#d6a642]/35 hover:text-white">
                <Mail className="size-4 text-[#d6a642]" /><span className="min-w-0 truncate">{profileBn.email}</span>
              </a>
              <a href={profileBn.linkedIn} target="_blank" rel="noreferrer" className="group flex min-h-14 items-center gap-3 rounded-xl border border-white/[0.08] bg-[#0d0d0c] px-4 text-sm text-[#aaa69c] transition hover:border-[#d6a642]/35 hover:text-white">
                <Linkedin className="size-4 text-[#d6a642]" /><span>LinkedIn পরিচিতি</span><ExternalLink className="ml-auto size-3.5" />
              </a>
              <div className="flex min-h-14 items-center gap-3 rounded-xl border border-white/[0.08] bg-[#0d0d0c] px-4 text-sm text-[#aaa69c] sm:col-span-2">
                <MapPin className="size-4 text-[#d6a642]" />{profileBn.contactLocation}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild><a href={`mailto:${profileBn.email}`}>ইমেইল করুন <ArrowRight className="size-4" /></a></Button>
              <Button asChild variant="outline"><Link href="/books"><BookOpen className="size-4" /> লেখকের বই</Link></Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/[0.07] bg-[#0a0a09]">
        <div className="page-shell grid grid-cols-2 gap-px bg-white/[0.07] sm:grid-cols-3 lg:grid-cols-5">
          {profileBn.stats.map((stat) => (
            <div key={stat.label} className="bg-[#0a0a09] px-5 py-8 text-center md:px-7 md:py-10">
              <strong className="gold-text block text-4xl font-semibold md:text-5xl">{stat.value}</strong>
              <span className="mt-3 block text-sm text-[#c0bcb2]">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="page-shell">
          <SectionHeading
            eyebrow="পরিচিতি"
            description="শিল্পখাতের রূপান্তর, একাডেমিক নেতৃত্ব, পাঠদান, গবেষণা, সম্পাদকীয় দায়িত্ব ও প্রকাশনাকে একটি সমন্বিত পেশাগত যাত্রায় তুলে ধরা হয়েছে।"
          >
            দুই দশকের <span className="gold-text">অভিজ্ঞতা ও নেতৃত্ব</span>
          </SectionHeading>
          <div className="grid gap-8 lg:grid-cols-[.42fr_1fr]">
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-2xl border border-[#d6a642]/20 bg-[#d6a642]/[0.055] p-6">
                <BriefcaseBusiness className="size-7 text-[#d6a642]" />
                <h3 className="mt-5 text-xl font-medium text-white">পেশাগত সারসংক্ষেপ</h3>
                <p className="mt-3 text-sm leading-7 text-[#8e8a81]">এশিয়া ও উপসাগরীয় অঞ্চলে সাপ্লাই চেইন ম্যানেজমেন্ট ও লজিস্টিকস, কর্পোরেট রূপান্তর, শিক্ষা এবং গবেষণায় সমন্বিত নেতৃত্ব।</p>
              </div>
            </aside>
            <div className="space-y-6">
              {profileBn.summary.map((paragraph, index) => (
                <div key={paragraph} className="grid gap-4 border-b border-white/[0.07] pb-6 last:border-0 sm:grid-cols-[2.5rem_1fr]">
                  <span className="pt-1 text-xs text-[#8f6929]">{String(index + 1).padStart(2, "0")}</span>
                  <p className="text-base leading-8 text-[#b0aca3] md:text-lg">{paragraph}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/[0.07] bg-[#0a0a09] py-24 md:py-32">
        <div className="page-shell">
          <SectionHeading eyebrow="অভিজ্ঞতা" description="পেশাগত পরিচিতিতে উল্লিখিত দায়িত্ব, নেতৃত্বের ভূমিকা, কর্মস্থল ও প্রাতিষ্ঠানিক প্রেক্ষাপট।">
            পেশাগত <span className="gold-text">অভিজ্ঞতা</span>
          </SectionHeading>

          <div className="relative space-y-5 before:absolute before:bottom-5 before:left-[1.45rem] before:top-5 before:w-px before:bg-gradient-to-b before:from-[#d6a642]/50 before:via-white/10 before:to-transparent md:before:left-[2.05rem]">
            {experiencesBn.map((experience, index) => (
              <article key={experience.organization} className="relative grid gap-5 pl-16 md:grid-cols-[4.25rem_1fr] md:pl-0">
                <div className="absolute left-0 top-6 z-10 grid size-12 place-items-center rounded-full border border-[#d6a642]/35 bg-[#11100d] text-xs font-semibold text-[#d6a642] md:relative md:left-auto md:top-auto md:size-[4.25rem]">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="rounded-2xl border border-white/[0.08] bg-[#0e0e0d] p-6 md:p-8">
                  <div className="flex flex-col gap-5 border-b border-white/[0.07] pb-5 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-2xl font-medium text-white">{experience.organization}</h3>
                      {experience.organizationDuration ? <p className="mt-1 text-xs text-[#77736b]">মোট কর্মকাল: {experience.organizationDuration}</p> : null}
                    </div>
                    {experience.logo ? (
                      <a
                        href={experience.website}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${experience.organization} ওয়েবসাইট দেখুন`}
                        className={`relative flex h-16 w-full shrink-0 items-center justify-center overflow-hidden rounded-xl border p-3 transition hover:border-[#d6a642]/45 sm:w-44 ${experience.logo.onDark ? "border-white/10 bg-[#151515]" : "border-black/10 bg-[#f4f1e9]"}`}
                      >
                        <Image
                          src={experience.logo.src}
                          alt={`${experience.organization} লোগো`}
                          fill
                          sizes="176px"
                          className="object-contain p-3"
                        />
                      </a>
                    ) : (
                      <a
                        href={experience.website}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${experience.organization} ওয়েবসাইট দেখুন`}
                        className="flex h-16 w-full shrink-0 items-center justify-center gap-2 rounded-xl border border-white/10 bg-[#151515] px-4 text-sm font-semibold tracking-[0.08em] text-[#d6a642] transition hover:border-[#d6a642]/45 sm:w-44"
                      >
                        <Building2 className="size-4" /> ISCTJ
                      </a>
                    )}
                  </div>

                  <div className="mt-6 space-y-6">
                    {experience.roles.map((role) => (
                      <div key={`${experience.organization}-${role.title}`} className="grid gap-2 md:grid-cols-[1fr_auto] md:gap-8">
                        <div>
                          <h4 className="text-lg font-medium leading-snug text-[#e7e3dc]">{role.title}</h4>
                          {role.location ? <p className="mt-2 flex items-center gap-2 text-xs text-[#77736b]"><MapPin className="size-3.5 text-[#a77a2f]" />{role.location}</p> : null}
                        </div>
                        <div className="text-left text-xs leading-5 text-[#9b978e] md:text-right">
                          <p>{role.period}</p>
                          {role.duration ? <p className="text-[#5f5c56]">{role.duration}</p> : null}
                        </div>
                      </div>
                    ))}
                  </div>

                  {experience.descriptions?.map((description) => <p key={description} className="mt-6 border-t border-white/[0.07] pt-5 text-sm leading-7 text-[#8e8a81]">{description}</p>)}

                  {experience.responsibilities ? (
                    <div className="mt-6 rounded-xl border border-[#d6a642]/15 bg-[#d6a642]/[0.04] p-5">
                      <span className="text-xs font-semibold uppercase tracking-[0.13em] text-[#b98a35]">কমিটি ও দায়িত্ব</span>
                      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                        {experience.responsibilities.map((responsibility) => <li key={responsibility} className="flex gap-2 text-sm text-[#aaa69c]"><CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[#d6a642]" />{responsibility}</li>)}
                      </ul>
                    </div>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="page-shell">
          <SectionHeading eyebrow="শিক্ষা" description="ব্যবসা, লজিস্টিকস, শিল্পব্যবস্থা, অপারেশনস ম্যানেজমেন্ট ও সাপ্লাই চেইনে উচ্চশিক্ষা এবং বিশেষায়ন।">
            শিক্ষা ও <span className="gold-text">বিশেষায়ন</span>
          </SectionHeading>
          <div className="grid gap-5 md:grid-cols-2">
            {educationBn.map((item, index) => (
              <article key={item.institution} className="group rounded-2xl border border-white/[0.08] bg-[#0d0d0c] p-7 transition hover:-translate-y-1 hover:border-[#d6a642]/35 md:p-8">
                <div className="flex items-start justify-between"><span className="grid size-12 place-items-center rounded-xl border border-[#d6a642]/20 bg-[#d6a642]/[0.07]"><GraduationCap className="size-5 text-[#d6a642]" /></span><span className="text-xs text-[#56534d]">০{index + 1}</span></div>
                <h3 className="mt-9 text-2xl font-medium text-white">{item.institution}</h3>
                <p className="mt-4 text-lg font-medium text-[#d8b35c]">{item.degree}</p>
                <p className="mt-2 text-sm leading-6 text-[#8e8a81]">{item.detail}</p>
                <div className="mt-6 flex flex-wrap items-center justify-between gap-2 border-t border-white/[0.07] pt-5 text-xs text-[#6f6b64]"><span>{item.period}</span><span>{item.country}</span></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/[0.07] bg-[#0a0a09] py-24 md:py-32">
        <div className="page-shell">
          <SectionHeading eyebrow="গবেষণা ও স্বীকৃতি" description="পেশাগত পরিচিতিতে উল্লিখিত গবেষণার ক্ষেত্র, পেশাগত সনদ ও নির্বাচিত প্রকাশনা।">
            গবেষণা, দক্ষতা ও <span className="gold-text">স্বীকৃতি</span>
          </SectionHeading>

          <div className="grid gap-5 lg:grid-cols-3">
            <ProfileList icon={<Microscope className="size-5 text-[#d6a642]" />} title="প্রধান দক্ষতা" items={profileBn.skills} />
            <ProfileList icon={<ShieldCheck className="size-5 text-[#d6a642]" />} title="সনদ ও স্বীকৃতি" items={profileBn.certifications} />
            <ProfileList icon={<Award className="size-5 text-[#d6a642]" />} title="গবেষণা পরিচিতি" items={["৩৪টির বেশি প্রকাশনা ও বইয়ের অধ্যায়", "Scopus ও Web of Science-এ অন্তর্ভুক্ত গবেষণা", "জার্নাল ও সম্মেলনের গবেষণাপত্র পর্যালোচক", "১০০টির বেশি কর্পোরেট প্রশিক্ষণ কার্যক্রম"]} />
          </div>

          <div className="mt-12 rounded-3xl border border-white/[0.08] bg-[#0d0d0c] p-7 md:p-10">
            <div className="flex items-center gap-4"><span className="grid size-12 place-items-center rounded-xl border border-[#d6a642]/20 bg-[#d6a642]/[0.07]"><BookOpen className="size-5 text-[#d6a642]" /></span><div><span className="text-xs text-[#a77a2f]">নির্বাচিত প্রকাশনা</span><h3 className="mt-1 text-2xl font-medium text-white">প্রোফাইলে উল্লিখিত প্রকাশনা</h3></div></div>
            <ol className="mt-8 grid gap-px overflow-hidden rounded-xl border border-white/[0.07] bg-white/[0.07] md:grid-cols-2">
              {profileBn.selectedPublications.map((publication, index) => <li key={publication} className="flex gap-4 bg-[#10100f] p-5 text-sm leading-6 text-[#aaa69c]"><span className="text-[#a77a2f]">০{index + 1}</span>{publication}</li>)}
            </ol>
          </div>
        </div>
      </section>

    </InnerPage>
  );
}

function ProfileList({ icon, title, items }: { icon: ReactNode; title: string; items: readonly string[] }) {
  return (
    <article className="rounded-2xl border border-white/[0.08] bg-[#0d0d0c] p-7">
      <div className="flex items-center gap-3">{icon}<h3 className="text-xl font-medium text-white">{title}</h3></div>
      <ul className="mt-7 space-y-4">
        {items.map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-[#969289]"><CheckCircle2 className="mt-1 size-4 shrink-0 text-[#9f762d]" />{item}</li>)}
      </ul>
    </article>
  );
}
