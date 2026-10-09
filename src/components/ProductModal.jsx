import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaStar, FaShoppingBag, FaCheckCircle } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const ProductModal = ({ item, isOpen, onClose }) => {
  const { addToCart } = useCart();

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

  return (
    <AnimatePresence>
      {isOpen && item && (
        <div data-lenis-prevent className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#181411]/60 backdrop-blur-xs"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="relative bg-white rounded-3xl overflow-hidden max-w-4xl w-full shadow-tactile-lg flex flex-col md:flex-row max-h-[90vh] border border-[#EAE4DC] z-10 my-auto"
          >
              {/* Close Button */}
              <button
                type="button"
                onClick={onClose}
                aria-label="Close product details"
                className="absolute top-4 right-4 z-[80] w-9 h-9 rounded-full bg-white/90 backdrop-blur border border-[#EAE4DC] flex items-center justify-center text-[#574F4A] hover:text-[#181411] hover:bg-white transition-colors"
              >
                <FaTimes size={13} />
              </button>

              {/* Image Section */}
              <div className="w-full md:w-1/2 h-64 md:h-auto relative overflow-hidden bg-[#FAF7F2]">
                <img
                  src={item.image}
                  alt={item.name}
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=600&auto=format&fit=crop';
                  }}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181411]/50 via-transparent to-transparent md:hidden" />

                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <span className={item.type === 'Veg' ? 'badge-veg' : 'badge-nonveg'}>
                    {item.type}
                  </span>
                  {item.isBestSeller && (
                    <span className="bg-[#181411] text-white text-[9px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full">
                      Bestseller
                    </span>
                  )}
                </div>
              </div>

              {/* Content Section */}
              <div className="w-full md:w-1/2 p-7 md:p-10 flex flex-col justify-between overflow-y-auto">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#8C827A]">
                      {item.category}
                    </span>
                    <span className="text-[#EAE4DC]">·</span>
                    <div className="flex items-center gap-1 text-[#D97706] text-xs font-bold">
                      <FaStar size={11} />
                      <span>{item.rating || "4.8"}</span>
                    </div>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold text-[#181411] mb-3 leading-tight font-heading">
                    {item.name}
                  </h2>

                  <p className="text-[#574F4A] text-sm leading-relaxed mb-6">
                    {item.description || "Freshly prepared with quality ingredients and great taste."}
                  </p>

                  <div className="bg-[#FAF7F2] rounded-2xl p-4 border border-[#EAE4DC] mb-6 space-y-2">
                    <div className="flex items-center gap-2 text-xs text-[#2A6A4E] font-medium">
                      <FaCheckCircle size={12} />
                      <span>Cooked fresh after you place your order</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#574F4A] font-medium">
                      <FaCheckCircle size={12} className="text-[#8C827A]" />
                      <span>Delivered hot to your door in 25–35 mins</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#EAE4DC] mt-auto">
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <span className="text-[10px] text-[#8C827A] uppercase font-bold tracking-wider block">Price</span>
                      <span className="text-3xl font-bold text-[#181411] font-heading">
                        ₹{item.price}
                      </span>
                    </div>
                    {item.originalPrice && (
                      <span className="text-sm text-[#8C827A] line-through">
                        ₹{item.originalPrice}
                      </span>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      addToCart(item);
                      onClose();
                    }}
                    className="btn-primary w-full py-3.5 text-sm uppercase tracking-wider"
                  >
                    <FaShoppingBag size={14} />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    );
  };

export default ProductModal;
