import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

import { LegalHero } from "@/components/heroes/legal-hero";
import { InnerPage } from "@/components/inner-page";
import { LegalContent } from "@/components/legal-content";

export const metadata: Metadata = createPageMetadata({
  locale: "en",
  title: "Privacy Policy",
  description: "How information and third-party services are handled on the official website of Dr. Ferdoush Saleheen.",
  banglaPath: "/privacy",
  englishPath: "/en/privacy",
  noIndex: true,
});

export default function EnglishPrivacyPage() {
  return (
    <InnerPage
      locale="en"
      hero={
        <LegalHero
          type="privacy"
          locale="en"
          title="Privacy"
          highlightText="Policy"
          description="A clear and transparent charter explaining information handling, external services, and zero tracking on this official platform."
        />
      }
    >
      <LegalContent
        sections={[
          {
            title: "Information collected directly",
            text: "The website currently has no contact form, account system, or newsletter subscription, so personal information is not collected through those channels.",
          },
          {
            title: "External services",
            text: "When you use YouTube embeds or follow links to Rokomari and LinkedIn, the privacy and cookie policies of those services may apply.",
          },
          {
            title: "Contact",
            text: "Information sent directly to the published email address will be used only to respond to that communication.",
          },
        ]}
      />
    </InnerPage>
  );
}

