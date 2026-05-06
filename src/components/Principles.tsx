'use client';
import AnimatedSection from './AnimatedSection';

const cards = [
  {
    num: '01',
    title: 'Physics‑Based Modeling',
    desc: 'Grounded in deterministic biophysics — every output traceable to signal dynamics.',
  },
  {
    num: '02',
    title: 'Signal‑Level Analysis',
    desc: 'Operating beneath conventional imaging resolution to detect subtle functional deviations.',
  },
  {
    num: '03',
    title: 'Explainable Outputs',
    desc: 'Clinically interpretable results — no blind trust in AI.',
  },
];

export default function Principles() {
  return (
    <AnimatedSection>
      <div className="py-16">
        <p className="font-mono text-xs tracking-[0.14em] uppercase text-ny-gray mb-8">Core Principles</p>
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((c, i) => (
            <div
              key={i}
              className="border-t border-ny-border pt-6 hover:border-black transition-all duration-300"
            >
              <div className="font-mono text-xs text-ny-gray mb-3">{c.num}</div>
              <h3 className="font-display text-xl font-normal mb-2">{c.title}</h3>
              <p className="text-sm text-gray-700">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}