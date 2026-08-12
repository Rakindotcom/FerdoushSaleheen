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
    "ড. ফেরদৌস সালেহীনের পেশাগত পরিচিতি, প্রকাশিত বই এবং নির্বাচিত পডকাস্টের অফিসিয়াল ডিজিটাল প্ল্যাটফর্ম।",
  keywords: [
    "ফেরদৌস সালেহীন",
    "সুরা আল-ফাতিহা",
    "বাংলা ইসলামিক বই",
    "কুরআনিক অনুধ্যান",
  ],
  openGraph: {
    title: "ড. ফেরদৌস সালেহীন",
    description: "পেশাগত পরিচিতি, প্রকাশিত বই এবং নির্বাচিত পডকাস্ট।",
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
