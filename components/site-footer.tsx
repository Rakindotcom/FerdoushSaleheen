"use client";

import Link from "next/link";
import { Linkedin, Mail } from "lucide-react";
import { usePathname } from "next/navigation";
import { profile } from "@/lib/profile-data";
import { isEnglishPath, localizePath } from "@/lib/locale";

const navigation = {
  bn: [["হোমপেজ", "/"], ["পরিচিতি", "/about"], ["বই", "/books"], ["পডকাস্ট", "/podcast"], ["অডিওবুক", "/audiobooks"]],
  en: [["Home", "/"], ["About", "/about"], ["Books", "/books"], ["Podcast", "/podcast"], ["Audiobook", "/audiobooks"]],
} as const;

export function SiteFooter() {
  const pathname = usePathname();
  const locale = isEnglishPath(pathname) ? "en" : "bn";
  const exploreLinks = navigation[locale].map(([label, path]) => [label, localizePath(path, locale)] as const);

  return (
    <footer className="border-t border-white/[0.07] bg-[#080807]">
      <div className="page-shell py-14">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link href={localizePath("/", locale)} className="mb-5 flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-full border border-[#d6a642]/40 text-[#d6a642]">ফ</span>
              <strong className="font-medium">{locale === "en" ? "Dr. Ferdoush Saleheen" : "ড. ফেরদৌস সালেহীন"}</strong>
            </Link>
            <p className="max-w-sm text-sm leading-6 text-[#77736b]">{locale === "en" ? "The official digital platform for his professional profile, published books, audiobook, and selected podcasts." : "পেশাগত পরিচিতি, প্রকাশিত বই এবং নির্বাচিত পডকাস্টের অফিসিয়াল ডিজিটাল প্ল্যাটফর্ম।"}</p>
          </div>
          <div>
            <h3 className="mb-4 text-xs uppercase tracking-[0.15em] text-[#b58a37]">{locale === "en" ? "Explore" : "ঘুরে দেখুন"}</h3>
            <div className="grid grid-cols-2 gap-3 text-sm text-[#87837a]">
              {exploreLinks.map(([label, href]) => <Link key={href} href={href} className="hover:text-white">{label}</Link>)}
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-xs uppercase tracking-[0.15em] text-[#b58a37]">{locale === "en" ? "Contact" : "যোগাযোগ"}</h3>
            <div className="space-y-3 text-sm text-[#87837a]">
              <a href={`mailto:${profile.email}`} className="flex items-center gap-2 hover:text-white"><Mail className="size-4" /> {locale === "en" ? "Email" : "ইমেইল"}</a>
              <a href={profile.linkedIn} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white"><Linkedin className="size-4" /> LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-4 border-t border-white/[0.07] pt-6 text-xs text-[#918d84] sm:flex-row sm:items-center sm:justify-between">
          <span>{locale === "en" ? "© 2026 Dr. Ferdoush Saleheen. All rights reserved." : "© ২০২৬ ড. ফেরদৌস সালেহীন। সর্বস্বত্ব সংরক্ষিত।"}</span>
          <div className="flex gap-5"><Link href={localizePath("/privacy", locale)}>{locale === "en" ? "Privacy" : "গোপনীয়তা"}</Link><Link href={localizePath("/terms", locale)}>{locale === "en" ? "Terms" : "শর্তাবলি"}</Link></div>
        </div>
      </div>
    </footer>
  );
}
