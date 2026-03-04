import type { Metadata } from "next";

import { JsonLd } from "@/components/json-ld";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { createBreadcrumbSchema, createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Privacy Policy",
  description:
    "Informativa privacy di Phoenix Elettronica sul trattamento dei dati personali raccolti tramite contatti, email e richieste di preventivo.",
  path: "/privacy-policy",
});

const updatedAt = "4 marzo 2026";

export default function PrivacyPolicyPage() {
  return (
    <div className="container pb-20 pt-32 sm:pt-36">
      <JsonLd
        data={createBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy-policy" },
        ])}
      />

      <div className="max-w-4xl">
        <Badge className="mb-6">Privacy Policy</Badge>
        <h1 className="text-balance text-4xl font-semibold sm:text-5xl">
          Informativa sul trattamento dei dati personali
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Questa informativa descrive come Phoenix Elettronica tratta i dati personali raccolti
          tramite il sito, i moduli di contatto e le richieste di preventivo.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">Ultimo aggiornamento: {updatedAt}</p>
      </div>

      <div className="mt-10 space-y-6">
        <Card className="border-border/70 bg-white">
          <CardContent className="space-y-4 p-8">
            <h2 className="text-2xl font-semibold">1. Titolare del trattamento</h2>
            <p className="text-sm leading-7 text-muted-foreground">
              Il titolare del trattamento e' {siteConfig.legalName}, con sede in{" "}
              {siteConfig.nap.fullAddress}, email {siteConfig.nap.email} e recapiti telefonici{" "}
              {siteConfig.nap.phone} e {siteConfig.nap.mobile}.
            </p>
          </CardContent>
        </Card>

        <Card className="border-border/70 bg-white">
          <CardContent className="space-y-4 p-8">
            <h2 className="text-2xl font-semibold">2. Dati trattati</h2>
            <p className="text-sm leading-7 text-muted-foreground">
              Possiamo trattare dati identificativi e di contatto come nome, telefono, email, zona
              di intervento, servizio richiesto e contenuto del messaggio inviato tramite il sito.
            </p>
          </CardContent>
        </Card>

        <Card className="border-border/70 bg-white">
          <CardContent className="space-y-4 p-8">
            <h2 className="text-2xl font-semibold">3. Finalita' del trattamento</h2>
            <ul className="space-y-3 text-sm leading-7 text-muted-foreground">
              <li>Gestire richieste di contatto, sopralluogo e preventivo.</li>
              <li>Ricontattare l'utente in relazione ai servizi richiesti.</li>
              <li>Adempiere a obblighi amministrativi, contabili o di legge, se applicabili.</li>
              <li>Garantire sicurezza tecnica e corretta gestione del sito.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-border/70 bg-white">
          <CardContent className="space-y-4 p-8">
            <h2 className="text-2xl font-semibold">4. Base giuridica</h2>
            <p className="text-sm leading-7 text-muted-foreground">
              Il trattamento avviene per rispondere a richieste dell'interessato e per misure
              precontrattuali adottate su sua richiesta; ove necessario, puo' basarsi anche
              sull'adempimento di obblighi di legge e sul legittimo interesse del titolare alla
              sicurezza del sito e all'organizzazione delle comunicazioni.
            </p>
          </CardContent>
        </Card>

        <Card className="border-border/70 bg-white">
          <CardContent className="space-y-4 p-8">
            <h2 className="text-2xl font-semibold">5. Modalita' di trattamento e conservazione</h2>
            <p className="text-sm leading-7 text-muted-foreground">
              I dati sono trattati con strumenti informatici e organizzativi adeguati a garantirne
              sicurezza, riservatezza e integrita'. I dati sono conservati per il tempo necessario a
              gestire la richiesta ricevuta e, se nasce un rapporto commerciale o contrattuale, per
              il periodo richiesto dagli obblighi normativi e amministrativi applicabili.
            </p>
          </CardContent>
        </Card>

        <Card className="border-border/70 bg-white">
          <CardContent className="space-y-4 p-8">
            <h2 className="text-2xl font-semibold">6. Comunicazione dei dati</h2>
            <p className="text-sm leading-7 text-muted-foreground">
              I dati non vengono diffusi. Possono essere comunicati a fornitori tecnici, consulenti
              o soggetti che supportano l'attivita' del titolare, nei limiti strettamente necessari
              alle finalita' indicate e nel rispetto della normativa applicabile.
            </p>
          </CardContent>
        </Card>

        <Card className="border-border/70 bg-white">
          <CardContent className="space-y-4 p-8">
            <h2 className="text-2xl font-semibold">7. Diritti dell'interessato</h2>
            <p className="text-sm leading-7 text-muted-foreground">
              L'interessato puo' esercitare i diritti previsti dagli articoli 15 e seguenti del
              Regolamento (UE) 2016/679, tra cui accesso, rettifica, cancellazione, limitazione,
              opposizione e portabilita' dei dati, nei casi applicabili. E' inoltre possibile
              proporre reclamo all'Autorita' Garante per la protezione dei dati personali.
            </p>
          </CardContent>
        </Card>

        <Card className="border-border/70 bg-white">
          <CardContent className="space-y-4 p-8">
            <h2 className="text-2xl font-semibold">8. Contatti per l'esercizio dei diritti</h2>
            <p className="text-sm leading-7 text-muted-foreground">
              Per richieste relative alla privacy o all'esercizio dei diritti puoi scrivere a{" "}
              {siteConfig.nap.email} oppure contattare {siteConfig.legalName} ai recapiti indicati
              in questa informativa.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
