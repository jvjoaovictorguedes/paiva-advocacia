import { WhatsAppIcon } from "@/components/ui/Icons";
import { whatsappHref } from "@/content/site";

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappHref()}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-moss text-ivory shadow-lg shadow-charcoal/20 transition-transform hover:scale-105"
    >
      <WhatsAppIcon className="h-6 w-6" />
    </a>
  );
}
