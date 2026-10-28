/* The three product marks, drawn for veyderm rather than taken from an icon
   set: a dermatoscope reticle for Pro (clinical precision), a soft AI orb for
   Sena (her avatar in the chat too), and a node network for brands (one brand
   connected to many dermatologists). Each sits on the same plum tile. */

export type ProductKind = "pro" | "sena" | "brands";

export function ProductMark({ kind, size = "md" }: { kind: ProductKind; size?: "sm" | "md" }) {
  return (
    <span className={`pmark pmark-${size}`} aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none">
        {kind === "pro" && (
          <>
            <circle cx="12" cy="12" r="6.6" stroke="#fff" strokeWidth="1.5" />
            <path d="M12 2.6v3.2M12 18.2v3.2M2.6 12h3.2M18.2 12h3.2" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="12" cy="12" r="2.3" fill="#b7ace4" />
          </>
        )}
        {kind === "sena" && <SenaOrb />}
        {kind === "brands" && (
          <>
            <path d="M12 12 5.5 6.5M12 12l6.5-5.5M12 12l-6.5 5.5M12 12l6.5 5.5" stroke="#fff" strokeOpacity="0.55" strokeWidth="1.3" strokeLinecap="round" />
            <circle cx="5.5" cy="6.5" r="1.9" fill="#fff" />
            <circle cx="18.5" cy="6.5" r="1.9" fill="#fff" />
            <circle cx="5.5" cy="17.5" r="1.9" fill="#fff" />
            <circle cx="18.5" cy="17.5" r="1.9" fill="#fff" />
            <circle cx="12" cy="12" r="3" fill="#b7ace4" />
          </>
        )}
      </svg>
    </span>
  );
}

/* Sena's orb: a lit sphere with a spark at its heart */
export function SenaOrb() {
  return (
    <>
      <circle cx="12" cy="12" r="9.6" fill="#b7ace4" fillOpacity="0.22" />
      <circle cx="12" cy="12" r="7.6" fill="#dcd6f1" />
      <circle cx="9.6" cy="9.2" r="3.8" fill="#fff" fillOpacity="0.7" />
      <path d="M12 6.9c.52 2.58 1.92 3.98 4.5 4.5-2.58.52-3.98 1.92-4.5 4.5-.52-2.58-1.92-3.98-4.5-4.5 2.58-.52 3.98-1.92 4.5-4.5Z" fill="#463f88" />
    </>
  );
}
