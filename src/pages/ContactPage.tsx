import React from 'react';
import { PolicyLayout } from '../components/PolicyLayout';
import { Logo } from '../components/Logo';

export const ContactPage: React.FC = () => {
  return (
    <PolicyLayout title="Submit Your Case">
      <div className="space-y-12 text-neutral-300">
        
        <section className="text-center">
          <Logo size="lg" className="mx-auto mb-8" />
          <p className="text-xl leading-relaxed max-w-2xl mx-auto mb-4">
            Driven 13 Collective membership is exclusive and cannot be purchased.
          </p>
          <p className="text-neutral-500 max-w-xl mx-auto">
            To be considered for the collective, you must submit your case. Tell us who you are, why you belong, and what you bring to the circle.
          </p>
        </section>

        {/* The Distinction */}
        <section className="bg-neutral-900 border border-neutral-800 p-8 text-center">
          <h3 className="text-lg font-bold text-white mb-4">Two Paths. One Vision.</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="border-r-0 md:border-r border-neutral-800 pr-0 md:pr-8">
              <span className="text-[10px] uppercase tracking-widest text-neutral-500 block mb-3">For Everyone</span>
              <h4 className="text-white font-bold mb-2">The Shop</h4>
              <p className="text-neutral-500 text-sm mb-4">
                General merchandise and everyday pieces available to all supporters of the Black American F1 Initiative.
              </p>
              <a 
                href="/store"
                className="inline-block px-6 py-3 border border-white text-xs uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all"
              >
                Visit Shop
              </a>
            </div>
            <div className="pl-0 md:pl-8">
              <span className="text-[10px] uppercase tracking-widest text-neutral-500 block mb-3">By Application Only</span>
              <h4 className="text-white font-bold mb-2">The Driven 13 Collective</h4>
              <p className="text-neutral-500 text-sm mb-4">
                Exclusive tier-based membership. Cannot be purchased. Must be earned through application and selection.
              </p>
              <span className="inline-block px-6 py-3 bg-white text-black text-xs uppercase tracking-[0.3em] font-bold">
                Apply Below
              </span>
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Submit Your Case</h3>
          <form className="max-w-2xl mx-auto space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-[10px] uppercase tracking-widest text-neutral-500 block mb-2">First Name *</label>
                <input 
                  type="text" 
                  required
                  className="w-full bg-neutral-900 border border-neutral-800 px-4 py-3 text-white focus:border-white focus:outline-none transition"
                  placeholder="Your first name"
                />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-widest text-neutral-500 block mb-2">Last Name *</label>
                <input 
                  type="text" 
                  required
                  className="w-full bg-neutral-900 border border-neutral-800 px-4 py-3 text-white focus:border-white focus:outline-none transition"
                  placeholder="Your last name"
                />
              </div>
            </div>
            <div>
              <label className="text-[10px] uppercase tracking-widest text-neutral-500 block mb-2">Email *</label>
              <input 
                type="email" 
                required
                className="w-full bg-neutral-900 border border-neutral-800 px-4 py-3 text-white focus:border-white focus:outline-none transition"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="text-[10px] uppercase tracking-widest text-neutral-500 block mb-2">Location</label>
              <input 
                type="text" 
                className="w-full bg-neutral-900 border border-neutral-800 px-4 py-3 text-white focus:border-white focus:outline-none transition"
                placeholder="City, Country"
              />
            </div>
            <div>
              <label className="text-[10px] uppercase tracking-widest text-neutral-500 block mb-2">Your Connection to F1 / Motorsport</label>
              <textarea 
                rows={3}
                className="w-full bg-neutral-900 border border-neutral-800 px-4 py-3 text-white focus:border-white focus:outline-none transition resize-none"
                placeholder="What's your history with Formula 1 or motorsport?"
              />
            </div>
            <div>
              <label className="text-[10px] uppercase tracking-widest text-neutral-500 block mb-2">Why You Belong *</label>
              <textarea 
                rows={4}
                required
                className="w-full bg-neutral-900 border border-neutral-800 px-4 py-3 text-white focus:border-white focus:outline-none transition resize-none"
                placeholder="Tell us why you should be considered for the Driven 13 Collective. What do you bring to the circle?"
              />
            </div>
            <div>
              <label className="text-[10px] uppercase tracking-widest text-neutral-500 block mb-2">Desired Tier</label>
              <select 
                className="w-full bg-neutral-900 border border-neutral-800 px-4 py-3 text-white focus:border-white focus:outline-none transition"
              >
                <option value="">Select a tier...</option>
                <option value="prospect">Prospect — Entry Level</option>
                <option value="contender">Contender — Early Access</option>
                <option value="champion">Champion — Race Day Exclusives</option>
                <option value="legend">Legend — Private Circle (Invitation Only)</option>
              </select>
            </div>
            <div>
              <label className="text-[10px] uppercase tracking-widest text-neutral-500 block mb-2">Behance Profile</label>
              <input 
                type="text" 
                className="w-full bg-neutral-900 border border-neutral-800 px-4 py-3 text-white focus:border-white focus:outline-none transition"
                placeholder="behance.net/yourprofile"
              />
            </div>
            <div className="pt-4">
              <button 
                type="submit"
                className="w-full px-8 py-4 bg-white text-black text-xs uppercase tracking-[0.3em] font-bold hover:bg-neutral-200 transition-all"
              >
                Submit Your Case
              </button>
              <p className="text-neutral-600 text-xs text-center mt-4">
                All applications are reviewed manually. You will be contacted via email if selected.
              </p>
            </div>
          </form>
        </section>

        {/* Trade Info */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-neutral-800 pt-12">
          <div className="bg-neutral-900 border border-neutral-800 p-8">
            <h3 className="text-xl font-bold text-white mb-6">Trade Information</h3>
            <div className="space-y-4">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-neutral-500 block mb-1">Trade Name</span>
                <span className="text-white font-medium">13</span>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-widest text-neutral-500 block mb-1">Organization</span>
                <span className="text-white font-medium">Driven 13 Collective</span>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-widest text-neutral-500 block mb-1">Initiative</span>
                <span className="text-white font-medium">Black American F1 Initiative</span>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-widest text-neutral-500 block mb-1">DOS ID</span>
                <span className="text-white font-medium">7281334</span>
              </div>
            </div>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 p-8">
            <h3 className="text-xl font-bold text-white mb-6">Contact Details</h3>
            <div className="space-y-4">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-neutral-500 block mb-1">Email</span>
                <a href="mailto:thecollective@driven13collective.com" className="text-white font-medium hover:underline">thecollective@driven13collective.com</a>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-widest text-neutral-500 block mb-1">Phone</span>
                <a href="tel:+18087363329" className="text-white font-medium hover:underline">(808) 736-3329</a>
              </div>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <a 
            href="/store"
            className="bg-white text-black p-6 text-center hover:bg-neutral-200 transition group"
          >
            <h4 className="font-bold uppercase tracking-widest text-sm mb-2">Shop</h4>
            <p className="text-xs text-neutral-600">General merchandise for everyone</p>
          </a>
          <a 
            href="https://behance.net/driven13collective" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-neutral-900 border border-neutral-800 p-6 text-center hover:border-neutral-600 transition"
          >
            <h4 className="font-bold uppercase tracking-widest text-sm mb-2">Behance</h4>
            <p className="text-xs text-neutral-500">View our portfolio</p>
          </a>
          <a 
            href="mailto:thecollective@driven13collective.com"
            className="bg-neutral-900 border border-neutral-800 p-6 text-center hover:border-neutral-600 transition"
          >
            <h4 className="font-bold uppercase tracking-widest text-sm mb-2">Email</h4>
            <p className="text-xs text-neutral-500">Direct inquiries</p>
          </a>
        </section>

        <section className="text-center py-8">
          <p className="text-neutral-500 text-sm">
            Application review time: 3-5 business days
          </p>
        </section>

      </div>
    </PolicyLayout>
  );
};
