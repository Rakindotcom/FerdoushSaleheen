import type { Metadata } from "next";

import { DocumentLanguage } from "@/components/document-language";

export const metadata: Metadata = {
  title: {
    default: "Dr. Ferdoush Saleheen | Official Digital Platform",
    template: "%s | Dr. Ferdoush Saleheen",
  },
  description:
    "The official digital platform of Dr. Ferdoush Saleheen, featuring his professional profile, books, audiobook, podcasts, research, and selected reflections.",
  alternates: {
    canonical: "/en",
    languages: { "bn-BD": "/", en: "/en" },
  },
  openGraph: {
    title: "Dr. Ferdoush Saleheen",
    description: "Academic, supply chain leader, researcher, author, and speaker.",
    locale: "en_US",
    type: "website",
    images: ["/FSwithTheBook.png"],
  },
};

export default function EnglishLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div lang="en"><DocumentLanguage language="en" />{children}</div>;
}
