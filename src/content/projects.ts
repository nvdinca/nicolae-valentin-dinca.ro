export type Project = {
  slug: string;
  title: string;
  clientType: string;
  market: string;
  goals: string[];
  solution: string[];
  results?: string[];
};

export const projects: Project[] = [
  {
    slug: "agent-penthouse-bucuresti-nord",
    title:
      "Platformă digitală pentru un agent specializat pe penthouse-uri și vile în Nordul Bucureștiului",
    clientType: "Agent independent",
    market: "București, segment premium / luxury",
    goals: [
      "Să filtreze mai bine leadurile și să atragă clienți aliniați cu zona de preț și tipul de proprietăți.",
      "Să iasă clar din zona de „încă un agent” și să explice poziționarea pe penthouse-uri și vile.",
    ],
    solution: [
      "Pagină principală cinematică, cu mesaj clar despre tipul de proprietăți și modul de lucru.",
      "Structură simplă de pagini, cu accent pe listări reprezentative și procesul de lucru.",
      "Formulare și micro‑CTA‑uri gândite să descurajeze leadurile foarte slabe.",
    ],
    results: [
      "Mai puține cereri „de curiozitate” și mai multe discuții reale pentru mandate premium.",
    ],
  },
  {
    slug: "agentie-proprietati-istorice",
    title:
      "Website boutique pentru o agenție specializată în proprietăți istorice restaurate",
    clientType: "Agenție boutique",
    market: "Brașov & Sibiu, proprietăți istorice",
    goals: [
      "Să poziționeze agenția ca referință în nișa de proprietăți istorice restaurate.",
      "Să prezinte povestea caselor și procesul de restaurare, nu doar metri pătrați.",
    ],
    solution: [
      "Structură editorială de pagini, cu context istoric, înainte / după și povestea fiecărei proprietăți.",
      "Galerii vizuale curate, optimizate pentru imagini mari și detalii arhitecturale.",
      "Șabloane ușor de actualizat intern, fără să sacrifice estetica.",
    ],
    results: [
      "Agenția este percepută ca referința pentru proprietăți istorice în zonă.",
    ],
  },
  {
    slug: "developer-proiect-ultra-premium",
    title:
      "Platformă de prezentare pentru un dezvoltator cu un singur proiect ultra‑premium",
    clientType: "Dezvoltator",
    market: "Piață internațională, segment ultra‑premium",
    goals: [
      "Să vândă povestea și viziunea proiectului, nu doar specificațiile tehnice.",
      "Să creeze un funnel clar de la interes inițial la discuții 1‑la‑1 cu echipa de vânzări.",
    ],
    solution: [
      "Site construit ca o experiență digitală, cu secțiuni pentru viziune, arhitectură și lifestyle.",
      "Integrare video cinematic și imagini fullscreen pentru a susține poziționarea de preț.",
      "Formular scurt + legătură directă către WhatsApp pentru discuții rapide cu echipa.",
    ],
    results: [
      "Platforma devine punctul central al discuțiilor cu potențialii cumpărători și agenți parteneri.",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const projectSlugs: string[] = projects.map((p) => p.slug);

