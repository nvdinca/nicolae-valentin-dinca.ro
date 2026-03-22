import { Container } from "@/components/layout/Container";

export default function Loading() {
  return (
    <div className="flex min-h-[40vh] items-center justify-center" aria-live="polite" aria-busy="true">
      <Container>
        <div className="flex flex-col items-center gap-4">
          <div
            className="h-8 w-8 animate-pulse rounded-full border-2 border-foreground/20 border-t-foreground/60"
            aria-hidden
          />
          <p className="text-sm text-foreground/60">Se încarcă…</p>
        </div>
      </Container>
    </div>
  );
}
