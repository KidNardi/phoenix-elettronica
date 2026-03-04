import type { Metadata } from "next";
import { Suspense } from "react";

import { ThankYouSummary } from "@/components/thank-you-summary";

export const metadata: Metadata = {
  title: "Grazie",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThanksPage() {
  return (
    <div className="container pb-16 pt-32 sm:pb-20 sm:pt-36">
      <Suspense fallback={<div className="text-sm text-muted-foreground">Caricamento...</div>}>
        <ThankYouSummary />
      </Suspense>
    </div>
  );
}
