import type { Metadata } from "next";

import { GalleryExperience } from "@/components/gallery-experience";
import { InnerPage } from "@/components/inner-page";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  locale: "en",
  title: "Photo Gallery",
  description: "A curated photo collection spanning Dr. Ferdoush Saleheen's academic life, international events, media appearances, publications, milestones, and personal journey.",
  banglaPath: "/gallery",
  englishPath: "/en/gallery",
});

export default function EnglishGalleryPage() {
  return (
    <InnerPage
      locale="en"
      eyebrow="In pictures"
      title={<>Moments &amp; <span className="gold-text">milestones</span></>}
      description="A visual record of professional events, academic life, publications, media features, and memorable points along the journey. Select any image to open the full viewer."
    >
      <GalleryExperience locale="en" />
    </InnerPage>
  );
}
