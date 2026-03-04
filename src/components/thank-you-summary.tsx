"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CheckCircle2 } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { company } from "@/data/site";

export function ThankYouSummary() {
  const searchParams = useSearchParams();

  const service = searchParams.get("servizio");
  const urgency = searchParams.get("urgenza");
  const area = searchParams.get("zona");
  const name = searchParams.get("nome");

  return (
    <Card className="mx-auto max-w-3xl border-border/70 bg-white">
      <CardContent className="space-y-8 p-8 sm:p-10">
        <div className="flex size-16 items-center justify-center rounded-full bg-phoenix-50 text-phoenix-600">
          <CheckCircle2 className="size-8" />
        </div>
        <div>
          <Badge className="mb-4">Richiesta ricevuta</Badge>
          <h1 className="text-balance text-3xl font-semibold sm:text-4xl">
            Grazie{name ? `, ${name}` : ""}. La tua richiesta e' stata registrata.
          </h1>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Abbiamo ricevuto la tua richiesta e ti ricontatteremo al piu' presto.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-[1.5rem] border border-border bg-secondary/60 p-5">
            <p className="text-sm font-medium text-phoenix-600">Servizio</p>
            <p className="mt-2 text-sm leading-6">{service ?? "Non specificato"}</p>
          </div>
          <div className="rounded-[1.5rem] border border-border bg-secondary/60 p-5">
            <p className="text-sm font-medium text-phoenix-600">Urgenza</p>
            <p className="mt-2 text-sm leading-6">{urgency ?? "Non specificata"}</p>
          </div>
          <div className="rounded-[1.5rem] border border-border bg-secondary/60 p-5">
            <p className="text-sm font-medium text-phoenix-600">Zona</p>
            <p className="mt-2 text-sm leading-6">{area ?? "Non specificata"}</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild>
            <Link href={company.mobileHref}>Chiama ora</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/">Torna alla home</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
