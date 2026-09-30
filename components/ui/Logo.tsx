import Image from "next/image";

type LogoProps = {
  className?: string;
};

export default function Logo({ className = "" }: LogoProps) {
  return (
    <Image
      src="/logo.jpg"
      alt="Paiva Advocacia e Consultoria"
      width={160}
      height={160}
      priority
      className={`h-12 w-12 shrink-0 rounded-sm object-cover ${className}`}
    />
  );
}
