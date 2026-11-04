import Link from 'next/link';
import Icon from '@/components/ui/Icons';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center section-padding pt-32 pb-20 bg-[#080B12] text-center">
      <div className="max-w-md mx-auto">
        <span className="font-serif text-6xl md:text-8xl text-gold/30 block mb-4">
          404
        </span>
        <h1 className="heading-md text-ivory mb-4">Page Not Found</h1>
        <p className="body-md text-muted/70 mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link href="/" className="btn-primary min-h-[48px] px-8 text-xs tracking-widest uppercase font-semibold">
          <Icon name="arrowRight" size={16} className="rotate-180" />
          Return to Home
        </Link>
      </div>
    </div>
  );
}

