import { notFound } from 'next/navigation';
import LabContent from './LabContent';

export const metadata = {
  title: 'Background System Lab | Dev Only',
};

export default function BackgroundLabPage() {
  if (process.env.NODE_ENV === 'production') {
    notFound();
  }

  return <LabContent />;
}

