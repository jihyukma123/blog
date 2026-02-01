import { NextResponse } from "next/server";

const locales = ["en", "ko"];

const publicFile = /\.[^/]+$/;

const detectLocale = (request: any) => {
  const country = request.headers.get("x-vercel-ip-country");
  if (country === "KR") {
    return "ko";
  }

  const acceptLanguage = request.headers.get("accept-language");
  if (acceptLanguage && acceptLanguage.toLowerCase().includes("ko")) {
    return "ko";
  }

  return "en";
};

export function middleware(request: any) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/favicon") ||
    pathname.startsWith("/icon") ||
    pathname.startsWith("/robots.txt") ||
    pathname.startsWith("/sitemap.xml") ||
    pathname.startsWith("/images") ||
    publicFile.test(pathname)
  ) {
    return NextResponse.next();
  }

  const localeFromPath = locales.find(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (localeFromPath) {
    const response = NextResponse.next();
    response.cookies.set("LOCALE", localeFromPath, { path: "/" });
    return response;
  }

  const locale = detectLocale(request);
  const nextUrl = request.nextUrl.clone();
  nextUrl.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;

  const response = NextResponse.redirect(nextUrl);
  response.cookies.set("LOCALE", locale, { path: "/" });
  return response;
}

export const config = {
  matcher: ["/((?!_next).*)"],
};
