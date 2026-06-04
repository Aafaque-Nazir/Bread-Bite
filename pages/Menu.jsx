import React, { useState, useMemo } from "react";
import { useCart } from '../src/context/CartContext';
import { motion, AnimatePresence } from "framer-motion";
import menuItems, { CATEGORIES_DATA } from "../data/MenuItems";
import { FaPlus, FaSearch, FaStar } from "react-icons/fa";
import ProductModal from '../src/components/ProductModal';
import SEO from '../src/components/SEO';
import ImageWithLoader from '../src/components/ImageWithLoader';

const Menu = () => {
    const { addToCart } = useCart();
    const [selectedCategory, setSelectedCategory] = useState("Pizza");
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
        <section className="min-h-screen bg-[#FFFAF5] pt-28 pb-20 px-6">
            <SEO
                title="Menu - Bread & Bite | Pizza, Sandwich, Pasta & Drinks"
                description="Explore our curated menu — artisan pizzas, grilled sandwiches, creamy pastas, and refreshing drinks. Order online in Navi Mumbai. Free delivery!"
                url="/menu"
                keywords="bread and bite menu, food menu navi mumbai, pizza menu kharghar, sandwich menu panvel, pasta menu taloja"
            />

            <div className="max-w-7xl mx-auto">
                {/* Header & Controls */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
                    <div>
                        <span className="text-orange-600 text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">Explore</span>
                        <h1 className="text-5xl md:text-7xl font-bold text-stone-900 tracking-tight leading-none font-heading">
                            Our{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-600">
                                Menu
                            </span>
                        </h1>
                    </div>
                    
                    <div className="flex flex-col gap-6 w-full md:w-auto">
                        {/* Search */}
                        <div className="relative group">
                            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 text-sm group-focus-within:text-orange-500 transition-colors" />
                            <input
                                type="text"
                                placeholder="Search dishes..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full md:w-72 bg-white border border-stone-200 rounded-xl py-3 pl-11 pr-5 text-sm font-medium text-stone-800 placeholder-stone-400 focus:outline-none focus:border-orange-400 focus:shadow-[0_0_0_3px_rgba(232,89,12,0.08)] transition-all"
                            />
                        </div>

                        {/* Category Tabs */}
                        <div className="flex gap-6 overflow-x-auto no-scrollbar -mx-2 px-2 pb-1">
                            {CATEGORIES_DATA.map(cat => (
                                <button
                                    key={cat.id}
                                    onClick={() => setSelectedCategory(cat.id)}
                                    className="flex flex-col items-center gap-3 group flex-shrink-0 min-w-[4.5rem]"
                                >
                                    <div className={`relative w-16 h-16 rounded-full p-0.5 transition-all duration-300 ${
                                        selectedCategory === cat.id
                                            ? "ring-2 ring-orange-500 ring-offset-2 ring-offset-[#FFFAF5] scale-110"
                                            : "opacity-60 hover:opacity-100 hover:scale-105"
                                    }`}>
                                        <div className="w-full h-full rounded-full overflow-hidden border border-stone-200 bg-white">
                                            <ImageWithLoader
                                                src={cat.image}
                                                alt={cat.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                    <span className={`text-[10px] font-bold uppercase tracking-wider transition-colors ${
                                        selectedCategory === cat.id ? "text-orange-600" : "text-stone-400 group-hover:text-stone-700"
                                    }`}>
                                        {cat.name}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Products Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedCategory}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 15 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8"
                    >
                        {filteredItems.map(item => (
                            <div 
                                key={item.id}
                                className="group cursor-pointer"
                                onClick={() => setSelectedItem(item)}
                            >
                                {/* Card */}
                                <div className="bg-white rounded-2xl overflow-hidden border border-stone-100 hover:border-orange-200 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-500">
                                    {/* Image */}
                                    <div className="aspect-[4/3] overflow-hidden relative">
                                        <ImageWithLoader
                                            src={item.image}
                                            alt={item.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        {/* Badges */}
                                        <div className="absolute top-3 left-3 flex gap-2">
                                            {item.isBestSeller && (
                                                <span className="px-2.5 py-1 rounded-full bg-orange-600 text-white text-[9px] font-bold uppercase tracking-wider">
                                                    Bestseller
                                                </span>
                                            )}
                                            {item.isNew && (
                                                <span className="px-2.5 py-1 rounded-full bg-green-600 text-white text-[9px] font-bold uppercase tracking-wider">
                                                    New
                                                </span>
                                            )}
                                        </div>
                                        {/* Type badge */}
                                        <div className="absolute top-3 right-3">
                                            <span className={`px-2 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider ${
                                                item.type === 'Veg' ? 'bg-green-50 text-green-700 border border-green-200' :
                                                item.type === 'Non-Veg' ? 'bg-red-50 text-red-700 border border-red-200' :
                                                'bg-yellow-50 text-yellow-700 border border-yellow-200'
                                            }`}>
                                                {item.type}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-4">
                                        <div className="flex items-center gap-1.5 text-orange-500 text-xs font-semibold mb-1.5">
                                            <FaStar className="text-[10px]" />
                                            <span>{item.rating}</span>
                                        </div>
                                        <h3 className="text-base font-bold text-stone-900 leading-snug mb-1 group-hover:text-orange-600 transition-colors font-heading">
                                            {item.name}
                                        </h3>
                                        <p className="text-stone-400 text-xs line-clamp-2 leading-relaxed mb-3">
                                            {item.description}
                                        </p>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <span className="text-lg font-bold text-stone-900">₹{item.price}</span>
                                                {item.originalPrice && (
                                                    <span className="text-xs text-stone-400 line-through">₹{item.originalPrice}</span>
                                                )}
                                                {item.discount && (
                                                    <span className="text-[10px] font-bold text-green-600 bg-green-50 px-1.5 py-0.5 rounded">{item.discount}</span>
                                                )}
                                            </div>
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    addToCart(item);
                                                }}
                                                className="w-8 h-8 rounded-full bg-orange-50 border border-orange-200 flex items-center justify-center text-orange-600 hover:bg-orange-600 hover:text-white hover:border-orange-600 transition-all duration-300"
                                            >
                                                <FaPlus size={9} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </AnimatePresence>
                
                {filteredItems.length === 0 && (
                    <div className="text-center py-32">
                        <p className="text-stone-400 font-semibold uppercase tracking-wider text-sm">No items found</p>
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