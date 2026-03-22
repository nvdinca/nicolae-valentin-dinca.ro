"use client";

import { WebVitalsReporter } from "./WebVitalsReporter";
import { useCookieConsent } from "@/components/cookie-consent/CookieConsentProvider";

/** Încarcă raportarea Web Vitals doar dacă utilizatorul a acceptat categoria „statistici”. */
export function WebVitalsGate() {
  const { ready, analyticsAllowed } = useCookieConsent();
  if (!ready || !analyticsAllowed) return null;
  return <WebVitalsReporter />;
}
