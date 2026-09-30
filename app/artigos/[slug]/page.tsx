import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { articles } from "@/content/articles";
import { whatsappHref } from "@/content/site";

type Params = { slug: string };

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function ArtigoPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  const others = articles.filter((a) => a.slug !== slug).slice(0, 2);

  return (
    <article className="bg-ivory pt-16 pb-24 md:pt-24 md:pb-32">
      <Container className="max-w-3xl">
        <Link
          href="/artigos"
          className="font-body text-xs tracking-widest2 uppercase text-stone hover:text-moss"
        >
          ← Voltar para artigos
        </Link>

        <span className="mt-8 block font-body text-xs tracking-widest2 uppercase text-stone">
          {article.category} · {article.date} · {article.readingTime}
        </span>
        <h1 className="mt-4 font-display text-3xl leading-tight text-charcoal md:text-4xl">
          {article.title}
        </h1>

        <div className="mt-10 space-y-6">
          {article.content.map((paragraph, i) => (
            <p key={i} className="font-body text-base leading-relaxed text-charcoal/90">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-14 border-t border-limestone/60 pt-8">
          <p className="font-body text-sm leading-relaxed text-stone">
            Precisa discutir como este tema se aplica ao seu negócio?
          </p>
          <div className="mt-5">
            <Button href={whatsappHref()} external>
              Fale com um especialista
            </Button>
          </div>
        </div>

        {others.length > 0 && (
          <div className="mt-20">
            <h2 className="font-display text-xl text-charcoal">Leia também</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {others.map((other) => (
                <Link
                  key={other.slug}
                  href={`/artigos/${other.slug}`}
                  className="group border-t border-moss/20 pt-4"
                >
                  <h3 className="font-display text-lg leading-snug text-charcoal group-hover:text-moss">
                    {other.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        )}
      </Container>
    </article>
  );
}
