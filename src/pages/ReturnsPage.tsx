import React from 'react';
import { PolicyLayout } from '../components/PolicyLayout';

export const ReturnsPage: React.FC = () => {
  return (
    <PolicyLayout title="Return & Refund Policy">
      <div className="space-y-12 text-neutral-300">
        
        {/* Overview */}
        <section>
          <p className="text-lg leading-relaxed">
            We have a <strong className="text-white">30-day return policy</strong>, which means you have 30 days after receiving your item to request a return.
          </p>
        </section>

        {/* Eligibility */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">Return Eligibility</h2>
          <p className="leading-relaxed mb-4">
            To be eligible for a return, your item must be in the same condition that you received it, unworn or unused, with tags, and in its original packaging. You'll also need the receipt or proof of purchase.
          </p>
          <p className="leading-relaxed">
            To start a return, you can contact us at <a href="mailto:thecollective@driven13collective.com" className="text-white underline hover:no-underline">thecollective@driven13collective.com</a>.
          </p>
          <p className="mt-4 leading-relaxed">
            If your return is accepted, we'll send you a return shipping label, as well as instructions on how and where to send your package. <strong className="text-white">Items sent back to us without first requesting a return will not be accepted.</strong>
          </p>
        </section>

        {/* Damages */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">Damages and Issues</h2>
          <p className="leading-relaxed">
            Please inspect your order upon reception and contact us immediately if the item is defective, damaged or if you receive the wrong item, so that we can evaluate the issue and make it right.
          </p>
        </section>

        {/* Exceptions */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">Exceptions / Non-Returnable Items</h2>
          <p className="leading-relaxed mb-4">
            Certain types of items cannot be returned, including:
          </p>
          <ul className="list-disc list-inside space-y-2 text-neutral-400">
            <li>Perishable goods (such as food, flowers, or plants)</li>
            <li>Custom products (such as special orders or personalized items)</li>
            <li>Personal care goods (such as beauty products)</li>
            <li>Hazardous materials, flammable liquids, or gases</li>
            <li>Sale items</li>
            <li>Gift cards</li>
          </ul>
          <p className="mt-4 leading-relaxed">
            Please get in touch if you have questions or concerns about your specific item.
          </p>
        </section>

        {/* Exchanges */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">Exchanges</h2>
          <p className="leading-relaxed">
            The fastest way to ensure you get what you want is to return the item you have, and once the return is accepted, make a separate purchase for the new item.
          </p>
        </section>

        {/* EU Policy */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">European Union 14 Day Cooling Off Period</h2>
          <p className="leading-relaxed">
            Notwithstanding the above, if the merchandise is being shipped into the European Union, you have the right to cancel or return your order within 14 days, for any reason and without a justification. As above, your item must be in the same condition that you received it, unworn or unused, with tags, and in its original packaging. You'll also need the receipt or proof of purchase.
          </p>
        </section>

        {/* Refunds */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">Refunds</h2>
          <p className="leading-relaxed mb-4">
            We will notify you once we've received and inspected your return, and let you know if the refund was approved or not. If approved, you'll be automatically refunded on your original payment method within <strong className="text-white">10 business days</strong>.
          </p>
          <p className="leading-relaxed">
            Please remember it can take some time for your bank or credit card company to process and post the refund too. If more than 15 business days have passed since we've approved your return, please contact us at <a href="mailto:thecollective@driven13collective.com" className="text-white underline hover:no-underline">thecollective@driven13collective.com</a>.
          </p>
        </section>

        {/* Contact */}
        <section className="bg-neutral-900 border border-neutral-800 p-8 text-center">
          <h3 className="text-xl font-bold text-white mb-2">Questions?</h3>
          <p className="text-neutral-400 mb-4">You can always contact us for any return question.</p>
          <a href="mailto:thecollective@driven13collective.com" className="inline-block px-6 py-3 bg-white text-black text-xs uppercase tracking-[0.2em] font-bold hover:bg-neutral-200 transition">
            Contact Support
          </a>
        </section>

      </div>
    </PolicyLayout>
  );
};
