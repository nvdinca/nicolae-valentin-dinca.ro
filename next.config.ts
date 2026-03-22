import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  // Core Web Vitals: image optimization when using next/image
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    const isDev = process.env.NODE_ENV === "development";
    const scriptSrc = isDev
      ? "script-src 'self' 'unsafe-inline' 'unsafe-eval' https:;" // HMR în dev
      : "script-src 'self' 'unsafe-inline' https:;";
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self';",
              scriptSrc,
              "style-src 'self' 'unsafe-inline' https:;",
              "img-src 'self' data: https:;",
              "font-src 'self' data: https:;",
              "connect-src 'self' https: ws: wss:;", // WebSocket pentru HMR
              "frame-ancestors 'none';",
              "form-action 'self';",
              "base-uri 'self';",
            ].join(" "),
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value:
              "geolocation=(), microphone=(), camera=(), payment=(), usb=(), fullscreen=(self)",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
