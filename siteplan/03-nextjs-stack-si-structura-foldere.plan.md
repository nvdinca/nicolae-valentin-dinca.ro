---
name: nextjs-stack-si-structura-foldere
overview: Plan pentru stack-ul Next.js (App Router) + structura de foldere pentru site-ul de prezentare în română, cu Tailwind și conținut gestionat local (fără CMS inițial).
todos:
  - id: decide-content-format
    content: "Alege formatul de conținut: TS/JSON objects vs MDX/Markdown (recomand MDX pentru Work)."
    status: pending
  - id: setup-tokens-tailwind
    content: Definește CSS variables pentru brand tokens și mapează-le în Tailwind config.
    status: pending
  - id: scaffold-routes-components
    content: Creează rutele în `app/(site)` și componentele pe secțiuni (home/services/work).
    status: pending
  - id: wire-contact-handler
    content: "Decide și implementează fluxul pentru Contact: route handler intern sau serviciu extern."
    status: pending
isProject: false
---

## Stack recomandat (Next.js + React)

- **Framework**: Next.js (App Router) + React
- **Limbaj**: TypeScript (recomandat pentru consistență; dacă vrei JS-only, planul rămâne identic)
- **Styling**: Tailwind CSS + **CSS Variables** pentru brand tokens (culori, tipografie, spacing)
- **Conținut**: local, în repo
  - Pagini statice (Home/About/Services/Process/Contact)
  - `Work` + studii de caz din fișiere (ex: MDX/Markdown) ca să poți adăuga proiecte rapid
- **SEO**: Next Metadata API (title/description per pagină), sitemap/robots
- **Formular Contact**: Next Route Handler (`app/api/contact/route.ts`) sau serviciu extern (Formspree) — decizi la implementare
- **Deploy**: Vercel (implicit) sau orice hosting compatibil Node

## Structură de foldere (App Router)

### Rute

- `app/(site)/page.tsx` – Home
- `app/(site)/about/page.tsx`
- `app/(site)/work/page.tsx`
- `app/(site)/work/[slug]/page.tsx` – studiu de caz (opțional)
- `app/(site)/services/page.tsx` – pagina de vânzare (din `siteplan/07-services-sales-page.md`)
- `app/(site)/process/page.tsx`
- `app/(site)/contact/page.tsx`

Structura `app/(site)/...` păstrează rutele „publice” grupate, dar nu schimbă URL-urile.

### Componente

- `src/components/layout/`
  - `Header.tsx`, `Footer.tsx`, `Container.tsx`
- `src/components/shared/`
  - `Button.tsx`, `Section.tsx`, `CTA.tsx`, `Card.tsx`, `Badge.tsx`
- `src/components/home/` – secțiunile din `[siteplan/04-home-structure.md](siteplan/04-home-structure.md)`
- `src/components/services/` – secțiunile din `[siteplan/07-services-sales-page.md](siteplan/07-services-sales-page.md)`
- `src/components/work/` – listă proiecte, card proiect, galerii

### Conținut (local)

Două variante bune. Alege una la implementare.

- **Variantă A (rapidă, simplă): JSON/TS objects**
  - `src/content/pages/home.ts`
  - `src/content/pages/about.ts`
  - `src/content/pages/services.ts`
  - `src/content/work/*.ts`

- **Variantă B (mai editorial): MDX/Markdown**
  - `content/pages/home.mdx`
  - `content/pages/about.mdx`
  - `content/pages/services.mdx`
  - `content/work/*.mdx` (un fișier per proiect)

Pentru `Work` + studii de caz, MDX este excelent (titlu, galerie, secțiuni).

### Theme & styling

- `src/styles/globals.css`
  - definești CSS variables pe `:root` pentru paletă și tipografie (din `[siteplan/02-brand-identity-system.md](siteplan/02-brand-identity-system.md)`)
- `tailwind.config.ts`
  - mapezi culorile Tailwind la variabile (ex: `colors: { bg: 'rgb(var(--color-bg) / <alpha-value>)' }`)

### Utilitare & tipuri

- `src/lib/`
  - `seo.ts` (helpers pentru metadata)
  - `content.ts` (loader pentru work/case studies)
  - `analytics.ts` (evenimente: CTA click, submit form)
- `src/types/`
  - `work.ts` (tipuri pentru proiecte)

### Assets

- `public/`
  - `images/` (hero, portrete, proiecte)
  - `fonts/` (dacă self-host)

## Convenții de implementare (pentru viteza ta)

- **Design tokens first**: implementezi întâi paleta/typography ca variabile și Tailwind mapping.
- **Page sections**: fiecare secțiune din Home/Services/Work devine un component.
- **Content-driven**: textele și proiectele vin din fișiere, nu din JSX hard-coded, ca să schimbi copy-ul rapid.

## Milestone-uri (în ordine)

- Setup Next.js App Router + Tailwind + globals (tokens)
- Layout global (Header/Footer/Container)
- Pagini goale + routing
- Home (conținut complet) → Services (sales page) → Contact (formular)
- Work (listă + 1 studiu de caz)
- About + Process
- SEO (metadata, sitemap, og images)
- Tracking (CTA, form submit)

## Fișiere de referință din proiectul tău (copy/structuri)

- `[siteplan/04-home-structure.md](siteplan/04-home-structure.md)`
- `[siteplan/07-services-sales-page.md](siteplan/07-services-sales-page.md)`
- `[siteplan/08-work-structure.md](siteplan/08-work-structure.md)`
- `[siteplan/05-about-structure.md](siteplan/05-about-structure.md)`
- `[siteplan/09-process-structure.md](siteplan/09-process-structure.md)`
- `[siteplan/10-contact-structure.md](siteplan/10-contact-structure.md)`
- `[siteplan/02-brand-identity-system.md](siteplan/02-brand-identity-system.md)`
- `[siteplan/11-implementation-checklist.md](siteplan/11-implementation-checklist.md)`

