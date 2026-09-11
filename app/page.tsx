import Hero from "@/components/sections/Hero";
import AboutPreview from "@/components/sections/AboutPreview";
import Differentiators from "@/components/sections/Differentiators";
import Testimonials from "@/components/sections/Testimonials";
import ArticlesPreview from "@/components/sections/ArticlesPreview";
import ContactCTA from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <Differentiators />
      <Testimonials />
      <ArticlesPreview />
      <ContactCTA />
    </>
  );
}
