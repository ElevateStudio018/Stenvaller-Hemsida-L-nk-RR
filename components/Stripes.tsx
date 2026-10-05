import { useId } from "react";

/**
 * Diagonal stripes, the site's pattern (a nod to the hazard tape on machines and the slant of the STEAB lettering).
 * Drawn in the current text colour; size, position and opacity come in through className.
 */
export function Stripes({ className = "", gap = 18, width = 5 }: { className?: string; gap?: number; width?: number }) {
  const id = useId();
  return (
    <svg aria-hidden="true" focusable="false" className={className}>
      <defs>
        <pattern id={id} width={gap} height={gap} patternUnits="userSpaceOnUse" patternTransform="rotate(-45)">
          <rect width={width} height={gap} fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}
