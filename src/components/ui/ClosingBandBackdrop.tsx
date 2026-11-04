export default function ClosingBandBackdrop() {
  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden -z-10"
      aria-hidden="true"
    >
      {/* 1. Base gold-tint gradient from top-left */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(135deg, rgba(216, 177, 90, 0.09) 0%, rgba(216, 177, 90, 0) 48%)',
        }}
      />
      {/* 2. Soft gold center glow behind text */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] sm:w-[580px] h-[240px] sm:h-[340px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(216, 177, 90, 0.12) 0%, rgba(216, 177, 90, 0.03) 50%, transparent 75%)',
        }}
      />
    </div>
  );
}
