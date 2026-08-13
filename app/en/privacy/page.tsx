import type { Metadata } from "next";

import { InnerPage } from "@/components/inner-page";
import { LegalContent } from "@/components/legal-content";

export const metadata: Metadata = { title: "Privacy Policy", alternates: { canonical: "/en/privacy", languages: { "bn-BD": "/privacy", en: "/en/privacy" } } };

export default function EnglishPrivacyPage() {
  return <InnerPage locale="en" eyebrow="Legal information" title={<>Privacy <span className="gold-text">Policy</span></>} description="A concise explanation of how information is handled on this website."><LegalContent sections={[
    { title: "Information collected directly", text: "The website currently has no contact form, account system, or newsletter subscription, so personal information is not collected through those channels." },
    { title: "External services", text: "When you use YouTube embeds or follow links to Rokomari and LinkedIn, the privacy and cookie policies of those services may apply." },
    { title: "Contact", text: "Information sent directly to the published email address will be used only to respond to that communication." },
  ]} /></InnerPage>;
}
