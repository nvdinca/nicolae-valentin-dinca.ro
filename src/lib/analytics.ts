/**
 * Evenimente Plausible (încărcat doar după consimțământ „statistici”).
 * Dacă scriptul nu e încă activ, apelurile sunt ignorate.
 */
export function trackEvent(
  eventName: string,
  props?: Record<string, string | number | boolean>,
): void {
  if (typeof window === "undefined") return;
  const plausible = (
    window as unknown as {
      plausible?: (
        name: string,
        opts?: { props?: Record<string, unknown> },
      ) => void;
    }
  ).plausible;
  plausible?.(eventName, props ? { props } : undefined);
}
