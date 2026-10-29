// The veyderm wordmark: Albert Sans "vey" Regular + "derm" ExtraBold, outlined,
// in ink #17142b. The SVG in /public is the brand kit's source file — never
// retype it as live text. Its viewBox is 3885 × 960 (≈ 4.05 : 1).

/** Header logo. */
export function HeaderLogo({ href = "/" }: { href?: string }) {
  return (
    <a className="brand" href={href} aria-label="veyderm home">
      <img src="/veyderm-logo.svg" alt="veyderm" className="logo logo-full" width={117} height={29} />
    </a>
  );
}

/** Footer logo. */
export function FooterLogo({ href = "/" }: { href?: string }) {
  return (
    <a className="brand" href={href} aria-label="veyderm home">
      <img src="/veyderm-logo.svg" alt="veyderm" className="logo logo-foot" width={97} height={24} />
    </a>
  );
}
