import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/shared/Section";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Termeni și condiții",
  description:
    "Termeni și condiții pentru serviciile de dezvoltare web și platforme digitale oferite de Nicolae-Valentin Dincă.",
};

export default function TermeniPage() {
  return (
    <>
      <Section>
        <Container>
          <Breadcrumbs items={[{ label: "Acasă", href: "/" }, { label: "Termeni și condiții" }]} />
          <div className="max-w-3xl space-y-8">
            <div>
              <h1 className="font-serif text-4xl tracking-tight md:text-5xl">
                Termeni și condiții
              </h1>
              <p className="mt-4 text-sm leading-relaxed text-foreground/80">
                Acești termeni și condiții reglementează colaborarea pentru
                serviciile de dezvoltare web și platforme digitale oferite prin
                nicolae-valentin-dinca.ro. Utilizarea site‑ului și angajarea
                serviciilor implică acceptarea acestor termeni.
              </p>
            </div>

            <section className="space-y-3 text-sm leading-relaxed text-foreground/80">
              <h2 className="font-medium text-foreground">
                1. Prezentarea părților
              </h2>
              <p>
                <strong>Prestatorul de servicii</strong> este Nicolae-Valentin
                Dincă, oferind servicii de dezvoltare web, design și implementare
                de platforme digitale, în special pentru segmentul imobiliar de
                lux / premium. <strong>Clientul</strong> este persoana fizică
                sau juridică care solicită și comandă aceste servicii. Relația
                contractuală se stabilește prin ofertă scrisă (e-mail sau
                document semnat) și acceptarea acesteia de către client.
              </p>
            </section>

            <section className="space-y-3 text-sm leading-relaxed text-foreground/80">
              <h2 className="font-medium text-foreground">
                2. Obiectul serviciilor
              </h2>
              <p>
                Serviciile pot include, în funcție de ofertă: conceperea și
                dezvoltarea de site‑uri web și platforme digitale la comandă,
                identitate vizuală și branding digital, integrări tehnice,
                găzduire și mentenanță (dacă este prevăzut în contract). Scope-ul
                exact, livrabilele și etapele sunt descrise în oferta acceptată
                și, după caz, în contractul semnat. Orice modificare substanțială
                față de ofertă se face prin acord scris.
              </p>
            </section>

            <section className="space-y-3 text-sm leading-relaxed text-foreground/80">
              <h2 className="font-medium text-foreground">
                3. Oferta, acceptarea, comanda
              </h2>
              <p>
                Oferta este transmisă în scris (e-mail sau document) și indică
                serviciile, prețurile, termenele și condițiile de plată.
                Acceptarea se face prin confirmare scrisă sau semnarea
                contractului. După acceptare, proiectul intră în execuție conform
                planului stabilit. Solicitarea prin formularul de contact sau
                WhatsApp nu constituie în sine un contract; contractul se
                încheie la semnarea documentului de ofertă/contract.
              </p>
            </section>

            <section className="space-y-3 text-sm leading-relaxed text-foreground/80">
              <h2 className="font-medium text-foreground">
                4. Prețuri, plăți, facturare
              </h2>
              <p>
                Prețurile sunt exprimate în ofertă (RON sau EUR, după caz) și
                pot include TVA dacă prestatorul este plătitor de TVA. Plățile
                se efectuează conform programului din ofertă (avans, etape,
                la livrare). Factura este emisă la data plății sau conform
                acordului. Întârzieri la plată pot atrage penalități de întârziere
                conform ofertei/contractului și legislației aplicabile.
              </p>
            </section>

            <section className="space-y-3 text-sm leading-relaxed text-foreground/80">
              <h2 className="font-medium text-foreground">
                5. Termene și livrabile
              </h2>
              <p>
                Termenele de livrare sunt estimate în ofertă și se îndeplinesc în
                măsura în care clientul furnizează la timp materialele și
                răspunsurile necesare. Livrabilele (cod sursă, documentație,
                acces la panou de administrare etc.) sunt detaliate în ofertă.
                Receptarea se face prin confirmare scrisă sau prin punerea în
                producție a soluției. Revizuirile și modificările post-livrare
                sunt reglementate în ofertă (ex. număr de runde de feedback
                incluse).
              </p>
            </section>

            <section className="space-y-3 text-sm leading-relaxed text-foreground/80">
              <h2 className="font-medium text-foreground">
                6. Proprietate intelectuală și drepturi de autor
              </h2>
              <p>
                Drepturile de autor asupra lucrărilor create (cod, design,
                conținut generat în cadrul proiectului) sunt transferate
                clientului conform contractului încheiat. Transferul complet se
                face, de regulă, după achitarea integrală a sumelor convenite și
                poate fi formalizat prin contract de cesiune a drepturilor de
                autor (model disponibil la cerere). Materialele preexistente ale
                prestatorului (biblioteci, șabloane interne, know-how) rămân
                proprietatea prestatorului, iar clientul primește o licență de
                utilizare în scopul proiectului, dacă este cazul.
              </p>
            </section>

            <section className="space-y-3 text-sm leading-relaxed text-foreground/80">
              <h2 className="font-medium text-foreground">
                7. Confidențialitate
              </h2>
              <p>
                Părțile se angajează să păstreze confidențialitatea informațiilor
                primite în legătură cu proiectul și cu relația contractuală.
                Prelucrarea datelor cu caracter personal este realizată conform
                politicii de confidențialitate a site‑ului și cu legislația
                aplicabilă (GDPR). Detalii în{" "}
                <Link
                  href="/privacy"
                  className="text-foreground underline decoration-foreground/40 underline-offset-2 hover:decoration-foreground/70"
                >
                  Politica de confidențialitate
                </Link>
                .
              </p>
            </section>

            <section className="space-y-3 text-sm leading-relaxed text-foreground/80">
              <h2 className="font-medium text-foreground">
                8. Limitarea răspunderii
              </h2>
              <p>
                Prestatorul își desfășoară activitatea cu diligență și conform
                practicilor profesionale. Răspunderea este limitată la valoarea
                sumei efectiv plătite pentru serviciul care dă naștere
                reclamatiei, exceptând cazurile de rea-voință sau vina gravă.
                Prestatorul nu răspunde pentru daune indirecte, pierderi de
                profit sau întârzieri cauzate de furnizori terți (găzduire,
                domenii etc.) în afara controlului său rezonabil.
              </p>
            </section>

            <section className="space-y-3 text-sm leading-relaxed text-foreground/80">
              <h2 className="font-medium text-foreground">
                9. Reziliere, forță majoră
              </h2>
              <p>
                Contractul poate fi reziliat conform clauzelor din ofertă/contract
                (perioadă de preaviz, efecte în cazul rezilierii). În caz de
                forță majoră (evenimente imprevizibile, inevitabile și
                independente de voința părților), obligațiile sunt suspendate pe
                durata acestora; dacă situația se prelungește excesiv, părțile
                pot negocia rezilierea fără penalități.
              </p>
            </section>

            <section className="space-y-3 text-sm leading-relaxed text-foreground/80">
              <h2 className="font-medium text-foreground">
                10. Legea aplicabilă și litigii
              </h2>
              <p>
                Acești termeni și contractele încheiate sunt guvernate de
                legea română. Orice litigiu va fi soluționat pe cale amiabilă
                în primul rând; în lipsa unui acord, litigiul va fi supus
                instanțelor judecătorești competente din România.
              </p>
            </section>

            <section className="space-y-3 text-sm leading-relaxed text-foreground/80">
              <h2 className="font-medium text-foreground">
                11. Modificări, contact
              </h2>
              <p>
                Prestatorul poate actualiza acești termeni și condiții; versiunea
                la zi este publicată pe această pagină. Relațiile contractuale
                în curs rămân guvernate de termenii la data încheierii
                contractului, dacă nu se agreează altfel. Pentru întrebări
                legate de termeni sau servicii:{" "}
                <Link
                  href="/contact"
                  className="text-foreground underline decoration-foreground/40 underline-offset-2 hover:decoration-foreground/70"
                >
                  Contact
                </Link>
                .
              </p>
            </section>

            <p className="border-t border-foreground/10 pt-6 text-xs text-foreground/60">
              Ultima actualizare: martie 2025. Document informativ; pentru
              relații contractuale concrete se aplică oferta și contractul
              semnat.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
