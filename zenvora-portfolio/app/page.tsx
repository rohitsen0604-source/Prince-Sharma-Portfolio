import { Hero } from "@/components/home/hero";
import { AboutPreview } from "@/components/home/about-preview";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { Solutions } from "@/components/home/solutions";
import { ServicesPreview } from "@/components/home/services-preview";
import { WorkPreview } from "@/components/home/work-preview";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <WhyChooseUs />
      <Solutions />
      <ServicesPreview />
      <WorkPreview />
    </>
  );
}