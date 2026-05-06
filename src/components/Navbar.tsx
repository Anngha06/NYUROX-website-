'use client';
import { useEffect, useState } from 'react';
import gsap from 'gsap';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    gsap.fromTo('.nav-logo', { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.8, ease: 'power2.out' });
    gsap.fromTo('.nav-link', { opacity: 0, y: -5, stagger: 0.1 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' });
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/90 backdrop-blur-md border-b border-ny-border' : 'bg-transparent'
      }`}
    >
      <div className="max-w-4xl mx-auto flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        <a href="#" className="nav-logo flex items-center gap-2 text-black no-underline">
          <span className="w-2 h-2 rounded-full bg-black animate-dot-pulse" />
          <span className="font-display text-xl tracking-wider">NYUROX<span className="text-xs align-super text-gray-500">™</span></span>
        </a>
        <div className="flex gap-8">
          <a href="#about" className="nav-link font-mono text-xs uppercase tracking-widest text-gray-800 hover:text-black relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-black after:transition-all hover:after:w-full">
            About
          </a>
          <a href="#contact" className="nav-link font-mono text-xs uppercase tracking-widest text-gray-800 hover:text-black relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-black after:transition-all hover:after:w-full">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}