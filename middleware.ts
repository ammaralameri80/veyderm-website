import { NextResponse, type NextRequest } from "next/server";
import { ENABLE_ARABIC } from "@/lib/content";

// 1) When Arabic is disabled, redirect any /ar route to its English equivalent.
// 2) Otherwise, expose the pathname to server components (via a request header)
//    so the root layout can set <html lang/dir> for the Arabic routes.
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (!ENABLE_ARABIC && (pathname === "/ar" || pathname.startsWith("/ar/"))) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.replace(/^\/ar/, "") || "/";
    return NextResponse.redirect(url);
  }

  const headers = new Headers(request.headers);
  headers.set("x-pathname", pathname);
  return NextResponse.next({ request: { headers } });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon|.*\\.(?:png|svg|ico|webmanifest|txt|xml)).*)"],
};
