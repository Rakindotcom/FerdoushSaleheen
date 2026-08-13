export type LinkedInPost = {
  category: string;
  title: string;
  summary: string;
  href: string;
};

export const linkedInPosts: LinkedInPost[] = [
  {
    category: "নৈতিকতা ও ইসলামিক SCM",
    title: "আস্থা হারালে ব্যবস্থা ভেঙে পড়ে",
    summary:
      "ইসলামিক সাপ্লাই চেইন ব্যবস্থাপনায় দায়িত্ববোধ, আস্থা ও উদ্দেশ্য কীভাবে ব্যবসায়িক ব্যবস্থাকে আরও মানবিক ও টেকসই করতে পারে। এই ভাবনার সংক্ষিপ্ত উপস্থাপন।",
    href: "https://www.linkedin.com/posts/ferdoushsaleheen_when-trust-disappears-systems-fail-islamic-activity-7410683878308446208-BMlF",
  },
  {
    category: "লজিস্টিকস ও স্থিতিস্থাপকতা",
    title: "আঞ্চলিক সংকটকে যেভাবে লজিস্টিকস শক্তিতে রূপ দিয়েছে UAE",
    summary:
      "ভূরাজনৈতিক চাপের মধ্যেও সমন্বিত অবকাঠামো ও লজিস্টিকস ব্যবস্থার মাধ্যমে পণ্যপ্রবাহ সচল রাখার UAE মডেল এবং অন্য দেশের জন্য তার শিক্ষাগুলো নিয়ে আলোচনা।",
    href: "https://www.linkedin.com/posts/ferdoushsaleheen_how-the-uae-turned-regional-disruption-into-activity-7439255417148301312-unKX",
  },
  {
    category: "প্রকাশনা",
    title: "Sustainable Supply Chain Management: নতুন সম্পাদিত গ্রন্থ",
    summary:
      "Taylor & Francis-এর CRC Press থেকে প্রকাশিতব্য শিল্পভিত্তিক টেকসই ও স্থিতিস্থাপক সাপ্লাই চেইনবিষয়ক সম্পাদিত গ্রন্থ এবং এর প্রচ্ছদ নিয়ে পাঠকদের সঙ্গে মতবিনিময়।",
    href: "https://www.linkedin.com/posts/ferdoushsaleheen_dear-friends-i-am-delighted-to-share-that-activity-7431018905848057858-YJUG",
  },
  {
    category: "কৌশল ও নেতৃত্ব",
    title: "সাপ্লাই চেইন এখন শুধু অপারেশন নয়, ব্যবসায়িক কৌশল",
    summary:
      "দুই দশকের কর্পোরেট অভিজ্ঞতার আলোকে FMCG, রিটেইল, ম্যানুফ্যাকচারিং ও কৃষিভিত্তিক শিল্পে সাপ্লাই চেইন রূপান্তরের জরুরি প্রয়োজন নিয়ে তাঁর দৃষ্টিভঙ্গি।",
    href: "https://www.linkedin.com/posts/ferdoushsaleheen_supplychain-leadership-uae-activity-7429524654819713025-c3Mg",
  },
];

export const linkedInActivityUrl =
  "https://www.linkedin.com/in/ferdoushsaleheen/recent-activity/all/";

export const linkedInPostsEn: LinkedInPost[] = [
  {
    category: "Ethics and Islamic SCM",
    title: "When trust disappears, systems fail",
    summary:
      "A reflection on how responsibility, trust, and purpose can make supply chain systems more humane, ethical, and sustainable.",
    href: linkedInPosts[0].href,
  },
  {
    category: "Logistics and resilience",
    title: "How the UAE turned disruption into a logistics advantage",
    summary:
      "An examination of how coordinated infrastructure and logistics kept goods moving during regional disruption, and what other countries can learn from the UAE model.",
    href: linkedInPosts[1].href,
  },
  {
    category: "Publishing",
    title: "A new edited book on sustainable supply chains",
    summary:
      "A preview of an industry-focused book on sustainable and resilient supply chains, forthcoming from CRC Press, Taylor & Francis Group.",
    href: linkedInPosts[2].href,
  },
  {
    category: "Strategy and leadership",
    title: "Supply chain is business strategy, not only operations",
    summary:
      "Insights drawn from two decades of transforming supply chains across FMCG, retail, manufacturing, and agribusiness.",
    href: linkedInPosts[3].href,
  },
];
