import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/content/testimonials";

export default function Testimonials() {
  return (
    <section className="bg-ivory py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Resultados"
          title="O que dizem os clientes que atendemos."
          align="center"
        />
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote
              key={t.author}
              className="flex h-full flex-col justify-between border border-limestone/60 p-8"
            >
              <p className="font-display text-lg leading-snug text-charcoal">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-8 font-body text-xs tracking-widest2 uppercase text-stone">
                {t.author}
                <br />
                <span className="text-stone/70 normal-case tracking-normal">{t.company}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </Container>
    </section>
  );
}
