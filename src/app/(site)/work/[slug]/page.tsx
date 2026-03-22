import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Script from "next/script";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/shared/Section";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { getProjectBySlug, projects } from "@/content/projects";
import { SITE_ORIGIN } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) {
    return { title: "Proiect" };
  }
  const title = project.title.length > 62 ? `${project.title.slice(0, 59)}…` : project.title;
  return {
    title: `${title} | Proiecte`,
    description: `Studiu de caz: ${project.clientType}, ${project.market}. Obiective, soluție și rezultate.`,
    alternates: {
      canonical: `/work/${slug}`,
    },
    openGraph: {
      title: project.title,
      description: `Studiu de caz — ${project.clientType}`,
      url: `/work/${slug}`,
    },
  };
}

export default async function WorkProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const caseStudyJson = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: `Studiu de caz pentru ${project.clientType} — ${project.market}`,
    url: `${SITE_ORIGIN}/work/${slug}`,
    inLanguage: "ro-RO",
    author: {
      "@type": "Person",
      name: "Nicolae-Valentin Dincă",
      url: SITE_ORIGIN,
    },
  };

  return (
    <>
      <Script
        id={`case-study-jsonld-${slug}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudyJson) }}
      />
      <Section>
        <Container>
          <Breadcrumbs
            items={[
              { label: "Acasă", href: "/" },
              { label: "Proiecte", href: "/work" },
              { label: "Studiu de caz" },
            ]}
          />
          <div className="max-w-3xl">
            <p className="text-sm text-foreground/60">
              {project.clientType} • {project.market}
            </p>
            <h1 className="mt-4 font-serif text-3xl tracking-tight md:text-5xl">
              {project.title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-foreground/80">
              Studiu de caz: cum am tradus obiectivele de business într-o platformă
              digitală aliniată cu poziționarea în imobiliare de lux.
            </p>
          </div>

          <div className="mt-12 grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="font-serif text-xl tracking-tight md:text-2xl">
                Obiective
              </h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-foreground/85">
                {project.goals.map((g) => (
                  <li key={g}>{g}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-serif text-xl tracking-tight md:text-2xl">
                Soluție
              </h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-foreground/85">
                {project.solution.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          </div>

          {project.results && project.results.length > 0 && (
            <div className="mt-10 max-w-3xl">
              <h2 className="font-serif text-xl tracking-tight md:text-2xl">
                Rezultate
              </h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-foreground/85">
                {project.results.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              href="/work"
              className="text-sm font-medium text-foreground underline-offset-4 transition-colors hover:underline"
            >
              ← Înapoi la toate proiectele
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-foreground underline-offset-4 transition-colors hover:underline"
            >
              Aplică pentru un proiect similar →
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
