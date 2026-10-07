# Image slots

Only **two** places on the site are meant to hold photography. The hero stays
100% graphic (the SkinPrint) — no skin photo, not even a subtle underlay.

Until a file is dropped here, each place shows a light, on-brand placeholder
frame (a reserved media slot, not a broken box). Use only **licensed/consented**
photography. No AI-generated skin, faces, or clinical imagery, and no stock that
implies real patients or before/after results.

| File | Used by | Suggested |
| --- | --- | --- |
| `consultation.jpg` | veyderm Professional — `PhotoSlot` in `components/home/ProWorld.tsx` | A genuine dermatologist / consultation moment, landscape ~1200×960, sRGB |
| `product-1.jpg`, `product-2.jpg`, `product-3.jpg` | Verified Shelf — `PhotoSlot` row in `components/home/Brands.tsx` | Real product packshots on white, portrait ~900×1200, sRGB |

## Activating a slot

The placeholders are pure CSS/SVG (no `<img>` is requested yet, so there are no
404s). When you have a licensed file, replace that `PhotoSlot` with a
`next/image`, e.g.:

```tsx
import Image from "next/image";
<Image src="/images/consultation.jpg" alt="Dermatologist reviewing a treatment plan"
       width={1200} height={960} className="vphoto-live" />
```

Recommended: optimized JP/WebP, sRGB, no text baked in.
