import { ServicesHero } from "@/components/services/services-hero";
import { TechnologyServices } from "@/components/services/technology-services";
import { BusinessServices } from "@/components/services/business-services";
import { MarketingServices } from "@/components/services/marketing-services";
import { Process } from "@/components/services/process";
import { ServicesCTA } from "@/components/services/services-cta";

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <TechnologyServices />
      <BusinessServices />
      <MarketingServices />
      <Process />
      <ServicesCTA />
    </>
  );
}