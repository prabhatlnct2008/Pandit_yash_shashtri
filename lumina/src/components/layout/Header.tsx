"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, Sparkles } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import { cn, getPhoneLink, getWhatsAppLink } from "@/lib/utils";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-ivory/95 backdrop-blur-sm border-b border-muted shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo / Brand */}
          <Link href="/" className="flex flex-col">
            <span className="font-heading text-xl md:text-2xl font-bold text-saffron">
              {SITE_CONFIG.name}
            </span>
            <span className="text-xs text-charcoal/60 hidden sm:block">
              Vedic guidance • Trusted locally • Personal consultation
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-charcoal hover:text-saffron transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <a
              href={getWhatsAppLink(
                SITE_CONFIG.contact.primaryPhone,
                "Hello, I would like to book a consultation with Pandit Ji."
              )}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-full font-medium hover:bg-accent-light transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Quick Consult</span>
            </a>
            <a
              href={getPhoneLink(SITE_CONFIG.contact.primaryPhone)}
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 border-2 border-saffron text-saffron rounded-full font-medium hover:bg-saffron hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 text-charcoal hover:text-saffron transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300",
            isMobileMenuOpen ? "max-h-96 pb-4" : "max-h-0"
          )}
        >
          <nav className="flex flex-col gap-2 pt-4" aria-label="Mobile navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-2 px-4 text-charcoal hover:text-saffron hover:bg-ivory-dark rounded-lg transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-4 border-t border-muted mt-2">
              <a
                href={getWhatsAppLink(
                  SITE_CONFIG.contact.primaryPhone,
                  "Hello, I would like to book a consultation with Pandit Ji."
                )}
                className="flex items-center justify-center gap-2 px-4 py-3 bg-accent text-white rounded-full font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Quick Consult</span>
              </a>
              <a
                href={getPhoneLink(SITE_CONFIG.contact.primaryPhone)}
                className="flex items-center justify-center gap-2 px-4 py-3 border-2 border-saffron text-saffron rounded-full font-medium"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
