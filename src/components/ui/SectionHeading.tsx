import AnimateInView from './AnimateInView';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
  as?: 'h1' | 'h2';
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className = '',
  as = 'h2',
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';
  const HeadingTag = as;

  return (
    <div className={`max-w-3xl ${alignClass} mb-16 md:mb-20 ${className}`}>
      {eyebrow && (
        <AnimateInView>
          <p className="text-gold font-sans text-xs sm:text-sm font-medium tracking-[0.3em] uppercase mb-4">
            {eyebrow}
          </p>
        </AnimateInView>
      )}
      <AnimateInView delay={0.1}>
        <HeadingTag className={`${as === 'h1' ? 'heading-xl' : 'heading-lg'} text-ivory mb-6`}>
          {title}
        </HeadingTag>
      </AnimateInView>
      {description && (
        <AnimateInView delay={0.2}>
          <p className="body-lg">{description}</p>
        </AnimateInView>
      )}
    </div>
  );
}
