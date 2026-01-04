import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaMapMarkerAlt, FaClock, FaPhone, FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import SEO from "../src/components/SEO";

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setIsSubmitted(true);
    };

    return (
        <section className="relative min-h-screen bg-black pt-32 pb-20 px-6 overflow-hidden text-white">
            <SEO
                title="Contact Us - Bread & Bite"
                description="Get in touch with Bread & Bite. Order via WhatsApp, find our location in Taloja, or send us a message directly. Serving Navi Mumbai with passion."
            />

            {/* Premium Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 -left-20 w-96 h-96 bg-yellow-400/5 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-amber-600/5 rounded-full blur-[120px]"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-zinc-900 border border-white/10 text-yellow-400 text-xs font-black tracking-[0.3em] uppercase mb-6"
                    >
                        <FaMapMarkerAlt className="text-[10px]" /> Exclusive to Navi Mumbai
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-8xl font-black tracking-tighter mb-6 leading-none"
                    >
                        LET'S <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-600">CONNECT</span>
                    </motion.h2>
                    <p className="text-zinc-500 text-lg max-w-2xl mx-auto font-medium">
                        Have a question? A special request? Or just want to talk about sandwiches? Our team is always ready to hear from you.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Information Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-12"
                    >
                        <div className="glass-card p-12 rounded-[3rem] border-white/5 space-y-10">
                            <h3 className="text-3xl font-black tracking-tighter uppercase text-white mb-2">QUICK ACCESS</h3>
                            
                            <div className="space-y-8">
                                <div className="flex items-start gap-6 group">
                                    <div className="w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-black transition-all duration-500 text-2xl">
                                        <FaWhatsapp />
                                    </div>
                                    <div>
                                        <p className="text-xs font-black text-zinc-500 uppercase tracking-widest mb-1">Direct Order</p>
                                        <a href="https://wa.me/919325629256" className="text-2xl font-black text-white hover:text-yellow-400 transition-colors tracking-tight">+91 93256 29256</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6 group">
                                    <div className="w-14 h-14 rounded-2xl bg-yellow-500/10 flex items-center justify-center text-yellow-400 group-hover:bg-yellow-500 group-hover:text-black transition-all duration-500 text-2xl">
                                        <FaMapMarkerAlt />
                                    </div>
                                    <div>
                                        <p className="text-xs font-black text-zinc-500 uppercase tracking-widest mb-1">Our Base</p>
                                        <p className="text-2xl font-black text-white tracking-tight">Taloja Phase 1, Navi Mumbai</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6 group">
                                    <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-black transition-all duration-500 text-2xl">
                                        <FaClock />
                                    </div>
                                    <div>
                                        <p className="text-xs font-black text-zinc-500 uppercase tracking-widest mb-1">Operation Hours</p>
                                        <p className="text-2xl font-black text-white tracking-tight">8:00 AM – 11:45 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Navi Mumbai Exclusive Banner */}
                        <div className="relative rounded-[2.5rem] bg-gradient-to-r from-yellow-400 to-amber-600 p-10 overflow-hidden group">
                            <div className="relative z-10 flex items-center gap-6">
                                <div className="w-16 h-16 rounded-full bg-black/10 flex items-center justify-center text-black text-3xl">
                                    <FaExclamationCircle />
                                </div>
                                <div className="text-black">
                                    <h4 className="font-black text-xl uppercase tracking-tighter mb-1 leading-none">FREE DELIVERY AREAS</h4>
                                    <p className="font-bold text-sm opacity-80">Serving Kharghar, Taloja, Panvel, and all parts of Navi Mumbai.</p>
                                </div>
                            </div>
                            <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:scale-110 transition-transform">
                                <FaMapMarkerAlt className="text-8xl text-black" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Form Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-12 md:p-16 rounded-[3.5rem] border-white/5"
                    >
                        <AnimatePresence mode="wait">
                            {!isSubmitted ? (
                                <motion.form
                                    key="form"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onSubmit={handleSubmit}
                                    className="space-y-8"
                                >
                                    <h3 className="text-3xl font-black tracking-tighter uppercase text-white mb-4 flex items-center gap-4">
                                        <FaPaperPlane className="text-yellow-400 text-2xl" /> Send a Pulse
                                    </h3>
                                    
                                    <div className="space-y-6">
                                        <div>
                                            <label className="block text-[10px] font-black text-zinc-600 uppercase tracking-[0.3em] mb-3 ml-1">Identity</label>
                                            <input
                                                type="text"
                                                required
                                                placeholder="Your full name"
                                                className="w-full bg-black/50 border border-white/5 rounded-2xl px-6 py-5 text-white placeholder-zinc-700 focus:outline-none focus:border-yellow-400/50 transition-all font-medium"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-[10px] font-black text-zinc-600 uppercase tracking-[0.3em] mb-3 ml-1">Communication</label>
                                            <input
                                                type="tel"
                                                required
                                                placeholder="Phone number"
                                                className="w-full bg-black/50 border border-white/5 rounded-2xl px-6 py-5 text-white placeholder-zinc-700 focus:outline-none focus:border-yellow-400/50 transition-all font-medium"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-[10px] font-black text-zinc-600 uppercase tracking-[0.3em] mb-3 ml-1">The Message</label>
                                            <textarea
                                                required
                                                rows={5}
                                                placeholder="What's on your mind? Orders, feedback, or just saying hi."
                                                className="w-full bg-black/50 border border-white/5 rounded-2xl px-6 py-5 text-white placeholder-zinc-700 focus:outline-none focus:border-yellow-400/50 transition-all font-medium resize-none"
                                            />
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full btn-primary py-6 text-xl flex items-center justify-center gap-3 relative overflow-hidden group"
                                    >
                                        <span className={isSubmitting ? 'opacity-0' : 'opacity-100 flex items-center gap-3'}>
                                            Engage Now <FaPaperPlane className="group-hover:translate-x-2 transition-transform" />
                                        </span>
                                        {isSubmitting && (
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="w-8 h-8 border-4 border-black/20 border-t-black rounded-full animate-spin"></div>
                                            </div>
                                        )}
                                    </button>
                                </motion.form>
                            ) : (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-20 space-y-8"
                                >
                                    <div className="w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center text-black text-5xl mx-auto mb-10 shadow-[0_0_50px_rgba(251,191,36,0.5)]">
                                        <FaCheckCircle />
                                    </div>
                                    <h3 className="text-4xl font-black tracking-tighter text-white uppercase">MESSAGE CAPTURED</h3>
                                    <p className="text-zinc-500 font-medium max-w-sm mx-auto">
                                        We've received your transmission. Our team will get back to you within the blink of an eye.
                                    </p>
                                    <button
                                        onClick={() => setIsSubmitted(false)}
                                        className="text-yellow-400 font-black uppercase tracking-widest text-xs hover:underline mt-10"
                                    >
                                        Send another message
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;