import type { Metadata } from "next";
import Link from "next/link";

import { AnimatedSection } from "@/components/animated-section";
import { ContactForm } from "@/components/forms/contact-form";
import { iconMap } from "@/components/icon-map";
import { JsonLd } from "@/components/json-ld";
import { SectionTitle } from "@/components/section-title";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { company, contactOptions } from "@/data/site";
import { createBreadcrumbSchema, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contatti elettricista a Bari",
  description:
    "Contatta Phoenix Elettronica a Bari per impianti elettrici, videosorveglianza, citofonia, automazioni e richieste di preventivo.",
  path: "/contatti",
});

export default function ContactsPage() {
  return (
    <div className="pb-20">
      <JsonLd
        data={createBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contatti", path: "/contatti" },
        ])}
      />
      <section className="container pb-16 pt-32 sm:pb-20 sm:pt-36">
        <Badge className="mb-6">Contatti</Badge>
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <h1 className="text-balance text-4xl font-semibold sm:text-5xl">
              Contatti diretti per richieste, sopralluoghi e preventivi.
            </h1>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
            Telefono, cellulare, email e sede sempre disponibili per contatti rapidi e richieste
            di intervento.
          </p>
        </div>
      </section>

      <AnimatedSection className="container py-4 sm:py-8">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {contactOptions.map((item) => {
            const Icon = iconMap[item.icon];

            return (
              <Link key={item.title} href={item.href} className="block">
                <Card className="h-full border-border/70 bg-white transition-transform duration-300 hover:-translate-y-1">
                  <CardContent className="space-y-4 p-6">
                    <div className="flex size-14 items-center justify-center rounded-2xl bg-phoenix-50 text-phoenix-600">
                      <Icon className="size-6" />
                    </div>
                    <p className="text-sm font-medium text-phoenix-600">{item.title}</p>
                    <p className="text-lg font-semibold">{item.value}</p>
                    <p className="text-sm leading-6 text-muted-foreground">{item.note}</p>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </AnimatedSection>

      <AnimatedSection className="container py-20 sm:py-24">
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <Card className="border-border/70 bg-charcoal text-white">
            <CardContent className="space-y-8 p-8">
              <SectionTitle
                eyebrow="Informazioni utili"
                title="Sede, orari e disponibilita'"
                description="Tutti i riferimenti essenziali per contattarci o raggiungere la sede."
              />
              <div className="space-y-4 text-sm text-white/75">
                <p>
                  <span className="font-semibold text-white">Sede:</span> {company.address}
                </p>
                <p>
                  <span className="font-semibold text-white">Tel/Fax:</span> {company.phone}
                </p>
                <p>
                  <span className="font-semibold text-white">Cell:</span> {company.mobile}
                </p>
                <p>
                  <span className="font-semibold text-white">Email:</span> {company.email}
                </p>
                <p>
                  <span className="font-semibold text-white">Orari:</span> Lun-Ven 08:30-13:00 /
                  15:30-19:00
                </p>
              </div>
              <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
                <p className="text-sm font-medium text-phoenix-300">Mappa</p>
                <p className="mt-3 text-sm leading-6 text-white/70">
                  La sede si trova in Via Papa Innocenzo XII, 19 a Bari, in una zona facilmente
                  raggiungibile dalla citta' e dalla provincia.
                </p>
                {/* TODO: inserire iframe mappa
                <iframe src="..." title="Mappa Phoenix Elettronica" />
                */}
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/70 bg-white">
            <CardContent className="p-8">
              <SectionTitle
                eyebrow="Scrivici"
                title="Richiedi informazioni"
                description="Compila il form e raccontaci brevemente la tua richiesta."
              />
              <div className="mt-8">
                <ContactForm />
              </div>
            </CardContent>
          </Card>
        </div>
      </AnimatedSection>
    </div>
  );
}
