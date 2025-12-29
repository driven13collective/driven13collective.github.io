import React from 'react';
import { PolicyLayout } from '../components/PolicyLayout';

export const LegendTierPage: React.FC = () => {
  return (
    <PolicyLayout title="">
      <div className="space-y-16 text-neutral-300">
        
        {/* Hero */}
        <section className="relative -mx-6 -mt-8 mb-16">
          <div className="aspect-[16/9] md:aspect-[21/9] overflow-hidden">
            <img 
              src="/images/a_cinematic_high_fashion_close_up_shot_from_behind.jpeg" 
              alt="Legend Tier" 
              className="w-full h-full object-cover grayscale brightness-50"
            />
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <span className="text-[10px] tracking-[1em] uppercase text-neutral-400 mb-4">Tier 01</span>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white text-glow mb-4">LEGEND</h1>
            <div className="w-24 h-[2px] bg-white mb-6"></div>
            <p className="text-lg md:text-xl text-neutral-300 max-w-xl font-light">The Private Circle</p>
          </div>
        </section>

        {/* Philosophy */}
        <section className="text-center max-w-3xl mx-auto">
          <h2 className="text-[10px] tracking-[0.5em] uppercase text-neutral-500 mb-8">The Philosophy</h2>
          <p className="serif text-3xl md:text-4xl leading-relaxed text-white">
            "Legends are not born from visibility. They are forged in the shadows, where the work speaks louder than the name."
          </p>
        </section>

        {/* What Defines a Legend */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-8 tracking-tight text-center">What Defines a Legend</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-neutral-900 border border-neutral-800 p-8 text-center">
              <div className="text-5xl font-black text-neutral-800 mb-4">01</div>
              <h3 className="text-lg font-bold text-white mb-3">Mastery Over Time</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
                Years of refinement. Thousands of hours behind the wheel. The Legend tier recognizes those who have transcended practice into artistry.
              </p>
            </div>
            <div className="bg-neutral-900 border border-neutral-800 p-8 text-center">
              <div className="text-5xl font-black text-neutral-800 mb-4">02</div>
              <h3 className="text-lg font-bold text-white mb-3">Silent Influence</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
                True legends don't announce themselves. Their presence shifts the room. Their opinions shape the sport. Their legacy outlives their career.
              </p>
            </div>
            <div className="bg-neutral-900 border border-neutral-800 p-8 text-center">
              <div className="text-5xl font-black text-neutral-800 mb-4">03</div>
              <h3 className="text-lg font-bold text-white mb-3">The Collective's Core</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
                Legends form the nucleus. They are the standard by which all others measure themselves. Entry is by invitation only.
              </p>
            </div>
          </div>
        </section>

        {/* Exclusive Access */}
        <section className="bg-white text-black -mx-6 px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 tracking-tight text-center">Legend Tier Privileges</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border-l-2 border-black pl-6">
                <h3 className="font-bold uppercase tracking-widest text-sm mb-2">Nape Embroidery</h3>
                <p className="text-neutral-600 text-sm">The signature 13 placement—visible only to those following. A mark of those who lead.</p>
              </div>
              <div className="border-l-2 border-black pl-6">
                <h3 className="font-bold uppercase tracking-widest text-sm mb-2">Direct Line Access</h3>
                <p className="text-neutral-600 text-sm">Private communication channel with the collective's leadership. Your voice shapes direction.</p>
              </div>
              <div className="border-l-2 border-black pl-6">
                <h3 className="font-bold uppercase tracking-widest text-sm mb-2">Founder's Archive</h3>
                <p className="text-neutral-600 text-sm">Access to unreleased designs, prototypes, and the creative process behind every drop.</p>
              </div>
              <div className="border-l-2 border-black pl-6">
                <h3 className="font-bold uppercase tracking-widest text-sm mb-2">Lifetime Membership</h3>
                <p className="text-neutral-600 text-sm">Once a Legend, always a Legend. Your position in the collective is permanent.</p>
              </div>
            </div>
          </div>
        </section>

        {/* The Garment */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/images/a_cinematic_high_fashion_close_up_shot_from_behind.jpeg" 
                alt="Legend Collection" 
                className="w-full aspect-[4/5] object-cover grayscale"
              />
            </div>
            <div className="space-y-6">
              <span className="text-[10px] tracking-[0.5em] uppercase text-neutral-500">The Legend Collection</span>
              <h3 className="text-3xl font-bold text-white">Obsidian Turtleneck</h3>
              <p className="text-neutral-400 leading-relaxed">
                Crafted from Japanese technical fabric. Matte-black finish that absorbs light rather than reflecting it. The Legend embroidery sits at the nape—13 in tonal thread, visible only at the right angle.
              </p>
              <div className="space-y-3">
                <div className="flex justify-between text-sm border-b border-neutral-800 pb-2">
                  <span className="text-neutral-500">Fabric</span>
                  <span className="text-white">Technical Japanese Wool Blend</span>
                </div>
                <div className="flex justify-between text-sm border-b border-neutral-800 pb-2">
                  <span className="text-neutral-500">Weight</span>
                  <span className="text-white">380 GSM</span>
                </div>
                <div className="flex justify-between text-sm border-b border-neutral-800 pb-2">
                  <span className="text-neutral-500">Embroidery</span>
                  <span className="text-white">Nape Placement, Tonal</span>
                </div>
                <div className="flex justify-between text-sm border-b border-neutral-800 pb-2">
                  <span className="text-neutral-500">Access</span>
                  <span className="text-white">Invitation Only</span>
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

        {/* Quote */}
        <section className="text-center py-12 border-y border-neutral-800">
          <p className="serif text-2xl italic text-neutral-400 max-w-2xl mx-auto">
            "The difference between a driver and a legend is not speed. It's what remains when the car stops."
          </p>
          <span className="text-[10px] tracking-[0.3em] uppercase text-neutral-600 mt-4 block">— The 13 Manifesto</span>
        </section>

        {/* CTA */}
        <section className="text-center">
          <h3 className="text-xl font-bold text-white mb-4">Become Part of the Legend</h3>
          <p className="text-neutral-500 mb-8 max-w-md mx-auto">
            Legend status is not purchased. It is earned through contribution to the collective and recognized by existing members.
          </p>
          <a 
            href="mailto:thecollective@driven13collective.com?subject=Legend%20Tier%20Inquiry" 
            className="inline-block px-8 py-4 border border-white text-xs uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all"
          >
            Submit Your Case
          </a>
        </section>

      </div>
    </PolicyLayout>
  );
};
