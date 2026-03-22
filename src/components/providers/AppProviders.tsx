"use client";

import { CookieConsentProvider } from "@/components/cookie-consent/CookieConsentProvider";
import { CookieBanner } from "@/components/cookie-consent/CookieBanner";
import { PlausibleGate } from "@/components/analytics/PlausibleGate";
import { WebVitalsGate } from "@/components/analytics/WebVitalsGate";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <CookieConsentProvider>
      <WebVitalsGate />
      <PlausibleGate />
      {children}
      <CookieBanner />
    </CookieConsentProvider>
  );
}
