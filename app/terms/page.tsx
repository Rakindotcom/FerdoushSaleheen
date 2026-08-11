import type { Metadata } from "next";
import { InnerPage } from "@/components/inner-page";
import { LegalContent } from "@/components/legal-content";

export const metadata: Metadata = { title: "ব্যবহারের শর্তাবলি | ড. ফেরদৌস সালেহীন" };

export default function TermsPage() {
  return <InnerPage eyebrow="আইনি তথ্য" title={<>ব্যবহারের <span className="gold-text">শর্তাবলি</span></>} description="এই প্ল্যাটফর্মের কনটেন্ট, রিসোর্স ও সেবাগুলো ব্যবহারের প্রাথমিক শর্ত।"><LegalContent sections={[{ title: "কনটেন্টের ব্যবহার", text: "ওয়েবসাইটের লেখা, অডিও, ভিডিও, বইয়ের অংশ ও ভিজ্যুয়াল কনটেন্ট অনুমতি ছাড়া বাণিজ্যিকভাবে পুনঃপ্রকাশ করা যাবে না। উপকারী কনটেন্টের মূল লিংক শেয়ার করা যাবে।" }, { title: "ধর্মীয় কনটেন্ট", text: "কুরআনিক টেক্সট, অনুবাদ, তাফসির ও লেখকের অনুধ্যান আলাদা পরিচয়ে প্রকাশ করা হবে। কোনো অস্পষ্টতা দেখলে যোগাযোগের মাধ্যমে জানাতে অনুরোধ করা হচ্ছে।" }, { title: "সেবার পরিবর্তন", text: "কনটেন্ট, ফিচার, প্রাপ্যতা ও শর্ত প্রয়োজন অনুযায়ী হালনাগাদ হতে পারে। গুরুত্বপূর্ণ পরিবর্তন এই পৃষ্ঠায় প্রকাশ করা হবে।" }]} /></InnerPage>;
}
