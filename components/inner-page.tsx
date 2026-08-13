import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import type { SiteLocale } from "@/lib/locale";
import { localizePath } from "@/lib/locale";

export function InnerPage({
  eyebrow,
  title,
  description,
  children,
  locale = "bn",
}: {
  eyebrow: string;
  title: ReactNode;
  description: string;
  children: ReactNode;
  locale?: SiteLocale;
}) {
  return (
    <main className="min-h-screen bg-[#050505] text-[#f7f3e8]">
      <SiteHeader />
      <section className="relative overflow-hidden border-b border-white/[0.07] pb-20 pt-36 md:pb-28 md:pt-44">
        <div className="grid-veil pointer-events-none absolute inset-0" />
        <div className="paper-noise pointer-events-none absolute inset-0 opacity-[0.025]" />
        <div className="pointer-events-none absolute -right-28 top-8 size-[30rem] rounded-full bg-[#d6a642]/[0.07] blur-[120px]" />
        <div className="page-shell relative">
          <Link href={localizePath("/", locale)} className="mb-10 inline-flex items-center gap-2 text-xs text-[#77736b] transition hover:text-[#d6a642]"><ArrowLeft className="size-3.5" /> {locale === "en" ? "Back to home" : "হোমে ফিরুন"}</Link>
          <span className="eyebrow mb-6">{eyebrow}</span>
          <h1 className="max-w-5xl text-balance text-[clamp(3.4rem,8vw,7.4rem)] font-medium leading-[.88] tracking-[-.05em] text-white">{title}</h1>
          <p className="mt-7 max-w-2xl text-balance text-base leading-8 text-[#99958c] md:text-lg">{description}</p>
        </div>
      </section>
      {children}
      <SiteFooter />
    </main>
  );
}

export function SectionHeading({ eyebrow, children, description }: { eyebrow: string; children: ReactNode; description?: string }) {
  return (
    <div className="mb-12 grid gap-5 md:grid-cols-[1fr_.7fr] md:items-end">
      <div><span className="eyebrow mb-5">{eyebrow}</span><h2 className="text-balance text-4xl font-medium leading-[1.02] tracking-[-.035em] text-white md:text-6xl">{children}</h2></div>
      {description ? <p className="max-w-lg text-sm leading-7 text-[#918d84] md:justify-self-end">{description}</p> : null}
    </div>
  );
}
