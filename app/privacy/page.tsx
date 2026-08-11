import type { Metadata } from "next";
import { InnerPage } from "@/components/inner-page";
import { LegalContent } from "@/components/legal-content";

export const metadata: Metadata = { title: "গোপনীয়তা নীতি | ড. ফেরদৌস সালেহীন" };

export default function PrivacyPage() {
  return <InnerPage eyebrow="আইনি তথ্য" title={<>গোপনীয়তা <span className="gold-text">নীতি</span></>} description="আপনার তথ্য কীভাবে সংগ্রহ, ব্যবহার ও সুরক্ষিত রাখা হবে—তার স্বচ্ছ ব্যাখ্যা।"><LegalContent sections={[{ title: "আমরা যে তথ্য সংগ্রহ করি", text: "যোগাযোগ, বই অর্ডার, নিউজলেটার বা বক্তব্যের আমন্ত্রণ পাঠানোর সময় নাম, ইমেইল, ফোন নম্বর ও প্রাসঙ্গিক বার্তার তথ্য সংগ্রহ করা হতে পারে।" }, { title: "তথ্যের ব্যবহার", text: "আপনার অনুরোধের উত্তর দেওয়া, অর্ডার সহায়তা, অনুমোদিত আপডেট পাঠানো এবং প্ল্যাটফর্মের অভিজ্ঞতা উন্নত করার উদ্দেশ্যেই তথ্য ব্যবহার করা হবে।" }, { title: "আপনার অধিকার", text: "আপনি আপনার সংরক্ষিত তথ্য দেখা, সংশোধন বা মুছে ফেলার অনুরোধ করতে পারবেন। চূড়ান্ত যোগাযোগের ঠিকানা প্রকাশের আগে এই নীতি হালনাগাদ হবে।" }]} /></InnerPage>;
}
