import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/Icons";
import { site, whatsappHref } from "@/content/site";

export const metadata: Metadata = {
  title: "Contato",
  description: "Fale com a Paiva Advocacia e Consultoria.",
};

export default function ContatoPage() {
  return (
    <section className="bg-ivory pt-16 pb-24 md:pt-24 md:pb-32">
      <Container>
        <SectionHeading
          eyebrow="Contato"
          title="Vamos conversar sobre o seu caso."
          description="Fale diretamente pelo WhatsApp ou pelos canais abaixo. O primeiro retorno costuma acontecer em até um dia útil."
        />

        <div className="mt-16 grid gap-14 md:grid-cols-[1fr_1.2fr]">
          <div className="space-y-10">
            <div>
              <h3 className="font-body text-xs tracking-widest2 uppercase text-stone">Endereço</h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-charcoal">
                {site.address.street}
                <br />
                {site.address.district}, {site.address.city} - {site.address.state}
                <br />
                {site.address.zip}
              </p>
            </div>
            <div>
              <h3 className="font-body text-xs tracking-widest2 uppercase text-stone">
                E-mail e telefone
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-charcoal">
                <a href={`mailto:${site.email}`} className="hover:text-moss">
                  {site.email}
                </a>
                <br />
                <a href={`tel:${site.phone}`} className="hover:text-moss">
                  {site.phone}
                </a>
              </p>
            </div>
            <div>
              <h3 className="font-body text-xs tracking-widest2 uppercase text-stone">
                Horário de atendimento
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-charcoal">
                Segunda a sexta, das 9h às 19h
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start justify-center gap-6 border border-limestone/60 p-8 md:p-10">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-moss text-ivory">
              <WhatsAppIcon className="h-7 w-7" />
            </div>
            <div>
              <h3 className="font-display text-xl text-charcoal">Fale com um especialista agora</h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-stone">
                Conte um pouco sobre o seu caso diretamente no WhatsApp e um de nossos
                especialistas retorna o quanto antes.
              </p>
            </div>
            <Button href={whatsappHref()} external>
              Falar no WhatsApp
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
