import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const items = [
  {
    title: "Visão estratégica",
    description:
      "Cada orientação jurídica considera o impacto real no negócio, não apenas a conformidade legal.",
  },
  {
    title: "Acesso direto aos sócios",
    description:
      "Sem camadas intermediárias. As decisões mais relevantes passam pelos sócios responsáveis pelo caso.",
  },
  {
    title: "Clareza na comunicação",
    description:
      "Pareceres e recomendações escritos para serem entendidos por quem decide, não apenas por quem interpreta a lei.",
  },
  {
    title: "Discrição e confidencialidade",
    description:
      "Tratamento rigoroso da informação sensível de cada cliente, do primeiro contato ao encerramento do caso.",
  },
];

export default function Differentiators() {
  return (
    <section className="relative overflow-hidden bg-charcoal py-20 md:py-28">
      <div
        className="pointer-events-none absolute -left-20 -bottom-20 h-[420px] w-[420px] opacity-[0.05]"
        style={{ backgroundImage: "url('/pattern.svg')", backgroundSize: "200px" }}
      />
      <Container className="relative">
        <SectionHeading
          eyebrow="Por que a Paiva"
          title="Um escritório pensado para quem decide."
          tone="ivory"
        />
        <div className="mt-14 grid gap-px overflow-hidden border border-ivory/10 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <div
              key={item.title}
              className="group bg-charcoal p-8 transition-colors duration-300 hover:bg-[#262a26]"
            >
              <span className="font-display text-3xl text-brass/70 transition-colors group-hover:text-brass">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-xl text-ivory">{item.title}</h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-limestone/80">
                {item.description}
              </p>
              <span className="mt-6 block h-px w-8 bg-ivory/15 transition-all duration-300 group-hover:w-14 group-hover:bg-brass" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
