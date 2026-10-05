import { Photo } from "./Photo";
import { SiteLink } from "./SiteLink";
import { focusStyle, imageProps } from "@/lib/site/images.ts";
import type { Uppdrag } from "@/lib/site/schema.ts";

export function UppdragCard({ item }: { item: Uppdrag }) {
  return (
    <SiteLink
      href={item.href}
      className="group relative block aspect-[4/5] overflow-hidden bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
    >
      <Photo
        {...imageProps(item.image, "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 85vw")}
        alt={item.image.alt}
        className="absolute inset-0 h-full w-full object-cover group-hover:scale-[1.04]"
        transition="transform 700ms ease-out"
        style={focusStyle(item.image)}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10" aria-hidden="true" />
      <span className="absolute left-0 top-0 bg-accent px-4 py-[11px] text-tag uppercase text-on-primary">{item.tag}</span>
      <div className="absolute inset-x-0 bottom-0 px-6 pb-7 sm:pb-9">
        <span aria-hidden="true" className="mb-4 block h-1 w-10 bg-accent transition-[width] duration-500 ease-out group-hover:w-24" />
        <h3 className="font-heading text-[28px] font-extrabold uppercase leading-[1.02] text-white">{item.title}</h3>
      </div>
    </SiteLink>
  );
}
