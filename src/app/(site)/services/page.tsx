import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/shared/Section";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import Link from "next/link";
import Script from "next/script";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "The Luxury Agent Digital Identity™",
  description:
    "Oferta semnătură pentru agenți, agenții și dezvoltatori din imobiliare de lux: brand digital complet și website custom, identitate vizuală, platformă digitală la comandă, gata să susțină poziționarea ta. Trei versiuni adaptate: agenți independenți, agenții boutique, dezvoltatori imobiliari.",
  url: "https://nicolae-valentin-dinca.ro/services",
  provider: {
    "@type": "Person",
    name: "Nicolae-Valentin Dincă",
    url: "https://nicolae-valentin-dinca.ro",
    jobTitle: "Luxury Imobiliare Full‑Stack Custom Web Developer",
  },
  areaServed: {
    "@type": "Country",
    name: "Romania",
  },
  serviceType: [
    "Dezvoltare web",
    "Design identitate digitală",
    "Marketing imobiliar de lux",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "The Luxury Agent Digital Identity™",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pentru agenți imobiliari independenți",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pentru agențiile imobiliare",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pentru dezvoltatori imobiliari",
        },
      },
    ],
  },
};

export const metadata: Metadata = {
  title: "The Luxury Agent Digital Identity™ | Servicii",
  description:
    "Oferta semnătură pentru agenți, agenții și dezvoltatori din imobiliare de lux: brand digital complet și website custom, gata să susțină poziționarea ta.",
};

export default function ServicesPage() {
  return (
    <>
      <Script
        id="service-schema"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(serviceSchema)}
      </Script>
      <Section className="py-20 md:py-28">
        <Container>
          <Breadcrumbs items={[{ label: "Acasă", href: "/" }, { label: "Servicii" }]} />
          <div className="max-w-3xl">
            <p className="text-sm tracking-[0.2em] text-foreground/60">
              OFERTĂ SEMNĂTURĂ
            </p>
            <h1 className="mt-6 font-serif text-4xl leading-tight tracking-tight md:text-6xl">
              The Luxury Agent Digital Identity™
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-foreground/80 md:text-xl">
              O experiență completă de brand digital și website custom, creată
              pentru agenți, echipe și agențiile de imobiliare de lux care vor
              mai mult decât „un simplu site”.
            </p>
            <p className="mt-4 text-sm font-medium tracking-wide text-foreground/70">
              Nu vinzi proprietăți obișnuite. Site‑ul tău nu ar trebui să arate
              ca unul obișnuit.
            </p>
            <p className="mt-6 text-foreground/80 leading-relaxed">
              Aceasta este oferta mea semnătură — The Luxury Agent Digital
              Identity™ — în trei versiuni adaptate: agenți independenți,
              agenții boutique și dezvoltatori cu proiecte premium.
            </p>
            <p className="mt-4 text-foreground/75">
              Nu promit minuni peste noapte, nu lucrez cu template‑uri și nu
              externalizez proiectul. Mă implic personal în fiecare etapă, cu un
              număr limitat de clienți, ca să pot livra o identitate digitală
              în care chiar te recunoști.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background hover:bg-foreground/90 transition-colors"
              >
                Aplică pentru The Luxury Agent Digital Identity™
              </Link>
              <Link
                href="/process"
                className="inline-flex items-center justify-center rounded-full border border-foreground/15 px-6 py-3 text-sm font-medium text-foreground/80 hover:text-foreground hover:border-foreground/25 transition-colors"
              >
                Vezi cum arată procesul de lucru →
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-foreground/10">
        <Container>
          <h2 className="font-serif text-3xl tracking-tight md:text-4xl">
            Pentru cine este The Luxury Agent Digital Identity™
          </h2>
          <p className="mt-5 max-w-3xl text-foreground/80 leading-relaxed">
            Lucrez cu profesioniști din imobiliare care tratează marca lor
            personală la fel de serios cum tratează un penthouse sau o vilă
            spectaculoasă.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Agenți independenți de imobiliare de lux",
                text: "Vrei să ieși din mulțime, să nu mai arăți ca „încă un agent” și să ai o prezență online la nivelul proprietăților pe care le reprezinți.",
              },
              {
                title: "Agenții boutique și echipe specializate",
                text: "Ai o echipă mică, puternică și vrei o platformă care să comunice clar cine sunteți, cum lucrați și de ce sunteți alegerea serioasă în segmentul vostru.",
              },
              {
                title: "Agenții și dezvoltatorii cu proiecte premium / luxury",
                text: "Construiești sau vinzi proiecte rezidențiale high‑end și ai nevoie de o platformă digitală care poate susține prețurile, poziționarea și așteptările publicului tău.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-foreground/10 bg-surface p-6"
              >
                <p className="text-sm font-medium">{item.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-foreground/75">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="border-t border-foreground/10">
        <Container>
          <h2 className="font-serif text-3xl tracking-tight md:text-4xl">
            Cum arată partea tehnică (pe scurt)
          </h2>
          <p className="mt-5 max-w-3xl text-foreground/80 leading-relaxed">
            Nu trebuie să fii tehnic ca să înțelegi ce se întâmplă „sub capotă”.
            Important este ce înseamnă pentru tine și pentru clienții tăi.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Viteză",
                text: "Pagini care se încarcă repede, inclusiv pe mobil, ca să nu pierzi leaduri doar pentru că cineva nu are răbdare să aștepte.",
              },
              {
                title: "SEO tehnic",
                text: "Structură corectă, meta‑uri, performanță și bune practici care ajută motorul de căutare să înțeleagă clar ce oferi.",
              },
              {
                title: "Stabilitate & securitate",
                text: "Arhitectură gândită pe termen lung, care nu se rupe când adaugi conținut sau când ai mai mult trafic.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-foreground/10 bg-surface p-6"
              >
                <p className="text-sm font-medium">{item.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-foreground/75">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="border-t border-foreground/10">
        <Container>
          <h2 className="font-serif text-3xl tracking-tight md:text-4xl">
            Ce NU este această ofertă
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-foreground/10 bg-surface p-8">
              <p className="text-sm font-medium">Nu este pentru tine dacă</p>
              <ul className="mt-4 list-disc pl-5 text-sm text-foreground/75 space-y-2">
                <li>Cauți „cel mai ieftin site posibil”.</li>
                <li>
                  Vrei doar „să fii prezent online”, fără să schimbi nimic în
                  felul în care vin clienții spre tine.
                </li>
                <li>
                  Te interesează doar să fie „rapid și gata”, nu să construim un
                  asset pe termen lung.
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-foreground/10 bg-surface p-8">
              <p className="text-sm font-medium">Este pentru tine dacă</p>
              <ul className="mt-4 list-disc pl-5 text-sm text-foreground/75 space-y-2">
                <li>
                  Vrei să fii perceput ca referință în segmentul tău, nu ca
                  opțiune „ok”.
                </li>
                <li>
                  Ești gata să investești timp și atenție în felul în care arăți
                  și comunici online.
                </li>
                <li>
                  Vezi site‑ul ca pe o platformă de business, nu ca pe un simplu
                  material de prezentare.
                </li>
              </ul>
            </div>
          </div>

          <p className="mt-8 text-foreground/80">
            „Dacă te regăsești în a doua coloană, atunci oferta asta e construită
            pentru tine.”
          </p>
        </Container>
      </Section>

      <Section className="border-t border-foreground/10">
        <Container>
          <h2 className="font-serif text-3xl tracking-tight md:text-4xl">
            Ce primești concret
          </h2>

          <div className="mt-10 space-y-6">
            {[
              {
                title: "Refinare identitate de brand",
                subtitle:
                  "„Prima impresie începe înainte ca cineva să îți vadă proprietățile.”",
                bullets: [
                  "Paletă de culori inspirată din interioare și arhitectură de lux",
                  "Sistem de tipografii (serif + sans‑serif modern)",
                  "Finisare logo existent sau „light redesign” acolo unde e nevoie",
                  "Moodboard de brand care setează direcția vizuală",
                  "Mini kit de brand pentru social media (stil vizual + exemple)",
                ],
                result:
                  "„Brandul tău începe să arate și să se simtă la același nivel cu proprietățile pe care le reprezinți.”",
              },
              {
                title: "Website custom de lux",
                subtitle:
                  "„Un website cinematic, care arată și funcționează ca un listing de milioane.”",
                bullets: [
                  "Pagină principală personalizată, cu hero cinematic și mesaj clar",
                  "Pagini pentru proprietăți / proiecte, cu galerii foto și video de înaltă calitate",
                  "Animații fine și micro‑interacțiuni care dau senzație de fluiditate și grijă la detalii",
                  "Integrare cu sisteme de listări / MLS / CRM (acolo unde este relevant pentru piața ta)",
                  "Pagini pentru zone / cartiere („neighborhood pages”) acolo unde contează contextul local",
                  "Funneluri de captare leaduri (formulare, secțiuni de contact, micro‑CTA‑uri)",
                  "Layout mobile‑first, optimizat pentru utilizatori care te caută de pe telefon",
                  "Bază de SEO tehnic pentru piețe locale de imobiliare de lux",
                ],
                result:
                  "„Nu mai ai doar un site; ai o platformă digitală care susține modul în care vinzi.”",
              },
              {
                title: "Prezentare de listing de lux (digital + PDF)",
                subtitle:
                  "„Documentul cu care intri în meeting și ieși cu listingul.”",
                bullets: [
                  "Prezentare de listing în format digital și PDF, aliniată cu noul tău brand",
                  "Layout gândit pentru claritate, emoție și încredere",
                  "Structură ușor de actualizat cu noile proprietăți",
                  "Vizualuri în aceeași estetică cu website‑ul",
                ],
                result:
                  "„Arăți și prezinți ca un agent cu care clienții de top vor să lucreze.”",
              },
              {
                title: "Kit de lansare pe social media",
                subtitle: "„Nu lansăm în liniște. Lansăm cu impact.”",
                bullets: [
                  "10 postări pentru Instagram (feed)",
                  "10 template‑uri pentru stories",
                  "3 template‑uri pentru Reels",
                  "Rescriere bio agent (pentru social & site)",
                  "Text de anunț pentru lansarea site‑ului",
                ],
                result:
                  "„Publicul tău vede, simte și înțelege că ceva s‑a schimbat în bine.”",
              },
              {
                title: "Experiență white‑glove pentru tine",
                subtitle:
                  "„Dacă vinzi servicii premium, procesul prin care lucrezi cu mine trebuie să fie la același nivel.”",
                bullets: [
                  "Punct unic de contact – știi mereu cu cine vorbești",
                  "Update‑uri programate (ex.: săptămânale)",
                  "Spațiu privat online cu toate materialele proiectului",
                  "30 de zile de suport post‑lansare",
                  "Video‑uri / ghiduri scurte pentru modificări de bază",
                ],
                result:
                  "„Te ocupi de clienții și proprietățile tale, în timp ce eu mă ocup de platforma ta.”",
              },
            ].map((block) => (
              <div
                key={block.title}
                className="rounded-2xl border border-foreground/10 bg-surface p-8"
              >
                <p className="text-sm font-medium">{block.title}</p>
                <p className="mt-3 text-sm text-foreground/75">{block.subtitle}</p>
                <ul className="mt-5 list-disc pl-5 text-sm text-foreground/75 space-y-2">
                  {block.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <p className="mt-6 text-sm text-foreground/80">{block.result}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="border-t border-foreground/10">
        <Container>
          <h2 className="font-serif text-3xl tracking-tight md:text-4xl">
            Cele trei versiuni The Luxury Agent Digital Identity™
          </h2>
          <p className="mt-5 max-w-3xl text-foreground/80 leading-relaxed">
            Clienții tăi nu aleg proprietatea cea mai ieftină, ci pe cea care li
            se potrivește cel mai bine. Același lucru este valabil și pentru
            platforma ta digitală. Mai jos găsești repere orientative, ca să știi
            în ce zonă ne mișcăm.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Pentru agenți imobiliari",
                text:
                  "Majoritatea proiectelor The Luxury Agent Digital Identity™ pentru agenți independenți de imobiliare de lux încep de la aproximativ 3.000–5.000 €, în funcție de complexitate și de numărul de pagini.",
              },
              {
                title: "Pentru agențiile imobiliare",
                text:
                  "Pentru agențiile și echipele boutique, proiectele încep de obicei de la 5.000–8.000 €, în funcție de structură (multi‑agent), conținut și integrarea cu instrumentele pe care le folosești deja.",
              },
              {
                title: "Pentru dezvoltatori imobiliari",
                text:
                  "Pentru proiecte rezidențiale premium ale dezvoltatorilor imobiliari, The Luxury Agent Digital Identity™ pornește de regulă de la 7.000–12.000 €, în funcție de numărul de pagini, materiale vizuale și funnel‑uri de leaduri.",
              },
            ].map((tier) => (
              <div
                key={tier.title}
                className="rounded-2xl border border-foreground/10 bg-surface p-6"
              >
                <p className="text-sm font-medium">{tier.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-foreground/75">
                  {tier.text}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-foreground/80">
            Discutăm deschis despre buget în call‑ul inițial, după ce înțeleg
            exact unde ești și unde vrei să ajungi. Scopul este să găsim varianta
            care are sens pentru tine, nu să te împing într-un pachet forțat.
          </p>
        </Container>
      </Section>

      <Section className="border-t border-foreground/10">
        <Container>
          <h2 className="font-serif text-3xl tracking-tight md:text-4xl">
            Întrebări frecvente
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              {
                q: "Cât durează un proiect tipic?",
                a: "În medie, între 8 și 12 săptămâni, în funcție de complexitate și de cât de repede putem lua decizii împreună.",
              },
              {
                q: "Lucrezi și cu clienți din afara României?",
                a: "Da. Procesul este gândit să funcționeze perfect și online, indiferent unde ești tu sau clienții tăi.",
              },
              {
                q: "Pot porni de la site‑ul meu actual?",
                a: "Da, putem migra conținutul relevant și păstra ce funcționează, dar arhitectura și designul vor fi construite de la zero.",
              },
              {
                q: "Ce se întâmplă după cele 30 de zile de suport?",
                a: "Putem rămâne în contact printr‑un acord de mentenanță sau consultantă, dacă are sens pentru tine.",
              },
            ].map((item) => (
              <div
                key={item.q}
                className="rounded-2xl border border-foreground/10 bg-surface p-6"
              >
                <p className="text-sm font-medium">{item.q}</p>
                <p className="mt-3 text-sm leading-relaxed text-foreground/75">
                  {item.a}
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
              Gata să arăți online la fel de bine cum lucrezi offline?
            </h2>
            <p className="mt-5 max-w-3xl text-foreground/80 leading-relaxed">
              Dacă ai ajuns până aici, probabil că simți deja că modul în care
              arată și funcționează prezența ta digitală nu mai este la nivelul
              clienților și proprietăților cu care lucrezi. The Luxury Agent
              Digital Identity™ este construită exact pentru acest moment.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background hover:bg-foreground/90 transition-colors"
              >
                Aplică pentru The Luxury Agent Digital Identity™
              </Link>
              <p className="text-sm text-foreground/70">
                Primesc un număr limitat de proiecte pe lună, astfel încât să pot
                fi implicat în fiecare etapă.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

