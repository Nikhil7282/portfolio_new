import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBoot, { THEME_COLORS } from "./ClientBoot";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nikhil",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Stable, SSR-safe defaults only. No inline scripts here. */}
        <meta name="theme-color" content={THEME_COLORS.light} />
        <meta name="color-scheme" content="light dark" />
      </head>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          enableSystem
          disableTransitionOnChange
          enableColorScheme
          storageKey="theme"
          defaultTheme="system"
        >
          <ClientBoot /> {/* runs after hydration; no head diffs */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
