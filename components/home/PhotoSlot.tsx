import { Icon } from "./Icons";

/**
 * A reserved, on-brand media frame for licensed photography that is dropped in
 * later. Renders no <img> (so there's no 404) — it's a designed empty state
 * with crop-mark corners, an aperture glyph, a caption, and the expected
 * filename. Swap for a next/image once the file exists (see public/images/README).
 */
export function PhotoSlot({ label, file, ratio = "4 / 3" }: { label: string; file: string; ratio?: string }) {
  return (
    <div className="vphoto-slot" style={{ aspectRatio: ratio }} role="img" aria-label={`${label} — photography placeholder`}>
      <span className="vphoto-ap"><Icon name="aperture" size={26} /></span>
      <span className="vphoto-cap">{label}</span>
      <span className="vphoto-file">{file}</span>
    </div>
  );
}
