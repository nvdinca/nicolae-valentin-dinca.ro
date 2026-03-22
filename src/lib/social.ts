/**
 * Linkuri rețele sociale – editează aici; sunt folosite în Footer și în schema SEO (Person).
 */
export const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nicolae-valentin-dinca/",
    icon: "linkedin",
  },
  {
    label: "GitHub",
    href: "https://github.com/nvdinca",
    icon: "github",
  },
  {
    label: "X",
    href: "https://x.com/nvdinca",
    icon: "x",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@Nicolae-Valentin-Dinca",
    icon: "youtube",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@nvdinca",
    icon: "tiktok",
  },
] as const;

/** URL-uri pentru schema.org Person sameAs (doar href-urile). */
export const sameAsUrls: string[] = socialLinks.map((s) => s.href);
