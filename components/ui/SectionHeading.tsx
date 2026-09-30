type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "moss" | "ivory";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "moss",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";
  const color = tone === "moss" ? "text-charcoal" : "text-ivory";
  const eyebrowColor = tone === "moss" ? "text-stone" : "text-limestone";

  return (
    <div className={`flex flex-col gap-4 max-w-2xl ${alignment}`}>
      {eyebrow && (
        <span className={`flex items-center gap-3 font-body text-xs tracking-widest2 uppercase ${eyebrowColor}`}>
          <span className="h-px w-8 bg-brass" aria-hidden="true" />
          {eyebrow}
        </span>
      )}
      <h2 className={`font-display text-3xl md:text-4xl leading-tight ${color}`}>{title}</h2>
      {description && (
        <p className={`font-body text-base leading-relaxed ${tone === "moss" ? "text-stone" : "text-limestone"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
