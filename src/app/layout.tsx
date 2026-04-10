import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

const PHONE = "+919372923132";
const PHONE_DISPLAY = "+91 93729 23132";
const BUSINESS_NAME = "Mumbai Cabs Rental";
const SITE_URL = "https://www.mumbaicabsservice.com";

export const metadata: Metadata = {
  title: "Mumbai Cabs Rental | Affordable Taxi Service in Mumbai — 24/7 Available",
  description:
    "Book affordable, reliable cab service in Mumbai. Airport transfers, local rentals, and outstation trips. AC cabs with verified drivers. Call now: " +
    PHONE_DISPLAY,
  keywords: [
    "Mumbai cab booking",
    "taxi in Mumbai",
    "Mumbai airport cab",
    "outstation cab Mumbai",
    "affordable taxi Mumbai",
    "Mumbai cab rental",
    "24/7 cab service Mumbai",
  ],
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  icons: {
    icon: "/Mumbai-cabs-logo.svg",
    apple: "/Mumbai-cabs-logo.svg",
  },
  openGraph: {
    title: "Mumbai Cabs Rental | Affordable Taxi Service in Mumbai",
    description:
      "Reliable cab service in Mumbai — airport transfers, local rentals & outstation trips. Verified drivers, AC cabs, 24/7 available.",
    url: SITE_URL,
    siteName: BUSINESS_NAME,
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mumbai Cabs Rental | Affordable Taxi Service",
    description: "Book your Mumbai cab now — airport, local & outstation trips. AC cabs, verified drivers.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "TaxiService"],
      name: BUSINESS_NAME,
      url: SITE_URL,
      telephone: PHONE,
      priceRange: "₹₹",
      description:
        "Affordable, reliable cab service in Mumbai. Airport transfers, local rentals, and outstation trips with AC cabs and verified drivers.",
      areaServed: [
        "Mumbai",
        "Navi Mumbai",
        "Thane",
        "Pune",
        "Lonavala",
        "Shirdi",
        "Nashik",
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Mumbai",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
      sameAs: [`https://wa.me/${PHONE.replace("+", "")}`],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-3KQCQZL90E"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-3KQCQZL90E');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
