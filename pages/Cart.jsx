import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../src/context/CartContext';
import { FaTrash, FaMinus, FaPlus, FaWhatsapp, FaArrowLeft, FaShoppingBag } from 'react-icons/fa';
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
            <div className="min-h-[80vh] flex flex-col items-center justify-center px-6 bg-[#FFFAF5]">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center"
                >
                    <div className="w-20 h-20 rounded-full bg-stone-100 border border-stone-200 flex items-center justify-center text-stone-300 mx-auto mb-6">
                        <FaShoppingBag size={32} />
                    </div>
                    <h2 className="text-2xl font-bold text-stone-900 tracking-tight mb-3 font-heading">Your Cart is Empty</h2>
                    <p className="text-stone-500 mb-8 max-w-sm mx-auto text-sm">
                        Looks like you haven't added any delights yet. Let's find something delicious for you.
                    </p>
                    <Link 
                        to="/menu"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-orange-600 text-white font-semibold text-sm uppercase tracking-wider rounded-2xl hover:bg-orange-700 transition-all shadow-lg shadow-orange-600/20"
                    >
                        Explore Menu <FaArrowLeft className="rotate-180 text-xs" />
                    </Link>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#FFFAF5] text-stone-900 pt-28 pb-20 px-6">
            <SEO
                title="Your Cart - Bread & Bite"
                description="Review your cart and complete your order. Free delivery across Navi Mumbai!"
                url="/cart"
                noindex={true}
            />
            <div className="max-w-7xl mx-auto">
                <div className="mb-12">
                    <span className="text-orange-600 text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">Checkout</span>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight font-heading">
                        Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-600">Cart</span>
                    </h1>
                </div>

                <div className="grid lg:grid-cols-12 gap-10">
                    {/* Left: Item List */}
                    <div className="lg:col-span-7 space-y-4">
                        <AnimatePresence mode="popLayout">
                            {cart.map((item) => (
                                <motion.div
                                    key={item.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="flex gap-5 items-center p-4 bg-white rounded-2xl border border-stone-100 hover:border-orange-200 hover:shadow-sm transition-all group"
                                >
                                    <div className="w-20 h-20 bg-stone-50 rounded-xl overflow-hidden shrink-0 border border-stone-100">
                                        <img 
                                            src={item.image} 
                                            alt={item.name} 
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            onError={(e) => {
                                                e.target.src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=300&h=300&auto=format&fit=crop';
                                            }}
                                        />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex justify-between items-start mb-1">
                                            <h3 className="text-base font-bold font-heading leading-tight max-w-[75%]">{item.name}</h3>
                                            <span className="text-base font-bold">₹{item.price * item.quantity}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs text-stone-400">₹{item.price} each</span>
                                            
                                            <div className="flex items-center gap-3">
                                                <div className="flex items-center gap-2 bg-stone-50 border border-stone-200 rounded-lg px-2 py-1">
                                                    <button 
                                                        onClick={() => updateQuantity(item.id, -1)}
                                                        className="w-5 h-5 flex items-center justify-center text-stone-400 hover:text-red-500 transition-colors"
                                                    >
                                                        <FaMinus size={8} />
                                                    </button>
                                                    <span className="text-sm font-bold w-4 text-center">{item.quantity}</span>
                                                    <button 
                                                        onClick={() => updateQuantity(item.id, 1)}
                                                        className="w-5 h-5 flex items-center justify-center text-stone-400 hover:text-orange-600 transition-colors"
                                                    >
                                                        <FaPlus size={8} />
                                                    </button>
                                                </div>
                                                <button 
                                                    onClick={() => removeFromCart(item.id)}
                                                    className="text-stone-300 hover:text-red-500 transition-colors p-1.5"
                                                >
                                                    <FaTrash size={11} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* Right: Checkout Panel */}
                    <div className="lg:col-span-5">
                        <div className="bg-white rounded-3xl p-8 border border-stone-100 shadow-[0_4px_24px_rgba(0,0,0,0.04)] sticky top-24">
                            <h2 className="text-lg font-bold mb-6 font-heading">Delivery Details</h2>
                            
                            <div className="space-y-3 mb-8">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    value={details.name}
                                    onChange={(e) => { setDetails({ ...details, name: e.target.value }); setErrors({...errors, name: ''}) }}
                                    className={`w-full bg-stone-50 border ${errors.name ? 'border-red-400' : 'border-stone-200'} rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-400 focus:shadow-[0_0_0_3px_rgba(232,89,12,0.06)] transition-all`}
                                />
                                {errors.name && <p className="text-red-500 text-xs font-medium ml-1">{errors.name}</p>}
                                <input
                                    type="tel"
                                    placeholder="Phone Number"
                                    value={details.phone}
                                    onChange={(e) => { setDetails({ ...details, phone: e.target.value }); setErrors({...errors, phone: ''}) }}
                                    className={`w-full bg-stone-50 border ${errors.phone ? 'border-red-400' : 'border-stone-200'} rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-400 focus:shadow-[0_0_0_3px_rgba(232,89,12,0.06)] transition-all`}
                                />
                                {errors.phone && <p className="text-red-500 text-xs font-medium ml-1">{errors.phone}</p>}
                                <textarea
                                    placeholder="Full Address"
                                    rows="2"
                                    value={details.address}
                                    onChange={(e) => { setDetails({ ...details, address: e.target.value }); setErrors({...errors, address: ''}) }}
                                    className={`w-full bg-stone-50 border ${errors.address ? 'border-red-400' : 'border-stone-200'} rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-400 focus:shadow-[0_0_0_3px_rgba(232,89,12,0.06)] transition-all resize-none`}
                                />
                                {errors.address && <p className="text-red-500 text-xs font-medium ml-1">{errors.address}</p>}
                                <input
                                    type="text"
                                    placeholder="Landmark (Optional)"
                                    value={details.landmark}
                                    onChange={(e) => setDetails({ ...details, landmark: e.target.value })}
                                    className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-400 focus:shadow-[0_0_0_3px_rgba(232,89,12,0.06)] transition-all"
                                />
                            </div>

                            <div className="space-y-2 mb-6 pt-6 border-t border-stone-100">
                                <div className="flex justify-between text-stone-500 text-sm">
                                    <span>Subtotal</span>
                                    <span className="text-stone-700">₹{cartTotal}</span>
                                </div>
                                <div className="flex justify-between text-stone-500 text-sm">
                                    <span>Delivery</span>
                                    <span className="text-green-600 font-semibold">Free</span>
                                </div>
                                <div className="flex justify-between text-lg font-bold text-stone-900 pt-4 mt-3 border-t border-stone-100 font-heading">
                                    <span>Total</span>
                                    <span>₹{grandTotal}</span>
                                </div>
                            </div>

                            <button
                                onClick={handleCheckout}
                                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold uppercase tracking-wider py-4 rounded-xl transition-all shadow-lg shadow-orange-600/20 flex items-center justify-center gap-2 text-sm"
                            >
                                <FaWhatsapp size={18} />
                                <span>Place Order via WhatsApp</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
