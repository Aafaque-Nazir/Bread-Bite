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
                        className="fixed inset-0 bg-black/95 backdrop-blur-md z-[60]"
                    />

                    {/* Modal Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 30 }}
                        className="fixed inset-0 z-[70] flex items-center justify-center p-4 md:p-8 pointer-events-none"
                    >
                        <div className="bg-[#050505] border border-white/5 rounded-[3rem] overflow-hidden max-w-6xl w-full shadow-[0_50px_100px_rgba(0,0,0,0.9)] pointer-events-auto flex flex-col md:flex-row max-h-[90vh] relative">
                            
                            {/* Professional Close button */}
                            <button
                                onClick={onClose}
                                className="absolute top-8 right-8 z-[80] w-12 h-12 rounded-2xl bg-zinc-900/50 backdrop-blur-xl border border-white/10 flex items-center justify-center text-zinc-400 hover:bg-white hover:text-black transition-all duration-500 hover:scale-105 active:scale-95 group"
                            >
                                <FaTimes size={16} className="group-hover:rotate-90 transition-transform duration-500" />
                            </button>

                            {/* Image Section */}
                            <div className="w-full md:w-1/2 h-80 md:h-auto relative overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover grayscale-[0.2]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
                                
                                <div className="absolute bottom-12 left-12 flex flex-col gap-4">
                                     <div className="bg-yellow-400 text-black px-5 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em] shadow-2xl shadow-yellow-400/30 w-fit">
                                        {item.category}
                                    </div>
                                    <div className="bg-black/40 backdrop-blur-2xl border border-white/10 px-5 py-2 rounded-full text-xs font-black text-white uppercase tracking-widest w-fit">
                                        {item.type} • NAVI MUMBAI DELIVERED
                                    </div>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="w-full md:w-1/2 p-12 md:p-16 flex flex-col overflow-y-auto">
                                <div className="mb-12">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="flex items-center gap-2 text-yellow-400 text-xs font-black">
                                            <FaStar size={12} /> {item.rating || "4.8"}
                                        </div>
                                        <div className="h-3 w-px bg-white/10" />
                                        <span className="text-zinc-600 text-xs font-black uppercase tracking-[0.2em]">Crafted Pure</span>
                                    </div>
                                    <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 uppercase tracking-tight leading-[0.85] italic font-heading">{item.name}</h2>
                                    <div className="w-20 h-1 bg-yellow-400/50 rounded-full" />
                                </div>

                                <p className="text-zinc-500 text-base leading-relaxed mb-16 font-medium tracking-normal">
                                    {item.description || "A signature blend of fresh ingredients and artisan recipes. Perfectly toasted and prepared to satisfy your deepest cravings."}
                                </p>

                                <div className="mt-auto">
                                    <div className="flex items-end justify-between mb-12 pb-12 border-b border-white/5">
                                        <div className="space-y-3">
                                            <p className="text-xs text-zinc-700 font-bold uppercase tracking-[0.4em]">Net Total</p>
                                            <span className="text-7xl font-bold text-white tracking-tight italic font-heading">₹{Math.floor(item.price)}</span>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-xs text-zinc-600 font-bold uppercase tracking-[0.2em] mb-2 text-green-500">Live Status</p>
                                            <p className="text-white text-[12px] font-black uppercase tracking-widest">READY TO DISPATCH</p>
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => {
                                            addToCart(item);
                                            onClose();
                                        }}
                                        className="w-full py-8 bg-white hover:bg-yellow-400 text-black font-black uppercase text-xs tracking-[0.4em] rounded-[2rem] flex items-center justify-center gap-4 transition-all duration-700 shadow-2xl active:scale-[0.98] group"
                                    >
                                        <FaShoppingCart className="group-hover:-translate-x-1 transition-transform" /> 
                                        <span>Add To Selection</span>
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
