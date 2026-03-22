import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WebVitalsReporter } from "@/components/analytics/WebVitalsReporter";
import { ScrollToTop } from "@/components/shared/ScrollToTop";
import { AccessibilityButton } from "@/components/shared/AccessibilityButton";
import { sameAsUrls } from "@/lib/social";
import Script from "next/script";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Nicolae-Valentin Dincă",
    template: "%s | Nicolae-Valentin Dincă",
  },
  description:
    "Luxury Imobiliare Full‑Stack Custom Web Developer. Platforme digitale custom pentru agenți, agențiile și dezvoltatorii din imobiliare de lux.",
  metadataBase: new URL("https://nicolae-valentin-dinca.ro"),
  openGraph: {
    title: "Nicolae-Valentin Dincă",
    description:
      "Platforme digitale custom pentru imobiliare de lux, construite cap‑coadă de un dezvoltator full‑stack specializat.",
    url: "/",
    siteName: "Nicolae-Valentin Dincă",
    locale: "ro_RO",
    type: "website",
    images: [
      { url: "/opengraph-image", width: 1200, height: 630, alt: "Nicolae-Valentin Dincă" },
      { url: "/og-image.png", width: 1200, height: 630, alt: "Nicolae-Valentin Dincă" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nicolae-Valentin Dincă",
    description:
      "Platforme digitale custom pentru imobiliare de lux, construite cap‑coadă de un dezvoltator full‑stack specializat.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/icon.png",
  },
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: "#0c0c0c",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Nicolae-Valentin Dincă",
    jobTitle: "Luxury Imobiliare Full‑Stack Custom Web Developer",
    url: "https://nicolae-valentin-dinca.ro",
    sameAs: sameAsUrls.filter((url) => !url.includes("TAI_")),
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Nicolae-Valentin Dincă",
    url: "https://nicolae-valentin-dinca.ro",
    description:
      "Platforme digitale custom pentru agenți, agenții și dezvoltatori din imobiliare de lux. Full‑stack web development și identitate digitală.",
    inLanguage: "ro-RO",
    publisher: {
      "@type": "Person",
      name: "Nicolae-Valentin Dincă",
      url: "https://nicolae-valentin-dinca.ro",
    },
  };

  return (
    <html lang="ro">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
        style={{ backgroundColor: "#f8f5f0", color: "#0c0c0c" }}
      >
        <Script
          id="schema-org-person"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify(personSchema)}
        </Script>
        <Script
          id="schema-org-website"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify(websiteSchema)}
        </Script>
        <div
          className="min-h-screen bg-background text-foreground"
          style={{
            backgroundColor: "var(--background, #f8f5f0)",
            color: "var(--foreground, #0c0c0c)",
          }}
        >
          <WebVitalsReporter />
          <a href="#main" className="skip-link">
            Sari la conținut
          </a>
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <AccessibilityButton />
          <ScrollToTop />
        </div>
      </body>
    </html>
  );
}
