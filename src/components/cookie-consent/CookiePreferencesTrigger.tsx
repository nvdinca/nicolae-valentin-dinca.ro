"use client";

import { useCookieConsent } from "./CookieConsentProvider";

type Props = {
  className?: string;
  children?: React.ReactNode;
};

/** Link sau buton care redeschide panoul de cookie‑uri (ex. din footer sau din politica de confidențialitate). */
export function CookiePreferencesTrigger({
  className,
  children = "Preferințe cookie‑uri",
}: Props) {
  const { openPreferences } = useCookieConsent();

  return (
    <button
      type="button"
      onClick={openPreferences}
      className={
        className ??
        "text-foreground/70 underline decoration-foreground/30 underline-offset-2 hover:text-foreground hover:decoration-foreground/50"
      }
    >
      {children}
    </button>
  );
}
