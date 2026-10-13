# Images

All homepage photography is real, licensed photography. No AI-generated images
are used on the site.

| File | Used by | Source | Licence |
| --- | --- | --- | --- |
| `photo-hero.webp` | Hero (`components/home/LuxHero.tsx`) — AI mesh is drawn in code over it | Unsplash, photo `3TLl_97HNJo` | Unsplash Licence (free commercial use, no attribution required) |
| `photo-derm-2.webp` | veyderm Pro feature (`components/home/LuxSections.tsx`) | Adobe Stock #630884606, "Dermatologist touching woman face examining skin in modern cosmetology clinic" | Adobe Stock standard licence, licensed to the owner's Adobe account on 2026-10-13; square crop from the full-resolution original |
| `photo-sena.webp` | Sena feature | Unsplash, photo `w1an547rkxo` | Unsplash Licence |
| `photo-brands-2.webp` | Brands feature, and the product thumbnail in the hero recommendation card | Unsplash, photo `OXYOFT9gTOE`, backdrop recoloured from sage to lilac | Unsplash Licence |

Unsplash Licence: https://unsplash.com/license — Unsplash+ (paid) images were
excluded. Products in `photo-brands-2.webp` are unbranded.

## Replacing a photo

Use a **new file name** when swapping an image (e.g. `photo-hero-2.webp`):
Next.js caches optimised images by URL, so reusing a name can keep serving the
old picture. If you replace the hero portrait, the AI mesh landmarks in
`LuxHero.tsx` (`P`) must be re-registered to the new face.

Recommended: WebP, sRGB, ≤1600px wide, no text baked in.
