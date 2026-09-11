import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactCTA from "@/components/sections/ContactCTA";
import { icons } from "@/components/ui/Icons";
import { areas } from "@/content/areas";

export const metadata: Metadata = {
  title: "Áreas de Atuação",
  description: "Conheça as áreas de atuação da Paiva Advocacia e Consultoria.",
};

export default function AtuacaoPage() {
  return (
    <>
      <section className="bg-ivory pt-16 pb-16 md:pt-24 md:pb-20">
        <Container>
          <SectionHeading
            eyebrow="Áreas de Atuação"
            title="Direito empresarial com profundidade técnica em cada frente."
            description="Atuamos de forma integrada entre as áreas, porque decisões de negócio raramente tocam apenas uma matéria jurídica isoladamente."
          />
        </Container>
      </section>

      <section className="bg-ivory pb-20 md:pb-28">
        <Container>
          <div className="grid gap-px overflow-hidden border border-limestone/60 md:grid-cols-2">
            {areas.map((area) => {
              const Icon = icons[area.icon];
              return (
                <div key={area.slug} id={area.slug} className="bg-ivory p-9 border-b border-r border-limestone/60">
                  <Icon className="h-9 w-9 text-moss" />
                  <h2 className="mt-5 font-display text-2xl text-charcoal">{area.title}</h2>
                  <p className="mt-3 font-body text-sm leading-relaxed text-stone">
                    {area.description}
                  </p>
                  <ul className="mt-6 space-y-2.5">
                    {area.topics.map((topic) => (
                      <li key={topic} className="flex gap-3 font-body text-sm text-charcoal/80">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-moss" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
