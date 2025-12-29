import React from 'react';
import { Logo } from './Logo';

interface PolicyLayoutProps {
  title: string;
  children: React.ReactNode;
}

export const PolicyLayout: React.FC<PolicyLayoutProps> = ({ title, children }) => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="grain"></div>
      
      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-black/80 backdrop-blur-md border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="text-white hover:opacity-70 transition-opacity" aria-label="Driven 13 Collective Home">
            <Logo size="sm" />
          </a>
          <div className="flex gap-6 text-[10px] tracking-[0.2em] uppercase">
            <a href="/manifesto" className="hover:text-gray-400 transition hidden md:block">Manifesto</a>
            <a href="/lookbook" className="hover:text-gray-400 transition hidden md:block">Lookbook</a>
            <a href="/about" className="hover:text-gray-400 transition hidden md:block">About</a>
            <a href="/store" className="hover:text-gray-400 transition">Shop</a>
            <a href="/contact" className="border border-white px-3 py-1 hover:bg-white hover:text-black transition">Apply</a>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-12 text-center">{title}</h1>
        <div className="prose prose-invert prose-neutral max-w-none">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-900 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-[10px] tracking-widest uppercase">
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
              <h4 className="font-bold mb-4">Explore</h4>
              <div className="flex flex-col gap-2 text-neutral-500">
                <a href="/manifesto" className="hover:text-white transition">Manifesto</a>
                <a href="/lookbook" className="hover:text-white transition">Lookbook</a>
                <a href="/about" className="hover:text-white transition">About</a>
                <a href="/contact" className="hover:text-white transition">Contact</a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Hierarchy</h4>
              <div className="flex flex-col gap-2 text-neutral-500">
                <a href="/tier/legend" className="hover:text-white transition">Legend</a>
                <a href="/tier/champion" className="hover:text-white transition">Champion</a>
                <a href="/tier/contender" className="hover:text-white transition">Contender</a>
                <a href="/tier/prospect" className="hover:text-white transition">Prospect</a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <div className="flex flex-col gap-2 text-neutral-500">
                <a href="/returns" className="hover:text-white transition">Returns & Refunds</a>
                <a href="/privacy" className="hover:text-white transition">Privacy Policy</a>
                <a href="/terms" className="hover:text-white transition">Terms of Service</a>
                <a href="/shipping" className="hover:text-white transition">Shipping Policy</a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <div className="flex flex-col gap-2 text-neutral-500 normal-case tracking-normal text-xs">
                <a href="mailto:thecollective@driven13collective.com" className="hover:text-white transition">thecollective@driven13collective.com</a>
                <a href="tel:+18087363329" className="hover:text-white transition">(808) 736-3329</a>
                <a href="https://behance.net/driven13collective" target="_blank" rel="noopener noreferrer" className="hover:text-white transition uppercase tracking-widest text-[10px] mt-2">Behance →</a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-neutral-900 text-center text-[10px] tracking-widest text-neutral-600 uppercase">
            <p>© 2024 THIRTEEN COLLECTIVE. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
