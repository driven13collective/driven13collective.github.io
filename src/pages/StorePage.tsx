import React from 'react';
import { Logo } from '../components/Logo';

interface ProductCardProps {
  id: string;
  name: string;
  rank: string;
  price: string;
  image?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, rank, price, image }) => (
  <div className="border border-neutral-900 p-8 hover:border-neutral-700 transition-all duration-300 flex flex-col justify-between h-[500px]">
    <div>
      <p className="text-[9px] text-neutral-600 mb-2">{id}</p>
      <h3 className="text-lg uppercase tracking-[0.1em] font-bold">{name}</h3>
      <p className="text-[9px] text-neutral-500 uppercase mt-1">{rank}</p>
    </div>
    <div className="flex-grow flex items-center justify-center">
      {image ? (
        <img 
          src={image} 
          alt={name} 
          className="w-full aspect-square object-cover border border-neutral-900"
        />
      ) : (
        <div className="w-full aspect-square bg-neutral-950 flex items-center justify-center border border-neutral-900">
          <span className="text-[10px] text-neutral-700 italic">SYSTEM IMAGE PENDING</span>
        </div>
      )}
    </div>
    <div className="mt-6 flex justify-between items-end">
      <span className="text-sm">{price}</span>
      <button className="bg-white text-black px-4 py-2 text-[10px] font-bold tracking-tighter hover:bg-neutral-300 transition-colors">
        SECURE UNIT
      </button>
    </div>
  </div>
);

interface RankCardProps {
  rank: string;
  title: string;
  description: string;
  showBorder?: boolean;
}

const RankCard: React.FC<RankCardProps> = ({ rank, title, description, showBorder = false }) => (
  <div className={showBorder ? 'border-l border-neutral-800 pl-12' : ''}>
    <h4 className="text-xs text-neutral-500 mb-6 uppercase tracking-[0.1em]">[ {rank} ]</h4>
    <h3 className="text-xl mb-4 uppercase tracking-[0.1em] font-bold">{title}</h3>
    <p className="text-[11px] text-neutral-400 leading-relaxed uppercase">{description}</p>
  </div>
);

const products = [
  { id: 'ID: D13-T03-PADDOCK', name: 'Paddock Tee', rank: 'Rank 03 // Entry Crew', price: '$45.13', image: '/images/Generated Image December 26, 2025 - 10_42AM.png' },
  { id: 'ID: D13-H03-AERO', name: 'Aero Cap', rank: 'Rank 03 // Entry Crew', price: '$35.13', image: '/images/macro_product_photography_of_a_black_unstructured (1).jpeg' },
  { id: 'ID: D13-H03-TECH', name: 'Technical Hoodie', rank: 'Rank 03 // Entry Crew', price: '$113.00', image: '/images/Generated Image December 26, 2025 - 10_56AM.png' },
  { id: 'ID: D13-K03-CHASSIS', name: 'Chassis Keytag', rank: 'Rank 03 // Entry Crew', price: '$19.13', image: '/images/extreme_macro_photography_of_a_high_end_tactical.jpeg' },
];

const ranks = [
  { rank: 'RANK 03', title: 'Entry Crew', description: 'General recruitment. Primary support kit. Authorized for public representation.' },
  { rank: 'RANK 02', title: 'The Collective', description: 'Vetted individuals. Access to brushed silver technical drops. Paddock verified.' },
  { rank: 'RANK 01', title: 'Inner Circle', description: 'Strategic architects. Gold/Carbon fiber identification. Private equity access.' },
];

export const StorePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Film Grain Overlay */}
      <div className="grain"></div>

      {/* NAVIGATION */}
      <nav className="sticky top-0 z-40 bg-black/80 backdrop-blur-md border-b border-neutral-900 px-6 py-4 flex justify-between items-center">
        <a href="/" className="hover:opacity-70 transition-opacity" aria-label="Driven 13 Collective Home">
          <Logo size="sm" />
        </a>
        <div className="hidden md:flex space-x-8 text-[10px] tracking-[0.2em] font-bold uppercase">
          <a href="/manifesto" className="hover:text-zinc-400 transition-colors">The Mission</a>
          <a href="/store" className="hover:text-zinc-400 transition-colors">The Kit</a>
          <a href="/about" className="hover:text-zinc-400 transition-colors">The Paddock</a>
          <a href="/contact" className="border border-white px-3 py-1 hover:bg-white hover:text-black transition">[Secure Access]</a>
        </div>
        <div className="text-[10px] border border-zinc-700 px-3 py-1">BAG [0]</div>
      </nav>

      {/* HERO: MISSION STATUS */}
      <section className="py-20 px-6 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] text-neutral-500 mb-4 tracking-widest uppercase">System Overview: Active Development</p>
          <h1 className="text-5xl md:text-7xl font-black leading-none mb-8 tracking-tighter">
            DRIVEN TO BE <br /> <span className="text-neutral-600">THE FIRST.</span>
          </h1>
          <p className="max-w-2xl text-sm text-neutral-400 leading-relaxed">
            Driven13Collective is an elite vehicle for change. We don't sell apparel; we engineer the kit for the journey. 
            Every unit produced funds the seat on the grid for Michael Christian.
          </p>
        </div>
      </section>

      {/* PRODUCT GRID: THE CORE FOUR */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </section>

      {/* RANKS SECTION: CLASS & REPRESENTATION */}
      <section className="py-24 px-6 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {ranks.map((rank, index) => (
            <RankCard key={index} {...rank} showBorder={index > 0} />
          ))}
        </div>
      </section>

      {/* FOOTER: THE SIGNATURE */}
      <footer className="py-12 px-6 flex flex-col md:flex-row justify-between items-center border-t border-neutral-900">
        <div className="text-[10px] tracking-widest uppercase mb-4 md:mb-0 text-neutral-500">
          Driven13Collective © 2025 // Directed by Michael Christian
        </div>
        <div className="text-sm uppercase tracking-[0.1em] text-neutral-500">
          STATUS: PURSUING THE GRID
        </div>
      </footer>
    </div>
  );
};
