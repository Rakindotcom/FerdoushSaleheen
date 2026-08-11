import Link from "next/link";
import { CalendarDays, MessageCircle } from "lucide-react";

const exploreLinks = [
  ["বই", "/books"],
  ["পডকাস্ট", "/podcast"],
  ["অডিওবুক", "/audiobooks"],
  ["অনুধ্যান", "/reflections"],
  ["ভিডিও", "/videos"],
  ["রিসোর্স", "/resources"],
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/[0.07] bg-[#080807]">
      <div className="page-shell py-14">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link href="/" className="mb-5 flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-full border border-[#d6a642]/40 text-[#d6a642]">ফ</span>
              <strong className="font-medium">ড. ফেরদৌস সালেহীন</strong>
            </Link>
            <p className="max-w-sm text-sm leading-6 text-[#77736b]">বই, অনুধ্যান, পডকাস্ট, অডিওবুক ও দাওয়াহ উদ্যোগের অফিসিয়াল ডিজিটাল প্ল্যাটফর্ম।</p>
          </div>
          <div>
            <h3 className="mb-4 text-xs uppercase tracking-[0.15em] text-[#b58a37]">এক্সপ্লোর</h3>
            <div className="grid grid-cols-2 gap-3 text-sm text-[#87837a]">
              {exploreLinks.map(([label, href]) => <Link key={href} href={href} className="hover:text-white">{label}</Link>)}
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-xs uppercase tracking-[0.15em] text-[#b58a37]">যোগাযোগ</h3>
            <div className="space-y-3 text-sm text-[#87837a]">
              <Link href="/contact" className="flex items-center gap-2 hover:text-white"><MessageCircle className="size-4" /> সাধারণ যোগাযোগ</Link>
              <Link href="/events#speaking" className="flex items-center gap-2 hover:text-white"><CalendarDays className="size-4" /> বক্তব্যের আমন্ত্রণ</Link>
            </div>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-4 border-t border-white/[0.07] pt-6 text-xs text-[#5f5c56] sm:flex-row sm:items-center sm:justify-between">
          <span>© ২০২৬ ড. ফেরদৌস সালেহীন। সর্বস্বত্ব সংরক্ষিত।</span>
          <div className="flex gap-5"><Link href="/privacy">গোপনীয়তা</Link><Link href="/terms">শর্তাবলি</Link></div>
        </div>
      </div>
    </footer>
  );
}
