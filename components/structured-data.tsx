import { absoluteUrl, siteDescription, siteName } from "@/lib/seo";

type JsonLdValue = Record<string, unknown> | Array<Record<string, unknown>>;

export function StructuredData({ data }: { data: JsonLdValue }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${absoluteUrl()}#website`,
  url: absoluteUrl(),
  name: siteName.en,
  alternateName: siteName.bn,
  description: siteDescription.en,
  inLanguage: ["bn-BD", "en"],
  publisher: { "@id": `${absoluteUrl()}#person` },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${absoluteUrl()}#person`,
  name: "Ferdoush Saleheen",
  honorificPrefix: "Dr.",
  honorificSuffix: "PhD, FCILT",
  alternateName: "ড. ফেরদৌস সালেহীন",
  url: absoluteUrl(),
  image: absoluteUrl("/fsPhoto.png"),
  description: "Academic, supply chain and logistics leader, researcher, corporate trainer, editor, and author with more than two decades of experience across industry and higher education.",
  sameAs: [
    "https://www.linkedin.com/in/ferdoushsaleheen",
    "https://www.sma.ac.ae/faculty-profiles/dr-ferdoush-saleheen",
    "https://scholar.google.com/citations?hl=en&user=vAUNGskAAAAJ",
    "https://www.researchgate.net/profile/Ferdoush-Saleheen",
  ],
  jobTitle: "Head of Maritime Logistics & SCM Department",
  worksFor: {
    "@type": "CollegeOrUniversity",
    name: "Sharjah Maritime Academy",
    url: "https://www.sma.ac.ae/",
  },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Universiti Utara Malaysia" },
    { "@type": "CollegeOrUniversity", name: "The University of Texas at Arlington" },
    { "@type": "CollegeOrUniversity", name: "Victoria University" },
    { "@type": "CollegeOrUniversity", name: "North South University" },
  ],
  knowsAbout: ["Supply Chain Management", "Logistics", "Maritime Logistics", "Operations Management", "Qur'anic reflection"],
};

export function createProfilePageJsonLd({
  path,
  name,
  language,
}: {
  path: string;
  name: string;
  language: "bn-BD" | "en";
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${absoluteUrl(path)}#profile-page`,
    url: absoluteUrl(path),
    name,
    inLanguage: language,
    isPartOf: { "@id": `${absoluteUrl()}#website` },
    mainEntity: { "@id": `${absoluteUrl()}#person` },
  };
}

export function createBreadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function SiteStructuredData() {
  return <StructuredData data={[websiteJsonLd, personJsonLd]} />;
}
