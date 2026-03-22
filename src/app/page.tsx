import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/shared/Section";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title:
    "Platforme digitale custom pentru real estate de lux | Nicolae-Valentin Dincă",
  description:
    "Luxury Real Estate Full‑Stack Web Developer: site‑uri și platforme care poziționează agenți, agenții și developeri în liga premium. Design cinematic, arhitectură full‑stack, conversie.",
};

const homeProjects = projects.slice(0, 3);

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
              Platforme digitale custom pentru real estate de lux.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-foreground/80 md:text-xl">
              Sunt Luxury Real Estate Full‑Stack Web Developer și construiesc
              site‑uri și platforme care poziționează agenți, agenții și
              developeri acolo unde le este locul: în liga premium.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
              >
                Aplică pentru platforma ta digitală
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center justify-center rounded-full border border-foreground/15 px-6 py-3 text-sm font-medium text-foreground/80 transition-colors hover:border-foreground/25 hover:text-foreground"
              >
                Vezi proiecte selectate
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-foreground/10">
        <Container>
          <h2 className="font-serif text-3xl tracking-tight md:text-4xl">
            Cu cine lucrez
          </h2>
          <ul className="mt-8 max-w-3xl space-y-4 text-foreground/85 leading-relaxed">
            <li className="flex gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              Agenți independenți de real estate de lux.
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              Agenții boutique și echipe specializate.
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              Developeri și proiecte rezidențiale high‑end.
            </li>
          </ul>
        </Container>
      </Section>

      <Section className="border-t border-foreground/10">
        <Container>
          <h2 className="font-serif text-3xl tracking-tight md:text-4xl">
            Ce face diferența în platformele pe care le construiesc
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Experiență luxury end‑to‑end",
                text:
                  "Design cinematic, structură clară și o experiență online care arată și se simte ca proprietățile pe care le reprezinți.",
              },
              {
                title: "Arhitectură full‑stack, fără template‑uri",
                text:
                  "Fiecare platformă este construită de la zero: performanță, securitate, SEO tehnic și integrare cu CRM‑uri și instrumentele pe care le folosești deja.",
              },
              {
                title: "Conversie, nu doar prezență",
                text:
                  "Fiecare pagină este gândită ca un funnel: claritate, încredere și pași simpli care transformă vizitatorii în leaduri reale.",
              },
            ].map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-foreground/10 bg-surface p-6"
              >
                <p className="text-sm font-medium">{p.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-foreground/75">
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="border-t border-foreground/10">
        <Container>
          <h2 className="font-serif text-3xl tracking-tight md:text-4xl">
            Proiecte selectate
          </h2>
          <p className="mt-4 max-w-2xl text-foreground/80 leading-relaxed">
            Câteva exemple de platforme digitale pentru agenți, agenții și
            developeri din segmentul premium.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {homeProjects.map((project) => (
              <article
                key={project.slug}
                className="flex flex-col rounded-2xl border border-foreground/10 bg-surface p-6"
              >
                <p className="text-xs uppercase tracking-[0.14em] text-foreground/55">
                  {project.clientType} • {project.market}
                </p>
                <h3 className="mt-3 font-serif text-lg leading-snug tracking-tight">
                  {project.title}
                </h3>
                <ul className="mt-4 flex-1 list-disc space-y-1.5 pl-4 text-sm text-foreground/80">
                  <li>{project.goals[0]}</li>
                  {project.solution[0] && <li>{project.solution[0]}</li>}
                  {project.results?.[0] && <li>{project.results[0]}</li>}
                </ul>
              </article>
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="/work"
              className="text-sm font-medium text-foreground underline-offset-4 transition-colors hover:underline"
            >
              Vezi toate proiectele →
            </Link>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-foreground/10">
        <Container>
          <div className="grid gap-10 md:grid-cols-2 md:items-start md:gap-14">
            <div>
              <h2 className="font-serif text-3xl tracking-tight md:text-4xl">
                Despre mine, pe scurt
              </h2>
              <div className="mt-6 space-y-4 text-foreground/80 leading-relaxed">
                <p>
                  Lucrez full‑stack (design + development) pentru că vreau
                  control end‑to‑end: de la prima idee de structură până la
                  codul care susține performanța în producție.
                </p>
                <p>
                  Mă concentrez pe real estate de lux pentru că aici detaliile
                  contează la fel de mult ca în arhitectură: spațiu, ritm,
                  încredere.
                </p>
                <p>
                  Nu îți livrez un template „îmbrăcat” — îți construiesc o
                  platformă aliniată cu poziționarea ta și cu felul în care
                  vrei să fii perceput pe piață.
                </p>
              </div>
              <Link
                href="/about"
                className="mt-6 inline-block text-sm font-medium text-foreground underline-offset-4 transition-colors hover:underline"
              >
                Citește povestea completă →
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-foreground/10">
        <Container>
          <h2 className="font-serif text-3xl tracking-tight md:text-4xl">
            Cum arată o colaborare cu mine
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                step: "1",
                title: "Discovery & Strategy",
                text:
                  "Clarificăm piața, poziționarea și obiectivele platformei tale digitale.",
              },
              {
                step: "2",
                title: "Architecture & Design",
                text:
                  "Stabilim structura, UX‑ul și designul cinematic, aliniate cu brandul tău.",
              },
              {
                step: "3",
                title: "Build & Launch",
                text:
                  "Dezvolt full‑stack platforma, testăm performanța și o lansăm cu monitorizare.",
              },
            ].map((s) => (
              <div
                key={s.step}
                className="rounded-2xl border border-foreground/10 bg-surface p-6"
              >
                <p className="text-xs font-medium text-foreground/55">
                  Pas {s.step}
                </p>
                <p className="mt-2 text-sm font-medium">{s.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-foreground/75">
                  {s.text}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8">
            <Link
              href="/process"
              className="text-sm font-medium text-foreground/80 underline-offset-4 transition-colors hover:text-foreground hover:underline"
            >
              Vezi procesul complet →
            </Link>
          </p>
        </Container>
      </Section>

      <Section className="border-t border-foreground/10">
        <Container>
          <h2 className="font-serif text-3xl tracking-tight md:text-4xl">
            Pentru cine este această colaborare
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2 md:gap-12">
            <div>
              <p className="text-sm font-medium text-foreground/70">
                Potrivim bine dacă…
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-foreground/80">
                <li>vinzi sau proiectezi proprietăți de lux și îți pasă de poziționare.</li>
                <li>vezi site-ul ca investiție în brand, nu ca cheltuială de bifat.</li>
                <li>ești dispus să îți aloci timp pentru feedback și clarificări.</li>
                <li>vrei un partener tehnic implicat, nu un executant la comandă.</li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-medium text-foreground/70">
                Nu este pentru tine dacă…
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-foreground/80">
                <li>cauți „cel mai ieftin site posibil” sau un template rapid.</li>
                <li>
                  vrei doar „să fii online”, fără să schimbi cum vin clienții la
                  tine.
                </li>
                <li>nu ești dispus să iterăm până când platforma e aliniată cu brandul.</li>
                <li>
                  te interesează doar viteza de livrare, nu calitatea pe termen lung.
                </li>
              </ul>
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

      <Section className="border-t border-foreground/10">
        <Container>
          <div className="rounded-3xl border border-foreground/10 bg-surface p-10 md:p-14">
            <h2 className="font-serif text-3xl tracking-tight md:text-4xl">
              Gata să trecem de la un simplu site la o platformă digitală care
              te reprezintă?
            </h2>
            <p className="mt-5 max-w-2xl text-foreground/80 leading-relaxed">
              Lucrez cu un număr limitat de proiecte simultan, ca să păstrezi
              calitatea și atenția la detalii. Dacă simți că e momentul, începem
              cu un dialog direct.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
              >
                Aplică pentru un proiect
              </Link>
              <Link
                href="/process"
                className="inline-flex items-center justify-center rounded-full border border-foreground/15 px-6 py-3 text-sm font-medium text-foreground/80 transition-colors hover:border-foreground/25 hover:text-foreground"
              >
                Vreau să văd procesul în detaliu
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
