import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Clock3,
  MapPinned,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";

import { AnimatedSection } from "@/components/animated-section";
import { CTAButton } from "@/components/cta-button";
import { JsonLd } from "@/components/json-ld";
import { SectionTitle } from "@/components/section-title";
import { ServiceCard } from "@/components/service-card";
import { TestimonialCard } from "@/components/testimonial-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  audience,
  company,
  processSteps,
  services,
  testimonials,
  whyPhoenix,
} from "@/data/site";
import { localSeoPages } from "@/data/local-seo";
import {
  createLocalBusinessSchema,
  createPageMetadata,
  createWebsiteSchema,
} from "@/lib/seo";

const heroImage = "/hero/hero-electrical-panel.jpg";

const highlights = [
  {
    icon: ShieldCheck,
    title: "Affidabilita' concreta",
    text: "Tecnologia utile, materiali selezionati e un approccio pratico sul campo.",
  },
  {
    icon: Clock3,
    title: "Tempi rapidi",
    text: "Interventi organizzati per ridurre attese, blocchi e disagi operativi.",
  },
  {
    icon: MapPinned,
    title: "Bari e provincia",
    text: "Copertura locale con conoscenza del territorio e supporto continuativo.",
  },
];

export const metadata: Metadata = createPageMetadata({
  title: "Elettricista a Bari, impianti elettrici e automazioni",
  description:
    "Phoenix Elettronica realizza impianti elettrici, automazioni, citofonia, videosorveglianza e manutenzioni a Bari e provincia. Chiama ora o richiedi un preventivo.",
  path: "/",
});

export default function HomePage() {
  return (
    <div className="pb-20">
      <JsonLd data={[createLocalBusinessSchema(), createWebsiteSchema()]} />
      <section className="relative overflow-hidden bg-charcoal text-white">
        <div className="absolute inset-0 bg-hero-grid bg-[size:42px_42px] opacity-20" />
        <div className="absolute left-1/2 top-0 h-[460px] w-[460px] -translate-x-1/2 rounded-full bg-phoenix-500/20 blur-3xl" />
        <div className="container relative pb-16 pt-32 sm:pb-24 sm:pt-36">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="max-w-2xl">
              <Badge variant="dark" className="mb-6">
                Bari e provincia - Impianti elettrici ed elettronici
              </Badge>
              <h1 className="text-balance text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                Impianti, automazioni e manutenzioni con un'immagine premium e un servizio serio.
              </h1>
              <p className="mt-6 max-w-xl text-pretty text-lg leading-8 text-white/75">
                Phoenix Elettronica supporta condomini, aziende e privati con interventi rapidi,
                preventivi chiari e soluzioni su misura costruite per durare.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link href={company.mobileHref}>Chiama ora</Link>
                </Button>
                <Button asChild size="lg" variant="secondary">
                  <Link href="/preventivo">
                    Richiedi preventivo
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {highlights.map((item) => (
                  <div key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-4">
                    <item.icon className="size-6 text-phoenix-300" />
                    <p className="mt-4 text-sm font-semibold">{item.title}</p>
                    <p className="mt-2 text-sm leading-6 text-white/65">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-soft">
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent" />
                <Image
                  src={heroImage}
                  alt="Quadro elettrico con cablaggi e componenti tecnici"
                  width={1200}
                  height={1400}
                  className="h-[540px] w-full rounded-[1.6rem] object-cover"
                  priority
                />
                <div className="absolute inset-x-8 bottom-8 rounded-3xl border border-white/10 bg-charcoal/75 p-6 backdrop-blur">
                  <p className="text-sm text-white/65">Target</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {audience.map((item) => (
                      <Badge key={item} variant="dark">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AnimatedSection className="container py-20 sm:py-24">
        <SectionTitle
          eyebrow="Servizi"
          title="Tutti i servizi principali, organizzati in modo chiaro."
          description="Dalla manutenzione condominiale alla sicurezza, con percorsi chiari verso chiamata, contatto o preventivo."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="container py-4 sm:py-8">
        <div className="grid gap-5 lg:grid-cols-4">
          {whyPhoenix.map((item) => (
            <Card key={item.title} className="border-border/70 bg-white">
              <CardContent className="space-y-4 p-6">
                <Sparkles className="size-8 text-phoenix-500" />
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-sm leading-6 text-muted-foreground">{item.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="container py-20 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionTitle
            eyebrow="Metodo"
            title="Come lavoriamo"
            description="Un flusso semplice, leggibile e orientato a ridurre tempi morti: ascolto, proposta chiara, esecuzione precisa."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {processSteps.map((step) => (
              <Card key={step.step} className="border-border/70 bg-white">
                <CardContent className="space-y-5 p-6">
                  <div className="text-sm font-semibold text-phoenix-600">{step.step}</div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-sm leading-6 text-muted-foreground">{step.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="container py-4 sm:py-8">
        <div className="grid gap-6 rounded-[2rem] border border-border/70 bg-white p-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <SectionTitle
              eyebrow="Aree di intervento"
              title="Operativita' locale, organizzazione rapida."
              description="Phoenix Elettronica lavora a Bari e provincia, con attenzione specifica a interventi per condomini, aziende e contesti residenziali."
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Card className="border-border/70 bg-secondary/60">
              <CardContent className="p-6">
                <p className="text-sm font-medium text-phoenix-600">Base operativa</p>
                <p className="mt-2 text-xl font-semibold">Bari (BA)</p>
              </CardContent>
            </Card>
            <Card className="border-border/70 bg-secondary/60">
              <CardContent className="p-6">
                <p className="text-sm font-medium text-phoenix-600">Copertura</p>
                <p className="mt-2 text-xl font-semibold">Provincia e comuni limitrofi</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="container py-20 sm:py-24">
        <SectionTitle
          eyebrow="Recensioni"
          title="La fiducia nasce da lavori eseguiti bene e rapporti chiari."
          description="Alcune testimonianze tipiche di clienti che si affidano a Phoenix Elettronica."
          align="center"
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="container py-4 sm:py-8">
        <SectionTitle
          eyebrow="Servizi a Bari"
          title="Pagine dedicate ai principali servizi a Bari."
          description="Approfondimenti dedicati ai servizi piu' richiesti in citta' e provincia."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {localSeoPages.map((page) => (
            <Card key={page.slug} className="border-border/70 bg-white">
              <CardContent className="space-y-4 p-6">
                <Badge>{page.navLabel}</Badge>
                <h3 className="text-2xl font-semibold">{page.h1}</h3>
                <p className="text-sm leading-6 text-muted-foreground">{page.intro}</p>
                <Link
                  href={`/${page.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-phoenix-600"
                >
                  Apri la pagina locale
                  <ArrowRight className="size-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="container">
        <div className="rounded-[2rem] bg-charcoal px-6 py-10 text-white sm:px-10 sm:py-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <Badge variant="dark" className="mb-4">
                Preventivo rapido
              </Badge>
              <h2 className="text-balance text-3xl font-semibold sm:text-4xl">
                Hai un intervento da organizzare o un impianto da aggiornare?
              </h2>
              <p className="mt-4 text-lg leading-8 text-white/72">
                Contatta Phoenix Elettronica per una valutazione chiara, rapida e orientata alla
                soluzione piu' adatta al tuo contesto.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <CTAButton href={company.mobileHref} label="Chiama ora" />
              <CTAButton href="/preventivo" label="Richiedi preventivo" variant="secondary" />
            </div>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-white/60">
            <div className="inline-flex items-center gap-2">
              <Star className="size-4 text-ember" />
              Affidabilita'
            </div>
            <div className="inline-flex items-center gap-2">
              <Star className="size-4 text-ember" />
              Rapidita'
            </div>
            <div className="inline-flex items-center gap-2">
              <Star className="size-4 text-ember" />
              Precisione
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
