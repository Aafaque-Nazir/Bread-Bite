import { FaShoppingBag, FaArrowRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';

const FloatingCartBtn = () => {
  const { toggleCart, cartCount, cartTotal } = useCart();

  return (
    <AnimatePresence>
      {cartCount > 0 && (
        <>
          {/* MOBILE APP-STYLE BOTTOM FLOATING ORDER BAR */}
          <div className="fixed bottom-3 inset-x-3 z-[90] sm:hidden">
            <motion.button
              initial={{ y: 50, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 50, opacity: 0, scale: 0.95 }}
              whileTap={{ scale: 0.98 }}
              onClick={toggleCart}
              aria-label="View Cart"
              className="w-full flex items-center justify-between bg-[#181411] text-white px-4 py-3.5 rounded-2xl shadow-tactile-lg border border-white/10 active:bg-[#26211D] transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="relative w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center text-[#FAF7F2]">
                  <FaShoppingBag size={14} />
                  <span className="absolute -top-1.5 -right-1.5 bg-[#B84A1C] text-white text-[9px] font-bold w-4.5 h-4.5 flex items-center justify-center rounded-full border border-[#181411]">
                    {cartCount}
                  </span>
                </div>
                <div className="text-left">
                  <span className="text-[10px] text-[#A89E94] uppercase tracking-wider font-semibold block leading-none">
                    {cartCount} {cartCount === 1 ? 'item' : 'items'}
                  </span>
                  <span className="text-base font-bold font-heading text-white leading-tight">
                    ₹{cartTotal}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 bg-[#B84A1C] hover:bg-[#9C3B12] text-white text-xs font-bold uppercase tracking-wider px-3.5 py-2 rounded-xl transition-colors">
                <span>View Bag</span>
                <FaArrowRight size={10} />
              </div>
            </motion.button>
          </div>

          {/* DESKTOP FLOATING PILL */}
          <div className="hidden sm:block fixed bottom-6 right-6 z-[90]">
            <motion.button
              initial={{ y: 40, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 40, opacity: 0, scale: 0.9 }}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={toggleCart}
              aria-label="View Cart"
              className="flex items-center gap-3.5 bg-[#181411] text-white px-5 py-3.5 rounded-full shadow-tactile-lg border border-white/10 hover:bg-[#26211D] transition-all cursor-pointer group"
            >
              <div className="relative flex items-center justify-center">
                <FaShoppingBag size={15} className="text-[#EAE4DC] group-hover:text-white" />
                <span className="absolute -top-2 -right-2 bg-[#B84A1C] text-white text-[9px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              </div>

              <div className="h-4 w-px bg-white/20" />

              <div className="flex items-center gap-1.5">
                <span className="text-[11px] uppercase tracking-wider text-[#8C827A] font-semibold">Bag Total:</span>
                <span className="text-sm font-bold font-heading text-white">₹{cartTotal}</span>
              </div>
            </motion.button>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default FloatingCartBtn;
