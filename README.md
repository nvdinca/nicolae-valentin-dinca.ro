## nicolae-valentin-dinca.ro – proiect Next.js

Site personal pentru un Luxury Real Estate Full‑Stack Web Developer, construit cu Next.js (App Router), TypeScript și Tailwind CSS 4.

## Rulare / comenzi de bază

Instalare dependențe:

```bash
npm install
```

Development:

```bash
npm run dev
```

Dacă vezi „Unable to acquire lock” sau „Connection refused”, șterge cache-ul și repornește: `Remove-Item -Recurse -Force .next` (PowerShell), apoi `npm run dev`. Deschide în browser adresa afișată în terminal (ex. http://localhost:3000 sau http://localhost:3001).

Build de producție pentru **Cloudflare Workers** (Next.js + bundle OpenNext; folosit în CI când Build Command este `npm run build`):

```bash
npm run build
```

Doar Next.js, fără pachet Worker (ex. Vercel — vezi `vercel.json`):

```bash
npm run build:next
```

(`npm run build:cloudflare` este alias pentru același lucru ca `npm run build`.)

Server de producție (după `build:next` sau după un build Next inclus în OpenNext):

```bash
npm start
```

Generare PDF din documentele siteplan (stil luxury, în `pdf/`):

```bash
npm run siteplan:pdf
```

## Structură (pe scurt)

- `src/app` – paginile principale (Home, About, Work, Services, Process, Contact) + `not-found`, `sitemap`, `robots`, `opengraph-image`, API Contact.
- `src/components` – layout (Header, Footer, Container), shared (Section), analytics (WebVitalsReporter).
- `src/content/projects.ts` – date pentru proiecte (portofoliu).
- `siteplan/` – planuri de conținut, structură și identitate de brand (documentație).
- `contract/` – model de contract (cesiune drepturi de autor software).
- `scripts/` – script pentru generare PDF din siteplan (`npm run siteplan:pdf` → `pdf/`).

## Cum adaugi un proiect nou în Work

1. Deschide `src/content/projects.ts`.
2. Adaugă un nou obiect în array-ul `projects`, de forma:

```ts
projects.push({
  slug: "exemplu-proiect",
  title: "Titlu proiect",
  clientType: "Agent independent / Agenție / Developer",
  market: "Oraș, țară",
  goals: ["Obiectiv 1", "Obiectiv 2"],
  solution: ["Soluție 1", "Soluție 2"],
  results: ["Rezultat 1", "Rezultat 2"], // opțional
});
```

Pagina `Work` va afișa automat proiectul pe baza acestor date.

## Linkuri rețele sociale (LinkedIn, GitHub, etc.)

Editează **`src/lib/social.ts`**: înlocuiește `TAI_PROFILUL_LINKEDIN` și `TAI_USERNAME_GITHUB` cu username-urile tale reale. Poți adăuga și alte rețele (ex. X/Twitter) după modelul din comentarii. Linkurile apar în **Footer** (cu icoane) și în **schema SEO** (Person, pentru Google).

## Cum modifici conținutul (copy)

- Pagini principale:
  - Home: `src/app/page.tsx`
  - About: `src/app/(site)/about/page.tsx`
  - Work: `src/app/(site)/work/page.tsx`
  - Services: `src/app/(site)/services/page.tsx`
  - Process: `src/app/(site)/process/page.tsx`
  - Contact: `src/app/(site)/contact/page.tsx` + `ContactForm.tsx`
- Ghiduri și structuri de conținut: fișierele din `siteplan/`.

## Accesibilitate și UX

- **Skip link:** primul tab pe pagină duce la „Sari la conținut” (vizibil doar la focus).
- **Manifest PWA:** `public/manifest.json` – permite „Adaugă pe ecran” pe mobile; culori și icon aliniate la brand.
- **Loading:** la navigarea pe paginile din (site) (About, Work, Services, etc.) se afișează un indicator de încărcare (`src/app/(site)/loading.tsx`). Home (`/`) se încarcă direct, fără loading.
- **Footer:** link către pagina Confidențialitate (`/privacy`).

## Checklist de mentenanță

Recomandare de verificări periodice:

- **Trimestrial**
  - Verifică dacă toate linkurile importante funcționează (CTA-uri, Contact, WhatsApp).
  - Verifică performance-ul de bază (Lighthouse / Core Web Vitals).
  - Actualizează portofoliul (`projects.ts`) și, dacă e nevoie, textele din Services.

- **Anual**
  - Actualizează studii de caz și testimoniale cu exemple reale recente.
  - Revizuiește textele de poziționare (Home, About, Services) în funcție de cum a evoluat serviciul tău.

## Deploy pe Vercel

1. **Conectează repo-ul:** [vercel.com](https://vercel.com) → Import Project → alege repository-ul (GitHub/GitLab/Bitbucket).
2. **Setări build (de obicei detectate automat):**
   - **Framework Preset:** Next.js
   - **Build Command:** `npm run build:next` (vezi `vercel.json`; evită bundle-ul OpenNext pentru Cloudflare)
   - **Output Directory:** (lasă implicit; Vercel detectează Next.js)
   - **Install Command:** `npm install`
3. **Variabile de mediu:** nu sunt necesare pentru site-ul actual. Dacă adaugi ulterior (ex. analytics), le configurezi în Project → Settings → Environment Variables.
4. **Domeniu:** după deploy, în Project → Settings → Domains adaugi `nicolae-valentin-dinca.ro` (sau subdomeniul dorit) și urmezi pașii de verificare DNS.
5. **HTTPS:** este activat automat de Vercel.

## Deploy pe Cloudflare Workers (OpenNext)

Comanda de **build** trebuie să ruleze OpenNext (generează `.open-next/`), nu doar `next build`. În repo, `npm run build` face deja asta (vezi `buildCommand` în `open-next.config.ts`).

- **Build Command:** `npm run build` (implicit în multe setup-uri)
- **Deploy Command:** `npx wrangler deploy` (sau `npx opennextjs-cloudflare deploy`)

Într-un singur pas local: `npm run deploy` (build + deploy). Dacă în Cloudflare ai doar `next build` ca build, vei primi „Could not find compiled Open Next config” — folosește `npm run build` din acest proiect.

## Înainte de deploy

- **Favicon / icon:** în `public/` sunt deja `icon.png` (pentru Apple touch icon) și `og-image.png` (imagine OG pentru partajare). Pentru `favicon.ico`, adaugă un fișier în `public/favicon.ico` (poți converti `public/icon.png` la .ico cu un [generator online](https://favicon.io)).
- **WhatsApp:** numărul din formularul de contact este în `src/app/(site)/contact/ContactForm.tsx` (caută `wa.me/`). Schimbă-l dacă e cazul.
- **Variabile de mediu:** pe Vercel (sau alt host) nu e nevoie de variabile pentru site-ul actual. Dacă adaugi servicii (ex. analytics), setează-le în Environment Variables.
- **Domeniu:** conectează domeniul în panoul de hosting; HTTPS este activ automat pe Vercel.
- **După deploy:** verifică partajarea pe social (ex. [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)) și linkul către WhatsApp din Contact.

## Contracte și PDF-uri

- **Model contract:** `contract/model-cesiune-drepturi-autor-software.md` – completabil și exportabil în Word/PDF pentru cesiune drepturi de autor pe software.
- **PDF siteplan:** după modificări în `siteplan/*.md`, rulează `npm run siteplan:pdf`; fișierele vor fi generate în `pdf/` cu stilul vizual al site-ului.

