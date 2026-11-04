export default function SectionDivider({ className = '' }: { className?: string }) {
  return (
    <div
      className={`py-8 sm:py-12 flex items-center justify-center pointer-events-none relative z-10 ${className}`}
      aria-hidden="true"
    >
      <div className="section-divider" />
    </div>
  );
}

