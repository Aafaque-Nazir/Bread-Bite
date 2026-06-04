import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const FloatingCartBtn = () => {
    const navigate = useNavigate();
    const { toggleCart, cartCount, cartTotal } = useCart();

    return (
        <AnimatePresence>
            {cartCount > 0 && (
                <div className="fixed bottom-8 right-8 z-[100] flex items-center justify-center">
                    {/* Pulse Glow Effect */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: [0.08, 0.15, 0.08], scale: [1, 1.15, 1] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-[-16px] bg-orange-500/20 blur-[25px] rounded-full pointer-events-none"
                    />

                    <motion.button
                        layoutId="floating-cart"
                        initial={{ y: 100, opacity: 0, scale: 0.8 }}
                        animate={{ y: 0, opacity: 1, scale: 1 }}
                        exit={{ y: 100, opacity: 0, scale: 0.8 }}
                        whileHover={{ scale: 1.05, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate("/cart")}
                        className="group relative flex items-center gap-4 bg-white/90 backdrop-blur-xl border border-stone-200 px-7 py-4 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:border-orange-300 hover:shadow-[0_12px_40px_rgba(232,89,12,0.12)] transition-all duration-500 overflow-hidden"
                    >
                        <div className="relative flex items-center justify-center">
                            <FaShoppingCart size={16} className="text-stone-700 group-hover:text-orange-600 transition-colors duration-300" />
                            <motion.span 
                                key={cartCount}
                                initial={{ scale: 1.5, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="absolute -top-2.5 -right-3 bg-orange-600 text-white text-[8px] font-bold w-4 h-4 flex items-center justify-center rounded-full"
                            >
                                {cartCount}
                            </motion.span>
                        </div>

                        <div className="flex flex-col items-start">
                            <span className="text-sm font-bold text-stone-900 tracking-tight leading-none">₹{cartTotal}</span>
                        </div>

                        {/* Bottom border reveal */}
                        <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-orange-500 transition-all duration-500 group-hover:w-full" />
                    </motion.button>
                </div>
            )}
        </AnimatePresence>
    );
};

export default FloatingCartBtn;
