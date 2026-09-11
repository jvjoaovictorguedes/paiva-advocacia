import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { site } from "@/content/site";
import { pillars } from "@/content/areas";
import { icons } from "@/components/ui/Icons";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ivory">
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-[520px] w-[520px] opacity-[0.05] md:opacity-[0.08]"
        style={{ backgroundImage: "url('/pattern.svg')", backgroundSize: "220px" }}
      />
      <Container className="relative pt-16 pb-14 md:pt-24 md:pb-20">
        <div className="max-w-3xl">
          <span className="font-body text-xs tracking-widest2 uppercase text-stone">
            {site.fullName}
          </span>
          <h1 className="mt-5 font-display text-4xl leading-[1.1] text-charcoal md:text-6xl">
            Estratégia que gera resultados.
          </h1>
          <p className="mt-6 max-w-xl font-body text-base leading-relaxed text-stone md:text-lg">
            {site.description}
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Button href="/contato">Fale com um especialista</Button>
            <Button href="/atuacao" variant="secondary">
              Conheça nossa atuação
            </Button>
          </div>
        </div>
      </Container>

      <div className="border-t border-limestone/60 bg-moss">
        <Container className="grid grid-cols-2 gap-px bg-limestone/10 md:grid-cols-4">
          {pillars.map((pillar) => {
            const Icon = icons[pillar.icon];
            return (
              <div key={pillar.title} className="bg-moss px-6 py-9">
                <Icon className="h-8 w-8 text-limestone" />
                <h3 className="mt-4 font-display text-lg text-ivory">{pillar.title}</h3>
                <p className="mt-2 font-body text-xs leading-relaxed text-limestone/80">
                  {pillar.summary}
                </p>
              </div>
            );
          })}
        </Container>
      </div>
    </section>
  );
}
