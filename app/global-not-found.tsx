import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Link from "next/link";

import { getSiteUrl } from "@/lib/seo";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: getSiteUrl(),
  title: "Page not found | Dr. Ferdoush Saleheen",
  description: "The requested page could not be found on the official website of Dr. Ferdoush Saleheen.",
  robots: { index: false, follow: true },
};

export default function GlobalNotFound() {
  return (
    <html lang="en" className={montserrat.variable}>
      <body>
        <main className="grid min-h-screen place-items-center bg-[#050505] px-6 text-center text-white">
          <div>
            <span className="gold-text text-8xl font-semibold">404</span>
            <h1 className="mt-6 text-4xl font-medium">This page could not be found.</h1>
            <p className="mt-3 text-[#928e84]">Check the address or return to the homepage.</p>
            <Link href="/" className="mt-8 inline-flex min-h-11 items-center rounded-full bg-[#d6a642] px-6 font-semibold text-black">
              Return home
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}
