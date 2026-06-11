import { MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { getWhatsAppLink } from "@/lib/utils";
import { WA_TEMPLATES } from "@/lib/whatsappTemplates";

export function FloatingWhatsApp() {
  return (
    <a
      href={getWhatsAppLink(
        SITE_CONFIG.contact.primaryPhone,
        WA_TEMPLATES.general()
      )}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Book on WhatsApp"
      className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-50 w-14 h-14 rounded-full bg-accent text-white shadow-lg flex items-center justify-center hover:bg-accent-light transition-colors animate-pulse-gentle print:hidden"
    >
      <MessageCircle className="w-7 h-7" aria-hidden="true" />
    </a>
  );
}
