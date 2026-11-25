import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown, FaArrowRight, FaCheckCircle, FaWhatsapp, FaMinus, FaPlus } from 'react-icons/fa';
import SEO from '../src/components/SEO';
import {
  PARTY_RULES,
  PARTY_STYLES,
  PARTY_PACKAGES,
  PARTY_FAQS,
  STATIC_ROUTES_META,
  calculatePartyEstimate
} from '../data/seoConfig';
import {
  DELIVERY_CITIES,
  getInitialPreferredCity,
  savePreferredCity
} from '../data/deliveryCities';
import { LOCATIONS } from '../data/locations';
import {
  sanitizeText,
  sanitizePhone,
  isValidIndianPhone,
  sanitizeSafeUrl,
  safeParseJSON
} from '../src/utils/security';
import toast from 'react-hot-toast';

const PARTY_META = STATIC_ROUTES_META['/party-orders/'];
const GUEST_PRESETS = [8, 15, 25, 40, 60, 100];

const PartyOrders = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const [guests, setGuests] = useState(15);
  const [styleId, setStyleId] = useState('keema-pav');
  const [extraRoti, setExtraRoti] = useState(false);

  const [cartDraft, setCartDraft] = useState(() => {
    if (typeof window === 'undefined') return null;
    try {
      const raw = sessionStorage.getItem('bread_and_bite_party_draft');
      return safeParseJSON(raw, null, (d) => d && typeof d === 'object' && Array.isArray(d.items) && d.items.length > 0);
    } catch {
      return null;
    }
  });

  const [form, setForm] = useState(() => ({
    name: cartDraft?.customerName || '',
    phone: cartDraft?.customerPhone || '',
    city: cartDraft?.city || getInitialPreferredCity('kharghar'),
    eventDate: '',
    eventSlot: 'Dinner Slot (7:00 PM – 10:15 PM)',
    notes: ''
  }));
  const [submittedUrl, setSubmittedUrl] = useState('');

  useEffect(() => {
    savePreferredCity(form.city);
  }, [form.city]);

  const selectedCity = DELIVERY_CITIES[form.city] || DELIVERY_CITIES.kharghar;
  const estimate = useMemo(
    () => calculatePartyEstimate({ guests, styleId, extraRotiPerGuest: extraRoti }),
    [guests, styleId, extraRoti]
  );

  const clearCartDraft = () => {
    setCartDraft(null);
    try {
      sessionStorage.removeItem('bread_and_bite_party_draft');
    } catch {
      // ignore
    }
  };

  const handleInquiry = (e) => {
    e.preventDefault();
    const cleanName = sanitizeText(form.name, 60);
    const cleanPhone = sanitizePhone(form.phone);
    const cleanDate = sanitizeText(form.eventDate, 60);
    const cleanNotes = sanitizeText(form.notes, 400);

    if (cleanName.length < 2) {
      toast.error('Please enter your name');
      return;
    }
    if (!isValidIndianPhone(cleanPhone)) {
      toast.error('Please enter a valid 10-digit mobile number');
      return;
    }

    const activeStyle = PARTY_STYLES.find((s) => s.id === styleId) || PARTY_STYLES[0];
    const itemsSection = cartDraft
      ? `*Items Carried From Cart (Subtotal ₹${cartDraft.cartTotal}):*\n${cartDraft.items.map((i) => `• ${sanitizeText(i.name, 60)} (x${i.quantity}) - ₹${i.price * i.quantity}`).join('\n')}`
      : `*Estimated Package:* ${activeStyle.shortLabel} for ${estimate.guests} guests (${estimate.portions} main portions · ${estimate.totalGravyKg} kg gravy)\n${estimate.breakdownLines.map((line) => `• ${line}`).join('\n')}\n*Menu Reference Total:* ₹${estimate.menuEstimate.toLocaleString('en-IN')} (Free Delivery to ${selectedCity.shortName})`;

    const msg = `PARTY / BULK QUOTE REQUEST — BREAD & BITE\n\n*Customer:* ${cleanName}\n*Phone:* +91 ${cleanPhone}\n*Delivery Area:* ${selectedCity.name} (${selectedCity.time})\n*Event Date:* ${cleanDate || 'To be confirmed'}\n*Preferred Slot:* ${form.eventSlot}\n\n${itemsSection}\n\n*Notes:* ${cleanNotes || 'Please share final bulk quote & confirmation.'}`;

    const url = sanitizeSafeUrl(
      `https://wa.me/919325629256?text=${encodeURIComponent(msg)}`,
      'https://wa.me/919325629256'
    );
    setSubmittedUrl(url);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="min-h-screen bg-[#FAF7F2] text-[#181411] pt-8 sm:pt-12 pb-24 px-4 sm:px-6">
      <SEO
        title={PARTY_META.title}
        description={PARTY_META.description}
        url="/party-orders/"
        keywords={PARTY_META.keywords}
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

        <header className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#B84A1C] block mb-2">
            Separate Bulk Quote · Direct Kitchen Pricing
          </span>
          <h1 className="text-3xl sm:text-5xl font-heading text-[#181411] leading-tight mb-4">
            Party &amp; Bulk Chicken Orders in <span className="font-italic-accent text-[#B84A1C]">Navi Mumbai</span>
          </h1>
          <p className="text-sm sm:text-base text-[#574F4A] leading-relaxed">
            Dedicated kitchen planning for 5+ portions (8–100+ guests). Order direct with zero aggregator fees, zero packaging charges, and free doorstep delivery across all 6 Navi Mumbai areas.
          </p>
        </header>

        {/* Why Separate Quote Benefits Both Customer & Kitchen */}
        <section className="grid sm:grid-cols-3 gap-4 mb-12">
          <div className="bg-white border border-[#EAE4DC] rounded-2xl p-5">
            <h2 className="text-base font-bold font-heading text-[#181411] mb-1.5">
              Direct Kitchen Rates
            </h2>
            <p className="text-xs text-[#574F4A] leading-relaxed">
              Save app commissions, surge charges, and packaging fees. All party quotes (₹1,095+) include ₹0 doorstep delivery.
            </p>
          </div>
          <div className="bg-white border border-[#EAE4DC] rounded-2xl p-5">
            <h2 className="text-base font-bold font-heading text-[#181411] mb-1.5">
              Fresh Morning Sourcing
            </h2>
            <p className="text-xs text-[#574F4A] leading-relaxed">
              We source fresh 100% Halal chicken and bakery pavs to your exact headcount — 3 hrs notice (up to 15 portions) or 24 hrs (16+ portions).
            </p>
          </div>
          <div className="bg-white border border-[#EAE4DC] rounded-2xl p-5">
            <h2 className="text-base font-bold font-heading text-[#181411] mb-1.5">
              Scheduled Hot Dispatch
            </h2>
            <p className="text-xs text-[#574F4A] leading-relaxed">
              Food is cooked right before your event slot and packed in heavy sealed 500g tubs with insulated breads.
            </p>
          </div>
        </section>

        {/* Interactive Portion & Quote Estimator */}
        <section className="bg-white border border-[#EAE4DC] rounded-3xl p-6 sm:p-8 mb-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-5 mb-6 border-b border-[#EAE4DC]">
            <div>
              <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#B84A1C] block mb-1">
                Party Portion Planner
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading text-[#181411]">
                Estimate Quantities &amp; Delivery
              </h2>
            </div>
            <Link to="/menu/" className="text-xs font-semibold text-[#B84A1C] hover:underline shrink-0">
              Ordering under 5 portions? Use Menu &amp; Cart →
            </Link>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Controls (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Guest Count */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#8C827A]">
                    Number of Guests (Min {PARTY_RULES.minGuests})
                  </label>
                  <div className="flex items-center border border-[#EAE4DC] rounded-xl bg-[#FAF7F2] p-0.5">
                    <button
                      type="button"
                      onClick={() => setGuests((g) => Math.max(PARTY_RULES.minGuests, g - 2))}
                      className="w-7 h-7 flex items-center justify-center text-[#574F4A] hover:text-[#B84A1C] cursor-pointer"
                      aria-label="Decrease guest count"
                    >
                      <FaMinus size={9} />
                    </button>
                    <span className="w-12 text-center text-sm font-bold text-[#181411]">
                      {guests}
                    </span>
                    <button
                      type="button"
                      onClick={() => setGuests((g) => Math.min(PARTY_RULES.maxGuests, g + 2))}
                      className="w-7 h-7 flex items-center justify-center text-[#574F4A] hover:text-[#B84A1C] cursor-pointer"
                      aria-label="Increase guest count"
                    >
                      <FaPlus size={9} />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {GUEST_PRESETS.map((preset) => (
                    <button
                      type="button"
                      key={preset}
                      onClick={() => setGuests(preset)}
                      className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-colors cursor-pointer ${
                        guests === preset
                          ? 'bg-[#181411] text-white border-[#181411]'
                          : 'bg-[#FAF7F2] text-[#574F4A] border-[#EAE4DC] hover:border-[#B84A1C]'
                      }`}
                    >
                      {preset} Guests
                    </button>
                  ))}
                </div>
              </div>

              {/* Menu Style */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#8C827A] mb-2">
                  Select Menu Style
                </label>
                <div className="space-y-2.5">
                  {PARTY_STYLES.map((style) => (
                    <button
                      type="button"
                      key={style.id}
                      onClick={() => setStyleId(style.id)}
                      className={`w-full text-left p-4 rounded-2xl border transition-colors cursor-pointer ${
                        styleId === style.id
                          ? 'bg-[#FDF3ED] border-[#B84A1C]'
                          : 'bg-[#FAF7F2] border-[#EAE4DC] hover:border-[#D9D1C7]'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-sm font-bold font-heading text-[#181411]">
                          {style.label}
                        </span>
                        <span className={`text-xs font-semibold ${styleId === style.id ? 'text-[#B84A1C]' : 'text-[#8C827A]'}`}>
                          {styleId === style.id ? 'Selected' : 'Select'}
                        </span>
                      </div>
                      <p className="text-xs text-[#574F4A] mt-1">{style.note}</p>
                    </button>
                  ))}
                </div>

                {styleId === 'korma-roti' && (
                  <label className="flex items-center gap-2.5 mt-3 text-xs text-[#574F4A] cursor-pointer">
                    <input
                      type="checkbox"
                      checked={extraRoti}
                      onChange={(e) => setExtraRoti(e.target.checked)}
                      className="accent-[#B84A1C]"
                    />
                    <span>Add 1 extra Tandoori Roti per guest (2 rotis per person total · +₹30/guest)</span>
                  </label>
                )}
              </div>
            </div>

            {/* Live Estimate Summary (5 cols) */}
            <div className="lg:col-span-5 bg-[#181411] text-[#EAE4DC] rounded-2xl p-6 space-y-4">
              <div className="pb-3 border-b border-white/10">
                <span className="text-[11px] uppercase tracking-wider text-[#A89E94] font-semibold block">
                  Recommended Kitchen Plan
                </span>
                <p className="text-xl font-heading text-white mt-0.5">
                  {estimate.guests} Guests · {estimate.portions} Portions ({estimate.totalGravyKg} kg)
                </p>
              </div>

              <ul className="space-y-1.5 text-xs text-[#EAE4DC]">
                {estimate.breakdownLines.map((line, idx) => (
                  <li key={idx}>• {line}</li>
                ))}
              </ul>

              <div className="pt-3 border-t border-white/10 space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-[#A89E94]">Standard Menu Reference</span>
                  <span className="text-white font-semibold">₹{estimate.menuEstimate.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#A89E94]">Delivery to {selectedCity.shortName}</span>
                  <span className="text-white font-semibold">₹0 (Free above ₹{selectedCity.freeAbove})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#A89E94]">Packaging &amp; App Fees</span>
                  <span className="text-white font-semibold">₹0</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-white/10">
                  <span className="text-[#A89E94]">Notice Required</span>
                  <span className="text-white font-semibold">{estimate.noticeLabel}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#A89E94]">Booking Payment</span>
                  <span className="text-white font-semibold">
                    {estimate.needsAdvanceToken ? 'Small UPI token after quote' : 'Cash / UPI on delivery'}
                  </span>
                </div>
              </div>

              <p className="text-[11px] text-[#A89E94] leading-relaxed">
                Final custom quote is confirmed on WhatsApp based on exact dish mix and event timing.
              </p>
            </div>
          </div>
        </section>

        {/* Reference Party Packages */}
        <section className="grid md:grid-cols-3 gap-6 mb-14">
          {PARTY_PACKAGES.map((pkg) => (
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

        {/* Inquiry Form + Areas & Terms */}
        <div className="grid lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-7 bg-white border border-[#EAE4DC] rounded-3xl p-6 sm:p-8">
            {cartDraft && (
              <div className="mb-6 p-4 rounded-2xl bg-[#FAF7F2] border border-[#EAE4DC] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#B84A1C] block">
                    Carried From Your Cart ({cartDraft.items.reduce((s, i) => s + i.quantity, 0)} items · ₹{cartDraft.cartTotal})
                  </span>
                  <p className="text-xs text-[#574F4A] mt-0.5">
                    Your selected Cart items will be attached automatically to this WhatsApp quote request.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={clearCartDraft}
                  className="text-xs font-semibold text-[#8C827A] hover:text-[#181411] underline shrink-0 self-start sm:self-center cursor-pointer"
                >
                  Use Estimator Instead
                </button>
              </div>
            )}

            {!submittedUrl ? (
              <>
                <h2 className="text-2xl font-heading text-[#181411] mb-2">
                  Request Your Custom Kitchen Quote
                </h2>
                <p className="text-xs sm:text-sm text-[#574F4A] mb-6">
                  Share your event date, slot, and Navi Mumbai area — our kitchen confirms availability and sends your final bulk quote on WhatsApp.
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
                        autoComplete="name"
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
                        autoComplete="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="98XXXXXXXX"
                        className="w-full bg-[#FAF7F2] border border-[#EAE4DC] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#B84A1C]"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#8C827A] mb-1.5">
                        Delivery Area
                      </label>
                      <select
                        value={form.city}
                        onChange={(e) => setForm({ ...form, city: e.target.value })}
                        className="w-full bg-[#FAF7F2] border border-[#EAE4DC] rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#B84A1C]"
                      >
                        {Object.values(DELIVERY_CITIES).map((c) => (
                          <option key={c.id} value={c.id}>{c.name}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#8C827A] mb-1.5">
                        Event Date
                      </label>
                      <input
                        type="text"
                        maxLength={40}
                        value={form.eventDate}
                        onChange={(e) => setForm({ ...form, eventDate: e.target.value })}
                        placeholder="e.g. Today / 28 Nov"
                        className="w-full bg-[#FAF7F2] border border-[#EAE4DC] rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#B84A1C]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#8C827A] mb-1.5">
                        Preferred Slot
                      </label>
                      <select
                        value={form.eventSlot}
                        onChange={(e) => setForm({ ...form, eventSlot: e.target.value })}
                        className="w-full bg-[#FAF7F2] border border-[#EAE4DC] rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#B84A1C]"
                      >
                        <option>Lunch Slot (11:15 AM – 3:30 PM)</option>
                        <option>Dinner Slot (7:00 PM – 10:15 PM)</option>
                        <option>Custom Event Timing</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#8C827A] mb-1.5">
                      Custom Dishes or Delivery Notes
                    </label>
                    <textarea
                      rows={3}
                      maxLength={400}
                      value={form.notes}
                      onChange={(e) => setForm({ ...form, notes: e.target.value })}
                      placeholder="e.g. Need mild spice level, extra Choco Lava Cakes, or exact sector/building landmark"
                      className="w-full bg-[#FAF7F2] border border-[#EAE4DC] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#B84A1C] resize-none"
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full py-3.5 text-xs uppercase tracking-wider cursor-pointer">
                    <span>Get Bulk Quote on WhatsApp</span>
                    <FaArrowRight size={10} />
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-8 space-y-4">
                <div className="w-14 h-14 bg-[#EEF6F2] text-[#2A6A4E] rounded-full flex items-center justify-center text-2xl mx-auto border border-[#2A6A4E]/30">
                  <FaCheckCircle />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#181411]">
                  Party Quote Request Ready
                </h2>
                <p className="text-xs sm:text-sm text-[#574F4A] max-w-sm mx-auto leading-relaxed">
                  Your quote request is formatted for our kitchen WhatsApp (+91 93256 29256). If WhatsApp did not open automatically, tap below:
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                  <a
                    href={submittedUrl}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="btn-primary py-3 px-6 text-xs uppercase font-bold"
                  >
                    <FaWhatsapp size={14} />
                    <span>Open WhatsApp Chat</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setSubmittedUrl('')}
                    className="btn-outline py-3 px-5 text-xs uppercase font-bold cursor-pointer"
                  >
                    Edit Quote Details
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-5 bg-white border border-[#EAE4DC] rounded-3xl p-6 sm:p-8 space-y-5">
            <div>
              <h2 className="text-xl font-heading text-[#181411] mb-1.5">
                Delivery Areas &amp; Kitchen Policy
              </h2>
              <p className="text-xs sm:text-sm text-[#574F4A] leading-relaxed">
                Dispatched hot from Sector 11, Taloja Phase 1. All party orders (₹1,095+) cross the ₹699+ threshold for ₹0 delivery across every area below.
              </p>
            </div>
            <ul className="space-y-2.5 text-xs">
              {LOCATIONS.map((loc) => (
                <li key={loc.slug}>
                  <Link
                    to={`/${loc.slug}/`}
                    className="flex items-center justify-between p-3 rounded-xl bg-[#FAF7F2] border border-[#EAE4DC] hover:border-[#B84A1C] transition-colors"
                  >
                    <span className="font-semibold text-[#181411]">{loc.name}</span>
                    <span className="text-[#574F4A]">{loc.deliveryTime} mins · Free above ₹{loc.pricing?.freeAbove}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="pt-3 border-t border-[#EAE4DC] text-xs text-[#574F4A] space-y-1.5">
              <p><strong className="text-[#181411]">Daily Slots:</strong> 11:15 AM – 3:30 PM &amp; 7:00 PM – 10:15 PM IST</p>
              <p><strong className="text-[#181411]">Advance Notice:</strong> 3 hrs (5–15 portions) · 24 hrs (16+ portions)</p>
              <p><strong className="text-[#181411]">Booking Terms:</strong> Cash / UPI on delivery; large quotes (₹3,000+) confirmed with advance UPI token</p>
            </div>
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
