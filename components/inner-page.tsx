import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import type { SiteLocale } from "@/lib/locale";
import { localizePath } from "@/lib/locale";

export function InnerPage({
  hero,
  eyebrow,
  title,
  description,
  children,
  locale = "bn",
}: {
  hero?: ReactNode;
  eyebrow?: string;
  title?: ReactNode;
  description?: string;
  children: ReactNode;
  locale?: SiteLocale;
}) {
  return (
    <main className="min-h-screen bg-[#050505] text-[#f7f3e8]">
      <SiteHeader />
      {hero ? (
        hero
      ) : (
        <section className="relative overflow-hidden border-b border-white/[0.08] bg-[#050505] pt-32 pb-16 lg:pt-36 lg:pb-20">
          <div className="grid-veil pointer-events-none absolute inset-0 opacity-80" />
          <div className="paper-noise pointer-events-none absolute inset-0 opacity-[0.03]" />
          <div className="hero-mesh-bg pointer-events-none absolute inset-0" />
          <div className="animate-breathe pointer-events-none absolute -right-28 top-8 size-[34rem] rounded-full bg-[#d6a642]/[0.08] blur-[130px]" />
          <div className="page-shell relative z-10">
            <Link
              href={localizePath("/", locale)}
              className="group mb-8 inline-flex items-center gap-2 text-xs font-medium text-[#88847b] transition hover:text-[#d6a642]"
            >
              <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-1" />
              {locale === "en" ? "Back to home" : "হোমে ফিরুন"}
            </Link>
            {eyebrow ? <span className="eyebrow mb-5 block">{eyebrow}</span> : null}
            {title ? (
              <h1 className="max-w-5xl text-balance text-[clamp(2.8rem,7vw,6.2rem)] font-medium leading-[.92] tracking-[-0.045em] text-white">
                {title}
              </h1>
            ) : null}
            {description ? (
              <p className="mt-6 max-w-2xl text-balance text-base leading-relaxed text-[#aaa69c] md:text-lg">
                {description}
              </p>
            ) : null}
          </div>
        </section>
      )}
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
