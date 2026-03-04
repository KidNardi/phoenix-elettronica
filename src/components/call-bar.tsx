import Link from "next/link";
import { Mail, MessageCircleMore, Phone } from "lucide-react";

import { company } from "@/data/site";

export function CallBar() {
  return (
    <div className="fixed inset-x-0 bottom-4 z-40 px-4 md:hidden">
      <div className="grid grid-cols-3 gap-2 rounded-3xl border border-white/15 bg-charcoal p-2 shadow-soft backdrop-blur">
        <Link
          href={company.mobileHref}
          className="flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-phoenix-500 px-3 text-sm font-semibold text-white"
          aria-label="Chiama Phoenix Elettronica"
        >
          <Phone className="size-4" />
          Chiama
        </Link>
        <Link
          href={company.emailHref}
          className="flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-white/10 px-3 text-sm font-semibold text-white"
          aria-label="Invia una email a Phoenix Elettronica"
        >
          <Mail className="size-4" />
          Email
        </Link>
        <Link
          href="https://wa.me/393356349428"
          className="flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-white/10 px-3 text-sm font-semibold text-white"
          aria-label="Apri la chat WhatsApp di Phoenix Elettronica"
        >
          <MessageCircleMore className="size-4" />
          WhatsApp
        </Link>
      </div>
    </div>
  );
}
