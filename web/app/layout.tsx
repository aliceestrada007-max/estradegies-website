import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./_components/Header";
import { Footer } from "./_components/Footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const siteUrl = "https://estradegies.com";
const siteTitle = "Estradegies — Nonprofit Strategy & Sustainability";
const siteDescription =
  "Estradegies partners with nonprofits and mission-driven organizations to align strategy, revenue, and leadership for durable, long-term impact.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Estradegies",
  },
  description: siteDescription,
  keywords: [
    "Estradegies",
    "nonprofit consulting",
    "nonprofit strategy",
    "Alice Estrada",
    "nonprofit sustainability",
    "nonprofit revenue diversification",
    "interim executive leadership nonprofit",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Estradegies",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/headshot.jpg",
        width: 1200,
        height: 1200,
        alt: "Alice Estrada, Founder of Estradegies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/headshot.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Estradegies",
  alternateName: "Estradegies Nonprofit Consulting",
  url: siteUrl,
  logo: `${siteUrl}/logo/estradegies-logo.svg`,
  image: `${siteUrl}/headshot.jpg`,
  description: siteDescription,
  email: "estradegies@gmail.com",
  telephone: "+1-717-253-6174",
  areaServed: "US",
  sameAs: ["https://www.linkedin.com/in/alice-estrada-097245a/"],
  founder: {
    "@type": "Person",
    name: "Alice Estrada",
    jobTitle: "Founder & Principal",
    sameAs: ["https://www.linkedin.com/in/alice-estrada-097245a/"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
