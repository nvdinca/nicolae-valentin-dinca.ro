## nicolae-valentin-dinca.ro – proiect Next.js

Site personal pentru **dezvoltare web full‑stack în imobiliare de lux** (poziționare în `src/lib/brand.ts`), construit cu Next.js (App Router), TypeScript și Tailwind CSS 4.

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

Calitate cod și build (aceleași verificări ca în CI):

```bash
npm run lint
npm run typecheck
npm run test:run
npm run build:next
```

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

## Variabile de mediu

Copiază `.env.example` în `.env.local` (nu comita `.env.local`).

- **`NEXT_PUBLIC_PLAUSIBLE_DOMAIN`** — domeniul site‑ului pentru [Plausible](https://plausible.io) (fără `https://`). Scriptul se încarcă **doar** după ce utilizatorul acceptă cookie‑urile „statistici” în bannerul GDPR.
- **Sentry** (opțional): pentru monitorizare erori poți integra ulterior `@sentry/nextjs`; vezi comentarii în `.env.example`.

## CI (GitHub Actions)

Workflow-ul `.github/workflows/ci.yml` rulează la push/PR pe `master` sau `main`: `npm ci` → lint → typecheck → teste unitare → `npm run build:next`.

## Teste

- **Vitest** — `npm run test` (watch) sau `npm run test:run` (o dată).
- Fișiere: `src/**/*.test.ts` (ex. `projects`, `cookie-consent`).

## Analytics și evenimente

- **Core Web Vitals** — raportate doar dacă utilizatorul acceptă categoria „statistici” (`WebVitalsGate`).
- **Plausible** — dacă e setat domeniul în env, se încarcă după același consimțământ (`PlausibleGate`).
- Evenimente declarate în cod: `Header Apply Click`, `Contact Form Submit` (vezi `src/lib/analytics.ts` și `trackEvent`).

## Structură (pe scurt)

- `src/app` – pagini (Home, About, Work, **Work/[slug]**, Services, Process, Contact) + `not-found`, `sitemap`, `robots`, `opengraph-image`, API Contact.
- `src/components` – layout (Header, Footer, Container, **MainContent**), cookie consent, analytics (Web Vitals, Plausible).
- `src/content/projects.ts` – date pentru proiecte; fiecare slug are pagină dedicată `/work/[slug]`.
- `src/lib/brand.ts` – titluri și tagline‑uri românești centralizate.
- `src/lib/site.ts` – origine canonică (`SITE_ORIGIN`).
- `siteplan/` – planuri de conținut (documentație).
- `contract/` – model de contract (cesiune drepturi de autor software).
- `scripts/` – generare PDF din siteplan, favicon etc.

## Cum adaugi un proiect nou în Work

1. Deschide `src/content/projects.ts`.
2. Adaugă un obiect nou în array-ul `projects`, cu **`slug` unic** (folosit la URL `/work/slug-ul-tau`).

Paginile **Proiecte** și **Home** vor afișa automat proiectul; pagina de **studiul de caz** se generează static pentru fiecare slug.

## Linkuri rețele sociale (LinkedIn, GitHub, etc.)

Editează **`src/lib/social.ts`**: înlocuiește `TAI_PROFILUL_LINKEDIN` și `TAI_USERNAME_GITHUB` cu username-urile tale reale. Linkurile apar în **Footer** și în **schema SEO** (Person).

## Cum modifici conținutul (copy)

- Pagini principale: `src/app/page.tsx`, `src/app/(site)/about/page.tsx`, `src/app/(site)/work/page.tsx`, `src/app/(site)/work/[slug]/page.tsx`, `services`, `process`, `contact`.
- Titluri de brand scurte: `src/lib/brand.ts`.
- Ghiduri: `siteplan/`.

## Accesibilitate și UX

- **Skip link:** primul tab pe pagină duce la „Sari la conținut”.
- **Banner cookie:** spațiu suplimentar jos pe `<main>` când bannerul e vizibil (`MainContent`).
- **Manifest PWA:** `public/manifest.json`.

## SEO

- **Sitemap:** include rutele statice și `/work/[slug]` pentru fiecare proiect (`src/app/sitemap.ts`).
- **JSON-LD:** Person + WebSite + ProfessionalService în `layout.tsx`; ContactPage pe `/contact`; CreativeWork pe fiecare studiu de caz.

## Checklist de mentenanță

- **Trimestrial:** linkuri CTA, WhatsApp, Lighthouse / CWV, portofoliu (`projects.ts`).
- **La schimbarea politicii GDPR:** actualizează `POLICY_LAST_UPDATED` în `src/lib/brand.ts`.
- **După modificări majore de conținut:** rulează `npm run test:run` și `npm run build:next` înainte de deploy.

## Deploy pe Vercel

1. Conectează repo-ul la Vercel.
2. **Build Command:** `npm run build:next` (vezi `vercel.json`).
3. **Environment variables:** opțional `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` pentru analytics.
4. Domeniu și HTTPS — conform ghidului Vercel.

## Deploy pe Cloudflare Workers (OpenNext)

`npm run build` rulează OpenNext. Vezi `open-next.config.ts` și `wrangler.jsonc`. Deploy: `npm run deploy` sau `npm run cloudflare:deploy`.

## Înainte de deploy

- WhatsApp: `src/app/(site)/contact/ContactForm.tsx` (`wa.me/`).
- OG: `public/og-image.png`, `opengraph-image.tsx`.
- După deploy: [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) dacă e nevoie.

## Contracte și PDF-uri

- Model contract: `contract/model-cesiune-drepturi-autor-software.md`.
- PDF siteplan: `npm run siteplan:pdf` → `pdf/`.
