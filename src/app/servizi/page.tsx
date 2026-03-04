import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { AnimatedSection } from "@/components/animated-section";
import { CallBar } from "@/components/call-bar";
import { JsonLd } from "@/components/json-ld";
import { SectionTitle } from "@/components/section-title";
import { ServiceCard } from "@/components/service-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { localSeoPages } from "@/data/local-seo";
import { company, services } from "@/data/site";
import { createBreadcrumbSchema, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Servizi elettrici ed elettronici a Bari",
  description:
    "Scopri i servizi Phoenix Elettronica a Bari: manutenzione condomini, videosorveglianza, citofonia, automazioni, reti LAN e impianti elettrici.",
  path: "/servizi",
});

export default function ServicesPage() {
  return (
    <div className="pb-28 md:pb-20">
      <JsonLd
        data={createBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Servizi", path: "/servizi" },
        ])}
      />
      <section className="bg-charcoal text-white">
        <div className="container pb-16 pt-32 sm:pb-20 sm:pt-36">
          <Badge variant="dark" className="mb-6">
            Servizi principali
          </Badge>
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div>
              <h1 className="text-balance text-4xl font-semibold sm:text-5xl">
                Servizi tecnici per case, condomini, aziende e attivita'.
              </h1>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-white/72">
              Una panoramica chiara dei principali servizi disponibili per Bari e provincia.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`#${service.slug}`}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75 transition-colors hover:bg-white/10 hover:text-white"
              >
                {service.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <AnimatedSection className="container py-20 sm:py-24">
        <SectionTitle
          eyebrow="Panoramica"
          title="Griglia servizi"
          description="Le principali aree operative di Phoenix Elettronica raccolte in una vista semplice e leggibile."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="container py-4 sm:py-8">
        <SectionTitle
          eyebrow="Approfondimenti"
          title="Pagine dedicate ai servizi piu' richiesti a Bari."
          description="Una panoramica rapida per orientarti sui principali interventi disponibili."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {localSeoPages.map((page) => (
            <Card key={page.slug} className="border-border/70 bg-white">
              <CardContent className="space-y-4 p-6">
                <Badge>{page.title}</Badge>
                <h3 className="text-xl font-semibold">{page.h1}</h3>
                <p className="text-sm leading-6 text-muted-foreground">{page.metaDescription}</p>
                <Link
                  href={`/${page.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-phoenix-600"
                >
                  Apri la pagina
                  <ArrowRight className="size-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </AnimatedSection>

      <div className="container space-y-6 pb-10">
        {services.map((service) => (
          <AnimatedSection
            key={service.slug}
            className="scroll-mt-40 sm:scroll-mt-44"
            delay={0.05}
            id={service.slug}
          >
            <Card className="overflow-hidden border-border/70 bg-white">
              <CardContent className="grid gap-8 p-8 lg:grid-cols-[0.8fr_1.2fr]">
                <div className="space-y-4">
                  <Badge>{service.title}</Badge>
                  <h2 className="text-3xl font-semibold">{service.title}</h2>
                  <p className="text-base leading-7 text-muted-foreground">{service.detail}</p>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Button asChild>
                      <Link
                        href={{
                          pathname: "/preventivo",
                          query: { servizio: service.title },
                        }}
                      >
                        Richiedi preventivo
                        <ArrowRight className="size-4" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link href={company.mobileHref}>Chiama ora</Link>
                    </Button>
                  </div>
                </div>
                <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
                  <div className="rounded-[1.75rem] border border-border bg-secondary/60 p-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-phoenix-600">
                      Cosa include
                    </p>
                    <ul className="mt-5 space-y-4">
                      {service.includes.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm leading-6">
                          <CheckCircle2 className="mt-0.5 size-4 text-phoenix-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-5">
                    <div className="rounded-[1.75rem] border border-border bg-secondary/60 p-6">
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-phoenix-600">
                        Per chi e'
                      </p>
                      <p className="mt-3 text-sm leading-6 text-muted-foreground">
                        {service.audience}
                      </p>
                    </div>
                    <div className="rounded-[1.75rem] border border-border bg-secondary/60 p-6">
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-phoenix-600">
                        Tempi indicativi
                      </p>
                      <p className="mt-3 text-sm leading-6 text-muted-foreground">
                        {service.timing}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        ))}
      </div>

      <CallBar />
    </div>
  );
}
