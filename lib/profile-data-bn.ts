import { education, experiences, profile, type ProfileExperience } from "@/lib/profile-data";

const banglaDigits = (value: string) =>
  value.replace(/\d/g, (digit) => "০১২৩৪৫৬৭৮৯"[Number(digit)]);

const months: Record<string, string> = {
  January: "জানুয়ারি",
  February: "ফেব্রুয়ারি",
  March: "মার্চ",
  April: "এপ্রিল",
  May: "মে",
  June: "জুন",
  July: "জুলাই",
  August: "আগস্ট",
  September: "সেপ্টেম্বর",
  October: "অক্টোবর",
  November: "নভেম্বর",
  December: "ডিসেম্বর",
};

function localizeDate(value: string) {
  let localized = value.replace("Present", "বর্তমান").replace(" - ", " থেকে ");
  for (const [english, bangla] of Object.entries(months)) {
    localized = localized.replaceAll(english, bangla);
  }
  return banglaDigits(localized);
}

function localizeDuration(value?: string) {
  if (!value) return undefined;
  return banglaDigits(
    value
      .replace(/years?/g, "বছর")
      .replace(/months?/g, "মাস"),
  );
}

const locations: Record<string, string> = {
  "Sharjah Emirate, United Arab Emirates": "শারজাহ আমিরাত, সংযুক্ত আরব আমিরাত",
  "Khor Fakkan": "খোরফাক্কান",
  "Khor Fakkan, Sharjah Emirate, United Arab Emirates": "খোরফাক্কান, শারজাহ আমিরাত, সংযুক্ত আরব আমিরাত",
  "Michigan, United States": "মিশিগান, যুক্তরাষ্ট্র",
  "Boca Raton, Florida, United States": "বোকা রাটন, ফ্লোরিডা, যুক্তরাষ্ট্র",
  "Texas, United States": "টেক্সাস, যুক্তরাষ্ট্র",
  "United Kingdom": "যুক্তরাজ্য",
  "Fujairah Emirate, United Arab Emirates": "ফুজাইরাহ আমিরাত, সংযুক্ত আরব আমিরাত",
  "United Arab Emirates": "সংযুক্ত আরব আমিরাত",
  "Dhaka, Bangladesh": "ঢাকা, বাংলাদেশ",
};

const roleTitles: Record<string, string> = {
  "Head of Maritime Logistics & SCM Department": "মেরিটাইম লজিস্টিকস ও সাপ্লাই চেইন ম্যানেজমেন্ট বিভাগের প্রধান",
  "Academic Program Chair, MS Maritime Operations Management": "একাডেমিক প্রোগ্রাম চেয়ার, এমএস ইন মেরিটাইম অপারেশনস ম্যানেজমেন্ট",
  "Assistant Professor (Logistics and SCM)": "সহকারী অধ্যাপক, লজিস্টিকস ও সাপ্লাই চেইন ম্যানেজমেন্ট",
  "Reviewer - Technical Conference & Journal Papers": "কারিগরি সম্মেলন ও জার্নাল গবেষণাপত্রের পর্যালোচক",
  "Series Co-Editor, CRC Press Series - Sustainable Industry-Focused Supply Chain Management": "সিরিজের সহসম্পাদক, CRC Press: Sustainable Industry-Focused Supply Chain Management",
  "Editorial Board Member": "সম্পাদকমণ্ডলীর সদস্য",
  "Academic Program Chair (APC)": "একাডেমিক প্রোগ্রাম চেয়ার",
  "Faculty of Logistics & SCM": "লজিস্টিকস ও সাপ্লাই চেইন ম্যানেজমেন্ট অনুষদের শিক্ষক",
  "System-wide Course Team Leader (SCTL)": "প্রতিষ্ঠানব্যাপী কোর্স টিম লিডার",
  "Assistant Professor of SCM (Adjunct)": "সাপ্লাই চেইন ম্যানেজমেন্টের খণ্ডকালীন সহকারী অধ্যাপক",
  "Chief of Supply Chain (FMCG Business)": "চিফ অব সাপ্লাই চেইন, এফএমসিজি ব্যবসা",
  "Chief Supply Chain Officer (FMCG Business)": "চিফ সাপ্লাই চেইন অফিসার, এফএমসিজি ব্যবসা",
  "Head of Supply Chain Management (Poultry & Feed Business)": "সাপ্লাই চেইন ম্যানেজমেন্ট প্রধান, পোল্ট্রি ও ফিড ব্যবসা",
  "Head of Supply Chain Management (LG Bangladesh Electronics Business)": "সাপ্লাই চেইন ম্যানেজমেন্ট প্রধান, এলজি বাংলাদেশ ইলেকট্রনিকস ব্যবসা",
  "Chief Business Officer (Buhler Bangladesh Operations)": "চিফ বিজনেস অফিসার, বিউলার বাংলাদেশ কার্যক্রম",
  "General Manager Supply Chain (Retail Business - Meena Bazar)": "জেনারেল ম্যানেজার, সাপ্লাই চেইন, মীনা বাজার রিটেইল ব্যবসা",
};

const descriptions: Record<string, string> = {
  "Sharjah Maritime Academy (SMA) is a university under the Government of Sharjah. The Department of Maritime Logistics and Supply Chain Management (MLSCM) provides Master's, Bachelor's, and Diploma degree programs in Maritime Logistics and Supply Chain Management.": "শারজাহ মেরিটাইম একাডেমি শারজাহ সরকারের অধীন একটি বিশ্ববিদ্যালয়। প্রতিষ্ঠানটির মেরিটাইম লজিস্টিকস ও সাপ্লাই চেইন ম্যানেজমেন্ট বিভাগে মাস্টার্স, ব্যাচেলর ও ডিপ্লোমা প্রোগ্রাম পরিচালিত হয়।",
  "Reviews technical papers and provides expert feedback for journals and conferences.": "জার্নাল ও সম্মেলনের কারিগরি গবেষণাপত্র পর্যালোচনা করেন এবং বিশেষজ্ঞ মতামত দেন।",
  "Serves as series co-editor for Sustainable Industry-Focused Supply Chain Management, published by CRC Press, Taylor & Francis Group, USA. The series chief editor is Professor Dr. Md Mamun Habib, with Professor Dr. Erick C. Jones, Sr. serving as a fellow co-editor.": "Taylor & Francis Group-এর CRC Press থেকে প্রকাশিত Sustainable Industry-Focused Supply Chain Management বই সিরিজের সহসম্পাদক হিসেবে দায়িত্ব পালন করছেন। সিরিজটির প্রধান সম্পাদক অধ্যাপক ড. মো. মামুন হাবিব এবং অপর সহসম্পাদক অধ্যাপক ড. এরিক সি. জোন্স সিনিয়র।",
  "Served as a federal government employee in the UAE education sector, teaching Business, Logistics, and Supply Chain Management at HCT. HCT is AACSB accredited and listed among the top 6% of business schools worldwide.": "সংযুক্ত আরব আমিরাতের কেন্দ্রীয় সরকারি শিক্ষাপ্রতিষ্ঠান HCT-তে ব্যবসা, লজিস্টিকস ও সাপ্লাই চেইন ম্যানেজমেন্ট পড়িয়েছেন। AACSB স্বীকৃত HCT বিশ্বের শীর্ষ ৬ শতাংশ বিজনেস স্কুলের অন্তর্ভুক্ত।",
  "Taught in the MS in Procurement and Supply Management program.": "প্রকিউরমেন্ট ও সাপ্লাই ম্যানেজমেন্টের এমএস প্রোগ্রামে পাঠদান করেছেন।",
  "Held responsibility for Partex Star Group Complex 2 across Food, Beverage, Tissue Paper, Condensed Milk, and Steel businesses, reporting to the Managing Director. Danish is the largest food and beverage company in Bangladesh.": "পারটেক্স স্টার গ্রুপ কমপ্লেক্স ২-এর খাদ্য, পানীয়, টিস্যু পেপার, কনডেন্সড মিল্ক ও ইস্পাত ব্যবসার সাপ্লাই চেইনের দায়িত্ব পালন করেছেন এবং ব্যবস্থাপনা পরিচালকের কাছে প্রতিবেদন দিয়েছেন। Danish বাংলাদেশের বৃহত্তম খাদ্য ও পানীয় কোম্পানিগুলোর একটি।",
  "Led supply chain operations at Akij Food and Beverage, the largest beverage and food company in Bangladesh.": "বাংলাদেশের অন্যতম বৃহৎ খাদ্য ও পানীয় প্রতিষ্ঠান আকিজ ফুড অ্যান্ড বেভারেজের সাপ্লাই চেইন কার্যক্রমে নেতৃত্ব দিয়েছেন।",
  "Led supply chain management for Bangladesh's largest integrated poultry and feed mill company.": "বাংলাদেশের বৃহত্তম সমন্বিত পোল্ট্রি ও ফিড মিল প্রতিষ্ঠানের সাপ্লাই চেইন ব্যবস্থাপনায় নেতৃত্ব দিয়েছেন।",
  "Led SCM for LG Bangladesh operations. Butterfly Group represents LG operations in Bangladesh with integrated manufacturing facilities for air conditioners, refrigerators, and LED televisions.": "এলজি বাংলাদেশের সাপ্লাই চেইন কার্যক্রমে নেতৃত্ব দিয়েছেন। Butterfly Group বাংলাদেশে এলজির কার্যক্রম পরিচালনা করে এবং এয়ার কন্ডিশনার, রেফ্রিজারেটর ও এলইডি টেলিভিশনের সমন্বিত উৎপাদন সুবিধা পরিচালনা করে।",
  "Led Buhler Bangladesh operations. Switzerland-based Buhler is the largest manufacturer of rice mills, flour mills, and chocolate mills.": "বিউলার বাংলাদেশের কার্যক্রমে নেতৃত্ব দিয়েছেন। সুইজারল্যান্ডভিত্তিক বিউলার রাইস মিল, ফ্লাওয়ার মিল ও চকলেট মিল যন্ত্রপাতির অন্যতম বৃহৎ নির্মাতা।",
  "Led supply chain for Meena Bazar, the largest retail chain in Bangladesh.": "বাংলাদেশের অন্যতম বৃহৎ রিটেইল চেইন মীনা বাজারের সাপ্লাই চেইনে নেতৃত্ব দিয়েছেন।",
};

const responsibilities: Record<string, string> = {
  "Strategy and Risk Champion - MLSCM Department": "মেরিটাইম লজিস্টিকস ও সাপ্লাই চেইন বিভাগে কৌশল ও ঝুঁকি ব্যবস্থাপনার নেতৃত্ব",
  "Industry Advisory Board Member": "ইন্ডাস্ট্রি অ্যাডভাইজরি বোর্ডের সদস্য",
  "Learning and Teaching Committee Member": "লার্নিং অ্যান্ড টিচিং কমিটির সদস্য",
};

export const profileBn = {
  ...profile,
  name: "ড. ফেরদৌস সালেহীন, পিএইচডি, এফসিআইএলটি",
  currentTitle: "মেরিটাইম লজিস্টিকস ও সাপ্লাই চেইন ম্যানেজমেন্ট বিভাগের প্রধান",
  country: "সংযুক্ত আরব আমিরাত",
  contactLocation: "দুবাই, সংযুক্ত আরব আমিরাত",
  summary: [
    "ড. ফেরদৌস সালেহীন এশিয়া ও উপসাগরীয় অঞ্চলে সাপ্লাই চেইন ম্যানেজমেন্ট ও লজিস্টিকসে শিল্প ও শিক্ষাজগত মিলিয়ে ২০ বছরেরও বেশি অভিজ্ঞতা অর্জন করেছেন।",
    "মীনা বাজার রিটেইল চেইন, Butterfly Marketing Ltd. পরিচালিত LG Bangladesh, Akij Food & Beverage Ltd. এবং Partex Star Group-এর মতো শীর্ষস্থানীয় প্রতিষ্ঠানে তিনি সফল সাপ্লাই চেইন রূপান্তরে নেতৃত্ব দিয়েছেন।",
    "কর্পোরেট খাতে ১৫ বছরেরও বেশি সময় তিনি এফএমসিজি, রিটেইল ও কৃষিভিত্তিক শিল্পে কাজ করেছেন। শীর্ষ নির্বাহী হিসেবে বহু মিলিয়ন ডলারের কার্যক্রম তদারক এবং জটিল সাপ্লাই চেইন রূপান্তর পরিচালনা করেছেন।",
    "সাপ্লাই চেইন ম্যানেজমেন্টের সহকারী অধ্যাপক হিসেবে তাঁর শিক্ষা ও গবেষণার অভিজ্ঞতা ১০ বছরেরও বেশি। তিনি এমবিএ ও এক্সিকিউটিভ এমবিএ প্রোগ্রামে পাঠদান করেছেন।",
    "তিনি Universiti Utara Malaysia থেকে সাপ্লাই চেইন ম্যানেজমেন্টে বিশেষায়িত অপারেশনস ম্যানেজমেন্টে পিএইচডি অর্জন করেন। এছাড়া The University of Texas at Arlington থেকে লজিস্টিকসে এমএস এবং Victoria University থেকে এমবিএ সম্পন্ন করেছেন।",
    "তিনি যুক্তরাজ্যের The Chartered Institute of Logistics and Transport-এর চার্টার্ড ফেলো।",
    "বর্তমানে তিনি শারজাহ সরকারের অধীন Sharjah Maritime Academy-তে কর্মরত। এর আগে সংযুক্ত আরব আমিরাতের বৃহত্তম সরকারি উচ্চশিক্ষা প্রতিষ্ঠান Higher Colleges of Technology-তে দায়িত্ব পালন করেছেন।",
    "পাঠদান, পাঠ্যক্রম উন্নয়ন, কর্পোরেট প্রশিক্ষণ ও মানসম্মত গবেষণায় তাঁর বিস্তৃত অভিজ্ঞতা রয়েছে। তিনি ৩০টিরও বেশি গবেষণাপত্র প্রকাশ করেছেন এবং IJSCM ও ISCTJ-এর সম্পাদকমণ্ডলীতে দায়িত্ব পালন করছেন।",
    "Taylor & Francis Group-এর CRC Press থেকে প্রকাশিতব্য Sustainable Industry-Focused Supply Chain Management বই সিরিজের সহসম্পাদক হিসেবে তিনি কাজ করছেন।",
    "কর্পোরেট অঙ্গনে তিনি এফএমসিজি, গৃহস্থালি ইলেকট্রনিকস, কৃষিভিত্তিক ব্যবসা ও রিটেইল খাতে দেশীয় ও বহুজাতিক প্রতিষ্ঠানের পূর্ণাঙ্গ সাপ্লাই চেইন কার্যক্রমে জ্যেষ্ঠ নেতৃত্ব দিয়েছেন।",
  ],
  skills: ["গবেষণা ও উন্নয়ন", "গবেষণা দক্ষতা", "গবেষণা নকশা"],
  certifications: [
    "পিএইচডি ডিগ্রির সমমান স্বীকৃতি",
    "চার্টার্ড ফেলো",
    "লেভেল ৩ ভোকেশনাল অ্যাসেসমেন্ট মূল্যায়ন",
  ],
  selectedPublications: [
    "উৎপাদন শিল্পে সাপ্লাই চেইন কর্মদক্ষতা পরিমাপ: কোভিড-১৯ মহামারিকালীন একটি গবেষণা",
    "রিটেইল ব্যাংকিংয়ে আইটি কার্যক্রম: একটি কেস স্টাডি",
    "রিটেইল কার্যক্রমে চাহিদা ও সরবরাহ পরিকল্পনা",
    "গুদাম কার্যক্রমের চ্যালেঞ্জ: রিটেইল সুপারমার্কেটভিত্তিক একটি কেস স্টাডি",
  ],
} as const;

export const experiencesBn: ProfileExperience[] = experiences.map((experience) => ({
  ...experience,
  organizationDuration: localizeDuration(experience.organizationDuration),
  roles: experience.roles.map((role) => ({
    ...role,
    title: roleTitles[role.title] ?? role.title,
    period: localizeDate(role.period),
    duration: localizeDuration(role.duration),
    location: role.location ? (locations[role.location] ?? role.location) : undefined,
  })),
  descriptions: experience.descriptions?.map((description) => descriptions[description] ?? description),
  responsibilities: experience.responsibilities?.map((responsibility) => responsibilities[responsibility] ?? responsibility),
}));

export const educationBn = education.map((item) => ({
  ...item,
  degree: ({
    "MS in Logistics": "লজিস্টিকসে এমএস",
    "Doctor of Philosophy (PhD)": "ডক্টর অব ফিলোসফি, পিএইচডি",
    MBA: "এমবিএ",
    BBA: "বিবিএ",
  } as Record<string, string>)[item.degree] ?? item.degree,
  detail: ({
    "Department of Industrial, Manufacturing, and Systems Engineering": "ইন্ডাস্ট্রিয়াল, ম্যানুফ্যাকচারিং ও সিস্টেমস ইঞ্জিনিয়ারিং বিভাগ",
    "Operations Management, specialized in Supply Chain Management": "অপারেশনস ম্যানেজমেন্ট, সাপ্লাই চেইন ম্যানেজমেন্টে বিশেষায়ন",
    "Business Administration and Management, General": "ব্যবসায় প্রশাসন ও ব্যবস্থাপনা",
    "Marketing & Management": "মার্কেটিং ও ম্যানেজমেন্ট",
  } as Record<string, string>)[item.detail] ?? item.detail,
  period: localizeDate(item.period),
  country: ({ USA: "যুক্তরাষ্ট্র", Malaysia: "মালয়েশিয়া", Australia: "অস্ট্রেলিয়া", Bangladesh: "বাংলাদেশ" } as Record<string, string>)[item.country] ?? item.country,
}));

