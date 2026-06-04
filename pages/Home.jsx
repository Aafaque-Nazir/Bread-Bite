import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaUtensils, FaStar, FaCheckCircle, FaFire, FaBolt, FaMotorcycle, FaArrowRight, FaMapMarkerAlt, FaLeaf, FaShieldAlt, FaPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import SEO from "../src/components/SEO";
import ImageWithLoader from "../src/components/ImageWithLoader";
import menuItems from "../data/MenuItems";
import { useCart } from '../src/context/CartContext';

const HOME_COMBOS = [
    {
        id: 'combo_1',
        name: 'The Veg Classic Combo',
        description: '1 Classic Margherita Pizza + 1 Classic Veg Grilled Sandwich + 2 Fresh Lime Sodas.',
        price: 369,
        discount: 'Save ₹47',
        image: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?q=80&w=800&auto=format&fit=crop',
        category: 'Combo',
        type: 'Veg'
    },
    {
        id: 'combo_2',
        name: 'Chicken Lovers Feast',
        description: '(Halal) 1 Tandoori Chicken Pizza + 1 Creamy Chicken Pasta + 2 Classic Cold Coffees.',
        price: 549,
        discount: 'Save ₹87',
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop',
        category: 'Combo',
        type: 'Non-Veg'
    }
];

const Home = () => {
    const { addToCart } = useCart();
    const whatsappLink = "https://wa.me/919325629256?text=Hi%2C%20I%20want%20to%20order%20from%20Bread%20%26%20Bite!";

    const randomBestsellers = useMemo(() => {
        const bestsellers = menuItems.filter(item => item.isBestSeller);
        return [...bestsellers].sort(() => 0.5 - Math.random()).slice(0, 4);
    }, []);

    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };

    const scaleIn = {
        hidden: { opacity: 0, scale: 0.9 },
        show: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
    };

    return (
        <>
            <SEO
                title="Bread & Bite | Premium Comfort Food - Navi Mumbai"
                description="Experience Navi Mumbai's finest comfort food. Premium grilled sandwiches, artisan pizzas, creamy pastas, and refreshing drinks. Free delivery across Navi Mumbai."
                url="/"
                keywords="bread and bite, navi mumbai food delivery, grilled sandwich kharghar, pizza panvel, pasta taloja, comfort food navi mumbai, fast food delivery"
            />

            {/* ═══════════════════════════════════════════════════════════════════
                HERO SECTION — Fixed layout to prevent content pushing down
            ═══════════════════════════════════════════════════════════════════ */}
            <section className="relative pt-6 pb-24 lg:pt-12 lg:pb-32 bg-[#FFFAF5] overflow-hidden">
                {/* Subtle Warm Orbs */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-orange-200/30 rounded-full blur-[120px]" />
                    <div className="absolute bottom-0 -left-20 w-[400px] h-[400px] bg-amber-100/40 rounded-full blur-[100px]" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
                    <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start lg:items-center">
                        {/* Left: Content */}
                        <motion.div
                            initial="hidden"
                            animate="show"
                            variants={staggerContainer}
                            className="space-y-6 lg:space-y-7 lg:-mt-16"
                        >
                            {/* Badge */}
                            <motion.div variants={fadeUp} className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-orange-50 border border-orange-200/70">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                                </span>
                                <span className="text-orange-700 text-[11px] font-semibold tracking-[0.12em] uppercase">Navi Mumbai Exclusive</span>
                            </motion.div>

                            {/* Main Headline */}
                            <motion.h1 variants={fadeUp} className="text-[3.2rem] sm:text-[4rem] lg:text-[4.5rem] xl:text-[5.5rem] font-bold leading-[1] tracking-tight font-heading text-stone-900">
                                Fresh &{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-br from-orange-500 via-orange-600 to-amber-600">
                                    Tasty.
                                </span>
                            </motion.h1>

                            {/* Subheadline */}
                            <motion.p variants={fadeUp} className="text-base sm:text-lg text-stone-500 max-w-md leading-relaxed">
                                Hot sandwiches, handmade pizzas, creamy pastas & refreshing drinks — made fresh, delivered fast.
                            </motion.p>

                            {/* CTA Buttons */}
                            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 pt-1">
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-orange-600 text-white font-semibold text-sm tracking-wide rounded-xl transition-all duration-300 hover:bg-orange-700 hover:shadow-[0_10px_30px_rgba(232,89,12,0.25)] hover:-translate-y-0.5"
                                >
                                    <FaWhatsapp className="text-lg" />
                                    <span>Order Now</span>
                                </a>
                                <NavLink
                                    to="/menu"
                                    className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-white border border-stone-200 text-stone-700 font-semibold text-sm tracking-wide rounded-xl hover:border-orange-300 hover:text-orange-600 transition-all duration-300 shadow-sm"
                                >
                                    <FaUtensils className="text-orange-500 text-xs" />
                                    <span>Explore Menu</span>
                                </NavLink>
                            </motion.div>

                            {/* Social Proof */}
                            <motion.div variants={fadeUp} className="flex items-center gap-4 pt-4">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="w-8 h-8 rounded-full border-2 border-[#FFFAF5] bg-stone-100 overflow-hidden">
                                            <img src={`https://i.pravatar.cc/64?img=${i + 20}`} alt="" className="w-full h-full object-cover" />
                                        </div>
                                    ))}
                                </div>
                                <div className="h-8 w-px bg-stone-200" />
                                <div>
                                    <div className="flex items-center gap-0.5 text-orange-500 mb-0.5">
                                        {[...Array(5)].map((_, i) => <FaStar key={i} className="text-[9px]" />)}
                                        <span className="text-stone-900 font-bold text-xs ml-1">4.9</span>
                                    </div>
                                    <p className="text-[10px] text-stone-400 font-medium">500+ Happy Customers</p>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Right: Hero Visual */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                            className="relative mt-8 lg:mt-0"
                        >
                            <div className="relative">
                                {/* Main Image Container */}
                                <div className="relative z-10 rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-stone-200/30 aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5]">
                                    <img
                                        src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1200&auto=format&fit=crop"
                                        alt="Bread & Bite Signature Dish"
                                        className="w-full h-full object-cover"
                                    />
                                    {/* Subtle gradient overlay on bottom */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                                </div>

                                {/* Decorative orange glow behind image */}
                                <div className="absolute -inset-4 bg-orange-200/20 rounded-[2rem] -z-10 blur-2xl" />

                                {/* Floating Card - Delivery */}
                                <motion.div
                                    animate={{ y: [0, -6, 0] }}
                                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute -bottom-3 -left-3 sm:bottom-6 sm:-left-6 z-20 bg-white border border-stone-100 rounded-xl px-4 py-3 shadow-[0_8px_25px_rgba(0,0,0,0.08)]"
                                >
                                    <div className="flex items-center gap-2.5">
                                        <div className="w-9 h-9 rounded-lg bg-green-50 flex items-center justify-center">
                                            <FaMotorcycle className="text-green-600" />
                                        </div>
                                        <div>
                                            <p className="text-stone-900 font-bold text-xs">Free Delivery</p>
                                            <p className="text-stone-400 text-[10px]">Under 30 mins</p>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Floating Card - Bestseller */}
                                <motion.div
                                    animate={{ y: [0, 6, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                                    className="absolute -top-3 -right-3 sm:top-6 sm:-right-6 z-20 bg-white border border-orange-100 rounded-xl px-4 py-3 shadow-[0_8px_25px_rgba(232,89,12,0.08)]"
                                >
                                    <div className="flex items-center gap-2.5">
                                        <div className="w-9 h-9 rounded-lg bg-orange-50 flex items-center justify-center">
                                            <FaFire className="text-orange-500" />
                                        </div>
                                        <div>
                                            <p className="text-stone-900 font-bold text-xs">#1 Bestseller</p>
                                            <p className="text-stone-400 text-[10px]">Tandoori Grilled</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════════
                SIGNATURE COMBOS - Replaced Bento Grid
            ═══════════════════════════════════════════════════════════════════ */}
            <section className="py-20 lg:py-24 bg-[#FFFAF5] relative overflow-hidden border-t border-stone-100">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-12 lg:mb-16">
                        <span className="text-orange-600 text-[11px] font-semibold tracking-[0.15em] uppercase mb-2 block">Value Deals</span>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-stone-900 font-heading">
                            Signature <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-600">Combos</span>
                        </h2>
                        <p className="text-stone-500 mt-4 max-w-xl mx-auto">
                            Handpicked meals designed to satisfy your cravings while giving you the best value. Add a complete meal to your cart in one click!
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
                        {HOME_COMBOS.map((combo, idx) => (
                            <motion.div
                                key={combo.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group bg-white rounded-3xl p-3 sm:p-4 border border-stone-100 hover:shadow-[0_12px_40px_rgba(232,89,12,0.08)] hover:border-orange-200 transition-all duration-500 flex flex-col sm:flex-row gap-5"
                            >
                                {/* Image Box */}
                                <div className="w-full sm:w-48 h-48 sm:h-auto rounded-2xl overflow-hidden relative shrink-0">
                                    <ImageWithLoader
                                        src={combo.image}
                                        alt={combo.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute top-3 left-3">
                                        <span className={`px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider ${
                                            combo.type === 'Veg' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'
                                        }`}>
                                            {combo.type}
                                        </span>
                                    </div>
                                    <div className="absolute top-3 right-3">
                                        <span className="px-2.5 py-1 rounded-full bg-orange-600 text-white text-[9px] font-bold uppercase tracking-wider shadow-sm">
                                            {combo.discount}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex flex-col justify-between p-2 flex-1">
                                    <div>
                                        <h3 className="text-xl font-bold text-stone-900 mb-2 font-heading leading-tight group-hover:text-orange-600 transition-colors">
                                            {combo.name}
                                        </h3>
                                        <p className="text-stone-500 text-sm leading-relaxed mb-4">
                                            {combo.description}
                                        </p>
                                    </div>
                                    <div className="flex items-center justify-between mt-auto">
                                        <div className="flex flex-col">
                                            <span className="text-xl font-bold text-stone-900">₹{combo.price}</span>
                                        </div>
                                        <button
                                            onClick={(e) => {
                                                e.preventDefault();
                                                addToCart(combo);
                                            }}
                                            className="h-10 px-5 bg-orange-50 text-orange-600 hover:bg-orange-600 hover:text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2"
                                        >
                                            Add
                                            <FaPlus size={10} />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════════
                CATEGORY EXPLORATION
            ═══════════════════════════════════════════════════════════════════ */}
            <section className="py-20 lg:py-24 bg-white relative overflow-hidden border-t border-stone-100">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12 lg:mb-16"
                    >
                        <span className="text-orange-600 text-[11px] font-semibold tracking-[0.15em] uppercase mb-2 block">Menu Highlights</span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 tracking-tight font-heading">
                            Explore Our <span className="text-orange-600 italic">Menu</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
                        {[
                            { name: "Pizzas", img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600&auto=format&fit=crop", count: "4 Items" },
                            { name: "Sandwiches", img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=600&auto=format&fit=crop", count: "4 Items" },
                            { name: "Pastas", img: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=600&auto=format&fit=crop", count: "4 Items" },
                            { name: "Drinks", img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=600&auto=format&fit=crop", count: "4 Items" }
                        ].map((category, idx) => (
                            <NavLink to="/menu" key={idx} className="group relative rounded-2xl overflow-hidden aspect-square flex items-end p-5 lg:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_40px_rgba(232,89,12,0.15)] transition-all duration-500 block border border-stone-100">
                                <ImageWithLoader src={category.img} alt={category.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                <div className="relative z-10 w-full flex items-end justify-between">
                                    <div>
                                        <h3 className="text-white font-bold text-lg lg:text-xl font-heading mb-0.5">{category.name}</h3>
                                        <p className="text-orange-300 text-[10px] uppercase tracking-wider font-semibold">{category.count}</p>
                                    </div>
                                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-orange-600 transition-colors">
                                        <FaArrowRight className="text-white text-[10px]" />
                                    </div>
                                </div>
                            </NavLink>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════════
                BESTSELLERS SECTION
            ═══════════════════════════════════════════════════════════════════ */}
            <section className="py-20 lg:py-24 bg-[#FFFAF5] relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-100/25 rounded-full blur-[120px]" />

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10"
                    >
                        <div>
                            <span className="text-orange-600 text-[11px] font-semibold tracking-[0.15em] uppercase mb-2 block">Featured</span>
                            <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 tracking-tight leading-tight font-heading">
                                Crowd <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-600">Favorites</span>
                            </h2>
                        </div>
                        <NavLink
                            to="/menu"
                            className="group inline-flex items-center gap-2 text-stone-500 font-semibold text-sm hover:text-orange-600 transition-colors"
                        >
                            <span>View All</span>
                            <FaArrowRight className="text-[10px] group-hover:translate-x-1 transition-transform" />
                        </NavLink>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="grid grid-cols-2 lg:grid-cols-4 gap-4"
                    >
                        {randomBestsellers.map((item, index) => (
                            <motion.div
                                key={index}
                                variants={fadeUp}
                                className="group"
                            >
                                <NavLink to="/menu" className="block">
                                    <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-white border border-stone-100 group-hover:shadow-[0_10px_35px_rgba(0,0,0,0.07)] group-hover:border-orange-200/60 transition-all duration-500">
                                        <ImageWithLoader
                                            src={item.image}
                                            alt={item.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                                        
                                        <div className="absolute top-3 left-3">
                                            <div className="px-2.5 py-1 rounded-full bg-orange-600 text-white text-[9px] font-bold uppercase tracking-wider">
                                                Bestseller
                                            </div>
                                        </div>

                                        <div className="absolute bottom-0 left-0 right-0 p-3.5">
                                            <div className="flex items-center gap-1 text-orange-300 text-[10px] font-semibold mb-1">
                                                <FaStar className="text-[8px]" />
                                                <span>{item.rating}</span>
                                            </div>
                                            <h3 className="text-sm font-bold text-white leading-snug mb-1.5 line-clamp-2">
                                                {item.name}
                                            </h3>
                                            <div className="flex items-center justify-between">
                                                <span className="text-base font-bold text-white">₹{item.price}</span>
                                                <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur flex items-center justify-center group-hover:bg-orange-600 transition-all duration-300">
                                                    <FaArrowRight className="text-[8px] text-white" />
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
                ARTISAN QUALITY SECTION
            ═══════════════════════════════════════════════════════════════════ */}
            <section className="py-20 lg:py-32 bg-white relative overflow-hidden border-t border-stone-100">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            className="relative"
                        >
                            <div className="relative z-10 rounded-3xl overflow-hidden aspect-[4/3] lg:aspect-square shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
                                <ImageWithLoader src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1000&auto=format&fit=crop" alt="Fresh ingredients" className="w-full h-full object-cover" />
                            </div>
                            {/* Decorative elements */}
                            <div className="absolute -bottom-6 -right-6 lg:-bottom-10 lg:-right-10 w-40 h-40 lg:w-56 lg:h-56 bg-orange-100/50 rounded-full blur-[40px] -z-10" />
                            <div className="absolute top-1/2 -left-6 -translate-y-1/2 w-20 h-40 bg-amber-100/40 rounded-full blur-[30px] -z-10" />
                            
                            <div className="absolute -bottom-5 -left-5 bg-white p-5 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-stone-100 hidden sm:block">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                                        <FaLeaf size={20} />
                                    </div>
                                    <div>
                                        <p className="text-stone-900 font-bold text-sm font-heading">100% Fresh</p>
                                        <p className="text-stone-500 text-[10px]">Farm to Table</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                        >
                            <span className="text-orange-600 text-[11px] font-semibold tracking-[0.15em] uppercase mb-4 block">Our Promise</span>
                            <h2 className="text-3xl lg:text-5xl font-bold text-stone-900 tracking-tight font-heading leading-tight mb-6">
                                Fresh <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-600">Ingredients</span>.
                            </h2>
                            <div className="space-y-6 text-stone-500 text-sm lg:text-base leading-relaxed">
                                <p>
                                    We believe in serving good, fresh food that satisfies your cravings. No shortcuts, just great taste.
                                </p>
                                <p>
                                    From our handmade pizza dough to our fresh veggies, we make sure every meal is prepared with care and high-quality ingredients, so you always get the best.
                                </p>
                            </div>

                            <ul className="mt-8 space-y-4">
                                {[
                                    "Made fresh every day",
                                    "No artificial flavor enhancers",
                                    "Clean and hygienic kitchen"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 shrink-0">
                                            <FaCheckCircle size={12} />
                                        </div>
                                        <span className="text-stone-700 font-medium text-sm">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <NavLink to="/about" className="inline-flex items-center gap-2 mt-10 text-orange-600 font-bold hover:text-orange-700 transition-colors group text-sm uppercase tracking-wider">
                                <span>Read Our Story</span>
                                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </NavLink>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════════
                TESTIMONIALS SECTION
            ═══════════════════════════════════════════════════════════════════ */}
            <section className="py-20 lg:py-24 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <span className="text-stone-400 text-[11px] font-semibold tracking-[0.15em] uppercase mb-2 block">Testimonials</span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 tracking-tight font-heading">
                            What They <span className="text-orange-600 italic">Say</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="grid md:grid-cols-3 gap-5"
                    >
                        {[
                            { name: "Aarav M.", text: "The Tandoori Grilled sandwich changed my life. Best food delivery in Kharghar, hands down!", loc: "Kharghar", rating: 5 },
                            { name: "Priya S.", text: "Finally found a place that does authentic pasta AND amazing pizzas. 10/10 hygiene too.", loc: "Taloja", rating: 5 },
                            { name: "Karan D.", text: "The cheese pull on their pizza is INSANE. Fast delivery, hot food, zero complaints.", loc: "Panvel", rating: 5 }
                        ].map((review, i) => (
                            <motion.div
                                key={i}
                                variants={fadeUp}
                                className="group p-6 rounded-2xl bg-[#FFFAF5] border border-stone-100 hover:border-orange-200 hover:shadow-[0_6px_24px_rgba(232,89,12,0.05)] transition-all duration-500"
                            >
                                <div className="flex gap-0.5 text-orange-500 mb-4">
                                    {[...Array(review.rating)].map((_, j) => <FaStar key={j} className="text-[10px]" />)}
                                </div>
                                <p className="text-stone-600 text-sm leading-relaxed mb-6 group-hover:text-stone-700 transition-colors">
                                    "{review.text}"
                                </p>
                                <div className="flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold text-sm group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 font-heading">
                                        {review.name[0]}
                                    </div>
                                    <div>
                                        <p className="text-stone-900 font-semibold text-sm">{review.name}</p>
                                        <p className="text-stone-400 text-[11px]">{review.loc}</p>
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
            <section className="py-20 lg:py-24 px-6 bg-[#FFFAF5] relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-orange-100/30 rounded-full blur-[120px]" />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="max-w-3xl mx-auto relative z-10 text-center"
                >
                    <span className="text-orange-600 text-[11px] font-semibold tracking-[0.15em] uppercase mb-4 block">Ready to Order?</span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight mb-5 leading-tight font-heading">
                        Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-600">Eat</span>
                    </h2>
                    <p className="text-stone-500 text-base max-w-lg mx-auto mb-8">
                        Skip the wait. Order via WhatsApp and get your favorite food delivered hot & fresh across Navi Mumbai.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-orange-600 text-white font-bold text-sm tracking-wide rounded-xl transition-all duration-300 hover:bg-orange-700 hover:shadow-[0_12px_35px_rgba(232,89,12,0.25)] hover:-translate-y-0.5"
                        >
                            <FaWhatsapp className="text-lg" />
                            <span>Order on WhatsApp</span>
                        </a>
                        <NavLink
                            to="/menu"
                            className="inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-white border border-stone-200 text-stone-700 font-bold text-sm tracking-wide rounded-xl hover:border-orange-300 hover:text-orange-600 transition-all duration-300 shadow-sm"
                        >
                            <span>Browse Menu</span>
                        </NavLink>
                    </div>

                    <div className="flex items-center justify-center gap-6 mt-10 flex-wrap">
                        {[
                            { icon: <FaMotorcycle />, text: "Free Delivery" },
                            { icon: <FaCheckCircle />, text: "Hygiene Certified" },
                            { icon: <FaStar />, text: "4.9 Rating" }
                        ].map((badge, i) => (
                            <div key={i} className="flex items-center gap-1.5 text-stone-400 text-xs">
                                <span className="text-orange-500">{badge.icon}</span>
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