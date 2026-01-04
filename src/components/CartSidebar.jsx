import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaTrash, FaWhatsapp, FaPlus, FaMinus } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const CartSidebar = () => {
    const { isCartOpen, toggleCart, cart, removeFromCart, updateQuantity, cartTotal, clearCart, DELIVERY_CHARGE, grandTotal } = useCart();

    const handleCheckout = () => {
        if (cart.length === 0) return;

        let message = "Hello! I'd like to place an order:\n\n";
        cart.forEach((item) => {
            message += `• ${item.name} x ${item.quantity} - ₹${item.price * item.quantity}\n`;
        });
        message += `\nSubtotal: ₹${cartTotal}\nDelivery Charge: ₹${DELIVERY_CHARGE}\n*Grand Total: ₹${grandTotal}*\n\nPlease confirm my order!`;

        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/919325629256?text=${encodedMessage}`, '_blank');
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
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
                    />

                    {/* Sidebar */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 h-full w-full max-w-md bg-zinc-900 border-l border-zinc-800 z-50 shadow-2xl flex flex-col"
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-zinc-800 flex items-center justify-between bg-zinc-900/50 backdrop-blur-md">
                            <h2 className="text-2xl font-bold text-white">Your <span className="text-yellow-400">Cart</span></h2>
                            <button onClick={toggleCart} className="text-zinc-400 hover:text-white transition-colors">
                                <FaTimes size={24} />
                            </button>
                        </div>

                        {/* Cart Items */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-6">
                            {cart.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-center text-zinc-500">
                                    <FaWhatsapp size={48} className="mb-4 opacity-20" />
                                    <p className="text-lg">Your cart is empty.</p>
                                    <p className="text-sm">Add some delicious items to get started!</p>
                                </div>
                            ) : (
                                cart.map((item) => (
                                    <motion.div
                                        layout
                                        key={item.id}
                                        className="flex items-center gap-4 bg-zinc-800/50 p-4 rounded-xl border border-zinc-700/50"
                                    >
                                        <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg object-cover" />
                                        <div className="flex-1">
                                            <h4 className="font-bold text-white text-sm mb-1">{item.name}</h4>
                                            <p className="text-yellow-400 font-bold text-sm">₹{item.price * item.quantity}</p>
                                        </div>

                                        <div className="flex items-center gap-3 bg-zinc-900 rounded-lg p-1">
                                            <button
                                                onClick={() => updateQuantity(item.id, -1)}
                                                className="w-6 h-6 flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
                                            >
                                                {item.quantity === 1 ? <FaTrash size={10} /> : <FaMinus size={10} />}
                                            </button>
                                            <span className="text-sm font-bold text-white w-4 text-center">{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.id, 1)}
                                                className="w-6 h-6 flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
                                            >
                                                <FaPlus size={10} />
                                            </button>
                                        </div>
                                    </motion.div>
                                ))
                            )}
                        </div>

                        {/* Footer */}
                        {cart.length > 0 && (
                            <div className="p-6 border-t border-zinc-800 bg-zinc-900">
                                <div className="space-y-3 mb-6">
                                    <div className="flex justify-between items-center text-zinc-400">
                                        <span>Subtotal</span>
                                        <span>₹{cartTotal}</span>
                                    </div>
                                    <div className="flex justify-between items-center text-zinc-400">
                                        <span>Delivery Charge</span>
                                        <span className="text-green-500 font-bold uppercase text-[10px]">Free (Navi Mumbai)</span>
                                    </div>
                                    <div className="flex justify-between items-center pt-3 border-t border-zinc-800">
                                        <span className="text-lg font-bold text-white">Grand Total</span>
                                        <span className="text-2xl font-bold text-yellow-400">₹{grandTotal}</span>
                                    </div>
                                </div>
                                <button
                                    onClick={handleCheckout}
                                    className="w-full py-4 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-green-500/20"
                                >
                                    <FaWhatsapp size={20} /> Checkout on WhatsApp
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
