import React, { useState, useMemo, useEffect } from "react";
import { useCart } from '../src/context/CartContext';
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import menuItems, { CATEGORIES_DATA } from "../data/MenuItems";
import { FaPlus, FaSearch, FaStar, FaTimes } from "react-icons/fa";
import ProductModal from '../src/components/ProductModal';
import SEO from '../src/components/SEO';
import ImageWithLoader from '../src/components/ImageWithLoader';

const Menu = () => {
  const { addToCart } = useCart();
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");

  const [selectedCategory, setSelectedCategory] = useState(() => {
    if (categoryParam) {
      const match = CATEGORIES_DATA.find(c => c.id.toLowerCase() === categoryParam.toLowerCase());
      if (match) return match.id;
    }
    return "Pizza";
  });

  const [dietaryFilter, setDietaryFilter] = useState("ALL"); // "ALL", "Veg", "Non-Veg"
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  // Sync category state when URL search param changes
  useEffect(() => {
    if (categoryParam) {
      const match = CATEGORIES_DATA.find(c => c.id.toLowerCase() === categoryParam.toLowerCase());
      if (match && match.id !== selectedCategory) {
        setSelectedCategory(match.id);
      }
    }
  }, [categoryParam, selectedCategory]);

  const handleCategoryChange = (catId) => {
    setSelectedCategory(catId);
    setSearchParams({ category: catId });
  };

  const filteredItems = useMemo(() => {
    return menuItems.filter(item => {
      const query = searchQuery.trim().toLowerCase();
      const matchSearch = query === "" ||
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query);

      const matchCategory = query !== "" || item.category === selectedCategory;

      const matchDietary =
        dietaryFilter === "ALL" ||
        (dietaryFilter === "Veg" && item.type === "Veg") ||
        (dietaryFilter === "Non-Veg" && (item.type === "Non-Veg" || item.type === "Egg"));

      return matchSearch && matchCategory && matchDietary;
    });
  }, [selectedCategory, dietaryFilter, searchQuery]);

  return (
    <section className="min-h-screen bg-[#FAF7F2] pt-8 lg:pt-16 pb-28 px-6">
      <SEO
        title="Our Menu - Bread & Bite | Fresh Pizza, Sandwich, Pasta & Drinks"
        description="Explore our menu with fresh pizzas, crispy grilled sandwiches, creamy pastas, and chilled drinks. Delivered hot across Navi Mumbai."
        url="/menu"
        keywords="bread and bite menu, fresh food menu navi mumbai, pizza delivery kharghar, sandwich taloja, pasta panvel"
      />

      <div className="max-w-7xl mx-auto">
        {/* Page Header with Tall Proportions */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 border-b border-[#EAE4DC] pb-9">
          <div>
            <span className="eyebrow-tag mb-3.5">Fresh Food</span>
            <h1 className="text-4xl sm:text-6xl font-normal text-[#181411] tracking-tight font-heading leading-tight">
              Our <span className="font-italic-accent text-[#B84A1C]">Menu</span>
            </h1>
            <p className="text-[#574F4A] mt-2.5 text-sm sm:text-base max-w-xl leading-relaxed">
              Delicious pizzas, grilled sandwiches, creamy pastas, and cold drinks prepared fresh on every order.
            </p>
          </div>

          {/* Search Bar with Tactile Shadow */}
          <div className="w-full md:w-80 relative">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8C827A] text-xs pointer-events-none" />
            <input
              type="text"
              placeholder="Search dishes or ingredients..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-[#EAE4DC] rounded-full py-3 pl-10 pr-9 text-xs sm:text-sm font-medium text-[#181411] placeholder-[#8C827A] focus:outline-none focus:border-[#B84A1C] shadow-tactile-sm transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                aria-label="Clear search"
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#8C827A] hover:text-[#181411]"
              >
                <FaTimes size={11} />
              </button>
            )}
          </div>
        </div>

        {/* Filters Bar: Categories & Dietary */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          {/* Category Pills */}
          <div className={`flex items-center gap-2.5 overflow-x-auto no-scrollbar pb-2 -mx-2 px-2 transition-opacity ${searchQuery ? 'opacity-40 pointer-events-none' : 'opacity-100'}`}>
            {CATEGORIES_DATA.map(cat => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  type="button"
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`px-5.5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-200 shrink-0 border cursor-pointer ${
                    isActive
                      ? "bg-[#181411] text-white border-[#181411] shadow-tactile-md"
                      : "bg-white text-[#574F4A] border-[#EAE4DC] shadow-tactile-sm hover:border-[#D9D1C7] hover:text-[#181411]"
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>

          {/* Dietary Filter Pills */}
          <div className="flex items-center gap-2 self-start md:self-auto shrink-0">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#8C827A] mr-1 hidden sm:inline">Dietary:</span>
            {[
              { id: "ALL", label: "All Items" },
              { id: "Veg", label: "Veg Only", dot: "bg-[#2A6A4E]" },
              { id: "Non-Veg", label: "Non-Veg", dot: "bg-[#9E2A2B]" }
            ].map(pill => (
              <button
                type="button"
                key={pill.id}
                onClick={() => setDietaryFilter(pill.id)}
                className={`px-3.5 py-1.5 rounded-full text-[11px] font-semibold tracking-wider uppercase transition-all duration-200 border flex items-center gap-1.5 cursor-pointer ${
                  dietaryFilter === pill.id
                    ? "bg-[#FDF3ED] text-[#B84A1C] border-[#B84A1C] shadow-tactile-sm"
                    : "bg-white text-[#574F4A] border-[#EAE4DC] shadow-2xs hover:text-[#181411]"
                }`}
              >
                {pill.dot && <span className={`w-1.5 h-1.5 rounded-full ${pill.dot}`} />}
                <span>{pill.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid with Stable Min Height (prevents collapsing to footer) */}
        <div className="min-h-[560px]">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={selectedCategory + dietaryFilter + searchQuery}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-7"
            >
              {filteredItems.map(item => (
                <div
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedItem(item);
                    }
                  }}
                  className="artisan-card rounded-2xl overflow-hidden flex flex-col group cursor-pointer"
                >
                {/* Photo container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#FAF7F2]">
                  <ImageWithLoader
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-104"
                  />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    <span className={item.type === 'Veg' ? 'badge-veg' : 'badge-nonveg'}>
                      {item.type}
                    </span>
                    {item.isBestSeller && (
                      <span className="bg-[#181411] text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
                        Bestseller
                      </span>
                    )}
                  </div>

                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur px-2.5 py-1 rounded-full text-[10px] font-bold text-[#181411] flex items-center gap-1 shadow-tactile-sm border border-[#EAE4DC]">
                    <FaStar className="text-[#D97706] text-[9px]" />
                    <span>{item.rating}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5.5 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-base font-bold text-[#181411] font-heading group-hover:text-[#B84A1C] transition-colors line-clamp-1 mb-1.5">
                      {item.name}
                    </h3>
                    <p className="text-xs text-[#574F4A] line-clamp-2 leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3.5 border-t border-[#EAE4DC] flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-[#181411] font-heading">
                        ₹{item.price}
                      </span>
                      {item.originalPrice && (
                        <span className="text-xs text-[#8C827A] line-through">
                          ₹{item.originalPrice}
                        </span>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(item);
                      }}
                      className="btn-primary py-2 px-3.5 text-xs"
                      aria-label={`Add ${item.name} to cart`}
                    >
                      <FaPlus size={9} />
                      <span>Add</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-24 artisan-card rounded-3xl p-8 max-w-lg mx-auto my-8 bg-white">
            <h3 className="text-xl font-bold font-heading text-[#181411] mb-2">No Matching Dishes Found</h3>
            <p className="text-sm text-[#574F4A] mb-6">
              Try adjusting your search query or dietary filter to see available options.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setDietaryFilter("ALL");
              }}
              className="btn-outline text-xs"
            >
              Reset Filters
            </button>
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