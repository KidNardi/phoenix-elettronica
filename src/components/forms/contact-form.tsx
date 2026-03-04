"use client";

import Link from "next/link";
import { Send } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { serviceOptions } from "@/data/site";
import { contactSchema, type ContactFormValues } from "@/lib/form-schemas";

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      service: "",
      message: "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    const result = (await response.json()) as { ok: boolean; error?: string };

    if (!response.ok || !result.ok) {
      toast.error("Invio non riuscito", {
        description: result.error ?? "Riprova tra qualche minuto.",
      });
      return;
    }

    toast.success("Richiesta inviata", {
      description: `Grazie ${values.name}, ti ricontatteremo al piu' presto.`,
    });
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="contact-name">Nome e cognome</Label>
          <Input id="contact-name" placeholder="Il tuo nome" {...register("name")} />
          {errors.name ? <p className="text-sm text-red-600">{errors.name.message}</p> : null}
        </div>
        <div className="space-y-2">
          <Label htmlFor="contact-phone">Telefono</Label>
          <Input id="contact-phone" placeholder="Cellulare o fisso" {...register("phone")} />
          {errors.phone ? <p className="text-sm text-red-600">{errors.phone.message}</p> : null}
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="contact-email">Email</Label>
          <Input id="contact-email" type="email" placeholder="nome@email.it" {...register("email")} />
          {errors.email ? <p className="text-sm text-red-600">{errors.email.message}</p> : null}
        </div>
        <div className="space-y-2">
          <Label>Servizio</Label>
          <Controller
            control={control}
            name="service"
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger aria-label="Seleziona il servizio">
                  <SelectValue placeholder="Seleziona un servizio" />
                </SelectTrigger>
                <SelectContent>
                  {serviceOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          {errors.service ? <p className="text-sm text-red-600">{errors.service.message}</p> : null}
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="contact-message">Messaggio</Label>
        <Textarea
          id="contact-message"
          placeholder="Descrivi brevemente la richiesta, la zona e l'urgenza."
          {...register("message")}
        />
        {errors.message ? <p className="text-sm text-red-600">{errors.message.message}</p> : null}
      </div>
      <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={isSubmitting}>
        <Send className="size-4" />
        {isSubmitting ? "Invio in corso..." : "Invia richiesta"}
      </Button>
      <p className="text-sm leading-6 text-muted-foreground">
        Inviando la richiesta dichiari di aver letto la{" "}
        <Link href="/privacy-policy" className="font-medium text-phoenix-600 hover:text-phoenix-700">
          privacy policy
        </Link>
        .
      </p>
    </form>
  );
}
