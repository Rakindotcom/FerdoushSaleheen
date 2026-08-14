import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

import { InnerPage } from "@/components/inner-page";
import { LegalContent } from "@/components/legal-content";

export const metadata: Metadata = createPageMetadata({
  locale: "en",
  title: "Terms of Use",
  description: "Terms for using information, images, and third-party content published on the official website of Dr. Ferdoush Saleheen.",
  banglaPath: "/terms",
  englishPath: "/en/terms",
  noIndex: true,
});

export default function EnglishTermsPage() {
  return <InnerPage locale="en" eyebrow="Legal information" title={<>Terms of <span className="gold-text">Use</span></>} description="Terms governing the use of information and content published on this website."><LegalContent sections={[
    { title: "Use of content", text: "Text, images, and other content from this website may not be republished commercially without permission. Links to original pages may be shared." },
    { title: "External content", text: "Embedded YouTube videos and content hosted by services such as Rokomari or LinkedIn remain under the control of their respective providers." },
    { title: "Accuracy of information", text: "Professional and publication information may be revised when updates or corrections become necessary." },
  ]} /></InnerPage>;
}
