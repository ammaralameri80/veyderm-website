/**
 * Server-side Supabase client factory.
 *
 * Used by server code only (e.g. the early-access route handler). It uses the
 * public anon key, so every operation is still gated by Row Level Security.
 *
 * SECURITY:
 *   - Only the anon/public key is used here. For the early-access form the DB
 *     has a single RLS policy allowing INSERT for the anon role, so this client
 *     can WRITE leads but can never read, update or delete them.
 *   - Reading leads back requires the service_role key (server-only), which
 *     bypasses RLS. That key must NEVER be used in client code or shipped to the
 *     browser. If/when server-side reads are needed, read SUPABASE_SERVICE_ROLE_KEY
 *     from a server-only env var inside a server context.
 */

import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * Returns a server-side Supabase client built from the public env vars.
 * Throws if the environment is not configured, so misconfiguration fails loudly.
 */
export function createServerClient(): SupabaseClient {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    throw new Error(
      "Supabase is not configured. Set NEXT_PUBLIC_SUPABASE_URL and " +
        "NEXT_PUBLIC_SUPABASE_ANON_KEY before using the Supabase client."
    );
  }

  return createClient(url, anonKey, {
    auth: { persistSession: false },
  });
}
