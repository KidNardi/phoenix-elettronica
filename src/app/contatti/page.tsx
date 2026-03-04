import type { Metadata } from "next";
import Link from "next/link";

import { AnimatedSection } from "@/components/animated-section";
import { ContactForm } from "@/components/forms/contact-form";
import { iconMap } from "@/components/icon-map";
import { JsonLd } from "@/components/json-ld";
import { QuickCtaBand } from "@/components/quick-cta-band";
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
  const quickContacts = contactOptions.filter((item) => item.title !== "Sede");

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
            Qui devi poter fare una sola cosa in fretta: chiamare o inviarci una richiesta.
          </p>
        </div>
        <div className="mt-8">
          <QuickCtaBand
            title="Preferisci parlare subito o lasciare una richiesta?"
            description="Scegli la via piu' rapida per il tuo intervento."
          />
        </div>
      </section>

      <AnimatedSection className="container py-4 sm:py-8">
        <div className="grid gap-5 md:grid-cols-3">
          {quickContacts.map((item) => {
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
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </AnimatedSection>

      <AnimatedSection className="container py-20 sm:py-24">
        <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr]">
          <Card className="border-border/70 bg-secondary/60">
            <CardContent className="space-y-5 p-8">
              <SectionTitle
                eyebrow="Sede"
                title="Dove siamo"
                description="Riferimenti essenziali, senza ripetizioni."
              />
              <div className="space-y-4 text-sm leading-6 text-foreground/80">
                <p>
                  <span className="font-semibold text-foreground">Indirizzo:</span> {company.address}
                </p>
                <p>
                  <span className="font-semibold text-foreground">Orari:</span> Lun-Ven 08:30-13:00 /
                  15:30-19:00
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/70 bg-white">
            <CardContent className="p-8">
              <SectionTitle
                eyebrow="Scrivici"
                title="Invia la richiesta"
                description="Compila il form e raccontaci brevemente la richiesta."
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
