import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/shared/Section";

export default function NotFound() {
  return (
    <>
      <Section>
        <Container>
          <div className="max-w-2xl space-y-6">
            <p className="text-sm tracking-[0.2em] text-foreground/60">
              404 • PAGINĂ INEXISTENTĂ
            </p>
            <h1 className="font-serif text-4xl tracking-tight md:text-5xl">
              Pagina nu există, dar proiectul tău poate.
            </h1>
            <p className="text-lg leading-relaxed text-foreground/80">
              Linkul pe care l-ai accesat nu este valid sau pagina a fost mutată.
              Dacă vrei să discutăm despre un proiect sau să vezi ce fac, ai
              variantele de mai jos.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background hover:bg-foreground/90 transition-colors"
              >
                Înapoi la homepage
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-foreground/15 px-6 py-3 text-sm font-medium text-foreground/80 hover:text-foreground hover:border-foreground/25 transition-colors"
              >
                Aplică pentru un proiect
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

