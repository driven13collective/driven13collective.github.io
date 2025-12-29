import React from 'react';
import { PolicyLayout } from '../components/PolicyLayout';

export const ShippingPage: React.FC = () => {
  return (
    <PolicyLayout title="Shipping Policy">
      <div className="space-y-12 text-neutral-300">
        
        <section>
          <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">1. Shipment Processing Time</h2>
          <p className="leading-relaxed mb-4">
            All orders are processed within <strong className="text-white">1–3 business days</strong>. Orders are not shipped or delivered on weekends or holidays.
          </p>
          <p className="leading-relaxed">
            If we are experiencing a high volume of orders, shipments may be delayed by a few days. Please allow additional days in transit for delivery. If there will be a significant delay in the shipment of your order, we will contact you via email.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">2. Shipping Rates & Delivery Estimates</h2>
          <p className="leading-relaxed mb-6">
            Shipping charges for your order will be calculated and displayed at checkout. We primarily use Standard Shipping / UPS / FedEx for all domestic orders.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-neutral-900 border border-neutral-800 p-6">
              <h4 className="text-white font-bold mb-2">Standard Shipping</h4>
              <p className="text-neutral-400">5–10 business days</p>
              <p className="text-xs text-neutral-500 mt-2">Calculated at checkout</p>
            </div>
            <div className="bg-neutral-900 border border-neutral-800 p-6">
              <h4 className="text-white font-bold mb-2">Express Shipping</h4>
              <p className="text-neutral-400">2–4 business days</p>
              <p className="text-xs text-neutral-500 mt-2">Calculated at checkout</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-neutral-500">
            Note: Delivery delays can occasionally occur due to seasonal volume or carrier issues.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">3. Shipment to P.O. Boxes or APO/FPO Addresses</h2>
          <p className="leading-relaxed">
            13 ships to addresses within the U.S., U.S. Territories, and APO/FPO/DPO addresses.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">4. Shipment Confirmation & Order Tracking</h2>
          <p className="leading-relaxed">
            You will receive a Shipment Confirmation email once your order has shipped containing your tracking number(s). The tracking number will be active within 24 hours.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">5. Customs, Duties, and Taxes</h2>
          <p className="leading-relaxed">
            13 is not responsible for any customs and taxes applied to your order. All fees imposed during or after shipping are the responsibility of the customer (tariffs, taxes, etc.).
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">6. Damages & Lost Packages</h2>
          <p className="leading-relaxed mb-4">
            If you received your order damaged, or if your package is lost in transit, please contact our support team at <a href="mailto:thecollective@driven13collective.com" className="text-white underline hover:no-underline">thecollective@driven13collective.com</a>.
          </p>
          <p className="leading-relaxed">
            Please save all packaging materials and damaged goods before filing a claim.
          </p>
        </section>

        <section className="bg-neutral-900 border border-neutral-800 p-8 text-center">
          <h3 className="text-xl font-bold text-white mb-2">Need Help?</h3>
          <p className="text-neutral-400 mb-4">Contact us for any shipping questions or concerns.</p>
          <a href="mailto:thecollective@driven13collective.com" className="inline-block px-6 py-3 bg-white text-black text-xs uppercase tracking-[0.2em] font-bold hover:bg-neutral-200 transition">
            Contact Support
          </a>
        </section>

      </div>
    </PolicyLayout>
  );
};
