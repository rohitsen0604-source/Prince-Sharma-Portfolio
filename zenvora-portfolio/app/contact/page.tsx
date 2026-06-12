import { ContactHero } from "@/components/contact/contact-hero";
import { ContactInfo } from "@/components/contact/contact-info";
import { ContactForm } from "@/components/contact/contact-form";
import { WhyConnect } from "@/components/contact/why-connect";
import { ContactCTA } from "@/components/contact/contact-cta";

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <WhyConnect />
      <ContactCTA />
    </>
  );
}