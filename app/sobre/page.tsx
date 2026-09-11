import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactCTA from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conheça a história, os valores e a forma de atuação da Paiva Advocacia e Consultoria.",
};

const values = [
  {
    title: "Precisão técnica",
    description: "Cada posicionamento jurídico é construído com fundamentação sólida e atualizada.",
  },
  {
    title: "Proximidade",
    description: "Relação direta entre sócios e clientes, sem intermediações desnecessárias.",
  },
  {
    title: "Visão de negócio",
    description: "O direito como instrumento para viabilizar decisões, não como obstáculo a elas.",
  },
  {
    title: "Integridade",
    description: "Transparência sobre riscos, prazos e alternativas, mesmo quando a resposta é difícil.",
  },
];

export default function SobrePage() {
  return (
    <>
      <section className="bg-ivory pt-16 pb-20 md:pt-24 md:pb-28">
        <Container>
          <SectionHeading
            eyebrow="Sobre a Paiva"
            title="Um escritório construído para acompanhar decisões, não apenas processos."
            description="A Paiva Advocacia e Consultoria nasceu da constatação de que empresas em crescimento precisam de um parceiro jurídico que entenda de negócio tanto quanto entende de lei. Atuamos ao lado de sócios, diretorias e conselhos em decisões que exigem segurança jurídica e leitura estratégica de mercado."
          />

          <div className="mt-16 grid gap-10 md:grid-cols-2">
            <div className="border border-limestone/60 p-8">
              <h3 className="font-display text-xl text-charcoal">Como trabalhamos</h3>
              <p className="mt-4 font-body text-sm leading-relaxed text-stone">
                Cada caso é conduzido por um sócio responsável, com apoio de uma equipe dedicada às
                especificidades técnicas da matéria. Isso garante que decisões relevantes nunca
                passem apenas por quem não tem autoridade para respondê-las.
              </p>
            </div>
            <div className="border border-limestone/60 p-8">
              <h3 className="font-display text-xl text-charcoal">Para quem trabalhamos</h3>
              <p className="mt-4 font-body text-sm leading-relaxed text-stone">
                Empresas de médio porte, grupos familiares em processo de profissionalização e
                empresas de tecnologia em crescimento que precisam de estrutura jurídica compatível
                com a complexidade que estão assumindo.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-charcoal py-20 md:py-28">
        <Container>
          <SectionHeading eyebrow="Valores" title="O que orienta cada caso que assumimos." tone="ivory" />
          <div className="mt-14 grid gap-px overflow-hidden border border-ivory/10 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="bg-charcoal p-8">
                <h3 className="font-display text-lg text-ivory">{value.title}</h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-limestone/80">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-ivory py-20 md:py-28">
        <Container>
          <SectionHeading eyebrow="Equipe" title="Sócios à frente de cada caso." />
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Nome do Sócio", role: "Sócio-fundador · Direito Empresarial" },
              { name: "Nome da Sócia", role: "Sócia · Tributário e Compliance" },
              { name: "Nome do Sócio", role: "Sócio · Contencioso Estratégico" },
            ].map((person) => (
              <div key={person.name} className="border border-limestone/60">
                <div className="flex aspect-[4/5] items-center justify-center bg-limestone/30">
                  <span className="px-6 text-center font-body text-xs tracking-widest2 uppercase text-stone">
                    Foto institucional
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg text-charcoal">{person.name}</h3>
                  <p className="mt-1 font-body text-xs tracking-widest2 uppercase text-stone">
                    {person.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
