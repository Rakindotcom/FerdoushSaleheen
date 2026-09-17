import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BookOpenText, Boxes, Headphones, HeartHandshake, ShoppingBag } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { SiteLocale } from "@/lib/locale";
import { localizePath } from "@/lib/locale";
import { bookPurchaseUrl } from "@/lib/podcast-data";
import { sustainableSupplyChainBook } from "@/lib/publication-data";

const copy = {
  en: {
    academicEyebrow: "Supply Chain · Academic publication",
    academicHeading: <>Industry knowledge for a <span className="text-[#83ccdf]">resilient future</span></>,
    academicIntro: "A professional and academic publication grounded in industry practice. This work is presented separately from Dr. Saleheen’s Dawah writing.",
    academicDescription: "Sustainable Supply Chain Management brings together industry-driven perspectives on building supply chains that are more resilient, responsible, and prepared for change.",
    editedBy: "Edited by",
    publisher: "Publisher",
    isbn: "ISBN",
    availability: "Choose an Amazon store",
    openStore: "Open store",
    dawahEyebrow: "Dawah · Qur’anic reflection",
    dawahHeading: <>Seven verses. <span className="gold-text">A reflection for life.</span></>,
    dawahIntro: "A separate work of faith-centred reflection for Bangla readers, with its own audiobook and related conversations.",
    dawahDescription: "A readable reflection on the seven verses recited in every salah, viewed through gratitude, knowledge of the Lord, accountability, worship, and guidance.",
    author: "Author",
    language: "Language",
    bangla: "Bangla",
    format: "Format",
    hardcover: "Hardcover",
    buy: "Buy from Rokomari",
    listen: "Listen to audiobook",
    tags: ["Life", "Worship", "Al-Fatihah", "Guidance", "Hereafter"],
  },
  bn: {
    academicEyebrow: "সাপ্লাই চেইন · একাডেমিক প্রকাশনা",
    academicHeading: <>স্থিতিস্থাপক ভবিষ্যতের জন্য <span className="text-[#83ccdf]">শিল্পভিত্তিক জ্ঞান</span></>,
    academicIntro: "শিল্পের বাস্তব অভিজ্ঞতায় প্রতিষ্ঠিত একটি পেশাগত ও একাডেমিক প্রকাশনা। ড. সালেহীনের দাওয়াহর লেখা থেকে এই কাজটি স্বতন্ত্রভাবে উপস্থাপিত।",
    academicDescription: "Sustainable Supply Chain Management গ্রন্থে পরিবর্তনের জন্য প্রস্তুত, দায়িত্বশীল ও স্থিতিস্থাপক সাপ্লাই চেইন গড়ে তোলার শিল্প-অভিজ্ঞতাভিত্তিক দৃষ্টিভঙ্গি একত্র করা হয়েছে।",
    editedBy: "সম্পাদক",
    publisher: "প্রকাশক",
    isbn: "আইএসবিএন",
    availability: "Amazon স্টোর বেছে নিন",
    openStore: "স্টোর খুলুন",
    dawahEyebrow: "দাওয়াহ · কুরআনিক অনুধ্যান",
    dawahHeading: <>সাতটি আয়াত। <span className="gold-text">এক জীবনের প্রতিফলন।</span></>,
    dawahIntro: "বাংলাভাষী পাঠকের জন্য বিশ্বাসকেন্দ্রিক একটি স্বতন্ত্র অনুধ্যানগ্রন্থ; সঙ্গে রয়েছে নিজস্ব অডিওবুক ও সম্পর্কিত আলোচনা।",
    dawahDescription: "প্রতিদিনের সালাতে ফিরে আসা সাতটি আয়াত। কৃতজ্ঞতা, রবের পরিচয়, জবাবদিহি, ইবাদত ও হেদায়াতের আলোকে জীবনকে নতুন করে দেখার একটি সহজপাঠ্য অনুধ্যান।",
    author: "লেখক",
    language: "ভাষা",
    bangla: "বাংলা",
    format: "ফরম্যাট",
    hardcover: "হার্ডকভার",
    buy: "রকমারি থেকে কিনুন",
    listen: "অডিওবুক শুনুন",
    tags: ["জীবন", "ইবাদত", "আল-ফাতিহা", "হেদায়াত", "পরকাল"],
  },
} as const;

export function PublicationsCatalog({ locale }: { locale: SiteLocale }) {
  const text = copy[locale];

  return (
    <>
      <section id="supply-chain-publication" className="relative overflow-hidden border-b border-white/[0.06] py-24 md:py-32">
        <div className="pointer-events-none absolute -left-40 top-24 size-[30rem] rounded-full bg-[#4c9ab3]/[0.09] blur-[120px]" />
        <div className="page-shell relative">
          <div className="mb-12 grid gap-5 md:grid-cols-[1fr_.72fr] md:items-end">
            <div>
              <span className="mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#83ccdf]"><Boxes className="size-4" /> {text.academicEyebrow}</span>
              <h2 className="max-w-3xl text-balance text-4xl font-medium leading-[1.02] tracking-[-.035em] text-white md:text-6xl">{text.academicHeading}</h2>
            </div>
            <p className="max-w-lg text-sm leading-7 text-[#929791] md:justify-self-end">{text.academicIntro}</p>
          </div>

          <article className="grid overflow-hidden rounded-[2rem] border border-[#5aa3b9]/25 bg-[linear-gradient(145deg,#0e181c,#0b0d0e_62%)] lg:grid-cols-[.78fr_1.22fr]">
            <div className="relative min-h-[38rem] bg-[radial-gradient(circle_at_center,rgba(79,155,181,.18),transparent_62%)]">
              <Image src={sustainableSupplyChainBook.cover} alt={`Cover of ${sustainableSupplyChainBook.title}: ${sustainableSupplyChainBook.subtitle}`} fill priority sizes="(max-width: 1024px) 100vw, 40vw" className="object-contain p-9 drop-shadow-[0_32px_42px_rgba(0,0,0,.65)] md:p-14" />
            </div>
            <div className="flex flex-col justify-center border-t border-white/10 p-7 md:p-12 lg:border-l lg:border-t-0">
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.12em] text-[#83ccdf]"><BookOpenText className="size-4" /> {text.academicEyebrow}</span>
              <h3 className="mt-5 text-balance text-4xl font-medium leading-[1.03] text-white md:text-6xl">{sustainableSupplyChainBook.title}</h3>
              <p className="mt-4 max-w-xl text-lg font-medium leading-7 text-[#83ccdf]">{sustainableSupplyChainBook.subtitle}</p>
              <p className="mt-6 max-w-xl text-base leading-8 text-[#a4a6a0]">{text.academicDescription}</p>

              <dl className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-3">
                <div className="bg-[#0d1112] p-4"><dt className="text-xs text-[#6f7b7e]">{text.editedBy}</dt><dd className="mt-2 text-sm leading-6 text-white">{sustainableSupplyChainBook.editors.join(" · ")}</dd></div>
                <div className="bg-[#0d1112] p-4"><dt className="text-xs text-[#6f7b7e]">{text.publisher}</dt><dd className="mt-2 text-sm leading-6 text-white">{sustainableSupplyChainBook.publisher}</dd></div>
                <div className="bg-[#0d1112] p-4"><dt className="text-xs text-[#6f7b7e]">{text.isbn}</dt><dd className="mt-2 text-sm leading-6 text-white">{sustainableSupplyChainBook.isbn13}<br /><span className="text-[#788184]">ISBN-10 {sustainableSupplyChainBook.isbn10}</span></dd></div>
              </dl>

              <div className="mt-8">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#829296]">{text.availability}</p>
                <div className="grid gap-2 sm:grid-cols-2">
                  {sustainableSupplyChainBook.purchaseLinks.map((store) => (
                    <a key={store.href} href={store.href} target="_blank" rel="noreferrer" className="group flex items-center justify-between rounded-xl border border-[#6db2c5]/20 bg-[#5a9daf]/[0.06] px-4 py-3 transition hover:border-[#83ccdf]/50 hover:bg-[#5a9daf]/[0.12]">
                      <span><strong className="block text-sm font-medium text-white">{store.label}</strong><small className="mt-0.5 block text-xs text-[#7f9195]">{store.format}</small></span>
                      <ArrowUpRight className="size-4 text-[#83ccdf] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-label={text.openStore} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section id="dawah-publication" className="relative overflow-hidden bg-[#090908] py-24 md:py-32">
        <div className="pointer-events-none absolute -right-40 top-24 size-[30rem] rounded-full bg-[#d6a642]/[0.07] blur-[120px]" />
        <div className="page-shell relative">
          <div className="mb-12 grid gap-5 md:grid-cols-[1fr_.72fr] md:items-end">
            <div>
              <span className="eyebrow mb-5"><HeartHandshake className="size-4" /> {text.dawahEyebrow}</span>
              <h2 className="max-w-3xl text-balance text-4xl font-medium leading-[1.02] tracking-[-.035em] text-white md:text-6xl">{text.dawahHeading}</h2>
            </div>
            <p className="max-w-lg text-sm leading-7 text-[#918d84] md:justify-self-end">{text.dawahIntro}</p>
          </div>

          <article className="grid overflow-hidden rounded-[2rem] border border-[#d6a642]/20 bg-[#0d0c0a] lg:grid-cols-[.78fr_1.22fr]">
            <div className="relative min-h-[36rem] bg-[radial-gradient(circle_at_center,rgba(214,166,66,.14),transparent_60%)]">
              <Image src="/bookImage.webp" alt={locale === "en" ? "Cover of Surah Al-Fatihah: The Seven Verses" : "সুরা আল-ফাতিহা: সাতটি আয়াত বইয়ের প্রচ্ছদ"} fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-contain p-10 drop-shadow-[0_30px_45px_rgba(0,0,0,.7)] md:p-16" />
            </div>
            <div className="flex flex-col justify-center border-t border-white/10 p-7 md:p-12 lg:border-l lg:border-t-0">
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.13em] text-[#d6a642]"><HeartHandshake className="size-4" /> {text.dawahEyebrow}</span>
              <h3 className="mt-5 text-balance text-4xl font-medium leading-tight text-white md:text-6xl">{locale === "en" ? "Surah Al-Fatihah: The Seven Verses" : "সুরা আল-ফাতিহা: সাতটি আয়াত"}</h3>
              <p className="mt-6 max-w-xl text-base leading-8 text-[#99958c]">{text.dawahDescription}</p>
              <div className="mt-7 flex flex-wrap gap-2">{text.tags.map((tag) => <span key={tag} className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-[#aaa69c]">{tag}</span>)}</div>
              <dl className="mt-8 grid grid-cols-3 gap-5 border-y border-white/[0.08] py-6 text-sm">
                <div><dt className="text-[#68655f]">{text.author}</dt><dd className="mt-1 text-white">{locale === "en" ? "Ferdoush Saleheen" : "ফেরদৌস সালেহীন"}</dd></div>
                <div><dt className="text-[#68655f]">{text.language}</dt><dd className="mt-1 text-white">{text.bangla}</dd></div>
                <div><dt className="text-[#68655f]">{text.format}</dt><dd className="mt-1 text-white">{text.hardcover}</dd></div>
              </dl>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg"><a href={bookPurchaseUrl} target="_blank" rel="noreferrer"><ShoppingBag className="size-4" /> {text.buy}</a></Button>
                <Button asChild size="lg" variant="outline"><Link href={localizePath("/audiobooks", locale)}><Headphones className="size-4" /> {text.listen}</Link></Button>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
