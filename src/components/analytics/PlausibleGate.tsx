"use client";

import Script from "next/script";
import { useCookieConsent } from "@/components/cookie-consent/CookieConsentProvider";

/** Încarcă Plausible doar după consimțământ și dacă e setat NEXT_PUBLIC_PLAUSIBLE_DOMAIN. */
export function PlausibleGate() {
  const { ready, analyticsAllowed } = useCookieConsent();
  const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN?.trim();

  if (!ready || !analyticsAllowed || !domain) return null;

  return (
    <Script
      id="plausible-analytics"
      src="https://plausible.io/js/script.js"
      data-domain={domain}
      strategy="afterInteractive"
    />
  );
}
