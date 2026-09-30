import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { site, whatsappHref } from "@/content/site";
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
          <span className="flex items-center gap-3 font-body text-xs tracking-widest2 uppercase text-stone">
            <span className="h-px w-8 bg-brass" aria-hidden="true" />
            {site.fullName}
          </span>
          <h1 className="mt-5 font-display text-4xl leading-[1.1] text-charcoal md:text-6xl">
            Estratégia que gera resultados.
          </h1>
          <p className="mt-6 max-w-xl font-body text-base leading-relaxed text-stone md:text-lg">
            {site.description}
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Button href={whatsappHref()} external>
              Fale com um especialista
            </Button>
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
              <div
                key={pillar.title}
                className="group bg-moss px-6 py-9 transition-colors duration-300 hover:bg-[#2c3b31]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-brass/40 bg-brass/10 transition-colors duration-300 group-hover:bg-brass/20">
                  <Icon className="h-6 w-6 text-brass" />
                </span>
                <h3 className="mt-5 font-display text-lg text-ivory">{pillar.title}</h3>
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
