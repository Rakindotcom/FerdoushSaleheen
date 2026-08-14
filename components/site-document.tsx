import { Montserrat } from "next/font/google";
import "@fontsource/anek-bangla/400.css";
import "@fontsource/anek-bangla/500.css";
import "@fontsource/anek-bangla/600.css";
import "@fontsource/anek-bangla/700.css";

import { LanguagePreferenceGate } from "@/components/language-preference-gate";
import { SiteStructuredData } from "@/components/structured-data";
import "@/app/globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export function SiteDocument({
  children,
  language,
}: Readonly<{
  children: React.ReactNode;
  language: "bn" | "en";
}>) {
  return (
    <html lang={language} className={montserrat.variable} data-scroll-behavior="smooth">
      <body>
        <SiteStructuredData />
        {children}
        <LanguagePreferenceGate />
      </body>
    </html>
  );
}
