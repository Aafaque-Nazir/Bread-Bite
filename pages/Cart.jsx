import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../src/context/CartContext';
import { FaTrash, FaMinus, FaPlus, FaWhatsapp, FaArrowLeft, FaShoppingBag, FaMapMarkerAlt, FaMotorcycle, FaClock, FaChevronDown } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useKitchenStatus } from '../src/hooks/useKitchenStatus';
import SEO from '../src/components/SEO';
import ImageWithLoader from '../src/components/ImageWithLoader';
import { sanitizeText, sanitizeSafeUrl, isValidIndianPhone, sanitizePhone } from '../src/utils/security';
export { sanitizePhone };

// 6 Individual Delivery Cities across Navi Mumbai
export const DELIVERY_CITIES = {
  taloja: {
    id: 'taloja',
    slug: 'taloja',
    name: 'Taloja Phase 1 & 2',
    shortName: 'Taloja',
    subLabel: 'Kitchen Base · 10–20m',
    time: '10–20 min',
    minOrder: 199,
    freeAbove: 299,
    fee: 39,
    keywords: ['taloja phase 1', 'taloja phase 2', 'taloja phase', 'taloja midc', 'panchanand', 'taloja 1', 'taloja 2', 'taloja']
  },
  kharghar: {
    id: 'kharghar',
    slug: 'kharghar',
    name: 'Kharghar',
    shortName: 'Kharghar',
    subLabel: '5–8 km · 20–30m',
    time: '20–30 min',
    minOrder: 249,
    freeAbove: 399,
    fee: 49,
    keywords: ['hiranandani', 'central park', 'utsav chowk', 'dy patil', 'oves', 'kharghar']
  },
  kamothe: {
    id: 'kamothe',
    slug: 'kamothe',
    name: 'Kamothe',
    shortName: 'Kamothe',
    subLabel: '5–8 km · 20–30m',
    time: '20–30 min',
    minOrder: 249,
    freeAbove: 399,
    fee: 49,
    keywords: ['mansarovar', 'khandeshwar', 'raghunath nagar', 'kamothe']
  },
  kalamboli: {
    id: 'kalamboli',
    slug: 'kalamboli',
    name: 'Kalamboli',
    shortName: 'Kalamboli',
    subLabel: '6–9 km · 25–35m',
    time: '25–35 min',
    minOrder: 249,
    freeAbove: 399,
    fee: 49,
    keywords: ['steel market', 'roadpali', 'furniture market', 'kalamboli']
  },
  panvel: {
    id: 'panvel',
    slug: 'panvel',
    name: 'Panvel (Old & New)',
    shortName: 'Panvel',
    subLabel: '10–14 km · 25–35m',
    time: '25–35 min',
    minOrder: 499,
    freeAbove: 699,
    fee: 79,
    keywords: ['new panvel', 'old panvel', 'khanda colony', 'palaspe', 'orion mall', 'panvel']
  },
  belapur: {
    id: 'belapur',
    slug: 'cbd-belapur',
    name: 'CBD Belapur',
    shortName: 'CBD Belapur',
    subLabel: '12–15 km · 30–40m',
    time: '30–40 min',
    minOrder: 499,
    freeAbove: 699,
    fee: 79,
    keywords: ['cbd belapur', 'artist village', 'kille gaothan', 'saket', 'belapur', 'cbd']
  }
};

// Aliases for backwards compatibility
export const DELIVERY_ZONES = DELIVERY_CITIES;

// Auto-detect city from address or landmark text
export const detectCityFromText = (text) => {
  if (!text || text.trim().length < 3) return null;
  const lower = text.toLowerCase();

  const allKws = [];
  for (const city of Object.values(DELIVERY_CITIES)) {
    for (const kw of city.keywords) {
      allKws.push({ kw, cityId: city.id, length: kw.length });
    }
  }
  // Sort longest keyword first to avoid greedy substring collisions
  allKws.sort((a, b) => b.length - a.length);

  for (const item of allKws) {
    const regex = new RegExp(`\\b${item.kw}\\b`, 'i');
    if (regex.test(lower)) {
      return item.cityId;
    }
  }
  return null;
};

const QUICK_ADDONS = [
  {
    id: 4,
    name: "Tandoori Roti",
    price: 30,
    category: "Roti",
    type: "Veg",
    portion: "1 pc",
    image: "/images/tandoori-roti.webp"
  },
  {
    id: 5,
    name: "Pav - 4 pieces",
    price: 30,
    category: "Roti",
    type: "Veg",
    portion: "4 pcs",
    image: "/images/pav.webp"
  },
  {
    id: 12,
    name: "Warm Choco Lava Cake",
    price: 89,
    category: "Dessert",
    type: "Veg",
    portion: "1 pc",
    image: "/images/choco-lava-cake.jpg"
  }
];

const Cart = () => {

  const { cart, removeFromCart, updateQuantity, cartTotal, clearCart, addToCart } = useCart();
  const { isOpen: isKitchenOpen, shortStatus, reopenTimeStr } = useKitchenStatus();
  const navigate = useNavigate();

  // Smart initial city: read URL query or persisted browsing preference
  const [details, setDetails] = useState(() => {
    let initialCity = 'taloja';
    if (typeof window !== 'undefined') {
      try {
        const params = new URLSearchParams(window.location.search);
        const queryCity = params.get('city') || params.get('area') || params.get('zone');
        if (queryCity && DELIVERY_CITIES[queryCity]) {
          initialCity = queryCity;
        } else if (queryCity === 'mid') {
          initialCity = 'kharghar';
        } else if (queryCity === 'far') {
          initialCity = 'panvel';
        } else {
          const savedCity = sessionStorage.getItem('preferred_delivery_city') || sessionStorage.getItem('preferred_delivery_zone');
          if (savedCity && DELIVERY_CITIES[savedCity]) {
            initialCity = savedCity;
          } else if (savedCity === 'mid') {
            initialCity = 'kharghar';
          } else if (savedCity === 'far') {
            initialCity = 'panvel';
          }
        }
      } catch {
        // ignore
      }
    }
    return {
      name: '',
      phone: '',
      address: '',
      landmark: '',
      city: initialCity,
      location: initialCity
    };
  });

  const [autoDetectedCity, setAutoDetectedCity] = useState(null);
  const [errors, setErrors] = useState({});

  // Dynamic Individual City Delivery Logic
  const selectedCity = DELIVERY_CITIES[details.city] || DELIVERY_CITIES[details.location] || DELIVERY_CITIES.taloja;
  const selectedZone = selectedCity; // Alias for any zone-based consumers
  const isMinOrderMet = cartTotal >= selectedCity.minOrder;
  const isFreeDeliveryEligible = cartTotal >= selectedCity.freeAbove;
  const deliveryCharge = isFreeDeliveryEligible ? 0 : selectedCity.fee;
  const grandTotal = cartTotal + deliveryCharge;

  // Real-time Address Change & City Auto-detection
  const handleAddressChange = (e) => {
    const newAddress = e.target.value;
    const detectedCityId = detectCityFromText(newAddress);

    setDetails(prev => {
      const next = { ...prev, address: newAddress };
      if (detectedCityId && detectedCityId !== prev.city) {
        next.city = detectedCityId;
        next.location = detectedCityId;
        setAutoDetectedCity(detectedCityId);
      }
      return next;
    });

    if (errors.address) {
      setErrors(prev => ({ ...prev, address: '' }));
    }
  };

  const handleCitySelect = (e) => {
    const newCity = e.target.value;
    setDetails(prev => ({ ...prev, city: newCity, location: newCity }));
    setAutoDetectedCity(null);
  };

  const validateForm = () => {
    const newErrors = {};
    const cleanName = sanitizeText(details.name, 60);
    if (!cleanName || cleanName.length < 2) {
      newErrors.name = 'Full name (min 2 characters) is required';
    }

    if (!isValidIndianPhone(details.phone)) {
      newErrors.phone = 'Valid 10-digit mobile number is required (starts with 6-9)';
    }

    const cleanAddress = sanitizeText(details.address, 200);
    if (!cleanAddress || cleanAddress.length < 5) {
      newErrors.address = 'Complete delivery address (min 5 characters) is required';
    }
    return newErrors;
  };

  const handleCheckout = () => {
    if (!isMinOrderMet) {
      toast.error(`Minimum order for ${selectedCity.name} is ₹${selectedCity.minOrder}. Add ₹${selectedCity.minOrder - cartTotal} more.`);
      return;
    }

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    // Sanitize all customer inputs defensively
    const cleanName = sanitizeText(details.name, 60);
    const cleanPhone = sanitizePhone(details.phone);
    const cleanAddress = sanitizeText(details.address, 200);
    const cleanLandmark = sanitizeText(details.landmark, 100);

    const orderId = 'BB-' + Math.floor(100000 + Math.random() * 900000);
    const orderTime = new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });

    const itemsList = cart.map(item => `• ${sanitizeText(item.name, 60)} (x${item.quantity}) - ₹${item.price * item.quantity}`).join('\n');
    const cityName = selectedCity.name;
    const customerInfo = `\n\n👤 *Customer Details:*\nName: ${cleanName}\nPhone: +91 ${cleanPhone}\nDelivery City: *${cityName}* (${selectedCity.time})\nAddress: ${cleanAddress}${cleanLandmark ? `, Landmark: ${cleanLandmark}` : ''}`;

    const deliveryStr = deliveryCharge === 0 ? 'FREE' : `₹${deliveryCharge} (${selectedCity.shortName})`;
    const totalStr = `\n\n💰 *Bill Summary:*\nSubtotal: ₹${cartTotal}\nDelivery Fee: ${deliveryStr}\n*Grand Total: ₹${grandTotal}*`;

    const headerTitle = isKitchenOpen
      ? `🍛 *NEW ORDER - BREAD & BITE*\nOrder ID: *${orderId}* (Time: ${orderTime})`
      : `🍛 *ADVANCE PRE-ORDER (NEXT SLOT: ${reopenTimeStr || '7:00 PM'}) - BREAD & BITE*\nOrder ID: *${orderId}* (Time: ${orderTime})`;

    const footerNote = isKitchenOpen
      ? `_Please confirm my order and share estimated delivery time!_`
      : `_Please confirm my advance pre-order for the ${reopenTimeStr || 'upcoming'} slot and share estimated dispatch time!_`;

    const fullMessage = `${headerTitle}${customerInfo}\n\n🛒 *Order Items:*\n${itemsList}${totalStr}\n\n${footerNote}`;

    const rawWhatsappUrl = `https://wa.me/919325629256?text=${encodeURIComponent(fullMessage)}`;
    const whatsappUrl = sanitizeSafeUrl(rawWhatsappUrl, 'https://wa.me/919325629256');

    // Save order receipt for the thank-you screen safely
    try {
      sessionStorage.setItem('bread_and_bite_last_order', JSON.stringify({
        orderId,
        items: cart,
        cartTotal,
        deliveryCharge,
        grandTotal,
        city: selectedCity.shortName,
        zone: selectedCity.name,
        customer: { name: cleanName, phone: cleanPhone, address: cleanAddress, landmark: cleanLandmark },
        whatsappUrl,
        isPreOrder: !isKitchenOpen,
        reopenTimeStr: reopenTimeStr || '7:00 PM',
        placedAt: new Date().toISOString()
      }));
    } catch {
      // Ignore quota error
    }

    // Open WhatsApp safely
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    // Clear active cart & navigate
    clearCart();
    navigate('/thank-you/', {
      state: {
        orderId,
        grandTotal,
        whatsappUrl,
        customerName: cleanName,
        city: selectedCity.shortName,
        zone: selectedCity.name,
        isPreOrder: !isKitchenOpen,
      }
    });
  };


  if (cart.length === 0) {
    return (
      <div className="min-h-[75vh] flex flex-col items-center justify-center px-6 bg-[#FAF7F2]">
        <SEO
          title="Your Cart & Checkout | Bread & Bite Navi Mumbai"
          description="Review your cart items and complete your order with Bread & Bite. Fresh homestyle chicken gravies and breads delivered hot across Navi Mumbai."
          url="/cart/"
          noindex={true}
        />
        <div className="text-center max-w-md w-full artisan-card p-10 sm:p-12 rounded-3xl bg-white">
          <div className="w-16 h-16 rounded-2xl bg-[#FAF7F2] border border-[#EAE4DC] flex items-center justify-center text-[#B84A1C] mx-auto mb-6">
            <FaShoppingBag size={24} />
          </div>
          <h1 className="text-2xl font-bold text-[#181411] mb-2 font-heading">Your Cart Is Empty</h1>
          <p className="text-[#574F4A] mb-8 text-sm leading-relaxed">
            Check out our 500g Chicken Keema, Chicken Korma, hot Tandoori Roti, and soft Pav.
          </p>
          <Link
            to="/menu/"
            className="btn-primary py-3.5 px-7 text-xs uppercase"
          >
            <FaArrowLeft size={10} />
            <span>Browse Full Menu</span>
          </Link>
        </div>
      </div>
    );
  }


  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#181411] pt-6 sm:pt-10 pb-24 px-4 sm:px-6">
      <SEO
        title="Your Cart & Checkout | Bread & Bite Navi Mumbai"
        description="Review your cart items and complete your order with Bread & Bite. Fresh homestyle chicken gravies and breads delivered hot across Navi Mumbai."
        url="/cart/"
        noindex={true}
      />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6 sm:mb-10">
          <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#B84A1C] block mb-1">
            Order Checkout
          </span>
          <h1 className="text-3xl sm:text-5xl font-normal tracking-tight font-heading text-[#181411] leading-tight">
            Review <span className="font-italic-accent text-[#B84A1C]">& Order</span>
          </h1>
        </div>

        {/* Closed Kitchen Notice Banner */}
        {!isKitchenOpen && (
          <div className="artisan-card rounded-2xl p-4 sm:p-5 bg-white border border-[#EAE4DC] mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-xs">
            <div>
              <h3 className="text-sm font-bold text-[#181411] font-heading">
                Kitchen Currently Resting
              </h3>
              <p className="text-xs text-[#574F4A] mt-1 leading-relaxed">
                Daily slots: <strong>Lunch: 11:15 AM – 3:30 PM</strong> & <strong>Dinner: 7:00 PM – 9:45 PM IST</strong>. Your items remain saved in your bag; checkout unlocks during open slots ({shortStatus}).
              </p>
            </div>
            <a
              href="https://wa.me/919325629256?text=Hi%20Bread%20%26%20Bite%2C%20I%20have%20an%20inquiry%20regarding%20advance%20orders%20or%20catering."
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-[#181411] bg-[#FAF7F2] border border-[#EAE4DC] hover:border-[#B84A1C] transition-colors whitespace-nowrap self-stretch sm:self-auto justify-center"
            >
              <FaWhatsapp size={14} className="text-[#25D366]" />
              <span>Advance Inquiry</span>
            </a>
          </div>
        )}

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-10">
          {/* Left Column: Items (7 cols) */}
          <div className="lg:col-span-7 space-y-5">

            {/* Item List */}
            <div className="artisan-card rounded-3xl p-5 sm:p-7 bg-white">
              <h2 className="text-lg sm:text-xl font-bold mb-5 font-heading text-[#181411] flex items-center gap-2">
                <FaShoppingBag className="text-[#B84A1C]" />
                <span>Selected Items ({cart.reduce((sum, item) => sum + item.quantity, 0)})</span>
              </h2>

              <div className="space-y-3.5">
                <AnimatePresence mode="popLayout">
                  {cart.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="flex gap-3.5 items-center p-3 sm:p-4 bg-[#FAF7F2] rounded-2xl border border-[#EAE4DC]"
                    >
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-xl overflow-hidden shrink-0 border border-[#EAE4DC] relative">
                        <ImageWithLoader
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start mb-0.5">
                          <h3 className="text-xs sm:text-base font-bold font-heading text-[#181411] line-clamp-1">{item.name}</h3>
                          <span className="text-xs sm:text-base font-bold text-[#181411] font-heading shrink-0 ml-2">
                            ₹{item.price * item.quantity}
                          </span>
                        </div>
                        <span className="text-[10px] sm:text-[11px] text-[#8C827A] font-semibold block mb-2">
                          ₹{item.price} each
                        </span>

                        <div className="flex items-center justify-between w-full">
                          <div className="flex items-center bg-white border border-[#EAE4DC] rounded-lg p-0.5 shadow-2xs">
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center text-[#574F4A] hover:text-[#B84A1C] transition-colors rounded cursor-pointer"
                              aria-label="Decrease quantity"
                            >
                              {item.quantity === 1 ? <FaTrash size={8} /> : <FaMinus size={8} />}
                            </button>
                            <span className="text-xs font-bold w-6 text-center text-[#181411]">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center text-[#574F4A] hover:text-[#B84A1C] transition-colors rounded cursor-pointer"
                              aria-label="Increase quantity"
                            >
                              <FaPlus size={8} />
                            </button>
                          </div>

                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="p-1.5 text-[#8C827A] hover:text-[#9E2A2B] transition-colors cursor-pointer"
                            aria-label={`Remove ${item.name}`}
                          >
                            <FaTrash size={11} />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>

            {/* Quick Add-ons Strip with Food Images (Left Column) */}
            <div className="artisan-card rounded-3xl p-5 sm:p-6 bg-white border border-[#EAE4DC]">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#181411] font-heading">
                    Add-ons & Sides
                  </h3>
                  <p className="text-xs text-[#8C827A] mt-0.5">
                    Fresh clay-oven rotis, soft pavs & warm desserts
                  </p>
                </div>
                <span className="text-[11px] font-semibold text-[#B84A1C] hidden sm:block">
                  Pairs great with your meal
                </span>
              </div>

              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                {QUICK_ADDONS.map((addon) => {
                  const inCart = cart.find(c => c.id === addon.id);
                  const qty = inCart ? inCart.quantity : 0;
                  return (
                    <div
                      key={addon.id}
                      className="group rounded-2xl bg-[#FAF7F2] border border-[#EAE4DC] p-2.5 sm:p-3 flex flex-col justify-between hover:border-[#B84A1C]/50 transition-colors"
                    >
                      <div>
                        {/* Food Image with Loader */}
                        <div className="aspect-[4/3] rounded-xl overflow-hidden bg-white mb-2.5 border border-[#EAE4DC]/60 relative">
                          <ImageWithLoader
                            src={addon.image}
                            alt={addon.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <h4 className="text-xs sm:text-sm font-bold text-[#181411] font-heading truncate mb-0.5">
                          {addon.name}
                        </h4>
                        <span className="text-xs font-semibold text-[#B84A1C] block mb-2.5">
                          ₹{addon.price}
                        </span>
                      </div>

                      {qty === 0 ? (
                        <button
                          type="button"
                          onClick={() => addToCart(addon)}
                          className="w-full py-1.5 sm:py-2 px-2 rounded-xl bg-white hover:bg-[#B84A1C] hover:text-white border border-[#EAE4DC] text-xs font-bold text-[#181411] transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 shadow-2xs"
                        >
                          <FaPlus size={8} />
                          <span>Add</span>
                        </button>
                      ) : (
                        <div className="flex items-center justify-between bg-white border border-[#B84A1C] rounded-xl p-0.5 sm:p-1 shadow-2xs">
                          <button
                            type="button"
                            onClick={() => updateQuantity(addon.id, -1)}
                            className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-[#574F4A] hover:text-[#B84A1C] transition-colors rounded cursor-pointer"
                            aria-label="Decrease quantity"
                          >
                            {qty === 1 ? <FaTrash size={8} /> : <FaMinus size={8} />}
                          </button>
                          <span className="text-xs font-bold text-[#181411] w-4 text-center">
                            {qty}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(addon.id, 1)}
                            className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center bg-[#B84A1C] text-white rounded cursor-pointer"
                            aria-label="Increase quantity"
                          >
                            <FaPlus size={8} />
                          </button>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Address & Summary (5 cols - Sticky on desktop) */}
          <div className="lg:col-span-5 space-y-5 lg:sticky lg:top-8 self-start">
            {/* Delivery Location & Address */}
            <div className="artisan-card rounded-3xl p-5 sm:p-6 bg-white">
              <h2 className="text-base sm:text-lg font-bold mb-4 font-heading flex items-center gap-2 text-[#181411]">
                <FaMapMarkerAlt className="text-[#B84A1C]" />
                <span>Delivery Details</span>
              </h2>

              <div className="space-y-3.5">
                {/* City Selection — Clear Individual Cities Dropdown */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#8C827A]">
                      Select Delivery City / Locality
                    </label>
                    <span className="text-xs font-semibold text-[#B84A1C]">
                      {selectedCity.time}
                    </span>
                  </div>

                  <div className="relative">
                    <select
                      value={details.city}
                      onChange={handleCitySelect}
                      className="w-full bg-[#FAF7F2] border border-[#EAE4DC] hover:border-[#B84A1C]/50 rounded-xl px-3.5 py-3 text-xs sm:text-sm font-semibold text-[#181411] appearance-none cursor-pointer focus:outline-none focus:border-[#B84A1C] transition-colors pr-10 shadow-2xs"
                    >
                      <option value="taloja">Taloja Phase 1 & 2 · Free on ₹299+ (Min ₹199)</option>
                      <option value="kharghar">Kharghar · Free on ₹399+ (Min ₹249)</option>
                      <option value="kamothe">Kamothe · Free on ₹399+ (Min ₹249)</option>
                      <option value="kalamboli">Kalamboli · Free on ₹399+ (Min ₹249)</option>
                      <option value="panvel">Panvel (Old & New) · Free on ₹699+ (Min ₹499)</option>
                      <option value="belapur">CBD Belapur · Free on ₹699+ (Min ₹499)</option>
                    </select>
                    <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-[#574F4A]">
                      <FaChevronDown size={11} />
                    </div>
                  </div>

                  {/* Auto-detect Confirmation Tag */}
                  {autoDetectedCity && (
                    <div className="mt-2 text-[11px] text-[#2A6A4E] bg-[#EEF6F2] border border-[#2A6A4E]/25 rounded-xl px-3 py-1.5 flex items-center justify-between font-medium">
                      <span>✓ City auto-detected from address: <strong>{selectedCity.name}</strong></span>
                      <span className="text-[#574F4A]">{selectedCity.time}</span>
                    </div>
                  )}

                  {/* Clean 1-Line Status */}
                  <div className="mt-2 text-xs">
                    {!isMinOrderMet ? (
                      <div className="text-[#B84A1C] flex items-center justify-between font-medium text-[11px] sm:text-xs">
                        <span>Min order for {selectedCity.shortName} is ₹{selectedCity.minOrder}</span>
                        <span className="font-bold underline">Add ₹{selectedCity.minOrder - cartTotal} more</span>
                      </div>
                    ) : isFreeDeliveryEligible ? (
                      <div className="text-[#2A6A4E] font-medium flex items-center justify-between text-[11px] sm:text-xs">
                        <span>Free Doorstep Delivery to {selectedCity.shortName}</span>
                        <span className="text-[#8C827A]">{selectedCity.time}</span>
                      </div>
                    ) : (
                      <div className="text-[#574F4A] flex items-center justify-between text-[11px] sm:text-xs">
                        <span>₹{selectedCity.fee} Delivery Fee ({selectedCity.shortName})</span>
                        <span className="text-[#B84A1C] font-semibold">
                          Add ₹{selectedCity.freeAbove - cartTotal} for Free Delivery
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Name & Phone in Responsive Grid (1 col on mobile, 2 col on tablet/desktop) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      maxLength={60}
                      autoComplete="name"
                      value={details.name}
                      onChange={(e) => {
                        setDetails({ ...details, name: e.target.value });
                        setErrors({ ...errors, name: '' });
                      }}
                      className={`w-full bg-[#FAF7F2] border ${errors.name ? 'border-red-400' : 'border-[#EAE4DC]'} rounded-xl px-3.5 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-[#B84A1C] transition-colors`}
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="10-digit Phone"
                      maxLength={15}
                      autoComplete="tel"
                      value={details.phone}
                      onChange={(e) => {
                        setDetails({ ...details, phone: e.target.value });
                        setErrors({ ...errors, phone: '' });
                      }}
                      className={`w-full bg-[#FAF7F2] border ${errors.phone ? 'border-red-400' : 'border-[#EAE4DC]'} rounded-xl px-3.5 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-[#B84A1C] transition-colors`}
                    />
                  </div>
                </div>
                {(errors.name || errors.phone) && (
                  <p className="text-red-500 text-xs font-medium">Please provide name and valid phone number.</p>
                )}

                <div>
                  <textarea
                    placeholder="Complete Delivery Address (Flat / Wing / Society / Sector)"
                    rows="2"
                    maxLength={200}
                    autoComplete="street-address"
                    value={details.address}
                    onChange={handleAddressChange}
                    className={`w-full bg-[#FAF7F2] border ${errors.address ? 'border-red-400' : 'border-[#EAE4DC]'} rounded-xl px-3.5 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-[#B84A1C] transition-colors resize-none`}
                  />
                  {errors.address && <p className="text-red-500 text-xs font-medium mt-1">{errors.address}</p>}
                </div>

                <input
                  type="text"
                  placeholder="Landmark (Optional)"
                  maxLength={100}
                  value={details.landmark}
                  onChange={(e) => setDetails({ ...details, landmark: e.target.value })}
                  className="w-full bg-[#FAF7F2] border border-[#EAE4DC] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-[#B84A1C] transition-colors"
                />
              </div>
            </div>


            {/* Order Summary & WhatsApp Dispatch */}
            <div className="bg-[#181411] text-[#EAE4DC] rounded-3xl p-5 sm:p-7 shadow-tactile-lg">
              <h2 className="text-white text-lg font-bold mb-5 font-heading border-b border-white/10 pb-3">
                Bill Summary
              </h2>

              <div className="space-y-3 mb-6 text-sm">
                <div className="flex justify-between text-[#8C827A]">
                  <span>Items Subtotal</span>
                  <span className="text-white font-medium">₹{cartTotal}</span>
                </div>
                <div className="flex justify-between text-[#8C827A]">
                  <span>Delivery Fee ({selectedCity.shortName})</span>
                  <span className={deliveryCharge === 0 ? "text-[#2A6A4E] font-bold" : "text-white font-medium"}>
                    {deliveryCharge === 0 ? 'FREE' : `₹${deliveryCharge}`}
                  </span>
                </div>

                <div className="flex justify-between text-xl font-bold text-white pt-4 border-t border-white/10 font-heading">
                  <span>Grand Total</span>
                  <span className="text-[#B84A1C]">₹{grandTotal}</span>
                </div>
              </div>

                {!isMinOrderMet ? (
                  <button
                    type="button"
                    disabled
                    className="w-full py-4 rounded-xl bg-[#2C2723] text-[#A89E94] border border-white/10 font-bold text-xs uppercase tracking-wider cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    <span>Add ₹{selectedZone.minOrder - cartTotal} More to {isKitchenOpen ? 'Place Order' : 'Pre-Order'}</span>
                  </button>
                ) : isKitchenOpen ? (
                  <button
                    onClick={handleCheckout}
                    className="btn-primary w-full py-4 text-sm uppercase tracking-wider"
                  >
                    <FaWhatsapp size={18} />
                    <span>Order on WhatsApp</span>
                  </button>
                ) : (
                  <div className="space-y-2">
                    <button
                      onClick={handleCheckout}
                      className="btn-primary w-full py-4 text-xs sm:text-sm uppercase tracking-wider bg-[#B84A1C] hover:bg-[#9C3B12]"
                    >
                      <FaWhatsapp size={18} />
                      <span>Pre-Order on WhatsApp ({reopenTimeStr || 'Next Slot'})</span>
                    </button>
                    <p className="text-center text-[10px] text-[#A89E94] leading-relaxed">
                      Kitchen resting. Daily slots: 11:15 AM – 3:30 PM & 7:00 PM – 9:45 PM. Advance orders get priority dispatch!
                    </p>
                  </div>
                )}

              <p className="text-center text-[10px] text-[#8C827A] mt-3 uppercase tracking-wider">
                Pay on delivery via Cash or UPI QR
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
