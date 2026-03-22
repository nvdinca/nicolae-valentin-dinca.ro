import Link from "next/link";
import { Container } from "./Container";
import { SocialLinks } from "@/components/shared/SocialLinks";
import { CookiePreferencesTrigger } from "@/components/cookie-consent/CookiePreferencesTrigger";

export function Footer() {
  return (
    <footer className="border-t border-foreground/10" role="contentinfo">
      <Container className="py-10 text-sm text-foreground/70">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <p>© {new Date().getFullYear()} Nicolae-Valentin Dincă</p>
            <span className="hidden text-foreground/40 md:inline" aria-hidden>·</span>
            <Link
              href="/privacy"
              className="text-foreground/70 underline decoration-foreground/30 underline-offset-2 hover:text-foreground hover:decoration-foreground/50"
            >
              Confidențialitate
            </Link>
            <span className="hidden text-foreground/40 md:inline" aria-hidden>·</span>
            <Link
              href="/termeni"
              className="text-foreground/70 underline decoration-foreground/30 underline-offset-2 hover:text-foreground hover:decoration-foreground/50"
            >
              Termeni și condiții
            </Link>
            <span className="hidden text-foreground/40 md:inline" aria-hidden>·</span>
            <CookiePreferencesTrigger />
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
            <SocialLinks />
            <p className="text-foreground/60">
              Luxury Imobiliare • dezvoltare web full‑stack la comandă
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

