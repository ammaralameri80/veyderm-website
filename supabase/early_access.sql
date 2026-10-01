-- ===========================================================================
-- early_access — marketing early-access signups captured by the public website
-- form (app/api/early-access/route.ts).
--
-- WHERE TO RUN THIS
--   Run it ONCE, by hand, in the Supabase Dashboard -> SQL Editor for the
--   project, BEFORE testing the form. Nothing in the app creates this table.
--
-- SECURITY MODEL (read before changing)
--   * Row Level Security is ENABLED.
--   * There is exactly ONE policy: it allows INSERT for the `anon` role — the
--     public website key. The site can therefore WRITE leads.
--   * There is deliberately NO SELECT, UPDATE or DELETE policy for anon/public.
--     With RLS on and no such policy, the public anon key can never read back,
--     change, or delete rows. Leads are write-only from the website.
--   * Reads/exports happen only via the service_role key (server-side — e.g. the
--     Supabase dashboard, or a trusted backend). service_role bypasses RLS and
--     must NEVER be exposed to the browser or committed to the repo.
-- ===========================================================================

-- gen_random_uuid() lives in pgcrypto (already available on Supabase).
create extension if not exists pgcrypto;

create table if not exists public.early_access (
  id         uuid        primary key default gen_random_uuid(),
  name       text        not null,
  email      text        not null,
  role       text        not null,
  created_at timestamptz not null default now()
);

-- Enable RLS. Until a policy grants access, every role is denied by default.
alter table public.early_access enable row level security;

-- The ONLY policy: the anon (public website) role may INSERT. No read, update
-- or delete is granted to anon/public, so the public key can only write.
create policy "early_access_anon_insert"
  on public.early_access
  for insert
  to anon
  with check (true);
