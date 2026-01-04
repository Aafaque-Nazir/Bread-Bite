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
                <div className="fixed bottom-10 right-10 z-[100] flex items-center justify-center">
                    {/* Pulse Glow Effect */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.2, 1] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-[-20px] bg-yellow-400/20 blur-[30px] rounded-full pointer-events-none"
                    />

                    <motion.button
                        layoutId="floating-cart"
                        initial={{ y: 100, opacity: 0, scale: 0.8 }}
                        animate={{ y: 0, opacity: 1, scale: 1 }}
                        exit={{ y: 100, opacity: 0, scale: 0.8 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={toggleCart}
                        className="group relative flex items-center gap-4 bg-zinc-950/40 backdrop-blur-2xl border border-white/10 px-8 py-5 rounded-[2rem] shadow-[0_30px_60px_rgba(0,0,0,0.6)] hover:border-yellow-400/30 transition-all duration-500 overflow-hidden"
                    >
                        {/* Subtle Shine Reflection */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.05] to-transparent pointer-events-none" />
                        
                        <div className="relative flex items-center justify-center">
                            <FaShoppingCart size={18} className="text-white group-hover:text-yellow-400 transition-colors duration-500" />
                            <motion.span 
                                key={cartCount}
                                initial={{ scale: 1.5, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="absolute -top-3 -right-4 bg-yellow-400 text-black text-[9px] font-black w-5 h-5 flex items-center justify-center rounded-full border border-black/10 shadow-lg"
                            >
                                {cartCount}
                            </motion.span>
                        </div>

                        <div className="flex flex-col items-start translate-y-0.5">
                            <span className="text-sm font-black text-white tracking-tighter leading-none italic">₹{cartTotal}</span>
                        </div>

                        {/* Animated Border Reveal */}
                        <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-yellow-400 transition-all duration-700 group-hover:w-full" />
                    </motion.button>
                </div>
            )}
        </AnimatePresence>
    );
};

export default FloatingCartBtn;
