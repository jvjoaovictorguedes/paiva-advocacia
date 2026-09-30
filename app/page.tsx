import Hero from "@/components/sections/Hero";
import AboutPreview from "@/components/sections/AboutPreview";
import Differentiators from "@/components/sections/Differentiators";
import GoogleReviews from "@/components/sections/GoogleReviews";
import InstagramFeed from "@/components/sections/InstagramFeed";
import ArticlesPreview from "@/components/sections/ArticlesPreview";
import ContactCTA from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <Differentiators />
      <GoogleReviews />
      <InstagramFeed />
      <ArticlesPreview />
      <ContactCTA />
    </>
  );
}
