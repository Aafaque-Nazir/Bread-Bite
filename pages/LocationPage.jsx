import React, { useState, useMemo } from 'react';
import { useLocation, NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaWhatsapp, FaMapMarkerAlt, FaClock, FaChevronDown, FaArrowRight,
  FaMotorcycle, FaCheckCircle, FaPlus, FaMinus, FaTrash, FaFire, FaUtensils
} from 'react-icons/fa';
import SEO from '../src/components/SEO';
import { useCart } from '../src/context/CartContext';
import { useKitchenStatus } from '../src/hooks/useKitchenStatus';
import ImageWithLoader from '../src/components/ImageWithLoader';
import menuItems from '../data/MenuItems';
import { LOCATIONS, getLocationBySlug } from '../data/locations';

/**
 * LocationPage — Reusable, SEO-optimized landing page for each delivery area.
 * Reads the current URL slug to determine which location data to render.
 * Each location has unique content, FAQs, landmarks, and cross-links.
 */
const LocationPage = () => {
  const { pathname } = useLocation();
  const slug = pathname.replace(/^\/|\/$/g, '');
  const location = getLocationBySlug(slug);

  const { addToCart, updateQuantity, cart } = useCart();
  const { isOpen: isKitchenOpen } = useKitchenStatus();
  const [openFaq, setOpenFaq] = useState(null);

  // Get bestseller items to showcase
  const bestsellers = useMemo(() => {
    return menuItems.filter(item => item.isBestSeller).slice(0, 4);
  }, []);

  const freeThreshold = location?.pricing?.freeAbove || (
    location?.slug === 'taloja' ? 299 :
    ['kharghar', 'kamothe', 'kalamboli'].includes(location?.slug) ? 399 : 699
  );

  // If location not found, show a minimal fallback
  if (!location) {
    return (
      <section className="min-h-screen bg-[#FAF7F2] flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#181411] font-heading mb-3">Location Not Found</h1>
          <p className="text-[#574F4A] mb-6">We couldn't find delivery information for this area.</p>
          <NavLink to="/" className="btn-primary py-3 px-6 text-xs uppercase tracking-wider font-bold">
            Return Home
          </NavLink>
        </div>
      </section>
    );
  }

  const whatsappLink = isKitchenOpen
    ? `https://wa.me/919325629256?text=${encodeURIComponent(`Hi, I want to order food for delivery to ${location.name}!`)}`
    : `https://wa.me/919325629256?text=${encodeURIComponent(`Hi Bread & Bite, I have an inquiry about delivery to ${location.name}.`)}`;

  const nearbyLocations = location.nearbyLocations
    .map(s => LOCATIONS.find(l => l.slug === s))
    .filter(Boolean);

  // Store preferred delivery city for checkout
  React.useEffect(() => {
    if (typeof window !== 'undefined' && location?.slug) {
      const cityMap = {
        taloja: 'taloja',
        kharghar: 'kharghar',
        kamothe: 'kamothe',
        kalamboli: 'kalamboli',
        panvel: 'panvel',
        'cbd-belapur': 'belapur',
        belapur: 'belapur'
      };
      const city = cityMap[location.slug] || 'taloja';
      try {
        sessionStorage.setItem('preferred_delivery_city', city);
        sessionStorage.setItem('preferred_delivery_zone', city);
      } catch {
        // ignore
      }
    }
  }, [location?.slug]);

  const fadeIn = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } }
  };

  const stagger = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08 } }
  };

  // Breadcrumbs for this location page
  const breadcrumbs = [
    { name: location.name, path: `/${location.slug}/` }
  ];

  return (
    <>
      <SEO
        title={location.title}
        description={location.description}
        url={`/${location.slug}/`}
        keywords={location.keywords}
        breadcrumbs={breadcrumbs}
        faqs={location.faqs}
      />

      {/* ═══════════════════════════════════════════════════
          HERO — Location-specific
      ═══════════════════════════════════════════════════ */}
      <section className="relative bg-[#FAF7F2] pt-8 sm:pt-12 pb-14 sm:pb-20 px-4 sm:px-6 border-b border-[#EAE4DC]">
        <div className="max-w-5xl mx-auto">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-1.5 text-xs text-[#8C827A]">
              <li>
                <NavLink to="/" className="hover:text-[#B84A1C] transition-colors">Home</NavLink>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-[#181411] font-semibold">{location.name} Delivery</li>
            </ol>
          </nav>

          <motion.div
            initial="hidden"
            animate="show"
            variants={stagger}
            className="text-center"
          >
            <motion.p
              variants={fadeIn}
              className="text-[11px] sm:text-xs uppercase tracking-[0.2em] font-bold text-[#B84A1C] mb-3"
            >
              Navi Mumbai · {location.deliveryTime} Min Doorstep Delivery
            </motion.p>

            <motion.h1
              variants={fadeIn}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#181411] font-heading tracking-tight leading-tight mb-4"
            >
              Food Delivery in{' '}
              <span className="font-italic-accent text-[#B84A1C]">{location.name}</span>
            </motion.h1>

            <motion.p
              variants={fadeIn}
              className="text-sm sm:text-base text-[#574F4A] max-w-2xl mx-auto leading-relaxed mb-3"
            >
              {location.heroTagline}
            </motion.p>

            <motion.p
              variants={fadeIn}
              className="text-xs sm:text-sm text-[#8C827A] max-w-2xl mx-auto leading-relaxed mb-8"
            >
              {location.heroSubtitle}
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
              <a
                href={whatsappLink}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="btn-primary py-3.5 px-8 text-xs uppercase tracking-wider font-bold shadow-tactile-md justify-center"
              >
                <FaWhatsapp size={16} />
                <span>{isKitchenOpen ? `Order to ${location.name}` : 'Inquire on WhatsApp'}</span>
              </a>
              <NavLink
                to="/menu/"
                className="btn-outline py-3.5 px-7 text-xs uppercase tracking-wider font-bold justify-center"
              >
                <span>Explore Full Menu</span>
              </NavLink>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          DELIVERY & CART COSTING — Transparent & Grounded
      ═══════════════════════════════════════════════════ */}
      <section className="py-12 sm:py-16 bg-white border-b border-[#EAE4DC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#B84A1C] block mb-2">
              Transparent Pricing
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#181411] font-heading tracking-tight mb-2">
              Delivery & Cart Costing for {location.name}
            </h2>
            <p className="text-xs sm:text-sm text-[#574F4A] leading-relaxed">
              No packaging charges, surge prices, or hidden fees. Cooked fresh in our Taloja Phase 1 kitchen and delivered hot to your doorstep.
            </p>
          </div>

          {/* 3 Core Delivery Terms */}
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#EAE4DC] border border-[#EAE4DC] rounded-2xl bg-[#FAF7F2] mb-8 overflow-hidden">
            <div className="p-5 sm:p-6 text-center">
              <span className="text-[11px] uppercase tracking-wider font-semibold text-[#8C827A] block mb-1">
                Minimum Order
              </span>
              <span className="text-2xl sm:text-3xl font-bold text-[#181411] font-heading block">
                ₹{location.pricing?.minOrder}
              </span>
              <span className="text-xs text-[#574F4A] mt-1 block">
                Smallest order for delivery
              </span>
            </div>

            <div className="p-5 sm:p-6 text-center">
              <span className="text-[11px] uppercase tracking-wider font-semibold text-[#8C827A] block mb-1">
                Delivery Fee
              </span>
              <span className="text-2xl sm:text-3xl font-bold text-[#B84A1C] font-heading block">
                ₹{location.pricing?.deliveryFee}
              </span>
              <span className="text-xs text-[#574F4A] mt-1 block">
                On orders below ₹{location.pricing?.freeAbove}
              </span>
            </div>

            <div className="p-5 sm:p-6 text-center">
              <span className="text-[11px] uppercase tracking-wider font-semibold text-[#8C827A] block mb-1">
                Free Delivery
              </span>
              <span className="text-2xl sm:text-3xl font-bold text-[#181411] font-heading block">
                ₹{location.pricing?.freeAbove}+
              </span>
              <span className="text-xs text-[#574F4A] mt-1 block">
                Free doorstep delivery
              </span>
            </div>
          </div>

          {/* How the Cart Calculates Your Bill */}
          <div className="border border-[#EAE4DC] rounded-2xl p-6 sm:p-8 bg-white">
            <h3 className="text-base sm:text-lg font-bold text-[#181411] font-heading mb-1.5">
              How Your Cart Calculates the Bill
            </h3>
            <p className="text-xs sm:text-sm text-[#574F4A] mb-6">
              When you select <span className="font-semibold text-[#181411]">{location.name}</span> in the cart or checkout, your bill is calculated automatically based on your order subtotal:
            </p>

            <div className="grid md:grid-cols-2 gap-5">
              {/* Below Free Delivery Limit */}
              <div className="p-5 rounded-xl bg-[#FAF7F2] border border-[#EAE4DC]">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#EAE4DC]">
                  <span className="text-xs font-bold text-[#181411]">
                    Orders below ₹{location.pricing?.freeAbove}
                  </span>
                  <span className="text-xs text-[#574F4A]">
                    ₹{location.pricing?.deliveryFee} delivery
                  </span>
                </div>
                <div className="space-y-2 text-xs text-[#574F4A] mb-4">
                  <div className="flex justify-between">
                    <span>{location.pricing?.standardOrderName}</span>
                    <span className="text-[#181411] font-medium">₹{location.pricing?.standardSubtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery Fee ({location.name})</span>
                    <span className="text-[#B84A1C] font-medium">+₹{location.pricing?.deliveryFee}</span>
                  </div>
                  <div className="flex justify-between text-[#8C827A]">
                    <span>Packaging & Taxes</span>
                    <span>₹0 (Included)</span>
                  </div>
                </div>
                <div className="pt-3 border-t border-[#EAE4DC] flex justify-between items-center text-sm font-bold text-[#181411]">
                  <span>Total Amount</span>
                  <span className="text-base">₹{location.pricing?.standardTotal}</span>
                </div>
              </div>

              {/* Free Delivery Unlocked */}
              <div className="p-5 rounded-xl bg-[#FAF7F2] border border-[#EAE4DC]">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#EAE4DC]">
                  <span className="text-xs font-bold text-[#181411]">
                    Orders ₹{location.pricing?.freeAbove} and above
                  </span>
                  <span className="text-xs font-semibold text-[#B84A1C]">
                    Free Delivery
                  </span>
                </div>
                <div className="space-y-2 text-xs text-[#574F4A] mb-4">
                  <div className="flex justify-between">
                    <span>{location.pricing?.freeOrderName}</span>
                    <span className="text-[#181411] font-medium">₹{location.pricing?.freeSubtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery Fee ({location.name})</span>
                    <span className="text-[#181411] font-medium">₹0 (Free)</span>
                  </div>
                  <div className="flex justify-between text-[#8C827A]">
                    <span>Packaging & Taxes</span>
                    <span>₹0 (Included)</span>
                  </div>
                </div>
                <div className="pt-3 border-t border-[#EAE4DC] flex justify-between items-center text-sm font-bold text-[#181411]">
                  <span>Total Amount</span>
                  <span className="text-base">₹{location.pricing?.freeTotal}</span>
                </div>
              </div>
            </div>

            <p className="text-xs text-[#8C827A] mt-5 pt-4 border-t border-[#EAE4DC]/70 leading-relaxed">
              <span className="font-semibold text-[#574F4A]">Delivery Tip:</span> {location.pricing?.tip}
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          ABOUT THIS AREA — Crisp & Food-First
      ═══════════════════════════════════════════════════ */}
      <section className="py-12 sm:py-16 bg-[#FAF7F2] border-b border-[#EAE4DC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-xl mx-auto mb-9">
            <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#B84A1C] block mb-2">
              Fresh & Homestyle
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#181411] font-heading tracking-tight">
              Cooked Fresh for {location.name}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {location.sections.map((section, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#EAE4DC] p-6"
              >
                <h3 className="text-base font-bold text-[#181411] font-heading mb-2">
                  {section.heading}
                </h3>
                <p className="text-xs sm:text-sm text-[#574F4A] leading-relaxed">
                  {section.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          BESTSELLERS — Menu highlights with Add to Cart
      ═══════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-20 bg-[#FAF7F2] border-b border-[#EAE4DC]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#B84A1C] block mb-2">
              Popular in {location.name}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#181411] font-heading tracking-tight">
              Most Ordered <span className="font-italic-accent text-[#B84A1C]">Dishes</span>
            </h2>
          </div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {bestsellers.map((item) => {
              const cartItem = cart.find(c => c.id === item.id);
              const qty = cartItem ? cartItem.quantity : 0;

              return (
                <motion.div
                  key={item.id}
                  variants={fadeIn}
                  className="artisan-card rounded-2xl overflow-hidden group"
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <ImageWithLoader
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {item.isBestSeller && (
                      <span className="absolute top-2.5 left-2.5 bg-[#B84A1C] text-white text-[9px] font-bold uppercase tracking-wider px-2 py-1 rounded-full flex items-center gap-1">
                        <FaFire size={8} /> Bestseller
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <h3 className="text-sm font-bold text-[#181411] mb-1 line-clamp-1">{item.name}</h3>
                    <p className="text-[11px] text-[#574F4A] leading-relaxed mb-3 line-clamp-2">{item.description}</p>

                    <div className="flex items-center justify-between">
                      <span className="text-base font-bold text-[#B84A1C]">₹{item.price}</span>

                      {qty === 0 ? (
                        <button
                          onClick={() => addToCart(item)}
                          className="flex items-center gap-1.5 bg-[#B84A1C] text-white text-[10px] font-bold uppercase tracking-wider px-3.5 py-2 rounded-full hover:bg-[#9A3D15] transition-colors cursor-pointer active:scale-95 shadow-2xs"
                        >
                          <FaPlus size={8} /> Add
                        </button>
                      ) : (
                        <div className="flex items-center gap-2 bg-[#F4EFE6] rounded-full px-1.5 py-1 border border-[#EAE4DC]">
                          <button
                            onClick={() => updateQuantity(item.id, qty - 1)}
                            className="w-6 h-6 rounded-full bg-white border border-[#EAE4DC] flex items-center justify-center text-[#574F4A] hover:text-[#B84A1C] transition-colors"
                          >
                            {qty === 1 ? <FaTrash size={8} /> : <FaMinus size={8} />}
                          </button>
                          <span className="text-xs font-bold text-[#181411] w-4 text-center">{qty}</span>
                          <button
                            onClick={() => updateQuantity(item.id, qty + 1)}
                            className="w-6 h-6 rounded-full bg-[#B84A1C] text-white flex items-center justify-center hover:bg-[#9A3D15] transition-colors"
                          >
                            <FaPlus size={8} />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          <div className="text-center mt-8">
            <NavLink
              to="/menu/"
              className="btn-outline py-3 px-7 text-xs uppercase tracking-wider font-bold inline-flex items-center gap-2"
            >
              View Complete Menu <FaArrowRight size={10} />
            </NavLink>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          DELIVERY INFO — Coverage, landmarks, timing
      ═══════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-20 bg-white border-b border-[#EAE4DC]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#B84A1C] block mb-2">
              Delivery Details
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#181411] font-heading tracking-tight">
              Delivering to <span className="font-italic-accent text-[#B84A1C]">{location.name}</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Info Card */}
            <div className="artisan-card rounded-2xl p-6 space-y-5">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#FFF5F0] border border-[#FDDCC8] flex items-center justify-center shrink-0">
                  <FaMotorcycle className="text-[#B84A1C]" size={15} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#181411] mb-1">Delivery Time</h3>
                  <p className="text-xs text-[#574F4A]">{location.deliveryTime} minutes from our Taloja Phase 1 kitchen</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#F0F8F4] border border-[#C8E6D5] flex items-center justify-center shrink-0">
                  <FaMapMarkerAlt className="text-[#2A6A4E]" size={15} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#181411] mb-1">Coverage Area</h3>
                  <p className="text-xs text-[#574F4A]">{location.coverageDetail}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#F5F3FF] border border-[#DDD6FE] flex items-center justify-center shrink-0">
                  <FaClock className="text-[#7C3AED]" size={15} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#181411] mb-1">Kitchen Hours</h3>
                  <p className="text-xs text-[#574F4A]">2 Daily Slots: 11:00 AM – 3:15 PM & 7:00 PM – 9:15 PM IST. Order on WhatsApp or via our website.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#FFFBEB] border border-[#FDE68A] flex items-center justify-center shrink-0">
                  <FaCheckCircle className="text-[#D97706]" size={15} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#181411] mb-1">Free Delivery</h3>
                  <p className="text-xs text-[#574F4A]">Free delivery on orders of ₹{freeThreshold}+ to {location.name} (Min order ₹{location.pricing?.minOrder || 199}).</p>
                </div>
              </div>
            </div>

            {/* Landmarks */}
            <div className="artisan-card rounded-2xl p-6">
              <h3 className="text-sm font-bold text-[#181411] mb-4 flex items-center gap-2">
                <FaMapMarkerAlt className="text-[#B84A1C]" size={13} />
                Key Landmarks We Deliver Near
              </h3>
              <div className="flex flex-wrap gap-2">
                {location.landmarks.map((landmark) => (
                  <span
                    key={landmark}
                    className="bg-[#F4EFE6] border border-[#EAE4DC] text-[#574F4A] text-[11px] font-medium px-3 py-1.5 rounded-lg"
                  >
                    {landmark}
                  </span>
                ))}
              </div>

              {/* Map Embed */}
              <div className="mt-5 rounded-xl overflow-hidden border border-[#EAE4DC] aspect-[16/9]">
                <iframe
                  title={`${location.name} delivery area map`}
                  src={`https://www.google.com/maps?q=${location.mapEmbedQuery}&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          FAQs — Location-specific
      ═══════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-20 bg-[#FAF7F2] border-b border-[#EAE4DC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#B84A1C] block mb-2">
              {location.name} Delivery FAQ
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#181411] font-heading tracking-tight">
              Frequently Asked <span className="font-italic-accent text-[#B84A1C]">Questions</span>
            </h2>
          </div>

          <div className="space-y-3.5">
            {location.faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-[#EAE4DC] bg-white overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full py-4 sm:py-5 px-5 sm:px-6 flex items-center justify-between text-left gap-4 cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base font-bold text-[#181411] font-heading">
                      {faq.question}
                    </span>
                    <span
                      className={`w-7 h-7 rounded-full bg-[#FAF7F2] border border-[#EAE4DC] flex items-center justify-center shrink-0 text-xs text-[#574F4A] transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-[#B84A1C]' : ''
                      }`}
                    >
                      <FaChevronDown size={10} />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-[#574F4A] leading-relaxed border-t border-[#EAE4DC]/60">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          NEARBY AREAS — Cross-linking
      ═══════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-20 bg-white border-b border-[#EAE4DC]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-[#181411] font-heading tracking-tight">
              Also Delivering to <span className="font-italic-accent text-[#B84A1C]">Nearby Areas</span>
            </h2>
            <p className="text-xs text-[#574F4A] mt-2">
              Bread & Bite delivers hot meals across Navi Mumbai — explore our other delivery zones.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-5">
            {nearbyLocations.map((nearby) => (
              <NavLink
                key={nearby.slug}
                to={`/${nearby.slug}/`}
                className="group artisan-card rounded-2xl p-5 sm:p-6 bg-white hover:border-[#B84A1C] hover:shadow-tactile-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="font-heading text-lg sm:text-xl font-bold text-[#181411] group-hover:text-[#B84A1C] transition-colors">
                      {nearby.name}
                    </h3>
                    <span className="text-xs font-semibold text-[#2A6A4E]">
                      {nearby.deliveryTime} mins
                    </span>
                  </div>

                  <p className="text-xs text-[#574F4A] leading-relaxed mb-3">
                    {nearby.heroTagline}
                  </p>

                  <p className="text-xs text-[#8C827A] leading-normal">
                    <span className="font-medium text-[#574F4A]">Areas:</span> {nearby.landmarks?.slice(0, 3).join(', ')}
                  </p>
                </div>

                <div className="pt-4 mt-5 border-t border-[#EAE4DC] flex items-center justify-between text-xs font-bold text-[#B84A1C]">
                  <span>View Menu & Delivery</span>
                  <FaArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </NavLink>
            ))}
          </div>

          {/* Link to all areas */}
          <div className="text-center mt-6">
            <p className="text-xs text-[#8C827A]">
              We also deliver to{' '}
              {LOCATIONS.filter(l => l.slug !== location.slug && !location.nearbyLocations.includes(l.slug))
                .map((l, i, arr) => (
                  <React.Fragment key={l.slug}>
                    <NavLink to={`/${l.slug}/`} className="text-[#B84A1C] hover:underline font-semibold">
                      {l.name}
                    </NavLink>
                    {i < arr.length - 1 ? ', ' : ''}
                  </React.Fragment>
                ))
              }
              {' '}and more areas across Navi Mumbai.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          FINAL CTA
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 bg-[#FAF7F2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#B84A1C] block mb-2">
            Hungry in {location.name}?
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#181411] font-heading tracking-tight mb-3 leading-tight">
            Order your meal on <span className="font-italic-accent text-[#B84A1C]">WhatsApp.</span>
          </h2>
          <p className="text-[#574F4A] text-xs sm:text-sm max-w-xl mx-auto mb-8 leading-relaxed">
            Direct kitchen ordering for fast delivery to {location.name}. Live order confirmation, custom instructions, and real-time updates.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
            <a
              href={whatsappLink}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="btn-primary py-3.5 px-8 text-xs uppercase tracking-wider font-bold shadow-tactile-md justify-center"
            >
              <FaWhatsapp size={16} />
              <span>Order on WhatsApp</span>
            </a>
            <NavLink
              to="/menu/"
              className="btn-outline py-3.5 px-7 text-xs uppercase tracking-wider font-bold justify-center"
            >
              <span>Explore Full Menu</span>
            </NavLink>
          </div>

          <p className="text-[11px] text-[#8C827A] mt-6">
            Daily slots: 11:00 AM – 3:15 PM & 7:00 PM – 9:15 PM · Free delivery on ₹{freeThreshold}+ to {location.name}
          </p>
        </div>
      </section>
    </>
  );
};

export default LocationPage;
