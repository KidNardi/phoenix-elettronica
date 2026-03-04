import { Phone } from "lucide-react";

import { CTAButton } from "@/components/cta-button";
import { Badge } from "@/components/ui/badge";
import { company } from "@/data/site";

type QuickCtaBandProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  dark?: boolean;
};

export function QuickCtaBand({
  eyebrow = "Contatto rapido",
  title,
  description,
  dark = false,
}: QuickCtaBandProps) {
  return (
    <div
      className={
        dark
          ? "rounded-[2rem] border border-white/10 bg-charcoal px-6 py-8 text-white sm:px-8"
          : "rounded-[2rem] border border-border/70 bg-white px-6 py-8 sm:px-8"
      }
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <Badge variant={dark ? "dark" : "neutral"} className="mb-4">
            {eyebrow}
          </Badge>
          <h2 className="text-balance text-2xl font-semibold sm:text-3xl">{title}</h2>
          {description ? (
            <p className={dark ? "mt-3 text-white/72" : "mt-3 text-muted-foreground"}>
              {description}
            </p>
          ) : null}
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <CTAButton href={company.mobileHref} label="Chiama ora" />
          <CTAButton href="/preventivo" label="Richiedi preventivo" variant={dark ? "secondary" : "outline"} />
        </div>
      </div>
      <div className={dark ? "mt-5 text-sm text-white/60" : "mt-5 text-sm text-muted-foreground"}>
        <span className="inline-flex items-center gap-2">
          <Phone className="size-4" />
          {company.mobile}
        </span>
      </div>
    </div>
  );
}
