import type { Metadata } from "next";

import { AnimatedSection } from "@/components/animated-section";
import { FeatureCard } from "@/components/feature-card";
import { JsonLd } from "@/components/json-ld";
import { QuickCtaBand } from "@/components/quick-cta-band";
import { SectionTitle } from "@/components/section-title";
import { Badge } from "@/components/ui/badge";
import { technicalFeatures } from "@/data/site";
import { createBreadcrumbSchema, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Chi siamo: elettricista e impianti a Bari",
  description:
    "Scopri Phoenix Elettronica: esperienza tecnica a Bari, soluzioni su misura, manutenzioni rapide e materiali di alta qualita'.",
  path: "/chi-siamo",
});

export default function AboutPage() {
  return (
    <div className="pb-20">
      <JsonLd
        data={createBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Chi siamo", path: "/chi-siamo" },
        ])}
      />
      <section className="container pb-16 pt-32 sm:pb-20 sm:pt-36">
        <Badge className="mb-6">Chi siamo</Badge>
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <h1 className="text-balance text-4xl font-semibold sm:text-5xl">
              Un riferimento tecnico a Bari per impianti elettrici ed elettronici.
            </h1>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
            Esperienza pratica, soluzioni sensate e un obiettivo semplice: risolvere il lavoro bene.
          </p>
        </div>
        <div className="mt-8">
          <QuickCtaBand
            title="Ti basta sapere questo: possiamo aiutarti?"
            description="Se si', chiama ora o apri il preventivo. Il resto lo definiamo insieme."
          />
        </div>
      </section>

      <AnimatedSection className="container py-20 sm:py-24">
        <SectionTitle
          eyebrow="Focus tecnico"
          title="Tre punti chiave"
          description="Solo quello che serve per capire come lavoriamo."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {technicalFeatures.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="container">
        <div className="rounded-[2rem] border border-border/70 bg-charcoal px-6 py-10 text-white sm:px-10">
          <SectionTitle
            eyebrow="Qualita' e materiali"
            title="Scelte tecniche affidabili, non scorciatoie."
            description="Il criterio non e' la soluzione piu' economica nell'immediato, ma quella che mantiene stabilita', sicurezza e durata nel tempo."
            tone="light"
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              Materiali coerenti con il contesto di utilizzo.
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              Selezione di componenti affidabili e facilmente gestibili nel tempo.
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              Approccio qualitativo utile per manutenzione, sicurezza e continuita'.
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
