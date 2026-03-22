"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  defaultConsent,
  readStoredConsent,
  writeStoredConsent,
  type StoredCookieConsent,
} from "@/lib/cookie-consent";

type CookieConsentContextValue = {
  /** false până citim din localStorage. */
  ready: boolean;
  consent: StoredCookieConsent | null;
  analyticsAllowed: boolean;
  showBanner: boolean;
  preferencesExpanded: boolean;
  setPreferencesExpanded: (open: boolean) => void;
  /** Ciornă pentru checkbox-ul „statistici” în panoul de personalizare. */
  draftAnalytics: boolean;
  setDraftAnalytics: (value: boolean) => void;
  acceptAll: () => void;
  rejectNonEssential: () => void;
  savePreferences: (analytics: boolean) => void;
  openPreferences: () => void;
};

const CookieConsentContext = createContext<CookieConsentContextValue | null>(
  null,
);

export function CookieConsentProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [ready, setReady] = useState(false);
  const [consent, setConsent] = useState<StoredCookieConsent | null>(null);
  const [showBanner, setShowBanner] = useState(false);
  const [preferencesExpanded, setPreferencesExpanded] = useState(false);
  const [draftAnalytics, setDraftAnalytics] = useState(true);

  useEffect(() => {
    const stored = readStoredConsent();
    /* eslint-disable react-hooks/set-state-in-effect -- hydratare client din localStorage */
    setConsent(stored);
    setShowBanner(stored === null);
    setDraftAnalytics(stored?.analytics ?? true);
    setReady(true);
    /* eslint-enable react-hooks/set-state-in-effect */
  }, []);

  const persist = useCallback((next: StoredCookieConsent) => {
    writeStoredConsent(next);
    setConsent(next);
    setDraftAnalytics(next.analytics);
    setShowBanner(false);
    setPreferencesExpanded(false);
    window.dispatchEvent(
      new CustomEvent("nvd:cookie-consent-changed", { detail: next }),
    );
  }, []);

  const acceptAll = useCallback(() => {
    persist(defaultConsent(true));
  }, [persist]);

  const rejectNonEssential = useCallback(() => {
    persist(defaultConsent(false));
  }, [persist]);

  const savePreferences = useCallback(
    (analytics: boolean) => {
      persist(defaultConsent(analytics));
    },
    [persist],
  );

  const openPreferences = useCallback(() => {
    const stored = readStoredConsent();
    setDraftAnalytics(stored?.analytics ?? true);
    setShowBanner(true);
    setPreferencesExpanded(stored !== null);
  }, []);

  const analyticsAllowed = Boolean(consent?.analytics);

  const value = useMemo(
    () => ({
      ready,
      consent,
      analyticsAllowed,
      showBanner,
      preferencesExpanded,
      setPreferencesExpanded,
      draftAnalytics,
      setDraftAnalytics,
      acceptAll,
      rejectNonEssential,
      savePreferences,
      openPreferences,
    }),
    [
      ready,
      consent,
      analyticsAllowed,
      showBanner,
      preferencesExpanded,
      draftAnalytics,
      acceptAll,
      rejectNonEssential,
      savePreferences,
      openPreferences,
      setPreferencesExpanded,
      setDraftAnalytics,
    ],
  );

  return (
    <CookieConsentContext.Provider value={value}>
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const ctx = useContext(CookieConsentContext);
  if (!ctx) {
    throw new Error("useCookieConsent must be used within CookieConsentProvider");
  }
  return ctx;
}
