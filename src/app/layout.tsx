import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AppProviders } from "@/components/providers/AppProviders";
import { ScrollToTop } from "@/components/shared/ScrollToTop";
import { AccessibilityButton } from "@/components/shared/AccessibilityButton";
import { MainContent } from "@/components/layout/MainContent";
import { SITE_JOB_TITLE } from "@/lib/brand";
import { SITE_ORIGIN } from "@/lib/site";
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
  description: `${SITE_JOB_TITLE}. Platforme digitale custom pentru agenți, agențiile și dezvoltatorii din imobiliare de lux.`,
  metadataBase: new URL(SITE_ORIGIN),
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
    jobTitle: SITE_JOB_TITLE,
    url: SITE_ORIGIN,
    sameAs: sameAsUrls.filter((url) => !url.includes("TAI_")),
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Nicolae-Valentin Dincă — platforme digitale pentru imobiliare de lux",
    url: `${SITE_ORIGIN}/services`,
    description:
      "Ofertă semnătură The Luxury Agent Digital Identity™: brand digital, website și platformă custom pentru agenți, agențiile și dezvoltatori imobiliari.",
    areaServed: {
      "@type": "Country",
      name: "România",
    },
    provider: {
      "@type": "Person",
      name: "Nicolae-Valentin Dincă",
      url: SITE_ORIGIN,
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Nicolae-Valentin Dincă",
    url: SITE_ORIGIN,
    description:
      "Platforme digitale custom pentru agenți, agențiile și dezvoltatorii din imobiliare de lux. Dezvoltare web full‑stack și identitate digitală.",
    inLanguage: "ro-RO",
    publisher: {
      "@type": "Person",
      name: "Nicolae-Valentin Dincă",
      url: SITE_ORIGIN,
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
        <Script
          id="schema-org-professional-service"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify(professionalServiceSchema)}
        </Script>
        <AppProviders>
          <div
            className="min-h-screen bg-background text-foreground"
            style={{
              backgroundColor: "var(--background, #f8f5f0)",
              color: "var(--foreground, #0c0c0c)",
            }}
          >
            <a href="#main" className="skip-link">
              Sari la conținut
            </a>
            <Header />
            <MainContent>{children}</MainContent>
            <Footer />
            <AccessibilityButton />
            <ScrollToTop />
          </div>
        </AppProviders>
      </body>
    </html>
  );
}
