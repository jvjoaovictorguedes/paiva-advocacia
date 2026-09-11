import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactCTA from "@/components/sections/ContactCTA";
import { icons } from "@/components/ui/Icons";
import { consultingServices } from "@/content/consulting";

export const metadata: Metadata = {
  title: "Consultoria",
  description:
    "Consultoria jurídica preventiva, gestão de riscos, governança, compliance e due diligence.",
};

export default function ConsultoriaPage() {
  return (
    <>
      <section className="bg-ivory pt-16 pb-16 md:pt-24 md:pb-20">
        <Container>
          <SectionHeading
            eyebrow="Consultoria"
            title="Consultoria jurídica como parte da gestão, não como reação a problemas."
            description="Estruturamos programas de acompanhamento contínuo para que decisões estratégicas já considerem o risco jurídico desde a origem, e não apenas quando ele se materializa."
          />
        </Container>
      </section>

      <section className="bg-ivory pb-20 md:pb-28">
        <Container className="space-y-px overflow-hidden border border-limestone/60">
          {consultingServices.map((service, i) => {
            const Icon = icons[service.icon];
            const reverse = i % 2 === 1;
            return (
              <div
                key={service.slug}
                id={service.slug}
                className={`grid gap-10 bg-ivory p-9 md:grid-cols-[auto_1fr] md:items-start ${
                  reverse ? "md:[direction:rtl]" : ""
                } border-b border-limestone/60 last:border-none`}
              >
                <div className={reverse ? "[direction:ltr]" : ""}>
                  <Icon className="h-10 w-10 text-moss" />
                </div>
                <div className={reverse ? "[direction:ltr]" : ""}>
                  <h2 className="font-display text-2xl text-charcoal">{service.title}</h2>
                  <p className="mt-3 max-w-2xl font-body text-sm leading-relaxed text-stone">
                    {service.description}
                  </p>
                  <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
                    {service.deliverables.map((item) => (
                      <div key={item} className="flex gap-3 font-body text-sm text-charcoal/80">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-moss" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
