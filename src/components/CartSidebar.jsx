import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaTimes, FaTrash, FaPlus, FaMinus, FaShoppingBag, FaArrowRight, FaMotorcycle } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const CartSidebar = () => {
  const { isCartOpen, toggleCart, cart, updateQuantity, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();

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

  const handleProceedToCheckout = () => {
    toggleCart();
    navigate('/cart');
  };

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
            className="fixed inset-0 bg-[#181411]/50 backdrop-blur-xs z-[100]"
          />

          {/* Drawer Container */}
          <motion.div
            data-lenis-prevent
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ type: 'spring', damping: 26, stiffness: 220 }}
            className="fixed top-2 bottom-2 right-2 sm:top-4 sm:bottom-4 sm:right-4 w-[calc(100vw-1rem)] sm:w-full sm:max-w-md bg-white border border-[#EAE4DC] z-[101] rounded-3xl shadow-warm-lg flex flex-col overflow-hidden"
          >
            {/* Drawer Header */}
            <div className="px-6 py-5 border-b border-[#EAE4DC] flex items-center justify-between bg-[#FAF7F2]">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#8C827A] block">
                  Order Summary
                </span>
                <h2 className="text-xl font-bold text-[#181411] font-heading">
                  Your Cart ({cart.reduce((sum, item) => sum + item.quantity, 0)})
                </h2>
              </div>
              <button
                onClick={toggleCart}
                className="w-8 h-8 rounded-full bg-white border border-[#EAE4DC] flex items-center justify-center text-[#574F4A] hover:text-[#181411] transition-colors"
                aria-label="Close cart drawer"
              >
                <FaTimes size={12} />
              </button>
            </div>

            {/* Item List */}
            <div className="flex-1 overflow-y-auto px-6 py-5 custom-scrollbar space-y-3">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-14 h-14 rounded-2xl bg-[#FAF7F2] border border-[#EAE4DC] flex items-center justify-center mb-4 text-[#8C827A]">
                    <FaShoppingBag size={18} />
                  </div>
                  <h3 className="text-base font-bold text-[#181411] font-heading mb-1">Your Cart is Empty</h3>
                  <p className="text-xs text-[#8C827A] max-w-[200px]">
                    Add some delicious food from our menu to start your order.
                  </p>
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
                      className="flex items-center gap-3.5 p-3 rounded-2xl bg-[#FAF7F2] border border-[#EAE4DC]"
                    >
                      {/* Image */}
                      <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0 border border-[#EAE4DC] bg-white">
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
                      <div className="flex items-center bg-white border border-[#EAE4DC] rounded-lg p-0.5 shadow-2xs">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-6 h-6 flex items-center justify-center text-[#574F4A] hover:text-[#B84A1C] transition-colors rounded"
                          aria-label="Decrease quantity"
                        >
                          {item.quantity === 1 ? <FaTrash size={9} /> : <FaMinus size={8} />}
                        </button>
                        <span className="text-xs font-bold w-5 text-center text-[#181411]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-6 h-6 flex items-center justify-center text-[#574F4A] hover:text-[#B84A1C] transition-colors rounded"
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
              <div className="p-6 bg-[#FAF7F2] border-t border-[#EAE4DC]">
                <div className="space-y-2 mb-5 text-xs">
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

                  <div className="pt-3 border-t border-[#EAE4DC] flex justify-between items-baseline">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#8C827A]">Estimated Total</span>
                    <span className="text-2xl font-bold font-heading text-[#181411]">₹{cartTotal}</span>
                  </div>
                </div>

                <div className="space-y-2.5">
                  <button
                    onClick={handleProceedToCheckout}
                    className="btn-primary w-full py-3.5 text-xs uppercase tracking-wider"
                  >
                    <span>Proceed to Checkout</span>
                    <FaArrowRight size={10} />
                  </button>

                  <div className="flex items-center justify-between px-1">
                    <span className="text-[10px] text-[#8C827A]">Fast delivery across Navi Mumbai</span>
                    <button
                      onClick={() => clearCart()}
                      className="text-[10px] font-semibold text-[#8C827A] hover:text-[#9E2A2B] transition-colors"
                    >
                      Clear Cart
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
