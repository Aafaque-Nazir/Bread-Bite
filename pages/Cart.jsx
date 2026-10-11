import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../src/context/CartContext';
import { FaTrash, FaMinus, FaPlus, FaWhatsapp, FaArrowLeft, FaShoppingBag, FaMapMarkerAlt, FaMotorcycle, FaClock } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useKitchenStatus } from '../src/hooks/useKitchenStatus';
import SEO from '../src/components/SEO';
import ImageWithLoader from '../src/components/ImageWithLoader';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();
  const { isOpen: isKitchenOpen } = useKitchenStatus();
  const navigate = useNavigate();
  const [details, setDetails] = useState({
    name: '',
    phone: '',
    address: '',
    landmark: '',
    location: 'taloja' // 'taloja' or 'other'
  });
  const [errors, setErrors] = useState({});

  // Delivery Logic
  const isTaloja = details.location === 'taloja';
  const isFreeDeliveryEligible = cartTotal >= 499;
  const deliveryCharge = (isTaloja || isFreeDeliveryEligible) ? 0 : 49;
  const grandTotal = cartTotal + deliveryCharge;

  const validateForm = () => {
    const newErrors = {};
    if (!details.name.trim()) newErrors.name = 'Full name is required';

    // Sanitize phone number (strip spaces, dashes, +91, leading 0)
    const cleanPhone = details.phone.replace(/[\s-+]/g, '').replace(/^91/, '').replace(/^0/, '');
    if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      newErrors.phone = 'Valid 10-digit mobile number is required';
    }

    if (!details.address.trim()) newErrors.address = 'Delivery address is required';
    return newErrors;
  };

  const handleCheckout = () => {
    if (!isKitchenOpen) {
      toast.error("Our kitchen is currently closed (10:00 AM - 9:00 PM). Please visit at 10:00 AM!");
      return;
    }

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    const cleanPhone = details.phone.replace(/[\s-+]/g, '').replace(/^91/, '').replace(/^0/, '');
    const orderId = 'BB-' + Math.floor(100000 + Math.random() * 900000);
    const orderTime = new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });

    const itemsList = cart.map(item => `• ${item.name} (x${item.quantity}) - ₹${item.price * item.quantity}`).join('\n');
    const locationText = details.location === 'taloja' ? 'Taloja Phase 1' : 'Other Navi Mumbai Area';
    const customerInfo = `\n\n👤 *Customer Details:*\nName: ${details.name.trim()}\nPhone: +91 ${cleanPhone}\nArea: ${locationText}\nAddress: ${details.address.trim()}${details.landmark ? `, Landmark: ${details.landmark.trim()}` : ''}`;

    const deliveryStr = deliveryCharge === 0 ? 'FREE' : `₹${deliveryCharge}`;
    const totalStr = `\n\n💰 *Bill Summary:*\nSubtotal: ₹${cartTotal}\nDelivery Fee: ${deliveryStr}\n*Grand Total: ₹${grandTotal}*`;

    const fullMessage = `🍛 *NEW ORDER - BREAD & BITE*\nOrder ID: *${orderId}* (Time: ${orderTime})\n${customerInfo}\n\n🛒 *Order Items:*\n${itemsList}${totalStr}\n\n_Please confirm my order and share estimated delivery time!_`;

    const whatsappUrl = `https://wa.me/919325629256?text=${encodeURIComponent(fullMessage)}`;

    // Save order receipt for the thank-you screen
    try {
      sessionStorage.setItem('bread_and_bite_last_order', JSON.stringify({
        orderId,
        items: cart,
        cartTotal,
        deliveryCharge,
        grandTotal,
        customer: { ...details, phone: cleanPhone },
        whatsappUrl,
        placedAt: new Date().toISOString()
      }));
    } catch {
      // Ignore quota error
    }

    // Open WhatsApp
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    // Clear active cart & navigate
    clearCart();
    navigate('/thank-you', {
      state: {
        orderId,
        grandTotal,
        whatsappUrl,
        customerName: details.name.trim()
      }
    });
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-[75vh] flex flex-col items-center justify-center px-6 bg-[#FAF7F2]">
        <SEO title="Your Cart - Bread & Bite" noindex={true} />
        <div className="text-center max-w-md w-full artisan-card p-10 sm:p-12 rounded-3xl bg-white">
          <div className="w-16 h-16 rounded-2xl bg-[#FAF7F2] border border-[#EAE4DC] flex items-center justify-center text-[#B84A1C] mx-auto mb-6">
            <FaShoppingBag size={24} />
          </div>
          <h2 className="text-2xl font-bold text-[#181411] mb-2 font-heading">Your Cart Is Empty</h2>
          <p className="text-[#574F4A] mb-8 text-sm leading-relaxed">
            Check out our 500g Chicken Keema, Chicken Korma, hot Tandoori Roti, and soft Pav.
          </p>
          <Link
            to="/menu"
            className="btn-primary py-3.5 px-7 text-xs uppercase"
          >
            <FaArrowLeft size={10} />
            <span>Browse Full Menu</span>
          </Link>
        </div>
      </div>
    );
  }

  const freeDeliveryProgress = Math.min(100, Math.round((cartTotal / 499) * 100));

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#181411] pt-6 sm:pt-10 pb-24 px-4 sm:px-6">
      <SEO
        title="Checkout - Bread & Bite"
        description="Review your cart and place your order instantly on WhatsApp."
        url="/cart"
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
                Kitchen Closed for the Night
              </h3>
              <p className="text-xs text-[#574F4A] mt-1 leading-relaxed">
                Operating hours: <strong>10:00 AM – 9:00 PM IST</strong>. Your items remain saved in your bag, but online checkout will unlock at 10:00 AM.
              </p>
            </div>
            <a
              href="https://wa.me/919325629256?text=Hi%20Bread%20%26%20Bite%2C%20I%20have%20an%20inquiry%20regarding%20advance%20orders%20or%20catering."
              target="_blank"
              rel="noopener noreferrer"
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
            {/* Free Delivery Bar */}
            <div className="artisan-card rounded-2xl p-4 bg-white border border-[#EAE4DC]">
              <div className="flex items-center justify-between text-xs font-semibold mb-2">
                <span className="text-[#181411] flex items-center gap-1.5">
                  <FaMotorcycle className="text-[#B84A1C]" />
                  {isFreeDeliveryEligible || isTaloja
                    ? "✨ You qualify for Free Delivery!"
                    : `Add ₹${499 - cartTotal} more for FREE Delivery`}
                </span>
                <span className="text-[#8C827A] font-bold">{freeDeliveryProgress}%</span>
              </div>
              <div className="w-full h-1.5 bg-[#FAF7F2] rounded-full overflow-hidden border border-[#EAE4DC]">
                <div
                  className="h-full bg-[#B84A1C] rounded-full transition-all duration-300"
                  style={{ width: `${isTaloja ? 100 : freeDeliveryProgress}%` }}
                />
              </div>
            </div>

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
          </div>

          {/* Right Column: Address & Summary (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            {/* Delivery Location & Address */}
            <div className="artisan-card rounded-3xl p-5 sm:p-7 bg-white">
              <h2 className="text-lg sm:text-xl font-bold mb-4 font-heading flex items-center gap-2 text-[#181411]">
                <FaMapMarkerAlt className="text-[#B84A1C]" />
                <span>Delivery Details</span>
              </h2>

              <div className="space-y-3.5">
                {/* Location Selection */}
                <div>
                  <label className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#8C827A] mb-1.5">
                    Delivery Zone
                  </label>
                  <div className="grid grid-cols-2 gap-2.5">
                    <button
                      type="button"
                      onClick={() => setDetails({ ...details, location: 'taloja' })}
                      className={`py-2 px-3 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
                        details.location === 'taloja'
                          ? 'bg-[#FDF3ED] border-[#B84A1C] text-[#B84A1C]'
                          : 'bg-[#FAF7F2] border-[#EAE4DC] text-[#574F4A]'
                      }`}
                    >
                      Taloja Phase 1
                    </button>
                    <button
                      type="button"
                      onClick={() => setDetails({ ...details, location: 'other' })}
                      className={`py-2 px-3 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
                        details.location === 'other'
                          ? 'bg-[#FDF3ED] border-[#B84A1C] text-[#B84A1C]'
                          : 'bg-[#FAF7F2] border-[#EAE4DC] text-[#574F4A]'
                      }`}
                    >
                      Other Navi Mumbai
                    </button>
                  </div>
                  <p className="text-[11px] text-[#8C827A] mt-1.5">
                    {details.location === 'taloja'
                      ? '✨ Free local delivery in Taloja.'
                      : '₹49 delivery fee (Free on orders ₹499+).'}
                  </p>
                </div>

                {/* Name & Phone in Responsive Grid (1 col on mobile, 2 col on tablet/desktop) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
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
                    value={details.address}
                    onChange={(e) => {
                      setDetails({ ...details, address: e.target.value });
                      setErrors({ ...errors, address: '' });
                    }}
                    className={`w-full bg-[#FAF7F2] border ${errors.address ? 'border-red-400' : 'border-[#EAE4DC]'} rounded-xl px-3.5 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-[#B84A1C] transition-colors resize-none`}
                  />
                  {errors.address && <p className="text-red-500 text-xs font-medium mt-1">{errors.address}</p>}
                </div>

                <input
                  type="text"
                  placeholder="Landmark (Optional)"
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
                  <span className="flex items-center gap-1.5">
                    <FaMotorcycle className="text-[#B84A1C]" /> Delivery Fee
                  </span>
                  <span className={deliveryCharge === 0 ? "text-[#2A6A4E] font-bold" : "text-white font-medium"}>
                    {deliveryCharge === 0 ? 'FREE' : `₹${deliveryCharge}`}
                  </span>
                </div>

                <div className="flex justify-between text-xl font-bold text-white pt-4 border-t border-white/10 font-heading">
                  <span>Grand Total</span>
                  <span className="text-[#B84A1C]">₹{grandTotal}</span>
                </div>
              </div>

                {isKitchenOpen ? (
                  <button
                    onClick={handleCheckout}
                    className="btn-primary w-full py-4 text-sm uppercase tracking-wider"
                  >
                    <FaWhatsapp size={18} />
                    <span>Order on WhatsApp</span>
                  </button>
                ) : (
                  <div className="space-y-3">
                    <button
                      disabled
                      className="w-full py-4 rounded-xl bg-[#2C2723] text-[#8C827A] border border-white/10 font-bold text-xs uppercase tracking-wider cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      <span>Reopens Daily at 10:00 AM</span>
                    </button>
                    <p className="text-center text-[10px] text-[#A89E94] leading-relaxed">
                      Online order checkout reopens at 10:00 AM IST.
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
