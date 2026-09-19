import { HeroEyebrow, HeroFrame, HeroTextLink, HeroTitle } from "@/components/heroes/hero-parts";
import type { SiteLocale } from "@/lib/locale";

interface NewsHeroProps { locale?: SiteLocale }

export function NewsHero({ locale = "bn" }: NewsHeroProps) {
  const isEn = locale === "en";

  return (
    <HeroFrame locale={locale} section={isEn ? "News & media" : "সংবাদ ও গণমাধ্যম"}>
      <div className="mt-10 grid items-center gap-12 lg:grid-cols-[.82fr_1.18fr]">
        <div>
          <HeroEyebrow>{isEn ? "Coverage & commentary" : "সংবাদ ও মতামত"}</HeroEyebrow>
          <HeroTitle locale={locale}>{isEn ? <>Ideas in <span className="gold-text">public.</span></> : <>জনপরিসরে <span className="gold-text">ভাবনা।</span></>}</HeroTitle>
          <p className="mt-7 max-w-xl text-base leading-8 text-[#aaa69c] md:text-lg">
            {isEn ? "Profiles, essays, and analysis on resilient supply chains, education, and the forces reshaping global trade." : "সহনশীল সাপ্লাই চেইন, শিক্ষা ও বৈশ্বিক বাণিজ্যের পরিবর্তন নিয়ে প্রোফাইল, প্রবন্ধ ও বিশ্লেষণ।"}
          </p>
        </div>

        <aside className="overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(145deg,#111713,#0d0d0c_65%)] p-7 sm:p-9">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#d6a642]">
            {isEn ? "Explore the archive" : "সংবাদভাণ্ডার দেখুন"}
          </span>
          <h2 className="mt-4 max-w-xl text-2xl font-medium leading-tight text-white md:text-3xl">
            {isEn ? "Coverage, commentary, and publication updates in one place." : "সংবাদ, মতামত ও প্রকাশনার খবর—সব এক জায়গায়।"}
          </h2>
          <div className="mt-8 grid gap-3 text-sm text-[#aaa69c] sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {(isEn
              ? ["Media profiles", "Expert commentary", "Publisher updates"]
              : ["মিডিয়া প্রোফাইল", "বিশেষজ্ঞ মতামত", "প্রকাশনার খবর"]
            ).map((label, index) => (
              <div key={label} className="border-l border-[#d6a642]/35 pl-3">
                <span className="block text-[0.65rem] font-semibold text-[#d6a642]">0{index + 1}</span>
                <span className="mt-1 block">{label}</span>
              </div>
            ))}
          </div>
          <div className="mt-9">
            <HeroTextLink href="#news-articles">{isEn ? "Browse all coverage" : "সব সংবাদ দেখুন"}</HeroTextLink>
          </div>
        </aside>
      </div>
    </HeroFrame>
  );
}
