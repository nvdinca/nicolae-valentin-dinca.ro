import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/shared/Section";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";

export const metadata: Metadata = {
  title: "Politică de confidențialitate & cookies",
  description:
    "Informații despre modul în care sunt prelucrate datele și cum sunt folosite cookie‑urile pe nicolae-valentin-dinca.ro.",
};

export default function PrivacyPage() {
  return (
    <>
      <Section>
        <Container>
          <Breadcrumbs items={[{ label: "Acasă", href: "/" }, { label: "Confidențialitate" }]} />
          <div className="max-w-3xl space-y-6">
            <h1 className="font-serif text-4xl tracking-tight md:text-5xl">
              Politică de confidențialitate & cookies
            </h1>
            <p className="text-sm leading-relaxed text-foreground/80">
              Această pagină explică pe scurt ce tipuri de date sunt colectate
              când folosești nicolae-valentin-dinca.ro și cum sunt folosite
              cookie‑urile pe acest site.
            </p>

            <section className="space-y-3 text-sm leading-relaxed text-foreground/80">
              <h2 className="font-medium text-foreground">
                1. Cine este responsabil pentru acest site
              </h2>
              <p>
                Site‑ul nicolae-valentin-dinca.ro este operat de Nicolae-Valentin Dincă, dezvoltator full‑stack specializat în platforme
                digitale pentru imobiliare de lux.
              </p>
            </section>

            <section className="space-y-3 text-sm leading-relaxed text-foreground/80">
              <h2 className="font-medium text-foreground">
                2. Ce date sunt colectate și de ce
              </h2>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  <span className="font-medium">Date furnizate prin formular:</span>{" "}
                  nume, e‑mail și informațiile pe care alegi să le completezi în
                  formularul de contact. Acestea sunt folosite exclusiv pentru a
                  putea răspunde la solicitarea ta și pentru a continua
                  discuția, de regulă prin WhatsApp.
                </li>
              </ul>
            </section>

            <section className="space-y-3 text-sm leading-relaxed text-foreground/80">
              <h2 className="font-medium text-foreground">
                3. Cookie-uri folosite pe acest site
              </h2>
              <p>
                Acest site nu folosește cookie‑uri de analytics sau de
                urmărire. Doar cookie‑urile strict necesare pentru
                funcționarea tehnică (dacă sunt folosite de platforma de
                hosting) pot fi setate; acestea nu identifică utilizatorii în
                mod individual.
              </p>
            </section>

            <section className="space-y-3 text-sm leading-relaxed text-foreground/80">
              <h2 className="font-medium text-foreground">
                4. Cât timp sunt păstrate datele
              </h2>
              <p>
                Datele transmise prin formularul de contact sunt păstrate atât
                timp cât este necesar pentru a continua discuțiile despre un
                proiect potențial sau pentru a respecta eventuale obligații
                legale.
              </p>
            </section>

            <section className="space-y-3 text-sm leading-relaxed text-foreground/80">
              <h2 className="font-medium text-foreground">
                5. Drepturile tale
              </h2>
              <p>
                În măsura în care legislația aplicabilă (GDPR) se aplică, ai
                dreptul să:
              </p>
              <ul className="list-disc space-y-2 pl-5">
                <li>soliciți acces la datele tale personale;</li>
                <li>soliciți rectificarea sau ștergerea acestora;</li>
                <li>soliciți limitarea prelucrării sau te opui prelucrării.</li>
              </ul>
              <p>
                Pentru orice solicitare legată de datele tale, mă poți contacta
                prin datele de contact disponibile pe acest site.
              </p>
            </section>

            <section className="space-y-3 text-sm leading-relaxed text-foreground/80">
              <h2 className="font-medium text-foreground">
                6. Actualizări ale acestei politici
              </h2>
              <p>
                Acest document poate fi actualizat periodic. Versiunea
                actualizată va fi întotdeauna disponibilă pe această pagină.
              </p>
            </section>
          </div>
        </Container>
      </Section>
    </>
  );
}

