import Link from "next/link";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  if (items.length === 0) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      ...(item.href && { item: `https://nicolae-valentin-dinca.ro${item.href}` }),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-foreground/70">
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-x-2">
              {i > 0 && (
                <span aria-hidden className="text-foreground/40">
                  /
                </span>
              )}
              {item.href ? (
                <Link
                  href={item.href}
                  className="underline decoration-foreground/30 underline-offset-2 hover:text-foreground hover:decoration-foreground/50"
                >
                  {item.label}
                </Link>
              ) : (
                <span aria-current="page" className="text-foreground/90">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
