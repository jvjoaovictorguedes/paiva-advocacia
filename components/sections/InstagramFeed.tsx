import Script from "next/script";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function InstagramFeed() {
  return (
    <section className="bg-ivory py-20 md:py-28">
      <Container>
        <SectionHeading eyebrow="Instagram" title="Acompanhe no Instagram." align="center" />
        <div className="mt-14">
          <div
            className="elfsight-app-0e7b38d0-d456-4671-a350-a297435b9030"
            data-elfsight-app-lazy
          />
        </div>
      </Container>
      <Script id="elfsight-platform" src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" async />
    </section>
  );
}
