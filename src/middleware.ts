import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// Middleware simplu:
// - nu mai avem zonă de admin;
// - forțăm HTTPS în producție pentru domenii non-locale.

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const hostname = url.hostname;

  const isLocalhost =
    hostname === "localhost" || hostname === "127.0.0.1" || hostname === "::1";

  if (!isLocalhost && url.protocol === "http:") {
    const httpsUrl = new URL(url.toString());
    httpsUrl.protocol = "https:";
    return NextResponse.redirect(httpsUrl, 308);
  }

  return NextResponse.next();
}
