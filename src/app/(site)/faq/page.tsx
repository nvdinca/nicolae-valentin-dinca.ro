import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/shared/Section";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Întrebări frecvente | Nicolae-Valentin Dincă",
  description:
    "Răspunsuri la întrebări despre platforme digitale pentru imobiliare de lux: buget, durată, livrabile, proces și cum începem colaborarea.",
};

const faqs = [
  {
    q: "Ce înseamnă „platformă digitală” în cazul tău?",
    a: "O platformă digitală este site‑ul tău plus tot ce îl face util și coerent: identitate vizuală (culori, tipografie, ton), structură clară pentru servicii sau liste de proprietăți, formulare de contact sau leaduri, eventual integrări (ex. calendar, CRM). Nu vând șabloane gata făcute: fiecare proiect este construit pe măsură, astfel încât să reflecte poziționarea ta și să susțină businessul tău.",
  },
  {
    q: "În ce interval de buget lucrezi?",
    a: "Lucrez în intervale orientative: de la sub 3.000 € (site de prezență, una sau două pagini) până la peste 12.000 € (platforme mai complexe, cu mai multe funcționalități). Bugetul exact se stabilește după ce înțeleg obiectivele și complexitatea. Pe formularul de contact poți indica un buget orientativ ca să pot veni cu o propunere potrivită.",
  },
  {
    q: "Cât durează un proiect tipic?",
    a: "Depinde de complexitate: un site de prezență poate fi gata în câteva săptămâni; o platformă mai amplă poate dura 2–3 luni. Lucrez cu un număr limitat de clienți (aprox. un proiect pe lună), ca să pot oferi atenție și calitate. Durata exactă se stabilește în faza de discuție și planificare.",
  },
  {
    q: "Lucrezi doar cu clienți din imobiliare?",
    a: "Da. Mă specializez în agenți imobiliari, agențiile imobiliare și dezvoltatori imobiliari din segmentul de lux / premium. Experiența mea și oferta (The Luxury Agent Digital Identity™) sunt construite în jurul acestor profiluri, iar proiectele le desfășor doar în România.",
  },
  {
    q: "Ce primește clientul la final?",
    a: "În funcție de pachet: site live, găzduit și configurat; cod sursă și documentație (dacă este cazul); instrucțiuni de administrare; eventual contract de cesiune a drepturilor de autor pe software. Detaliile exacte (livrabile, întâlniri, revizuiri) sunt stabilite la începutul colaborării și documentate în ofertă.",
  },
  {
    q: "Cum încep? Cum putem colabora?",
    a: "Completezi formularul de contact cu numele, tipul de business, bugetul orientativ și ce obiectiv ai. Mă prezint pe scurt și îți răspund (de obicei prin WhatsApp) pentru o discuție scurtă. Dacă ne potrivim, urmează o ofertă clară, apoi semnarea și începerea proiectului conform procesului în 6 faze descris pe pagina Proces.",
  },
];

function FaqSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: {
        "@type": "Answer",
        text: a,
      },
    })),
  };
  return (
    <Script
      id="faq-schema"
      type="application/ld+json"
      strategy="afterInteractive"
    >
      {JSON.stringify(schema)}
    </Script>
  );
}

export default function FaqPage() {
  return (
    <>
      <FaqSchema />
      <Section className="py-20 md:py-28">
        <Container>
          <Breadcrumbs items={[{ label: "Acasă", href: "/" }, { label: "FAQ" }]} />
          <div className="max-w-3xl">
            <p className="text-sm tracking-[0.2em] text-foreground/60">
              ÎNTREBĂRI FRECVENTE
            </p>
            <h1 className="mt-6 font-serif text-4xl leading-tight tracking-tight md:text-5xl">
              Întrebări frecvente
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-foreground/80">
              Răspunsuri la cele mai comune întrebări despre cum lucrez, bugete,
              durată și cum începem colaborarea.
            </p>
          </div>

          <dl className="mt-12 max-w-3xl space-y-4">
            {faqs.map(({ q, a }) => (
              <details
                key={q}
                className="group rounded-2xl border border-foreground/10 bg-surface/50 transition-colors hover:border-foreground/15"
              >
                <summary className="cursor-pointer list-none px-6 py-5 font-medium text-foreground marker:contents [&::-webkit-details-marker]:hidden">
                  <span className="flex items-center justify-between gap-4">
                    {q}
                    <span className="shrink-0 text-foreground/50 transition-transform group-open:rotate-180">
                      ▼
                    </span>
                  </span>
                </summary>
                <div className="border-t border-foreground/10 px-6 pb-5 pt-4">
                  <p className="text-foreground/80 leading-relaxed">{a}</p>
                </div>
              </details>
            ))}
          </dl>

          <div className="mt-14 max-w-3xl">
            <p className="text-foreground/70">
              Nu ai găsit răspunsul? Scrie‑mi direct prin formularul de contact
              sau pe WhatsApp – răspund la toate mesajele.
            </p>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background hover:bg-foreground/90 transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
