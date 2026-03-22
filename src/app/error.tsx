"use client";

import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/shared/Section";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <>
      <Section>
        <Container>
          <div className="max-w-2xl space-y-6">
            <p className="text-sm tracking-[0.2em] text-foreground/60">
              EROARE
            </p>
            <h1 className="font-serif text-4xl tracking-tight md:text-5xl">
              Ceva nu a mers bine
            </h1>
            <p className="text-lg leading-relaxed text-foreground/80">
              A apărut o problemă neașteptată. Poți încerca din nou sau să revii
              la prima pagină.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={reset}
                className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background hover:bg-foreground/90 transition-colors"
              >
                Încearcă din nou
              </button>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full border border-foreground/15 px-6 py-3 text-sm font-medium text-foreground/80 hover:text-foreground hover:border-foreground/25 transition-colors"
              >
                Înapoi la homepage
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
