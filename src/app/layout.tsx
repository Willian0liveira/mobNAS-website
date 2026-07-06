import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GoogleTagManager, GoogleTagManagerNoScript } from "@/lib/gtm";
import { siteMetadata } from "@/lib/metadata-config";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <head>
        <GoogleTagManager />
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="preconnect" href="https://play.google.com" />
        <link rel="dns-prefetch" href="https://play.google.com" />
      </head>
      <body className={inter.className}>
        <GoogleTagManagerNoScript />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
