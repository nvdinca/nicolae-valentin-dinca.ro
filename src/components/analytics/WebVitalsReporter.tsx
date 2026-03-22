"use client";

import { useReportWebVitals } from "next/web-vitals";

/**
 * Raportează Core Web Vitals (LCP, INP, CLS, FCP, TTFB) pentru Page Speed / Core Vitals.
 * În development loghează în consolă; poți extinde cu sendBeacon() către un endpoint de analytics.
 */
export function WebVitalsReporter() {
  useReportWebVitals((metric) => {
    if (process.env.NODE_ENV === "development") {
      console.log("[Web Vitals]", metric.name, {
        value: metric.value,
        rating: metric.rating,
        id: metric.id,
        navigationType: metric.navigationType,
      });
    }
    // Opțional: trimite la analytics (ex. Vercel Analytics, endpoint propriu)
    // if (typeof window !== "undefined" && window.__ANALYTICS_ENDPOINT__) {
    //   const body = JSON.stringify({ ...metric, path: window.location.pathname });
    //   navigator.sendBeacon?.(window.__ANALYTICS_ENDPOINT__, body);
    // }
  });

  return null;
}
