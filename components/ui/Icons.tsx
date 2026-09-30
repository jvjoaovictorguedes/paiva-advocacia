import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function ScaleIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...props}>
      <path d="M24 6v34" />
      <path d="M12 12h24" />
      <path d="M24 6l-4 6" />
      <path d="M6 15l6-3 6 3-6 13-6-13z" />
      <path d="M30 15l6-3 6 3-6 13-6-13z" />
      <path d="M17 40h14" />
    </svg>
  );
}

export function PeopleIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...props}>
      <circle cx="17" cy="16" r="5" />
      <circle cx="32" cy="16" r="5" />
      <path d="M7 40v-3c0-5 4-9 9-9h2c2 0 3.8.7 5.2 1.9" />
      <path d="M41 40v-3c0-5-4-9-9-9h-2c-1.9 0-3.6.6-5 1.7" />
    </svg>
  );
}

export function DocumentIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...props}>
      <path d="M14 5h14l7 7v29a2 2 0 0 1-2 2H14a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z" />
      <path d="M28 5v7h7" />
      <path d="M17 25h14" />
      <path d="M17 31h14" />
      <path d="M17 19h7" />
    </svg>
  );
}

export function BuildingIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...props}>
      <path d="M8 42h32" />
      <path d="M12 42V19l12-9 12 9v23" />
      <path d="M20 42V26h8v16" />
      <path d="M17 19h.01M24 19h.01M31 19h.01" strokeWidth="2.2" />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...props}>
      <path d="M24 5l16 6v11c0 10-6.7 17.7-16 21-9.3-3.3-16-11-16-21V11z" />
      <path d="M17 24l5 5 9-10" />
    </svg>
  );
}

export function HandshakeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...props}>
      <path d="M4 22l8-8 8 5" />
      <path d="M44 22l-8-8-8 5" />
      <path d="M12 19l9 9a3 3 0 0 0 4-4" />
      <path d="M36 19l-9 9a3 3 0 0 1-4-4l7-7" />
      <path d="M4 22l6 6M44 22l-6 6" />
    </svg>
  );
}

export const icons = {
  scale: ScaleIcon,
  people: PeopleIcon,
  document: DocumentIcon,
  building: BuildingIcon,
  shield: ShieldIcon,
  handshake: HandshakeIcon,
};

export function ArrowIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} strokeWidth={1.6} {...props}>
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} strokeWidth={1.6} {...props}>
      <path d="M3 6h18" />
      <path d="M3 12h18" />
      <path d="M3 18h18" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} strokeWidth={1.6} {...props}>
      <path d="M5 5l14 14" />
      <path d="M19 5L5 19" />
    </svg>
  );
}

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" {...props}>
      <path d="M16.02 3C9.4 3 4 8.4 4 15.02c0 2.36.66 4.56 1.8 6.44L4 29l7.72-1.76a11.94 11.94 0 0 0 4.3.8h.01c6.62 0 12.02-5.4 12.02-12.02C28.05 8.4 22.65 3 16.02 3zm0 21.86h-.01a9.9 9.9 0 0 1-5.05-1.39l-.36-.21-4.58 1.05 1.08-4.47-.24-.38a9.86 9.86 0 0 1-1.5-5.24c0-5.46 4.44-9.9 9.92-9.9 2.64 0 5.13 1.03 6.99 2.9a9.82 9.82 0 0 1 2.9 6.99c0 5.46-4.45 9.9-9.15 9.65z" />
      <path d="M21.2 18.34c-.29-.15-1.7-.84-1.96-.94-.26-.1-.46-.15-.65.15-.19.29-.75.94-.92 1.13-.17.19-.34.22-.63.07-.29-.15-1.22-.45-2.32-1.43-.86-.77-1.44-1.71-1.6-2-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.65-1.57-.89-2.15-.23-.56-.47-.48-.65-.49h-.56c-.19 0-.51.07-.78.36-.26.29-1.02 1-1.02 2.43s1.05 2.82 1.19 3.01c.15.19 2.06 3.15 5 4.42.7.3 1.24.48 1.67.62.7.22 1.34.19 1.84.11.56-.08 1.7-.7 1.94-1.37.24-.68.24-1.26.17-1.38-.07-.13-.26-.2-.55-.35z" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} strokeWidth={1.6} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}
