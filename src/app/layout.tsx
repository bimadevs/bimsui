import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";

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
  description: "Build production-ready applications faster and beautifully crafted React components. Enterprise-grade UI library with dark mode, RTL support, and WCAG accessibility.",
  keywords: ["React components","bimsui","BimsUI", "UI library", "Next.js toolkit", "design system", "frontend components", "tailwind component"],
  
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        {children}
        <Analytics/>
        
        {/* Global Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "BimsUI",
              "url": "https://ui.bimadev.xyz",
              "logo": "https://ui.bimadev.xyz/favicon.ico",
              "sameAs": [
                "https://instagram.com/biimaa_jo",
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "bimaj0206@gmail.com",
                "contactType": "technical support",
                "availableLanguage": "English"
              }
            })
          }}
        />
      </body>
    </html>
  );
}