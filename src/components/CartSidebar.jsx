import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaTimes, FaTrash, FaPlus, FaMinus, FaShoppingBag, FaArrowRight } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import clsx from 'clsx';

const CartSidebar = () => {
    const { isCartOpen, toggleCart, cart, removeFromCart, updateQuantity, cartTotal, DELIVERY_CHARGE, grandTotal, clearCart } = useCart();
    const navigate = useNavigate();

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
                        className="fixed inset-0 bg-black/90 backdrop-blur-md z-[100]"
                    />

                    {/* Sidebar Container */}
                    <motion.div
                        initial={{ x: '100%', opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: '100%', opacity: 0 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed top-4 bottom-4 right-4 w-full max-w-md bg-zinc-950/40 backdrop-blur-3xl border border-white/10 z-[101] rounded-[2.5rem] shadow-[0_40px_100px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden"
                    >
                        {/* Neo-Lux Header */}
                        <div className="px-8 pt-10 pb-6 border-b border-white/5 relative bg-gradient-to-b from-white/[0.02] to-transparent">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex flex-col">
                                    <h2 className="text-3xl font-black text-white tracking-tighter uppercase italic leading-none">Cart</h2>
                                    <div className="w-8 h-1 bg-yellow-400 mt-2" />
                                </div>
                                <button 
                                    onClick={toggleCart} 
                                    className="w-12 h-12 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 hover:bg-white hover:text-black transition-all duration-500 hover:scale-105 active:scale-95 group"
                                >
                                    <FaTimes size={16} className="group-hover:rotate-90 transition-transform duration-500" />
                                </button>
                            </div>
                        </div>

                        {/* Staggered Item List */}
                        <div className="flex-1 overflow-y-auto px-6 py-8 custom-scrollbar space-y-4">
                            {cart.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-center opacity-20">
                                    <div className="w-16 h-16 rounded-full border border-dashed border-white/20 flex items-center justify-center mb-6">
                                        <FaShoppingBag size={20} />
                                    </div>
                                    <p className="text-[10px] font-bold uppercase tracking-[0.3em]">Selection is Empty</p>
                                </div>
                            ) : (
                                <AnimatePresence mode="popLayout">
                                    {cart.map((item, index) => (
                                        <motion.div
                                            layout
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, scale: 0.95 }}
                                            transition={{ delay: index * 0.05 }}
                                            key={item.id}
                                            className="group relative flex items-center gap-5 p-4 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300"
                                        >
                                            {/* Petit Image */}
                                            <div className="w-16 h-16 rounded-2xl overflow-hidden shrink-0 border border-white/5 bg-zinc-900 shadow-2xl relative">
                                                <img 
                                                    src={item.image} 
                                                    alt={item.name} 
                                                    className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700"
                                                    onError={(e) => {
                                                        e.target.src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=120&h=120&auto=format&fit=crop';
                                                    }}
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </div>
                                            
                                            <div className="flex-1 min-w-0">
                                                <h4 className="text-sm font-bold text-white/90 truncate mb-1 uppercase tracking-tight">
                                                    {item.name}
                                                </h4>
                                                <div className="flex items-center gap-3">
                                                    <span className="text-base font-black text-white tracking-tighter">₹{item.price * item.quantity}</span>
                                                    <div className="h-3 w-px bg-white/10" />
                                                    <span className="text-[9px] text-zinc-500 font-bold uppercase tracking-widest">{item.quantity} Unit</span>
                                                </div>
                                            </div>

                                            {/* Minimal Controls */}
                                            <div className="flex flex-col gap-1 items-center bg-black/40 p-1 rounded-xl border border-white/5 opacity-0 group-hover:opacity-100 transition-all translate-x-2 group-hover:translate-x-0">
                                                <button
                                                    onClick={() => updateQuantity(item.id, 1)}
                                                    className="w-7 h-7 flex items-center justify-center text-zinc-500 hover:text-yellow-400 transition-colors"
                                                >
                                                    <FaPlus size={10} />
                                                </button>
                                                <button
                                                    onClick={() => updateQuantity(item.id, -1)}
                                                    className="w-7 h-7 flex items-center justify-center text-zinc-500 hover:text-red-400 transition-colors"
                                                >
                                                    {item.quantity === 1 ? <FaTrash size={10} /> : <FaMinus size={10} />}
                                                </button>
                                            </div>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            )}
                        </div>

                        {/* Neo-Lux Summary */}
                        {cart.length > 0 && (
                            <div className="p-10 bg-black/60 border-t border-white/5 backdrop-blur-md">
                                <div className="space-y-4 mb-10">
                                    <div className="flex justify-between items-center text-zinc-500 text-[9px] font-black uppercase tracking-[0.3em]">
                                        <span>Items</span>
                                        <span className="text-white/60">₹{cartTotal}</span>
                                    </div>
                                    <div className="flex justify-between items-center text-zinc-500 text-[9px] font-black uppercase tracking-[0.3em]">
                                        <span>Delivery</span>
                                        <span className="text-green-500/80">FREE</span>
                                    </div>
                                    
                                    <div className="pt-8 mt-4 border-t border-white/5 flex justify-between items-end">
                                        <div>
                                            <p className="text-[10px] text-zinc-600 font-bold uppercase tracking-[0.4em] mb-3">Total</p>
                                            <span className="text-5xl font-black text-white tracking-tighter italic">₹{grandTotal}</span>
                                        </div>
                                        <button 
                                            onClick={() => clearCart()}
                                            className="text-[8px] text-zinc-700 font-black uppercase tracking-[0.4em] hover:text-red-500 transition-colors py-2 border-b border-white/5 mb-2"
                                        >
                                            Reset
                                        </button>
                                    </div>
                                </div>

                                <button
                                    onClick={handleProceedToCheckout}
                                    className="relative w-full group overflow-hidden rounded-3xl"
                                >
                                    <div className="absolute inset-0 bg-yellow-400 transition-transform duration-700 group-hover:scale-105" />
                                    <div className="relative py-7 flex items-center justify-center gap-4 text-black font-black text-xs uppercase tracking-[0.4em]">
                                        <span>Proceed to Checkout</span>
                                        <FaArrowRight size={14} className="group-hover:translate-x-2 transition-transform duration-500" />
                                    </div>
                                </button>
                                
                                <p className="text-center text-[7px] text-zinc-800 font-bold uppercase tracking-[0.6em] mt-8">
                                    Navi Mumbai • Premium Cuisine
                                </p>
                            </div>
                        )}
                    </motion.div>

                </>
            )}
        </AnimatePresence>
    );
};

export default CartSidebar;

// Add this to your index.css or keep it here for now if needed.
// This is a CSS-in-JS injection for the scrollbar.
const style = document.createElement('style');
style.textContent = `
    .custom-scrollbar::-webkit-scrollbar {
        width: 4px;
    }
    .custom-scrollbar::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 0.02);
    }
    .custom-scrollbar::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0.1);
        border-radius: 10px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
        background: rgba(251, 191, 36, 0.3);
    }
`;
document.head.appendChild(style);

