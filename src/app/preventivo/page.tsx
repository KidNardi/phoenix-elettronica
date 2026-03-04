import type { Metadata } from "next";
import { Suspense } from "react";
import { CheckCircle2, Clock3, MapPinned } from "lucide-react";

import { AnimatedSection } from "@/components/animated-section";
import { QuoteForm } from "@/components/forms/quote-form";
import { JsonLd } from "@/components/json-ld";
import { SectionTitle } from "@/components/section-title";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { createBreadcrumbSchema, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Preventivo elettricista Bari",
  description:
    "Richiedi un preventivo a Phoenix Elettronica per impianti elettrici, manutenzioni, automazioni, citofonia e videosorveglianza a Bari e provincia.",
  path: "/preventivo",
});

const benefits = [
  {
    icon: Clock3,
    title: "Contatto veloce",
    text: "Ti ricontattiamo dopo aver valutato le informazioni principali della richiesta.",
  },
  {
    icon: MapPinned,
    title: "Intervento a Bari e provincia",
    text: "La zona indicata ci aiuta a organizzare meglio sopralluogo, tempi e disponibilita'.",
  },
  {
    icon: CheckCircle2,
    title: "Richiesta chiara",
    text: "Con pochi dettagli possiamo capire meglio il lavoro e preparare una prima valutazione.",
  },
];

export default function QuotePage() {
  return (
    <div className="pb-20">
      <JsonLd
        data={createBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Preventivo", path: "/preventivo" },
        ])}
      />
      <section className="bg-charcoal text-white">
        <div className="container pb-16 pt-32 sm:pb-20 sm:pt-36">
          <Badge variant="dark" className="mb-6">
            Preventivo
          </Badge>
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div>
              <h1 className="text-balance text-4xl font-semibold sm:text-5xl">
                Richiedi un preventivo in pochi passaggi.
              </h1>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-white/72">
              Indicaci il servizio richiesto, la zona e ogni dettaglio utile per essere ricontattato.
            </p>
          </div>
        </div>
      </section>

      <AnimatedSection className="container py-20 sm:py-24">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <Card className="border-border/70 bg-white">
            <CardContent className="p-8">
              <SectionTitle
                eyebrow="Compila il form"
                title="Ricevi un contatto mirato"
                description="Lasciaci i dettagli principali della richiesta: ti ricontatteremo con una valutazione chiara e rapida."
              />
              <div className="mt-8">
                <Suspense fallback={<div className="text-sm text-muted-foreground">Caricamento...</div>}>
                  <QuoteForm />
                </Suspense>
              </div>
            </CardContent>
          </Card>
          <div className="space-y-5">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="border-border/70 bg-white">
                <CardContent className="space-y-4 p-6">
                  <div className="flex size-14 items-center justify-center rounded-2xl bg-phoenix-50 text-phoenix-600">
                    <benefit.icon className="size-6" />
                  </div>
                  <h2 className="text-xl font-semibold">{benefit.title}</h2>
                  <p className="text-sm leading-6 text-muted-foreground">{benefit.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
