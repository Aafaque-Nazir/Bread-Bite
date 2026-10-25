import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaShoppingBag, FaCheckCircle, FaClock } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import { useKitchenStatus } from '../hooks/useKitchenStatus';

const ProductModal = ({ item, isOpen, onClose }) => {
  const { addToCart, cart, updateQuantity } = useCart();
  const { isOpen: isKitchenOpen } = useKitchenStatus();

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.__lenis?.stop();
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      window.__lenis?.start();
    };
  }, [isOpen, onClose]);

  // Check if item is already in cart
  const cartItem = item ? cart.find(c => c.id === item.id) : null;

  return (
    <AnimatePresence>
      {isOpen && item && (
        <div
          data-lenis-prevent
          className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center sm:p-6 overflow-hidden"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#181411]/60"
          />

          {/* Modal / Bottom Sheet Container */}
          <motion.div
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            className="relative bg-white rounded-t-3xl sm:rounded-3xl overflow-hidden max-w-3xl w-full shadow-tactile-lg flex flex-col sm:flex-row max-h-[88vh] sm:max-h-[85vh] border border-[#EAE4DC] z-10"
          >
            {/* Mobile Drag Indicator */}
            <div className="sm:hidden w-full flex justify-center pt-2.5 pb-1 bg-[#FAF7F2]">
              <div className="w-10 h-1 rounded-full bg-[#D9D1C7]" />
            </div>

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close product details"
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-30 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white border border-[#EAE4DC] flex items-center justify-center text-[#574F4A] hover:text-[#181411] transition-colors cursor-pointer shadow-2xs"
            >
              <FaTimes size={12} />
            </button>

            {/* Image Section */}
            <div className="w-full sm:w-1/2 h-44 sm:h-auto relative overflow-hidden bg-[#FAF7F2] shrink-0">
              <img
                src={item.image}
                alt={item.name}
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=600&auto=format&fit=crop';
                }}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#181411]/40 via-transparent to-transparent sm:hidden" />

              <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                <span className={item.type === 'Veg' ? 'badge-veg' : 'badge-nonveg'}>
                  {item.type}
                </span>
                {item.isBestSeller && (
                  <span className="bg-[#181411] text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
                    Bestseller
                  </span>
                )}
              </div>
            </div>

            {/* Content Section */}
            <div className="w-full sm:w-1/2 p-5 sm:p-8 flex flex-col justify-between overflow-y-auto">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#8C827A]">
                    {item.category}
                  </span>
                  <span className="text-[#D9D1C7]">·</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#B84A1C]">
                    Made Fresh
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-[#181411] mb-2 leading-snug font-heading">
                  {item.name}
                </h2>

                <p className="text-[#574F4A] text-xs sm:text-sm leading-relaxed mb-5">
                  {item.description || "Freshly prepared with quality ingredients and authentic spices."}
                </p>

                <div className="bg-[#FAF7F2] rounded-xl p-3 sm:p-3.5 border border-[#EAE4DC] mb-5 space-y-1.5">
                  <div className="flex items-center gap-2 text-[11px] sm:text-xs text-[#2A6A4E] font-medium">
                    <FaCheckCircle size={11} className="shrink-0" />
                    <span>Cooked fresh on your order · 100% Halal fresh chicken</span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] sm:text-xs text-[#574F4A] font-medium">
                    <FaCheckCircle size={11} className="text-[#8C827A] shrink-0" />
                    <span>Delivered hot in 25–35 mins across Navi Mumbai</span>
                  </div>
                </div>
              </div>

              {/* Sticky Action Footer */}
              <div className="pt-3 border-t border-[#EAE4DC] mt-auto">
                <div className="flex items-center justify-between mb-3.5">
                  <div>
                    <span className="text-[9px] text-[#8C827A] uppercase font-bold tracking-wider block">Price</span>
                    <span className="text-2xl sm:text-3xl font-bold text-[#181411] font-heading">
                      ₹{item.price}
                    </span>
                  </div>
                  {item.originalPrice && (
                    <span className="text-xs text-[#8C827A] line-through">
                      ₹{item.originalPrice}
                    </span>
                  )}
                </div>

                {cartItem ? (
                  <div className="flex items-center justify-between bg-[#FAF7F2] border border-[#EAE4DC] rounded-xl p-1.5">
                    <span className="text-xs font-bold text-[#181411] px-3">In Bag</span>
                    <div className="flex items-center gap-3 bg-white rounded-lg px-3 py-1.5 border border-[#EAE4DC]">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="text-sm font-bold text-[#574F4A] hover:text-[#B84A1C]"
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>
                      <span className="text-xs font-bold text-[#181411]">{cartItem.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="text-sm font-bold text-[#574F4A] hover:text-[#B84A1C]"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      addToCart(item);
                      onClose();
                    }}
                    className="btn-primary w-full py-3.5 text-xs font-bold uppercase tracking-wider"
                  >
                    <FaShoppingBag size={13} />
                    <span>Add to Bag • ₹{item.price}</span>
                  </button>
                )}

                {!isKitchenOpen && (
                  <p className="text-[10px] text-[#8C827A] text-center mt-2.5 font-medium">
                    Daily Slots: 11:00 AM – 3:15 PM & 7:00 PM – 9:15 PM · Saved for checkout
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProductModal;
