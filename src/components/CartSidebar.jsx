import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaTimes, FaTrash, FaPlus, FaMinus, FaShoppingBag, FaArrowRight } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

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
                        className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[100]"
                    />

                    {/* Sidebar Container */}
                    <motion.div
                        initial={{ x: '100%', opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: '100%', opacity: 0 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed top-4 bottom-4 right-4 w-full max-w-md bg-white/95 backdrop-blur-xl border border-stone-200 z-[101] rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.1)] flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="px-8 pt-8 pb-6 border-b border-stone-100">
                            <div className="flex items-center justify-between mb-1">
                                <div className="flex flex-col">
                                    <h2 className="text-2xl font-bold text-stone-900 tracking-tight font-heading">Your Cart</h2>
                                    <div className="w-8 h-0.5 bg-orange-500 mt-2 rounded-full" />
                                </div>
                                <button 
                                    onClick={toggleCart} 
                                    className="w-10 h-10 rounded-xl bg-stone-100 flex items-center justify-center text-stone-400 hover:bg-orange-600 hover:text-white transition-all duration-300 group"
                                >
                                    <FaTimes size={14} className="group-hover:rotate-90 transition-transform duration-300" />
                                </button>
                            </div>
                        </div>

                        {/* Item List */}
                        <div className="flex-1 overflow-y-auto px-6 py-6 custom-scrollbar space-y-3">
                            {cart.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-center">
                                    <div className="w-16 h-16 rounded-full border-2 border-dashed border-stone-200 flex items-center justify-center mb-6 text-stone-300">
                                        <FaShoppingBag size={20} />
                                    </div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-400">Your cart is empty</p>
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
                                            className="group relative flex items-center gap-4 p-3 rounded-2xl hover:bg-orange-50/50 transition-all duration-300"
                                        >
                                            {/* Image */}
                                            <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0 border border-stone-100 bg-stone-50 shadow-sm">
                                                <img 
                                                    src={item.image} 
                                                    alt={item.name} 
                                                    className="w-full h-full object-cover"
                                                    onError={(e) => {
                                                        e.target.src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=120&h=120&auto=format&fit=crop';
                                                    }}
                                                />
                                            </div>
                                            
                                            <div className="flex-1 min-w-0">
                                                <h4 className="text-sm font-semibold text-stone-800 truncate mb-0.5">
                                                    {item.name}
                                                </h4>
                                                <div className="flex items-center gap-2">
                                                    <span className="text-sm font-bold text-stone-900">₹{item.price * item.quantity}</span>
                                                    <span className="text-[10px] text-stone-400 font-medium">× {item.quantity}</span>
                                                </div>
                                            </div>

                                            {/* Controls */}
                                            <div className="flex items-center gap-1 bg-stone-100 rounded-lg p-1">
                                                <button
                                                    onClick={() => updateQuantity(item.id, -1)}
                                                    className="w-6 h-6 flex items-center justify-center text-stone-400 hover:text-red-500 transition-colors rounded"
                                                >
                                                    {item.quantity === 1 ? <FaTrash size={9} /> : <FaMinus size={9} />}
                                                </button>
                                                <span className="text-xs font-bold w-5 text-center text-stone-700">{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, 1)}
                                                    className="w-6 h-6 flex items-center justify-center text-stone-400 hover:text-orange-600 transition-colors rounded"
                                                >
                                                    <FaPlus size={9} />
                                                </button>
                                            </div>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            )}
                        </div>

                        {/* Summary */}
                        {cart.length > 0 && (
                            <div className="p-8 bg-stone-50/80 border-t border-stone-100">
                                <div className="space-y-3 mb-6">
                                    <div className="flex justify-between items-center text-stone-500 text-xs font-semibold uppercase tracking-wider">
                                        <span>Subtotal</span>
                                        <span className="text-stone-700">₹{cartTotal}</span>
                                    </div>
                                    <div className="flex justify-between items-center text-stone-500 text-xs font-semibold uppercase tracking-wider">
                                        <span>Delivery</span>
                                        <span className="text-green-600">Free</span>
                                    </div>
                                    
                                    <div className="pt-4 mt-2 border-t border-stone-200 flex justify-between items-end">
                                        <div>
                                            <p className="text-[10px] text-stone-400 font-semibold uppercase tracking-[0.2em] mb-1">Total</p>
                                            <span className="text-3xl font-bold text-stone-900 tracking-tight font-heading">₹{grandTotal}</span>
                                        </div>
                                        <button 
                                            onClick={() => clearCart()}
                                            className="text-[10px] text-stone-400 font-semibold uppercase tracking-wider hover:text-red-500 transition-colors pb-1"
                                        >
                                            Clear All
                                        </button>
                                    </div>
                                </div>

                                <button
                                    onClick={handleProceedToCheckout}
                                    className="relative w-full group overflow-hidden rounded-2xl"
                                >
                                    <div className="absolute inset-0 bg-orange-600 transition-all duration-500 group-hover:bg-orange-700" />
                                    <div className="relative py-5 flex items-center justify-center gap-3 text-white font-bold text-xs uppercase tracking-[0.2em]">
                                        <span>Checkout</span>
                                        <FaArrowRight size={12} className="group-hover:translate-x-1.5 transition-transform duration-300" />
                                    </div>
                                </button>
                            </div>
                        )}
                    </motion.div>

                </>
            )}
        </AnimatePresence>
    );
};

export default CartSidebar;
