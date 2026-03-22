import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/shared/Section";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Proiecte selectate | Nicolae-Valentin Dincă",
  description:
    "Portofoliu cu proiecte pentru agenți, agenții și developeri din imobiliare de lux, pentru care am construit platforme digitale custom.",
};

export default function WorkPage() {
  return (
    <>
      <Section>
        <Container>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Proiecte" }]} />
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl tracking-tight md:text-5xl">
              Proiecte selectate
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-foreground/80">
              O selecție de proiecte pentru agenți, agenții și developeri de
              real estate de lux pentru care am construit platforme digitale
              custom, end‑to‑end.
            </p>
          </div>

          <div className="mt-10 space-y-6">
            {projects.map((project) => (
              <article
                key={project.slug}
                className="rounded-2xl border border-foreground/10 bg-surface p-8 text-sm"
              >
                <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                  <div>
                    <p className="font-medium">{project.title}</p>
                    <p className="text-foreground/60">
                      {project.clientType} • {project.market}
                    </p>
                  </div>
                  <span className="rounded-full border border-foreground/15 bg-background/80 px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-foreground/60">
                    Studiu de caz
                  </span>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div>
                    <p className="text-xs font-medium text-foreground/65">
                      Obiectiv
                    </p>
                    <ul className="mt-2 list-disc pl-5 space-y-1 text-foreground/80">
                      {project.goals.map((goal) => (
                        <li key={goal}>{goal}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-foreground/65">
                      Soluție
                    </p>
                    <ul className="mt-2 list-disc pl-5 space-y-1 text-foreground/80">
                      {project.solution.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {project.results && project.results.length > 0 && (
                  <div className="mt-4">
                    <p className="text-xs font-medium text-foreground/65">
                      Rezultate
                    </p>
                    <ul className="mt-2 list-disc pl-5 space-y-1 text-foreground/80">
                      {project.results.map((res) => (
                        <li key={res}>{res}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="border-t border-foreground/10">
        <Container>
          <div className="rounded-3xl border border-foreground/10 bg-surface p-10 md:p-14">
            <h2 className="font-serif text-3xl tracking-tight md:text-4xl">
              Vrei o platformă la acest nivel?
            </h2>
            <p className="mt-5 max-w-3xl text-foreground/80 leading-relaxed">
              Scrie‑mi câteva detalii despre tine și businessul tău, iar
              continuarea discuției se mută direct pe WhatsApp.
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

