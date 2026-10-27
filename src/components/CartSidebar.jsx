import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaTimes, FaTrash, FaPlus, FaMinus, FaShoppingBag, FaArrowRight } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import { useKitchenStatus } from '../hooks/useKitchenStatus';

const CartSidebar = () => {
  const { isCartOpen, toggleCart, cart, updateQuantity, cartTotal, clearCart } = useCart();
  const { isOpen: isKitchenOpen, shortStatus } = useKitchenStatus();

  useEffect(() => {
    if (isCartOpen) {
      window.__lenis?.stop();
    } else {
      window.__lenis?.start();
    }
    return () => {
      window.__lenis?.start();
    };
  }, [isCartOpen]);

  const totalItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const deliveryCharge = cartTotal >= 299 ? 0 : 49;
  const sidebarGrandTotal = cartTotal + deliveryCharge;

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleCart}
            className="fixed inset-0 bg-[#181411]/45 backdrop-blur-[2px] z-[100]"
          />

          {/* Drawer Container */}
          <motion.div
            data-lenis-prevent
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ type: 'spring', damping: 30, stiffness: 280 }}
            className="fixed inset-y-0 right-0 w-full sm:max-w-[420px] bg-white border-l border-[#EAE4DC] z-[101] shadow-tactile-lg flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="px-6 py-5 border-b border-[#EAE4DC] flex items-center justify-between bg-white">
              <h2 className="text-lg font-bold text-[#181411] font-heading flex items-baseline gap-2">
                <span>Your Bag</span>
                {totalItemCount > 0 && (
                  <span className="text-xs font-normal text-[#8C827A] font-sans">
                    ({totalItemCount} {totalItemCount === 1 ? 'item' : 'items'})
                  </span>
                )}
              </h2>
              <button
                onClick={toggleCart}
                className="p-1.5 text-[#8C827A] hover:text-[#181411] transition-colors cursor-pointer"
                aria-label="Close cart drawer"
              >
                <FaTimes size={15} />
              </button>
            </div>

            {/* Item List */}
            <div className="flex-1 overflow-y-auto px-6 py-2 custom-scrollbar">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12 px-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#FAF7F2] border border-[#EAE4DC] flex items-center justify-center mb-3 text-[#8C827A]">
                    <FaShoppingBag size={18} />
                  </div>
                  <h3 className="text-base font-bold text-[#181411] font-heading mb-1">Your bag is empty</h3>
                  <p className="text-xs text-[#8C827A] max-w-[220px] leading-relaxed">
                    Fresh homestyle gravies and breads ready to be added.
                  </p>
                  <button
                    onClick={toggleCart}
                    className="mt-4 px-4 py-2 rounded-full border border-[#181411] text-xs font-semibold uppercase tracking-wider text-[#181411] hover:bg-[#181411] hover:text-white transition-colors cursor-pointer"
                  >
                    Browse Menu
                  </button>
                </div>
              ) : (
                <div className="divide-y divide-[#EAE4DC]/70">
                  <AnimatePresence mode="popLayout">
                    {cart.map((item, index) => (
                      <motion.div
                        layout
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.96 }}
                        transition={{ duration: 0.15, delay: index * 0.02 }}
                        key={item.id}
                        className="py-3.5 flex items-center gap-3.5"
                      >
                        {/* Image */}
                        <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0 bg-[#FAF7F2] border border-[#EAE4DC]/70">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.src = '/images/chicken-korma.webp';
                            }}
                          />
                        </div>

                        {/* Info */}
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-semibold text-[#181411] font-heading truncate">
                            {item.name}
                          </h4>
                          <span className="text-xs text-[#736B63] block mt-0.5">
                            ₹{item.price * item.quantity}
                          </span>
                        </div>

                        {/* Quantity Stepper */}
                        <div className="flex items-center border border-[#EAE4DC] rounded-lg bg-white p-0.5">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-6 h-6 flex items-center justify-center text-[#574F4A] hover:text-[#B84A1C] transition-colors rounded cursor-pointer"
                            aria-label="Decrease quantity"
                          >
                            {item.quantity === 1 ? <FaTrash size={9} /> : <FaMinus size={8} />}
                          </button>
                          <span className="text-xs font-semibold w-5 text-center text-[#181411]">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-6 h-6 flex items-center justify-center text-[#574F4A] hover:text-[#B84A1C] transition-colors rounded cursor-pointer"
                            aria-label="Increase quantity"
                          >
                            <FaPlus size={8} />
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              )}
            </div>

            {/* Compact Minimal Footer */}
            {cart.length > 0 && (
              <div className="p-6 bg-white border-t border-[#EAE4DC] space-y-4">
                {/* Cost lines */}
                <div className="space-y-1.5 text-xs">
                  <div className="flex justify-between text-[#736B63]">
                    <span>Subtotal</span>
                    <span className="font-medium text-[#181411]">₹{cartTotal}</span>
                  </div>
                  <div className="flex justify-between text-[#736B63]">
                    <span>Delivery</span>
                    <span className={cartTotal >= 299 ? "text-[#2A6A4E] font-medium" : "text-[#181411]"}>
                      {cartTotal >= 299 ? 'Free' : '₹49 (Free above ₹299)'}
                    </span>
                  </div>
                  <div className="pt-2.5 border-t border-[#EAE4DC] flex justify-between items-baseline">
                    <span className="text-xs uppercase tracking-wider font-semibold text-[#181411]">Total</span>
                    <span className="text-xl font-bold font-heading text-[#181411]">₹{sidebarGrandTotal}</span>
                  </div>
                </div>

                {/* Primary Button */}
                <Link
                  to="/cart/"
                  rel="nofollow"
                  onClick={toggleCart}
                  className="w-full py-3.5 px-5 rounded-xl bg-[#181411] hover:bg-[#B84A1C] text-white text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-between shadow-xs cursor-pointer group"
                >
                  <span>{isKitchenOpen ? 'Proceed to Checkout' : 'Review & Pre-order'}</span>
                  <span className="flex items-center gap-2 text-white/90 group-hover:text-white font-mono">
                    <span>₹{sidebarGrandTotal}</span>
                    <FaArrowRight size={10} className="group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </Link>

                {/* Plain Text Status if Resting (NO DOTS, NO BOXES, NO BLINKERS) */}
                {!isKitchenOpen && (
                  <p className="text-center text-[11px] text-[#8C827A] leading-snug">
                    Next kitchen slot opens at {shortStatus || '7:00 PM'}. Pre-orders accepted.
                  </p>
                )}

                {/* Secondary Row */}
                <div className="flex items-center justify-between text-[11px] text-[#8C827A] pt-0.5">
                  <span>Navi Mumbai delivery</span>
                  <button
                    onClick={() => clearCart()}
                    className="hover:text-[#B84A1C] transition-colors cursor-pointer"
                  >
                    Clear bag
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartSidebar;
