import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/shared/Section";

export const metadata: Metadata = {
  title:
    "Platforme digitale pentru imobiliare de lux | Nicolae-Valentin Dincă",
  description:
    "Platforme digitale custom pentru agenți, agenții și developeri din imobiliare de lux, construite cap‑coadă de un developer full‑stack specializat.",
};

export default function Home() {
  return (
    <>
      <Section className="py-20 md:py-28">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm tracking-[0.2em] text-foreground/60">
              LUXURY REAL ESTATE • DIGITAL PLATFORMS
            </p>
            <h1 className="mt-6 font-serif text-4xl leading-tight tracking-tight md:text-6xl">
              Construiesc platforme digitale de lux pentru imobiliare.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-foreground/80 md:text-xl">
              Eu sunt Nicolae-Valentin Dincă, developer full‑stack specializat în imobiliare
              de lux. Te ajut să ai o prezență digitală care se simte la fel de
              premium ca proprietățile și proiectele pe care le reprezinți.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-foreground/75">
              Piața s‑a mutat online, iar site‑ul tău nu mai poate fi doar o
              carte de vizită, ci un asset real care îți susține businessul zi
              de zi.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background hover:bg-foreground/90 transition-colors"
              >
                Aplică pentru platforma ta digitală
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center justify-center rounded-full border border-foreground/15 px-6 py-3 text-sm font-medium text-foreground/80 hover:text-foreground hover:border-foreground/25 transition-colors"
              >
                Vezi proiecte selectate
              </Link>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-foreground/10 bg-surface p-6">
                <p className="text-sm font-medium">Experiență luxury</p>
                <p className="mt-2 text-sm text-foreground/75">
                  Design cinematic și structură clară, cu mult spațiu și ritm
                  editorial.
                </p>
              </div>
              <div className="rounded-2xl border border-foreground/10 bg-surface p-6">
                <p className="text-sm font-medium">Arhitectură full‑stack</p>
                <p className="mt-2 text-sm text-foreground/75">
                  Fără template‑uri. Performanță, SEO tehnic și stabilitate pe
                  termen lung.
                </p>
              </div>
              <div className="rounded-2xl border border-foreground/10 bg-surface p-6">
                <p className="text-sm font-medium">Conversie</p>
                <p className="mt-2 text-sm text-foreground/75">
                  Funnel-uri curate, CTA-uri discrete și leaduri mai bine
                  calificate.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-foreground/10">
        <Container>
          <h2 className="font-serif text-3xl tracking-tight md:text-4xl">
            Ce spun clienții mei
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                quote:
                  "M‑a ajutat să clarific nu doar cum arată platforma, ci și cum arată businessul meu în online.",
                name: "A., agent de imobiliare de lux",
                place: "București",
              },
              {
                quote:
                  "Procesul a fost clar de la început. Fără surprize, fără „vom vedea pe parcurs”.",
                name: "Echipă boutique",
                place: "Piață premium",
              },
              {
                quote:
                  "Rezultatul final arată exact așa cum îmi doream să arăt ca brand, dar nu știam să formulez.",
                name: "Developer rezidențial",
                place: "Segment high‑end",
              },
            ].map((t) => (
              <figure
                key={t.name}
                className="flex h-full flex-col justify-between rounded-2xl border border-foreground/10 bg-surface p-6"
              >
                <p className="text-sm leading-relaxed text-foreground/80">
                  „{t.quote}”
                </p>
                <figcaption className="mt-4 text-xs text-foreground/60">
                  <span className="block font-medium">{t.name}</span>
                  <span className="block">{t.place}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
