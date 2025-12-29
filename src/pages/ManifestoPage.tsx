import React from 'react';
import { PolicyLayout } from '../components/PolicyLayout';
import { Logo } from '../components/Logo';

export const ManifestoPage: React.FC = () => {
  return (
    <PolicyLayout title="">
      <div className="space-y-20 text-neutral-300">
        
        {/* Hero */}
        <section className="text-center -mt-8">
          <Logo size="lg" className="mx-auto mb-12" />
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white text-glow mb-6">
            THE MANIFESTO
          </h1>
          <div className="w-24 h-[2px] bg-white mx-auto"></div>
        </section>

        {/* Opening Statement */}
        <section className="text-center max-w-3xl mx-auto">
          <p className="serif text-3xl md:text-4xl leading-relaxed text-white">
            At 34, the noise fades. Only the line remains. 13 is not a number; it's the result of subtracting everything that doesn't make you faster.
          </p>
        </section>

        {/* The Origin */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="/images/a_cinematic_fashion_shot_of_a_model.jpeg" 
              alt="The Origin" 
              className="w-full aspect-[4/5] object-cover grayscale"
            />
          </div>
          <div className="space-y-6">
            <span className="text-[10px] tracking-[0.5em] uppercase text-neutral-500">Chapter I</span>
            <h2 className="text-3xl font-bold text-white">The Origin</h2>
            <p className="text-neutral-400 leading-relaxed">
              13 was born in the space between laps. In the moments of stillness before the lights go out. It emerged from the understanding that true speed is not about going faster—it's about removing everything that slows you down.
            </p>
            <p className="text-neutral-400 leading-relaxed">
              We are Driven 13 Collective. The Black American F1 Initiative. We exist to create pathways where none existed before, to build representation through precision, and to prove that excellence recognizes no boundaries.
            </p>
          </div>
        </section>

        {/* The Number */}
        <section className="bg-white text-black -mx-6 px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-[10px] tracking-[0.5em] uppercase text-neutral-500 block mb-8">Chapter II</span>
            <h2 className="text-8xl md:text-[12rem] font-black tracking-tighter mb-8">13</h2>
            <p className="text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto">
              Some see superstition. We see mathematics. 1 + 3 = 4. Four wheels. Four corners of the world we intend to reach. The number of those who doubt, divided by zero—undefined, like our potential.
            </p>
          </div>
        </section>

        {/* The Philosophy */}
        <section>
          <div className="text-center mb-12">
            <span className="text-[10px] tracking-[0.5em] uppercase text-neutral-500 block mb-4">Chapter III</span>
            <h2 className="text-3xl font-bold text-white">The Philosophy</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border-t border-neutral-800 pt-8">
              <h3 className="text-xl font-bold text-white mb-4">Less Is More</h3>
              <p className="text-neutral-500 leading-relaxed">
                We reject excess. Every stitch, every thread, every design decision is scrutinized for purpose. If it doesn't serve the mission, it doesn't exist in our collection.
              </p>
            </div>
            <div className="border-t border-neutral-800 pt-8">
              <h3 className="text-xl font-bold text-white mb-4">Precision Over Flash</h3>
              <p className="text-neutral-500 leading-relaxed">
                The technical mind is the greatest upgrade. We don't make clothes that demand attention—we make clothes that reward it when given.
              </p>
            </div>
            <div className="border-t border-neutral-800 pt-8">
              <h3 className="text-xl font-bold text-white mb-4">The Collective Wins</h3>
              <p className="text-neutral-500 leading-relaxed">
                Individual talent is valuable. Collective purpose is unstoppable. We build community because the race is long and meant to be run together.
              </p>
            </div>
          </div>
        </section>

        {/* The Visual Language */}
        <section>
          <div className="text-center mb-12">
            <span className="text-[10px] tracking-[0.5em] uppercase text-neutral-500 block mb-4">Chapter IV</span>
            <h2 className="text-3xl font-bold text-white">The Visual Language</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="aspect-square bg-black border border-neutral-800 flex items-center justify-center">
              <span className="text-[10px] uppercase tracking-widest text-neutral-500">Black</span>
            </div>
            <div className="aspect-square bg-neutral-900 border border-neutral-800 flex items-center justify-center">
              <span className="text-[10px] uppercase tracking-widest text-neutral-500">Charcoal</span>
            </div>
            <div className="aspect-square bg-neutral-800 border border-neutral-700 flex items-center justify-center">
              <span className="text-[10px] uppercase tracking-widest text-neutral-400">Carbon</span>
            </div>
            <div className="aspect-square bg-white border border-neutral-200 flex items-center justify-center">
              <span className="text-[10px] uppercase tracking-widest text-neutral-600">White</span>
            </div>
          </div>
          <p className="text-center text-neutral-500 mt-8 max-w-xl mx-auto">
            Our palette is intentionally restrained. Black absorbs. White reflects. The space between is where we operate—in the grays where nuance lives and precision matters.
          </p>
        </section>

        {/* The Hierarchy */}
        <section className="bg-neutral-900 border border-neutral-800 -mx-6 px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-[10px] tracking-[0.5em] uppercase text-neutral-500 block mb-4">Chapter V</span>
              <h2 className="text-3xl font-bold text-white">The Hierarchy</h2>
              <p className="text-neutral-500 mt-4">Every collective needs structure. Ours is earned, never given.</p>
            </div>
            <div className="space-y-4">
              <a href="/tier/legend" className="flex items-center justify-between p-6 bg-black border border-neutral-800 hover:border-neutral-600 transition group">
                <div>
                  <span className="text-[10px] tracking-widest uppercase text-neutral-500">Tier 01</span>
                  <h3 className="text-xl font-bold text-white">Legend</h3>
                </div>
                <span className="text-neutral-600 group-hover:text-white transition">→</span>
              </a>
              <a href="/tier/champion" className="flex items-center justify-between p-6 bg-black border border-neutral-800 hover:border-neutral-600 transition group">
                <div>
                  <span className="text-[10px] tracking-widest uppercase text-neutral-500">Tier 02</span>
                  <h3 className="text-xl font-bold text-white">Champion</h3>
                </div>
                <span className="text-neutral-600 group-hover:text-white transition">→</span>
              </a>
              <a href="/tier/contender" className="flex items-center justify-between p-6 bg-black border border-neutral-800 hover:border-neutral-600 transition group">
                <div>
                  <span className="text-[10px] tracking-widest uppercase text-neutral-500">Tier 03</span>
                  <h3 className="text-xl font-bold text-white">Contender</h3>
                </div>
                <span className="text-neutral-600 group-hover:text-white transition">→</span>
              </a>
              <a href="/tier/prospect" className="flex items-center justify-between p-6 bg-black border border-neutral-800 hover:border-neutral-600 transition group">
                <div>
                  <span className="text-[10px] tracking-widest uppercase text-neutral-500">Tier 04</span>
                  <h3 className="text-xl font-bold text-white">Prospect</h3>
                </div>
                <span className="text-neutral-600 group-hover:text-white transition">→</span>
              </a>
            </div>
          </div>
        </section>

        {/* The Mission */}
        <section>
          <div className="text-center mb-12">
            <span className="text-[10px] tracking-[0.5em] uppercase text-neutral-500 block mb-4">Chapter VI</span>
            <h2 className="text-3xl font-bold text-white">The Mission</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-neutral-400 leading-relaxed">
                Driven 13 Collective exists to prove a simple truth: representation at the highest levels of motorsport is not just possible—it's inevitable. We're accelerating the timeline.
              </p>
              <p className="text-neutral-400 leading-relaxed">
                Through 13, we create more than clothing. We create identity. We create belonging. We create the uniform for a future that's being built in real-time.
              </p>
              <p className="text-neutral-400 leading-relaxed">
                When you wear 13, you're not just wearing a number. You're wearing a statement. You're wearing possibility. You're wearing the future we're building together.
              </p>
            </div>
            <div>
              <img 
                src="/images/a_high_end_8k_cinematic_fashion_lookbook_spread.jpeg" 
                alt="The Mission" 
                className="w-full aspect-[4/5] object-cover grayscale"
              />
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="text-center py-12 border-y border-neutral-800">
          <p className="serif text-3xl italic text-white max-w-2xl mx-auto mb-6">
            "The grid doesn't care where you came from. It only measures where you're going."
          </p>
          <p className="text-neutral-500">
            Welcome to 13. Welcome to the collective.
          </p>
        </section>

        {/* CTA */}
        <section className="text-center">
          <a 
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-black text-xs uppercase tracking-[0.3em] font-bold hover:bg-neutral-200 transition-all"
          >
            Submit Your Case
          </a>
        </section>

      </div>
    </PolicyLayout>
  );
};
