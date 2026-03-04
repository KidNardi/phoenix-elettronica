import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { iconMap } from "@/components/icon-map";
import type { ServiceItem } from "@/data/site";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type ServiceCardProps = {
  service: ServiceItem;
  href?: string;
};

export function ServiceCard({ service, href = `/servizi#${service.slug}` }: ServiceCardProps) {
  const Icon = iconMap[service.icon];

  return (
    <Card className="group h-full border-white/10 bg-white/[0.02] transition-all duration-300 hover:-translate-y-1 hover:border-phoenix-200 hover:bg-white hover:shadow-soft">
      <CardHeader className="space-y-4">
        <div className="flex size-14 items-center justify-center rounded-2xl bg-phoenix-50 text-phoenix-600 transition-transform duration-300 group-hover:scale-105">
          <Icon className="size-6" />
        </div>
        <CardTitle className="text-xl">{service.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-5">
        <p className="text-sm leading-6 text-muted-foreground">{service.short}</p>
        <Link
          href={href}
          className="inline-flex items-center gap-2 text-sm font-semibold text-phoenix-600 transition-colors hover:text-phoenix-700"
        >
          Scopri il servizio
          <ArrowUpRight className="size-4" />
        </Link>
      </CardContent>
    </Card>
  );
}
