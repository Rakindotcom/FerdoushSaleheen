import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, ExternalLink, Facebook, GraduationCap, Linkedin, Mail, MapPin } from "lucide-react";

import { AboutHero } from "@/components/heroes/cohesive/about-hero";
import { InnerPage, SectionHeading } from "@/components/inner-page";
import { createBreadcrumbJsonLd, createProfilePageJsonLd, StructuredData } from "@/components/structured-data";
import { Button } from "@/components/ui/button";
import { education, experiences, profile } from "@/lib/profile-data";

export const metadata: Metadata = createPageMetadata({
  locale: "en",
  title: "Supply Chain & Logistics Expert | PhD, FCILT",
  siteNameFirst: true,
  description: "Explore the professional profile of Dr. Ferdoush Saleheen, a supply chain leader, academic, researcher, corporate trainer, editor, and author.",
  banglaPath: "/about",
  englishPath: "/en/about",
  image: "/fsPhoto.webp",
});

export default function EnglishAboutPage() {
  return (
    <InnerPage locale="en" hero={<AboutHero locale="en" />}>
      <StructuredData data={[
        createProfilePageJsonLd({ path: "/en/about", name: "Dr. Ferdoush Saleheen | Professional Profile", language: "en" }),
        createBreadcrumbJsonLd([{ name: "Home", path: "/en" }, { name: "About", path: "/en/about" }]),
      ]} />


      <section className="py-24 md:py-32"><div className="page-shell"><SectionHeading eyebrow="About" description="Industry transformation, academic leadership, teaching, research, editorial service, and publishing in one professional journey.">Two decades of <span className="gold-text">experience and leadership</span></SectionHeading><div className="space-y-6">{profile.summary.map((paragraph, index) => <div key={paragraph} className="grid gap-4 border-b border-white/[0.07] pb-6 sm:grid-cols-[2.5rem_1fr]"><span className="text-xs text-[#8f6929]">{String(index + 1).padStart(2, "0")}</span><p className="text-base leading-8 text-[#b0aca3] md:text-lg">{paragraph}</p></div>)}</div></div></section>

      <section className="border-y border-white/[0.07] bg-[#0a0a09] py-24 md:py-32"><div className="page-shell"><SectionHeading eyebrow="Experience" description="Selected academic, editorial, and corporate appointments from the professional profile.">Professional <span className="gold-text">experience</span></SectionHeading><div className="grid gap-5 lg:grid-cols-2">{experiences.map((experience) => <article key={experience.organization} className="rounded-2xl border border-white/[0.08] bg-[#0e0e0d] p-6"><div className="flex items-center justify-between gap-4"><h3 className="text-xl font-medium text-white">{experience.organization}</h3>{experience.logo ? <div className={`relative h-14 w-32 rounded-lg ${experience.logo.onDark ? "bg-[#151515]" : "bg-[#f4f1e9]"}`}><Image src={experience.logo.src} alt={`${experience.organization} logo`} fill sizes="128px" className="object-contain p-2" /></div> : null}</div><div className="mt-6 space-y-5">{experience.roles.map((role) => <div key={role.title}><h4 className="font-medium text-[#e7e3dc]">{role.title}</h4><p className="mt-1 text-xs text-[#77736b]">{role.period}{role.location ? ` · ${role.location}` : ""}</p></div>)}</div>{experience.descriptions?.map((description) => <p key={description} className="mt-5 border-t border-white/[0.07] pt-5 text-sm leading-7 text-[#8e8a81]">{description}</p>)}</article>)}</div></div></section>

      <section className="py-24 md:py-32"><div className="page-shell"><SectionHeading eyebrow="Education">Education and <span className="gold-text">specialization</span></SectionHeading><div className="grid gap-5 md:grid-cols-2">{education.map((item) => <article key={item.institution} className="rounded-2xl border border-white/[0.08] bg-[#0d0d0c] p-7"><GraduationCap className="size-6 text-[#d6a642]" /><h3 className="mt-7 text-2xl font-medium text-white">{item.institution}</h3><p className="mt-3 text-lg text-[#d8b35c]">{item.degree}</p><p className="mt-2 text-sm leading-6 text-[#8e8a81]">{item.detail}</p><p className="mt-5 border-t border-white/[0.07] pt-4 text-xs text-[#6f6b64]">{item.period} · {item.country}</p></article>)}</div><div className="mt-10 grid gap-3 md:grid-cols-2">{["34+ publications and book chapters", "100+ corporate training programs", "Scopus and Web of Science coverage", "Journal and conference paper reviewer"].map((item) => <div key={item} className="flex gap-3 rounded-xl border border-white/[0.08] bg-[#0d0d0c] p-5 text-sm text-[#aaa69c]"><CheckCircle2 className="size-4 shrink-0 text-[#d6a642]" />{item}</div>)}</div></div></section>
    </InnerPage>
  );
}
