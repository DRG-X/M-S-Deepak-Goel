import type { Metadata } from "next";
import HomeHero from "@/components/sections/HomeHero";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ServicesOverview from "@/components/sections/ServicesOverview";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import StatsSection from "@/components/sections/StatsSection";
import ProcessSummary from "@/components/sections/ProcessSummary";
import TestimonialsCarousel from "@/components/sections/TestimonialsCarousel";
import BrandCarousel from "@/components/sections/BrandCarousel";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "M/S Deepak Goel | Premier Construction Company in Kanpur, UP",
  description:
    "M/S Deepak Goel is Kanpur's most trusted construction company with 20+ years of experience in residential, commercial, turnkey, and renovation projects across Uttar Pradesh.",
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <StatsSection />
      <WhyChooseUs />
      <ServicesOverview />
      <FeaturedProjects />
      <ProcessSummary />
      <TestimonialsCarousel />
      <BrandCarousel />
      <CTASection />
    </>
  );
}
