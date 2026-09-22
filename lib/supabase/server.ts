/**
 * Server-side Supabase client factory (SCAFFOLD ONLY).
 *
 * This exists so future product features (e.g. public product-detail pages at
 * `app/products/[slug]/page.tsx`) can be added as routes without re-platforming.
 * It is intentionally NOT used anywhere yet and fetches no data in this build.
 *
 * When you are ready to wire up data:
 *   1. `npm install @supabase/supabase-js`
 *   2. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY as env
 *      vars (locally in .env.local, in production as Vercel env vars).
 *   3. Uncomment the implementation below.
 *
 * SECURITY: Only the anon/public key belongs here or in client code. Row Level
 * Security (RLS) on the database must gate all access. The service_role key must
 * NEVER be used in client code or in code that ships to the browser; if
 * server-only privileged access is ever required, read it from a server-only
 * env var (SUPABASE_SERVICE_ROLE_KEY) inside a server context only.
 */

// import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * Reads the public Supabase env vars and returns a server-side client.
 * Throws if the environment is not configured, so misconfiguration fails loudly
 * rather than silently returning empty data.
 */
export function createServerClient(/* : SupabaseClient */) {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    throw new Error(
      "Supabase is not configured. Set NEXT_PUBLIC_SUPABASE_URL and " +
        "NEXT_PUBLIC_SUPABASE_ANON_KEY before using the Supabase client."
    );
  }

  // return createClient(url, anonKey, {
  //   auth: { persistSession: false },
  // });

  throw new Error(
    "createServerClient is a scaffold. Install @supabase/supabase-js and " +
      "uncomment the implementation in lib/supabase/server.ts to enable it."
  );
}
