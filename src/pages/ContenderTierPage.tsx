import React from 'react';
import { PolicyLayout } from '../components/PolicyLayout';

export const ContenderTierPage: React.FC = () => {
  return (
    <PolicyLayout title="">
      <div className="space-y-16 text-neutral-300">
        
        {/* Hero */}
        <section className="relative -mx-6 -mt-8 mb-16">
          <div className="aspect-[16/9] md:aspect-[21/9] overflow-hidden">
            <img 
              src="/images/a_cinematic_fashion_shot_of_a_model (1).jpeg" 
              alt="Contender Tier" 
              className="w-full h-full object-cover grayscale brightness-50"
            />
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <span className="text-[10px] tracking-[1em] uppercase text-neutral-400 mb-4">Tier 03</span>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white text-glow mb-4">CONTENDER</h1>
            <div className="w-24 h-[2px] bg-white mb-6"></div>
            <p className="text-lg md:text-xl text-neutral-300 max-w-xl font-light">The Rising Force</p>
          </div>
        </section>

        {/* Philosophy */}
        <section className="text-center max-w-3xl mx-auto">
          <h2 className="text-[10px] tracking-[0.5em] uppercase text-neutral-500 mb-8">The Philosophy</h2>
          <p className="serif text-3xl md:text-4xl leading-relaxed text-white">
            "The contender knows that every lap is an audition. Every corner, a chance to prove what others only talk about."
          </p>
        </section>

        {/* The Contender's Mindset */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-8 tracking-tight text-center">The Contender's Mindset</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative overflow-hidden aspect-square bg-neutral-900 border border-neutral-800 group">
              <img 
                src="/images/a_cinematic_fashion_shot_of_a_model (1).jpeg" 
                alt="Hunger" 
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 group-hover:opacity-60 transition-opacity"
              />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white mb-2">Hunger</h3>
                <p className="text-neutral-400 text-sm">The contender is never satisfied. Every achievement is a stepping stone, not a destination.</p>
              </div>
            </div>
            <div className="relative overflow-hidden aspect-square bg-neutral-900 border border-neutral-800 group">
              <img 
                src="/images/a_cinematic_high_fashion_close_up_shot_of_the.jpeg" 
                alt="Discipline" 
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 group-hover:opacity-60 transition-opacity"
              />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white mb-2">Discipline</h3>
                <p className="text-neutral-400 text-sm">Talent opens doors. Discipline keeps them open. The contender understands this fundamental truth.</p>
              </div>
            </div>
            <div className="relative overflow-hidden aspect-square bg-neutral-900 border border-neutral-800 group">
              <img 
                src="/images/a_cinematic_high_fashion_close_up_shot_of_the t-shirt.jpeg" 
                alt="Vision" 
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 group-hover:opacity-60 transition-opacity"
              />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white mb-2">Vision</h3>
                <p className="text-neutral-400 text-sm">While others see obstacles, the contender sees opportunities. The path to champion is clear.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Early Access */}
        <section className="bg-neutral-900 border border-neutral-800 -mx-6 px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">Early Access Privileges</h2>
              <p className="text-neutral-400 max-w-2xl mx-auto">
                Contenders receive early access to all seasonal collections. While the public waits, you're already wearing tomorrow.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-black p-8 border border-neutral-800">
                <h3 className="font-bold text-white mb-4 uppercase tracking-widest text-sm">Seasonal Drops</h3>
                <ul className="space-y-3 text-neutral-400 text-sm">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-white"></span>
                    24-hour early access window
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-white"></span>
                    First notification of new releases
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-white"></span>
                    Reserved sizing on limited pieces
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-white"></span>
                    Contender-exclusive colorways
                  </li>
                </ul>
              </div>
              <div className="bg-black p-8 border border-neutral-800">
                <h3 className="font-bold text-white mb-4 uppercase tracking-widest text-sm">Community Access</h3>
                <ul className="space-y-3 text-neutral-400 text-sm">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-white"></span>
                    Private Contender community
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-white"></span>
                    Direct feedback channel
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-white"></span>
                    Mentorship from Champions
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-white"></span>
                    Advancement opportunities
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* The Garment */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/images/a_cinematic_fashion_shot_of_a_model (1).jpeg" 
                alt="Contender Collection" 
                className="w-full aspect-[4/5] object-cover grayscale"
              />
            </div>
            <div className="space-y-6">
              <span className="text-[10px] tracking-[0.5em] uppercase text-neutral-500">The Contender Collection</span>
              <h3 className="text-3xl font-bold text-white">Technical Crew</h3>
              <p className="text-neutral-400 leading-relaxed">
                Built for movement. Designed for statement. The Contender Crew features our signature minimalist approach with subtle 13 branding on the chest—a mark of ambition and intent.
              </p>
              <div className="space-y-3">
                <div className="flex justify-between text-sm border-b border-neutral-800 pb-2">
                  <span className="text-neutral-500">Fabric</span>
                  <span className="text-white">French Terry Cotton Blend</span>
                </div>
                <div className="flex justify-between text-sm border-b border-neutral-800 pb-2">
                  <span className="text-neutral-500">Weight</span>
                  <span className="text-white">280 GSM</span>
                </div>
                <div className="flex justify-between text-sm border-b border-neutral-800 pb-2">
                  <span className="text-neutral-500">Embroidery</span>
                  <span className="text-white">Chest Placement, Tonal</span>
                </div>
                <div className="flex justify-between text-sm border-b border-neutral-800 pb-2">
                  <span className="text-neutral-500">Access</span>
                  <span className="text-white">Contender Tier Members</span>
                </div>
              </div>
              <a 
                href="/contact"
                className="inline-block px-8 py-4 bg-white text-black text-xs uppercase tracking-[0.3em] font-bold hover:bg-neutral-200 transition-all mt-4"
              >
                Submit Your Case
              </a>
            </div>
          </div>
        </section>

        {/* Progress Tracker */}
        <section className="text-center py-12 border-y border-neutral-800">
          <h3 className="text-[10px] tracking-[0.5em] uppercase text-neutral-500 mb-8">Your Path to Champion</h3>
          <div className="flex justify-center items-center gap-4 max-w-md mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-500 text-sm font-bold">P</div>
              <span className="text-[10px] uppercase tracking-widest text-neutral-600 mt-2">Prospect</span>
            </div>
            <div className="flex-1 h-[2px] bg-neutral-800"></div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-black text-sm font-bold">C</div>
              <span className="text-[10px] uppercase tracking-widest text-white mt-2">Contender</span>
            </div>
            <div className="flex-1 h-[2px] bg-neutral-800"></div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-500 text-sm font-bold">CH</div>
              <span className="text-[10px] uppercase tracking-widest text-neutral-600 mt-2">Champion</span>
            </div>
            <div className="flex-1 h-[2px] bg-neutral-800"></div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-500 text-sm font-bold">L</div>
              <span className="text-[10px] uppercase tracking-widest text-neutral-600 mt-2">Legend</span>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <h3 className="text-xl font-bold text-white mb-4">Begin Your Ascent</h3>
          <p className="text-neutral-500 mb-8 max-w-md mx-auto">
            The Contender tier is where potential meets purpose. Make your first purchase to enter the proving ground.
          </p>
          <a 
            href="/contact"
            className="inline-block px-8 py-4 border border-white text-xs uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all"
          >
            Submit Your Case
          </a>
        </section>

      </div>
    </PolicyLayout>
  );
};
