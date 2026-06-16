import Link from "next/link";

import {
  Mail,
  Phone,
} from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Growth", href: "/growth" },
  { label: "Contact", href: "/contact" },
];

const services = [
  {
    label: "Web Development",
    href: "/services/website-development",
  },
  {
    label: "Mobile Development",
    href: "/services/mobile-app-development",
  },
  {
    label: "Recruitment",
    href: "/services/recruitment",
  },
  {
    label: "Digital Marketing",
    href: "/services/digital-marketing",
  },
  {
    label: "AI Solutions",
    href: "/services/ai-solutions",
  },
];

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">

      <div className="container mx-auto px-6 py-16">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Company */}
          <div>

            <h3 className="text-2xl font-bold">
              ZENVORA
            </h3>

            <p className="mt-4 leading-7 text-muted-foreground">
              Empowering Businesses Through
              Technology & Innovation.
            </p>

          </div>

          {/* Quick Links */}
          <div>

            <h4 className="mb-4 text-lg font-semibold">
              Quick Links
            </h4>

            <ul className="space-y-3">

              {quickLinks.map((link) => (
                <li key={link.href}>

                  <Link
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>

                </li>
              ))}

            </ul>

          </div>

          {/* Services */}
          <div>

            <h4 className="mb-4 text-lg font-semibold">
              Services
            </h4>

            <ul className="space-y-3">

              {services.map((service) => (
                <li key={service.href}>

                  <Link
                    href={service.href}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {service.label}
                  </Link>

                </li>
              ))}

            </ul>

          </div>

          {/* Contact */}
          <div>

            <h4 className="mb-4 text-lg font-semibold">
              Contact
            </h4>

            <div className="space-y-4">

              <a
                href="tel:+919755125038"
                className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Phone className="h-4 w-4" />

                +91 9755125038
              </a>

              <a
                href="mailto:ps2855074@gmail.com"
                className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="h-4 w-4" />

                ps2855074@gmail.com
              </a>

            </div>

          </div>

        </div>

        <div className="mt-16 border-t pt-8 text-center text-sm text-muted-foreground">

          © {new Date().getFullYear()} Zenvora Technologies.
          All rights reserved.

        </div>

      </div>

    </footer>
  );
}