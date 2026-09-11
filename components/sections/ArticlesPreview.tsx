import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { ArrowIcon } from "@/components/ui/Icons";
import { articles } from "@/content/articles";

export default function ArticlesPreview() {
  return (
    <section className="bg-ivory py-20 md:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading eyebrow="Artigos" title="Análises sobre direito empresarial e negócios." />
          <Button href="/artigos" variant="secondary" className="shrink-0">
            Ver todos os artigos
          </Button>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/artigos/${article.slug}`}
              className="group flex flex-col border-t border-moss/20 pt-6"
            >
              <span className="font-body text-xs tracking-widest2 uppercase text-stone">
                {article.category} · {article.date}
              </span>
              <h3 className="mt-4 font-display text-xl leading-snug text-charcoal group-hover:text-moss">
                {article.title}
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-stone">
                {article.excerpt}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 font-body text-xs tracking-widest2 uppercase text-moss">
                Ler artigo
                <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
