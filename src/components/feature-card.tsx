import { Check } from "lucide-react";

import { iconMap } from "@/components/icon-map";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type FeatureCardProps = {
  eyebrow?: string;
  title: string;
  text: string;
  bullets: string[];
  icon: string;
};

export function FeatureCard({
  eyebrow,
  title,
  text,
  bullets,
  icon,
}: FeatureCardProps) {
  const Icon = iconMap[icon];

  return (
    <Card className="h-full border-border/70 bg-white">
      <CardHeader className="space-y-4">
        <div className="flex size-14 items-center justify-center rounded-2xl bg-charcoal text-white">
          <Icon className="size-6" />
        </div>
        {eyebrow ? <p className="text-sm font-medium text-phoenix-600">{eyebrow}</p> : null}
        <CardTitle className="text-2xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-5">
        <p className="text-sm leading-6 text-muted-foreground">{text}</p>
        <ul className="space-y-3">
          {bullets.map((bullet) => (
            <li key={bullet} className="flex items-center gap-3 text-sm text-foreground">
              <span className="flex size-6 items-center justify-center rounded-full bg-phoenix-50 text-phoenix-600">
                <Check className="size-4" />
              </span>
              {bullet}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
