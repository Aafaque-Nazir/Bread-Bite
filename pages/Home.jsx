import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaUtensils, FaStar, FaClock, FaCheckCircle, FaFire, FaBolt, FaMotorcycle, FaArrowRight, FaMapMarkerAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Marquee from "react-fast-marquee";
import SEO from "../src/components/SEO";
import ImageWithLoader from "../src/components/ImageWithLoader";
import menuItems from "../data/MenuItems";

const Home = () => {
    const whatsappLink = "https://wa.me/919325629256?text=Hi%2C%20I%20want%20to%20order%20from%20Bread%20%26%20Bite!";

    // Randomize Bestsellers from MenuItems
    const randomBestsellers = useMemo(() => {
        const bestsellers = menuItems.filter(item => item.isBestSeller);
        return [...bestsellers].sort(() => 0.5 - Math.random()).slice(0, 3);
    }, []);

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariant = {
        hidden: { y: 40, opacity: 0 },
        show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
    };

    return (
        <>
            <SEO
                title="Premium Grilled Sandwiches & Pizza - Bread & Bite"
                description="Welcome to Bread & Bite - The ultimate gourmet experience in Navi Mumbai. Experience premium grilled sandwiches, artisan pizzas, and street-style snacks with free delivery in Navi Mumbai."
            />

            {/* Elite Marquee - Navi Mumbai Focus */}
            <div className="fixed top-[80px] w-full z-30 pointer-events-none">
                <Marquee gradient={false} speed={40} className="bg-yellow-400 text-black py-1.5 font-black text-[10px] uppercase tracking-[0.2em]">
                    <span className="mx-8 flex items-center gap-2"><FaMotorcycle className="text-sm" /> Exclusive Free Delivery across Navi Mumbai only</span>
                    <span className="mx-8 flex items-center gap-2">•</span>
                    <span className="mx-8 flex items-center gap-2"><FaFire className="text-sm" /> 50+ Gourmet Recipes Crafted Daily</span>
                    <span className="mx-8 flex items-center gap-2">•</span>
                    <span className="mx-8 flex items-center gap-2"><FaCheckCircle className="text-sm" /> Gold Standard Hygiene Certified</span>
                    <span className="mx-8 flex items-center gap-2">•</span>
                    <span className="mx-8 flex items-center gap-2"><FaBolt className="text-sm" /> Lightning Delivery in 25 Mins</span>
                </Marquee>
            </div>

            {/* Hero Section - The Apex */}
            <section className="relative min-h-screen flex items-center pt-32 overflow-hidden bg-black">
                {/* Hero Accents */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-yellow-400/5 rounded-full blur-[200px]" />
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-600/5 rounded-full blur-[150px]" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center w-full">
                    <div className="space-y-12 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, x: -60 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-zinc-900 border border-white/10 text-yellow-400 text-[10px] font-black tracking-[0.4em] uppercase mb-10">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-400"></span>
                                </span>
                                Artisan Street Style
                            </div>
                            <h1 className="text-6xl md:text-[8.5rem] font-black leading-[0.85] text-white tracking-tighter mb-10">
                                BEYOND <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-600">
                                    ORDINARY
                                </span>
                            </h1>
                            <p className="text-xl md:text-2xl text-zinc-500 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium tracking-tight">
                                Revolutionizing the humble sandwich into a gourmet masterpiece. Premium ingredients, unapologetic flavor, and zero compromises.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 1 }}
                            className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"
                        >
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary flex items-center justify-center gap-3 px-12 py-6 text-xl shadow-[0_20px_60px_rgba(251,191,36,0.2)]"
                            >
                                <FaWhatsapp className="text-2xl" /> <span>Direct Order</span>
                            </a>
                            <NavLink
                                to="/menu"
                                className="btn-outline flex items-center justify-center gap-3 px-12 py-6 text-xl group"
                            >
                                <FaUtensils /> <span>The Collection</span>
                            </NavLink>
                        </motion.div>

                        {/* Social Proof Hook */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="flex items-center justify-center lg:justify-start gap-10 pt-10"
                        >
                            <div className="flex -space-x-4">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-14 h-14 rounded-full border-4 border-black bg-zinc-900 overflow-hidden shadow-2xl">
                                        <img src={`https://i.pravatar.cc/150?img=${i + 15}`} alt="Foodie" />
                                    </div>
                                ))}
                                <div className="w-14 h-14 rounded-full border-4 border-black bg-yellow-400 flex items-center justify-center text-black font-black text-xs">+500</div>
                            </div>
                            <div>
                                <div className="flex text-yellow-500 gap-1 text-xs mb-1">
                                    {[...Array(5)].map((_, i) => <FaStar key={i} />)}
                                </div>
                                <p className="text-[10px] font-black text-white uppercase tracking-widest leading-none">
                                    Elite Choice in <span className="text-yellow-400">Navi Mumbai</span>
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Hero Visuals */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative z-10 transform hover:scale-105 transition-transform duration-1000 cursor-pointer">
                            <img
                                src="Hero.png"
                                alt="Bread & Bite Signature"
                                className="w-full drop-shadow-[0_40px_100px_rgba(0,0,0,0.8)]"
                            />
                            {/* Floating Highlights */}
                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-10 -right-10 glass-card p-6 rounded-[2rem] border-white/10"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center text-black text-xl">
                                        <FaFire />
                                    </div>
                                    <p className="font-black text-sm uppercase tracking-tighter">Bestseller</p>
                                </div>
                            </motion.div>
                            
                            <motion.div
                                animate={{ y: [0, 15, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute -bottom-10 -left-10 glass-card p-6 rounded-[2.5rem] border-yellow-400/30"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white text-xl">
                                        <FaMotorcycle />
                                    </div>
                                    <div>
                                        <p className="font-black text-[10px] uppercase tracking-widest text-zinc-500">Free Delivery</p>
                                        <p className="font-black text-xs uppercase tracking-tighter">Navi Mumbai Only</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                        {/* Background Pulse */}
                        <div className="absolute inset-0 bg-yellow-400/10 rounded-full blur-[120px] scale-125 -z-10 animate-pulse" />
                    </motion.div>
                </div>
            </section>

            {/* Stats Bar */}
            <section className="py-20 bg-black border-y border-white/5 relative z-10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                        {[
                            { label: "Navi Mumbai Priority", value: "Area Wide", icon: <FaMapMarkerAlt /> },
                            { label: "Fresh Daily", value: "100%", icon: <FaBolt /> },
                            { label: "Elite Rating", value: "4.9/5", icon: <FaStar /> },
                            { label: "Variety", value: "50+", icon: <FaUtensils /> }
                        ].map((stat, i) => (
                            <div key={i} className="flex flex-col items-center group text-center">
                                <div className="text-zinc-600 text-2xl mb-4 group-hover:text-yellow-400 transition-colors">
                                    {stat.icon}
                                </div>
                                <span className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.4em] mb-2">{stat.label}</span>
                                <span className="text-3xl md:text-5xl font-black text-white tracking-tighter">{stat.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Dynamic Bestsellers Section */}
            <section className="py-40 bg-zinc-950 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[800px] bg-yellow-400/5 blur-[200px] rounded-full" />
                
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-10">
                        <div className="space-y-4">
                            <span className="text-yellow-400 text-sm font-black tracking-[0.5em] uppercase underline underline-offset-8 decoration-yellow-400/50">Chef's Signature</span>
                            <h2 className="text-6xl md:text-9xl font-black text-white tracking-tighter leading-none">
                                TOP <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 to-white">PICKS</span>
                            </h2>
                        </div>
                        <NavLink to="/menu" className="group flex items-center gap-4 text-white font-black uppercase text-sm tracking-widest mb-4 hover:text-yellow-400 transition-colors">
                            Full Collection <FaArrowRight className="group-hover:translate-x-3 transition-transform" />
                        </NavLink>
                    </div>

                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-3 gap-12"
                    >
                        {randomBestsellers.map((item, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariant}
                                className="group h-[550px] rounded-[2.5rem] overflow-hidden bg-zinc-900 border border-white/5 transition-all duration-700 hover:border-yellow-400/30 relative"
                            >
                                <div className="absolute inset-0">
                                    <ImageWithLoader
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80" />
                                </div>

                                <div className="absolute top-8 left-8">
                                    <div className="px-5 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-white text-[8px] font-black uppercase tracking-widest">
                                        Elite Choice
                                    </div>
                                </div>

                                <div className="absolute bottom-10 left-10 right-10">
                                    <div className="flex items-center gap-2 text-yellow-500 text-[10px] font-black mb-3">
                                        <FaStar /> {item.rating} • <span className="text-zinc-500 font-bold uppercase underline underline-offset-4 decoration-yellow-400/30">{item.category}</span>
                                    </div>
                                    <h3 className="text-3xl font-black text-white mb-6 tracking-tighter group-hover:text-yellow-400 transition-colors uppercase leading-[0.9] line-clamp-2">
                                        {item.name}
                                    </h3>
                                    
                                    <div className="flex items-center justify-between pt-6 border-t border-white/10">
                                        <span className="text-3xl font-black text-white">₹{item.price}</span>
                                        <NavLink
                                            to="/menu"
                                            className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center group-hover:bg-yellow-400 transition-all shadow-2xl scale-0 group-hover:scale-100 duration-500"
                                        >
                                            <FaBolt className="text-lg" />
                                        </NavLink>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Testimonials - Minimal & Elite */}
            <section className="py-40 bg-black relative border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <div className="mb-24">
                        <span className="text-zinc-600 text-[10px] font-black tracking-[0.5em] uppercase mb-6 block">The Reputation</span>
                        <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase">
                            HEARD ON <br /> <span className="text-yellow-400 italic">THE STREETS</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-20">
                        {[
                            { name: "Aarav M.", text: "The Tandoori Grilled sandwich is life-changing. Best spot in Navi Mumbai for real foodies.", loc: "Kharghar" },
                            { name: "Priya S.", text: "Hygienic, fast, and insanely delicious. The packaging is as premium as the food itself.", loc: "Taloja" },
                            { name: "Karan D.", text: "Elite taste without the elite price tag. Their cheese pull is legendary. 10/10 recommended.", loc: "Panvel" }
                        ].map((rev, i) => (
                            <div key={i} className="flex flex-col items-center group">
                                <p className="text-zinc-500 text-xl font-medium leading-relaxed italic mb-12 group-hover:text-white transition-colors duration-500">
                                    "{rev.text}"
                                </p>
                                <div className="flex flex-col items-center">
                                    <div className="w-20 h-20 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-yellow-400 text-3xl font-black mb-6 group-hover:bg-yellow-400 group-hover:text-black transition-all duration-700">
                                        {rev.name[0]}
                                    </div>
                                    <div className="text-white font-black uppercase text-sm tracking-widest">{rev.name}</div>
                                    <div className="text-zinc-700 text-[10px] font-black uppercase tracking-[0.3em] mt-1">{rev.loc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Closing CTA - The Grand Finale */}
            <section className="py-40 px-6 bg-black relative">
                <div className="max-w-7xl mx-auto group relative">
                    {/* Glow Backlight */}
                    <div className="absolute inset-0 bg-yellow-400/20 rounded-[4rem] blur-[150px] opacity-0 group-hover:opacity-100 transition-opacity duration-[2s]" />
                    
                    <div className="relative bg-zinc-950 rounded-[4rem] p-20 md:p-32 border border-white/5 text-center overflow-hidden">
                        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                        
                        <motion.div
                            whileInView={{ y: [40, 0], opacity: [0, 1] }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                            className="relative z-10"
                        >
                            <h2 className="text-7xl md:text-[10rem] font-black text-white mb-12 tracking-tighter uppercase leading-[0.8] font-sans">
                                ASCEND TO <br /> <span className="text-yellow-400 italic">FOOD NIRVANA</span>
                            </h2>
                            <p className="text-zinc-500 text-xl md:text-3xl mb-16 max-w-2xl mx-auto font-medium tracking-tight">
                                Skip the wait. Experience elite cravings delivered in Navi Mumbai.
                            </p>
                            
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full sm:w-auto px-16 py-7 bg-yellow-400 text-black font-black text-2xl rounded-full hover:scale-110 transition-transform shadow-[0_20px_80px_rgba(251,191,36,0.4)] uppercase tracking-tighter"
                                >
                                    Order on WhatsApp
                                </a>
                                <NavLink
                                    to="/menu"
                                    className="w-full sm:w-auto px-16 py-7 bg-transparent border-2 border-white/10 text-white font-black text-2xl rounded-full hover:bg-white hover:text-black transition-all uppercase tracking-tighter"
                                >
                                    The Menu
                                </NavLink>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;