import React from "react";
import { Link } from "react-router-dom";
import { FaShieldAlt, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaArrowLeft } from "react-icons/fa";
import SEO from "../src/components/SEO";

const Privacy = () => {
  return (
    <div className="py-10 sm:py-16 px-4 sm:px-6 max-w-4xl mx-auto">
      <SEO
        title="Privacy Policy | Bread & Bite Cloud Kitchen"
        description="Privacy Policy for Bread & Bite Cloud Kitchen, Navi Mumbai. How we collect, handle, and protect your order details."
        url="/privacy/"
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
          Legal & Transparency
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold font-heading text-[#181411] tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-xs text-[#8C827A] mt-2">
          Effective Date: October 2026 · Cloud Kitchen Base: Shop 12, Sector 11, Taloja Phase 1, Navi Mumbai
        </p>
      </header>

      <div className="space-y-6 text-sm text-[#574F4A] leading-relaxed">
        {/* Card 1 */}
        <section className="bg-white border border-[#EAE4DC] rounded-2xl p-6 sm:p-8 shadow-2xs">
          <h2 className="text-lg font-bold font-heading text-[#181411] mb-3 flex items-center gap-2">
            <FaShieldAlt className="text-[#B84A1C]" size={16} />
            <span>1. Commitment to Customer Privacy</span>
          </h2>
          <p>
            Bread &amp; Bite is a dedicated cloud kitchen based in Taloja Phase 1, Navi Mumbai. We respect your privacy and are committed to protecting the personal information you share when placing food orders or submitting catering inquiries through our website (<strong className="text-[#181411]">breadandbite.in</strong>) or direct WhatsApp hotline.
          </p>
        </section>

        {/* Card 2 */}
        <section className="bg-white border border-[#EAE4DC] rounded-2xl p-6 sm:p-8 shadow-2xs">
          <h2 className="text-lg font-bold font-heading text-[#181411] mb-3">
            2. Information We Collect
          </h2>
          <p className="mb-3">
            To fulfill your food delivery orders accurately, we collect only the necessary operational details:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
            <li><strong className="text-[#181411]">Customer Name &amp; Contact:</strong> Full name and 10-digit mobile number for order dispatch and delivery rider coordination.</li>
            <li><strong className="text-[#181411]">Delivery Address:</strong> Sector, building name, flat number, and landmark in Taloja, Kharghar, Panvel, Kamothe, Kalamboli, or CBD Belapur.</li>
            <li><strong className="text-[#181411]">Order Selections:</strong> Dishes, quantities, dietary preferences, and pre-order instructions.</li>
          </ul>
        </section>

        {/* Card 3 */}
        <section className="bg-white border border-[#EAE4DC] rounded-2xl p-6 sm:p-8 shadow-2xs">
          <h2 className="text-lg font-bold font-heading text-[#181411] mb-3">
            3. How We Use Your Information
          </h2>
          <p className="mb-3">
            Your details are used strictly for order logistics and customer support:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
            <li>Cooking and packaging your meals in accordance with health and hygiene guidelines.</li>
            <li>Routing our delivery riders to your doorstep within our promised delivery windows (10–40 minutes depending on sector).</li>
            <li>Communicating order status, receipt confirmations, and slot timings via WhatsApp or phone call.</li>
          </ul>
        </section>

        {/* Card 4 */}
        <section className="bg-white border border-[#EAE4DC] rounded-2xl p-6 sm:p-8 shadow-2xs">
          <h2 className="text-lg font-bold font-heading text-[#181411] mb-3">
            4. Zero Third-Party Selling Guarantee
          </h2>
          <p>
            We <strong className="text-[#181411]">never sell, rent, license, or monetize</strong> your personal phone numbers, addresses, or order history to advertisers, data brokers, or marketing networks. Your order data remains solely within Bread &amp; Bite kitchen administration.
          </p>
        </section>

        {/* Card 5 */}
        <section className="bg-white border border-[#EAE4DC] rounded-2xl p-6 sm:p-8 shadow-2xs">
          <h2 className="text-lg font-bold font-heading text-[#181411] mb-3">
            5. Payment Information &amp; Security
          </h2>
          <p>
            Bread &amp; Bite operates via <strong className="text-[#181411]">Cash on Delivery</strong> and <strong className="text-[#181411]">UPI QR on Delivery</strong> (Google Pay, PhonePe, Paytm). We do not collect, process, or store credit card or debit card numbers on our servers.
          </p>
        </section>

        {/* Card 6 */}
        <section className="bg-white border border-[#EAE4DC] rounded-2xl p-6 sm:p-8 shadow-2xs">
          <h2 className="text-lg font-bold font-heading text-[#181411] mb-3">
            6. Kitchen Contact &amp; Grievances
          </h2>
          <p className="mb-4">
            If you have questions regarding your order data or wish to have your details removed from our records, contact our kitchen team directly:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#EAE4DC] flex items-center gap-3">
              <FaPhoneAlt className="text-[#B84A1C]" size={14} />
              <div>
                <span className="text-[#8C827A] block font-medium">Direct Hotline:</span>
                <a href="tel:+919325629256" className="font-bold text-[#181411] hover:underline">+91 93256 29256</a>
              </div>
            </div>
            <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#EAE4DC] flex items-center gap-3">
              <FaEnvelope className="text-[#B84A1C]" size={14} />
              <div>
                <span className="text-[#8C827A] block font-medium">Kitchen Email:</span>
                <a href="mailto:breadandbite777@gmail.com" className="font-bold text-[#181411] hover:underline">breadandbite777@gmail.com</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Privacy;

