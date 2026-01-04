import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';

const FloatingCartBtn = () => {
    const { toggleCart, cartCount } = useCart();

    return (
        <AnimatePresence>
            {cartCount > 0 && (
                <motion.button
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={toggleCart}
                    className="fixed bottom-8 right-8 z-50 bg-yellow-400 text-black p-4 rounded-full shadow-2xl hover:shadow-yellow-400/40 transition-all flex items-center justify-center"
                >
                    <FaShoppingCart size={24} />
                    <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full border-2 border-black">
                        {cartCount}
                    </span>
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default FloatingCartBtn;
