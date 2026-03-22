import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import Link from "next/link";
import { Section } from "@/components/shared/Section";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";

export const metadata: Metadata = {
  title: "Despre | Nicolae-Valentin Dincă",
  description:
    "Luxury Real Estate Full‑Stack Web Developer: de la site-uri generice la platforme digitale custom pentru agenți, agenții și developeri de lux.",
};

export default function AboutPage() {
  return (
    <>
      <Section>
        <Container>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Despre" }]} />
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl tracking-tight md:text-5xl">
              Despre
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-foreground/80">
              Sunt Luxury Real Estate Full‑Stack Web Developer și ajut agenți,
              agenții și developeri de real estate de lux să treacă de la
              site‑uri generice la platforme digitale custom, construite cap‑coadă.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-foreground/10">
        <Container>
          <h2 className="font-serif text-3xl tracking-tight md:text-4xl">
            Cum am ajuns să construiesc platforme digitale pentru imobiliare de lux
          </h2>
          <div className="mt-6 max-w-3xl space-y-4 text-foreground/80 leading-relaxed">
            <p>
              Am început în web development din curiozitate: voiam să înțeleg
              cum funcționează lucrurile „sub capotă” și cum poți construi
              experiențe care par simple, dar au multă logică în spate.
            </p>
            <p>
              Timpul m-a dus spre proiecte unde imaginea și încrederea contează
              la fel de mult ca funcționalitatea — iar în real estate de lux,
              aceste două lucruri se întâlnesc în fiecare listare.
            </p>
            <p>
              Am ales să lucrez full‑stack (design + development) pentru că nu
              vreau să livrez „doar un design” sau „doar cod”: vreau o platformă
              coerentă, de la prima schiță până la performanță în producție.
            </p>
            <p>
              Am văzut prea des site‑uri de agenți și agenții care arată la fel,
              cu mesaje interșanjabile și zero poziționare. Sau platforme frumoase
              în mockup, dar lente și greu de întreținut după lansare.
            </p>
            <p>
              Ce vreau să schimb: să tratezi site‑ul ca pe un asset de business
              — clar, memorabil, rapid — nu ca pe un PDF online. Dacă asta
              rezonează cu tine, suntem în același film.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-foreground/10">
        <Container>
          <h2 className="font-serif text-3xl tracking-tight md:text-4xl">
            Cum gândesc fiecare platformă
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Luxury înseamnă claritate, nu aglomerație.",
                text: "Mai puțin, dar impecabil: spațiu, ritm, tipografie, structură.",
              },
              {
                title: "Experiența utilizatorului trebuie să fie la nivelul proprietăților promovate.",
                text: "În premium, fricțiunea costă încredere. UX-ul trebuie să fie fluid.",
              },
              {
                title: "Arhitectura tehnică este invizibilă, dar simțită în viteză și stabilitate.",
                text: "Performanță, SEO tehnic și o bază care nu se rupe când crești.",
              },
              {
                title: "Site‑ul nu este un flyer online, ci un sistem care generează leaduri.",
                text: "Fiecare pagină are un rol: claritate, dovadă, acțiune.",
              },
            ].map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-foreground/10 bg-surface p-8"
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
            Cum văd viitorul imobiliarelor de lux în online
          </h2>
          <div className="mt-6 max-w-3xl space-y-3 text-sm leading-relaxed text-foreground/80">
            <p>
              Cred că diferența dintre un agent „vizibil” și unul „invizibil” va
              fi din ce în ce mai mult dată de felul în care arată și funcționează
              platforma lui digitală.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Platformele care arată clar cine ești și cum lucrezi vor atrage
                clienți mai buni, nu doar mai mulți.
              </li>
              <li>
                Site‑urile generice vor deveni tot mai „invizibile” în fața
                platformelor gândite ca un sistem complet de comunicare și leaduri.
              </li>
              <li>
                Agenții și dezvoltatorii care investesc în digital acum își
                construiesc un avantaj real pe termen lung.
              </li>
            </ul>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-foreground/10">
        <Container>
          <h2 className="font-serif text-3xl tracking-tight md:text-4xl">
            Cum arată colaborarea din perspectiva ta
          </h2>
          <ul className="mt-8 max-w-3xl list-disc space-y-3 pl-5 text-foreground/80 leading-relaxed">
            <li>
              Te cunosc pe tine și piața ta înainte să deschidem editorul de cod.
            </li>
            <li>
              Îți propun o arhitectură și un design gândite pentru leaduri și
              poziționare, nu doar pentru „pagini frumoase”.
            </li>
            <li>
              Construiesc, testez, lansez și rămân alături pentru ajustări și
              evoluție.
            </li>
          </ul>
        </Container>
      </Section>

      <Section className="border-t border-foreground/10">
        <Container>
          <h2 className="font-serif text-3xl tracking-tight md:text-4xl">
            De ce clienții mei rămân cu mine pe termen lung
          </h2>
          <ul className="mt-8 max-w-3xl list-disc space-y-3 pl-5 text-foreground/80 leading-relaxed">
            <li>
              Comunicare clară, fără jargon inutil — știi la ce să te aștepți la
              fiecare pas.
            </li>
            <li>
              Rezultate măsurabile în leaduri, viteză și feedback de la
              utilizatori.
            </li>
            <li>
              Disponibilitate pentru iterații și pentru felul în care se schimbă
              piața după lansare.
            </li>
            <li>
              Relație construită pe încredere, nu pe „livrare și la revedere”.
            </li>
          </ul>
        </Container>
      </Section>

      <Section className="border-t border-foreground/10">
        <Container>
          <h2 className="font-serif text-3xl tracking-tight md:text-4xl">
            Ce mă diferențiază față de un simplu web designer sau o agenție
            generalistă
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Focus pe imobiliare (și luxury)",
                text: "Înțeleg contextul, ritmul și așteptările din piața ta.",
              },
              {
                title: "Full‑stack, fără template‑uri",
                text: "Construiesc custom, cu control total pe UI și pe arhitectură.",
              },
              {
                title: "Proces clar, proiecte limitate",
                text: "Calitate și atenție la detalii, nu volum.",
              },
            ].map((x) => (
              <div
                key={x.title}
                className="rounded-2xl border border-foreground/10 bg-surface p-6"
              >
                <p className="text-sm font-medium">{x.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-foreground/75">
                  {x.text}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="border-t border-foreground/10">
        <Container>
          <div className="rounded-3xl border border-foreground/10 bg-surface p-10 md:p-14">
            <h2 className="font-serif text-3xl tracking-tight md:text-4xl">
              Vrei să vezi proiecte selectate?
            </h2>
            <p className="mt-5 max-w-3xl text-foreground/80 leading-relaxed">
              Dacă simți că abordarea mea rezonează cu felul în care lucrezi,
              vezi câteva proiecte recente.
            </p>
            <div className="mt-8">
              <Link
                href="/work"
                className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background hover:bg-foreground/90 transition-colors"
              >
                Vezi proiecte selectate
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

