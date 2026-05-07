'use client';
import { useState, useRef, useEffect } from 'react';
import AnimatedSection from './AnimatedSection';
import gsap from 'gsap';

export default function AboutContact() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const formData = new FormData(e.target as HTMLFormElement);

    try {
      const response = await fetch('https://formspree.io/f/xgodypoy', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setSubmitted(true);
        (e.target as HTMLFormElement).reset();
      } else {
        const data = await response.json();
        setError(data.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (submitted) {
      gsap.fromTo('.form-success', { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.5 });
    }
  }, [submitted]);

  return (
    <>
      <div id="about">
        <AnimatedSection>
          <div className="py-16 max-w-2xl mx-auto">
            <p className="font-mono text-xs tracking-[0.14em] uppercase text-ny-gray mb-4">About NYUROX</p>
            <h2 className="font-display text-3xl font-normal mb-4">Building NYUROX<span className="text-sm align-super text-gray-500">™</span></h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              A physics-first neuro-diagnostics system detecting functional instability before structural damage appears. Currently in research & validation, working toward hospital‑grade deployment.
            </p>
            <div className="mb-6">
              <h3 className="font-mono text-xs tracking-[0.14em] uppercase text-ny-gray mb-2">Focus</h3>
              <ul className="list-none space-y-1">
                <li className="text-sm text-gray-700 pl-4 relative before:absolute before:left-0 before:top-2 before:w-1 before:h-px before:bg-black/40">Signal‑level analysis beyond imaging</li>
                <li className="text-sm text-gray-700 pl-4 relative before:absolute before:left-0 before:top-2 before:w-1 before:h-px before:bg-black/40">Early detection of neurological risk</li>
                <li className="text-sm text-gray-700 pl-4 relative before:absolute before:left-0 before:top-2 before:w-1 before:h-px before:bg-black/40">Explainable, deterministic models</li>
              </ul>
            </div>
            <div className="mb-6">
              <h3 className="font-mono text-xs tracking-[0.14em] uppercase text-ny-gray mb-2">Open to</h3>
              <ul className="list-none space-y-1">
                <li className="text-sm text-gray-700 pl-4 relative before:absolute before:left-0 before:top-2 before:w-1 before:h-px before:bg-black/40">Clinical collaborators (neurology/radiology)</li>
                <li className="text-sm text-gray-700 pl-4 relative before:absolute before:left-0 before:top-2 before:w-1 before:h-px before:bg-black/40">Technical co‑builders</li>
                <li className="text-sm text-gray-700 pl-4 relative before:absolute before:left-0 before:top-2 before:w-1 before:h-px before:bg-black/40">Strategic early‑stage partners</li>
              </ul>
            </div>
            <p className="font-mono text-xs text-ny-gray">Building quietly. Validating rigorously.</p>

            {/* Founder */}
            <div className="flex items-center gap-4 mt-8">
              <div className="w-10 h-10 rounded-full border border-ny-border flex items-center justify-center font-display text-lg">RS</div>
              <div>
                <div className="font-semibold">Ruturaj Sodha</div>
                <div className="text-xs text-ny-gray">Founder, NYUROX Research</div>
              </div>
              <a
                href="https://www.linkedin.com/in/ruturaj-sodha-677b323a6/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto inline-flex items-center gap-2 font-mono text-xs tracking-wider border border-black rounded-full px-4 py-2 hover:bg-black hover:text-white transition-all"
              >
                <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                LinkedIn
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>

      <div id="contact">
        <AnimatedSection>
          <div className="py-16 max-w-xl mx-auto">
            <p className="font-mono text-xs tracking-[0.14em] uppercase text-ny-gray mb-4 text-center">Contact</p>
            <p className="text-center text-ny-gray mb-8">
              We welcome thoughtful collaboration inquiries from clinicians, researchers, and strategic partners.
            </p>
            {!submitted ? (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <div>
                  <label htmlFor="name" className="block font-mono text-xs tracking-wider uppercase text-ny-gray mb-1">Full Name</label>
                  <input type="text" name="name" id="name" required className="w-full px-4 py-2 border border-ny-border rounded focus:outline-none focus:ring-2 focus:ring-black/10" />
                </div>
                <div>
                  <label htmlFor="phone" className="block font-mono text-xs tracking-wider uppercase text-ny-gray mb-1">Contact Number</label>
                  <input type="tel" name="phone" id="phone" required className="w-full px-4 py-2 border border-ny-border rounded focus:outline-none focus:ring-2 focus:ring-black/10" />
                </div>
                <div>
                  <label htmlFor="email" className="block font-mono text-xs tracking-wider uppercase text-ny-gray mb-1">Email</label>
                  <input type="email" name="email" id="email" required className="w-full px-4 py-2 border border-ny-border rounded focus:outline-none focus:ring-2 focus:ring-black/10" />
                </div>
                <div>
                  <label htmlFor="purpose" className="block font-mono text-xs tracking-wider uppercase text-ny-gray mb-1">Purpose of Contact</label>
                  <input type="text" name="purpose" id="purpose" required className="w-full px-4 py-2 border border-ny-border rounded focus:outline-none focus:ring-2 focus:ring-black/10" />
                </div>
                <div>
                  <label htmlFor="message" className="block font-mono text-xs tracking-wider uppercase text-ny-gray mb-1">Message</label>
                  <textarea name="message" id="message" rows={5} required className="w-full px-4 py-2 border border-ny-border rounded focus:outline-none focus:ring-2 focus:ring-black/10" />
                </div>
                {error && (
                  <div className="text-red-600 text-sm text-center font-mono">
                    {error}
                  </div>
                )}
                <div className="text-center">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="font-mono text-xs tracking-widest uppercase bg-black text-white px-8 py-3 rounded-full hover:bg-transparent hover:text-black border border-black transition-all hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            ) : (
              <div className="form-success text-center font-mono text-sm bg-gray-50 border border-ny-border rounded p-4">
                Thank you. We’ll respond within a few days.
              </div>
            )}
            <p className="text-center mt-6 font-mono text-xs text-ny-gray">
              Or reach out directly:{' '}
              <a href="mailto:hello@nyurox.com" className="underline">hello@nyurox.com</a>
            </p>
          </div>
        </AnimatedSection>
      </div>
    </>
  );
}
