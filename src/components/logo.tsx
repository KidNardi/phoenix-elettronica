"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { MouseEvent } from "react";

import { company } from "@/data/site";
import { cn } from "@/lib/utils";

type LogoProps = {
  light?: boolean;
  compact?: boolean;
};

export function Logo({ light = false, compact = false }: LogoProps) {
  const pathname = usePathname();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (pathname !== "/") {
      return;
    }

    event.preventDefault();
    window.history.replaceState(null, "", "/#top");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Link
      href="/#top"
      className="inline-flex items-center"
      aria-label={company.shortName}
      onClick={handleClick}
      scroll
    >
      <span
        className={cn(
          "flex items-center justify-center overflow-hidden rounded-2xl border transition-transform duration-300 hover:scale-[1.02]",
          compact ? "h-11 w-[7rem] px-[0.14rem] py-[0.3rem] sm:h-11 sm:w-[7.55rem] sm:px-[0.18rem] sm:py-[0.35rem]" : "p-2",
          light
            ? "border-white/10 bg-white"
            : "border-border/70 bg-white",
        )}
      >
        <Image
          src="/brand/logo%20phoenix.png"
          alt={company.shortName}
          width={319}
          height={111}
          priority
          className={cn(
            "object-contain",
            compact
              ? "h-full w-auto max-w-none scale-[1.14] object-center translate-x-[1px]"
              : "h-9 w-auto sm:h-10",
          )}
        />
      </span>
    </Link>
  );
}
