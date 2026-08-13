export type SiteLocale = "bn" | "en";

export function isEnglishPath(pathname: string) {
  return pathname === "/en" || pathname.startsWith("/en/");
}

export function localizePath(path: string, locale: SiteLocale) {
  if (locale === "bn") return path;
  return path === "/" ? "/en" : `/en${path}`;
}

export function alternateLocalePath(pathname: string) {
  if (!isEnglishPath(pathname)) {
    return pathname === "/" ? "/en" : `/en${pathname}`;
  }

  const banglaPath = pathname.slice(3);
  return banglaPath || "/";
}
