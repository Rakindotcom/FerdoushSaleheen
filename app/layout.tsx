import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "@fontsource/anek-bangla/400.css";
import "@fontsource/anek-bangla/500.css";
import "@fontsource/anek-bangla/600.css";
import "@fontsource/anek-bangla/700.css";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: "ড. ফেরদৌস সালেহীন | Official Digital Platform",
    template: "%s",
  },
  description:
    "ড. ফেরদৌস সালেহীনের বই, পডকাস্ট, অডিওবুক, কুরআনিক অনুধ্যান ও দাওয়াহ কার্যক্রমের ডিজিটাল প্ল্যাটফর্ম।",
  keywords: [
    "ফেরদৌস সালেহীন",
    "সুরা আল-ফাতিহা",
    "বাংলা ইসলামিক বই",
    "কুরআনিক অনুধ্যান",
  ],
  openGraph: {
    title: "ড. ফেরদৌস সালেহীন",
    description: "জ্ঞান, অনুধ্যান ও জীবনের প্রতিফলন।",
    locale: "bn_BD",
    type: "website",
    images: ["/FSwithTheBook.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="bn" className={montserrat.variable}>
      <body>{children}</body>
    </html>
  );
}
