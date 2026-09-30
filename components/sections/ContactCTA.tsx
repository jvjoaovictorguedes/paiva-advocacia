import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { whatsappHref } from "@/content/site";

export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-moss py-20 md:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{ backgroundImage: "url('/pattern.svg')", backgroundSize: "220px" }}
      />
      <Container className="relative flex flex-col items-center gap-8 text-center">
        <h2 className="max-w-2xl font-display text-3xl leading-tight text-ivory md:text-4xl">
          Pronto para decidir com mais segurança jurídica?
        </h2>
        <p className="max-w-xl font-body text-base leading-relaxed text-limestone">
          Agende uma conversa inicial com nossos sócios e entenda como podemos apoiar o próximo
          passo do seu negócio.
        </p>
        <Button href={whatsappHref()} variant="ghost" external>
          Agendar conversa
        </Button>
      </Container>
    </section>
  );
}
