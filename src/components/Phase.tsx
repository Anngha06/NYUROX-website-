'use client';
import AnimatedSection from './AnimatedSection';

export default function Phase() {
  return (
    <AnimatedSection>
      <div className="py-16 text-center">
        <p className="font-mono text-xs tracking-[0.14em] uppercase text-ny-gray mb-8">Current Phase</p>
        <div className="flex items-center justify-center flex-wrap gap-1 font-mono text-xs tracking-wider text-ny-gray">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-ny-gray opacity-60" />
            <span>Research</span>
          </span>
          <span className="w-8 h-px bg-ny-border mx-2" />
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-black animate-phase-pulse" />
            <span className="text-black font-semibold">Development & Validation</span>
          </span>
          <span className="w-8 h-px bg-ny-border mx-2" />
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-ny-border opacity-70" />
            <span>Clinical Deployment</span>
          </span>
        </div>
        <p className="text-sm text-gray-700 max-w-md mx-auto mt-4">
          Active validation studies focused on clinical alignment, scalability, and reproducibility.
        </p>
      </div>
    </AnimatedSection>
  );
}