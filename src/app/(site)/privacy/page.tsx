import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/shared/Section";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { CookiePreferencesTrigger } from "@/components/cookie-consent/CookiePreferencesTrigger";
import { POLICY_LAST_UPDATED } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Politică de confidențialitate & cookies",
  description:
    "Informații despre modul în care sunt prelucrate datele cu caracter personal și cum sunt folosite cookie‑urile pe nicolae-valentin-dinca.ro (GDPR).",
};

export default function PrivacyPage() {
  return (
    <>
      <Section>
        <Container>
          <Breadcrumbs items={[{ label: "Acasă", href: "/" }, { label: "Confidențialitate" }]} />
          <div className="max-w-3xl space-y-8">
            <div className="space-y-3">
              <h1 className="font-serif text-4xl tracking-tight md:text-5xl">
                Politică de confidențialitate & cookies
              </h1>
              <p className="text-xs text-foreground/55">
                Ultima actualizare: {POLICY_LAST_UPDATED}
              </p>
              <p className="text-sm leading-relaxed text-foreground/80">
                Această pagină descrie modul în care sunt prelucrate datele cu
                caracter personal când folosești nicolae-valentin-dinca.ro și cum
                gestionăm cookie‑urile și tehnologiile similare. Documentul este
                întocmit în conformitate cu Regulamentul (UE) 2016/679 (GDPR) și
                legislația română aplicabilă.
              </p>
              <p className="text-sm text-foreground/70">
                Poți modifica oricând alegerile privind cookie‑urile:{" "}
                <CookiePreferencesTrigger />.
              </p>
            </div>

            <section className="space-y-3 text-sm leading-relaxed text-foreground/80">
              <h2 className="font-medium text-foreground">
                1. Operatorul de date (responsabilul prelucrării)
              </h2>
              <p>
                Site‑ul{" "}
                <Link
                  href="https://nicolae-valentin-dinca.ro"
                  className="font-medium text-foreground underline decoration-foreground/35 underline-offset-2"
                >
                  nicolae-valentin-dinca.ro
                </Link>{" "}
                este operat de <strong>Nicolae‑Valentin Dincă</strong>, în calitate
                de persoană fizică autorizată / profesionist independent,
                specializat în dezvoltare web full‑stack și platforme digitale
                pentru imobiliare de lux.
              </p>
              <p>
                Pentru solicitări legate de protecția datelor (exercitarea
                drepturilor, întrebări despre prelucrare), folosește formularul de
                contact sau canalele indicate pe site (ex. e‑mail / WhatsApp), cu
                subiect clar: „GDPR / date personale”.
              </p>
            </section>

            <section className="space-y-3 text-sm leading-relaxed text-foreground/80">
              <h2 className="font-medium text-foreground">
                2. Ce categorii de date prelucrăm
              </h2>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  <span className="font-medium">Date furnizate de tine:</span>{" "}
                  nume, adresă de e‑mail, conținutul mesajului din formularul de
                  contact, precum și alte informații pe care alegi voluntar să le
                  incluzi (ex. tip de business, buget orientativ, link către site
                  existent).
                </li>
                <li>
                  <span className="font-medium">Date tehnice limitate:</span>{" "}
                  înregistrări de server sau jurnale pot include adresa IP,
                  tipul de browser, data și ora accesării, în măsura în care sunt
                  generate de infrastructura de găzduire (hosting) și sunt necesare
                  pentru securitate și funcționarea serviciului.
                </li>
                <li>
                  <span className="font-medium">Date despre cookie‑uri și
                  preferințe:</span> stocarea alegerii tale privind cookie‑urile
                  (ex. în browser, prin tehnologii locale), pentru a respecta
                  consimțământul și pentru a nu te întreba repetat la fiecare
                  vizită.
                </li>
              </ul>
            </section>

            <section className="space-y-3 text-sm leading-relaxed text-foreground/80">
              <h2 className="font-medium text-foreground">
                3. Scopuri și temeiuri legale (art. 6 GDPR)
              </h2>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  <span className="font-medium">Răspuns la solicitări de
                  contact:</span> prelucrarea datelor din formular pentru a te
                  contacta și a continua discuția (de regulă prin WhatsApp) —{" "}
                  <strong>temei:</strong> măsuri precontractuale la cererea
                  persoanei vizate și/sau interes legitim în a răspunde
                  solicitărilor profesionale, în limita proporționalității.
                </li>
                <li>
                  <span className="font-medium">Funcționarea site‑ului și
                  securitate:</span> livrarea paginilor, protecție împotriva
                  abuzurilor, depanare — <strong>temei:</strong> interes legitim
                  și/sau executarea unui contract la distanță cu furnizorul de
                  hosting, după caz.
                </li>
                <li>
                  <span className="font-medium">Cookie‑uri și tehnologii
                  similare (non‑esențiale):</span> ex. statistici anonime de
                  performanță (Core Web Vitals) — <strong>temei:</strong>{" "}
                  <strong>consimțământ</strong>, exprimat prin banner și salvat
                  în preferințele tale. Poți retrage consimțământul oricând, fără
                  a afecta legalitatea prelucrării anterioare.
                </li>
              </ul>
            </section>

            <section className="space-y-3 text-sm leading-relaxed text-foreground/80">
              <h2 className="font-medium text-foreground">
                4. Cookie‑uri: categorii și durate
              </h2>
              <p>
                Folosim o clasificare simplă, aliniată cu recomandările EDPB și
                practica ANSPDCP:
              </p>
              <div className="overflow-x-auto rounded-xl border border-foreground/10 bg-surface/60">
                <table className="w-full min-w-[280px] text-left text-xs md:text-sm">
                  <thead>
                    <tr className="border-b border-foreground/10">
                      <th className="p-3 font-medium text-foreground">Categorie</th>
                      <th className="p-3 font-medium text-foreground">Scop</th>
                      <th className="p-3 font-medium text-foreground">Temei</th>
                    </tr>
                  </thead>
                  <tbody className="text-foreground/85">
                    <tr className="border-b border-foreground/10 align-top">
                      <td className="p-3">Strict necesare</td>
                      <td className="p-3">
                        Funcționarea de bază a site‑ului, securitate, memorarea
                        preferinței tale privind cookie‑urile (dacă tehnologia o
                        permite prin stocare locală).
                      </td>
                      <td className="p-3">Interes legitim / necesitate tehnică</td>
                    </tr>
                    <tr className="align-top">
                      <td className="p-3">Statistici (anonime)</td>
                      <td className="p-3">
                        Măsurători de performanță (ex. Core Web Vitals), fără
                        profilare comportamentală pentru publicitate.
                      </td>
                      <td className="p-3">Consimțământ</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                Durata: cookie‑urile strict necesare pot persista pe durata sesiunii
                sau o perioadă limitată impusă de platformă; preferința ta privind
                consimțământul poate fi păstrată până la ștergerea locală sau la
                maximum recomandat (ex. 12 luni), după care îți vom solicita din nou
                acordul dacă legislația o impune.
              </p>
            </section>

            <section className="space-y-3 text-sm leading-relaxed text-foreground/80">
              <h2 className="font-medium text-foreground">
                5. Destinatari și transferuri
              </h2>
              <p>
                Datele tale pot fi puse la dispoziția furnizorilor de infrastructură
                (găzduire site — ex. Vercel, Cloudflare sau alții, conform
                configurației la momentul respectiv), strict pentru furnizarea
                serviciului. Aceștia acționează în calitate de împuterniciți sau
                operatori asociați, după caz, în baza contractelor și clauzelor de
                protecție a datelor.
              </p>
              <p>
                Dacă transferăm date în afara SEE, ne bazăm pe garanții adecvate
                (ex. clauze contractuale standard aprobate de Comisie), acolo unde
                este cazul.
              </p>
            </section>

            <section className="space-y-3 text-sm leading-relaxed text-foreground/80">
              <h2 className="font-medium text-foreground">
                6. Durata stocării
              </h2>
              <p>
                Datele din formularul de contact sunt păstrate cât timp este necesar
                pentru a răspunde solicitării și pentru eventuale demersuri
                ulterioare legate de același proiect, apoi sunt șterse sau
                anonimizate, cu excepția cazurilor în care legea impune păstrarea
                (ex. evidențe contabile, litigii).
              </p>
            </section>

            <section className="space-y-3 text-sm leading-relaxed text-foreground/80">
              <h2 className="font-medium text-foreground">7. Drepturile tale</h2>
              <p>
                În condițiile legii, ai următoarele drepturi: acces, rectificare,
                ștergere („dreptul de a fi uitat”), restricționarea prelucrării,
                portabilitate, opoziție și retragerea consimțământului pentru
                prelucrările bazate pe consimțământ.
              </p>
              <p>
                Ne poți contacta pentru a-ți exercita drepturile. Îți vom răspunde
                în termen de <strong>cel mult 30 de zile</strong> (cu posibilitatea
                prelungirii în cazuri legate de complexitate, conform GDPR).
              </p>
              <p>
                Ai dreptul să depui plângere la{" "}
                <a
                  href="https://www.dataprotection.ro/"
                  className="font-medium text-foreground underline decoration-foreground/35 underline-offset-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Autoritatea Națională de Supraveghere a Prelucrării Datelor cu
                  Caracter Personal (ANSPDCP)
                </a>
                .
              </p>
            </section>

            <section className="space-y-3 text-sm leading-relaxed text-foreground/80">
              <h2 className="font-medium text-foreground">
                8. Securitate
              </h2>
              <p>
                Aplicăm măsuri tehnice și organizatorice rezonabile pentru a proteja
                datele împotriva accesului neautorizat, pierderii sau alterării
                (inclusiv conexiuni criptate unde este disponibil HTTPS).
              </p>
            </section>

            <section className="space-y-3 text-sm leading-relaxed text-foreground/80">
              <h2 className="font-medium text-foreground">
                9. Modificări
              </h2>
              <p>
                Această politică poate fi actualizată. Versiunea în vigoare este
                publicată pe această pagină; îți recomandăm să o consulti periodic.
              </p>
            </section>
          </div>
        </Container>
      </Section>
    </>
  );
}
