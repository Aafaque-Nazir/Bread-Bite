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
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
                    />

                    {/* Modal Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 30 }}
                        className="fixed inset-0 z-[70] flex items-center justify-center p-4 md:p-8 pointer-events-none"
                    >
                        <div className="bg-white rounded-[2rem] overflow-hidden max-w-5xl w-full shadow-[0_25px_60px_rgba(0,0,0,0.15)] pointer-events-auto flex flex-col md:flex-row max-h-[90vh] relative border border-stone-100">
                            
                            {/* Close button */}
                            <button
                                onClick={onClose}
                                className="absolute top-6 right-6 z-[80] w-10 h-10 rounded-xl bg-white/90 backdrop-blur border border-stone-200 flex items-center justify-center text-stone-400 hover:bg-orange-600 hover:text-white hover:border-orange-600 transition-all duration-300 group"
                            >
                                <FaTimes size={14} className="group-hover:rotate-90 transition-transform duration-300" />
                            </button>

                            {/* Image Section */}
                            <div className="w-full md:w-1/2 h-72 md:h-auto relative overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                                
                                <div className="absolute bottom-8 left-8 flex flex-col gap-3">
                                     <div className="bg-orange-600 text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.15em] shadow-lg w-fit">
                                        {item.category}
                                    </div>
                                    <div className="bg-white/20 backdrop-blur-xl border border-white/20 px-4 py-1.5 rounded-full text-[10px] font-bold text-white uppercase tracking-widest w-fit">
                                        {item.type} • Navi Mumbai Delivered
                                    </div>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col overflow-y-auto">
                                <div className="mb-8">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="flex items-center gap-1.5 text-orange-500 text-xs font-bold">
                                            <FaStar size={12} /> {item.rating || "4.8"}
                                        </div>
                                        <div className="h-3 w-px bg-stone-200" />
                                        <span className="text-stone-400 text-xs font-semibold uppercase tracking-[0.15em]">Crafted Fresh</span>
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4 leading-tight font-heading">{item.name}</h2>
                                    <div className="w-12 h-1 bg-orange-500 rounded-full" />
                                </div>

                                <p className="text-stone-500 text-base leading-relaxed mb-10 font-medium">
                                    {item.description || "A signature blend of fresh ingredients and artisan recipes. Perfectly prepared to satisfy your deepest cravings."}
                                </p>

                                <div className="mt-auto">
                                    <div className="flex items-end justify-between mb-8 pb-8 border-b border-stone-100">
                                        <div className="space-y-1">
                                            <p className="text-xs text-stone-400 font-semibold uppercase tracking-[0.2em]">Price</p>
                                            <span className="text-5xl font-bold text-stone-900 tracking-tight font-heading">₹{Math.floor(item.price)}</span>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-xs text-green-600 font-semibold uppercase tracking-[0.15em] mb-1">Status</p>
                                            <p className="text-stone-900 text-[11px] font-bold uppercase tracking-widest">Ready to Dispatch</p>
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => {
                                            addToCart(item);
                                            onClose();
                                        }}
                                        className="w-full py-5 bg-orange-600 hover:bg-orange-700 text-white font-bold uppercase text-xs tracking-[0.2em] rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 shadow-lg shadow-orange-600/20 active:scale-[0.98] group"
                                    >
                                        <FaShoppingCart className="group-hover:-translate-x-1 transition-transform" /> 
                                        <span>Add to Cart</span>
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
