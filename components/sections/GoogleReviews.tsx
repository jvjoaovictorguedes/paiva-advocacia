import Script from "next/script";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function GoogleReviews() {
  return (
    <section className="bg-ivory py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Avaliações"
          title="O que dizem sobre nós no Google."
          align="center"
        />
        <div className="mt-14">
          <div
            className="elfsight-app-fbc2283b-4f51-4736-b018-3a0f159f37d2"
            data-elfsight-app-lazy
          />
        </div>
      </Container>
      <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" async />
    </section>
  );
}
