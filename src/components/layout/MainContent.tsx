"use client";

import { useCookieConsent } from "@/components/cookie-consent/CookieConsentProvider";
import { cn } from "@/lib/cn";

/** Spațiu jos când bannerul de cookie este vizibil, ca să nu acopere conținutul. */
export function MainContent({ children }: { children: React.ReactNode }) {
  const { ready, showBanner } = useCookieConsent();

  return (
    <main
      id="main"
      className={cn(ready && showBanner && "pb-40 md:pb-44")}
    >
      {children}
    </main>
  );
}
