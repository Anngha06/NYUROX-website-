'use client';
import AnimatedSection from './AnimatedSection';

export default function Shift() {
  return (
    <AnimatedSection>
      <div className="max-w-xl mx-auto py-16">
        <p className="font-mono text-xs tracking-[0.14em] uppercase text-ny-gray mb-4">The Shift</p>
        <p className="text-gray-800 leading-relaxed">
          Traditional neuroimaging waits for{' '}
          <span className="text-black font-semibold relative after:absolute after:bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-black/10">
            visible structural anomalies
          </span>{' '}
          — changes that surface only after significant progression. NYUROX analyzes{' '}
          <span className="text-black font-semibold relative after:absolute after:bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-black/10">
            functional signal patterns
          </span>{' '}
          through a physics-grounded lens, surfacing early indicators of neurological instability.
        </p>
        <p className="mt-4 text-gray-800 leading-relaxed">
          From <strong>reactive diagnosis</strong> to <strong>proactive risk prediction</strong> — explainable, deterministic, not black-box AI.
        </p>
      </div>
    </AnimatedSection>
  );
}