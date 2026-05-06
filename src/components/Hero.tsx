'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-eyebrow', { opacity: 0, y: 20, duration: 0.8, delay: 0.3 });
      gsap.from('.hero-title', { opacity: 0, y: 30, duration: 1, delay: 0.5, ease: 'power3.out' });
      gsap.from('.hero-subtitle', { opacity: 0, y: 20, duration: 0.8, delay: 1 });
      gsap.from('.hero-rule', { width: 0, duration: 0.8, delay: 1.2, ease: 'power2.inOut' });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative pt-32 pb-20 text-center overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Video background placeholder */}
      <div className="absolute inset-0 z-0 opacity-10">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="/video-placeholder.jpg"
        >
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="relative z-10">
        <p className="hero-eyebrow font-mono text-xs tracking-[0.18em] uppercase text-ny-gray mb-5">
          Physics-Based Neuro-Diagnostics
        </p>
        <h1 className="hero-title font-display text-5xl sm:text-7xl lg:text-8xl font-normal leading-none mb-2">
          Understanding the brain<br />
          <span className="italic relative">at the signal level</span>
        </h1>
        <p className="hero-subtitle max-w-xl mx-auto text-lg text-ny-gray mt-6">
          A physics-first framework designed to detect functional instability before structural changes appear.
        </p>
        <div className="hero-rule w-12 h-px bg-black mx-auto mt-8 opacity-30" />
      </div>
      {/* Neural ring decoration */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-72 h-72 opacity-5 pointer-events-none">
        <svg viewBox="0 0 280 280" fill="none">
          <circle cx="140" cy="140" r="135" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="140" cy="140" r="95" stroke="currentColor" strokeWidth="0.4" />
          <circle cx="140" cy="140" r="50" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="140" cy="5" r="2.5" fill="currentColor" />
          <circle cx="140" cy="275" r="2.5" fill="currentColor" />
          <circle cx="5" cy="140" r="2.5" fill="currentColor" />
          <circle cx="275" cy="140" r="2.5" fill="currentColor" />
        </svg>
      </div>
    </section>
  );
}