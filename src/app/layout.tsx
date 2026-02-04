import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import ScrollProgress from "@/components/animations/ScrollProgress";
import NoiseOverlay from "@/components/animations/NoiseOverlay";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "김태현 | Full-Stack Developer",
  description:
    "React, Next.js, Django, Flask 기반 풀스택 개발자. AI/ML 서비스 및 모바일 앱 개발 경험.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <ScrollProgress />
          <NoiseOverlay />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
