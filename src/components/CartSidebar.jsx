import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaTimes, FaTrash, FaPlus, FaMinus, FaShoppingBag, FaArrowRight, FaMotorcycle, FaClock } from 'react-icons/fa';
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
            className="fixed inset-0 bg-[#181411]/50 z-[100]"
          />

          {/* Drawer Container */}
          <motion.div
            data-lenis-prevent
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ type: 'spring', damping: 28, stiffness: 240 }}
            className="fixed inset-y-0 right-0 w-full sm:max-w-md bg-white border-l border-[#EAE4DC] z-[101] sm:rounded-l-3xl shadow-tactile-lg flex flex-col overflow-hidden"
          >
            {/* Drawer Header */}
            <div className="px-5 sm:px-6 py-4.5 border-b border-[#EAE4DC] flex items-center justify-between bg-[#FAF7F2]">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#8C827A] block">
                  Bread & Bite · Bag
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-[#181411] font-heading">
                  Your Order ({cart.reduce((sum, item) => sum + item.quantity, 0)})
                </h2>
              </div>
              <button
                onClick={toggleCart}
                className="w-9 h-9 rounded-full bg-white border border-[#EAE4DC] flex items-center justify-center text-[#574F4A] hover:text-[#181411] transition-colors cursor-pointer shadow-2xs"
                aria-label="Close cart drawer"
              >
                <FaTimes size={13} />
              </button>
            </div>

            {/* Smart Free Delivery Progress Tracker */}
            {cart.length > 0 && (
              <div className="px-5 sm:px-6 py-3 bg-[#FAF7F2] border-b border-[#EAE4DC]">
                <div className="flex items-center justify-between text-xs font-semibold mb-1.5">
                  <span className="flex items-center gap-1.5 text-[#181411]">
                    <FaMotorcycle className="text-[#B84A1C]" />
                    {cartTotal >= 499 ? (
                      <span className="text-[#2A6A4E] font-bold">✨ Free Delivery Unlocked!</span>
                    ) : (
                      <span>Add ₹{499 - cartTotal} more for FREE Delivery</span>
                    )}
                  </span>
                  <span className="text-[11px] text-[#8C827A] font-bold">
                    {Math.min(100, Math.round((cartTotal / 499) * 100))}%
                  </span>
                </div>
                <div className="w-full h-1.5 bg-white rounded-full overflow-hidden border border-[#EAE4DC]">
                  <div
                    className="h-full bg-[#B84A1C] rounded-full transition-all duration-300"
                    style={{ width: `${Math.min(100, Math.round((cartTotal / 499) * 100))}%` }}
                  />
                </div>
              </div>
            )}

            {/* Item List */}
            <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-4 custom-scrollbar space-y-3">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12 px-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#FAF7F2] border border-[#EAE4DC] flex items-center justify-center mb-4 text-[#8C827A]">
                    <FaShoppingBag size={20} />
                  </div>
                  <h3 className="text-base font-bold text-[#181411] font-heading mb-1">Your Bag is Empty</h3>
                  <p className="text-xs text-[#8C827A] max-w-[220px] leading-relaxed">
                    Add hot Chicken Keema, Chicken Korma, fresh Roti, Pav, or snacks to begin your order.
                  </p>
                  <button
                    onClick={toggleCart}
                    className="mt-5 btn-outline py-2 px-5 text-xs uppercase"
                  >
                    Browse Menu
                  </button>
                </div>
              ) : (
                <AnimatePresence mode="popLayout">
                  {cart.map((item, index) => (
                    <motion.div
                      layout
                      initial={{ opacity: 0, x: 15 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ delay: index * 0.04 }}
                      key={item.id}
                      className="flex items-center gap-3 p-3 rounded-2xl bg-[#FAF7F2] border border-[#EAE4DC]"
                    >
                      {/* Image */}
                      <div className="w-13 h-13 rounded-xl overflow-hidden shrink-0 border border-[#EAE4DC] bg-white">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=120&h=120&auto=format&fit=crop';
                          }}
                        />
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs sm:text-sm font-bold text-[#181411] font-heading truncate">
                          {item.name}
                        </h4>
                        <span className="text-xs font-bold text-[#181411] mt-0.5 block">
                          ₹{item.price * item.quantity}
                        </span>
                      </div>

                      {/* Quantity Selector */}
                      <div className="flex items-center bg-white border border-[#EAE4DC] rounded-xl p-0.5 shadow-2xs">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-7 h-7 flex items-center justify-center text-[#574F4A] hover:text-[#B84A1C] transition-colors rounded-lg cursor-pointer"
                          aria-label="Decrease quantity"
                        >
                          {item.quantity === 1 ? <FaTrash size={9} /> : <FaMinus size={8} />}
                        </button>
                        <span className="text-xs font-bold w-6 text-center text-[#181411]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-7 h-7 flex items-center justify-center text-[#574F4A] hover:text-[#B84A1C] transition-colors rounded-lg cursor-pointer"
                          aria-label="Increase quantity"
                        >
                          <FaPlus size={8} />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              )}
            </div>

            {/* Footer Summary */}
            {cart.length > 0 && (
              <div className="p-4 sm:p-6 bg-[#FAF7F2] border-t border-[#EAE4DC]">
                <div className="space-y-2 mb-4 text-xs">
                  <div className="flex justify-between items-center text-[#574F4A]">
                    <span>Items Subtotal</span>
                    <span className="font-bold text-[#181411]">₹{cartTotal}</span>
                  </div>
                  <div className="flex justify-between items-center text-[#574F4A]">
                    <span className="flex items-center gap-1.5">
                      <FaMotorcycle className="text-[#B84A1C]" /> Delivery
                    </span>
                    <span className={cartTotal >= 499 ? "text-[#2A6A4E] font-bold" : "text-[#181411]"}>
                      {cartTotal >= 499 ? 'FREE (Eligible)' : 'Free in Taloja · ₹49 other'}
                    </span>
                  </div>

                  <div className="pt-2.5 border-t border-[#EAE4DC] flex justify-between items-baseline">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#8C827A]">Estimated Total</span>
                    <span className="text-xl sm:text-2xl font-bold font-heading text-[#181411]">₹{cartTotal}</span>
                  </div>
                </div>

                <div className="space-y-2.5">
                  {!isKitchenOpen && (
                    <div className="bg-[#FAF7F2] border border-[#EAE4DC] rounded-xl p-3 text-left">
                      <span className="text-xs font-bold text-[#181411] tracking-wide block">
                        Kitchen Currently Resting
                      </span>
                      <p className="text-[11px] text-[#574F4A] mt-1 leading-snug">
                        2 Daily Slots: <strong>11:00 AM – 3:15 PM</strong> & <strong>7:00 PM – 9:15 PM</strong>. Items remain saved in your bag; checkout unlocks during open slots.
                      </p>
                    </div>
                  )}

                  {isKitchenOpen ? (
                    <Link
                      to="/cart/"
                      rel="nofollow"
                      onClick={toggleCart}
                      className="btn-primary w-full py-3.5 text-xs uppercase tracking-wider font-bold shadow-tactile-md flex items-center justify-center gap-2"
                    >
                      <span>Proceed to Checkout</span>
                      <FaArrowRight size={10} />
                    </Link>
                  ) : (
                    <button
                      disabled
                      className="w-full py-3.5 text-xs uppercase tracking-wider font-bold rounded-xl bg-[#EAE4DC] text-[#8C827A] cursor-not-allowed flex items-center justify-center gap-2 border border-[#DDD5CA]"
                    >
                      <span>{shortStatus ? `Reopens (${shortStatus})` : "Reopens Next Slot"}</span>
                    </button>
                  )}

                  <div className="flex items-center justify-between px-1">
                    <span className="text-[10px] text-[#8C827A]">Fast delivery across Navi Mumbai</span>
                    <button
                      onClick={() => clearCart()}
                      className="text-[10px] font-semibold text-[#8C827A] hover:text-[#9E2A2B] transition-colors cursor-pointer"
                    >
                      Clear Bag
                    </button>
                  </div>
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
