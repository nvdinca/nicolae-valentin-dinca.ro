import type { Metadata } from "next";
import Script from "next/script";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/shared/Section";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { SITE_ORIGIN } from "@/lib/site";
import { ContactForm } from "./ContactForm";

const contactPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact — Nicolae-Valentin Dincă",
  url: `${SITE_ORIGIN}/contact`,
  inLanguage: "ro-RO",
  mainEntity: {
    "@type": "Organization",
    name: "Nicolae-Valentin Dincă",
    url: SITE_ORIGIN,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      availableLanguage: ["Romanian", "English"],
      url: `${SITE_ORIGIN}/contact`,
    },
  },
};

export const metadata: Metadata = {
  title: "Contact | Aplică pentru un proiect",
  description:
    "Aplică pentru un proiect digital în zona imobiliare de lux. Spune-mi câteva lucruri despre tine și businessul tău, iar eu îți răspund cu următorii pași.",
};

export default function ContactPage() {
  return (
    <>
      <Script
        id="contact-page-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactPageJsonLd),
        }}
      />
      <Section>
        <Container>
          <Breadcrumbs items={[{ label: "Acasă", href: "/" }, { label: "Contact" }]} />
          <div className="grid gap-12 md:grid-cols-2 md:items-start">
            <div>
              <h1 className="font-serif text-4xl tracking-tight md:text-5xl">
                Aplică pentru un proiect
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-foreground/80">
                Lucrez cu un număr limitat de proiecte în paralel, ca să pot
                rămâne implicat în fiecare detaliu. Spune‑mi câteva lucruri
                despre tine și despre businessul tău, iar eu îți voi răspunde cu
                următorii pași.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-foreground/75">
                După ce trimiți formularul, deschidem o conversație direct în
                WhatsApp, ca să putem continua discuția acolo unde îți este cel
                mai comod.
              </p>

              <div className="mt-10 rounded-2xl border border-foreground/10 bg-surface p-6">
                <p className="text-sm font-medium">
                  Ce se întâmplă după ce trimiți formularul
                </p>
                <ul className="mt-4 list-disc pl-5 text-sm text-foreground/75 space-y-2">
                  <li>
                    Citesc cu atenție detaliile și verific dacă pot să te ajut
                    cu adevărat.
                  </li>
                  <li>
                    Dacă pare un match bun, îți propun un call online scurt.
                  </li>
                  <li>
                    Dacă nu sunt persoana potrivită pentru proiectul tău, îți
                    spun asta direct.
                  </li>
                </ul>
              </div>

              <div className="mt-6 rounded-2xl border border-foreground/10 bg-surface p-6">
                <p className="text-sm font-medium">Întrebări rapide</p>
                <ul className="mt-4 list-disc pl-5 text-sm text-foreground/75 space-y-2">
                  <li>
                    <span className="font-medium">Când îmi răspunzi?</span>{" "}
                    În mod normal în 1–2 zile lucrătoare.
                  </li>
                  <li>
                    <span className="font-medium">Lucrezi doar online?</span>{" "}
                    Da. Tot procesul este gândit să funcționeze foarte bine
                    remote.
                  </li>
                  <li>
                    <span className="font-medium">Putem începe cu un audit mic?</span>{" "}
                    Da, dacă nu ești încă pregătit pentru un proiect complet,
                    putem începe cu o analiză clară a prezenței tale digitale.
                  </li>
                </ul>
              </div>
            </div>

            <div className="rounded-2xl border border-foreground/10 bg-surface p-8">
              <ContactForm />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

