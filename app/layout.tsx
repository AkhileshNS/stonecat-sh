import type { Metadata } from "next";
import Link from "next/link";
import { Gloria_Hallelujah, Shantell_Sans, JetBrains_Mono } from "next/font/google";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/config";
import "./globals.css";

// Titles and other display text: handwritten.
const gloria = Gloria_Hallelujah({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-gloria",
});

// Body / general content: handwriting-inspired but highly readable.
const shantell = Shantell_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-shantell",
});

// Code snippets: clean, legible monospace.
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains",
});

const fontVariables = `${gloria.variable} ${shantell.variable} ${jetbrainsMono.variable}`;

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s · ${siteConfig.title}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fontVariables}>
      <body>
        <header className="site-header">
          <div className="container">
            <Link href="/" className="site-title">
              {siteConfig.title}
            </Link>
            <p className="site-subtitle">
              name courtesy of Tailscale&apos;s random name generator
            </p>
          </div>
        </header>
        <main className="site-main">
          <div className="container">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
