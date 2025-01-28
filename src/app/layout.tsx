import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";
import Head from 'next/head';


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
  themeColor: '#0f172a',
};

export const metadata: Metadata = {
  title: {
    default: "BimsUI - Modern UI Component Library",
    template: "%s | BimsUI"
  },
  description: "Open-source React components for building modern web applications",
  keywords: ["React components", "bimsui", "BimsUI", "UI library", "Next.js toolkit", "design system", "frontend components", "tailwind component"],

  openGraph: {
    title: "BimsUI - Modern UI Component Library",
    description: "Open-source React components for building modern web applications",
    url: "https://ui.bimadev.xyz",
    siteName: "BimsUI",
    images: [
      {
        url: "https://ui.bimadev.xyz/images/preview-web.png",
        width: 1200,
        height: 630,
        alt: "BimsUI Component Library Preview",
      }
    ],
    locale: "id_ID",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "BimsUI - Modern UI Component Library",
    description: "TypeScript-first component library with seamless Next.js integration",
    images: ["https://ui.bimadev.xyz/images/preview-web.png"],
    creator: "@bimadev",
    site: "@bimadev",
  },

  alternates: {
    canonical: "https://ui.bimadev.xyz",
    languages: {
      'en-US': 'https://ui.bimadev.xyz',
    },
  },

  other: {
    "schema:softwareApplication": JSON.stringify({
      "@context": "https://schema.org",
      "@type": ["SoftwareApplication", "WebApplication"],
      "name": "BimsUI",
      "operatingSystem": "Web, Linux, macOS, Windows",
      "applicationCategory": "DeveloperApplication",
      "softwareVersion": "2.0.0",
      "downloadUrl": "https://ui.bimadev.xyz/docs/installation",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    })
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <Head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3345833827561984"
          crossOrigin="anonymous"></script>
        {/* Primary Meta Tags */}
        <title>BimsUI - Modern UI Component Library</title>
        <meta name="description" content="Open-source React components for building modern web applications" />
        <meta name="keywords" content="React components, UI library,UI Tailwind, BimsUI, bimsui,Tailwind Component, React Component, Nextjs Component, Web Design System, Frontend Toolkit, Next.js UI Kit, Modern Web Components" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ui.bimadev.xyz/" />
        <meta property="og:title" content="BimaDev UI | Modern Component Library for Web Developers" />
        <meta property="og:description" content="Open-source React components for building modern web applications" />
        <meta property="og:image" content="https://ui.bimadev.xyz/images/preview-web.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://ui.bimadev.xyz/" />
        <meta property="twitter:title" content="BimaDev UI | Modern Component Library for Web Developers" />
        <meta property="twitter:description" content="Open-source React components for building modern web applications" />
        <meta property="twitter:image" content="https://ui.bimadev.xyz/images/preview-web.png" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {`
        {
          "@context": "https://schema.org",
          "@type": ["WebSite", "SoftwareApplication"],
          "name": "BimaDev UI",
          "applicationCategory": "DesignApplication",
          "operatingSystem": "Web",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "150"
          }
        }
        `}
        </script>

        {/* Canonical */}
        <link rel="canonical" href="https://ui.bimadev.xyz/" />

        {/* Mobile Optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta name="theme-color" content="#2563eb" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
        <script type="text/javascript">
          {`
      var atOptions = {
        'key': '2eb2f2deeb6b827955350207a23381a0',
        'format': 'iframe',
        'height': 60,
        'width': 468,
        'params': {}
      };
    `}
        </script>
        <script
          type="text/javascript"
          src="//www.highperformanceformat.com/2eb2f2deeb6b827955350207a23381a0/invoke.js"
        ></script>
      </body>
    </html>
  );
}