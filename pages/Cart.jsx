import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../src/context/CartContext';
import { FaTrash, FaMinus, FaPlus, FaWhatsapp, FaArrowLeft, FaShoppingBag, FaMapMarkerAlt, FaMotorcycle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import SEO from '../src/components/SEO';
import ImageWithLoader from '../src/components/ImageWithLoader';

const Cart = () => {
    const { cart, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();
    const navigate = useNavigate();
    const [details, setDetails] = useState({
        name: '',
        phone: '',
        address: '',
        landmark: '',
        location: 'taloja' // 'taloja' or 'other'
    });
    const [errors, setErrors] = useState({});

    // Delivery Logic
    const isTaloja = details.location === 'taloja';
    const isFreeDeliveryEligible = cartTotal >= 499;
    const deliveryCharge = (isTaloja || isFreeDeliveryEligible) ? 0 : 49;
    const grandTotal = cartTotal + deliveryCharge;

    const validateForm = () => {
        const newErrors = {};
        if (!details.name.trim()) newErrors.name = 'Name is required';
        if (!details.phone.trim() || details.phone.length < 10) newErrors.phone = 'Valid phone is required';
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
        const locationText = details.location === 'taloja' ? 'Taloja Phase 1' : 'Other Navi Mumbai Area';
        const customerInfo = `\n\n👤 *Customer Details:*\nName: ${details.name}\nPhone: ${details.phone}\nArea: ${locationText}\nAddress: ${details.address}, ${details.landmark || ''}`;
        
        let deliveryStr = deliveryCharge === 0 ? 'Free' : `₹${deliveryCharge}`;
        const totalStr = `\n\n💰 *Bill Summary:*\nSubtotal: ₹${cartTotal}\nDelivery: ${deliveryStr}\n*Grand Total: ₹${grandTotal}*`;
        
        const fullMessage = `New Order From Bread & Bite:\n${customerInfo}\n\n🛒 *Order Summary:*\n${message}${totalStr}`;
        
        const whatsappUrl = `https://wa.me/919325629256?text=${encodeURIComponent(fullMessage)}`;
        window.open(whatsappUrl, '_blank');
        
        // Clear the cart after opening WhatsApp
        clearCart();
    };

    if (cart.length === 0) {
        return (
            <div className="min-h-[80vh] flex flex-col items-center justify-center px-6 bg-[#FFFAF5]">
                <SEO title="Your Cart - Bread & Bite" noindex={true} />
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center max-w-md w-full bg-white p-12 rounded-[2.5rem] border border-stone-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
                >
                    <div className="w-24 h-24 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-400 mx-auto mb-8 shadow-inner">
                        <FaShoppingBag size={36} />
                    </div>
                    <h2 className="text-3xl font-bold text-stone-900 tracking-tight mb-3 font-heading">Cart is Empty</h2>
                    <p className="text-stone-500 mb-8 text-sm leading-relaxed">
                        Your cart is waiting to be filled with delicious pizzas, hot sandwiches, and refreshing drinks!
                    </p>
                    <Link 
                        to="/menu"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-stone-900 text-white font-bold text-sm tracking-wide rounded-2xl hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-600/30"
                    >
                        <FaArrowLeft className="text-xs" /> Back to Menu
                    </Link>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#FFFAF5] text-stone-900 pt-8 lg:pt-12 pb-20 px-6">
            <SEO
                title="Checkout - Bread & Bite"
                description="Review your cart and complete your order. Fast delivery across Navi Mumbai!"
                url="/cart"
                noindex={true}
            />
            <div className="max-w-7xl mx-auto">
                <div className="mb-10 lg:mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight font-heading text-stone-900">
                        Secure <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-600">Checkout</span>
                    </h1>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 lg:gap-10">
                    {/* Left: Item List (Bento block) */}
                    <div className="lg:col-span-7 space-y-6">
                        <div className="bg-white rounded-3xl p-6 lg:p-8 border border-stone-100 shadow-[0_4px_24px_rgba(0,0,0,0.03)]">
                            <h2 className="text-xl font-bold mb-6 font-heading flex items-center gap-2">
                                <FaShoppingBag className="text-orange-500" /> Order Items
                            </h2>
                            <div className="space-y-4">
                                <AnimatePresence mode="popLayout">
                                    {cart.map((item) => (
                                        <motion.div
                                            key={item.id}
                                            layout
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, scale: 0.95 }}
                                            className="flex flex-col sm:flex-row gap-5 items-start sm:items-center p-4 bg-[#FFFAF5] rounded-2xl border border-stone-100 group transition-all hover:border-orange-200"
                                        >
                                            <div className="w-full sm:w-24 h-32 sm:h-24 bg-white rounded-xl overflow-hidden shrink-0 border border-stone-200/60 shadow-sm relative">
                                                <ImageWithLoader 
                                                    src={item.image} 
                                                    alt={item.name} 
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                />
                                            </div>
                                            <div className="flex-1 min-w-0 w-full">
                                                <div className="flex justify-between items-start mb-1">
                                                    <h3 className="text-lg font-bold font-heading leading-tight text-stone-900">{item.name}</h3>
                                                    <span className="text-lg font-bold text-stone-900">₹{item.price * item.quantity}</span>
                                                </div>
                                                <div className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-4">
                                                    ₹{item.price} Each
                                                </div>
                                                
                                                <div className="flex items-center justify-between w-full">
                                                    <div className="flex items-center bg-white border border-stone-200 rounded-xl p-1 shadow-sm">
                                                        <button 
                                                            onClick={() => updateQuantity(item.id, -1)}
                                                            className="w-8 h-8 flex items-center justify-center text-stone-500 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors"
                                                        >
                                                            <FaMinus size={10} />
                                                        </button>
                                                        <span className="text-sm font-bold w-8 text-center text-stone-900">{item.quantity}</span>
                                                        <button 
                                                            onClick={() => updateQuantity(item.id, 1)}
                                                            className="w-8 h-8 flex items-center justify-center text-stone-500 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors"
                                                        >
                                                            <FaPlus size={10} />
                                                        </button>
                                                    </div>
                                                    <button 
                                                        onClick={() => removeFromCart(item.id)}
                                                        className="w-10 h-10 flex items-center justify-center rounded-xl bg-red-50 text-red-500 hover:bg-red-500 hover:text-white transition-colors"
                                                    >
                                                        <FaTrash size={12} />
                                                    </button>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>

                    {/* Right: Checkout Bento Blocks */}
                    <div className="lg:col-span-5 space-y-6">
                        
                        {/* Delivery Info Block */}
                        <div className="bg-white rounded-3xl p-6 lg:p-8 border border-stone-100 shadow-[0_4px_24px_rgba(0,0,0,0.03)]">
                            <h2 className="text-xl font-bold mb-6 font-heading flex items-center gap-2">
                                <FaMapMarkerAlt className="text-orange-500" /> Delivery Details
                            </h2>
                            
                            <div className="space-y-4">
                                {/* Location Selector */}
                                <div>
                                    <label className="block text-[10px] font-bold text-stone-400 uppercase tracking-wider mb-2 ml-1">Delivery Area</label>
                                    <div className="grid grid-cols-2 gap-3">
                                        <button
                                            onClick={() => setDetails({...details, location: 'taloja'})}
                                            className={`py-3 px-4 rounded-xl text-xs font-bold transition-all border ${details.location === 'taloja' ? 'bg-orange-50 border-orange-200 text-orange-700 shadow-sm' : 'bg-stone-50 border-stone-200 text-stone-500 hover:bg-stone-100'}`}
                                        >
                                            Taloja Phase 1
                                        </button>
                                        <button
                                            onClick={() => setDetails({...details, location: 'other'})}
                                            className={`py-3 px-4 rounded-xl text-xs font-bold transition-all border ${details.location === 'other' ? 'bg-orange-50 border-orange-200 text-orange-700 shadow-sm' : 'bg-stone-50 border-stone-200 text-stone-500 hover:bg-stone-100'}`}
                                        >
                                            Other Area
                                        </button>
                                    </div>
                                    <p className="text-[10px] text-stone-400 mt-2 ml-1">
                                        {details.location === 'taloja' ? '✨ Free delivery exclusively for Taloja Phase 1.' : '₹49 delivery fee. Free delivery on orders above ₹499.'}
                                    </p>
                                </div>

                                <div className="grid grid-cols-2 gap-4 pt-2">
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Your Name"
                                            value={details.name}
                                            onChange={(e) => { setDetails({ ...details, name: e.target.value }); setErrors({...errors, name: ''}) }}
                                            className={`w-full bg-stone-50 border ${errors.name ? 'border-red-400' : 'border-stone-200'} rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:bg-white focus:border-orange-400 focus:shadow-[0_0_0_3px_rgba(232,89,12,0.06)] transition-all placeholder:text-stone-400`}
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="tel"
                                            placeholder="Phone Number"
                                            value={details.phone}
                                            onChange={(e) => { setDetails({ ...details, phone: e.target.value }); setErrors({...errors, phone: ''}) }}
                                            className={`w-full bg-stone-50 border ${errors.phone ? 'border-red-400' : 'border-stone-200'} rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:bg-white focus:border-orange-400 focus:shadow-[0_0_0_3px_rgba(232,89,12,0.06)] transition-all placeholder:text-stone-400`}
                                        />
                                    </div>
                                </div>
                                {(errors.name || errors.phone) && <p className="text-red-500 text-xs font-medium ml-1">Please provide name and a valid phone.</p>}
                                
                                <div>
                                    <textarea
                                        placeholder="Full Delivery Address"
                                        rows="2"
                                        value={details.address}
                                        onChange={(e) => { setDetails({ ...details, address: e.target.value }); setErrors({...errors, address: ''}) }}
                                        className={`w-full bg-stone-50 border ${errors.address ? 'border-red-400' : 'border-stone-200'} rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:bg-white focus:border-orange-400 focus:shadow-[0_0_0_3px_rgba(232,89,12,0.06)] transition-all resize-none placeholder:text-stone-400`}
                                    />
                                    {errors.address && <p className="text-red-500 text-xs font-medium ml-1 mt-1">{errors.address}</p>}
                                </div>
                                
                                <input
                                    type="text"
                                    placeholder="Landmark (Optional)"
                                    value={details.landmark}
                                    onChange={(e) => setDetails({ ...details, landmark: e.target.value })}
                                    className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:bg-white focus:border-orange-400 focus:shadow-[0_0_0_3px_rgba(232,89,12,0.06)] transition-all placeholder:text-stone-400"
                                />
                            </div>
                        </div>

                        {/* Summary & Checkout Block */}
                        <div className="bg-stone-900 rounded-3xl p-6 lg:p-8 shadow-xl sticky top-24">
                            <h2 className="text-white text-lg font-bold mb-6 font-heading border-b border-stone-800 pb-4">Order Summary</h2>
                            
                            <div className="space-y-4 mb-8">
                                <div className="flex justify-between text-stone-400 text-sm">
                                    <span>Subtotal</span>
                                    <span className="text-white font-medium">₹{cartTotal}</span>
                                </div>
                                <div className="flex justify-between text-stone-400 text-sm">
                                    <span className="flex items-center gap-1.5"><FaMotorcycle className="text-orange-500"/> Delivery Fee</span>
                                    <span className={deliveryCharge === 0 ? "text-green-400 font-bold" : "text-white font-medium"}>
                                        {deliveryCharge === 0 ? 'FREE' : `₹${deliveryCharge}`}
                                    </span>
                                </div>
                                
                                {deliveryCharge > 0 && (
                                    <div className="bg-stone-800/50 rounded-lg p-3 text-xs text-stone-400 border border-stone-700/50">
                                        Add items worth <span className="text-orange-400 font-bold">₹{499 - cartTotal}</span> more to get FREE delivery!
                                    </div>
                                )}

                                <div className="flex justify-between text-xl font-bold text-white pt-4 mt-2 border-t border-stone-800 font-heading">
                                    <span>Grand Total</span>
                                    <span className="text-orange-400">₹{grandTotal}</span>
                                </div>
                            </div>

                            <button
                                onClick={handleCheckout}
                                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold uppercase tracking-wider py-4 rounded-xl transition-all shadow-[0_8px_20px_rgba(232,89,12,0.3)] hover:shadow-[0_12px_25px_rgba(232,89,12,0.4)] hover:-translate-y-0.5 flex items-center justify-center gap-2.5 text-sm"
                            >
                                <FaWhatsapp size={20} />
                                <span>Place Order</span>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
