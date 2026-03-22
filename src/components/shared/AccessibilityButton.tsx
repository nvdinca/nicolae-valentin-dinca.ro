"use client";

import { useState, useEffect } from "react";

const STORAGE_KEY = "a11y-settings";

type A11ySettings = {
  largeText: boolean;
  highContrast: boolean;
  reduceMotion: boolean;
};

const defaultSettings: A11ySettings = {
  largeText: false,
  highContrast: false,
  reduceMotion: false,
};

function getStored(): A11ySettings {
  if (typeof window === "undefined") return defaultSettings;
  try {
    const s = localStorage.getItem(STORAGE_KEY);
    if (s) return { ...defaultSettings, ...JSON.parse(s) };
  } catch {
    /* ignore invalid JSON */
  }
  return defaultSettings;
}

function applySettings(s: A11ySettings) {
  const d = document.documentElement;
  d.classList.toggle("a11y-large-text", s.largeText);
  d.classList.toggle("a11y-high-contrast", s.highContrast);
  d.classList.toggle("a11y-reduce-motion", s.reduceMotion);
}

export function AccessibilityButton() {
  const [open, setOpen] = useState(false);
  const [settings, setSettings] = useState<A11ySettings>(defaultSettings);

  useEffect(() => {
    const s = getStored();
    // Hydrate from localStorage after mount (required for client-only storage).
    // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional sync after SSR/hydration
    setSettings(s);
    applySettings(s);
  }, []);

  function update(partial: Partial<A11ySettings>) {
    const next = { ...settings, ...partial };
    setSettings(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      /* ignore quota / private mode */
    }
    applySettings(next);
  }

  return (
    <div className="fixed bottom-8 left-8 z-50 flex flex-col items-start gap-2">
      {open && (
        <div
          className="flex flex-col gap-3 rounded-2xl border border-foreground/15 bg-background p-4 shadow-lg"
          role="dialog"
          aria-label="Opțiuni accesibilitate"
        >
          <p className="text-sm font-medium text-foreground">
            Opțiuni accesibilitate
          </p>
          <label className="flex cursor-pointer items-center gap-3 text-sm text-foreground/90">
            <input
              type="checkbox"
              checked={settings.largeText}
              onChange={(e) => update({ largeText: e.target.checked })}
              className="h-4 w-4 rounded border-foreground/30"
            />
            <span>Mărește textul</span>
          </label>
          <label className="flex cursor-pointer items-center gap-3 text-sm text-foreground/90">
            <input
              type="checkbox"
              checked={settings.highContrast}
              onChange={(e) => update({ highContrast: e.target.checked })}
              className="h-4 w-4 rounded border-foreground/30"
            />
            <span>Contrast ridicat</span>
          </label>
          <label className="flex cursor-pointer items-center gap-3 text-sm text-foreground/90">
            <input
              type="checkbox"
              checked={settings.reduceMotion}
              onChange={(e) => update({ reduceMotion: e.target.checked })}
              className="h-4 w-4 rounded border-foreground/30"
            />
            <span>Reduce mișcarea</span>
          </label>
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label={open ? "Închide opțiuni accesibilitate" : "Deschide opțiuni accesibilitate"}
        className="rounded-full border border-foreground/15 bg-background px-4 py-2.5 text-sm font-medium text-foreground shadow-lg transition-colors hover:border-foreground/30 hover:bg-surface focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2 focus:ring-offset-background"
      >
        Accesibilitate
      </button>
    </div>
  );
}
