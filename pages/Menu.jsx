import React, { useState, useMemo } from "react";
import { useCart } from '../src/context/CartContext';
import { motion, AnimatePresence } from "framer-motion";
import menuItems, { CATEGORIES_DATA } from "../data/MenuItems";
import { FaPlus, FaSearch } from "react-icons/fa";
import ProductModal from '../src/components/ProductModal';
import SEO from '../src/components/SEO';
import ImageWithLoader from '../src/components/ImageWithLoader';

const Menu = () => {
    const { addToCart } = useCart();
    const [selectedCategory, setSelectedCategory] = useState("Sandwiches");
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedItem, setSelectedItem] = useState(null);

    const filteredItems = useMemo(() => {
        return menuItems.filter(item => {
            const matchCategory = item.category === selectedCategory;
            const matchSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.description.toLowerCase().includes(searchQuery.toLowerCase());
            return matchCategory && matchSearch;
        });
    }, [selectedCategory, searchQuery]);

    return (
        <section className="min-h-screen bg-black pt-32 pb-20 px-6">
            <SEO
                title="Menu - Bread & Bite | Sandwiches, Pizza, Pasta & More"
                description="Explore our full menu - grilled sandwiches, cheesy pizzas, creamy pastas, Maggi, and street-style snacks. Order online in Navi Mumbai. Free delivery!"
                url="/menu"
                keywords="bread and bite menu, food menu navi mumbai, sandwich menu kharghar, pizza menu panvel, pasta menu taloja, maggi near me"
            />

            <div className="max-w-7xl mx-auto">
                {/* Minimalist Header & Controls */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20">
                    <div>
                        <h1 className="text-6xl md:text-9xl font-bold text-white tracking-tighter leading-none font-heading uppercase">
                            Our <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-600">
                                Menu
                            </span>
                        </h1>
                    </div>
                    
                    <div className="flex flex-col gap-8 w-full md:w-auto">
                        {/* Search */}
                        <div className="relative group">
                            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 text-sm group-focus-within:text-yellow-400 transition-colors" />
                            <input
                                type="text"
                                placeholder="SEARCH..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full md:w-80 bg-zinc-900/50 border border-white/5 rounded-full py-3.5 pl-12 pr-6 text-sm font-bold text-white placeholder-zinc-600 focus:outline-none focus:border-yellow-400/50 transition-all uppercase tracking-widest"
                            />
                        </div>

                        {/* Visual Categories */}
                        <div className="flex overflow-x-auto no-scrollbar gap-8 p-4 mask-image-r -mx-4 px-4">
                            {CATEGORIES_DATA.map(cat => (
                                <button
                                    key={cat.id}
                                    onClick={() => setSelectedCategory(cat.id)}
                                    className="flex flex-col items-center gap-4 group flex-shrink-0 min-w-[5rem]"
                                >
                                    <div className={`relative w-20 h-20 rounded-full p-1 transition-all duration-300 ${
                                        selectedCategory === cat.id
                                            ? "ring-2 ring-yellow-400 ring-offset-4 ring-offset-black scale-110"
                                            : "opacity-60 hover:opacity-100 hover:scale-105"
                                    }`}>
                                        <div className="w-full h-full rounded-full overflow-hidden border border-white/10 bg-zinc-900">
                                            <ImageWithLoader
                                                src={cat.image}
                                                alt={cat.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                    <span className={`text-[10px] font-black uppercase tracking-widest transition-colors ${
                                        selectedCategory === cat.id ? "text-yellow-400" : "text-zinc-600 group-hover:text-white"
                                    }`}>
                                        {cat.name}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Minimalist Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedCategory}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20 mt-12"
                    >
                        {filteredItems.map(item => (
                            <div 
                                key={item.id}
                                className="group cursor-pointer"
                                onClick={() => setSelectedItem(item)}
                            >
                                {/* Image Area */}
                                <div className="aspect-[4/3] bg-zinc-900 rounded-2xl overflow-hidden mb-6 relative border border-white/5 group-hover:border-yellow-400/30 transition-colors">
                                    <ImageWithLoader
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                                    />
                                    {/* Minimal Price Tag */}
                                    <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur px-3 py-1.5 rounded-lg border border-white/10">
                                        <span className="text-white font-bold text-lg font-heading">₹{item.price}</span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex justify-between items-start gap-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-white leading-tight font-heading mb-2 group-hover:text-yellow-400 transition-colors">
                                            {item.name}
                                        </h3>
                                        <p className="text-zinc-600 text-sm line-clamp-2 leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            addToCart(item);
                                        }}
                                        className="mt-1 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all shrink-0"
                                    >
                                        <FaPlus size={10} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </AnimatePresence>
                
                {filteredItems.length === 0 && (
                    <div className="text-center py-40 border-t border-white/10 mt-20">
                        <p className="text-zinc-500 font-bold uppercase tracking-widest">No items found</p>
                    </div>
                )}
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