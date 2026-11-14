'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/Icons';
import PageHeroBanner from '@/components/ui/PageHeroBanner';
import Section from '@/components/ui/Section';
import SectionDivider from '@/components/ui/SectionDivider';
import {
  contact,
  serviceOptions,
  budgetOptions,
  buildWhatsAppLink,
  buildEmailAction,
  formatQuoteWhatsAppMessage,
} from '@/data/content';

const BUSINESS_SIZES = [
  'Solo / Creator',
  'Early-Stage Startup',
  'Growing Brand / SME',
  'Established Enterprise',
];

interface FormData {
  name: string;
  service: string;
  details: string;
  brand: string;
  size: string;
  budget: string;
  email: string;
  phone: string;
}

export default function ContactContent() {
  const [showOptional, setShowOptional] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    service: '',
    details: '',
    brand: '',
    size: '',
    budget: '',
    email: '',
    phone: '',
  });

  const [errors, setErrors] = useState<{ name?: string; service?: string }>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const errs: { name?: string; service?: string } = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = 'Please enter your name.';
    }
    if (!formData.service) {
      errs.service = 'Please choose what you need.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const message = formatQuoteWhatsAppMessage({
      name: formData.name.trim(),
      service: formData.service,
      details: formData.details.trim() || undefined,
      brand: formData.brand.trim() || undefined,
      size: formData.size || undefined,
      budget: formData.budget || undefined,
      email: formData.email.trim() || undefined,
      phone: formData.phone.trim() || undefined,
    });

    const url = buildWhatsAppLink(message);
    if (typeof window !== 'undefined') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const emailAction = buildEmailAction({
    to: contact.email.address,
    subject: `Enquiry from ${formData.name || 'Website Visitor'} — ${formData.service || 'Creative Project'}`,
    body: formatQuoteWhatsAppMessage({
      name: formData.name.trim() || 'Visitor',
      service: formData.service || 'General Enquiry',
      details: formData.details.trim() || undefined,
      brand: formData.brand.trim() || undefined,
      size: formData.size || undefined,
      budget: formData.budget || undefined,
      email: formData.email.trim() || undefined,
      phone: formData.phone.trim() || undefined,
    }),
  });

  return (
    <>
      {/* ── 1. Page Hero Banner ── */}
      <PageHeroBanner
        slug="contact"
        eyebrow="Get In Touch"
        title="Let's Build Something Remarkable."
        description="Whether you have a specific video ad brief, need a custom website, or simply want to explore creative possibilities, we are ready to assist you."
      >
        <div className="flex flex-col sm:flex-row items-center justify-start gap-3 w-full max-w-[420px] sm:max-w-none mt-6">
          <a
            href={contact.whatsapp.url}
            target="_blank"
            rel="noopener noreferrer"
            data-wa-cta="true"
            className="btn-primary w-full sm:w-auto min-h-[52px] h-[52px] px-6 inline-flex items-center justify-center gap-2 text-xs font-semibold tracking-wider uppercase"
          >
            <Icon name="whatsapp" size={18} />
            Chat on WhatsApp
          </a>
          <a
            href={contact.email.url}
            className="btn-outline w-full sm:w-auto min-h-[52px] h-[52px] px-6 inline-flex items-center justify-center gap-2 text-xs font-semibold tracking-wider uppercase"
          >
            <Icon name="mail" size={18} />
            Send Direct Email
          </a>
        </div>
      </PageHeroBanner>

      {/* ── 2. Direct Channels ── */}
      <Section
        variant="spotlight"
        className="py-14 sm:py-16 border-b border-[#202B3B]"
        aria-label="Direct Channels"
      >
        <div className="site-container">
          <div className="mb-10 text-left">
            <p className="text-gold font-sans text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase mb-2">
              Instant Connect
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl text-ivory">Quick Channels</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {/* WhatsApp */}
            <a
              href={contact.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              data-wa-cta="true"
              aria-label={`Chat on WhatsApp: ${contact.whatsapp.displayNumber}`}
              className="card-dark bg-[#111925] border border-[#202B3B] p-6 rounded-sm flex items-center justify-between gap-4 hover:border-[#26364F] transition-all duration-300 md:hover:-translate-y-1 md:hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-[#080B12] h-full group"
            >
              <div className="flex items-start gap-4 min-w-0">
                <div className="w-11 h-11 rounded-sm bg-gold/15 border border-gold/30 flex items-center justify-center flex-shrink-0 text-gold mt-0.5 group-hover:scale-105 transition-transform">
                  <Icon name="whatsapp" size={22} />
                </div>
                <div className="min-w-0">
                  <span className="text-xs font-sans uppercase tracking-widest text-gold/80 block mb-1">
                    Chat on WhatsApp
                  </span>
                  <span className="text-ivory font-medium text-base block group-hover:text-gold transition-colors">
                    {contact.whatsapp.displayNumber}
                  </span>
                  <span className="block text-xs text-[#A9A59A] mt-1">
                    Quick chat and project discussions
                  </span>
                </div>
              </div>
              <div className="text-gold/60 group-hover:text-gold group-hover:translate-x-1 transition-all shrink-0">
                <Icon name="arrowRight" size={18} />
              </div>
            </a>

            {/* Email */}
            <a
              href={emailAction.gmailWebUrl}
              onClick={emailAction.handleEmailClick}
              aria-label="Email us: eeyacreatives.official@gmail.com"
              className="card-dark bg-[#111925] border border-[#202B3B] p-6 rounded-sm flex items-center justify-between gap-4 hover:border-[#26364F] transition-all duration-300 md:hover:-translate-y-1 md:hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-[#080B12] h-full group"
            >
              <div className="flex items-start gap-4 min-w-0">
                <div className="w-11 h-11 rounded-sm bg-gold/15 border border-gold/30 flex items-center justify-center flex-shrink-0 text-gold mt-0.5 group-hover:scale-105 transition-transform">
                  <Icon name="mail" size={22} />
                </div>
                <div className="min-w-0">
                  <span className="text-xs font-sans uppercase tracking-widest text-gold/80 block mb-1">
                    Email us
                  </span>
                  <span className="text-ivory font-medium text-base block group-hover:text-gold transition-colors break-all">
                    eeyacreatives.official@gmail.com
                  </span>
                  <span className="block text-xs text-[#A9A59A] mt-1">
                    Detailed briefs and enquiries
                  </span>
                </div>
              </div>
              <div className="text-gold/60 group-hover:text-gold group-hover:translate-x-1 transition-all shrink-0">
                <Icon name="arrowRight" size={18} />
              </div>
            </a>

            {/* Call */}
            <div
              className="card-dark bg-[#111925] border border-[#202B3B] p-6 rounded-sm flex items-center justify-between gap-4 hover:border-[#26364F] transition-all duration-300 md:hover:-translate-y-1 md:hover:shadow-lg h-full group"
            >
              <div className="flex items-start gap-4 min-w-0 w-full">
                <div className="w-11 h-11 rounded-sm bg-gold/15 border border-gold/30 flex items-center justify-center flex-shrink-0 text-gold mt-0.5 group-hover:scale-105 transition-transform">
                  <Icon name="phone" size={22} />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-xs font-sans uppercase tracking-widest text-gold/80 block mb-1">
                    Call us
                  </span>
                  <div className="flex flex-col space-y-0.5">
                    {contact.callNumbers.map((num) => (
                      <a
                        key={num.tel}
                        href={`tel:${num.tel}`}
                        aria-label={`Call us: ${num.display}`}
                        className="min-h-[44px] flex items-center text-ivory font-medium text-base hover:text-gold transition-colors"
                      >
                        {num.display}
                      </a>
                    ))}
                  </div>
                  <span className="block text-xs text-[#A9A59A] mt-1">
                    Tap a number to call
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── 3. Form & Side Panel ── */}
      <Section
        variant="base"
        className="py-16 md:py-24"
        aria-label="Project Brief Form"
      >
        <div className="site-container grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 relative z-10">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl text-ivory mb-4">Start Your Project</h2>
              <p className="font-sans text-base text-[#CFCBC1] mb-6 leading-relaxed">
                Whether you need a cinematic AI advertising campaign, a refined custom website, or both designed together, share your vision with us.
              </p>
            </div>

            <div className="space-y-4">
              <div className="card-dark bg-[#111925] border border-[#202B3B] p-5 rounded-sm">
                <h3 className="font-serif text-lg text-ivory mb-1">Direct Creative Direction</h3>
                <p className="text-sm text-[#A9A59A] leading-relaxed">
                  Work directly with our creative team with clear communication from concept to final delivery.
                </p>
              </div>

              <div className="card-dark bg-[#111925] border border-[#202B3B] p-5 rounded-sm">
                <h3 className="font-serif text-lg text-ivory mb-1">Instant WhatsApp or Gmail Delivery</h3>
                <p className="text-sm text-[#A9A59A] leading-relaxed">
                  Submitting formats your brief cleanly so you can send it via WhatsApp or Gmail instantly.
                </p>
              </div>

              <div className="card-dark bg-[#111925] border border-[#202B3B] p-5 rounded-sm">
                <h3 className="font-serif text-lg text-ivory mb-1">Confidential &amp; Tailored</h3>
                <p className="text-sm text-[#A9A59A] leading-relaxed">
                  All discussions, brand assets, and project details are kept completely private.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="card-dark bg-[#111925] border border-[#202B3B] p-6 sm:p-10 rounded-sm shadow-2xl">
              <h3 className="font-serif text-2xl text-ivory mb-2">Project Brief</h3>
              <p className="font-sans text-sm text-[#A9A59A] mb-8">
                Fill in your project details. You can send it directly to our studio via WhatsApp or Gmail.
              </p>

              <form onSubmit={handleWhatsAppSubmit} noValidate className="space-y-6">
                {/* 1. Name * */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-sans uppercase tracking-wider text-ivory/80 mb-2"
                  >
                    Name <span className="text-gold">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Eeya"
                    className={`w-full h-12 min-h-[48px] px-4 bg-[#0A0E17] border rounded-sm text-base text-ivory placeholder-[#8E8A80] focus:outline-none transition-colors ${
                      errors.name ? 'border-red-500 focus:border-red-500' : 'border-[#202B3B] focus:border-gold'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                      <Icon name="alertCircle" size={12} />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* 2. What do you need? * */}
                <div>
                  <label
                    htmlFor="service"
                    className="block text-xs font-sans uppercase tracking-wider text-ivory/80 mb-2"
                  >
                    What do you need? <span className="text-gold">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={`w-full h-12 min-h-[48px] px-4 bg-[#0A0E17] border rounded-sm text-base text-ivory focus:outline-none transition-colors ${
                      errors.service ? 'border-red-500 focus:border-red-500' : 'border-[#202B3B] focus:border-gold'
                    }`}
                  >
                    <option value="" className="bg-[#0A0E17] text-[#8E8A80]">
                      Select service needed...
                    </option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-[#0A0E17] text-ivory">
                        {opt}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                      <Icon name="alertCircle" size={12} />
                      {errors.service}
                    </p>
                  )}
                </div>

                {/* 3. Project Details */}
                <div>
                  <label
                    htmlFor="details"
                    className="block text-xs font-sans uppercase tracking-wider text-ivory/80 mb-2"
                  >
                    Project details <span className="text-[#8E8A80]">(Optional)</span>
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    rows={4}
                    value={formData.details}
                    onChange={handleChange}
                    placeholder="Tell us about your brand, what you are looking to create, timeline, and goals..."
                    className="w-full min-h-[110px] p-4 bg-[#0A0E17] border border-[#202B3B] rounded-sm text-base text-ivory placeholder-[#8E8A80] focus:outline-none focus:border-gold transition-colors resize-y"
                  />
                </div>

                {/* 4. Collapsible Toggle: Add more details (optional) */}
                <div className="pt-2 border-t border-[#202B3B]">
                  <button
                    type="button"
                    onClick={() => setShowOptional(!showOptional)}
                    className="text-xs font-sans uppercase tracking-wider text-gold hover:text-gold-light flex items-center gap-2 py-2 focus:outline-none"
                    aria-expanded={showOptional}
                  >
                    <span className="text-base font-bold">{showOptional ? '−' : '+'}</span>
                    {showOptional ? 'Hide extra details' : 'Add more details (optional)'}
                  </button>

                  {showOptional && (
                    <div className="space-y-5 pt-4">
                      {/* Brand & Business Size */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label
                            htmlFor="brand"
                            className="block text-xs font-sans uppercase tracking-wider text-ivory/80 mb-2"
                          >
                            Brand
                          </label>
                          <input
                            type="text"
                            id="brand"
                            name="brand"
                            value={formData.brand}
                            onChange={handleChange}
                            placeholder="e.g. Brand Name"
                            className="w-full h-12 min-h-[48px] px-4 bg-[#0A0E17] border border-[#202B3B] rounded-sm text-base text-ivory placeholder-[#8E8A80] focus:outline-none focus:border-gold transition-colors"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="size"
                            className="block text-xs font-sans uppercase tracking-wider text-ivory/80 mb-2"
                          >
                            Business size
                          </label>
                          <select
                            id="size"
                            name="size"
                            value={formData.size}
                            onChange={handleChange}
                            className="w-full h-12 min-h-[48px] px-4 bg-[#0A0E17] border border-[#202B3B] rounded-sm text-base text-ivory focus:outline-none focus:border-gold transition-colors"
                          >
                            <option value="" className="bg-[#0A0E17] text-[#8E8A80]">
                              Select size...
                            </option>
                            {BUSINESS_SIZES.map((s) => (
                              <option key={s} value={s} className="bg-[#0A0E17] text-ivory">
                                {s}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Budget Range */}
                      <div>
                        <label
                          htmlFor="budget"
                          className="block text-xs font-sans uppercase tracking-wider text-ivory/80 mb-2"
                        >
                          Budget
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full h-12 min-h-[48px] px-4 bg-[#0A0E17] border border-[#202B3B] rounded-sm text-base text-ivory focus:outline-none focus:border-gold transition-colors"
                        >
                          <option value="" className="bg-[#0A0E17] text-[#8E8A80]">
                            Select budget range...
                          </option>
                          {budgetOptions.map((b) => (
                            <option key={b} value={b} className="bg-[#0A0E17] text-ivory">
                              {b}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Email & Phone */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-xs font-sans uppercase tracking-wider text-ivory/80 mb-2"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="you@example.com"
                            className="w-full h-12 min-h-[48px] px-4 bg-[#0A0E17] border border-[#202B3B] rounded-sm text-base text-ivory placeholder-[#8E8A80] focus:outline-none focus:border-gold transition-colors"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-xs font-sans uppercase tracking-wider text-ivory/80 mb-2"
                          >
                            Phone
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+91 XXXXX XXXXX"
                            className="w-full h-12 min-h-[48px] px-4 bg-[#0A0E17] border border-[#202B3B] rounded-sm text-base text-ivory placeholder-[#8E8A80] focus:outline-none focus:border-gold transition-colors"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* 5. Buttons: Send on WhatsApp & Send via Gmail */}
                <div className="flex flex-col sm:flex-row items-stretch gap-4 pt-4">
                  <button
                    type="submit"
                    className="btn-primary flex-1 min-h-[48px] h-12 justify-center text-xs font-bold tracking-widest uppercase gap-2"
                  >
                    <Icon name="whatsapp" size={18} />
                    Send on WhatsApp
                  </button>

                  <button
                    type="button"
                    onClick={(e) => {
                      if (!validate()) return;
                      emailAction.handleEmailClick(e);
                    }}
                    className="btn-outline flex-1 min-h-[48px] h-12 justify-center text-xs font-bold tracking-widest uppercase gap-2"
                  >
                    <Icon name="mail" size={18} />
                    Prefer email? Send via Gmail
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Section>

      <SectionDivider />

      {/* ── 4. Frequently Asked Questions ── */}
      <Section
        variant="base"
        dots
        className="py-16 md:py-24 border-t border-[#202B3B]"
        aria-label="Frequently Asked Questions"
      >
        <div className="site-container relative z-10">
          <div className="text-left mb-12">
            <p className="text-gold font-sans text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase mb-3">
              Common Questions
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-ivory">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4 max-w-3xl">
            <div className="card-dark bg-[#111925] border border-[#202B3B] p-6 rounded-sm">
              <h3 className="font-serif text-xl text-ivory mb-2">How do we get started?</h3>
              <p className="font-sans text-base text-[#CFCBC1] leading-relaxed">
                Reach out directly via WhatsApp, email, or fill out the project brief form above. We will discuss your goals, creative vision, and recommend the best format for your brand.
              </p>
            </div>

            <div className="card-dark bg-[#111925] border border-[#202B3B] p-6 rounded-sm">
              <h3 className="font-serif text-xl text-ivory mb-2">Can we combine website development with a video advertisement?</h3>
              <p className="font-sans text-base text-[#CFCBC1] leading-relaxed">
                Yes. We offer combined packages so that your website design, brand messaging, and cinematic video advertisement share a cohesive visual identity and story.
              </p>
            </div>

            <div className="card-dark bg-[#111925] border border-[#202B3B] p-6 rounded-sm">
              <h3 className="font-serif text-xl text-ivory mb-2">What platforms are your video ads designed for?</h3>
              <p className="font-sans text-base text-[#CFCBC1] leading-relaxed">
                Our cinematic AI video ads are delivered in high resolution and formatted for Instagram Reels, YouTube, WhatsApp marketing, and embedded website hero sections.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <SectionDivider />

      {/* ── 5. Closing Section into Footer (bottom padding >= 96px) ── */}
      <Section
        variant="midnight"
        className="pt-16 pb-24 md:pt-20 md:pb-28 border-t border-[#202B3B] text-center"
        aria-label="Closing Note"
      >
        <div className="site-container relative z-10 flex flex-col items-center">
          <div className="w-16 h-[1px] bg-gold/70 mb-6" aria-hidden="true" />
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ivory mb-4 tracking-tight">
            Make Your Brand Impossible to Ignore.
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#CFCBC1] max-w-xl mx-auto mb-8 leading-relaxed">
            Connect with us today and let us bring cinematic visuals and refined digital presence to your brand.
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
              Send Direct Email
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
