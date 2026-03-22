"use client";

import { useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(formData: FormData) {
    setState("submitting");
    setError(null);

    const payload = Object.fromEntries(formData.entries());

    const email = payload.email as string | undefined;
    if (!email || !email.includes("@")) {
      setState("idle");
      setError("Te rog adaugă un e‑mail valid.");
      return;
    }

    // Honeypot: dacă acest câmp e completat, nu facem nimic (probabil bot).
    if (typeof payload.company === "string" && payload.company.trim().length > 0) {
      setState("idle");
      return;
    }

    const name = (payload.name as string | undefined) ?? "";
    const business = (payload.business as string | undefined) ?? "";
    const market = (payload.market as string | undefined) ?? "";
    const website = (payload.website as string | undefined) ?? "";
    const budget = (payload.budget as string | undefined) ?? "";
    const goal = (payload.goal as string | undefined) ?? "";
    const details = (payload.details as string | undefined) ?? "";

    const lines = [
      "Salut, sunt " + name,
      "",
      "Tocmai am completat formularul de pe site.",
      business && `Business / Rol: ${business}`,
      market && `Locație / Piață: ${market}`,
      website && `Site existent: ${website}`,
      budget && `Buget orientativ: ${budget}`,
      goal && `Obiectiv principal: ${goal}`,
      details && `Alte detalii: ${details}`,
    ].filter(Boolean) as string[];

    const message = encodeURIComponent(lines.join("\n"));
    const url = `https://wa.me/40784493923?text=${message}`;

    window.location.href = url;
  }

  return (
    <form action={onSubmit} className="space-y-5">
      <input
        type="text"
        name="company"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />
      <div className="grid gap-5 md:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm text-foreground/80">Nume complet</span>
          <input
            required
            name="name"
            className="w-full rounded-xl border border-foreground/15 bg-background px-4 py-3 text-sm outline-none focus:border-foreground/30"
          />
        </label>
        <label className="space-y-2">
          <span className="text-sm text-foreground/80">E‑mail</span>
          <input
            required
            type="email"
            name="email"
            className="w-full rounded-xl border border-foreground/15 bg-background px-4 py-3 text-sm outline-none focus:border-foreground/30"
          />
        </label>
      </div>

      <label className="space-y-2 block">
        <span className="text-sm text-foreground/80">Business / Brand + rol</span>
        <input
          required
          name="business"
          placeholder="Ex: Agent independent / Agenție / Developer"
          className="w-full rounded-xl border border-foreground/15 bg-background px-4 py-3 text-sm outline-none focus:border-foreground/30"
        />
      </label>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm text-foreground/80">Locație / Piață</span>
          <input
            required
            name="market"
            placeholder="Oraș, țară"
            className="w-full rounded-xl border border-foreground/15 bg-background px-4 py-3 text-sm outline-none focus:border-foreground/30"
          />
        </label>
        <label className="space-y-2">
          <span className="text-sm text-foreground/80">Site existent</span>
          <input
            name="website"
            placeholder="Link (opțional)"
            className="w-full rounded-xl border border-foreground/15 bg-background px-4 py-3 text-sm outline-none focus:border-foreground/30"
          />
        </label>
      </div>

      <label className="space-y-2 block">
        <span className="text-sm text-foreground/80">Buget orientativ</span>
        <select
          required
          name="budget"
          className="w-full rounded-xl border border-foreground/15 bg-background px-4 py-3 text-sm outline-none focus:border-foreground/30"
          defaultValue=""
        >
          <option value="" disabled>
            Selectează…
          </option>
          <option value="Sub 3.000 €">Sub 3.000 €</option>
          <option value="3.000 – 5.000 €">3.000 – 5.000 €</option>
          <option value="5.000 – 8.000 €">5.000 – 8.000 €</option>
          <option value="7.000 – 12.000 €">7.000 – 12.000 €</option>
          <option value="Peste 12.000 €">Peste 12.000 €</option>
        </select>
        <p className="text-xs text-foreground/60">
          Intervale orientative, aliniate cu oferta The Luxury Agent Digital Identity™. Le ajustăm în call în funcție de proiect.
        </p>
      </label>

      <label className="space-y-2 block">
        <span className="text-sm text-foreground/80">
          Obiectiv principal al platformei
        </span>
        <textarea
          required
          name="goal"
          placeholder="Ce vrei să schimbe sau să îmbunătățească această platformă pentru tine?"
          className="min-h-28 w-full rounded-xl border border-foreground/15 bg-background px-4 py-3 text-sm outline-none focus:border-foreground/30"
        />
      </label>

      <label className="space-y-2 block">
        <span className="text-sm text-foreground/80">Alte detalii relevante</span>
        <textarea
          name="details"
          placeholder="Orice alt context pe care crezi că ar trebui să îl știu."
          className="min-h-24 w-full rounded-xl border border-foreground/15 bg-background px-4 py-3 text-sm outline-none focus:border-foreground/30"
        />
      </label>

      {error ? (
        <p className="text-sm text-red-700">{error}</p>
      ) : (
        <p className="text-xs text-foreground/60">
          Trimițând formularul, confirmi că informațiile sunt corecte.
        </p>
      )}

      <button
        type="submit"
        disabled={state === "submitting"}
        className="inline-flex w-full items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background hover:bg-foreground/90 disabled:opacity-60 transition-colors"
      >
        {state === "submitting" ? "Se trimite…" : "Trimite aplicația"}
      </button>
    </form>
  );
}

