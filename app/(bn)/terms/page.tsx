import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import { InnerPage } from "@/components/inner-page";
import { LegalContent } from "@/components/legal-content";

export const metadata: Metadata = createPageMetadata({
  locale: "bn",
  title: "ব্যবহারের শর্তাবলি",
  description: "ড. ফেরদৌস সালেহীনের অফিসিয়াল ওয়েবসাইটের প্রকাশিত তথ্য, ছবি ও বাহ্যিক কনটেন্ট ব্যবহারের শর্তাবলি।",
  banglaPath: "/terms",
  englishPath: "/en/terms",
  noIndex: true,
});

export default function TermsPage() {
  return <InnerPage eyebrow="আইনি তথ্য" title={<>ব্যবহারের <span className="gold-text">শর্তাবলি</span></>} description="এই ওয়েবসাইটের প্রকাশিত তথ্য ও কনটেন্ট ব্যবহারের শর্ত।"><LegalContent sections={[{ title: "কনটেন্টের ব্যবহার", text: "ওয়েবসাইটের লেখা, ছবি ও অন্যান্য প্রকাশিত কনটেন্ট অনুমতি ছাড়া বাণিজ্যিকভাবে পুনঃপ্রকাশ করা যাবে না। মূল পৃষ্ঠার লিংক শেয়ার করা যাবে।" }, { title: "বাহ্যিক কনটেন্ট", text: "এমবেড করা YouTube ভিডিও এবং Rokomari বা LinkedIn-এর মতো বাহ্যিক সেবার কনটেন্ট ও প্রাপ্যতা সংশ্লিষ্ট সেবা প্রদানকারীর নিয়ন্ত্রণাধীন।" }, { title: "তথ্যের যথার্থতা", text: "পেশাগত পরিচিতি ও প্রকাশনা-সংক্রান্ত তথ্য প্রয়োজন অনুযায়ী সংশোধন করা হতে পারে।" }]} /></InnerPage>;
}
