export type ProfileRole = {
  title: string;
  period: string;
  duration?: string;
  location?: string;
};

export type ProfileExperience = {
  organization: string;
  organizationDuration?: string;
  website?: string;
  logo?: {
    src: string;
    onDark?: boolean;
  };
  roles: ProfileRole[];
  descriptions?: string[];
  responsibilities?: string[];
};

export const profile = {
  name: "Ferdoush Saleheen, PhD, FCILT",
  currentTitle: "Head of Maritime Logistics & SCM Department",
  country: "United Arab Emirates",
  contactLocation: "Dubai, UAE",
  email: "ferdoushsaleheen@gmail.com",
  linkedIn: "https://www.linkedin.com/in/ferdoushsaleheen",
  facebook: "https://www.facebook.com/ferdoush.saleheen.supplychainclub",
  summary: [
    "Dr. Ferdoush Saleheen brings over 20 years of combined industry and academic experience in Supply Chain Management (SCM) and Logistics across Asia and the Gulf.",
    "He has led successful SCM transformations at major organizations including Meena Bazar Retail Chain, Butterfly Marketing Ltd. (LG Bangladesh Operations), Akij Food and Beverage Ltd., and Partex Star Group - some of the largest and most respected companies in Bangladesh.",
    "In the corporate sector, he worked for more than 15 years across the FMCG, Retail, and Agribusiness industries, serving as a C-suite executive overseeing multi-million-dollar operations and leading complex SCM transformations.",
    "Dr. Saleheen has more than 10 years of academic and research experience as an Assistant Professor of SCM, where he taught MBA and Executive MBA programs.",
    "He holds a PhD in Operations Management, specializing in Supply Chain Management, from Universiti Utara Malaysia (UUM), an AACSB-accredited institution ranked among the top 482 universities globally by QS in 2024. He also holds an MS in Logistics from The University of Texas at Arlington, USA, and an MBA from Victoria University, Australia.",
    "Dr. Saleheen is a Chartered Fellow of The Chartered Institute of Logistics and Transport (CILT), International, UK.",
    "He currently works at Sharjah Maritime Academy, a university under the Government of Sharjah that provides Bachelor's, Master's, and Diploma programs in Maritime Logistics and Supply Chain Management. Prior to this, he served at the Higher Colleges of Technology (HCT), the UAE's largest government academic institution and an AACSB-accredited institution.",
    "His expertise extends to teaching, curriculum development, corporate training, and high-quality research. He has published over 30 research papers in peer-reviewed journals and conference proceedings, including Scopus, Web of Science, and API US. He also serves on the editorial boards of the International Journal of Supply Chain Management (IJSCM), UK, and the International Supply Chain Technology Journal (ISCTJ), USA.",
    "He serves as a series co-editor for Sustainable Industry-Focused Supply Chain Management, a book series to be published by the Taylor & Francis Group, CRC Press, USA.",
    "In the corporate sphere, Dr. Saleheen has held senior leadership roles managing end-to-end SCM functions in multinational and national conglomerates across the FMCG, Household Electronics, Agribusiness, and Retail sectors.",
  ],
  stats: [
    { value: "২০+", label: "বছরের সম্মিলিত অভিজ্ঞতা", english: "Years in industry & academia" },
    { value: "১৫+", label: "বছরের কর্পোরেট নেতৃত্ব", english: "Years in corporate leadership" },
    { value: "১০+", label: "বছরের শিক্ষা ও গবেষণা", english: "Years in teaching & research" },
    { value: "৩৪+", label: "প্রকাশনা ও বুক চ্যাপ্টার", english: "Publications & book chapters" },
    { value: "১০০+", label: "কর্পোরেট প্রশিক্ষণ", english: "Corporate training programs" },
  ],
  skills: ["Research and Development (R&D)", "Research Skills", "Design Research"],
  certifications: [
    "Doctor of Philosophy (Ph.D.) degree equivalency",
    "Chartered Fellow",
    "L3 Assessing Vocational Assessment",
  ],
  selectedPublications: [
    "Supply chain performance measurement for manufacturing industry: A study during pandemic (Covid-19)",
    "IT Operations in Retail Banking: A Case Study",
    "Demand and supply planning in retail operations",
    "Challenges of Warehouse Operations: A Case Study in Retail Supermarket",
  ],
} as const;

export const experiences: ProfileExperience[] = [
  {
    organization: "Sharjah Maritime Academy",
    organizationDuration: "1 year 6 months",
    website: "https://www.sma.ac.ae/",
    logo: { src: "/company-logos/sharjah-maritime-academy.webp", onDark: true },
    roles: [
      { title: "Head of Maritime Logistics & SCM Department", period: "April 2026 - Present", duration: "5 months", location: "Sharjah Emirate, United Arab Emirates" },
      { title: "Academic Program Chair, MS Maritime Operations Management", period: "April 2026 - Present", duration: "5 months", location: "Khor Fakkan" },
      { title: "Assistant Professor (Logistics and SCM)", period: "March 2025 - Present", duration: "1 year 6 months", location: "Khor Fakkan, Sharjah Emirate, United Arab Emirates" },
    ],
    descriptions: [
      "Sharjah Maritime Academy (SMA) is a university under the Government of Sharjah. The Department of Maritime Logistics and Supply Chain Management (MLSCM) provides Master's, Bachelor's, and Diploma degree programs in Maritime Logistics and Supply Chain Management.",
    ],
    responsibilities: [
      "Strategy and Risk Champion - MLSCM Department",
      "Industry Advisory Board Member",
      "Learning and Teaching Committee Member",
    ],
  },
  {
    organization: "IEOM Society International",
    website: "https://ieomsociety.org/",
    logo: { src: "/company-logos/ieom-society.webp" },
    roles: [{ title: "Reviewer - Technical Conference & Journal Papers", period: "July 2025 - Present", duration: "1 year 2 months", location: "Michigan, United States" }],
    descriptions: ["Reviews technical papers and provides expert feedback for journals and conferences."],
  },
  {
    organization: "Taylor & Francis Group",
    website: "https://taylorandfrancis.com/",
    logo: { src: "/company-logos/taylor-francis.svg", onDark: true },
    roles: [{ title: "Series Co-Editor, CRC Press Series - Sustainable Industry-Focused Supply Chain Management", period: "October 2024 - Present", duration: "1 year 11 months", location: "Boca Raton, Florida, United States" }],
    descriptions: ["Serves as series co-editor for Sustainable Industry-Focused Supply Chain Management, published by CRC Press, Taylor & Francis Group, USA. The series chief editor is Professor Dr. Md Mamun Habib, with Professor Dr. Erick C. Jones, Sr. serving as a fellow co-editor."],
  },
  {
    organization: "International Supply Chain Technology Journal",
    website: "https://www.iscea.org/supply-chain-journal-middle-east",
    roles: [{ title: "Editorial Board Member", period: "May 2023 - Present", duration: "3 years 4 months", location: "Texas, United States" }],
  },
  {
    organization: "International Journal of Supply Chain Management (IJSCM)",
    website: "https://ojs.excelingtech.co.uk/index.php/IJSCM",
    logo: { src: "/company-logos/ijscm.webp" },
    roles: [{ title: "Editorial Board Member", period: "January 2023 - Present", duration: "3 years 8 months", location: "United Kingdom" }],
  },
  {
    organization: "Higher Colleges of Technology",
    organizationDuration: "2 years 7 months",
    website: "https://hct.ac.ae/",
    logo: { src: "/company-logos/higher-colleges-technology.svg" },
    roles: [
      { title: "Academic Program Chair (APC)", period: "October 2024 - February 2025", duration: "5 months", location: "Fujairah Emirate, United Arab Emirates" },
      { title: "Faculty of Logistics & SCM", period: "August 2022 - February 2025", duration: "2 years 7 months", location: "Fujairah Emirate, United Arab Emirates" },
      { title: "System-wide Course Team Leader (SCTL)", period: "August 2022 - February 2025", duration: "2 years 7 months", location: "United Arab Emirates" },
    ],
    descriptions: ["Served as a federal government employee in the UAE education sector, teaching Business, Logistics, and Supply Chain Management at HCT. HCT is AACSB accredited and listed among the top 6% of business schools worldwide."],
  },
  {
    organization: "BRAC University",
    website: "https://www.bracu.ac.bd/",
    logo: { src: "/company-logos/brac-university.webp" },
    roles: [{ title: "Assistant Professor of SCM (Adjunct)", period: "August 2014 - August 2022", duration: "8 years 1 month", location: "Dhaka, Bangladesh" }],
    descriptions: ["Taught in the MS in Procurement and Supply Management program."],
  },
  {
    organization: "Partex Star Group (Danish)",
    website: "https://www.partexstar.com/",
    logo: { src: "/company-logos/partex-star-group.webp", onDark: true },
    roles: [{ title: "Chief of Supply Chain (FMCG Business)", period: "January 2022 - July 2022", duration: "7 months", location: "Dhaka, Bangladesh" }],
    descriptions: ["Held responsibility for Partex Star Group Complex 2 across Food, Beverage, Tissue Paper, Condensed Milk, and Steel businesses, reporting to the Managing Director. Danish is the largest food and beverage company in Bangladesh."],
  },
  {
    organization: "Akij Food & Beverage Limited (AFBL)",
    website: "https://www.akijfood.com/",
    logo: { src: "/company-logos/akij-food-beverage.svg" },
    roles: [{ title: "Chief Supply Chain Officer (FMCG Business)", period: "April 2020 - July 2021", duration: "1 year 4 months", location: "Dhaka, Bangladesh" }],
    descriptions: ["Led supply chain operations at Akij Food and Beverage, the largest beverage and food company in Bangladesh."],
  },
  {
    organization: "Kazi Farms Limited",
    website: "https://www.kazifarms.com/",
    logo: { src: "/company-logos/kazi-farms.webp" },
    roles: [{ title: "Head of Supply Chain Management (Poultry & Feed Business)", period: "November 2018 - December 2019", duration: "1 year 2 months", location: "Dhaka, Bangladesh" }],
    descriptions: ["Led supply chain management for Bangladesh's largest integrated poultry and feed mill company."],
  },
  {
    organization: "Butterfly Group",
    website: "https://www.butterflygroupbd.com/",
    logo: { src: "/company-logos/butterfly-group.webp" },
    roles: [{ title: "Head of Supply Chain Management (LG Bangladesh Electronics Business)", period: "September 2016 - October 2018", duration: "2 years 2 months", location: "Dhaka, Bangladesh" }],
    descriptions: ["Led SCM for LG Bangladesh operations. Butterfly Group represents LG operations in Bangladesh with integrated manufacturing facilities for air conditioners, refrigerators, and LED televisions."],
  },
  {
    organization: "Desh Group of Companies",
    website: "https://www.deshgroup.com/",
    logo: { src: "/company-logos/desh-group.svg" },
    roles: [{ title: "Chief Business Officer (Buhler Bangladesh Operations)", period: "April 2015 - August 2016", duration: "1 year 5 months" }],
    descriptions: ["Led Buhler Bangladesh operations. Switzerland-based Buhler is the largest manufacturer of rice mills, flour mills, and chocolate mills."],
  },
  {
    organization: "Gemcon Group",
    website: "https://gemcongroup.com/",
    logo: { src: "/company-logos/gemcon-group.webp" },
    roles: [{ title: "General Manager Supply Chain (Retail Business - Meena Bazar)", period: "February 2012 - March 2015", duration: "3 years 2 months", location: "Dhaka, Bangladesh" }],
    descriptions: ["Led supply chain for Meena Bazar, the largest retail chain in Bangladesh."],
  },
];

export const education = [
  { institution: "The University of Texas at Arlington", degree: "MS in Logistics", detail: "Department of Industrial, Manufacturing, and Systems Engineering", period: "August 2008 - May 2010", country: "USA" },
  { institution: "Universiti Utara Malaysia", degree: "Doctor of Philosophy (PhD)", detail: "Operations Management, specialized in Supply Chain Management", period: "September 2014 - March 2021", country: "Malaysia" },
  { institution: "Victoria University", degree: "MBA", detail: "Business Administration and Management, General", period: "January 2007 - May 2008", country: "Australia" },
  { institution: "North South University", degree: "BBA", detail: "Marketing & Management", period: "1998 - 2002", country: "Bangladesh" },
] as const;
