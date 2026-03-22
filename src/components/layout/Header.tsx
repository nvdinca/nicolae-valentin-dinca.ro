 "use client";

import Link from "next/link";
import { useState } from "react";
import { Container } from "./Container";

const nav = [
  { href: "/about", label: "Despre" },
  { href: "/work", label: "Proiecte" },
  { href: "/services", label: "Servicii" },
  { href: "/process", label: "Proces" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-foreground/10 bg-background/80 backdrop-blur">
      <Container className="flex items-center justify-between py-4">
        <Link href="/" className="text-sm tracking-wide">
          <span className="font-medium">Nicolae-Valentin Dincă</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-foreground/80 hover:text-foreground transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full bg-foreground px-4 py-2 text-sm text-background hover:bg-foreground/90 transition-colors"
          >
            Aplică
          </Link>
        </nav>

        {/* Mobile nav toggle */}
        <button
          type="button"
          aria-label="Deschide meniul"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-full border border-foreground/15 px-3 py-1 text-xs text-foreground/80 hover:border-foreground/40 md:hidden"
        >
          Meniu
        </button>
      </Container>

      {/* Mobile nav panel */}
      {open && (
        <div className="border-t border-foreground/10 bg-background/95 md:hidden">
          <Container className="flex flex-col gap-1 py-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-2 text-sm text-foreground/80 hover:bg-surface/80 hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-1 inline-flex items-center justify-center rounded-full bg-foreground px-4 py-2 text-sm text-background hover:bg-foreground/90"
              onClick={() => setOpen(false)}
            >
              Aplică
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}

