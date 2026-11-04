import type { Metadata } from 'next';
import OffersContent from './OffersContent';

export const metadata: Metadata = {
  title: 'Offers',
  description:
    "Start your brand's cinematic journey with special launch packages for AI video advertising, premium websites, and festive campaigns.",
  openGraph: {
    title: 'EEYA CREATIVES | Offers',
    description:
      "Start your brand's cinematic journey with special launch packages for AI video advertising, premium websites, and festive campaigns.",
  },
  twitter: {
    title: 'EEYA CREATIVES | Offers',
    description:
      "Start your brand's cinematic journey with special launch packages for AI video advertising, premium websites, and festive campaigns.",
  },
};

export default function OffersPage() {
  return <OffersContent />;
}

