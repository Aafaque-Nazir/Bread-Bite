import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaUtensils, FaStar, FaCheckCircle, FaFire, FaBolt, FaMotorcycle, FaArrowRight, FaMapMarkerAlt, FaLeaf, FaShieldAlt, FaPlay } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import SEO from "../src/components/SEO";
import ImageWithLoader from "../src/components/ImageWithLoader";
import menuItems from "../data/MenuItems";

const Home = () => {
    const whatsappLink = "https://wa.me/919325629256?text=Hi%2C%20I%20want%20to%20order%20from%20Bread%20%26%20Bite!";

    // Randomize Bestsellers from MenuItems
    const randomBestsellers = useMemo(() => {
        const bestsellers = menuItems.filter(item => item.isBestSeller);
        return [...bestsellers].sort(() => 0.5 - Math.random()).slice(0, 4);
    }, []);

    // Animation variants
    const fadeUp = {
        hidden: { opacity: 0, y: 60 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };

    const scaleIn = {
        hidden: { opacity: 0, scale: 0.8 },
        show: { opacity: 1, scale: 1, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }
    };

    return (
        <>
            <SEO
                title="Bread & Bite | Premium Comfort Food - Navi Mumbai"
                description="Experience Navi Mumbai's finest comfort food. Premium grilled sandwiches, artisan pizzas, creamy pastas, and street-style snacks. Free delivery across Navi Mumbai."
            />

            {/* ═══════════════════════════════════════════════════════════════════
                HERO SECTION - Cinematic Split Screen
            ═══════════════════════════════════════════════════════════════════ */}
            <section className="relative min-h-screen flex items-center bg-black overflow-hidden">
                {/* Ambient Background */}
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] bg-yellow-400/10 rounded-full blur-[200px]" />
                    <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-amber-600/10 rounded-full blur-[180px]" />
                    {/* Subtle grid pattern */}
                    <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
                </div>

                <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-12 w-full pt-32 pb-20">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        {/* Left: Typography */}
                        <motion.div
                            initial="hidden"
                            animate="show"
                            variants={staggerContainer}
                            className="space-y-10"
                        >
                            {/* Badge */}
                            <motion.div variants={fadeUp} className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-zinc-900/80 border border-yellow-400/20 backdrop-blur-sm">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-400"></span>
                                </span>
                                <span className="text-yellow-400 text-[11px] font-bold tracking-[0.2em] uppercase">Navi Mumbai Exclusive</span>
                            </motion.div>

                            {/* Main Headline */}
                            <motion.h1 variants={fadeUp} className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.9] tracking-tighter">
                                <span className="text-white">TASTE</span>
                                <br />
                                <span className="text-white">THE</span>
                                <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500">
                                    DIFFERENCE
                                </span>
                            </motion.h1>

                            {/* Subheadline */}
                            <motion.p variants={fadeUp} className="text-lg sm:text-xl text-zinc-400 max-w-lg leading-relaxed font-medium">
                                Premium sandwiches, cheesy pizzas, creamy pastas & street-style snacks. 
                                Crafted with passion, delivered with love.
                            </motion.p>

                            {/* CTA Buttons */}
                            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 pt-4">
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative inline-flex items-center justify-center gap-3 px-8 py-5 bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-bold text-sm uppercase tracking-wider rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_60px_rgba(251,191,36,0.3)]"
                                >
                                    <FaWhatsapp className="text-xl" />
                                    <span>Order Now</span>
                                </a>
                                <NavLink
                                    to="/menu"
                                    className="group inline-flex items-center justify-center gap-3 px-8 py-5 bg-zinc-900 border border-zinc-800 text-white font-bold text-sm uppercase tracking-wider rounded-2xl hover:border-yellow-400/50 hover:bg-zinc-800 transition-all duration-300"
                                >
                                    <FaUtensils className="text-yellow-400" />
                                    <span>Explore Menu</span>
                                </NavLink>
                            </motion.div>

                            {/* Social Proof Strip */}
                            <motion.div variants={fadeUp} className="flex items-center gap-6 pt-8 border-t border-zinc-900">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-zinc-800 overflow-hidden">
                                            <img src={`https://i.pravatar.cc/80?img=${i + 20}`} alt="" className="w-full h-full object-cover" />
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <div className="flex items-center gap-1 text-yellow-400 text-sm mb-1">
                                        {[...Array(5)].map((_, i) => <FaStar key={i} />)}
                                        <span className="text-white font-bold ml-2">4.9</span>
                                    </div>
                                    <p className="text-xs text-zinc-500 font-medium">500+ Happy Customers</p>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Right: Hero Visual */}
                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                            className="relative hidden lg:block"
                        >
                            <div className="relative">
                                {/* Main Image */}
                                <div className="relative z-10 rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl shadow-yellow-400/10">
                                    <img
                                        src="Hero.png"
                                        alt="Bread & Bite Signature Dish"
                                        className="w-full object-cover"
                                    />
                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                </div>

                                {/* Floating Card - Delivery */}
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute -bottom-6 -left-6 z-20 bg-zinc-900/90 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-2xl"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                                            <FaMotorcycle className="text-green-400 text-xl" />
                                        </div>
                                        <div>
                                            <p className="text-white font-bold text-sm">Free Delivery</p>
                                            <p className="text-zinc-500 text-xs">Under 30 mins</p>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Floating Card - Bestseller */}
                                <motion.div
                                    animate={{ y: [0, 10, 0] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                    className="absolute -top-6 -right-6 z-20 bg-zinc-900/90 backdrop-blur-xl border border-yellow-400/20 rounded-2xl p-5 shadow-2xl"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-yellow-400/20 flex items-center justify-center">
                                            <FaFire className="text-yellow-400 text-xl" />
                                        </div>
                                        <div>
                                            <p className="text-white font-bold text-sm">#1 Bestseller</p>
                                            <p className="text-zinc-500 text-xs">Tandoori Grilled</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Scroll Indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-3"
                    >
                        <span className="text-[10px] text-zinc-600 uppercase tracking-[0.3em] font-bold">Scroll</span>
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="w-5 h-8 rounded-full border-2 border-zinc-800 flex items-start justify-center p-1"
                        >
                            <div className="w-1 h-2 bg-yellow-400 rounded-full" />
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════════
                BENTO GRID - Features Section
            ═══════════════════════════════════════════════════════════════════ */}
            <section className="py-24 bg-black relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
                    >
                        {/* Large Feature Card */}
                        <motion.div
                            variants={scaleIn}
                            className="col-span-2 row-span-2 relative group bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-3xl p-8 lg:p-10 border border-white/5 overflow-hidden hover:border-yellow-400/30 transition-all duration-500"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/5 rounded-full blur-[100px] group-hover:bg-yellow-400/10 transition-all duration-700" />
                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <div>
                                    <div className="w-16 h-16 rounded-2xl bg-yellow-400/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <FaMapMarkerAlt className="text-yellow-400 text-2xl" />
                                    </div>
                                    <h3 className="text-3xl lg:text-4xl font-black text-white mb-4 tracking-tight">Navi Mumbai<br/>Exclusive</h3>
                                    <p className="text-zinc-500 text-sm lg:text-base leading-relaxed">Premium delivery service available across all major areas - Kharghar, Panvel, Taloja, Kamothe & more.</p>
                                </div>
                                <div className="flex items-center gap-2 text-yellow-400 text-xs font-bold uppercase tracking-wider mt-8 group-hover:gap-4 transition-all">
                                    <span>View Areas</span>
                                    <FaArrowRight />
                                </div>
                            </div>
                        </motion.div>

                        {/* Speed Card */}
                        <motion.div
                            variants={scaleIn}
                            className="group bg-zinc-900/50 rounded-3xl p-6 lg:p-8 border border-white/5 hover:border-green-400/30 transition-all duration-500"
                        >
                            <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                                <FaBolt className="text-green-400 text-lg" />
                            </div>
                            <h4 className="text-xl font-bold text-white mb-2">Lightning Fast</h4>
                            <p className="text-zinc-500 text-sm">Delivered in 25-30 mins</p>
                        </motion.div>

                        {/* Quality Card */}
                        <motion.div
                            variants={scaleIn}
                            className="group bg-zinc-900/50 rounded-3xl p-6 lg:p-8 border border-white/5 hover:border-blue-400/30 transition-all duration-500"
                        >
                            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                                <FaLeaf className="text-blue-400 text-lg" />
                            </div>
                            <h4 className="text-xl font-bold text-white mb-2">Fresh Daily</h4>
                            <p className="text-zinc-500 text-sm">100% fresh ingredients</p>
                        </motion.div>

                        {/* Hygiene Card */}
                        <motion.div
                            variants={scaleIn}
                            className="group bg-zinc-900/50 rounded-3xl p-6 lg:p-8 border border-white/5 hover:border-purple-400/30 transition-all duration-500"
                        >
                            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                                <FaShieldAlt className="text-purple-400 text-lg" />
                            </div>
                            <h4 className="text-xl font-bold text-white mb-2">Gold Standard</h4>
                            <p className="text-zinc-500 text-sm">Hygiene certified kitchen</p>
                        </motion.div>

                        {/* Variety Card */}
                        <motion.div
                            variants={scaleIn}
                            className="group bg-zinc-900/50 rounded-3xl p-6 lg:p-8 border border-white/5 hover:border-amber-400/30 transition-all duration-500"
                        >
                            <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                                <FaUtensils className="text-amber-400 text-lg" />
                            </div>
                            <h4 className="text-xl font-bold text-white mb-2">50+ Items</h4>
                            <p className="text-zinc-500 text-sm">Something for everyone</p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════════
                BESTSELLERS SECTION
            ═══════════════════════════════════════════════════════════════════ */}
            <section className="py-32 bg-zinc-950 relative overflow-hidden">
                {/* Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow-400/5 rounded-full blur-[200px]" />

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16"
                    >
                        <div>
                            <span className="text-yellow-400 text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Featured Collection</span>
                            <h2 className="text-5xl lg:text-7xl font-black text-white tracking-tighter leading-[0.9]">
                                CROWD<br/>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">FAVORITES</span>
                            </h2>
                        </div>
                        <NavLink
                            to="/menu"
                            className="group inline-flex items-center gap-3 text-white font-bold text-sm uppercase tracking-wider hover:text-yellow-400 transition-colors"
                        >
                            <span>View All</span>
                            <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                        </NavLink>
                    </motion.div>

                    {/* Products Grid */}
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {randomBestsellers.map((item, index) => (
                            <motion.div
                                key={index}
                                variants={fadeUp}
                                className="group"
                            >
                                <NavLink to="/menu" className="block">
                                    <div className="relative aspect-square rounded-3xl overflow-hidden bg-zinc-900 border border-white/5 group-hover:border-yellow-400/30 transition-all duration-500">
                                        {/* Image */}
                                        <ImageWithLoader
                                            src={item.image}
                                            alt={item.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
                                        
                                        {/* Badge */}
                                        <div className="absolute top-4 left-4">
                                            <div className="px-3 py-1.5 rounded-full bg-yellow-400 text-black text-[10px] font-black uppercase tracking-wider">
                                                Bestseller
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="absolute bottom-0 left-0 right-0 p-5">
                                            <div className="flex items-center gap-2 text-yellow-400 text-xs font-bold mb-2">
                                                <FaStar />
                                                <span>{item.rating}</span>
                                            </div>
                                            <h3 className="text-lg font-bold text-white leading-tight mb-2 line-clamp-2 group-hover:text-yellow-400 transition-colors">
                                                {item.name}
                                            </h3>
                                            <div className="flex items-center justify-between">
                                                <span className="text-xl font-black text-white">₹{item.price}</span>
                                                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur flex items-center justify-center group-hover:bg-yellow-400 group-hover:text-black transition-all">
                                                    <FaArrowRight className="text-sm text-white group-hover:text-black" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </NavLink>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════════
                TESTIMONIALS SECTION
            ═══════════════════════════════════════════════════════════════════ */}
            <section className="py-32 bg-black relative overflow-hidden border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-20"
                    >
                        <span className="text-zinc-600 text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Testimonials</span>
                        <h2 className="text-5xl lg:text-7xl font-black text-white tracking-tighter">
                            WHAT THEY<br/>
                            <span className="text-yellow-400 italic">SAY</span>
                        </h2>
                    </motion.div>

                    {/* Testimonials Grid */}
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="grid md:grid-cols-3 gap-8"
                    >
                        {[
                            { name: "Aarav M.", text: "The Tandoori Grilled sandwich changed my life. Best food delivery in Kharghar, hands down!", loc: "Kharghar", rating: 5 },
                            { name: "Priya S.", text: "Finally found a place that does authentic pasta AND amazing street food. 10/10 hygiene too.", loc: "Taloja", rating: 5 },
                            { name: "Karan D.", text: "The cheese pull on their pizza is INSANE. Fast delivery, hot food, zero complaints.", loc: "Panvel", rating: 5 }
                        ].map((review, i) => (
                            <motion.div
                                key={i}
                                variants={fadeUp}
                                className="group p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-yellow-400/20 transition-all duration-500"
                            >
                                {/* Stars */}
                                <div className="flex gap-1 text-yellow-400 mb-6">
                                    {[...Array(review.rating)].map((_, j) => <FaStar key={j} />)}
                                </div>
                                {/* Quote */}
                                <p className="text-zinc-400 text-lg leading-relaxed mb-8 group-hover:text-white transition-colors">
                                    "{review.text}"
                                </p>
                                {/* Author */}
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-yellow-400/10 flex items-center justify-center text-yellow-400 font-black text-lg group-hover:bg-yellow-400 group-hover:text-black transition-all">
                                        {review.name[0]}
                                    </div>
                                    <div>
                                        <p className="text-white font-bold">{review.name}</p>
                                        <p className="text-zinc-600 text-sm">{review.loc}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════════
                FINAL CTA SECTION
            ═══════════════════════════════════════════════════════════════════ */}
            <section className="py-32 px-6 bg-black relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-yellow-400/10 rounded-full blur-[200px]" />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="max-w-5xl mx-auto relative z-10 text-center"
                >
                    <span className="text-yellow-400 text-xs font-bold tracking-[0.3em] uppercase mb-6 block">Ready to Order?</span>
                    <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-8 leading-[0.9]">
                        YOUR CRAVINGS<br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">AWAIT</span>
                    </h2>
                    <p className="text-zinc-500 text-lg sm:text-xl max-w-2xl mx-auto mb-12">
                        Skip the wait. Order directly via WhatsApp and get your favorite food delivered hot & fresh across Navi Mumbai.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative inline-flex items-center justify-center gap-3 px-10 py-6 bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-black text-lg uppercase tracking-wider rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 shadow-[0_20px_60px_rgba(251,191,36,0.3)]"
                        >
                            <FaWhatsapp className="text-2xl" />
                            <span>Order on WhatsApp</span>
                        </a>
                        <NavLink
                            to="/menu"
                            className="inline-flex items-center justify-center gap-3 px-10 py-6 bg-zinc-900 border border-zinc-800 text-white font-bold text-lg uppercase tracking-wider rounded-2xl hover:border-white/30 hover:bg-zinc-800 transition-all duration-300"
                        >
                            <span>Browse Menu</span>
                        </NavLink>
                    </div>

                    {/* Trust Badges */}
                    <div className="flex items-center justify-center gap-8 mt-16 flex-wrap">
                        {[
                            { icon: <FaMotorcycle />, text: "Free Delivery" },
                            { icon: <FaCheckCircle />, text: "Hygiene Certified" },
                            { icon: <FaStar />, text: "4.9 Rating" }
                        ].map((badge, i) => (
                            <div key={i} className="flex items-center gap-2 text-zinc-600 text-sm">
                                <span className="text-yellow-400">{badge.icon}</span>
                                <span>{badge.text}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </section>
        </>
    );
};

export default Home;