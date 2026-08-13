import type { Metadata } from "next";
import { InnerPage } from "@/components/inner-page";
import { LegalContent } from "@/components/legal-content";

export const metadata: Metadata = { title: "গোপনীয়তা নীতি | ড. ফেরদৌস সালেহীন", alternates: { canonical: "/privacy", languages: { "bn-BD": "/privacy", en: "/en/privacy" } } };

export default function PrivacyPage() {
  return <InnerPage eyebrow="আইনি তথ্য" title={<>গোপনীয়তা <span className="gold-text">নীতি</span></>} description="এই ওয়েবসাইটে তথ্য ব্যবহারের সংক্ষিপ্ত বিবরণ।"><LegalContent sections={[{ title: "সরাসরি তথ্য সংগ্রহ", text: "এই ওয়েবসাইটে কোনো যোগাযোগ ফর্ম, অ্যাকাউন্ট বা নিউজলেটার সাবস্ক্রিপশন নেই; তাই এসব মাধ্যমে ব্যক্তিগত তথ্য সংগ্রহ করা হয় না।" }, { title: "বাহ্যিক সেবা", text: "YouTube, Rokomari এবং LinkedIn-এর লিংক বা এমবেড ব্যবহার করলে সংশ্লিষ্ট সেবার নিজস্ব গোপনীয়তা নীতি ও কুকি ব্যবস্থা প্রযোজ্য হতে পারে।" }, { title: "যোগাযোগ", text: "প্রকাশিত ইমেইল ঠিকানা ব্যবহার করে সরাসরি যোগাযোগ করলে প্রেরিত তথ্য কেবল সেই যোগাযোগের উত্তর দেওয়ার জন্য ব্যবহৃত হবে।" }]} /></InnerPage>;
}
