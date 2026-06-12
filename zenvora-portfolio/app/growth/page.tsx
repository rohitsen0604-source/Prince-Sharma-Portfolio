import { GrowthHero } from "@/components/growth/growth-hero";
import { MarketOpportunity } from "@/components/growth/market-opportunity";
import { BusinessModel } from "@/components/growth/business-model";
import { Achievements } from "@/components/growth/achievements";
import { Roadmap } from "@/components/growth/roadmap";
import { Investment } from "@/components/growth/investment";
import { GrowthCTA } from "@/components/growth/growth-cta";

export default function GrowthPage() {
  return (
    <>
      <GrowthHero />
      <MarketOpportunity />
      <BusinessModel />
      <Achievements />
      <Roadmap />
      <Investment />
      <GrowthCTA />
    </>
  );
}