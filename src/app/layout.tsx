import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";
import { META_THEME_COLORS, siteConfig } from "@/config/site";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: META_THEME_COLORS.dark,
};

export const metadata: Metadata = {
  title: `${siteConfig.name} - Free UI Components`,
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  keywords: [
      "ui",
      "components",
      "Tailwind CSS",
      "Next.js",
      "shadcn",
      "Framer Motion",
      "React Library",
      "Tailwind Component",
      "Html Component",
  ],
  robots: "index, follow",
  authors: [{ name: "Bima Jovanta", url: "https://x.com/bimadevs" }],
  creator: "Bima Jovanta",
  openGraph: {
      title: siteConfig.name,
      description: siteConfig.description,
      url: siteConfig.url,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: "BimsUI",
        },
      ],
      type: "website",
  },
  twitter: {
      card: "summary_large_image",
      creator: "@bimadevs",
      title: siteConfig.name,
      description: siteConfig.description,
      images: siteConfig.ogImage,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}