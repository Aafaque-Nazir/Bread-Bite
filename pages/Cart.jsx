import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../src/context/CartContext';
import { FaTrash, FaMinus, FaPlus, FaWhatsapp, FaArrowLeft, FaShoppingBag, FaCheckCircle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import SEO from '../src/components/SEO';

const Cart = () => {
    const { cart, removeFromCart, updateQuantity, cartTotal, grandTotal, clearCart } = useCart();
    const navigate = useNavigate();
    const [details, setDetails] = React.useState({
        name: '',
        phone: '',
        address: '',
        landmark: ''
    });
    const [errors, setErrors] = React.useState({});

    const validateForm = () => {
        const newErrors = {};
        if (!details.name.trim()) newErrors.name = 'Name is required';
        if (!details.phone.trim() || details.phone.length < 10) newErrors.phone = 'Valid phone number is required';
        if (!details.address.trim()) newErrors.address = 'Delivery address is required';
        return newErrors;
    };

    const handleCheckout = () => {
        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        } 

        const message = cart.map(item => `• ${item.name} (x${item.quantity}) - ₹${item.price * item.quantity}`).join('\n');
        const customerInfo = `\n\n👤 *Customer Details:*\nName: ${details.name}\nPhone: ${details.phone}\nAddress: ${details.address}, ${details.landmark || ''}`;
        const totalStr = `\n\n💰 *Total: ₹${grandTotal}*\n(Free Delivery: Navi Mumbai)`;
        
        const fullMessage = `New Order From Bread & Bite:\n${customerInfo}\n\n🛒 *Order Summary:*\n${message}${totalStr}`;
        
        const whatsappUrl = `https://wa.me/919325629256?text=${encodeURIComponent(fullMessage)}`;
        window.open(whatsappUrl, '_blank');
    };

    if (cart.length === 0) {
        return (
            <div className="min-h-[80vh] flex flex-col items-center justify-center px-6">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center"
                >
                    <div className="w-24 h-24 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center text-zinc-700 mx-auto mb-8">
                        <FaShoppingBag size={40} />
                    </div>
                    <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-4">Your Bag is Empty</h2>
                    <p className="text-zinc-500 mb-10 max-w-sm mx-auto font-medium">
                        Looks like you haven't added any gourmet delights yet. Let's find something delicious for you.
                    </p>
                    <Link 
                        to="/menu"
                        className="inline-flex items-center gap-3 px-10 py-5 bg-yellow-400 text-black font-black text-sm uppercase tracking-[0.2em] rounded-2xl hover:bg-yellow-300 transition-all active:scale-95 shadow-2xl shadow-yellow-400/20"
                    >
                        Explore Menu <FaArrowLeft className="rotate-180" />
                    </Link>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black text-white pt-24 pb-20 px-6">
            <SEO
                title="Your Cart - Bread & Bite"
                description="Review your cart and complete your order. Free delivery across Navi Mumbai!"
                url="/cart"
                noindex={true}
            />
            <div className="max-w-7xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-bold mb-16 tracking-tight font-heading uppercase">
                    Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-600">Bag</span>
                </h1>

                <div className="grid lg:grid-cols-12 gap-16">
                    {/* Left: Minimalist Item List */}
                    <div className="lg:col-span-7 space-y-12">
                        <AnimatePresence mode="popLayout">
                            {cart.map((item) => (
                                <motion.div
                                    key={item.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="flex gap-6 items-start group"
                                >
                                    <div className="w-24 h-24 bg-zinc-900 rounded-xl overflow-hidden shrink-0 border border-white/5 group-hover:border-yellow-400/30 transition-colors">
                                        <img 
                                            src={item.image} 
                                            alt={item.name} 
                                            className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                                            onError={(e) => {
                                                e.target.src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=300&h=300&auto=format&fit=crop';
                                            }}
                                        />
                                    </div>
                                    <div className="flex-1 min-w-0 pt-1">
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="text-xl font-bold font-heading leading-tight max-w-[80%]">{item.name}</h3>
                                            <span className="text-xl font-bold font-heading">₹{item.price * item.quantity}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-zinc-500 font-medium">₹{item.price} each</span>
                                            
                                            <div className="flex items-center gap-4">
                                                <div className="flex items-center gap-3 bg-zinc-900 rounded-lg px-2 py-1">
                                                    <button 
                                                        onClick={() => updateQuantity(item.id, -1)}
                                                        className="w-6 h-6 flex items-center justify-center text-zinc-500 hover:text-white transition-colors"
                                                    >
                                                        <FaMinus size={8} />
                                                    </button>
                                                    <span className="text-sm font-bold w-4 text-center">{item.quantity}</span>
                                                    <button 
                                                        onClick={() => updateQuantity(item.id, 1)}
                                                        className="w-6 h-6 flex items-center justify-center text-zinc-500 hover:text-white transition-colors"
                                                    >
                                                        <FaPlus size={8} />
                                                    </button>
                                                </div>
                                                <button 
                                                    onClick={() => removeFromCart(item.id)}
                                                    className="text-zinc-600 hover:text-red-500 transition-colors p-2"
                                                >
                                                    <FaTrash size={12} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* Right: Sleek Checkout Panel */}
                    <div className="lg:col-span-5">
                        <div className="bg-zinc-900 rounded-3xl p-8 lg:p-10 sticky top-24">
                            <h2 className="text-xl font-bold mb-8 font-heading">DELIVERY DETAILS</h2>
                            
                            <div className="space-y-4 mb-10">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    value={details.name}
                                    onChange={(e) => setDetails({ ...details, name: e.target.value })}
                                    className={`w-full bg-black border ${errors.name ? 'border-red-500' : 'border-zinc-800'} rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-yellow-400 transition-colors`}
                                />
                                <input
                                    type="tel"
                                    placeholder="Phone Number"
                                    value={details.phone}
                                    onChange={(e) => setDetails({ ...details, phone: e.target.value })}
                                    className={`w-full bg-black border ${errors.phone ? 'border-red-500' : 'border-zinc-800'} rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-yellow-400 transition-colors`}
                                />
                                <textarea
                                    placeholder="Full Address"
                                    rows="2"
                                    value={details.address}
                                    onChange={(e) => setDetails({ ...details, address: e.target.value })}
                                    className={`w-full bg-black border ${errors.address ? 'border-red-500' : 'border-zinc-800'} rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-yellow-400 transition-colors resize-none`}
                                />
                                <input
                                    type="text"
                                    placeholder="Landmark (Optional)"
                                    value={details.landmark}
                                    onChange={(e) => setDetails({ ...details, landmark: e.target.value })}
                                    className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-yellow-400 transition-colors"
                                />
                            </div>

                            <div className="space-y-3 mb-8 pt-8 border-t border-white/5">
                                <div className="flex justify-between text-zinc-400 text-sm">
                                    <span>Subtotal</span>
                                    <span>₹{cartTotal}</span>
                                </div>
                                <div className="flex justify-between text-zinc-400 text-sm">
                                    <span>Delivery</span>
                                    <span className="text-white">Free</span>
                                </div>
                                <div className="flex justify-between text-xl font-bold text-white pt-4 mt-4 border-t border-white/5 font-heading">
                                    <span>Total</span>
                                    <span>₹{grandTotal}</span>
                                </div>
                            </div>

                            <button
                                onClick={handleCheckout}
                                className="w-full bg-gradient-to-r from-yellow-400 to-amber-600 text-black font-black uppercase tracking-widest py-4 rounded-xl hover:scale-[1.02] transition-transform shadow-lg shadow-yellow-400/20 flex items-center justify-center gap-3"
                            >
                                <FaWhatsapp size={20} />
                                <span>Proceed to Order</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
