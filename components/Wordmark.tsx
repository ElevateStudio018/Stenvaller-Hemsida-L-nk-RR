import { withBasePath } from "@/lib/site/images.ts";
import type { Settings } from "@/lib/site/schema.ts";

/** What the logo spots (header, menu, footer) need to draw the logo. */
export interface LogoContent {
  logo: Settings["logo"];
  /** The company's name for screen readers. */
  name: string;
}

// A placeholder logo for Stenvaller until the client's own is uploaded: a mark (a stone above the lines of a bank,
// the "sten" and "vall" of the name) on the left, "STENVALLER" over "ENTREPRENAD" on the right. It is drawn in the
// current text colour, so it turns white on the dark green bars. An uploaded logo replaces it at the same height.
export function Wordmark({ content, className = "" }: { content: LogoContent; className?: string }) {
  if (content.logo.kind === "image") {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={withBasePath(content.logo.image.src)} alt={content.logo.image.alt || content.name} className={`h-10 w-auto sm:h-12 ${className}`} />
    );
  }

  return (
    <span className={`flex items-center gap-2.5 sm:gap-3 ${className}`}>
      <svg aria-hidden="true" viewBox="0 0 48 48" className="h-10 w-auto shrink-0 sm:h-12">
        <mask id="stenvaller-mark">
          <rect width="48" height="48" fill="white" />
          <path d="M6 37c7-6 13-9 18-9s11 3 18 9" fill="none" stroke="black" strokeWidth="3" strokeLinecap="round" />
          <path d="M6 44c7-6 13-9 18-9s11 3 18 9" fill="none" stroke="black" strokeWidth="3" strokeLinecap="round" />
          <path d="M14 23c0-6 4-11 10-11s10 5 10 11c0 1-1 2-2 2H16c-1 0-2-1-2-2z" fill="black" />
        </mask>
        <rect width="48" height="48" rx="10" fill="currentColor" mask="url(#stenvaller-mark)" />
      </svg>
      <span aria-hidden="true" className="flex flex-col items-start leading-none">
        <span className="font-heading text-[19px] font-extrabold tracking-[0.08em] sm:text-[23px]">STENVALLER</span>
        <span className="mt-1 font-heading text-[10px] font-semibold tracking-[0.32em] opacity-80 sm:text-[11px]">ENTREPRENAD</span>
      </span>
      <span className="sr-only">{content.name}</span>
    </span>
  );
}
