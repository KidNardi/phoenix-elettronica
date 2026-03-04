"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

import { CallBar } from "@/components/call-bar";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

type SiteChromeProps = {
  children: ReactNode;
};

export function SiteChrome({ children }: SiteChromeProps) {
  const pathname = usePathname();
  const isMinimalQuotePage = pathname === "/preventivo";

  if (isMinimalQuotePage) {
    return <main className="overflow-x-clip">{children}</main>;
  }

  return (
    <>
      <Navbar />
      <main className="overflow-x-clip pb-24 md:pb-0">{children}</main>
      <Footer />
      <CallBar />
    </>
  );
}
