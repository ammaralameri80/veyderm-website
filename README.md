# Veyderm website

Production marketing site for **Veyderm** — the UAE's first AI-powered dermatology
platform. Built with Next.js (App Router) + TypeScript + React, ported 1:1 from
the approved design reference.

## Stack

- **Next.js 16** (App Router), **React 19**, **TypeScript**
- Design system exposed as **CSS variable tokens** in `app/globals.css`
- Fonts self-hosted at build via `next/font/google` (**Fraunces** serif +
  **Hanken Grotesk** sans) — no external runtime font requests
- Fully **static** landing page; the early-access form posts to a Next.js
  Route Handler

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # production build
npm run start    # serve the production build
```

## Project structure

```
app/
  layout.tsx              Root layout: fonts + full SEO/OG metadata
  page.tsx                Landing page (composes the section components)
  globals.css             Design tokens + all component styles (ported 1:1)
  api/early-access/route.ts   Form handler: validates → success (TODO: Supabase)
  products/[slug]/page.tsx    RESERVED stub for future product pages (Supabase)
  sitemap.ts / robots.ts  SEO
components/                Header, Hero, OrbitDiagram, Metrics, Problems,
                          AiAgent, HowItWorks, PatientJourney, ForDoctors,
                          ForDistributors, CtaForm, Footer, Logo
lib/supabase/server.ts    Server-side Supabase client factory (SCAFFOLD ONLY)
public/                   Favicons, app icons, OG image, web manifest
```

## Environment variables

Copy `.env.example` to `.env.local` for local development. **Never commit
secrets** — `.env*` is gitignored; in production these are set as Vercel env
vars.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL (scaffold; unused so far) |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon key (RLS-protected) |
| `NEXT_PUBLIC_SITE_URL` | Canonical origin for metadata/sitemap (defaults to `https://www.veyderm.com`) |

> The Supabase `service_role` key must **never** be used in client code or
> committed. See `lib/supabase/server.ts`.

## Future-ready (not built yet)

- `lib/supabase/server.ts` + `app/products/[slug]/page.tsx` are scaffolded so
  public, RLS-protected product-detail pages can be added later as routes with
  no re-platforming.
- The early-access handler has a marked `TODO(supabase)` where leads will be
  persisted.

## Deployment

See [`DEPLOYMENT.md`](./DEPLOYMENT.md) for the release process (dev → preview →
approve → prod) and the rollback procedure.
