import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaMapMarkerAlt, FaClock, FaPaperPlane, FaCheckCircle, FaExclamationCircle, FaChevronDown } from 'react-icons/fa';
import SEO from "../src/components/SEO";

// FAQ Data
const faqs = [
    { question: "What are your delivery zones?", answer: "We currently deliver across all major sectors of Navi Mumbai including Kharghar, Taloja, Panvel, Belapur, and Vashi." },
    { question: "Do you have vegan or gluten-free options?", answer: "Yes! We have a dedicated section for vegan pizzas and gluten-free sandwich bread. Please mention your preferences in the order notes." },
    { question: "How long does delivery usually take?", answer: "Our standard delivery time is 25-40 minutes depending on your exact location and traffic conditions." },
    { question: "Do you cater for large events or parties?", answer: "Absolutely. We offer bulk catering for corporate events and parties. Please reach out to us on WhatsApp at least 24 hours in advance." }
];

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [openFaq, setOpenFaq] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setIsSubmitted(true);
    };

    return (
        <section className="relative min-h-screen bg-[#FFFAF5] pt-8 lg:pt-12 pb-20 px-6 overflow-hidden text-stone-900">
            <SEO
                title="Contact Us - Bread & Bite Navi Mumbai"
                description="Get in touch with Bread & Bite. Order via WhatsApp at +91 93256 29256, find our location in Taloja Phase 1, or send us a message. Serving all of Navi Mumbai."
                url="/contact"
                keywords="bread and bite contact, food delivery taloja, whatsapp food order navi mumbai, restaurant contact kharghar"
            />



            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-orange-200/60 text-orange-600 text-xs font-semibold tracking-[0.15em] uppercase mb-5 shadow-sm"
                    >
                        <FaMapMarkerAlt className="text-[10px]" /> Navi Mumbai
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold tracking-tight mb-4 leading-none font-heading"
                    >
                        Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-600">Us</span>
                    </motion.h1>
                    <p className="text-stone-500 text-base max-w-xl mx-auto">
                        Need help with an order or have a question? We're here for you.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-10 items-start mb-24">
                    {/* Information Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="bg-white p-10 rounded-3xl border border-stone-100 shadow-[0_4px_24px_rgba(0,0,0,0.04)] space-y-8 relative overflow-hidden">


                            <h3 className="text-xl font-bold tracking-tight text-stone-900 font-heading">Quick Access</h3>
                            
                            <div className="space-y-6 relative z-10">
                                <div className="flex items-start gap-5 group">
                                    <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-all duration-300 text-xl shrink-0">
                                        <FaWhatsapp />
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-0.5">Direct Order</p>
                                        <a href="https://wa.me/919325629256" target="_blank" rel="noopener noreferrer" className="text-xl font-bold text-stone-900 hover:text-orange-600 transition-colors tracking-tight">+91 93256 29256</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-5 group">
                                    <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 text-xl shrink-0">
                                        <FaMapMarkerAlt />
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-0.5">Our Base</p>
                                        <p className="text-xl font-bold text-stone-900 tracking-tight">Taloja Phase 1, Navi Mumbai</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-5 group">
                                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 text-xl shrink-0">
                                        <FaClock />
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-0.5">Hours</p>
                                        <p className="text-xl font-bold text-stone-900 tracking-tight">8:00 AM – 11:45 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Visual Map graphic (New) */}
                        <div className="relative rounded-3xl overflow-hidden shadow-md border border-stone-100 aspect-[21/9] bg-stone-200 group">
                            <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop" alt="Navi Mumbai Map Area" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80" />
                            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-transparent"></div>
                            <div className="absolute bottom-4 left-6 right-6 flex justify-between items-end">
                                <div className="text-white">
                                    <h4 className="font-bold text-lg font-heading">Navi Mumbai</h4>
                                    <p className="text-sm text-stone-300">Central Kitchen Location</p>
                                </div>
                                <div className="w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(232,89,12,0.6)] animate-pulse">
                                    <FaMapMarkerAlt />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-10 md:p-12 rounded-3xl border border-stone-100 shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
                    >
                        <AnimatePresence mode="wait">
                            {!isSubmitted ? (
                                <motion.form
                                    key="form"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onSubmit={handleSubmit}
                                    className="space-y-6"
                                >
                                    <h3 className="text-xl font-bold tracking-tight text-stone-900 flex items-center gap-3 font-heading">
                                        <FaPaperPlane className="text-orange-500 text-lg" /> Send a Message
                                    </h3>
                                    
                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-[10px] font-semibold text-stone-400 uppercase tracking-[0.2em] mb-2 ml-1">Your Name</label>
                                            <input
                                                type="text"
                                                required
                                                placeholder="Full name"
                                                className="w-full bg-stone-50 border border-stone-200 rounded-xl px-5 py-4 text-stone-800 placeholder-stone-400 focus:outline-none focus:border-orange-400 focus:shadow-[0_0_0_3px_rgba(232,89,12,0.06)] transition-all text-sm"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-[10px] font-semibold text-stone-400 uppercase tracking-[0.2em] mb-2 ml-1">Phone</label>
                                            <input
                                                type="tel"
                                                required
                                                placeholder="Phone number"
                                                className="w-full bg-stone-50 border border-stone-200 rounded-xl px-5 py-4 text-stone-800 placeholder-stone-400 focus:outline-none focus:border-orange-400 focus:shadow-[0_0_0_3px_rgba(232,89,12,0.06)] transition-all text-sm"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-[10px] font-semibold text-stone-400 uppercase tracking-[0.2em] mb-2 ml-1">Message</label>
                                            <textarea
                                                required
                                                rows={4}
                                                placeholder="What's on your mind?"
                                                className="w-full bg-stone-50 border border-stone-200 rounded-xl px-5 py-4 text-stone-800 placeholder-stone-400 focus:outline-none focus:border-orange-400 focus:shadow-[0_0_0_3px_rgba(232,89,12,0.06)] transition-all resize-none text-sm"
                                            />
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold uppercase tracking-wider py-4 rounded-xl transition-all shadow-lg shadow-orange-600/20 flex items-center justify-center gap-2 text-sm relative"
                                    >
                                        <span className={isSubmitting ? 'opacity-0' : 'opacity-100 flex items-center gap-2'}>
                                            Send Message <FaPaperPlane className="text-xs" />
                                        </span>
                                        {isSubmitting && (
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
                                            </div>
                                        )}
                                    </button>
                                </motion.form>
                            ) : (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-16 space-y-6"
                                >
                                    <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center text-white text-3xl mx-auto shadow-lg shadow-orange-600/30">
                                        <FaCheckCircle />
                                    </div>
                                    <h3 className="text-2xl font-bold tracking-tight text-stone-900 font-heading">Message Sent!</h3>
                                    <p className="text-stone-500 text-sm max-w-xs mx-auto">
                                        We've received your message. Our team will get back to you shortly.
                                    </p>
                                    <button
                                        onClick={() => setIsSubmitted(false)}
                                        className="text-orange-600 font-semibold uppercase tracking-wider text-xs hover:underline mt-4"
                                    >
                                        Send another message
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>

                {/* ═══════════════════════════════════════════════════════════════════
                    FAQ SECTION (NEW)
                ═══════════════════════════════════════════════════════════════════ */}
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-10">
                        <span className="text-orange-600 text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">Got Questions?</span>
                        <h2 className="text-3xl font-bold text-stone-900 tracking-tight font-heading">Frequently Asked Questions</h2>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white border border-stone-200 rounded-2xl overflow-hidden transition-all duration-300"
                            >
                                <button
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                    className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
                                >
                                    <span className="font-bold text-stone-900 pr-4">{faq.question}</span>
                                    <FaChevronDown 
                                        className={`text-stone-400 transition-transform duration-300 shrink-0 ${openFaq === index ? 'rotate-180 text-orange-600' : ''}`} 
                                    />
                                </button>
                                <AnimatePresence>
                                    {openFaq === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="px-6 pb-5 pt-0 text-stone-500 text-sm leading-relaxed border-t border-stone-100 mt-2 pt-4">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Contact;