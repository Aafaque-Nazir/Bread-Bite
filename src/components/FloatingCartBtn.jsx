import React from 'react';
import { FaShoppingBag } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';

const FloatingCartBtn = () => {
  const { toggleCart, cartCount, cartTotal } = useCart();

  return (
    <AnimatePresence>
      {cartCount > 0 && (
        <div className="fixed bottom-6 right-6 z-[90]">
          <motion.button
            initial={{ y: 60, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 60, opacity: 0, scale: 0.9 }}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={toggleCart}
            aria-label="View Cart"
            className="flex items-center gap-3.5 bg-[#181411] text-white px-5 py-3.5 rounded-full shadow-warm-lg border border-white/10 hover:bg-[#26211D] transition-colors cursor-pointer group"
          >
            <div className="relative flex items-center justify-center">
              <FaShoppingBag size={15} className="text-[#EAE4DC] group-hover:text-white" />
              <span className="absolute -top-2 -right-2 bg-[#B84A1C] text-white text-[9px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            </div>

            <div className="h-4 w-px bg-white/20" />

            <div className="flex items-center gap-1.5">
              <span className="text-[11px] uppercase tracking-wider text-[#8C827A] font-semibold hidden sm:inline">Cart Total:</span>
              <span className="text-sm font-bold font-heading text-white">₹{cartTotal}</span>
            </div>
          </motion.button>
        </div>
      )}
    </AnimatePresence>
  );
};

export default FloatingCartBtn;
