import React, { useState, useMemo, useEffect } from "react";
import { useCart } from '../src/context/CartContext';
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams, Link } from "react-router-dom";
import menuItems, { CATEGORIES_DATA } from "../data/MenuItems";
import { LOCATIONS } from "../data/locations";
import { ORDER_LINKS } from "../data/orderLinks";
import { FaPlus, FaMinus, FaTrash, FaSearch, FaTimes, FaClock } from "react-icons/fa";
import { SiSwiggy, SiZomato } from "react-icons/si";
import ProductModal from '../src/components/ProductModal';
import SEO from '../src/components/SEO';
import ImageWithLoader from '../src/components/ImageWithLoader';
import { useKitchenStatus } from '../src/hooks/useKitchenStatus';

const Menu = () => {
  const { addToCart, updateQuantity, cart } = useCart();
  const { isOpen: isKitchenOpen, shortStatus } = useKitchenStatus();
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");

  const [selectedCategory, setSelectedCategory] = useState(() => {
    if (categoryParam) {
      const match = CATEGORIES_DATA.find(c => 
        c.id.toLowerCase() === categoryParam.toLowerCase() ||
        (c.id === "Dessert" && categoryParam.toLowerCase() === "desserts")
      );
      if (match) return match.id;
    }
    return "Gravy";
  });

  const [dietaryFilter, setDietaryFilter] = useState("ALL"); // "ALL", "Veg", "Non-Veg"
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  // Sync category state when URL search param changes
  useEffect(() => {
    if (categoryParam) {
      const match = CATEGORIES_DATA.find(c => 
        c.id.toLowerCase() === categoryParam.toLowerCase() ||
        (c.id === "Dessert" && categoryParam.toLowerCase() === "desserts")
      );
      if (match && match.id !== selectedCategory) {
        setSelectedCategory(match.id);
      }
    }
  }, [categoryParam, selectedCategory]);

  const handleCategoryChange = (catId) => {
    setSelectedCategory(catId);
    setSearchParams({ category: catId }, { replace: true });
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
    <section className="min-h-screen bg-[#FAF7F2] pt-6 sm:pt-10 lg:pt-14 pb-28 px-4 sm:px-6">
      <SEO
        title="Our Menu & Online Order | Bread & Bite Navi Mumbai"
        description="Explore our menu of 500g Chicken Keema, Korma gravies, tandoori rotis, burgers & warm Choco Lava Cake. Freshly cooked & delivered hot across Navi Mumbai."
        url="/menu/"
        keywords="bread and bite menu, chicken keema taloja, choco lava cake navi mumbai, dessert delivery taloja, chicken korma kharghar, keema pav navi mumbai, tandoori roti delivery, chicken burger taloja phase 1, food delivery panvel, cloud kitchen menu navi mumbai"
      />

      {/* Semantic Directory for Search Engines (Phase 4) */}
      <nav aria-label="Menu Directory" className="sr-only">
        <ul>
          <li><a href="/menu/?category=all">All Items</a></li>
          <li><a href="/menu/?category=Combos">Value Meal Combos</a></li>
          <li><a href="/menu/?category=Gravy">Chicken Gravies (500g)</a></li>
          <li><a href="/menu/?category=Roti">Tandoori Roti & Fresh Pav</a></li>
          <li><a href="/menu/?category=Snacks">Crispy Snacks & Fries</a></li>
          <li><a href="/menu/?category=Burgers">Crispy Chicken Burgers</a></li>
          <li><a href="/menu/?category=Dessert">Warm Desserts & Choco Lava Cake</a></li>
        </ul>
      </nav>

      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-12 border-b border-[#EAE4DC] pb-6 sm:pb-8">
          <div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-normal text-[#181411] tracking-tight font-heading leading-tight">
              Our Kitchen <span className="font-italic-accent text-[#B84A1C]">Menu</span>
            </h1>
            <p className="text-[#574F4A] mt-2 text-xs sm:text-base max-w-xl leading-relaxed">
              Chicken gravies in full 500g portions, freshly baked tandoori roti, soft ladi pav, and crispy snacks.
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
              className="w-full bg-white border border-[#EAE4DC] rounded-full py-2.5 sm:py-3 pl-10 pr-9 text-xs sm:text-sm font-medium text-[#181411] placeholder-[#8C827A] focus:outline-none focus:border-[#B84A1C] shadow-tactile-sm transition-all"
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

        {/* Swiggy & Zomato Quick Order Banner */}
        <div className="flex flex-wrap items-center justify-between gap-3 bg-white border border-[#EAE4DC] rounded-2xl px-4 py-2.5 mb-6 text-xs">
          <span className="font-semibold text-[#181411]">Also available on:</span>
          <div className="flex items-center gap-3">
            <a
              href={ORDER_LINKS.swiggy}
              target="_blank"
              rel="nofollow noopener noreferrer"
              aria-label="Order on Swiggy"
              className="font-bold text-[#FC8019] hover:underline flex items-center gap-1"
            >
              <SiSwiggy /> Swiggy
            </a>
            <span className="text-[#8C827A]">·</span>
            <a
              href={ORDER_LINKS.zomato}
              target="_blank"
              rel="nofollow noopener noreferrer"
              aria-label="Order on Zomato"
              className="font-bold text-[#E23744] hover:underline flex items-center gap-1"
            >
              <SiZomato /> Zomato
            </a>
          </div>
        </div>

        {/* Closed Hours Browsing Mode Banner */}
        {!isKitchenOpen && (
          <div className="bg-white border border-[#EAE4DC] rounded-2xl p-4 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs shadow-2xs">
            <p className="text-[#574F4A] leading-relaxed">
              <strong className="text-[#181411] font-semibold">Kitchen resting ({shortStatus}):</strong> Explore our menu and prepare your bag; online orders reopen during operational slots.
            </p>
            <span className="text-[11px] font-bold text-[#8C827A] uppercase tracking-wider shrink-0 self-start sm:self-auto">
              Slots: 11:15am–3:30pm & 7pm–9:45pm
            </span>
          </div>
        )}

        {/* Sticky Filters Bar: Categories & Dietary */}
        <div className="sticky top-[61px] sm:top-[69px] z-30 bg-[#FAF7F2] py-3 -mx-4 px-4 sm:-mx-6 sm:px-6 border-b border-[#EAE4DC] shadow-xs mb-8 transition-all">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 max-w-7xl mx-auto">
            {/* Category Pills */}
            <div className={`flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 sm:pb-0 transition-opacity ${searchQuery ? 'opacity-40 pointer-events-none' : 'opacity-100'}`}>
              {CATEGORIES_DATA.map(cat => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    type="button"
                    key={cat.id}
                    onClick={() => handleCategoryChange(cat.id)}
                    className={`px-4 sm:px-5 py-2 rounded-full text-[11px] sm:text-xs font-semibold tracking-wider uppercase transition-all duration-200 shrink-0 border cursor-pointer ${
                      isActive
                        ? "bg-[#181411] text-white border-[#181411] shadow-tactile-md"
                        : "bg-white text-[#574F4A] border-[#EAE4DC] shadow-2xs hover:border-[#D9D1C7] hover:text-[#181411]"
                    }`}
                  >
                    {cat.name}
                  </button>
                );
              })}
            </div>

            {/* Dietary Filter Pills */}
            <div className="flex items-center gap-1.5 shrink-0 self-start sm:self-auto">
              {[
                { id: "ALL", label: "All" },
                { id: "Veg", label: "Veg", dot: "bg-[#2A6A4E]" },
                { id: "Non-Veg", label: "Non-Veg", dot: "bg-[#9E2A2B]" }
              ].map(pill => (
                <button
                  type="button"
                  key={pill.id}
                  onClick={() => setDietaryFilter(pill.id)}
                  className={`px-3 py-1.5 rounded-full text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase transition-all duration-200 border flex items-center gap-1.5 cursor-pointer ${
                    dietaryFilter === pill.id
                      ? "bg-[#FDF3ED] text-[#B84A1C] border-[#B84A1C] shadow-2xs"
                      : "bg-white text-[#574F4A] border-[#EAE4DC] shadow-2xs hover:text-[#181411]"
                  }`}
                >
                  {pill.dot && <span className={`w-1.5 h-1.5 rounded-full ${pill.dot}`} />}
                  <span>{pill.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Products Display Container */}
        <div className="min-h-[500px]">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={selectedCategory + dietaryFilter + searchQuery}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {/* MOBILE HORIZONTAL COMPACT CARDS (sm:hidden) */}
              <div className="flex flex-col gap-3 sm:hidden">
                {filteredItems.map(item => {
                  const cartItem = cart.find(c => c.id === item.id);
                  return (
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
                      className="artisan-card rounded-2xl p-3.5 flex gap-3.5 items-center justify-between cursor-pointer active:bg-[#FAF7F2]/50 border border-[#EAE4DC]"
                    >
                      {/* Left Info */}
                      <div className="flex-1 min-w-0 pr-1">
                        <div className="flex items-center gap-1.5 mb-1">
                          <span className={item.type === 'Veg' ? 'badge-veg text-[8px] py-0.5 px-1.5' : 'badge-nonveg text-[8px] py-0.5 px-1.5'}>
                            {item.type}
                          </span>
                          {item.isBestSeller && (
                            <span className="bg-[#181411] text-white text-[8px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full">
                              Bestseller
                            </span>
                          )}
                        </div>
                        <h3 className="text-sm font-bold text-[#181411] font-heading line-clamp-1 mb-1">
                          {item.name}
                        </h3>
                        <p className="text-[11px] text-[#574F4A] line-clamp-2 leading-snug mb-2">
                          {item.description}
                        </p>
                        <div className="flex items-center gap-2">
                          <span className="text-base font-bold text-[#181411] font-heading">
                            ₹{item.price}
                          </span>
                          {item.originalPrice && (
                            <span className="text-[11px] text-[#8C827A] line-through">
                              ₹{item.originalPrice}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Right Photo & Action */}
                      <div className="relative shrink-0 flex flex-col items-center">
                        <div className="w-22 h-22 rounded-xl overflow-hidden relative border border-[#EAE4DC] bg-[#FAF7F2]">
                          <ImageWithLoader
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Interactive Stepper / Add Button */}
                        <div className="-mt-3 z-10">
                          {cartItem ? (
                            <div className="flex items-center bg-white border border-[#B84A1C] rounded-lg shadow-tactile-sm p-0.5">
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  updateQuantity(item.id, -1);
                                }}
                                className="w-6 h-6 flex items-center justify-center text-[#B84A1C] font-bold hover:bg-[#FDF3ED] rounded cursor-pointer"
                                aria-label="Decrease quantity"
                              >
                                {cartItem.quantity === 1 ? <FaTrash size={8} /> : <FaMinus size={7} />}
                              </button>
                              <span className="text-xs font-bold w-5 text-center text-[#181411]">
                                {cartItem.quantity}
                              </span>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  updateQuantity(item.id, 1);
                                }}
                                className="w-6 h-6 flex items-center justify-center text-[#B84A1C] font-bold hover:bg-[#FDF3ED] rounded cursor-pointer"
                                aria-label="Increase quantity"
                              >
                                <FaPlus size={7} />
                              </button>
                            </div>
                          ) : (
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                addToCart(item);
                              }}
                              className="btn-primary py-1 px-3 text-[10px] font-bold uppercase tracking-wider shadow-tactile-sm"
                            >
                              <FaPlus size={8} />
                              <span>Add</span>
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* TABLET & DESKTOP MULTI-COLUMN GRID (hidden sm:grid) */}
              <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-7">
                {filteredItems.map(item => {
                  const cartItem = cart.find(c => c.id === item.id);
                  return (
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
                      </div>

                      {/* Content */}
                      <div className="p-5 flex flex-col flex-1 justify-between">
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

                          {cartItem ? (
                            <div className="flex items-center bg-white border border-[#B84A1C] rounded-lg p-0.5 shadow-2xs">
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  updateQuantity(item.id, -1);
                                }}
                                className="w-6 h-6 flex items-center justify-center text-[#B84A1C] hover:bg-[#FDF3ED] transition-colors rounded cursor-pointer"
                                aria-label="Decrease quantity"
                              >
                                {cartItem.quantity === 1 ? <FaTrash size={8} /> : <FaMinus size={7} />}
                              </button>
                              <span className="text-xs font-bold w-5 text-center text-[#181411]">
                                {cartItem.quantity}
                              </span>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  updateQuantity(item.id, 1);
                                }}
                                className="w-6 h-6 flex items-center justify-center text-[#B84A1C] hover:bg-[#FDF3ED] transition-colors rounded cursor-pointer"
                                aria-label="Increase quantity"
                              >
                                <FaPlus size={7} />
                              </button>
                            </div>
                          ) : (
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                addToCart(item);
                              }}
                              className="btn-primary py-1.5 px-3.5 text-xs"
                              aria-label={`Add ${item.name} to cart`}
                            >
                              <FaPlus size={9} />
                              <span>Add</span>
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20 artisan-card rounded-3xl p-8 max-w-lg mx-auto my-8 bg-white">
            <h3 className="text-xl font-bold font-heading text-[#181411] mb-2">No Matching Dishes Found</h3>
            <p className="text-xs sm:text-sm text-[#574F4A] mb-6">
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

        {/* Navi Mumbai Delivery Locations Banner */}
        <div className="mt-16 artisan-card rounded-3xl p-6 sm:p-8 bg-white border border-[#EAE4DC]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5 pb-4 border-b border-[#EAE4DC]">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#B84A1C] block">
                Local Delivery Coverage
              </span>
              <h3 className="text-xl font-bold font-heading text-[#181411]">
                Delivering Fresh to Your Area in Navi Mumbai
              </h3>
            </div>
            <span className="text-xs text-[#2A6A4E] font-bold bg-[#EEF6F2] px-3 py-1 rounded-full border border-[#2A6A4E]/20 self-start md:self-auto">
              ⚡ 20–35 Min Doorstep Delivery
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 text-xs">
            {LOCATIONS.map((loc) => (
              <Link
                key={loc.slug}
                to={`/${loc.slug}/`}
                className="p-3 rounded-2xl bg-[#FAF7F2] border border-[#EAE4DC] hover:border-[#B84A1C] hover:bg-white transition-all text-center group"
              >
                <strong className="block text-[#181411] group-hover:text-[#B84A1C] font-semibold text-xs mb-0.5">
                  {loc.name}
                </strong>
                <span className="text-[10px] text-[#8C827A] block">
                  {loc.deliveryTime} mins
                </span>
              </Link>
            ))}
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