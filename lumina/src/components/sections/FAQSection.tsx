"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  faqs: FAQ[];
  className?: string;
}

export function FAQSection({
  title = "Frequently Asked Questions",
  subtitle,
  faqs,
  className,
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      className={cn("py-16 md:py-24 bg-ivory-dark", className)}
      aria-labelledby="faq-heading"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2
            id="faq-heading"
            className="font-heading text-3xl md:text-4xl font-bold text-charcoal mb-4"
          >
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-charcoal/70 leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-muted overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-saffron focus-visible:ring-inset"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-heading text-lg font-semibold text-charcoal pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={cn(
                    "w-5 h-5 text-saffron flex-shrink-0 transition-transform duration-200",
                    openIndex === index && "rotate-180"
                  )}
                />
              </button>
              <div
                id={`faq-answer-${index}`}
                className={cn(
                  "overflow-hidden transition-all duration-300",
                  openIndex === index ? "max-h-96" : "max-h-0"
                )}
              >
                <div className="px-6 pb-6">
                  <p className="text-charcoal/70 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
