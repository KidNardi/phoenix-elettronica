import Link from "next/link";
import { FileText, Phone } from "lucide-react";

import { company } from "@/data/site";

export function CallBar() {
  return (
    <div className="fixed inset-x-0 bottom-4 z-40 px-4 md:hidden">
      <div className="grid grid-cols-2 gap-2 rounded-3xl border border-white/15 bg-charcoal p-2 shadow-soft backdrop-blur">
        <Link
          href={company.mobileHref}
          className="flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-phoenix-500 px-3 text-sm font-semibold text-white"
          aria-label="Chiama Phoenix Elettronica"
        >
          <Phone className="size-4" />
          Chiama
        </Link>
        <Link
          href="/preventivo"
          className="flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-white px-3 text-sm font-semibold text-charcoal"
          aria-label="Richiedi un preventivo a Phoenix Elettronica"
        >
          <FileText className="size-4" />
          Preventivo
        </Link>
      </div>
    </div>
  );
}
