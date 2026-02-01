import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Crimson_Pro, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { defaultLocale, isLocale } from "./lib/i18n";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
const crimsonPro = Crimson_Pro({
  variable: "--font-crimson-pro",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});
const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "Notes by Ji - Cozy Tech Blog",
  description:
    "Notes by Ji is a digital garden about JavaScript, calm design, and building for the web.",
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
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100..700&display=swap"
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${crimsonPro.variable} ${jetBrainsMono.variable} bg-background-light text-text-main font-display antialiased overflow-x-hidden min-h-screen flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
