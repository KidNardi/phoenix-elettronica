import { Badge } from "@/components/ui/badge";

type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "default" | "light";
};

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "default",
}: SectionTitleProps) {
  const isCenter = align === "center";
  const isLight = tone === "light";

  return (
    <div className={isCenter ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <Badge variant={isLight ? "dark" : isCenter ? "default" : "neutral"} className="mb-4">
          {eyebrow}
        </Badge>
      ) : null}
      <h2
        className={
          isLight
            ? "text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl"
            : "text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
        }
      >
        {title}
      </h2>
      {description ? (
        <p
          className={
            isLight
              ? "mt-4 text-pretty text-base leading-7 text-white/70 sm:text-lg"
              : "mt-4 text-pretty text-base leading-7 text-muted-foreground sm:text-lg"
          }
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
