"use client";

import { ReactNode } from "react";
import { useInView, usePrefersReducedMotion } from "@/hooks/useInView";

interface RevealProps {
  children: ReactNode;
  delayMs?: number;
  className?: string;
  as?: "div" | "li";
}

/** Slides content in from the left, a little skewed, the first time it scrolls into view. */
export function Reveal({ children, delayMs = 0, className = "", as = "div" }: RevealProps) {
  const { ref, isInView } = useInView();
  const reducedMotion = usePrefersReducedMotion();
  const Tag = as;

  if (reducedMotion) {
    return (
      <Tag ref={ref as never} className={className}>
        {children}
      </Tag>
    );
  }

  return (
    <Tag
      ref={ref as never}
      className={`transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isInView ? "translate-x-0 skew-x-0 opacity-100" : "-translate-x-8 -skew-x-3 opacity-0"
      } ${className}`}
      style={{ transitionDelay: isInView ? `${delayMs}ms` : "0ms" }}
    >
      {children}
    </Tag>
  );
}
