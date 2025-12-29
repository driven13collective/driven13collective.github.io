import React from 'react';
import { PolicyLayout } from '../components/PolicyLayout';

export const ChampionTierPage: React.FC = () => {
  return (
    <PolicyLayout title="">
      <div className="space-y-16 text-neutral-300">
        
        {/* Hero */}
        <section className="relative -mx-6 -mt-8 mb-16">
          <div className="aspect-[16/9] md:aspect-[21/9] overflow-hidden">
            <img 
              src="/images/a_cinematic_fashion_shot_of_a_model.jpeg" 
              alt="Champion Tier" 
              className="w-full h-full object-cover grayscale brightness-50"
            />
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <span className="text-[10px] tracking-[1em] uppercase text-neutral-400 mb-4">Tier 02</span>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white text-glow mb-4">CHAMPION</h1>
            <div className="w-24 h-[2px] bg-white mb-6"></div>
            <p className="text-lg md:text-xl text-neutral-300 max-w-xl font-light">The Proven Elite</p>
          </div>
        </section>

        {/* Philosophy */}
        <section className="text-center max-w-3xl mx-auto">
          <h2 className="text-[10px] tracking-[0.5em] uppercase text-neutral-500 mb-8">The Philosophy</h2>
          <p className="serif text-3xl md:text-4xl leading-relaxed text-white">
            "Champions understand that victory is not the goal—it is the byproduct of relentless refinement."
          </p>
        </section>

        {/* The Champion's Path */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-8 tracking-tight text-center">The Champion's Path</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-neutral-900 border border-neutral-800 p-8">
              <div className="text-6xl font-black text-neutral-800 mb-4">II</div>
              <h3 className="text-lg font-bold text-white mb-3">Second Only to Legends</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
                Champions occupy the space between aspiration and legacy. They have proven their commitment, demonstrated their skill, and earned their position through consistent excellence.
              </p>
            </div>
            <div className="bg-neutral-900 border border-neutral-800 p-8">
              <div className="text-6xl font-black text-neutral-800 mb-4">∞</div>
              <h3 className="text-lg font-bold text-white mb-3">Unlimited Potential</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
                Every Legend was once a Champion. This tier represents the proving ground—where dedication meets opportunity and excellence becomes habit.
              </p>
            </div>
          </div>
        </section>

        {/* Race Day Exclusives */}
        <section className="bg-neutral-900 border border-neutral-800 -mx-6 px-6 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">Race Day Exclusives</h2>
            <p className="text-neutral-400 mb-12 max-w-2xl mx-auto">
              Champions receive access to limited drops timed with major racing events. When the grid forms, your collection grows.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-black p-6 border border-neutral-800">
                <span className="text-3xl font-black text-white">24</span>
                <p className="text-[10px] uppercase tracking-widest text-neutral-500 mt-2">Races Per Year</p>
              </div>
              <div className="bg-black p-6 border border-neutral-800">
                <span className="text-3xl font-black text-white">48</span>
                <p className="text-[10px] uppercase tracking-widest text-neutral-500 mt-2">Hour Early Access</p>
              </div>
              <div className="bg-black p-6 border border-neutral-800">
                <span className="text-3xl font-black text-white">13</span>
                <p className="text-[10px] uppercase tracking-widest text-neutral-500 mt-2">Exclusive Pieces</p>
              </div>
              <div className="bg-black p-6 border border-neutral-800">
                <span className="text-3xl font-black text-white">1</span>
                <p className="text-[10px] uppercase tracking-widest text-neutral-500 mt-2">Priority Status</p>
              </div>
            </div>
          </div>
        </section>

        {/* Champion Privileges */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-8 tracking-tight text-center">Champion Privileges</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-6 p-6 bg-neutral-900/50 border border-neutral-800">
              <div className="text-2xl font-black text-neutral-700">01</div>
              <div>
                <h3 className="font-bold text-white mb-2">Priority Access to Drops</h3>
                <p className="text-neutral-500 text-sm">48-hour early access window before public release. Never miss a piece that defines the season.</p>
              </div>
            </div>
            <div className="flex items-start gap-6 p-6 bg-neutral-900/50 border border-neutral-800">
              <div className="text-2xl font-black text-neutral-700">02</div>
              <div>
                <h3 className="font-bold text-white mb-2">Race Day Capsules</h3>
                <p className="text-neutral-500 text-sm">Exclusive pieces released only during Grand Prix weekends. Limited to Champion tier and above.</p>
              </div>
            </div>
            <div className="flex items-start gap-6 p-6 bg-neutral-900/50 border border-neutral-800">
              <div className="text-2xl font-black text-neutral-700">03</div>
              <div>
                <h3 className="font-bold text-white mb-2">The Inner Sanctum</h3>
                <p className="text-neutral-500 text-sm">Access to the private Champion community. Strategy discussions, member meetups, and collective decisions.</p>
              </div>
            </div>
            <div className="flex items-start gap-6 p-6 bg-neutral-900/50 border border-neutral-800">
              <div className="text-2xl font-black text-neutral-700">04</div>
              <div>
                <h3 className="font-bold text-white mb-2">Sleeve Placement</h3>
                <p className="text-neutral-500 text-sm">Champion tier garments feature the 13 embroidery on the right sleeve—a visible mark of status.</p>
              </div>
            </div>
          </div>
        </section>

        {/* The Garment */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 space-y-6">
              <span className="text-[10px] tracking-[0.5em] uppercase text-neutral-500">The Champion Collection</span>
              <h3 className="text-3xl font-bold text-white">Carbon Quarter-Zip</h3>
              <p className="text-neutral-400 leading-relaxed">
                Engineered for the paddock and beyond. Technical stretch fabric meets refined minimalism. The Champion insignia sits on the right sleeve—visible, earned, respected.
              </p>
              <div className="space-y-3">
                <div className="flex justify-between text-sm border-b border-neutral-800 pb-2">
                  <span className="text-neutral-500">Fabric</span>
                  <span className="text-white">Performance Stretch Blend</span>
                </div>
                <div className="flex justify-between text-sm border-b border-neutral-800 pb-2">
                  <span className="text-neutral-500">Weight</span>
                  <span className="text-white">320 GSM</span>
                </div>
                <div className="flex justify-between text-sm border-b border-neutral-800 pb-2">
                  <span className="text-neutral-500">Embroidery</span>
                  <span className="text-white">Right Sleeve, White Thread</span>
                </div>
                <div className="flex justify-between text-sm border-b border-neutral-800 pb-2">
                  <span className="text-neutral-500">Access</span>
                  <span className="text-white">Champion Tier Members</span>
                </div>
              </div>
              <a 
                href="/contact"
                className="inline-block px-8 py-4 bg-white text-black text-xs uppercase tracking-[0.3em] font-bold hover:bg-neutral-200 transition-all mt-4"
              >
                Submit Your Case
              </a>
            </div>
            <div className="order-1 md:order-2">
              <img 
                src="/images/a_cinematic_high_fashion_close_up_shot_of_the.jpeg" 
                alt="Champion Collection" 
                className="w-full aspect-[4/5] object-cover grayscale"
              />
            </div>
          </div>
        </section>

        {/* Elevation Path */}
        <section className="text-center py-12 border-y border-neutral-800">
          <h3 className="text-[10px] tracking-[0.5em] uppercase text-neutral-500 mb-6">The Path Forward</h3>
          <p className="text-xl text-white mb-4">From Champion to Legend</p>
          <p className="text-neutral-500 max-w-xl mx-auto text-sm">
            Champions who demonstrate exceptional contribution to the collective, mentor new members, and embody the 13 philosophy may be elevated to Legend status by existing Legends.
          </p>
        </section>

        {/* CTA */}
        <section className="text-center">
          <h3 className="text-xl font-bold text-white mb-4">Claim Your Position</h3>
          <p className="text-neutral-500 mb-8 max-w-md mx-auto">
            Champion status is earned through consistent engagement with the collective and demonstrated commitment to the 13 philosophy.
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
