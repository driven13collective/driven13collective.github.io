import React from 'react';
import { Section } from '../components/Section';
import { AiAssistant } from '../components/AiAssistant';
import { Logo } from '../components/Logo';
import { MANIFESTO_TEXT, TIERS } from '../constants';

export const HomePage: React.FC = () => {
  return (
    <>
      {/* Film Grain Overlay */}
      <div className="grain"></div>

      <main className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth">
        <nav className="fixed top-0 left-0 w-full p-6 md:p-8 z-40 flex justify-between items-center bg-black/50 backdrop-blur-md">
          <a href="/" className="text-white hover:opacity-70 transition-opacity" aria-label="Driven 13 Collective Home">
            <Logo size="sm" />
          </a>
          <div className="hidden md:flex items-center space-x-8 text-[10px] tracking-[0.3em] uppercase font-medium">
            <a href="/manifesto" className="hover:opacity-50 transition-opacity">Manifesto</a>
            <a href="/lookbook" className="hover:opacity-50 transition-opacity">Lookbook</a>
            <a href="/about" className="hover:opacity-50 transition-opacity">About</a>
            <a href="#hierarchy" className="hover:opacity-50 transition-opacity">Hierarchy</a>
            <a 
              href="/store"
              className="hover:opacity-50 transition-opacity"
            >
              Store
            </a>
            <a 
              href="/contact"
              className="border border-white px-4 py-2 hover:bg-white hover:text-black transition-all"
            >
              Apply
            </a>
          </div>
          {/* Mobile menu button */}
          <a 
            href="/contact"
            className="md:hidden border border-white px-4 py-2 text-[10px] tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-all"
          >
            Apply
          </a>
        </nav>

        {/* Page 1: The Manifesto */}
        <Section id="manifesto" className="relative">
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/a_high_end_8k_cinematic_fashion_lookbook_spread.jpeg" 
              alt="Driver" 
              className="w-full h-full object-cover opacity-40 brightness-50 contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black"></div>
          </div>
          <div className="z-10 max-w-4xl text-center md:text-left">
            <h2 className="text-[10px] tracking-[1em] uppercase mb-8 text-neutral-500 font-bold">The Manifesto</h2>
            <h1 className="text-[15vw] md:text-[12vw] font-black leading-none tracking-tighter mb-8 text-glow">
              LESS IS<br />MORE.
            </h1>
            <p className="serif text-xl md:text-2xl leading-relaxed mb-8 text-neutral-300 max-w-xl">
              {MANIFESTO_TEXT}
            </p>
            <div className="h-1 w-24 bg-white mb-8"></div>
            <a 
              href="/contact"
              className="inline-block px-8 py-4 border border-white text-xs uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all"
            >
              Submit Your Case
            </a>
          </div>
        </Section>

        {/* Page 2: The Executive Athlete */}
        <Section id="executive" className="bg-neutral-900">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full max-w-7xl">
            <div className="relative group overflow-hidden">
              <img 
                src="/images/a_cinematic_fashion_shot_of_a_model.jpeg" 
                alt="Executive Athlete" 
                className="w-full aspect-[3/4] object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur p-4 border border-neutral-800">
                <span className="text-[10px] tracking-[0.3em] uppercase block">Asset No. 13-02</span>
                <span className="text-xs text-neutral-400">High-Contrast Charcoal Environment</span>
              </div>
            </div>
            <div className="space-y-8">
              <h2 className="text-[10px] tracking-[1em] uppercase text-neutral-500 font-bold">The Executive Athlete</h2>
              <h3 className="serif text-5xl">The Turtleneck</h3>
              <p className="text-neutral-400 text-lg leading-relaxed max-w-md">
                The Off-Track Uniform. Status is silent. Position is earned. Every fiber is engineered for the rest state of the high-performance mind.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="border border-neutral-800 p-4">
                  <span className="text-[10px] uppercase block mb-1 text-neutral-500 tracking-widest">Right Arm</span>
                  <span className="text-xs font-bold tracking-[0.2em]">LEGEND</span>
                </div>
                <div className="border border-neutral-800 p-4">
                  <span className="text-[10px] uppercase block mb-1 text-neutral-500 tracking-widest">Front Right</span>
                  <span className="text-xs font-bold tracking-[0.2em]">13</span>
                </div>
              </div>
              <a 
                href="/contact"
                className="inline-block px-6 py-3 bg-white text-black text-xs uppercase tracking-[0.3em] font-bold hover:bg-neutral-200 transition-all"
              >
                Submit Your Case
              </a>
            </div>
          </div>
        </Section>

        {/* Page 3: The Technical Mastery */}
        <Section id="mastery" className="bg-black">
          <div className="flex flex-col items-center text-center max-w-4xl">
            <h2 className="text-[10px] tracking-[1em] uppercase text-neutral-500 font-bold mb-12">The Technical Mastery</h2>
            <div className="relative mb-12 w-full group">
              <img 
                src="/images/a_cinematic_high_fashion_close_up_shot_from_behind.jpeg" 
                alt="Racing Suit" 
                className="w-full h-[60vh] object-cover grayscale brightness-75"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-sm">
                <p className="serif text-2xl italic tracking-widest">Precision Over Flare</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-left">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest mb-4">The Racing Suit</h4>
                <p className="text-neutral-500 text-sm leading-loose">
                  Matte-black base. Tonal embroidery. When the margin is milliseconds, the technical mind is the greatest upgrade. 13 is placed at the nape of the neck, visible only to those following.
                </p>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest mb-4">Glove Detail</h4>
                <p className="text-neutral-500 text-sm leading-loose">
                  Small-scale 13 embroidery on the cuff. A reminder of the collective's pace every time you grip the wheel. Minimalism as a performance metric.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Page 4: The Hierarchy */}
        <Section id="hierarchy" className="bg-neutral-950">
          <div className="w-full max-w-7xl">
            <div className="mb-16 text-center">
              <h2 className="text-[10px] tracking-[1em] uppercase text-neutral-500 font-bold mb-4">The Hierarchy of Supporter</h2>
              <h3 className="serif text-4xl">Know your place in the collective.</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {TIERS.map((tier) => (
                <a 
                  key={tier.id} 
                  href={tier.path}
                  className="group relative aspect-square bg-neutral-900 overflow-hidden border border-neutral-800 cursor-pointer"
                >
                  <img 
                    src={tier.image} 
                    alt={tier.title}
                    className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent p-6 flex flex-col justify-end">
                    <span className="text-[10px] tracking-widest uppercase text-neutral-500 mb-1">{tier.placement}</span>
                    <h4 className="text-xl font-bold mb-2">{tier.title}</h4>
                    <p className="text-[10px] text-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 uppercase leading-relaxed tracking-wider">
                      {tier.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>
            
            {/* Footer */}
            <div className="mt-20 border-t border-neutral-900 pt-12">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-[10px] tracking-widest uppercase mb-12">
                <div>
                  <Logo size="sm" className="mb-4" />
                  <p className="text-neutral-500 normal-case tracking-normal text-xs">
                    Driven 13 Collective<br />
                    Black American F1 Initiative<br />
                    4747 Allendale Rd Suite 50<br />
                    Houston, Texas 77017-4700
                  </p>
                </div>
                <div>
                  <h4 className="font-bold mb-4 text-white">Explore</h4>
                  <div className="flex flex-col gap-2 text-neutral-500">
                    <a href="/manifesto" className="hover:text-white transition">Manifesto</a>
                    <a href="/lookbook" className="hover:text-white transition">Lookbook</a>
                    <a href="/about" className="hover:text-white transition">About</a>
                    <a href="/contact" className="hover:text-white transition">Contact</a>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold mb-4 text-white">Hierarchy</h4>
                  <div className="flex flex-col gap-2 text-neutral-500">
                    <a href="/tier/legend" className="hover:text-white transition">Legend</a>
                    <a href="/tier/champion" className="hover:text-white transition">Champion</a>
                    <a href="/tier/contender" className="hover:text-white transition">Contender</a>
                    <a href="/tier/prospect" className="hover:text-white transition">Prospect</a>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold mb-4 text-white">Legal</h4>
                  <div className="flex flex-col gap-2 text-neutral-500">
                    <a href="/returns" className="hover:text-white transition">Returns</a>
                    <a href="/privacy" className="hover:text-white transition">Privacy</a>
                    <a href="/terms" className="hover:text-white transition">Terms</a>
                    <a href="/shipping" className="hover:text-white transition">Shipping</a>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold mb-4 text-white">Contact</h4>
                  <div className="flex flex-col gap-2 text-neutral-500 normal-case tracking-normal text-xs">
                    <a href="mailto:thecollective@driven13collective.com" className="hover:text-white transition">thecollective@driven13collective.com</a>
                    <a href="tel:+18087363329" className="hover:text-white transition">(808) 736-3329</a>
                    <a href="https://behance.net/driven13collective" target="_blank" rel="noopener noreferrer" className="hover:text-white transition uppercase tracking-widest text-[10px] mt-2">Behance →</a>
                  </div>
                </div>
              </div>
              <div className="pt-8 border-t border-neutral-900 text-center text-[10px] tracking-widest text-neutral-600 uppercase">
                <p>© 2024 THIRTEEN COLLECTIVE. ALL RIGHTS RESERVED.</p>
              </div>
            </div>
          </div>
        </Section>

        <AiAssistant />
      </main>
    </>
  );
};
