import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import type { ReactNode } from "react";

import type { SiteLocale } from "@/lib/locale";
import { localizePath } from "@/lib/locale";
import { cn } from "@/lib/utils";

export function HeroBack({
  locale,
  section,
}: {
  locale: SiteLocale;
  section: string;
}) {
  return (
    <div className="flex items-center gap-3 text-xs font-medium text-[#88847b]">
      <Link
        href={localizePath("/", locale)}
        className="group inline-flex items-center gap-2 transition hover:text-[#d6a642]"
      >
        <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-1" />
        {locale === "en" ? "Back to home" : "হোমে ফিরুন"}
      </Link>
      <span className="text-white/15">/</span>
      <span className="text-[#6f6b64]">{section}</span>
    </div>
  );
}

export function HeroFrame({
  locale,
  section,
  children,
  home = false,
  className,
}: {
  locale: SiteLocale;
  section?: string;
  children: ReactNode;
  home?: boolean;
  className?: string;
}) {
  return (
    <section className={cn("relative overflow-hidden border-b border-white/[0.07] bg-[#050505] pt-28 text-[#f7f3e8] md:pt-32", className)}>
      <div className="grid-veil pointer-events-none absolute inset-0 opacity-55" />
      <div className="paper-noise pointer-events-none absolute inset-0 opacity-[0.025]" />
      <div className="hero-mesh-bg pointer-events-none absolute inset-0 opacity-70" />
      <div className="pointer-events-none absolute -right-40 top-8 size-[32rem] rounded-full bg-[#d6a642]/[0.055] blur-[120px]" />
      <div className="page-shell relative z-10 pb-16 md:pb-20">
        {!home && section ? <HeroBack locale={locale} section={section} /> : null}
        {children}
      </div>
    </section>
  );
}

export function HeroEyebrow({ children }: { children: ReactNode }) {
  return <span className="eyebrow mb-5">{children}</span>;
}

export function HeroTitle({ locale, children, className }: { locale: SiteLocale; children: ReactNode; className?: string }) {
  return (
    <h1 className={cn(
      "max-w-[11ch] text-balance font-medium text-white",
      locale === "en"
        ? "text-[clamp(3.25rem,6.5vw,6.4rem)] leading-[.92] tracking-[-0.055em]"
        : "text-[clamp(3rem,6vw,5.75rem)] leading-[1.02] tracking-[-0.04em]",
      className,
    )}>
      {children}
    </h1>
  );
}

export function HeroTextLink({
  href,
  children,
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  const classes = "group inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 bg-white/[0.025] px-5 text-sm font-semibold text-white transition hover:border-[#d6a642]/60 hover:bg-[#d6a642]/10";

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={classes}>
        {children}
        <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
      <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </Link>
  );
}
