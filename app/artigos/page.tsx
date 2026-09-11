import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { ArrowIcon } from "@/components/ui/Icons";
import { articles } from "@/content/articles";

export const metadata: Metadata = {
  title: "Artigos",
  description: "Análises da Paiva Advocacia e Consultoria sobre direito empresarial e negócios.",
};

export default function ArtigosPage() {
  return (
    <section className="bg-ivory pt-16 pb-24 md:pt-24 md:pb-32">
      <Container>
        <SectionHeading
          eyebrow="Artigos"
          title="Perspectivas jurídicas para quem decide o rumo do negócio."
          description="Conteúdo produzido pela equipe da Paiva sobre governança, compliance, contratos e estratégia jurídica empresarial."
        />

        <div className="mt-16 grid gap-px overflow-hidden border-t border-moss/20">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/artigos/${article.slug}`}
              className="group grid gap-4 border-b border-moss/20 py-10 md:grid-cols-[200px_1fr_auto] md:items-center md:gap-10"
            >
              <span className="font-body text-xs tracking-widest2 uppercase text-stone">
                {article.category}
                <br />
                {article.date}
              </span>
              <div>
                <h2 className="font-display text-2xl leading-snug text-charcoal group-hover:text-moss">
                  {article.title}
                </h2>
                <p className="mt-2 max-w-xl font-body text-sm leading-relaxed text-stone">
                  {article.excerpt}
                </p>
              </div>
              <span className="inline-flex items-center gap-2 font-body text-xs tracking-widest2 uppercase text-moss">
                Ler
                <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
