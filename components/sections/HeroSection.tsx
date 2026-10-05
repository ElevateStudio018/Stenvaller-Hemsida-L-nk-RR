import { ArrowLabel, buttonClasses } from "../Button";
import { Icon } from "../Icon";
import { SiteLink } from "../SiteLink";
import { ZoomImage } from "../ZoomImage";
import { focusStyle, imageProps } from "@/lib/site/images.ts";
import { toTelHref } from "@/lib/site/format.ts";
import type { SectionProps } from "./types";

export function HeroSection({ section, ctx }: SectionProps<"hero">) {
  const { phone } = ctx.site.company;
  const callPrefix = ctx.site.ui.callPrefix;

  return (
    // The photo fills the first screen under a dark wash that is heaviest on the left, where the capitals sit. The
    // section's lower edge is cut on a slant.
    <section
      id={section.anchor || undefined}
      className="relative isolate flex min-h-[calc(100svh-4rem)] flex-col overflow-hidden bg-secondary [clip-path:polygon(0_0,100%_0,100%_calc(100%-56px),0_100%)] sm:min-h-[calc(100svh-5rem)] lg:[clip-path:polygon(0_0,100%_0,100%_calc(100%-96px),0_100%)]"
    >
      <ZoomImage
        {...imageProps(section.image, "100vw")}
        alt={section.image.alt}
        priority
        parallax="top"
        style={focusStyle(section.image)}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-black/85 via-black/45 to-black/20 lg:bg-gradient-to-r lg:from-black/85 lg:via-black/50 lg:to-black/5" />

      <div className="mx-auto mt-auto w-full max-w-content px-4 pb-24 sm:px-6 sm:pb-28 lg:my-auto lg:px-8 lg:pb-16 lg:pt-[6svh]">
        {/* Eyebrow, heading and buttons wipe in from the left one after another as the page loads. */}
        {section.eyebrow && (
          <p className="flex animate-rise items-center gap-3 text-tag uppercase text-white [animation-delay:150ms] lg:text-[15px]">
            <span aria-hidden="true" className="h-[3px] w-10 bg-accent" />
            {section.eyebrow}
          </p>
        )}
        <h1 className="mt-5 max-w-[11em] animate-rise text-[46px] font-extrabold leading-[0.95] text-white [animation-delay:300ms] min-[380px]:text-[52px] sm:text-[72px] lg:mt-6 lg:text-[84px] xl:text-[104px]">
          {section.heading}
        </h1>
        <div className="mt-8 flex animate-rise flex-wrap items-center gap-3 [animation-delay:450ms] lg:mt-10 lg:gap-4">
          {section.button.label && (
            <SiteLink href={section.button.href} className={buttonClasses("solid", "group/arrow focus-visible:outline-white")}>
              <span>
                <ArrowLabel spaced>{section.button.label}</ArrowLabel>
              </span>
            </SiteLink>
          )}
          {phone && (
            <a
              href={toTelHref(phone)}
              aria-label={`${callPrefix} ${phone}`}
              className={buttonClasses("on-primary", "gap-3 border-white/70 text-white hover:border-white")}
            >
              <Icon name="Phone" className="h-5 w-5" />
              {phone}
            </a>
          )}
        </div>
      </div>

    </section>
  );
}
