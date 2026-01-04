import React, { useState, useMemo, useEffect } from "react";
import { useCart } from '../src/context/CartContext';
import { motion, AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";
import Marquee from "react-fast-marquee";
import clsx from "clsx";
import menuItems, { CATEGORIES_DATA } from "../data/MenuItems";
import { FaLeaf, FaDrumstickBite, FaStar, FaSearch, FaEgg, FaFire, FaMotorcycle, FaBolt, FaPlus, FaCheckCircle } from "react-icons/fa";
import ProductModal from '../src/components/ProductModal';
import SEO from '../src/components/SEO';
import ImageWithLoader from '../src/components/ImageWithLoader';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: "backOut" }
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: { duration: 0.2 }
  }
};

const Menu = () => {
    const { addToCart } = useCart();
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [filterType, setFilterType] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedItem, setSelectedItem] = useState(null);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 150);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const filteredItems = useMemo(() => {
        return menuItems.filter(item => {
            const matchCategory = selectedCategory === "All" || item.category === selectedCategory;
            const matchType = filterType === "All" || item.type === filterType;
            const matchSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.description.toLowerCase().includes(searchQuery.toLowerCase());
            return matchCategory && matchType && matchSearch;
        });
    }, [selectedCategory, filterType, searchQuery]);

    const getCategoryIcon = (type) => {
        switch (type) {
            case "Veg": return <FaLeaf className="text-green-500" />;
            case "Non-Veg": return <FaDrumstickBite className="text-red-500" />;
            case "Egg": return <FaEgg className="text-yellow-500" />;
            default: return null;
        }
    };

    return (
        <section className="min-h-screen bg-black pb-40">
            <SEO
                title="Premium Menu - Bread & Bite"
                description="Explore our artisanal collection of grilled sandwiches, hand-stretched pizzas, and gourmet snacks. Exclusive delivery in Navi Mumbai."
            />

            {/* Header Section */}
            <div className="pt-32 pb-16 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-400/5 rounded-full blur-[120px] pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900 border border-white/10 text-yellow-400 text-[10px] font-black tracking-[0.4em] uppercase mb-8"
                    >
                        <FaMotorcycle className="text-xs" /> Free Delivery in Navi Mumbai
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-6xl md:text-9xl font-black text-white mb-6 uppercase tracking-tighter leading-none"
                    >
                        THE <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-600">COLLECTION</span>
                    </motion.h1>
                    <p className="text-zinc-500 text-xl max-w-2xl mx-auto font-medium tracking-tight">
                        Artisan. Authentic. Absolute. <br /> Curated recipes for the true connoisseur.
                    </p>
                </div>
            </div>

            {/* Elite Marquee */}
            <Marquee speed={50} gradient={false} className="bg-zinc-900/50 border-y border-white/5 py-4 mb-12 backdrop-blur-xl">
                {[...Array(6)].map((_, i) => (
                    <div key={i} className="flex items-center gap-10 mx-6">
                        <span className="text-yellow-400 font-black uppercase tracking-[0.2em] text-xs flex items-center gap-3">
                            <FaFire className="animate-pulse" /> Trending Now
                        </span>
                        <span className="text-zinc-800">•</span>
                        <span className="text-white font-black uppercase tracking-[0.2em] text-xs">Navi Mumbai Exclusive Delivery</span>
                        <span className="text-zinc-800">•</span>
                        <span className="text-amber-500 font-black uppercase tracking-[0.2em] text-xs">Gold Standard Hygiene</span>
                        <span className="text-zinc-800">•</span>
                    </div>
                ))}
            </Marquee>

            {/* Category Bar */}
      <div className="bg-transparent py-4 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
                    {/* Visual Categories */}
                    <div className="flex overflow-x-auto no-scrollbar gap-10 pb-4 mask-image-r">
                        {CATEGORIES_DATA.map(cat => (
                            <button
                                key={cat.id}
                                onClick={() => setSelectedCategory(cat.id)}
                                className="flex flex-col items-center gap-4 group flex-shrink-0"
                            >
                                <div className={clsx(
                                    "relative w-20 h-20 md:w-24 md:h-24 rounded-full p-1 transition-all duration-700",
                                    selectedCategory === cat.id
                                        ? "ring-2 ring-yellow-400 ring-offset-4 ring-offset-black scale-110"
                                        : "grayscale opacity-40 hover:grayscale-0 hover:opacity-100 hover:scale-105"
                                )}>
                                    <div className="w-full h-full rounded-full overflow-hidden border border-white/10">
                                        <ImageWithLoader
                                            src={cat.image}
                                            alt={cat.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    {selectedCategory === cat.id && (
                                        <motion.div
                                            layoutId="activeCategory"
                                            className="absolute -inset-2 rounded-full bg-yellow-400/10 blur-xl -z-10"
                                        />
                                    )}
                                </div>
                                <span className={clsx(
                                    "text-[10px] md:text-xs font-black uppercase tracking-[0.3em] transition-all",
                                    selectedCategory === cat.id ? "text-yellow-400" : "text-zinc-600 group-hover:text-zinc-300"
                                )}>
                                    {cat.name}
                                </span>
                            </button>
                        ))}
                    </div>

                    {/* Filters & Search Row */}
                    <div className="flex flex-col md:flex-row items-center justify-between mt-12 gap-8 border-t border-white/5 pt-10">
                        <div className="flex items-center gap-3 bg-zinc-900/50 p-1.5 rounded-2xl border border-white/5">
                            {['All', 'Veg', 'Non-Veg', 'Egg'].map(type => (
                                <button
                                    key={type}
                                    onClick={() => setFilterType(type)}
                                    className={clsx(
                                        "px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] transition-all",
                                        filterType === type
                                            ? "bg-yellow-400 text-black shadow-xl"
                                            : "text-zinc-500 hover:text-white"
                                    )}
                                >
                                    {type}
                                </button>
                            ))}
                        </div>

                        <div className="relative group w-full md:max-w-md">
                            <FaSearch className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within:text-yellow-400 transition-colors text-lg" />
                            <input
                                type="text"
                                placeholder="FIND YOUR CRAVING..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-zinc-900/50 border border-white/5 rounded-[2rem] pl-16 pr-8 py-5 text-sm font-black text-white focus:outline-none focus:border-yellow-400/30 transition-all placeholder-zinc-700 tracking-[0.2em] uppercase"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Menu Grid */}
            <div className="max-w-7xl mx-auto px-6 py-20 min-h-[60vh]">
                <AnimatePresence mode="popLayout">
                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                    >
                        {filteredItems.map(item => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            >
                                <Tilt
                                    tiltMaxAngleX={4}
                                    tiltMaxAngleY={4}
                                    scale={1.03}
                                    transitionSpeed={2500}
                                    className="h-full"
                                >
                                    <div
                                        className="glass-card rounded-[3.5rem] overflow-hidden h-full flex flex-col group cursor-pointer relative border-white/5 hover:border-white/10 transition-colors"
                                        onClick={() => setSelectedItem(item)}
                                    >
                                        <div className="relative h-72 overflow-hidden">
                                            <ImageWithLoader
                                                src={item.image}
                                                alt={item.name}
                                                className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />
                                            
                                            {/* Status Badges */}
                                            <div className="absolute top-8 left-8 flex flex-col gap-3">
                                                {item.isBestSeller && (
                                                    <span className="bg-yellow-400 text-black text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-2xl flex items-center gap-2">
                                                        <FaFire /> Bestseller
                                                    </span>
                                                )}
                                                {item.type && (
                                                    <span className="bg-black/60 backdrop-blur-xl text-white border border-white/10 text-[10px] font-black px-4 py-1.5 rounded-full flex items-center gap-2 uppercase tracking-widest">
                                                        {getCategoryIcon(item.type)} {item.type}
                                                    </span>
                                                )}
                                            </div>

                                            <div className="absolute bottom-6 left-8">
                                                <div className="flex items-center gap-2 text-yellow-400 text-sm font-black">
                                                    <FaStar /> {item.rating} <span className="text-zinc-500 font-bold ml-2 uppercase text-[10px] tracking-widest">({Math.floor(Math.random() * 100 + 50)}+ Orders)</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-10 flex flex-col flex-grow">
                                            <h3 className="text-2xl font-black text-white mb-4 leading-tight group-hover:text-yellow-400 transition-colors uppercase tracking-tight">
                                                {item.name}
                                            </h3>
                                            <p className="text-zinc-500 text-sm mb-10 line-clamp-2 flex-grow font-medium leading-relaxed">
                                                {item.description}
                                            </p>

                                            <div className="flex items-center justify-between mt-auto">
                                                <div className="flex flex-col">
                                                    <span className="text-xs font-black text-zinc-600 uppercase tracking-widest mb-1">Elite Value</span>
                                                    <div className="flex items-center gap-3">
                                                        <span className="text-3xl font-black text-white">₹{item.price}</span>
                                                        {item.originalPrice && (
                                                            <span className="text-sm text-zinc-600 line-through font-bold">₹{item.originalPrice}</span>
                                                        )}
                                                    </div>
                                                </div>
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        addToCart(item);
                                                    }}
                                                    className="w-14 h-14 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center text-white hover:bg-yellow-400 hover:text-black hover:scale-110 transition-all shadow-2xl active:scale-95 group-hover:border-yellow-400/50"
                                                >
                                                    <FaPlus className="text-lg" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </Tilt>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {filteredItems.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-40"
                    >
                        <h3 className="text-4xl font-black text-white mb-4 uppercase tracking-tighter">SILENCE IN THE KITCHEN</h3>
                        <p className="text-zinc-500 font-medium mb-10">No items match your specific elite requirements.</p>
                        <button
                            onClick={() => { setSelectedCategory("All"); setFilterType("All"); setSearchQuery(""); }}
                            className="bg-yellow-400 text-black px-10 py-4 rounded-full font-black uppercase text-xs tracking-[0.2em] hover:scale-105 transition-transform"
                        >
                            Reset Preferences
                        </button>
                    </motion.div>
                )}
            </div>

            {/* Cart Logic Verification - CTA */}
            <div className="max-w-7xl mx-auto px-6">
                <div className="relative bg-zinc-900/50 border border-white/5 rounded-[3rem] p-12 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="flex items-center gap-8">
                        <div className="w-20 h-20 rounded-full bg-yellow-400/10 flex items-center justify-center text-yellow-400 text-4xl">
                            <FaMotorcycle />
                        </div>
                        <div>
                            <h4 className="text-3xl font-black text-white uppercase tracking-tighter">NAVI MUMBAI EXCLUSIVE</h4>
                            <p className="text-zinc-500 font-medium tracking-tight">Free shipping on all gourmet orders within city limits.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex items-center gap-2 px-4 py-2 bg-green-500/10 text-green-500 rounded-full text-[10px] font-black uppercase tracking-widest">
                            <FaCheckCircle /> Free Delivery
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-blue-500/10 text-blue-500 rounded-full text-[10px] font-black uppercase tracking-widest">
                            <FaBolt /> 25m Avg.
                        </div>
                    </div>
                </div>
            </div>

            <ProductModal
                item={selectedItem}
                isOpen={!!selectedItem}
                onClose={() => setSelectedItem(null)}
            />
        </section>
    );
};

export default Menu;