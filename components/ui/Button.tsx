import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

type Variant = "primary" | "ghost" | "violet";

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  /** show the circular up-right arrow glyph */
  arrow?: boolean;
  /** preselects the access-form role (wired by CtaForm via [data-role]) */
  role?: string;
  /** analytics label (read by ConsentBanner's [data-cta] delegation) */
  cta?: string;
  className?: string;
};

/** The one button used across the site. Renders an anchor so hash links and
 *  the form's [data-role] preselect wiring keep working. */
export function Button({ href, children, variant = "primary", arrow, role, cta, className }: Props) {
  return (
    <a
      href={href}
      className={`btn btn-${variant}${className ? ` ${className}` : ""}`}
      data-role={role}
      data-cta={cta}
    >
      {children}
      {arrow && (
        <span className="btn-arrow" aria-hidden="true">
          <ArrowUpRight size={14} strokeWidth={2} />
        </span>
      )}
    </a>
  );
}

/** A plain text link with an animated underline. */
export function TextLink({ href, children, cta }: { href: string; children: ReactNode; cta?: string }) {
  return (
    <a href={href} className="tlink" data-cta={cta}>
      {children}
    </a>
  );
}
