'use client';

import React from 'react';
import Link from 'next/link';
import Logo from '@/components/ui/Logo';
import Icon from '@/components/ui/Icons';
import SocialIcons from '@/components/ui/SocialIcons';
import { brand, footer, contact, buildEmailAction } from '@/data/content';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const emailAction = buildEmailAction({
    to: contact.email.address,
    subject: 'Enquiry from the EEYA CREATIVES website',
    body: "Hello EEYA CREATIVES,\n\nI'd like to know more about your services.\n\nThank you.",
  });

  return (
    <footer
      className="s-midnight border-t border-[#202B3B]"
      style={{
        paddingBottom: 'env(safe-area-inset-bottom, 0px)',
      }}
      role="contentinfo"
    >
      <div className="relative z-[1] site-container pt-12 pb-24 md:pt-20 md:pb-28">
        {/* Main Desktop Grid: minmax(340px, 1.5fr) minmax(120px, 0.7fr) minmax(230px, 1fr) minmax(300px, 1.3fr), column-gap: clamp(32px, 3.4vw, 56px), align-items: start */}
        <div
          className="hidden lg:grid items-start mb-16"
          style={{
            gridTemplateColumns:
              'minmax(340px, 1.5fr) minmax(120px, 0.7fr) minmax(230px, 1fr) minmax(300px, 1.3fr)',
            columnGap: 'clamp(32px, 3.4vw, 56px)',
          }}
        >
          {/* Col 1: Brand Column */}
          <div className="flex flex-col items-start">
            <Logo variant="footer" className="mb-4" />
            <p className="text-xs text-gold/80 font-sans tracking-[0.2em] uppercase mb-3">
              {brand.tagline}
            </p>
            <p className="body-md text-[#A9A59A] max-w-xs leading-relaxed">
              {footer.description}
            </p>
          </div>

          {/* Col 2: Quick Links (6 rows, 44px min row height, padding-block: 10px, line-height: 1.4) */}
          <div className="flex flex-col items-start">
            <h3 className="font-sans text-sm font-semibold text-ivory tracking-wider uppercase mb-3 h-[44px] flex items-center whitespace-nowrap">
              Quick Links
            </h3>
            <ul className="flex flex-col w-full">
              {footer.quickLinks.map((link) => (
                <li key={link.href} className="min-h-[44px] py-[10px] flex items-center leading-[1.4] whitespace-nowrap">
                  <Link
                    href={link.href}
                    className="body-md text-[#CFCBC1] hover:text-gold transition-colors duration-300 inline-flex items-center whitespace-nowrap"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services (6 rows, identical 44px min row height, padding-block: 10px, line-height: 1.4) */}
          <div className="flex flex-col items-start">
            <h3 className="font-sans text-sm font-semibold text-ivory tracking-wider uppercase mb-3 h-[44px] flex items-center whitespace-nowrap">
              Services
            </h3>
            <ul className="flex flex-col w-full">
              {footer.serviceLinks.map((link) => (
                <li key={link.href} className="min-h-[44px] py-[10px] flex items-center leading-[1.4] whitespace-nowrap">
                  <Link
                    href={link.href}
                    className="body-md text-[#CFCBC1] hover:text-gold transition-colors duration-300 inline-flex items-center whitespace-nowrap"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Get in Touch (three items: WhatsApp, Email, Call, 20px gap, no copy button) */}
          <div className="flex flex-col items-start min-w-0">
            <h3 className="font-sans text-sm font-semibold text-ivory tracking-wider uppercase mb-3 h-[44px] flex items-center whitespace-nowrap">
              Get in Touch
            </h3>
            <div className="flex flex-col w-full space-y-5">
              {/* WhatsApp */}
              <a
                href={contact.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 min-w-0"
              >
                <Icon name="whatsapp" size={20} className="text-gold shrink-0 mt-0.5" />
                <div className="flex flex-col min-w-0">
                  <span className="text-[11px] font-sans font-semibold tracking-wider uppercase text-gold">
                    WhatsApp
                  </span>
                  <span className="text-[15px] xl:text-[16px] text-[#CFCBC1] font-sans whitespace-nowrap group-hover:text-gold transition-colors">
                    {contact.phone.display}
                  </span>
                </div>
              </a>

              {/* Email (single link using buildEmailAction) */}
              <a
                href={emailAction.gmailWebUrl}
                onClick={emailAction.handleEmailClick}
                className="group flex items-start gap-3 min-w-0"
                aria-label={`Send email to ${contact.email.address}`}
              >
                <Icon name="mail" size={20} className="text-gold shrink-0 mt-0.5" />
                <div className="flex flex-col min-w-0">
                  <span className="text-[11px] font-sans font-semibold tracking-wider uppercase text-gold">
                    Email
                  </span>
                  <span className="text-[15px] xl:text-[16px] text-[#CFCBC1] font-sans whitespace-nowrap group-hover:text-gold transition-colors">
                    {contact.email.address}
                  </span>
                </div>
              </a>

              {/* Call */}
              <a
                href={contact.phone.url}
                className="group flex items-start gap-3 min-w-0"
              >
                <Icon name="phone" size={20} className="text-gold shrink-0 mt-0.5" />
                <div className="flex flex-col min-w-0">
                  <span className="text-[11px] font-sans font-semibold tracking-wider uppercase text-gold">
                    Call
                  </span>
                  <span className="text-[15px] xl:text-[16px] text-[#CFCBC1] font-sans whitespace-nowrap group-hover:text-gold transition-colors">
                    {contact.phone.display}
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Mobile / Tablet (< 1024px): Single column stacked layout */}
        <div className="lg:hidden flex flex-col gap-10 mb-12">
          {/* Brand lockup & description */}
          <div className="flex flex-col items-start">
            <Logo variant="footer" className="mb-4" />
            <p className="text-xs text-gold/80 font-sans tracking-[0.2em] uppercase mb-2">
              {brand.tagline}
            </p>
            <p className="body-md text-[#A9A59A] max-w-sm leading-relaxed">
              {footer.description}
            </p>
          </div>

          {/* Quick Links & Services side-by-side */}
          <div className="grid grid-cols-2 gap-6 sm:gap-10">
            <div>
              <h3 className="font-sans text-xs font-semibold text-ivory tracking-wider uppercase mb-3">
                Quick Links
              </h3>
              <ul className="flex flex-col space-y-2">
                {footer.quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#CFCBC1] hover:text-gold transition-colors py-1 inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-sans text-xs font-semibold text-ivory tracking-wider uppercase mb-3">
                Services
              </h3>
              <ul className="flex flex-col space-y-2">
                {footer.serviceLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#CFCBC1] hover:text-gold transition-colors py-1 inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Get in Touch */}
          <div>
            <h3 className="font-sans text-xs font-semibold text-ivory tracking-wider uppercase mb-3">
              Get in Touch
            </h3>
            <div className="flex flex-col space-y-4">
              <a
                href={contact.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-[#CFCBC1] hover:text-gold transition-colors"
              >
                <Icon name="whatsapp" size={18} className="text-gold shrink-0" />
                <span>{contact.phone.display}</span>
              </a>
              <a
                href={emailAction.gmailWebUrl}
                onClick={emailAction.handleEmailClick}
                className="flex items-center gap-3 text-sm text-[#CFCBC1] hover:text-gold transition-colors"
              >
                <Icon name="mail" size={18} className="text-gold shrink-0" />
                <span className="break-all">{contact.email.address}</span>
              </a>
              <a
                href={contact.phone.url}
                className="flex items-center gap-3 text-sm text-[#CFCBC1] hover:text-gold transition-colors"
              >
                <Icon name="phone" size={18} className="text-gold shrink-0" />
                <span>{contact.phone.display}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: hairline divider, then one row: copyright left (13px, #A9A59A), social icons right (40px circles) */}
        <div className="border-t border-[#202B3B] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[13px] text-[#A9A59A] font-sans tracking-wide text-center sm:text-left order-2 sm:order-1">
            © {currentYear} {brand.name}. All rights reserved.
          </p>
          <div className="order-1 sm:order-2">
            <SocialIcons />
          </div>
        </div>
      </div>
    </footer>
  );
}
