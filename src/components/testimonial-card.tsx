import { Quote } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

type TestimonialCardProps = {
  quote: string;
  name: string;
};

export function TestimonialCard({ quote, name }: TestimonialCardProps) {
  return (
    <Card className="h-full border-border/70 bg-white">
      <CardContent className="flex h-full flex-col justify-between gap-8 p-6">
        <Quote className="size-10 text-phoenix-200" />
        <p className="text-base leading-7 text-foreground">{quote}</p>
        <p className="text-sm font-medium text-muted-foreground">{name}</p>
      </CardContent>
    </Card>
  );
}
