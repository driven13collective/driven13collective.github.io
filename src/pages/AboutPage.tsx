import React from 'react';
import { PolicyLayout } from '../components/PolicyLayout';
import { Logo } from '../components/Logo';

export const AboutPage: React.FC = () => {
  return (
    <PolicyLayout title="">
      <div className="space-y-20 text-neutral-300">
        
        {/* Hero */}
        <section className="text-center -mt-8">
          <span className="text-[10px] tracking-[1em] uppercase text-neutral-500 block mb-4">About</span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white text-glow mb-6">
            DRIVEN 13 COLLECTIVE
          </h1>
          <div className="w-24 h-[2px] bg-white mx-auto mb-8"></div>
          <p className="text-xl text-neutral-400 max-w-xl mx-auto">
            The Black American F1 Initiative
          </p>
        </section>

        {/* Mission Statement */}
        <section className="bg-white text-black -mx-6 px-6 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-black mb-8 tracking-tight">Our Mission</h2>
            <p className="text-xl text-neutral-600 leading-relaxed">
              Driven 13 Collective exists to create pathways into Formula 1 and elite motorsport for Black Americans. We build community, create representation, and fund the future of diversity in racing.
            </p>
          </div>
        </section>

        {/* The Story */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/images/a_cinematic_fashion_shot_of_a_model.jpeg" 
                alt="Our Story" 
                className="w-full aspect-[4/5] object-cover grayscale"
              />
            </div>
            <div className="space-y-6">
              <span className="text-[10px] tracking-[0.5em] uppercase text-neutral-500">Our Story</span>
              <h2 className="text-3xl font-bold text-white">Built Different</h2>
              <p className="text-neutral-400 leading-relaxed">
                Formula 1 has never had a Black American driver. That's not a statistic—it's a challenge. Driven 13 Collective was founded to answer that challenge head-on.
              </p>
              <p className="text-neutral-400 leading-relaxed">
                We believe representation matters. We believe pathways can be created where none existed. We believe the next generation of motorsport champions is already out there—they just need the opportunity.
              </p>
              <p className="text-neutral-400 leading-relaxed">
                13 is our vehicle. Through premium lifestyle and performance wear, we build a community of supporters, generate resources for our initiatives, and create visibility for a mission that matters.
              </p>
            </div>
          </div>
        </section>

        {/* Why 13 */}
        <section className="bg-neutral-900 border border-neutral-800 -mx-6 px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Why 13?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-2xl font-black text-neutral-700">01</span>
                  <div>
                    <h3 className="font-bold text-white mb-2">The Underdog Number</h3>
                    <p className="text-neutral-500 text-sm">Historically avoided due to superstition, 13 represents those who defy convention and create their own luck through preparation and performance.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl font-black text-neutral-700">02</span>
                  <div>
                    <h3 className="font-bold text-white mb-2">Mathematical Precision</h3>
                    <p className="text-neutral-500 text-sm">1 + 3 = 4. Four wheels. Four seasons. Four tiers in our hierarchy. The number is purposeful.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-2xl font-black text-neutral-700">03</span>
                  <div>
                    <h3 className="font-bold text-white mb-2">Reclamation</h3>
                    <p className="text-neutral-500 text-sm">We reclaim what others fear. We turn perceived weakness into undeniable strength.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl font-black text-neutral-700">04</span>
                  <div>
                    <h3 className="font-bold text-white mb-2">Community</h3>
                    <p className="text-neutral-500 text-sm">13 unites us. It's a mark of belonging, a signal to others in the collective, a shared identity.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Initiative */}
        <section>
          <div className="text-center mb-12">
            <span className="text-[10px] tracking-[0.5em] uppercase text-neutral-500 block mb-4">The Initiative</span>
            <h2 className="text-3xl font-bold text-white">How We Make Impact</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-neutral-800 p-8">
              <div className="w-12 h-12 bg-white text-black flex items-center justify-center mb-6 font-black">
                K
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Karting Programs</h3>
              <p className="text-neutral-500 leading-relaxed">
                Funding and support for young Black American drivers in karting—the traditional pathway to F1.
              </p>
            </div>
            <div className="border border-neutral-800 p-8">
              <div className="w-12 h-12 bg-white text-black flex items-center justify-center mb-6 font-black">
                E
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Engineering Scholarships</h3>
              <p className="text-neutral-500 leading-relaxed">
                Supporting the next generation of motorsport engineers, mechanics, and technical specialists.
              </p>
            </div>
            <div className="border border-neutral-800 p-8">
              <div className="w-12 h-12 bg-white text-black flex items-center justify-center mb-6 font-black">
                C
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Community Building</h3>
              <p className="text-neutral-500 leading-relaxed">
                Creating networks, mentorships, and visibility for Black Americans in all areas of motorsport.
              </p>
            </div>
          </div>
        </section>

        {/* Company Info */}
        <section className="bg-black border border-neutral-800 -mx-6 px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Logo size="lg" className="mx-auto mb-6" />
              <h2 className="text-2xl font-bold text-white">Company Information</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-neutral-500 block mb-1">Organization</span>
                  <span className="text-white">Driven 13 Collective</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-neutral-500 block mb-1">Trade Name</span>
                  <span className="text-white">13</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-neutral-500 block mb-1">DOS ID</span>
                  <span className="text-white">7281334</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-neutral-500 block mb-1">Location</span>
                  <span className="text-white">4747 Allendale Rd Suite 50<br />Houston, Texas 77017-4700</span>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-neutral-500 block mb-1">Contact</span>
                  <span className="text-white">thecollective@driven13collective.com<br />(808) 736-3329</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <h3 className="text-xl font-bold text-white mb-4">Join the Collective</h3>
          <p className="text-neutral-500 mb-8 max-w-md mx-auto">
            Every purchase supports the mission. Every member strengthens the collective.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a 
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-black text-xs uppercase tracking-[0.3em] font-bold hover:bg-neutral-200 transition-all"
            >
              Submit Your Case
            </a>
            <a 
              href="/manifesto" 
              className="inline-block px-8 py-4 border border-white text-xs uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all"
            >
              Read the Manifesto
            </a>
          </div>
        </section>

      </div>
    </PolicyLayout>
  );
};
