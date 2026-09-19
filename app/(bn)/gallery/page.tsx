import type { Metadata } from "next";

import { GalleryExperience } from "@/components/gallery-experience";
import { InnerPage } from "@/components/inner-page";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  locale: "bn",
  title: "ছবির গ্যালারি",
  description: "ড. ফেরদৌস সালেহীনের একাডেমিক জীবন, আন্তর্জাতিক আয়োজন, গণমাধ্যম, প্রকাশনা, অর্জন ও ব্যক্তিগত পথচলার নির্বাচিত ছবির সংগ্রহ।",
  banglaPath: "/gallery",
  englishPath: "/en/gallery",
});

export default function GalleryPage() {
  return (
    <InnerPage
      locale="bn"
      eyebrow="ছবিতে পথচলা"
      title={<>এক ফ্রেমে <span className="gold-text">মুহূর্ত ও মাইলফলক</span></>}
      description="পেশাগত আয়োজন, একাডেমিক পরিসর, প্রকাশনা, গণমাধ্যমে উপস্থিতি এবং পথচলার নির্বাচিত স্মৃতি। ছবি বড় করে দেখতে যেকোনো ছবিতে চাপুন।"
    >
      <GalleryExperience locale="bn" />
    </InnerPage>
  );
}
