import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

type CTAButtonProps = {
  href: string;
  label: string;
  variant?: "default" | "secondary" | "outline" | "ghost";
};

export function CTAButton({ href, label, variant = "default" }: CTAButtonProps) {
  return (
    <Button asChild variant={variant} size="lg">
      <Link href={href}>
        {label}
        <ArrowRight className="size-4" />
      </Link>
    </Button>
  );
}
