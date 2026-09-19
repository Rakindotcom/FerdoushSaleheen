import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

import { LegalHero } from "@/components/heroes/cohesive/legal-hero";
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
  return (
    <InnerPage
      locale="en"
      hero={
        <LegalHero
          type="terms"
          locale="en"
          title="Terms of"
          highlightText="Use"
          description="Guidelines and terms governing intellectual property, citations, external media, and content accuracy on this official platform."
        />
      }
    >
      <LegalContent
        sections={[
          {
            title: "Use of content",
            text: "Text, images, and other content from this website may not be republished commercially without permission. Links to original pages may be shared.",
          },
          {
            title: "External content",
            text: "Embedded YouTube videos and content hosted by services such as Rokomari or LinkedIn remain under the control of their respective providers.",
          },
          {
            title: "Accuracy of information",
            text: "Professional and publication information may be revised when updates or corrections become necessary.",
          },
        ]}
      />
    </InnerPage>
  );
}

