import { NextResponse } from "next/server";
import { createServerClient } from "@/lib/supabase/server";

// Always evaluate at request time (no static caching).
export const dynamic = "force-dynamic";

const VALID_ROLES = new Set([
  "Dermatologist / Clinic",
  "Skincare brand / Distributor",
  "Patient (Sena waitlist)",
]);

// Simple, dependency-free email sanity check (mirrors the client's type=email).
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// --- Basic in-memory rate limiting -----------------------------------------
// Best-effort only: in-memory state does not persist across serverless cold
// starts or span multiple instances. It blocks naive bursts from a single IP;
// durable protection should be added at the edge/WAF or with a shared store.
const RATE_LIMIT = 5; // max submissions
const RATE_WINDOW_MS = 10 * 60 * 1000; // per 10 minutes
const hits = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  // Opportunistic cleanup so the map does not grow unbounded.
  if (hits.size > 5000) {
    for (const [key, times] of hits) {
      if (times.every((t) => now - t >= RATE_WINDOW_MS)) hits.delete(key);
    }
  }
  return recent.length > RATE_LIMIT;
}

function clientIp(request: Request): string {
  const fwd = request.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  return request.headers.get("x-real-ip") ?? "unknown";
}

type Payload = {
  name?: unknown;
  email?: unknown;
  role?: unknown;
  // Honeypot: a hidden field real users never fill. Bots that autofill it are
  // silently dropped.
  company?: unknown;
};

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  // Honeypot: pretend success so bots get no signal, but persist nothing.
  const honeypot = typeof body.company === "string" ? body.company.trim() : "";
  if (honeypot) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  if (isRateLimited(clientIp(request))) {
    return NextResponse.json(
      { error: "Too many requests. Please try again in a few minutes." },
      { status: 429 }
    );
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const role = typeof body.role === "string" ? body.role.trim() : "";

  if (!name) {
    return NextResponse.json({ error: "Please enter your full name." }, { status: 422 });
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Please enter a valid work email." }, { status: 422 });
  }
  if (!VALID_ROLES.has(role)) {
    return NextResponse.json({ error: "Please select a valid role." }, { status: 422 });
  }

  // Persist the lead. Insert only — the anon key's single RLS policy allows
  // INSERT and nothing else (see supabase/early_access.sql).
  try {
    const supabase = createServerClient();
    const { error } = await supabase
      .from("early_access")
      .insert({ name, email, role });

    if (error) {
      console.error("early_access insert failed:", error.message);
      return NextResponse.json(
        { error: "We couldn't save your request right now. Please try again shortly." },
        { status: 502 }
      );
    }
  } catch (err) {
    console.error("early_access handler error:", err);
    return NextResponse.json(
      { error: "Something went wrong on our side. Please try again shortly." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}
