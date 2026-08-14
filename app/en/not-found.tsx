import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function EnglishNotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-[#050505] px-6 text-center text-white">
      <div>
        <span className="gold-text text-8xl font-semibold">404</span>
        <h1 className="mt-6 text-4xl font-medium">This page could not be found.</h1>
        <p className="mt-3 text-[#928e84]">The address may be incorrect, or the page may have moved.</p>
        <Button asChild className="mt-8"><Link href="/en"><ArrowLeft className="size-4" /> Back to home</Link></Button>
      </div>
    </main>
  );
}
