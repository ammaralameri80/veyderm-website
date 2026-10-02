import { NextResponse, type NextRequest } from "next/server";

// Expose the current pathname to server components (via a request header) so the
// root layout can set <html lang/dir> for the Arabic (/ar) routes.
export function middleware(request: NextRequest) {
  const headers = new Headers(request.headers);
  headers.set("x-pathname", request.nextUrl.pathname);
  return NextResponse.next({ request: { headers } });
}

export const config = {
  // Run on pages only; skip static assets and API routes.
  matcher: ["/((?!_next/static|_next/image|favicon|.*\\.(?:png|svg|ico|webmanifest|txt|xml)).*)"],
};
