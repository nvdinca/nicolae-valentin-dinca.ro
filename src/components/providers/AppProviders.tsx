"use client";

import { CookieConsentProvider } from "@/components/cookie-consent/CookieConsentProvider";
import { CookieBanner } from "@/components/cookie-consent/CookieBanner";
import { WebVitalsGate } from "@/components/analytics/WebVitalsGate";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <CookieConsentProvider>
      <WebVitalsGate />
      {children}
      <CookieBanner />
    </CookieConsentProvider>
  );
}
