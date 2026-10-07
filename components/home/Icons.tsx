// Minimal line icons for the home sections. Single stroke weight, 1.6, round
// caps — tuned to read as clinical/UI, not clip-art. Keyed by name so data in
// content.ts can reference them as strings.

type P = { size?: number; className?: string };

const S = ({ size = 20, className, children }: P & { children: React.ReactNode }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {children}
  </svg>
);

const paths: Record<string, React.ReactNode> = {
  user: (
    <>
      <circle cx="12" cy="8" r="3.4" />
      <path d="M5.5 19a6.5 6.5 0 0 1 13 0" />
    </>
  ),
  spark: (
    <>
      <path d="M12 4l1.6 4.4L18 10l-4.4 1.6L12 16l-1.6-4.4L6 10l4.4-1.6L12 4Z" />
      <path d="M18.5 15.5l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7.7-1.8Z" />
    </>
  ),
  steth: (
    <>
      <path d="M6 4v5a4 4 0 0 0 8 0V4" />
      <path d="M6 4H4.5M14 4h1.5" />
      <path d="M10 17a4 4 0 0 0 8 0v-2" />
      <circle cx="18" cy="12.5" r="2.2" />
    </>
  ),
  grid: (
    <>
      <rect x="4" y="4" width="7" height="7" rx="1.4" />
      <rect x="13" y="4" width="7" height="7" rx="1.4" />
      <rect x="4" y="13" width="7" height="7" rx="1.4" />
      <rect x="13" y="13" width="7" height="7" rx="1.4" />
    </>
  ),
  check: (
    <>
      <circle cx="12" cy="12" r="8.2" />
      <path d="M8.5 12.2l2.3 2.3 4.7-4.9" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s6-5.3 6-10a6 6 0 0 0-12 0c0 4.7 6 10 6 10Z" />
      <circle cx="12" cy="11" r="2.2" />
    </>
  ),
  lock: (
    <>
      <rect x="5" y="10.5" width="14" height="9.5" rx="2.2" />
      <path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" />
      <circle cx="12" cy="15" r="1.1" />
    </>
  ),
  box: (
    <>
      <path d="M4 8l8-4 8 4-8 4-8-4Z" />
      <path d="M4 8v8l8 4 8-4V8" />
      <path d="M12 12v8" />
    </>
  ),
  understand: (
    <>
      <circle cx="11" cy="11" r="6.3" />
      <path d="M15.6 15.6L20 20" />
    </>
  ),
  assist: (
    <>
      <path d="M12 3a6 6 0 0 0-3.6 10.8c.4.3.6.8.6 1.3V17h6v-1.9c0-.5.2-1 .6-1.3A6 6 0 0 0 12 3Z" />
      <path d="M9.5 20.5h5" />
    </>
  ),
  plan: (
    <>
      <rect x="4.5" y="4" width="15" height="16" rx="2" />
      <path d="M8 9h8M8 13h8M8 17h5" />
    </>
  ),
  deliver: (
    <>
      <path d="M3.5 7.5h10v9h-10Z" />
      <path d="M13.5 10.5h4l3 3v3h-7Z" />
      <circle cx="7" cy="18.5" r="1.6" />
      <circle cx="17" cy="18.5" r="1.6" />
    </>
  ),
  continue: (
    <>
      <path d="M3.5 12a8.5 8.5 0 1 1 2.6 6.1" />
      <path d="M3 13.5V18.5H8" />
    </>
  ),
};

export function Icon({ name, size, className }: { name: string } & P) {
  return <S size={size} className={className}>{paths[name] ?? paths.spark}</S>;
}

export function Arrow({ size = 18, className }: P) {
  return (
    <S size={size} className={className}>
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </S>
  );
}

/** Tiny fingerprint-style SkinPrint glyph, reused as a badge/accent. */
export function SkinPrintMark({ size = 16, className }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className={className} aria-hidden="true">
      <path d="M12 3a9 9 0 0 1 9 9" opacity=".5" />
      <path d="M12 6.5a5.5 5.5 0 0 1 5.5 5.5c0 1.2-.2 2.3-.5 3.3" />
      <path d="M12 10a2 2 0 0 1 2 2c0 2.6-.6 5-1.6 7" />
      <path d="M8.6 12a3.4 3.4 0 0 1 .5-1.8" opacity=".7" />
      <path d="M6.2 15.4A8.8 8.8 0 0 1 5.4 12" opacity=".5" />
      <path d="M9.2 19.6c.7-1 1.2-2.2 1.4-3.6" opacity=".7" />
    </svg>
  );
}

export function Chevron({ size = 24, className }: P) {
  return (
    <S size={size} className={className}>
      <path d="M8 10l4 4 4-4" />
    </S>
  );
}
