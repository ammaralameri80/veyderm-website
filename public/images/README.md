# Images

All homepage photography is real photography from Unsplash. No AI-generated
images are used on the site.

| File | Used by | Source | Licence |
| --- | --- | --- | --- |
| `photo-hero.webp` | Hero (`components/home/LuxHero.tsx`), with the AI mesh drawn in code over it | Unsplash, photo `3TLl_97HNJo` | Unsplash Licence |
| `photo-pro-3.webp` | veyderm Pro feature (`components/home/LuxSections.tsx`) | Unsplash, photo `kAmlYmktEsI` | Unsplash Licence |
| `photo-sena-3.webp` | Sena feature | Unsplash, photo `8eADYRAweQY` | Unsplash Licence |
| `photo-brands-3.webp` | Brands feature, and the product thumbnail in the hero recommendation card | Unsplash, photo `yXcBwMp05Us` (3D render). Placeholder label removed and colour shifted from blue to violet | Unsplash Licence |

Unsplash Licence: https://unsplash.com/license. It allows free commercial use
with no attribution required. Unsplash+ (paid) images were excluded.

An Adobe Stock photo (#630884606, dermatologist examining a patient) was
licensed to the owner's Adobe account on 2026-10-13. It is no longer used on
the site but remains licensed if needed.

## Replacing a photo

Use a **new file name** when swapping an image (e.g. `photo-hero-2.webp`).
Next.js caches optimised images by URL, so reusing a name can keep serving the
old picture. If you replace the hero portrait, re-register the AI mesh
landmarks in `LuxHero.tsx` (`P`) to the new face.

Recommended: WebP, sRGB, about 1600px wide, no text baked in.
