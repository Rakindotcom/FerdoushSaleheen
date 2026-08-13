"use client";

import { useEffect } from "react";

export function DocumentLanguage({ language }: { language: "bn" | "en" }) {
  useEffect(() => {
    const previousLanguage = document.documentElement.lang;
    document.documentElement.lang = language;
    return () => {
      document.documentElement.lang = previousLanguage;
    };
  }, [language]);

  return null;
}
