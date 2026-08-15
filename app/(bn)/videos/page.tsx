import type { Metadata } from "next";
import { ExternalLink, Play } from "lucide-react";

import { FacebookVideoEmbed } from "@/components/facebook-video-embed";
import { InnerPage, SectionHeading } from "@/components/inner-page";
import { createBreadcrumbJsonLd, StructuredData } from "@/components/structured-data";
import { facebookVideos } from "@/lib/facebook-videos";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  locale: "bn",
  title: "ভিডিও",
  siteNameFirst: true,
  description: "বিশ্বাস, কুরআনিক অনুধ্যান, জীবন, নেতৃত্ব ও সাপ্লাই চেইন বিষয়ে ড. ফেরদৌস সালেহীনের নির্বাচিত Facebook ভিডিও ও রিল দেখুন।",
  banglaPath: "/videos",
  englishPath: "/en/videos",
});

export default function VideosPage() {
  return (
    <InnerPage
      eyebrow="দেখুন · ভাবুন · প্রয়োগ করুন"
      title={<>নির্বাচিত <span className="gold-text">ভিডিও</span></>}
      description="বিশ্বাস, জীবন, কুরআনিক অনুধ্যান, নেতৃত্ব ও ব্যবসা বিষয়ে ড. ফেরদৌস সালেহীনের সংক্ষিপ্ত ভিডিও এবং রিলের সংগ্রহ।"
    >
      <StructuredData data={createBreadcrumbJsonLd([{ name: "হোমপেজ", path: "/" }, { name: "ভিডিও", path: "/videos" }])} />
      <section className="py-24 md:py-32">
        <div className="page-shell">
          <SectionHeading
            eyebrow="Facebook ভিডিও"
            description="ভিডিওগুলো সরাসরি Facebook থেকে দেখুন। কোনো ভিডিও দেখা না গেলে Facebook-এ খুলুন।"
          >
            সংক্ষিপ্ত ভাবনা ও <span className="gold-text">অনুধ্যান</span>
          </SectionHeading>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {facebookVideos.map((video, index) => (
              <article key={video.id} className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0e0e0d] p-2">
                <FacebookVideoEmbed url={video.url} title={video.titleBn} className="rounded-xl" />
                <div className="px-3 py-4">
                  <span className="inline-flex items-center gap-2 text-xs text-[#d6a642]">
                    <Play className="size-4 fill-current" /> ভিডিও {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-2 text-lg font-medium leading-snug text-white">{video.titleBn}</h2>
                  <a
                    href={video.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-xs text-[#8e8a81] transition hover:text-[#d6a642]"
                  >
                    Facebook-এ দেখুন <ExternalLink className="size-3.5" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </InnerPage>
  );
}