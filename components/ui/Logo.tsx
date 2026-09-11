type LogoProps = {
  variant?: "mark" | "full" | "horizontal";
  tone?: "moss" | "ivory";
  className?: string;
};

/**
 * Monograma recriado a partir da identidade visual enviada (P + coroa + leão).
 * Placeholder estilizado: substitua pelos arquivos vetoriais finais do designer
 * em /public/logo quando disponíveis.
 */
function Mark({ tone = "moss", className }: { tone?: "moss" | "ivory"; className?: string }) {
  const color = tone === "moss" ? "#26342B" : "#F5F2EB";
  return (
    <svg
      viewBox="0 0 120 140"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M60 6l7 12 12-6-3 13 13 3-9 9 9 9-13 3 3 13-12-6-7 12-7-12-12 6 3-13-13-3 9-9-9-9 13-3-3-13 12 6 7-12z"
        fill="none"
        stroke={color}
        strokeWidth="1.6"
      />
      <path
        d="M34 40h20c11 0 19 7 19 17 0 8-5.5 14-13.5 16.3L74 96h-13l-11-20h-4v20H34V40zm12 8v18h7c6 0 10-3.6 10-9s-4-9-10-9h-7z"
        fill={color}
      />
      <path
        d="M43 60c3-4 8-6 12-4 3 1.5 3 5 6 6 3 1 6-1 9 1 2.5 1.7 2 5 4 7-3 6-8 10-8 18 0 4 1.5 6.5 4 9h-9c-2.5-2.5-4-5.5-4-9.5 0-7 4-11 4-16 0-3-2-4.5-4.5-4-2.5.5-3.5 3-6.5 3-3.5 0-5-3-8-3-2 0-3.5 1.2-5 3l-4-9.5z"
        fill={color}
      />
    </svg>
  );
}

export default function Logo({ variant = "horizontal", tone = "moss", className = "" }: LogoProps) {
  const color = tone === "moss" ? "text-moss" : "text-ivory";

  if (variant === "mark") {
    return <Mark tone={tone} className={className || "h-10 w-10"} />;
  }

  if (variant === "full") {
    return (
      <div className={`flex flex-col items-center gap-2 ${className}`}>
        <Mark tone={tone} className="h-16 w-16" />
        <div className="text-center">
          <div className={`font-display text-3xl tracking-[0.2em] ${color}`}>PAIVA</div>
          <div className={`font-body text-[0.6rem] tracking-widest2 ${color} opacity-80`}>
            ADVOCACIA E CONSULTORIA
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Mark tone={tone} className="h-9 w-9 shrink-0" />
      <div className="leading-tight">
        <div className={`font-display text-xl tracking-[0.15em] ${color}`}>PAIVA</div>
        <div className={`font-body text-[0.55rem] tracking-widest2 ${color} opacity-80`}>
          ADVOCACIA E CONSULTORIA
        </div>
      </div>
    </div>
  );
}
