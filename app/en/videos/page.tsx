import type { Metadata } from "next";
import { ExternalLink, Play } from "lucide-react";

import { FacebookVideoEmbed } from "@/components/facebook-video-embed";
import { InnerPage, SectionHeading } from "@/components/inner-page";
import { createBreadcrumbJsonLd, StructuredData } from "@/components/structured-data";
import { facebookVideos } from "@/lib/facebook-videos";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  locale: "en",
  title: "Videos",
  siteNameFirst: true,
  description: "Watch selected Facebook videos and Reels by Dr. Ferdoush Saleheen about faith, Qur’anic reflection, life, leadership, business, and supply chain.",
  banglaPath: "/videos",
  englishPath: "/en/videos",
});

export default function EnglishVideosPage() {
  return (
    <InnerPage
      locale="en"
      eyebrow="Watch · Reflect · Apply"
      title={<>Selected <span className="gold-text">Videos</span></>}
      description="A collection of short videos and Reels by Dr. Ferdoush Saleheen about faith, life, Qur’anic reflection, leadership, and business."
    >
      <StructuredData data={createBreadcrumbJsonLd([{ name: "Home", path: "/en" }, { name: "Videos", path: "/en/videos" }])} />
      <section className="py-24 md:py-32">
        <div className="page-shell">
          <SectionHeading
            eyebrow="Facebook videos"
            description="Watch directly from Facebook. If a video is unavailable in the player, open it on Facebook."
          >
            Short reflections and <span className="gold-text">insights</span>
          </SectionHeading>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {facebookVideos.map((video, index) => (
              <article key={video.id} className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0e0e0d] p-2">
                <FacebookVideoEmbed url={video.url} title={video.titleEn} locale="en" className="rounded-xl" />
                <div className="px-3 py-4">
                  <span className="inline-flex items-center gap-2 text-xs text-[#d6a642]">
                    <Play className="size-4 fill-current" /> Video {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-2 text-lg font-medium leading-snug text-white">{video.titleEn}</h2>
                  <a
                    href={video.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-xs text-[#8e8a81] transition hover:text-[#d6a642]"
                  >
                    Watch on Facebook <ExternalLink className="size-3.5" />
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