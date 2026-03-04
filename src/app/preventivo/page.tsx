import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { ArrowLeft } from "lucide-react";

import { AnimatedSection } from "@/components/animated-section";
import { QuoteForm } from "@/components/forms/quote-form";
import { JsonLd } from "@/components/json-ld";
import { SectionTitle } from "@/components/section-title";
import { Card, CardContent } from "@/components/ui/card";
import { createBreadcrumbSchema, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Preventivo elettricista Bari",
  description:
    "Richiedi un preventivo a Phoenix Elettronica per impianti elettrici, manutenzioni, automazioni, citofonia e videosorveglianza a Bari e provincia.",
  path: "/preventivo",
});

export default function QuotePage() {
  return (
    <div className="min-h-screen bg-charcoal px-4 py-6 sm:px-6 sm:py-8">
      <JsonLd
        data={createBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Preventivo", path: "/preventivo" },
        ])}
      />
      <AnimatedSection className="mx-auto flex min-h-[calc(100vh-3rem)] w-full max-w-3xl items-center justify-center">
        <Card className="w-full border-white/10 bg-white shadow-[0_28px_80px_-28px_rgba(15,23,42,0.45)]">
          <CardContent className="p-6 sm:p-8">
            <div className="mb-6 flex items-center justify-between gap-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                <ArrowLeft className="size-4" />
                Torna al sito
              </Link>
            </div>
            <SectionTitle
              title="Richiedi il preventivo"
              description="Compila il form e invia la richiesta. Tutto qui."
            />
            <div className="mt-8">
              <Suspense fallback={<div className="text-sm text-muted-foreground">Caricamento...</div>}>
                <QuoteForm />
              </Suspense>
            </div>
          </CardContent>
        </Card>
      </AnimatedSection>
    </div>
  );
}
