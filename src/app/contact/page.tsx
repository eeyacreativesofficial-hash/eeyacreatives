import type { Metadata } from 'next';
import ContactContent from './ContactContent';

export const metadata: Metadata = {
  title: 'Contact Us | EEYA CREATIVES',
  description:
    'Let’s build something remarkable. Reach out to EEYA CREATIVES for AI video advertisements, brand campaigns, and website development.',
};

export default function ContactPage() {
  return <ContactContent />;
}

