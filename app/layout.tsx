import type { Metadata } from "next";
import { cookies } from "next/headers";
import { JetBrains_Mono, Noto_Sans_KR, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { defaultLocale, isLocale } from "./lib/i18n";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
const notoSans = Noto_Sans_KR({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "Ji Hyuk Ma",
  description: "Software Engineer in Seoul.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get("LOCALE")?.value;
  const lang = isLocale(cookieLocale) ? cookieLocale : defaultLocale;

  return (
    <html className="light" lang={lang}>
      <head>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100..700&display=swap"
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${notoSans.variable} ${jetBrainsMono.variable} bg-background-light dark:bg-background-dark text-text-main antialiased overflow-x-hidden min-h-screen flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
