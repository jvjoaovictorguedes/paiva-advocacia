import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { CheckIcon } from "@/components/ui/Icons";

export default function AboutPreview() {
  return (
    <section className="bg-ivory py-20 md:py-28">
      <Container className="grid gap-14 md:grid-cols-2 md:items-center">
        <div className="order-2 md:order-1">
          <div className="relative">
            <div
              className="absolute -bottom-5 -right-5 hidden h-full w-full border border-brass/50 sm:block"
              aria-hidden="true"
            />
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <Image
                src="/sobre-escritorio.jpg"
                alt="Advogado da Paiva Advocacia assinando documentos no escritório"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <SectionHeading
            eyebrow="Sobre a Paiva"
            title="Advocacia técnica, com raciocínio de negócio."
            description="Combinamos rigor jurídico e leitura estratégica de mercado para que cada orientação considere não apenas o que a lei permite, mas o que faz sentido para o momento da empresa."
          />
          <ul className="mt-8 space-y-4">
            {[
              "Atendimento direto com os sócios, do primeiro contato ao fechamento do caso",
              "Pareceres objetivos, sem juridiquês desnecessário",
              "Visão de longo prazo nas decisões societárias e contratuais",
            ].map((item) => (
              <li key={item} className="flex gap-3 font-body text-sm leading-relaxed text-stone">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brass/15 text-brass">
                  <CheckIcon className="h-3 w-3" />
                </span>
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-9">
            <Button href="/sobre" variant="secondary">
              Conhecer o escritório
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
