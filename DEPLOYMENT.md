# Deployment & release process

This document covers how the Veyderm site is deployed, how to promote changes
safely, and how to roll back instantly.

## Projects & environments

| Vercel project | Role | Notes |
| --- | --- | --- |
| `veyderm-website` | **New site** (this repo) | Preview + production of the new Next.js site |
| `veyderm-landing` | **Old site** | Kept intact as an instant rollback target — do not delete |

Vercel team: **ammaralameri80's projects** (`team_uRTY7dCYBS1rsF3dmsQ1PlED`).

Branches:

- `main` → **production** deployment of `veyderm-website`
- `dev` → **preview** deployments (the review environment)

## Live domain configuration (the target state)

The production site is served on **`www.veyderm.com`** (canonical), with the
apex redirecting to it. This mirrors the exact behavior of the old
`veyderm-landing` project:

| Domain | Behavior |
| --- | --- |
| `www.veyderm.com` | Canonical — serves the site (no redirect) |
| `veyderm.com` (apex) | **308 permanent redirect → `www.veyderm.com`** |

> The 308 apex→www redirect must be replicated 1:1 when the domains are moved to
> `veyderm-website`. Vercel applies this automatically once both `veyderm.com`
> and `www.veyderm.com` are added to the project and `www` is set as the primary
> domain (apex redirect to `www`).

## Release process (promote a change)

```
edit on dev  →  push/deploy dev  →  preview URL  →  review & approve  →  merge to main  →  production
```

1. Make changes on the **`dev`** branch.
2. Deploy a preview:
   - **If Git is connected to Vercel (recommended):** push `dev`; Vercel builds a
     preview automatically and comments the URL.
   - **CLI fallback:** from the repo root, `vercel` (preview) — see below.
3. Review the preview (see the verification checklist at the bottom).
4. Once approved, promote to production:
   - **Git-connected:** merge `dev` → `main`; Vercel deploys production.
   - **CLI:** `vercel --prod`.

### Vercel CLI reference

```bash
# One-time link of this folder to the veyderm-website project
vercel link --project veyderm-website

# Preview deploy (dev)
vercel

# Production deploy (main)
vercel --prod
```

Set environment variables in the Vercel dashboard (Project → Settings →
Environment Variables), never in the repo. See `.env.example` for the keys.

## Go-live (first production cutover) — checklist

> Only performed after the preview is explicitly approved. This is the only step
> that touches the live domain.

1. Deploy `veyderm-website` to **production** (from `main`).
2. Confirm the production deployment loads on its default
   `veyderm-website.vercel.app` URL.
3. In `veyderm-website` → Settings → Domains, add **`www.veyderm.com`** and
   **`veyderm.com`**; set `www` as the primary domain (apex redirects to `www`).
   - Moving a domain already attached to `veyderm-landing` will prompt Vercel to
     transfer it between projects in the same team.
4. Wait for **SSL certificates** to be issued for both hosts.
5. Verify:
   - `https://www.veyderm.com` serves the **new** site over HTTPS.
   - `https://veyderm.com` returns **308** and lands on `https://www.veyderm.com`.
6. Leave `veyderm-landing` and its last deployment **intact** (rollback target).

## Rollback (instant)

If anything is wrong after go-live, re-point the domains back to the old project:

1. In **`veyderm-landing`** → Settings → Domains, re-add **`www.veyderm.com`**
   and **`veyderm.com`** (this moves them back from `veyderm-website`).
2. Keep `www` primary with the apex→www 308 redirect (its original config).
3. Verify `https://www.veyderm.com` serves the old site again.

Because `veyderm-landing` is left untouched with its last successful deployment,
this is a domain re-pointing only — no rebuild required. DNS at the registrar
does not change (both projects live under the same Vercel team), so propagation
is effectively immediate.

To roll back a **bad production deploy** (without leaving `veyderm-website`),
use Vercel's **Instant Rollback**: Project → Deployments → pick the previous
good production deployment → **Promote to Production**.

## Verification checklist (for preview and production)

- **Desktop** 1440 and 1366 — layout, nav, hero, all sections
- **Tablet** (~768) and **mobile** (~375) — responsive logo swap, stacked grids
- **Animations** — hero orbit spins/pulses; disabled under
  `prefers-reduced-motion`
- **Form** — role preselect from "I'm a doctor" / "Become a partner" buttons;
  validation; success ("You're on the list.") state
- **Favicon** and OG/social preview image
- **Lighthouse ≥ 95** on Performance / Accessibility / Best Practices / SEO
  (desktop and mobile)
