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
    <section className="relative overflow-hidden min-h-[78vh] md:min-h-[85vh] flex">
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
        <div className="absolute inset-0 bg-gradient-to-t from-saffron-dark/95 via-saffron/55 to-charcoal/25" />
      </div>

      {/* Content anchored to the lower-left third, over the darkest part of the scrim */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pt-28 pb-16 md:pb-24">
        <div className="max-w-2xl">
          {/* Kicker */}
          <p className="text-gold-light font-medium text-sm md:text-base tracking-wide mb-4 animate-fade-in">
            🟢 Available across South Delhi &amp; Gurgaon · Home · Society ·
            Office · Temple · Google-rated
          </p>

          {/* Bilingual headline: Hindi main line, English smaller below */}
          <h1 className="font-heading font-bold text-ivory leading-tight mb-8 animate-fade-in">
            <span lang="hi" className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              आपके परिवार के अपने पंडित जी
            </span>
            <span className="block mt-3 text-base sm:text-lg md:text-xl font-medium text-ivory/85 font-body">
              Your family&rsquo;s own Pandit jee — for this puja, and every one
              after.
            </span>
          </h1>

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
