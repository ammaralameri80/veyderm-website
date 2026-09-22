import { NextResponse } from "next/server";

// Ensure this route is always evaluated at request time (no static caching).
export const dynamic = "force-dynamic";

const VALID_ROLES = new Set([
  "Dermatologist",
  "Clinic / Hospital",
  "Authorized Distributor",
  "Patient",
  "Other",
]);

// Simple, dependency-free email sanity check (mirrors the client's type=email).
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Payload = {
  name?: unknown;
  email?: unknown;
  role?: unknown;
};

/**
 * Early-access signup handler.
 *
 * For now this only validates the submission and returns success — there is NO
 * persistence yet, by design (no product/data features in this build).
 *
 * TODO(supabase): persist the lead to Supabase once the backend is wired up.
 *   Use the server-side client factory in `lib/supabase/server.ts` and insert
 *   into an `early_access` table (RLS-protected). Never use the service_role
 *   key in client code. Example shape:
 *     const supabase = createServerClient();
 *     await supabase.from("early_access").insert({ name, email, role });
 */
export async function POST(request: Request) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 }
    );
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const role = typeof body.role === "string" ? body.role.trim() : "";

  if (!name) {
    return NextResponse.json(
      { error: "Please enter your full name." },
      { status: 422 }
    );
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid work email." },
      { status: 422 }
    );
  }
  if (!VALID_ROLES.has(role)) {
    return NextResponse.json(
      { error: "Please select a valid role." },
      { status: 422 }
    );
  }

  // TODO(supabase): persist { name, email, role } here.

  return NextResponse.json({ ok: true }, { status: 200 });
}
