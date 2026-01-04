import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../src/context/CartContext';
import { FaTrash, FaMinus, FaPlus, FaWhatsapp, FaArrowLeft, FaShoppingBag, FaCheckCircle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const Cart = () => {
    const { cart, removeFromCart, updateQuantity, cartTotal, grandTotal, clearCart } = useCart();
    const navigate = useNavigate();

    const handleCheckout = () => {
        const message = cart.map(item => `• ${item.name} (x${item.quantity}) - ₹${item.price * item.quantity}`).join('\n');
        const totalStr = `\n\nTotal: ₹${grandTotal}\n(Free Delivery: Navi Mumbai)`;
        const whatsappUrl = `https://wa.me/918454044161?text=${encodeURIComponent('New Order From Bread & Bite:\n\n' + message + totalStr)}`;
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
        <div className="min-h-screen bg-black pt-12 pb-24 px-6 relative overflow-hidden">
            {/* Neo-Lux Background Glow */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-yellow-400/5 blur-[120px] rounded-full" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-zinc-800/10 blur-[120px] rounded-full" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Shopping Progress Bar */}
                <div className="flex items-center justify-between max-w-2xl mx-auto mb-20 px-4">
                    {[
                        { step: 1, label: 'Review', active: true },
                        { step: 2, label: 'Delivery', active: false },
                        { step: 3, label: 'Payment', active: false }
                    ].map((s, i) => (
                        <div key={s.label} className="flex items-center flex-1 last:flex-none">
                            <div className="flex flex-col items-center gap-3">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-[10px] font-black border transition-all duration-500 ${s.active ? 'bg-yellow-400 border-yellow-400 text-black shadow-[0_0_20px_rgba(250,204,21,0.3)]' : 'bg-transparent border-white/10 text-zinc-600'}`}>
                                    0{s.step}
                                </div>
                                <span className={`text-[9px] uppercase font-black tracking-[0.2em] ${s.active ? 'text-white' : 'text-zinc-700'}`}>{s.label}</span>
                            </div>
                            {i < 2 && <div className="flex-1 h-px bg-white/5 mx-6 translate-y-[-10px]" />}
                        </div>
                    ))}
                </div>

                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 px-4">
                    <div>
                        <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase leading-none italic">
                            Cart
                        </h1>
                        <p className="text-[10px] text-zinc-500 font-bold tracking-[0.4em] mt-6 uppercase">Navi Mumbai</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Left: Item List */}
                    <div className="lg:col-span-7 xl:col-span-8">
                        <div className="space-y-4">
                            <AnimatePresence mode="popLayout">
                                {cart.map((item, index) => (
                                    <motion.div
                                        key={item.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, x: 20 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="group relative flex flex-col md:flex-row md:items-center gap-8 p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.03] hover:border-white/10 transition-all duration-500"
                                    >
                                        <div className="relative w-32 h-32 rounded-3xl overflow-hidden shrink-0 border border-white/5 bg-zinc-900 shadow-2xl">
                                            <img 
                                                src={item.image} 
                                                alt={item.name} 
                                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[0.3] group-hover:grayscale-0"
                                                onError={(e) => {
                                                    e.target.src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=300&h=300&auto=format&fit=crop';
                                                }}
                                            />
                                        </div>

                                        <div className="flex-1 min-w-0">
                                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                                <div>
                                                    <h3 className="text-2xl font-black text-white mb-2 group-hover:text-yellow-400 transition-colors uppercase tracking-tight italic">
                                                        {item.name}
                                                    </h3>
                                                </div>
                                                <div className="flex items-center gap-10">
                                                    <div className="text-right">
                                                        <span className="block text-3xl font-black text-white tracking-tighter">₹{item.price * item.quantity}</span>
                                                        <span className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest">₹{item.price} / unit</span>
                                                    </div>
                                                    
                                                    <div className="flex items-center bg-zinc-950 rounded-2xl border border-white/5 p-1.5 shadow-inner">
                                                        <button
                                                            onClick={() => updateQuantity(item.id, -1)}
                                                            className="w-10 h-10 flex items-center justify-center text-zinc-600 hover:text-white transition-all rounded-xl hover:bg-white/5"
                                                        >
                                                            {item.quantity === 1 ? <FaTrash size={12} /> : <FaMinus size={10} />}
                                                        </button>
                                                        <span className="text-sm font-black text-white w-10 text-center tracking-tighter">{item.quantity}</span>
                                                        <button
                                                            onClick={() => updateQuantity(item.id, 1)}
                                                            className="w-10 h-10 flex items-center justify-center text-zinc-600 hover:text-white transition-all rounded-xl hover:bg-white/5"
                                                        >
                                                            <FaPlus size={10} />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Right: Neo-Lux Summary Receipt */}
                    <div className="lg:col-span-5 xl:col-span-4">
                        <div className="sticky top-32">
                            <motion.div 
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="bg-[#050505] rounded-[3rem] p-12 border border-white/5 shadow-[0_50px_100px_rgba(0,0,0,0.8)] relative overflow-hidden"
                            >
                                {/* Receipt Texture Effect */}
                                <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                                <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-400/5 blur-[100px] rounded-full" />
                                
                                <div className="flex justify-between items-center mb-12 border-b border-white/5 pb-8">
                                    <h3 className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.6em]">Order Summary</h3>
                                    <span className="text-[8px] font-bold text-zinc-700 uppercase tracking-widest">ID: #ORD-77</span>
                                </div>
                                
                                <div className="space-y-8 mb-16">
                                    <div className="flex justify-between items-center group">
                                        <span className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.2em] group-hover:text-zinc-400 transition-colors">Total (Items)</span>
                                        <div className="flex-1 border-b border-white/[0.03] mx-4 translate-y-[-4px]" />
                                        <span className="text-white font-bold text-sm tracking-tighter">₹{cartTotal}</span>
                                    </div>
                                    <div className="flex justify-between items-center group">
                                        <span className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.2em] group-hover:text-zinc-400 transition-colors">Delivery</span>
                                        <div className="flex-1 border-b border-white/[0.03] mx-4 translate-y-[-4px]" />
                                        <span className="text-green-500 font-bold text-[10px] uppercase tracking-widest">FREE</span>
                                    </div>
                                    <div className="flex justify-between items-center group">
                                        <span className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.2em] group-hover:text-zinc-400 transition-colors">Taxes</span>
                                        <div className="flex-1 border-b border-white/[0.03] mx-4 translate-y-[-4px]" />
                                        <span className="text-white/20 font-medium text-[8px] uppercase tracking-widest italic">Inclusive</span>
                                    </div>
                                    
                                    <div className="pt-12 mt-8 border-t border-white/10 relative">
                                        <div className="flex flex-col gap-4">
                                            <p className="text-[10px] text-zinc-600 font-black uppercase tracking-[0.4em]">Total</p>
                                            <div className="flex items-end gap-1">
                                                <span className="text-8xl font-black text-white tracking-tighter leading-none italic">₹{grandTotal}</span>
                                                <span className="text-[10px] text-zinc-700 font-bold uppercase mb-2">INR</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <button
                                    onClick={handleCheckout}
                                    className="relative w-full group overflow-hidden rounded-[2rem] h-24"
                                >
                                    <div className="absolute inset-0 bg-yellow-400 transition-transform duration-700 group-hover:scale-[1.03]" />
                                    <div className="relative h-full flex items-center justify-center gap-6 text-black">
                                        <FaWhatsapp size={28} />
                                        <div className="flex flex-col items-start translate-y-0.5">
                                            <span className="text-sm font-black uppercase tracking-[0.4em] leading-none">Send Order</span>
                                        </div>
                                    </div>
                                </button>
                                
                                <div className="mt-12 flex flex-col items-center gap-6">
                                    <p className="text-[8px] text-zinc-800 font-bold uppercase tracking-[0.6em]">
                                        Secure Direct Confirmation
                                    </p>
                                    <div className="flex justify-center gap-4 opacity-10">
                                        <div className="w-8 h-[1px] bg-white" />
                                        <div className="w-1 h-1 rounded-full bg-white" />
                                        <div className="w-8 h-[1px] bg-white" />
                                    </div>
                                </div>
                            </motion.div>
                            
                            {/* Privacy Policy / Info */}
                            <div className="mt-10 px-10 space-y-6">
                                <div className="flex items-start gap-4 opacity-20 hover:opacity-100 transition-opacity cursor-default group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-1 transition-transform group-hover:scale-150" />
                                    <p className="text-[9px] uppercase font-black tracking-[0.2em] text-zinc-500 leading-loose">
                                        By placing this order, you agree to our premium concierge delivery terms and quality assurance standards.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
