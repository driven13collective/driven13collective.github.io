import React from 'react';
import { PolicyLayout } from '../components/PolicyLayout';

export const PrivacyPage: React.FC = () => {
  return (
    <PolicyLayout title="Privacy Policy">
      <div className="space-y-12 text-neutral-300">
        
        <section>
          <p className="text-lg leading-relaxed">
            This Privacy Policy describes how Driven 13 Collective (the "Site", "we", "us", or "our") collects, uses, and discloses your personal information when you visit, use our services, or make a purchase from our website (the "Site") or otherwise communicate with us (collectively, the "Services").
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">Information We Collect</h2>
          <p className="leading-relaxed mb-4">When you visit the Site, we automatically collect certain information about your device, including:</p>
          <ul className="list-disc list-inside space-y-2 text-neutral-400 mb-4">
            <li>Information about your web browser</li>
            <li>IP address</li>
            <li>Time zone</li>
            <li>Cookies installed on your device</li>
            <li>Pages or products you view</li>
            <li>Search terms and site interactions</li>
          </ul>
          <p className="leading-relaxed">
            When you make a purchase or attempt to make a purchase, we collect information including your name, billing address, shipping address, payment information, email address, and phone number.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">How We Use Your Information</h2>
          <p className="leading-relaxed mb-4">We use the information we collect to:</p>
          <ul className="list-disc list-inside space-y-2 text-neutral-400">
            <li>Fulfill orders and process transactions</li>
            <li>Communicate with you about orders, products, and promotions</li>
            <li>Screen orders for potential risk or fraud</li>
            <li>Improve and optimize our Site</li>
            <li>Provide targeted advertising</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">Sharing Your Information</h2>
          <p className="leading-relaxed">
            We share your personal information with third parties to help us use your information as described above. We use Shopify to power our online store—you can read more about how Shopify uses your personal information at <a href="https://www.shopify.com/legal/privacy" target="_blank" rel="noopener noreferrer" className="text-white underline hover:no-underline">shopify.com/legal/privacy</a>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">Your Rights</h2>
          <p className="leading-relaxed mb-4">
            If you are a European resident, you have the right to access personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us.
          </p>
          <p className="leading-relaxed">
            Additionally, if you are a European resident, we note that we are processing your information in order to fulfill contracts we might have with you, or otherwise to pursue our legitimate business interests listed above.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">Data Retention</h2>
          <p className="leading-relaxed">
            When you place an order through the Site, we will maintain your order information for our records unless and until you ask us to delete this information.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">Changes</h2>
          <p className="leading-relaxed">
            We may update this privacy policy from time to time in order to reflect changes to our practices or for other operational, legal, or regulatory reasons.
          </p>
        </section>

        <section className="bg-neutral-900 border border-neutral-800 p-8 text-center">
          <h3 className="text-xl font-bold text-white mb-2">Contact Us</h3>
          <p className="text-neutral-400 mb-4">For more information about our privacy practices or if you have questions, please contact us.</p>
          <a href="mailto:thecollective@driven13collective.com" className="inline-block px-6 py-3 bg-white text-black text-xs uppercase tracking-[0.2em] font-bold hover:bg-neutral-200 transition">
            thecollective@driven13collective.com
          </a>
        </section>

      </div>
    </PolicyLayout>
  );
};
