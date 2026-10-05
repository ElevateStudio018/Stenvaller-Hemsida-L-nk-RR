import Link from "next/link";
import { ArrowLabel } from "./Button";
import { Icon } from "./Icon";
import { Photo } from "./Photo";
import { focusStyle, imageProps } from "@/lib/site/images.ts";
import type { Service } from "@/lib/site/schema.ts";

/**
 * A service as a photo tile: the photo fills the card under a dark wash, with the service's icon and number at the top
 * and its name in capitals at the foot. On hover the photo zooms, the wash lifts and an orange bar grows along the
 * bottom edge.
 */
export function ServiceCard({
  service,
  linkPrefix,
  wide = false,
  index,
}: {
  service: Service;
  linkPrefix: string;
  wide?: boolean;
  /** Its place in the list, shown as "01", "02" …; left out: no number. */
  index?: number;
}) {
  return (
    <Link
      href={`/tjanster/${service.slug}`}
      className={`group group/arrow relative flex h-full min-h-[220px] flex-col overflow-hidden bg-primary text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${
        wide ? "sm:min-h-[300px]" : "sm:min-h-[380px]"
      }`}
    >
      <Photo
        {...imageProps(service.image, wide ? "(min-width: 1280px) 50vw, 100vw" : "(min-width: 1280px) 25vw, 50vw")}
        alt={service.image.alt}
        className="absolute inset-0 h-full w-full object-cover group-hover:scale-[1.06]"
        transition="transform 900ms cubic-bezier(0.22, 1, 0.36, 1)"
        style={focusStyle(service.image)}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/10 transition-opacity duration-500 group-hover:opacity-80"
      />

      <div className="relative flex items-start justify-between p-3 sm:p-6">
        <span className="flex h-10 w-10 items-center justify-center bg-accent text-on-primary sm:h-12 sm:w-12">
          <Icon name={service.icon} className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.75} />
        </span>
        {index !== undefined && (
          <span className="font-heading text-[22px] font-extrabold leading-none text-white/60 sm:text-[30px]">
            {String(index + 1).padStart(2, "0")}
          </span>
        )}
      </div>

      <div className="relative mt-auto px-3 pb-4 sm:px-6 sm:pb-7">
        <h3 className="font-heading text-[19px] font-extrabold uppercase leading-[1.02] max-sm:hyphens-auto max-sm:[overflow-wrap:anywhere] sm:text-[28px]">
          {service.name}
        </h3>
        {linkPrefix && (
          <span className="mt-3 hidden text-label uppercase text-white/80 transition-colors duration-200 group-hover:text-white sm:block">
            <ArrowLabel spaced>{linkPrefix}</ArrowLabel>
          </span>
        )}
      </div>

      <span
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-1.5 origin-left scale-x-0 bg-accent transition-transform duration-500 ease-out group-hover:scale-x-100"
      />
    </Link>
  );
}
