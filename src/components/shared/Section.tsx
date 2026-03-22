import { cn } from "@/lib/cn";

export function Section({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section className={cn("py-16 md:py-24 fade-section", className)}>
      {children}
    </section>
  );
}

