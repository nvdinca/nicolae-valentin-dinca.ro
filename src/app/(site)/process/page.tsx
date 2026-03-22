import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/shared/Section";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Procesul de lucru | Nicolae-Valentin Dincă",
  description:
    "Proces clar în 6 pași pentru a transforma obiectivele tale de business într-o platformă digitală full‑stack, stabilă și ușor de folosit.",
};

export default function ProcessPage() {
  return (
    <>
      <Section>
        <Container>
          <Breadcrumbs items={[{ label: "Acasă", href: "/" }, { label: "Proces" }]} />
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl tracking-tight md:text-5xl">
              Procesul prin care construiesc platforma ta digitală
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-foreground/80">
              Un proiect bun nu se întâmplă din noroc. Am un proces clar, prin
              care transform obiectivele tale de business într-o platformă
              digitală full‑stack, stabilă și ușor de folosit.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-foreground/10">
        <Container>
          <h2 className="font-serif text-3xl tracking-tight md:text-4xl">
            Etapele procesului
          </h2>

          <div className="mt-10 grid gap-6">
            {[
              {
                step: "01",
                title: "Descoperire și strategie",
                you: [
                  "Discuții inițiale, analiză business și piață.",
                  "Clarificarea obiectivelor (leaduri, poziționare, tipuri de clienți).",
                  "Audit (dacă există deja site / platformă actuală).",
                ],
                client: [
                  "Răspunde la întrebări, livrează informații despre brand și portofoliu.",
                  "Clarifică prioritățile (short‑term / long‑term).",
                ],
                deliverables: ["Rezumat obiective.", "Direcție strategică pentru platformă."],
              },
              {
                step: "02",
                title: "UX și arhitectură",
                you: [
                  "Definire structură de pagini și flow‑uri pentru leaduri.",
                  "Wireframe‑uri / schițe pentru paginile cheie.",
                  "Decizii privind arhitectura tehnică (stack, integrare CRM, baze de date etc.).",
                ],
                client: ["Validează structura și prioritățile."],
                deliverables: ["Hartă site / arhitectură.", "Wireframe‑uri de bază."],
              },
              {
                step: "03",
                title: "Design și conținut",
                you: [
                  "Design vizual cinematic, minimalist, adaptat la segmentul luxury.",
                  "Propun structură de conținut și tone of voice în română.",
                ],
                client: ["Oferă feedback pe direcția vizuală.", "Livrează sau aprobă texte și imagini."],
                deliverables: [
                  "Layout‑uri finale pentru paginile principale.",
                  "Ghid scurt de stil (tipografii, culori, ton).",
                ],
              },
              {
                step: "04",
                title: "Dezvoltare full‑stack",
                you: [
                  "Implementare front‑end și back‑end pe stack‑ul ales.",
                  "Integrare cu CRM, formulare, automatizări, tracking.",
                  "Implementare SEO tehnic (structură, meta, performance).",
                ],
                client: ["Testează fluxurile importante (formulare, navigare)."],
                deliverables: ["Versiune funcțională a platformei pe un mediu de test."],
              },
              {
                step: "05",
                title: "Testare și performanță",
                you: [
                  "Teste de funcționalitate, responsive și cross‑browser.",
                  "Optimizări de viteză, verificare metrici (Core Web Vitals).",
                ],
                client: ["Răspunde la ultimele clarificări, dă ok pentru lansare."],
                deliverables: ["Platformă pregătită de lansare + raport scurt de performanță."],
              },
              {
                step: "06",
                title: "Lansare și monitorizare",
                you: [
                  "Lansare pe domeniul final.",
                  "Setare redirect‑uri (dacă migrezi de pe un site vechi).",
                  "Monitorizare post‑lansare și mici ajustări.",
                ],
                client: ["Comunică lansarea către audiență (social media, e‑mail etc.)."],
                deliverables: [
                  "Platformă live.",
                  "Eventual un scurt ghid de administrare (dacă este relevant).",
                ],
              },
            ].map((s) => (
              <div
                key={s.step}
                className="rounded-2xl border border-foreground/10 bg-surface p-8"
              >
                <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                  <p className="text-sm tracking-[0.2em] text-foreground/60">
                    {s.step}
                  </p>
                  <p className="text-sm font-medium">{s.title}</p>
                </div>

                <div className="mt-6 grid gap-6 md:grid-cols-3">
                  <div>
                    <p className="text-xs font-medium text-foreground/70">
                      Eu
                    </p>
                    <ul className="mt-3 list-disc pl-5 text-sm text-foreground/75 space-y-2">
                      {s.you.map((x) => (
                        <li key={x}>{x}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-foreground/70">
                      Tu
                    </p>
                    <ul className="mt-3 list-disc pl-5 text-sm text-foreground/75 space-y-2">
                      {s.client.map((x) => (
                        <li key={x}>{x}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-foreground/70">
                      Livrabile
                    </p>
                    <ul className="mt-3 list-disc pl-5 text-sm text-foreground/75 space-y-2">
                      {s.deliverables.map((x) => (
                        <li key={x}>{x}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="border-t border-foreground/10">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-foreground/10 bg-surface p-8">
              <h2 className="font-serif text-2xl tracking-tight">
                Cât durează un proiect
              </h2>
              <ul className="mt-5 list-disc pl-5 text-sm text-foreground/75 space-y-2">
                <li>Proiect tipic: 8–12 săptămâni.</li>
                <li>
                  Intervalul se ajustează în funcție de complexitate și de viteza
                  de feedback.
                </li>
                <li>Prefer calitatea în locul grabei.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-foreground/10 bg-surface p-8">
              <h2 className="font-serif text-2xl tracking-tight">
                Ce am nevoie de la tine
              </h2>
              <ul className="mt-5 list-disc pl-5 text-sm text-foreground/75 space-y-2">
                <li>
                  Deschidere să discutăm despre business, nu doar despre „cum să
                  arate site‑ul”.
                </li>
                <li>Feedback la timp pe machete și versiuni.</li>
                <li>Claritate în decizii, ca să evităm amânările lungi.</li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-foreground/10">
        <Container>
          <div className="rounded-3xl border border-foreground/10 bg-surface p-10 md:p-14">
            <h2 className="font-serif text-3xl tracking-tight md:text-4xl">
              Vrei să vedem dacă suntem un match?
            </h2>
            <p className="mt-5 max-w-3xl text-foreground/80 leading-relaxed">
              Dacă procesul meu de lucru se potrivește cu felul în care vrei să îți
              crești prezența digitală, următorul pas este să vedem dacă suntem un
              match.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background hover:bg-foreground/90 transition-colors"
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

