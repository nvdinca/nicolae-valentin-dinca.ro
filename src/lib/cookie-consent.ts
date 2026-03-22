export const COOKIE_CONSENT_STORAGE_KEY = "nvd-cookie-consent-v1";
export const COOKIE_CONSENT_VERSION = 1;

export type StoredCookieConsent = {
  version: number;
  /** Întotdeauna true — necesare pentru funcționarea site-ului și memorarea alegerii tale. */
  necessary: true;
  /** Statistici anonime (ex. Core Web Vitals), fără profilare publicitară. */
  analytics: boolean;
  updatedAt: string;
};

export function defaultConsent(analytics: boolean): StoredCookieConsent {
  return {
    version: COOKIE_CONSENT_VERSION,
    necessary: true,
    analytics,
    updatedAt: new Date().toISOString(),
  };
}

export function readStoredConsent(): StoredCookieConsent | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<StoredCookieConsent>;
    if (parsed.version !== COOKIE_CONSENT_VERSION) return null;
    if (parsed.necessary !== true) return null;
    if (typeof parsed.analytics !== "boolean") return null;
    return {
      version: COOKIE_CONSENT_VERSION,
      necessary: true,
      analytics: parsed.analytics,
      updatedAt:
        typeof parsed.updatedAt === "string"
          ? parsed.updatedAt
          : new Date().toISOString(),
    };
  } catch {
    return null;
  }
}

export function writeStoredConsent(c: StoredCookieConsent): void {
  localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, JSON.stringify(c));
}
