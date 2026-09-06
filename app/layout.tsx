import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/config";
import "./globals.css";

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
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="container">
            <Link href="/" className="site-title">
              {siteConfig.title}
            </Link>
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
