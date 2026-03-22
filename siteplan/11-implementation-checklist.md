## Plan de implementare – nicolae-valentin-dinca.ro

Acesta este ghidul tău ca developer: ce decizii iei înainte, ce faci când începi și ce verifici înainte de lansare.

---

### 1. Decizii tehnice de bază (înainte să scrii cod)

- **Stack front-end**  
  - Ex.: Next.js (React) / Nuxt (Vue) / alt framework cu routing file-based.
- **Renderizare**  
  - CSR + pagini cheie SSR sau SSG (Home, Services, Work, About).
- **Stocare conținut**  
  - Variante posibile:
    - Markdown/MDX în repo (ușor pentru tine, fără panou de admin).
    - Headless CMS (Sanity, Contentful) dacă vrei editare vizuală în timp.
- **Hosting & deploy**  
  - Vercel / Netlify / alt provider → notează aici ce alegi.
- **Analytics & tracking**  
  - Google Analytics / Plausible / altul + ce evenimente urmărești (ex.: click pe „Aplică pentru proiect”, trimitere formular).

Notează aceste alegeri la început, ca să nu refaci structura la mijloc.

---

### 2. Structură de fișiere / directoare (nivel logic)

Indiferent de framework, ai nevoie de echivalentul acestor pagini:

- `/` → Home  
- `/about` → About  
- `/work` → Work (listă proiecte)  
- `/work/[slug]` → Studiu de caz (opțional)  
- `/services` → The Luxury Agent Digital Identity™ (sales page)  
- `/process` → Process  
- `/contact` → Contact

Directoare recomandate (adaptezi la framework):

- `components/`
  - `layout/` – header, footer, layout principal.
  - `home/` – secțiuni Home.
  - `services/` – secțiuni Services.
  - `work/` – carduri proiect, listă, detaliu.
  - `shared/` – butoane, griduri, secțiuni comune (CTA, testimonials etc.).
- `content/` (dacă folosești markdown/JSON)
  - `home.*`
  - `about.*`
  - `services.*`
  - `work/` – fișiere per proiect.
- `styles/` / `theme/`
  - tokens pentru culori, tipografie, spațiere, breakpoints.

---

### 3. Conținut minim necesar (de pregătit înainte de cod)

**Home** (vezi `home-structure.md`)
- Headline + subheadline finale.
- Text pentru 3 piloni.
- 2–3 proiecte selectate cu:
  - nume, tip client, piață, 2–3 bullets (obiectiv, soluție, rezultat).

**About** (vezi `about-structure.md`)
- Povestea ta în 3–5 paragrafe.
- 3–4 principii (filozofie design & dev).
- 2–3 idei clare de „ce te diferențiază”.

**Services** (vezi `services-sales-page.md`)
- Revizuiești textul generat și tai/adaptezi unde este nevoie.
- Decizi dacă afișezi sau nu concret prețuri pe site (poți rămâne la „on call”).

**Work** (vezi `work-structure.md`)
- Minim 3 proiecte cu:
  - context, obiectiv, soluție, rezultate.

**Process** (vezi `process-structure.md`)
- Verifici că etapele și timeline-ul sunt ok pentru modul tău real de lucru.

**Contact** (vezi `contact-structure.md`)
- Listezi câmpurile exacte din formular și textele de confirmare.

---

### 4. Implementarea sistemului de brand (design tokens)

Pe baza `brand-identity-system.md`, definești:

- **Culori** (într-un singur loc)
  - `color-bg`, `color-bg-alt`, `color-text`, `color-accent`, `color-border`, etc.
- **Tipografie**
  - setări pentru H1, H2, H3, body, caption.
- **Spațiere & grid**
  - scale de spacing (ex.: 4/8/12/16/24/32…).
- **Stări de UI**
  - hover, focus, active pentru butoane și linkuri.

Scop: schimbi ceva o singură dată și se propagă peste tot.

---

### 5. Pași de implementare (ordinea recomandată)

1. **Initializezi proiectul**
   - creezi repo / proiect nou cu stack-ul ales;
   - adaugi theme/tokens pentru culori și fonturi.
2. **Layout & navigație**
   - implementezi layout global (header, footer, grid de bază);
   - creezi paginile goale (Home, About, Work, Services, Process, Contact).
3. **Umpli cu conținut paginile critice**
   - Home → Services → Contact (folosind textele deja pregătite).
4. **Adaugi Work & About**
   - listă proiecte + eventual 1–2 studii de caz;
   - About cu poveste, principii, diferențiatori.
5. **Process**
   - secțiune cu pași + mic vizual (timeline / pași).
6. **Micro‑interacțiuni & animații**
   - animări subtile la scroll / hover pe butoane, carduri, hero.
7. **Formular Contact + integrare**
   - trimitere e-mail / API / tool extern (Formspree, etc.);
   - mesaj de confirmare clar.

---

### 6. Checklist de testare & lansare

Înainte de lansare, verifici:

- **Performance**
  - teste Lighthouse / Core Web Vitals;
  - timp de încărcare pe mobil.
- **SEO de bază**
  - title + meta description per pagină;
  - structură headings (un singur H1 per pagină);
  - URL-uri curate.
- **UX**
  - totul este lizibil pe mobil;
  - CTA‑urile importante sunt vizibile fără scroll mare;
  - formularul de contact este ușor de folosit.
- **Tracking**
  - evenimentele critice sunt înregistrate (click pe CTA, submit formular).

După ce toate acestea sunt bifate, poți considera versiunea 1 a platformei gata de mers live.

