import Image from "next/image";
import Link from "next/link";

import { company } from "@/data/site";
import { cn } from "@/lib/utils";

type LogoProps = {
  light?: boolean;
  compact?: boolean;
};

export function Logo({ light = false, compact = false }: LogoProps) {
  return (
    <Link href="/" className="inline-flex items-center" aria-label={company.shortName}>
      <span
        className={cn(
          "flex items-center justify-center overflow-hidden rounded-2xl border transition-transform duration-300 hover:scale-[1.02]",
          compact ? "h-14 w-[148px] p-2" : "p-2",
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
            "w-auto object-contain",
            compact ? "h-8 object-center translate-x-[2px]" : "h-9 sm:h-10",
          )}
        />
      </span>
    </Link>
  );
}
