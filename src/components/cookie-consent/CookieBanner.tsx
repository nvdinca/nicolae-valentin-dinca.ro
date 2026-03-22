"use client";

import Link from "next/link";
import { useId } from "react";
import { useCookieConsent } from "./CookieConsentProvider";

export function CookieBanner() {
  const {
    ready,
    showBanner,
    acceptAll,
    rejectNonEssential,
    savePreferences,
    consent,
    preferencesExpanded,
    setPreferencesExpanded,
    draftAnalytics,
    setDraftAnalytics,
  } = useCookieConsent();

  const titleId = useId();

  function togglePersonalize() {
    if (!preferencesExpanded) {
      setDraftAnalytics(consent?.analytics ?? true);
    }
    setPreferencesExpanded(!preferencesExpanded);
  }

  if (!ready || !showBanner) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[100] border-t border-foreground/15 bg-background/95 p-4 shadow-[0_-8px_32px_rgba(12,12,12,0.12)] backdrop-blur-md md:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <div className="mx-auto flex max-w-4xl flex-col gap-4">
        <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between md:gap-8">
          <div className="min-w-0 flex-1 space-y-2">
            <h2
              id={titleId}
              className="font-serif text-lg font-medium tracking-tight text-foreground md:text-xl"
            >
              Cookie‑uri și confidențialitate
            </h2>
            <p className="text-sm leading-relaxed text-foreground/80">
              Folosim cookie‑uri strict necesare pentru funcționarea site‑ului și,
              doar cu acordul tău, pentru măsurători tehnice anonime (performanță
              web). Nu folosim cookie‑uri de publicitate. Poți accepta tot, refuza
              pe cele neesențiale sau{" "}
              <button
                type="button"
                onClick={togglePersonalize}
                className="font-medium text-foreground underline decoration-foreground/35 underline-offset-2 hover:decoration-foreground/60"
                aria-expanded={preferencesExpanded}
              >
                personaliza
              </button>
              . Detalii în{" "}
              <Link
                href="/privacy"
                className="font-medium text-foreground underline decoration-foreground/35 underline-offset-2 hover:decoration-foreground/60"
              >
                politica de confidențialitate
              </Link>
              .
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row sm:flex-wrap md:flex-col lg:flex-row">
            <button
              type="button"
              onClick={acceptAll}
              className="inline-flex items-center justify-center rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
            >
              Acceptă toate
            </button>
            <button
              type="button"
              onClick={rejectNonEssential}
              className="inline-flex items-center justify-center rounded-full border border-foreground/20 px-5 py-2.5 text-sm font-medium text-foreground/90 transition-colors hover:border-foreground/35 hover:bg-surface/80"
            >
              Doar necesare
            </button>
          </div>
        </div>

        {preferencesExpanded && (
          <div
            className="rounded-2xl border border-foreground/10 bg-surface/90 p-4"
            role="region"
            aria-label="Preferințe cookie‑uri"
          >
            <ul className="space-y-4 text-sm text-foreground/85">
              <li className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-medium text-foreground">Necesare</p>
                  <p className="mt-1 text-foreground/70">
                    Obligatorii pentru securitate, încărcare și memorarea
                    preferințelor tale (inclusiv această alegere).
                  </p>
                </div>
                <span className="shrink-0 rounded-full border border-foreground/15 px-3 py-1 text-xs text-foreground/60">
                  Întotdeauna active
                </span>
              </li>
              <li className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-medium text-foreground">Statistici (anonime)</p>
                  <p className="mt-1 text-foreground/70">
                    Core Web Vitals și metrici de performanță, fără profilare și
                    fără transmitere către rețele de reclame.
                  </p>
                </div>
                <label className="flex cursor-pointer items-center gap-3 sm:flex-row-reverse">
                  <input
                    type="checkbox"
                    checked={draftAnalytics}
                    onChange={(e) => setDraftAnalytics(e.target.checked)}
                    className="h-4 w-4 rounded border-foreground/30 text-foreground accent-foreground"
                  />
                  <span className="text-xs text-foreground/65">Activează</span>
                </label>
              </li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => savePreferences(draftAnalytics)}
                className="inline-flex items-center justify-center rounded-full bg-foreground px-5 py-2 text-sm font-medium text-background hover:bg-foreground/90"
              >
                Salvează preferințele
              </button>
              <button
                type="button"
                onClick={() => setPreferencesExpanded(false)}
                className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm text-foreground/75 hover:text-foreground"
              >
                Înapoi
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
