'use client';

import AnimateInView from '@/components/ui/AnimateInView';
import Icon from '@/components/ui/Icons';
import Section from '@/components/ui/Section';
import { contact } from '@/data/content';

export default function CTASection() {
  return (
    <Section
      variant="bloom"
      id="contact"
      className="py-24 sm:py-28 md:py-32 lg:py-36 border-t border-[#202B3B] scroll-mt-24"
      aria-label="Call to action"
    >
      <div className="site-container">
        <AnimateInView className="text-center max-w-3xl mx-auto">
        {/* Thin gold line above the heading (~60px wide, centered) */}
        <div className="w-[60px] h-[1px] bg-gold/70 mx-auto mb-6" aria-hidden="true" />

        <h2 className="heading-xl text-ivory mb-6">
          Let&apos;s Build Something Remarkable.
        </h2>
        <p className="body-lg mb-10 max-w-xl mx-auto text-muted/80">
          Ready to elevate your brand with cinematic visuals and a professional digital presence? Let&apos;s start the conversation.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-[420px] sm:max-w-none mx-auto">
          <a
            href={contact.whatsapp.url}
            target="_blank"
            rel="noopener noreferrer"
            data-wa-cta="true"
            className="btn-primary w-full sm:w-auto min-h-[52px] h-[52px] px-8 justify-center text-xs tracking-widest uppercase font-semibold"
          >
            <Icon name="whatsapp" size={18} />
            Chat on WhatsApp
          </a>
          <a
            href={contact.email.url}
            className="btn-outline w-full sm:w-auto min-h-[52px] h-[52px] px-8 justify-center text-xs tracking-widest uppercase font-semibold"
          >
            <Icon name="mail" size={18} />
            Send an Email
          </a>
        </div>
      </AnimateInView>
      </div>
    </Section>
  );
}
