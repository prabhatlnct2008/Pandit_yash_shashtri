import Link from "next/link";
import { Phone, MapPin, Mail } from "lucide-react";
import { SITE_CONFIG, NAV_LINKS, PUJA_SERVICES } from "@/lib/constants";
import { LOCATIONS } from "@/lib/locations";
import { getPhoneLink } from "@/lib/utils";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-ivory" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand & Contact */}
          <div className="lg:col-span-1">
            <h3 className="font-heading text-2xl font-bold text-gold mb-4">
              {SITE_CONFIG.name}
            </h3>
            <address className="not-italic text-ivory/80 space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                <p>
                  {SITE_CONFIG.temple.name}
                  <br />
                  {SITE_CONFIG.temple.address}
                  <br />
                  {SITE_CONFIG.temple.city} – {SITE_CONFIG.temple.postalCode}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <div>
                  <a
                    href={getPhoneLink(SITE_CONFIG.contact.primaryPhone)}
                    className="hover:text-gold transition-colors"
                  >
                    {SITE_CONFIG.contact.primaryPhone}
                  </a>
                  <span className="mx-2">|</span>
                  <a
                    href={getPhoneLink(SITE_CONFIG.contact.secondaryPhone)}
                    className="hover:text-gold transition-colors"
                  >
                    {SITE_CONFIG.contact.secondaryPhone}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="text-sm">Serving South Delhi & Gurgaon</span>
              </div>
            </address>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-gold mb-4">
              Quick Links
            </h4>
            <nav aria-label="Footer quick links">
              <ul className="space-y-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-ivory/80 hover:text-gold transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Puja Services */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-gold mb-4">
              Puja Services
            </h4>
            <nav aria-label="Footer puja services">
              <ul className="space-y-2">
                {PUJA_SERVICES.slice(0, 6).map((service) => (
                  <li key={service.id}>
                    <Link
                      href="/puja-services"
                      className="text-ivory/80 hover:text-gold transition-colors"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/puja-services"
                    className="text-gold hover:text-gold-light transition-colors font-medium"
                  >
                    View All Services →
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-gold mb-4">
              Service Areas
            </h4>
            <nav aria-label="Footer service areas">
              <ul className="space-y-2">
                {LOCATIONS.slice(0, 6).map((location) => (
                  <li key={location.slug}>
                    <Link
                      href={`/pandit/${location.slug}`}
                      className="text-ivory/80 hover:text-gold transition-colors"
                    >
                      Pandit in {location.name}
                    </Link>
                  </li>
                ))}
                {LOCATIONS.length > 6 && (
                  <li className="text-ivory/60 text-sm">
                    + {LOCATIONS.length - 6} more areas
                  </li>
                )}
              </ul>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-ivory/20">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-ivory/60 text-sm">
              © {currentYear} {SITE_CONFIG.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-sm text-ivory/60">
              <a
                href={SITE_CONFIG.googleBusinessProfile}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors"
              >
                Google Reviews
              </a>
              <span>•</span>
              <Link href="/contact" className="hover:text-gold transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
