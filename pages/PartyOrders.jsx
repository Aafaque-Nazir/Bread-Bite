import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown, FaArrowRight } from 'react-icons/fa';
import SEO from '../src/components/SEO';
import { PARTY_FAQS } from '../data/seoConfig';
import { LOCATIONS } from '../data/locations';
import { sanitizeText, sanitizePhone, isValidIndianPhone, sanitizeSafeUrl } from '../src/utils/security';
import toast from 'react-hot-toast';

const PartyOrders = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const [form, setForm] = useState({ name: '', phone: '', area: 'Kharghar', guests: '10–20 Guests', notes: '' });

  const handleInquiry = (e) => {
    e.preventDefault();
    const cleanName = sanitizeText(form.name, 60);
    const cleanPhone = sanitizePhone(form.phone);
    const cleanNotes = sanitizeText(form.notes, 400);

    if (cleanName.length < 2) {
      toast.error('Please enter your name');
      return;
    }
    if (!isValidIndianPhone(cleanPhone)) {
      toast.error('Please enter a valid 10-digit mobile number');
      return;
    }

    const msg = `PARTY / BULK ORDER INQUIRY — BREAD & BITE\n\nName: ${cleanName}\nPhone: +91 ${cleanPhone}\nDelivery Area: ${form.area}\nEstimated Group Size: ${form.guests}\nMenu / Timing Notes: ${cleanNotes || 'Chicken Keema Pav & Korma platters'}`;
    const url = sanitizeSafeUrl(
      `https://wa.me/919325629256?text=${encodeURIComponent(msg)}`,
      'https://wa.me/919325629256'
    );
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="min-h-screen bg-[#FAF7F2] text-[#181411] pt-8 sm:pt-12 pb-24 px-4 sm:px-6">
      <SEO
        title="Party Orders & Bulk Food Delivery Navi Mumbai | Bread & Bite"
        description="Order bulk 500g Chicken Keema, Chicken Korma platters, Keema Pav boxes & office lunches across Taloja, Kharghar, Panvel & CBD Belapur."
        url="/party-orders/"
        keywords="party food order navi mumbai, bulk chicken keema kharghar, office lunch delivery cbd belapur, house party catering taloja, bulk keema pav panvel"
        breadcrumbs={[{ name: 'Party & Bulk Orders', path: '/party-orders/' }]}
        faqs={PARTY_FAQS}
      />

      <div className="max-w-5xl mx-auto">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-1.5 text-xs text-[#8C827A]">
            <li><Link to="/" className="hover:text-[#B84A1C]">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-[#181411] font-semibold">Party &amp; Bulk Orders</li>
          </ol>
        </nav>

        <header className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#B84A1C] block mb-2">
            House Parties · Corporate Lunches · Family Gatherings
          </span>
          <h1 className="text-3xl sm:text-5xl font-heading text-[#181411] leading-tight mb-4">
            Party &amp; Bulk Chicken Orders in <span className="font-italic-accent text-[#B84A1C]">Navi Mumbai</span>
          </h1>
          <p className="text-sm sm:text-base text-[#574F4A] leading-relaxed">
            Honest 500g portions scaled up for groups of 10 to 100+ guests. Freshly cooked 100% Halal Chicken Keema, rich Chicken Korma, clay-oven Tandoori Rotis, and soft Ladi Pavs delivered hot across Navi Mumbai.
          </p>
        </header>

        {/* Bulk Packages Table / Grid */}
        <section className="grid md:grid-cols-3 gap-6 mb-14">
          {[
            {
              title: 'Small House Gathering',
              serves: '8–10 Guests',
              price: 'From ₹1,095',
              details: '5× 500g Chicken Keema or Korma tubs (2.5 kg total gravy) + 20 soft Ladi Pavs or 15 Tandoori Rotis.'
            },
            {
              title: 'Office Team Lunch',
              serves: '15–20 Guests',
              price: 'From ₹2,190',
              details: '10× 500g Chicken Gravies (Keema + Korma mix), 30 Tandoori Rotis / 40 Pavs, and Crispy Fries boxes.'
            },
            {
              title: 'Celebration Feast',
              serves: '30–50+ Guests',
              price: 'Custom Kitchen Quote',
              details: 'Bulk Keema & Korma handis, fresh clay-oven rotis, Crispy Chicken Burgers, and Warm Choco Lava Cakes.'
            }
          ].map((pkg) => (
            <div key={pkg.title} className="bg-white border border-[#EAE4DC] rounded-3xl p-6 flex flex-col justify-between">
              <div>
                <span className="text-[11px] uppercase tracking-wider font-bold text-[#B84A1C] block mb-1">
                  {pkg.serves}
                </span>
                <h2 className="text-xl font-bold font-heading text-[#181411] mb-2">
                  {pkg.title}
                </h2>
                <p className="text-xs sm:text-sm text-[#574F4A] leading-relaxed mb-4">
                  {pkg.details}
                </p>
              </div>
              <div className="pt-4 border-t border-[#EAE4DC] flex items-center justify-between">
                <span className="text-base font-bold font-heading text-[#181411]">{pkg.price}</span>
                <Link to="/menu/" className="text-xs font-semibold text-[#B84A1C] hover:underline">
                  View Menu
                </Link>
              </div>
            </div>
          ))}
        </section>

        {/* Inquiry Form + Areas */}
        <div className="grid lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-7 bg-white border border-[#EAE4DC] rounded-3xl p-6 sm:p-8">
            <h2 className="text-2xl font-heading text-[#181411] mb-2">
              Request a Party or Office Quote
            </h2>
            <p className="text-xs sm:text-sm text-[#574F4A] mb-6">
              Share your event date, area, and headcount — we reply quickly on WhatsApp with exact pricing.
            </p>
            <form onSubmit={handleInquiry} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#8C827A] mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    maxLength={60}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="e.g. Imran Shaikh"
                    className="w-full bg-[#FAF7F2] border border-[#EAE4DC] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#B84A1C]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#8C827A] mb-1.5">
                    10-Digit Mobile
                  </label>
                  <input
                    type="tel"
                    required
                    maxLength={15}
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="98XXXXXXXX"
                    className="w-full bg-[#FAF7F2] border border-[#EAE4DC] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#B84A1C]"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#8C827A] mb-1.5">
                    Delivery Area
                  </label>
                  <select
                    value={form.area}
                    onChange={(e) => setForm({ ...form, area: e.target.value })}
                    className="w-full bg-[#FAF7F2] border border-[#EAE4DC] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#B84A1C]"
                  >
                    {LOCATIONS.map((loc) => (
                      <option key={loc.slug} value={loc.name}>{loc.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#8C827A] mb-1.5">
                    Group Size
                  </label>
                  <select
                    value={form.guests}
                    onChange={(e) => setForm({ ...form, guests: e.target.value })}
                    className="w-full bg-[#FAF7F2] border border-[#EAE4DC] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#B84A1C]"
                  >
                    <option>8–15 Guests</option>
                    <option>15–30 Guests</option>
                    <option>30–50 Guests</option>
                    <option>50+ Guests</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#8C827A] mb-1.5">
                  Dishes, Date &amp; Slot Preference
                </label>
                <textarea
                  rows={3}
                  maxLength={400}
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  placeholder="e.g. Saturday 8 PM dinner in Kharghar Sector 12 — 6kg Chicken Keema + 60 Ladi Pav"
                  className="w-full bg-[#FAF7F2] border border-[#EAE4DC] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#B84A1C] resize-none"
                />
              </div>

              <button type="submit" className="btn-primary w-full py-3.5 text-xs uppercase tracking-wider cursor-pointer">
                <span>Send Party Inquiry on WhatsApp</span>
                <FaArrowRight size={10} />
              </button>
            </form>
          </div>

          <div className="lg:col-span-5 bg-white border border-[#EAE4DC] rounded-3xl p-6 sm:p-8 space-y-5">
            <h2 className="text-xl font-heading text-[#181411]">
              Areas We Deliver Bulk Orders To
            </h2>
            <p className="text-xs sm:text-sm text-[#574F4A] leading-relaxed">
              Dispatched hot directly from our Sector 11, Taloja Phase 1 kitchen with zero middleman markups.
            </p>
            <ul className="space-y-2.5 text-xs">
              {LOCATIONS.map((loc) => (
                <li key={loc.slug}>
                  <Link
                    to={`/${loc.slug}/`}
                    className="flex items-center justify-between p-3 rounded-xl bg-[#FAF7F2] border border-[#EAE4DC] hover:border-[#B84A1C] transition-colors"
                  >
                    <span className="font-semibold text-[#181411]">{loc.name}</span>
                    <span className="text-[#574F4A]">{loc.deliveryTime} mins</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Party FAQs */}
        <section className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-heading text-[#181411] text-center mb-6">
            Party &amp; Bulk Order FAQs
          </h2>
          <div className="space-y-3">
            {PARTY_FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="bg-white border border-[#EAE4DC] rounded-2xl overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    className="w-full px-5 py-4 flex items-center justify-between text-left gap-4 cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-bold font-heading text-[#181411]">
                      {faq.question}
                    </span>
                    <FaChevronDown
                      size={11}
                      className={`text-[#8C827A] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#B84A1C]' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-[#574F4A] leading-relaxed border-t border-[#EAE4DC]/70">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </section>
  );
};

export default PartyOrders;
