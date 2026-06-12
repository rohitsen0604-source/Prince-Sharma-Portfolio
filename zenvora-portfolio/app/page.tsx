import { AboutHero } from "@/components/about/about-hero";
import { CompanyOverview } from "@/components/about/company-overview";
import { Challenges } from "@/components/about/challenges";
import { Solutions } from "@/components/about/solutions";
import { Leadership } from "@/components/about/leadership";
import { VisionMission } from "@/components/about/vision-mission";
import { AboutCTA } from "@/components/about/about-cta";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <CompanyOverview />
      <Challenges />
      <Solutions />
      <Leadership />
      <VisionMission />
      <AboutCTA />
    </>
  );
}