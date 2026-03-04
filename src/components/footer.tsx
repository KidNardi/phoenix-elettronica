import Link from "next/link";

import { Logo } from "@/components/logo";
import { company, navLinks } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-charcoal text-white">
      <div className="container grid gap-10 py-14 lg:grid-cols-[1.4fr_0.7fr_1fr]">
        <div className="space-y-5">
          <Logo light />
          <p className="max-w-lg text-sm leading-7 text-white/70">
            Impianti elettrici ed elettronici a Bari e provincia per condomini, aziende e privati.
            Soluzioni affidabili, rapide e costruite su misura.
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
            Link rapidi
          </h3>
          <ul className="space-y-3 text-sm text-white/80">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/privacy-policy" className="transition-colors hover:text-white">
                Privacy policy
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4 text-sm text-white/80">
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
            Contatti
          </h3>
          <p>{company.address}</p>
          <p>
            Tel/Fax: <Link href={company.phoneHref}>{company.phone}</Link>
          </p>
          <p>
            Cell: <Link href={company.mobileHref}>{company.mobile}</Link>
          </p>
          <p>
            Email: <Link href={company.emailHref}>{company.email}</Link>
          </p>
          <p>P.IVA {company.vat}</p>
        </div>
      </div>
    </footer>
  );
}
