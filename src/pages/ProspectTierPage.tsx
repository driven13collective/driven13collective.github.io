import React from 'react';
import { PolicyLayout } from '../components/PolicyLayout';

export const ProspectTierPage: React.FC = () => {
  return (
    <PolicyLayout title="">
      <div className="space-y-16 text-neutral-300">
        
        {/* Hero */}
        <section className="relative -mx-6 -mt-8 mb-16">
          <div className="aspect-[16/9] md:aspect-[21/9] overflow-hidden">
            <img 
              src="/images/a_cinematic_high_fashion_close_up_shot_of_the t-shirt.jpeg" 
              alt="Prospect Tier" 
              className="w-full h-full object-cover grayscale brightness-50"
            />
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <span className="text-[10px] tracking-[1em] uppercase text-neutral-400 mb-4">Tier 04</span>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white text-glow mb-4">PROSPECT</h1>
            <div className="w-24 h-[2px] bg-white mb-6"></div>
            <p className="text-lg md:text-xl text-neutral-300 max-w-xl font-light">The Beginning</p>
          </div>
        </section>

        {/* Philosophy */}
        <section className="text-center max-w-3xl mx-auto">
          <h2 className="text-[10px] tracking-[0.5em] uppercase text-neutral-500 mb-8">The Philosophy</h2>
          <p className="serif text-3xl md:text-4xl leading-relaxed text-white">
            "Every legend started as a prospect. The only difference between then and now is the number of laps."
          </p>
        </section>

        {/* Welcome */}
        <section className="bg-white text-black -mx-6 px-6 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-black mb-6 tracking-tight">Welcome to the Collective</h2>
            <p className="text-neutral-600 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              You've found us. That alone sets you apart. The Prospect tier is not the bottom—it's the foundation. Everything that follows is built on this moment of recognition.
            </p>
            <div className="inline-flex items-center gap-4 bg-black text-white px-8 py-4">
              <span className="text-4xl font-black">13</span>
              <div className="text-left">
                <span className="text-[10px] uppercase tracking-widest block">Your Number</span>
                <span className="text-[10px] uppercase tracking-widest text-neutral-400 block">From This Point Forward</span>
              </div>
            </div>
          </div>
        </section>

        {/* What You Gain */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-8 tracking-tight text-center">What You Gain</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-neutral-900 border border-neutral-800 p-8">
              <div className="w-12 h-12 border border-neutral-700 flex items-center justify-center mb-6">
                <span className="text-xl font-black">∎</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Entry to the Collective</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
                Your first purchase grants you Prospect status. You're no longer outside looking in—you're part of something being built.
              </p>
            </div>
            <div className="bg-neutral-900 border border-neutral-800 p-8">
              <div className="w-12 h-12 border border-neutral-700 flex items-center justify-center mb-6">
                <span className="text-xl font-black">⬡</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Foundation Collection Access</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
                Access to the core 13 collection. Essential pieces that define the collective's visual language and philosophy.
              </p>
            </div>
            <div className="bg-neutral-900 border border-neutral-800 p-8">
              <div className="w-12 h-12 border border-neutral-700 flex items-center justify-center mb-6">
                <span className="text-xl font-black">△</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Advancement Path</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
                Clear progression to Contender status. Your engagement and purchases track your journey through the hierarchy.
              </p>
            </div>
            <div className="bg-neutral-900 border border-neutral-800 p-8">
              <div className="w-12 h-12 border border-neutral-700 flex items-center justify-center mb-6">
                <span className="text-xl font-black">○</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Community Membership</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
                Join the public 13 community. Connect with fellow prospects, learn from contenders, and observe the champions.
              </p>
            </div>
          </div>
        </section>

        {/* The Garment */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 space-y-6">
              <span className="text-[10px] tracking-[0.5em] uppercase text-neutral-500">The Prospect Collection</span>
              <h3 className="text-3xl font-bold text-white">Essential Tee</h3>
              <p className="text-neutral-400 leading-relaxed">
                Where every journey begins. Premium heavyweight cotton with the 13 mark on the back hem—subtle, foundational, unmistakable to those who know.
              </p>
              <div className="space-y-3">
                <div className="flex justify-between text-sm border-b border-neutral-800 pb-2">
                  <span className="text-neutral-500">Fabric</span>
                  <span className="text-white">Heavyweight Cotton 6.5oz</span>
                </div>
                <div className="flex justify-between text-sm border-b border-neutral-800 pb-2">
                  <span className="text-neutral-500">Fit</span>
                  <span className="text-white">Relaxed Boxy</span>
                </div>
                <div className="flex justify-between text-sm border-b border-neutral-800 pb-2">
                  <span className="text-neutral-500">Marking</span>
                  <span className="text-white">Back Hem Print</span>
                </div>
                <div className="flex justify-between text-sm border-b border-neutral-800 pb-2">
                  <span className="text-neutral-500">Access</span>
                  <span className="text-white">All Members</span>
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
                src="/images/a_cinematic_high_fashion_close_up_shot_of_the t-shirt.jpeg" 
                alt="Prospect Collection" 
                className="w-full aspect-[4/5] object-cover grayscale"
              />
            </div>
          </div>
        </section>

        {/* The Journey Ahead */}
        <section className="bg-neutral-900 border border-neutral-800 -mx-6 px-6 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-white mb-8 tracking-tight">The Journey Ahead</h2>
            <div className="grid grid-cols-4 gap-2 md:gap-4">
              <div className="bg-white text-black p-4 md:p-6">
                <span className="text-2xl md:text-3xl font-black block">P</span>
                <span className="text-[8px] md:text-[10px] uppercase tracking-widest">Prospect</span>
                <p className="text-[10px] text-neutral-600 mt-2 hidden md:block">You are here</p>
              </div>
              <div className="bg-neutral-800 p-4 md:p-6">
                <span className="text-2xl md:text-3xl font-black block text-neutral-500">C</span>
                <span className="text-[8px] md:text-[10px] uppercase tracking-widest text-neutral-500">Contender</span>
                <p className="text-[10px] text-neutral-600 mt-2 hidden md:block">Early access</p>
              </div>
              <div className="bg-neutral-800 p-4 md:p-6">
                <span className="text-2xl md:text-3xl font-black block text-neutral-500">CH</span>
                <span className="text-[8px] md:text-[10px] uppercase tracking-widest text-neutral-500">Champion</span>
                <p className="text-[10px] text-neutral-600 mt-2 hidden md:block">Race day drops</p>
              </div>
              <div className="bg-neutral-800 p-4 md:p-6">
                <span className="text-2xl md:text-3xl font-black block text-neutral-500">L</span>
                <span className="text-[8px] md:text-[10px] uppercase tracking-widest text-neutral-500">Legend</span>
                <p className="text-[10px] text-neutral-600 mt-2 hidden md:block">The private circle</p>
              </div>
            </div>
            <p className="text-neutral-500 mt-8 text-sm max-w-xl mx-auto">
              Advancement is based on purchase history, community engagement, and time in the collective. The path is clear for those who commit.
            </p>
          </div>
        </section>

        {/* Quote */}
        <section className="text-center py-12 border-y border-neutral-800">
          <p className="serif text-2xl italic text-neutral-400 max-w-2xl mx-auto">
            "The grid doesn't care where you came from. It only measures where you're going."
          </p>
          <span className="text-[10px] tracking-[0.3em] uppercase text-neutral-600 mt-4 block">— The 13 Manifesto</span>
        </section>

        {/* CTA */}
        <section className="text-center">
          <h3 className="text-xl font-bold text-white mb-4">Start Your Journey</h3>
          <p className="text-neutral-500 mb-8 max-w-md mx-auto">
            Every legend began with a single purchase. Every champion started as a prospect. Your moment is now.
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
