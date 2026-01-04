import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaStar, FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const ProductModal = ({ item, isOpen, onClose }) => {
    const { addToCart } = useCart();

    if (!isOpen || !item) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[60]"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none"
                    >
                        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden max-w-4xl w-full shadow-2xl pointer-events-auto flex flex-col md:flex-row max-h-[90vh]">

                            {/* Image Section */}
                            <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute top-4 left-4 flex flex-col gap-2">
                                     <div className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-yellow-400 border border-white/10 w-fit">
                                        {item.category}
                                    </div>
                                    {item.type && (
                                        <div className="bg-zinc-800/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-white border border-white/10 w-fit">
                                            {item.type}
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="w-full md:w-1/2 p-8 flex flex-col overflow-y-auto">
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{item.name}</h2>
                                        <div className="flex items-center gap-2 text-yellow-400 text-sm font-bold">
                                            <FaStar /> {item.rating || "4.8"} <span className="text-zinc-500 font-normal">• 150+ ordered</span>
                                        </div>
                                    </div>
                                    <button
                                        onClick={onClose}
                                        className="p-2 bg-zinc-800 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors"
                                    >
                                        <FaTimes size={20} />
                                    </button>
                                </div>

                                <p className="text-zinc-400 leading-relaxed mb-8">
                                    {item.description || "A delicious grilled sandwich loaded with fresh ingredients, premium cheese, and our secret sauces. Perfectly toasted for that extra crunch."}
                                </p>

                                <div className="mt-auto">
                                    <div className="flex items-center justify-between mb-6">
                                        <span className="text-zinc-400">Price</span>
                                        <span className="text-3xl font-bold text-white">₹{item.price}</span>
                                    </div>

                                    <button
                                        onClick={() => {
                                            addToCart(item);
                                            onClose();
                                        }}
                                        className="w-full py-4 bg-yellow-400 hover:bg-yellow-300 text-black font-bold rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-yellow-400/20 active:scale-95"
                                    >
                                        <FaShoppingCart /> Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default ProductModal;
