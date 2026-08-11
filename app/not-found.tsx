import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-[#050505] px-6 text-center text-white">
      <div>
        <span className="gold-text text-8xl font-semibold">৪০৪</span>
        <h1 className="mt-6 text-4xl font-medium">এই পৃষ্ঠাটি পাওয়া যায়নি।</h1>
        <p className="mt-3 text-[#928e84]">আপনি যে ঠিকানাটি খুঁজছেন, সেটি হয়তো সরানো হয়েছে।</p>
        <Button asChild className="mt-8"><Link href="/"><ArrowLeft className="size-4" /> হোমে ফিরুন</Link></Button>
      </div>
    </main>
  );
}
