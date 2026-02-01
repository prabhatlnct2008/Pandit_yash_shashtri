import type { Metadata, Viewport } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileCTA } from "@/components/layout/StickyMobileCTA";
import { LocalBusinessSchema, PersonSchema } from "@/components/seo/JsonLd";
import { SITE_CONFIG } from "@/lib/constants";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: "Pandit & Astrologer in South Delhi & Gurgaon | Pandit Yash Shastri",
    template: "%s | Pandit Yash Shastri",
  },
  description: SITE_CONFIG.description,
  keywords: [
    "pandit in south delhi",
    "astrologer in south delhi",
    "pandit in gurgaon",
    "puja services delhi",
    "kundli reading",
    "home puja pandit",
    "griha pravesh puja",
    "satyanarayan katha",
    "wedding pandit delhi",
    "astrology consultation",
  ],
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: "Pandit & Astrologer in South Delhi & Gurgaon | Pandit Yash Shastri",
    description: SITE_CONFIG.description,
    images: [
      {
        url: `${SITE_CONFIG.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Pandit Yash Shastri - Vedic Pandit & Astrologer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pandit & Astrologer in South Delhi & Gurgaon",
    description: SITE_CONFIG.description,
    images: [`${SITE_CONFIG.url}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: SITE_CONFIG.url,
  },
};

export const viewport: Viewport = {
  themeColor: "#7A1E1E",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        {/* Google Fonts via link tags for reliable loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Global Schema Markup */}
        <LocalBusinessSchema />
        <PersonSchema />
      </head>
      <body className="font-body antialiased bg-ivory text-charcoal min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pb-16 sm:pb-0">{children}</main>
        <Footer />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
