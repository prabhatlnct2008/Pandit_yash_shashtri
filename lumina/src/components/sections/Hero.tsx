"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Phone, Volume2, VolumeX } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";
import { SITE_CONFIG } from "@/lib/constants";
import { getPhoneLink, getWhatsAppLink } from "@/lib/utils";
import { WA_TEMPLATES } from "@/lib/whatsappTemplates";

const HERO_POSTER = "/images/havan-kund-flame-home-puja-south-delhi.jpg";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.pause();
    }
  }, []);

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  return (
    <section className="relative overflow-hidden">
      {/* Background video with poster fallback and maroon scrim */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src={HERO_POSTER}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover motion-reduce:hidden"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={HERO_POSTER}
        >
          <source src="/videos/havan-flame-loop.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-saffron-dark/95 via-saffron/65 to-charcoal/35" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl">
          {/* Kicker */}
          <p className="text-gold-light font-medium text-sm md:text-base tracking-wide mb-5 animate-fade-in">
            🟢 Available across South Delhi &amp; Gurgaon · Home · Society ·
            Office · Temple · Google-rated
          </p>

          {/* Headline */}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-ivory leading-tight mb-6 animate-fade-in">
            Get your puja done by a Pandit jee who becomes your family&rsquo;s
            own.
          </h1>

          {/* Subhead */}
          <p className="text-lg md:text-xl text-ivory/90 leading-relaxed mb-4 max-w-2xl">
            For your home&rsquo;s important moments, you don&rsquo;t want a new
            face every time. You want one Pandit jee — who knows your family,
            does every vidhi properly, and is there for the next puja too.
          </p>
          <p className="text-lg md:text-xl text-ivory/90 leading-relaxed mb-10 max-w-2xl">
            I am Pandit Yash Shastri. Tell me the puja and the date. I&rsquo;ll
            share an auspicious muhurat and a clear price, and we begin.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <LinkButton
              href={getWhatsAppLink(
                SITE_CONFIG.contact.primaryPhone,
                WA_TEMPLATES.general()
              )}
              variant="brass"
              size="lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book on WhatsApp
            </LinkButton>
            <LinkButton
              href={getPhoneLink(SITE_CONFIG.contact.primaryPhone)}
              variant="outline"
              size="lg"
              className="border-ivory text-ivory hover:bg-ivory hover:text-saffron"
            >
              <Phone className="w-5 h-5" />
              Call: {SITE_CONFIG.contact.primaryPhone}
            </LinkButton>
          </div>
        </div>
      </div>

      {/* Unmute toggle */}
      <button
        type="button"
        onClick={toggleMute}
        className="absolute bottom-4 right-4 z-10 p-2.5 rounded-full bg-charcoal/50 text-ivory hover:bg-charcoal/70 transition-colors motion-reduce:hidden"
        aria-label={isMuted ? "Unmute background video" : "Mute background video"}
      >
        {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
      </button>
    </section>
  );
}
