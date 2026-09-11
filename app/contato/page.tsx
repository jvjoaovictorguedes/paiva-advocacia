import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { site } from "@/content/site";

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
          description="Preencha o formulário ou fale diretamente pelos canais abaixo. O primeiro retorno costuma acontecer em até um dia útil."
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

          <form className="space-y-6 border border-limestone/60 p-8 md:p-10">
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="block">
                <span className="font-body text-xs tracking-widest2 uppercase text-stone">
                  Nome
                </span>
                <input
                  type="text"
                  name="nome"
                  required
                  className="mt-2 w-full border-b border-limestone bg-transparent py-2 font-body text-sm text-charcoal outline-none focus:border-moss"
                />
              </label>
              <label className="block">
                <span className="font-body text-xs tracking-widest2 uppercase text-stone">
                  Empresa
                </span>
                <input
                  type="text"
                  name="empresa"
                  className="mt-2 w-full border-b border-limestone bg-transparent py-2 font-body text-sm text-charcoal outline-none focus:border-moss"
                />
              </label>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="block">
                <span className="font-body text-xs tracking-widest2 uppercase text-stone">
                  E-mail
                </span>
                <input
                  type="email"
                  name="email"
                  required
                  className="mt-2 w-full border-b border-limestone bg-transparent py-2 font-body text-sm text-charcoal outline-none focus:border-moss"
                />
              </label>
              <label className="block">
                <span className="font-body text-xs tracking-widest2 uppercase text-stone">
                  Telefone
                </span>
                <input
                  type="tel"
                  name="telefone"
                  className="mt-2 w-full border-b border-limestone bg-transparent py-2 font-body text-sm text-charcoal outline-none focus:border-moss"
                />
              </label>
            </div>
            <label className="block">
              <span className="font-body text-xs tracking-widest2 uppercase text-stone">
                Como podemos ajudar
              </span>
              <textarea
                name="mensagem"
                rows={5}
                required
                className="mt-2 w-full border-b border-limestone bg-transparent py-2 font-body text-sm text-charcoal outline-none focus:border-moss"
              />
            </label>
            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-moss px-7 py-3.5 font-body text-[0.7rem] tracking-widest2 uppercase text-ivory transition-colors hover:bg-charcoal"
            >
              Enviar mensagem
            </button>
            <p className="font-body text-xs leading-relaxed text-stone">
              Este formulário é um modelo de front-end. Para receber os envios, conecte-o a um
              serviço de e-mail ou backend de sua preferência.
            </p>
          </form>
        </div>
      </Container>
    </section>
  );
}
