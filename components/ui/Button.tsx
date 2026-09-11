import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  external?: boolean;
};

const variants = {
  primary: "bg-moss text-ivory hover:bg-charcoal",
  secondary: "border border-moss text-moss hover:bg-moss hover:text-ivory",
  ghost: "border border-ivory/60 text-ivory hover:bg-ivory hover:text-moss",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: ButtonProps) {
  const classes = `inline-flex items-center gap-2 px-7 py-3.5 text-[0.7rem] tracking-widest2 uppercase font-body transition-colors duration-200 ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
