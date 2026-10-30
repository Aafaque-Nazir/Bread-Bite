import React from "react";
import { Link } from "react-router-dom";
import { FaFileContract, FaPhoneAlt, FaEnvelope, FaClock, FaMotorcycle, FaArrowLeft } from "react-icons/fa";
import SEO from "../src/components/SEO";

const Terms = () => {
  return (
    <div className="py-10 sm:py-16 px-4 sm:px-6 max-w-4xl mx-auto">
      <SEO
        title="Terms of Service | Bread & Bite Cloud Kitchen"
        description="Terms and conditions for placing orders, delivery timelines, and kitchen policies at Bread & Bite Cloud Kitchen, Navi Mumbai."
        url="/terms/"
      />

      {/* Back button */}
      <div className="mb-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8C827A] hover:text-[#B84A1C] transition-colors"
        >
          <FaArrowLeft size={10} />
          <span>Back to Home</span>
        </Link>
      </div>

      <header className="mb-10 text-center sm:text-left">
        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#B84A1C] block mb-2 font-heading">
          Operational Standards
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold font-heading text-[#181411] tracking-tight">
          Terms of Service
        </h1>
        <p className="text-xs text-[#8C827A] mt-2">
          Effective Date: October 2026 · Operating Base: Shop 12, Ground Floor, Sector 11, Taloja Phase 1
        </p>
      </header>

      <div className="space-y-6 text-sm text-[#574F4A] leading-relaxed">
        {/* Card 1 */}
        <section className="bg-white border border-[#EAE4DC] rounded-2xl p-6 sm:p-8 shadow-2xs">
          <h2 className="text-lg font-bold font-heading text-[#181411] mb-3 flex items-center gap-2">
            <FaFileContract className="text-[#B84A1C]" size={16} />
            <span>1. Overview &amp; Cloud Kitchen Base</span>
          </h2>
          <p>
            These terms govern food orders placed with <strong className="text-[#181411]">Bread &amp; Bite</strong> via our official website (<strong className="text-[#181411]">breadandbite.in</strong>) or direct WhatsApp hotline (+91 93256 29256). Our kitchen is located at Shop 12, Ground Floor, Sector 11, Taloja Phase 1, Navi Mumbai 410208.
          </p>
        </section>

        {/* Card 2 */}
        <section className="bg-white border border-[#EAE4DC] rounded-2xl p-6 sm:p-8 shadow-2xs">
          <h2 className="text-lg font-bold font-heading text-[#181411] mb-3 flex items-center gap-2">
            <FaClock className="text-[#B84A1C]" size={15} />
            <span>2. Kitchen Operational Slots</span>
          </h2>
          <p className="mb-3">
            Our kitchen prepares food fresh to order during 2 daily operational slots (Monday through Sunday):
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs mb-3">
            <div className="p-3 rounded-xl bg-[#FAF7F2] border border-[#EAE4DC]">
              <strong className="block text-[#181411] text-xs font-semibold mb-0.5">Lunch Operational Slot:</strong>
              <span className="text-[#574F4A]">11:15 AM – 3:30 PM IST</span>
            </div>
            <div className="p-3 rounded-xl bg-[#FAF7F2] border border-[#EAE4DC]">
              <strong className="block text-[#181411] text-xs font-semibold mb-0.5">Dinner Operational Slot:</strong>
              <span className="text-[#574F4A]">7:00 PM – 9:45 PM IST</span>
            </div>
          </div>
          <p className="text-xs text-[#8C827A]">
            Orders placed between slots are accepted as advance pre-orders and dispatched with top priority as soon as the next kitchen slot opens.
          </p>
        </section>

        {/* Card 3 */}
        <section className="bg-white border border-[#EAE4DC] rounded-2xl p-6 sm:p-8 shadow-2xs">
          <h2 className="text-lg font-bold font-heading text-[#181411] mb-3 flex items-center gap-2">
            <FaMotorcycle className="text-[#B84A1C]" size={16} />
            <span>3. Delivery Zones &amp; Minimum Orders</span>
          </h2>
          <p className="mb-3">
            To ensure hot food and reliable rider dispatch, location-specific minimum orders apply:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
            <li><strong className="text-[#181411]">Taloja Phase 1 &amp; 2:</strong> Minimum order ₹199 · Delivery ₹39 · Free delivery on orders ₹299 and above (10–20 min).</li>
            <li><strong className="text-[#181411]">Kharghar / Kamothe / Kalamboli:</strong> Minimum order ₹249 · Delivery ₹49 · Free delivery on orders ₹399 and above (20–35 min).</li>
            <li><strong className="text-[#181411]">Panvel &amp; CBD Belapur:</strong> Minimum order ₹499 · Delivery ₹79 · Free delivery on orders ₹699 and above (25–40 min).</li>
          </ul>
        </section>

        {/* Card 4 */}
        <section className="bg-white border border-[#EAE4DC] rounded-2xl p-6 sm:p-8 shadow-2xs">
          <h2 className="text-lg font-bold font-heading text-[#181411] mb-3">
            4. Food Quality, Portions &amp; Halal Guarantee
          </h2>
          <p className="mb-3">
            All our chicken dishes are prepared using <strong className="text-[#181411]">100% Halal fresh chicken</strong> sourced daily. We never use frozen poultry or pre-packaged curries.
          </p>
          <p className="text-xs sm:text-sm text-[#574F4A]">
            Gravy dishes (Chicken Keema, Chicken Korma) are weighed and packed in generous 500-gram microwave-safe containers, easily serving 2 adults. Rotis and breads are baked fresh upon order receipt.
          </p>
        </section>

        {/* Card 5 */}
        <section className="bg-white border border-[#EAE4DC] rounded-2xl p-6 sm:p-8 shadow-2xs">
          <h2 className="text-lg font-bold font-heading text-[#181411] mb-3">
            5. Payment Methods
          </h2>
          <p>
            Customers may pay upon arrival of their food using:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1 text-xs sm:text-sm">
            <li><strong className="text-[#181411]">Cash on Delivery (COD)</strong></li>
            <li><strong className="text-[#181411]">UPI QR on Delivery</strong> via Google Pay, PhonePe, Paytm, or BHIM</li>
          </ul>
        </section>

        {/* Card 6 */}
        <section className="bg-white border border-[#EAE4DC] rounded-2xl p-6 sm:p-8 shadow-2xs">
          <h2 className="text-lg font-bold font-heading text-[#181411] mb-3">
            6. Cancellations &amp; Quality Resolution
          </h2>
          <p className="mb-3">
            Because meals are cooked fresh immediately upon confirmation, orders may be modified or cancelled within 5 minutes of placing. If an item arrives damaged or incomplete, contact our kitchen hotline at <strong className="text-[#181411]">+91 93256 29256</strong> immediately with a photo for instant re-dispatch or full refund.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Terms;

