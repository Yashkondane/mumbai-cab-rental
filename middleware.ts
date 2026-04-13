import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const CANONICAL_HOST = "www.mumbaicabsservice.com";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") ?? "";

  if (host !== CANONICAL_HOST) {
    const url = request.nextUrl.clone();
    url.hostname = CANONICAL_HOST;
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"],
};
