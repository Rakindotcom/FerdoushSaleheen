import type { SiteLocale } from "@/lib/locale";

export const languagePreferenceKey = "ferdoush-saleheen-language";

function isSiteLocale(value: string | null): value is SiteLocale {
  return value === "bn" || value === "en";
}

export function readLanguagePreference(): SiteLocale | null {
  if (typeof window === "undefined") return null;

  try {
    const stored = window.localStorage.getItem(languagePreferenceKey);
    if (isSiteLocale(stored)) return stored;
  } catch {
    // Cookie fallback keeps the preference usable when storage is unavailable.
  }

  const cookieValue = document.cookie
    .split("; ")
    .find((cookie) => cookie.startsWith(`${languagePreferenceKey}=`))
    ?.split("=")[1] ?? null;

  return isSiteLocale(cookieValue) ? cookieValue : null;
}

export function saveLanguagePreference(locale: SiteLocale) {
  try {
    window.localStorage.setItem(languagePreferenceKey, locale);
  } catch {
    // The cookie below remains available as a persistence fallback.
  }

  document.cookie = `${languagePreferenceKey}=${locale}; Path=/; Max-Age=31536000; SameSite=Lax`;
}
