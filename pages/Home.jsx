import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaUtensils, FaCheckCircle, FaFire, FaMotorcycle, FaArrowRight, FaPlus, FaMinus, FaTrash, FaChevronDown, FaInfoCircle, FaMapMarkerAlt, FaClock, FaStar } from "react-icons/fa";
import { SiSwiggy, SiZomato } from "react-icons/si";
import { useKitchenStatus } from "../src/hooks/useKitchenStatus";
import { NavLink } from "react-router-dom";
import SEO from "../src/components/SEO";
import ImageWithLoader from "../src/components/ImageWithLoader";
import menuItems from "../data/MenuItems";
import { useCart } from '../src/context/CartContext';
import ProductModal from '../src/components/ProductModal';
import { FAQS } from '../data/faqs';
import { LOCATIONS } from '../data/locations';
import { ORDER_LINKS } from '../data/orderLinks';

const HOME_COMBOS = [
  {
    id: 9,
    name: 'Keema Pav Meal',
    description: 'Chicken Keema Boneless (500g) + 4 Fresh Soft Pavs. The classic Mumbai comfort pairing.',
    price: 219,
    originalPrice: 229,
    discount: 'Save ₹10',
    image: '/images/keema-pav-meal.jpg',
    category: 'Combos',
    type: 'Non-Veg'
  },
  {
    id: 10,
    name: 'Chicken Korma & Roti Meal',
    description: 'Chicken Korma (500g) + 2 Fresh Tandoori Rotis. Complete, satisfying lunch or dinner.',
    price: 249,
    originalPrice: 259,
    discount: 'Save ₹10',
    image: '/images/chicken-korma-roti-meal.jpg?v=2',
    category: 'Combos',
    type: 'Non-Veg'
  }
];

const Home = () => {
  const { addToCart, updateQuantity, cart } = useCart();
  const { isOpen: isKitchenOpen } = useKitchenStatus();
  const [selectedItem, setSelectedItem] = useState(null);
  const [openFaq, setOpenFaq] = useState(0);
  const whatsappLink = isKitchenOpen
    ? "https://wa.me/919325629256?text=Hi%2C%20I%20want%20to%20order%20from%20Bread%20%26%20Bite!"
    : "https://wa.me/919325629256?text=Hi%20Bread%20%26%20Bite%2C%20I%20have%20an%20inquiry%20regarding%20advance%20orders%20or%20catering.";

  const bestsellers = useMemo(() => {
    return menuItems.filter(item => item.isBestSeller).slice(0, 4);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08 } }
  };

  return (
    <>
      <SEO
        title="Bread & Bite | Online Food Delivery in Navi Mumbai"
        description="Order fresh 500g Chicken Keema, Chicken Korma, hot Tandoori Roti & soft Pav. Delivered hot across Taloja, Kharghar & Panvel by Bread & Bite."
        url="/"
        keywords="bread and bite, bread and bite taloja, chicken keema 500g, keema pav taloja, chicken korma kharghar, cloud kitchen taloja phase 1, food delivery navi mumbai, tandoori roti delivery panvel, halal chicken gravy kamothe"
        faqs={FAQS}
      />

      {/* ═══════════════════════════════════════════════════════════════════
          HERO SECTION — Compact, Clear & Appetite-Driven
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative flex items-center pt-4 pb-8 sm:pt-6 sm:pb-12 lg:pt-7 lg:pb-14 bg-[#FAF7F2] overflow-hidden border-b border-[#EAE4DC]">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Content (7 cols) */}
            <motion.div
              initial="hidden"
              animate="show"
              variants={staggerContainer}
              className="lg:col-span-7 space-y-3 sm:space-y-4"
            >
              <motion.span variants={fadeUp} className="text-xs uppercase tracking-widest font-bold text-[#B84A1C] block">
                Cloud Kitchen · Navi Mumbai
              </motion.span>

              {/* Main Headline */}
              <motion.h1 variants={fadeUp} className="text-3xl sm:text-5xl lg:text-[3.25rem] font-bold text-[#181411] leading-[1.12] font-heading">
                Homestyle Taste, <br />
                <span className="font-italic-accent text-[#B84A1C]">
                  Full 500g Portions.
                </span>
              </motion.h1>

              {/* Subheadline */}
              <motion.p variants={fadeUp} className="text-xs sm:text-sm text-[#574F4A] max-w-lg leading-relaxed">
                Fresh Chicken Keema, rich Chicken Korma, hot Tandoori Rotis, and soft Pavs — cooked fresh on every order and delivered hot across Navi Mumbai.
              </motion.p>

              {/* Action Buttons & Food Apps */}
              <motion.div variants={fadeUp} className="space-y-2.5 pt-0.5">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <NavLink
                    to="/menu/"
                    className="btn-primary py-2.5 px-6 text-xs uppercase tracking-wider font-bold shadow-tactile-sm justify-center"
                  >
                    <FaUtensils className="text-xs" />
                    <span>View Menu</span>
                  </NavLink>

                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="btn-outline py-2.5 px-5 text-xs uppercase tracking-wider font-bold hover:border-[#25D366] hover:text-[#25D366] justify-center"
                  >
                    <FaWhatsapp className="text-base text-[#25D366]" />
                    <span>Order on WhatsApp</span>
                  </a>
                </div>

                {/* Swiggy & Zomato Links */}
                <div className="flex items-center gap-3 pt-0.5 text-xs text-[#574F4A]">
                  <span className="font-medium">Also order on:</span>
                  <a
                    href={ORDER_LINKS.swiggy}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="font-bold text-[#FC8019] hover:underline flex items-center gap-1"
                  >
                    <SiSwiggy /> Swiggy
                  </a>
                  <span>·</span>
                  <a
                    href={ORDER_LINKS.zomato}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="font-bold text-[#E23744] hover:underline flex items-center gap-1"
                  >
                    <SiZomato /> Zomato
                  </a>
                </div>
              </motion.div>

              {/* Normal Proof Points */}
              <motion.div variants={fadeUp} className="pt-3 sm:pt-4 border-t border-[#EAE4DC] grid grid-cols-3 gap-3 sm:gap-6">
                <div>
                  <div className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#181411]">
                    <FaFire className="text-[#B84A1C]" />
                    <span>500g Portions</span>
                  </div>
                  <span className="text-[#8C827A] text-[11px] mt-0.5 block">Serves 2 people</span>
                </div>

                <div className="border-l border-[#EAE4DC] pl-3 sm:pl-6">
                  <div className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#181411]">
                    <FaMotorcycle className="text-[#B84A1C]" />
                    <span>20–35 Mins</span>
                  </div>
                  <span className="text-[#8C827A] text-[11px] mt-0.5 block">Fast delivery</span>
                </div>

                <div className="border-l border-[#EAE4DC] pl-3 sm:pl-6">
                  <div className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#2A6A4E]">
                    <FaCheckCircle />
                    <span>100% Halal</span>
                  </div>
                  <span className="text-[#8C827A] text-[11px] mt-0.5 block">Fresh chicken daily</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right: Clean Food Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-5 relative mt-1 lg:mt-0"
            >
              <div className="max-w-sm sm:max-w-md mx-auto lg:max-w-none rounded-3xl bg-white border border-[#EAE4DC] p-2.5 sm:p-3 shadow-tactile-md overflow-hidden">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#F4EFE6]">
                  <img
                    src="/images/chicken-keema.webp"
                    alt="Chicken Keema Boneless 500g"
                    fetchPriority="high"
                    decoding="async"
                    onError={(e) => {
                      e.target.src = '/images/chicken-korma.webp';
                    }}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-3 sm:p-3.5 flex items-center justify-between">
                  <div>
                    <h3 className="font-heading text-base sm:text-lg font-bold text-[#181411]">
                      Chicken Keema Boneless (500g)
                    </h3>
                    <p className="text-[11px] sm:text-xs text-[#574F4A] mt-0.5">
                      Slow-cooked chicken mince with onions &amp; fresh lemon
                    </p>
                  </div>
                  <span className="text-xl sm:text-2xl font-bold font-heading text-[#B84A1C] shrink-0 pl-2">
                    ₹199
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          POPULAR MEAL COMBOS
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 lg:py-28 bg-white relative border-b border-[#EAE4DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-14">
            <div>
              <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#B84A1C] block mb-2">
                Filling Meals
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#181411] tracking-tight font-heading leading-tight">
                Popular Combos <span className="font-italic-accent text-[#B84A1C]">& Meals</span>
              </h2>
              <p className="text-[#574F4A] mt-2 text-xs sm:text-sm max-w-xl leading-relaxed">
                Full 500g chicken gravies paired with fresh pav and hot rotis — complete meals at pocket-friendly rates.
              </p>
            </div>
            <NavLink
              to="/menu/?category=combos"
              className="btn-outline self-start sm:self-auto text-xs py-2 px-4.5"
            >
              <span>View All Combos</span>
              <FaArrowRight className="text-[10px]" />
            </NavLink>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {HOME_COMBOS.map((combo, idx) => {
              const cartItem = cart.find(c => c.id === combo.id);
              return (
                <motion.div
                  key={combo.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="artisan-card rounded-3xl p-5 sm:p-6 flex flex-col sm:flex-row gap-5 items-center"
                >
                  {/* Image */}
                  <div className="w-full sm:w-48 h-48 rounded-2xl overflow-hidden relative shrink-0 border border-[#EAE4DC] shadow-tactile-sm">
                    <ImageWithLoader
                      src={combo.image}
                      alt={combo.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-2.5 left-2.5">
                      <span className={combo.type === 'Veg' ? 'badge-veg' : 'badge-nonveg'}>
                        {combo.type}
                      </span>
                    </div>
                    <div className="absolute top-2.5 right-2.5 bg-[#181411] text-white px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider">
                      {combo.discount}
                    </div>
                  </div>

                  {/* Details */}
                  <div className="flex flex-col justify-between flex-1 w-full h-full">
                    <div>
                      <h3 className="text-xl font-bold text-[#181411] font-heading mb-1.5 leading-snug">
                        {combo.name}
                      </h3>
                      <p className="text-[#574F4A] text-xs sm:text-sm leading-relaxed mb-4">
                        {combo.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-[#EAE4DC] mt-auto">
                      <div>
                        <span className="text-[10px] text-[#8C827A] uppercase font-bold tracking-wider block">Combo Price</span>
                        <span className="text-xl sm:text-2xl font-bold text-[#181411] font-heading">₹{combo.price}</span>
                      </div>

                      {cartItem ? (
                        <div className="flex items-center bg-white border border-[#B84A1C] rounded-xl p-0.5 shadow-2xs">
                          <button
                            onClick={() => updateQuantity(combo.id, -1)}
                            className="w-7 h-7 flex items-center justify-center text-[#B84A1C] hover:bg-[#FDF3ED] transition-colors rounded-lg cursor-pointer"
                            aria-label="Decrease quantity"
                          >
                            {cartItem.quantity === 1 ? <FaTrash size={9} /> : <FaMinus size={8} />}
                          </button>
                          <span className="text-xs font-bold w-6 text-center text-[#181411]">
                            {cartItem.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(combo.id, 1)}
                            className="w-7 h-7 flex items-center justify-center text-[#B84A1C] hover:bg-[#FDF3ED] transition-colors rounded-lg cursor-pointer"
                            aria-label="Increase quantity"
                          >
                            <FaPlus size={8} />
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => addToCart(combo)}
                          className="btn-primary py-2 px-4.5 text-xs font-bold uppercase tracking-wider shadow-tactile-sm"
                        >
                          <span>Add to Bag</span>
                          <FaPlus size={9} />
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          CATEGORIES SHOWCASE
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 bg-[#FAF7F2] relative border-b border-[#EAE4DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-xl mx-auto mb-10 sm:mb-14">
            <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#B84A1C] block mb-2">
              Menu Sections
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#181411] font-heading leading-tight">
              Explore Our <span className="font-italic-accent text-[#B84A1C]">Categories</span>
            </h2>
            <p className="text-[#574F4A] mt-2 text-xs sm:text-sm leading-relaxed">
              From heavy chicken gravies to soft pavs, warm choco lava cake, and snacks.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-5">
            {[
              { name: "Chicken Gravies", id: "Gravy", img: "/images/chicken-korma.webp", count: "500g Portions", note: "Keema & Korma" },
              { name: "Roti & Pav", id: "Roti", img: "/images/tandoori-roti.webp", count: "Fresh Baked", note: "Tandoori & Ladi Pav" },
              { name: "Snacks", id: "Snacks", img: "/images/french-fries.webp", count: "Fries & Maggi", note: "Crispy & Hot" },
              { name: "Burgers", id: "Burgers", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop", count: "Juicy Patty", note: "Crispy Chicken" },
              { name: "Warm Desserts", id: "Dessert", img: "/images/choco-lava-cake.jpg", count: "Molten Center", note: "Choco Lava Cake" }
            ].map((cat, i) => (
              <NavLink
                to={`/menu/?category=${cat.id.toLowerCase()}`}
                key={i}
                className="group artisan-card rounded-2xl overflow-hidden p-2.5 sm:p-3.5 block"
              >
                <div className="relative aspect-square rounded-xl overflow-hidden mb-3 bg-[#F4EFE6] shadow-tactile-sm">
                  <ImageWithLoader
                    src={cat.img}
                    alt={cat.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-106"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#181411]/75 via-transparent to-transparent" />
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                    <span className="text-[9px] text-white/80 uppercase font-semibold tracking-wider block">
                      {cat.note}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold font-heading">{cat.name}</h3>
                  </div>
                </div>
                <div className="flex items-center justify-between px-1 py-0.5">
                  <span className="text-[11px] sm:text-xs text-[#8C827A] font-semibold">{cat.count}</span>
                  <div className="w-6 h-6 rounded-full bg-[#FAF7F2] text-[#181411] flex items-center justify-center group-hover:bg-[#B84A1C] group-hover:text-white transition-colors duration-200">
                    <FaArrowRight size={8} />
                  </div>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          CROWD FAVORITES
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 bg-white relative border-b border-[#EAE4DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-14">
            <div>
              <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#B84A1C] block mb-2">
                Must Try
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#181411] font-heading leading-tight">
                Customer <span className="font-italic-accent text-[#B84A1C]">Favorites</span>
              </h2>
            </div>
            <NavLink
              to="/menu/"
              className="text-[#181411] hover:text-[#B84A1C] font-semibold text-xs sm:text-sm flex items-center gap-2 group transition-colors"
            >
              <span>See Full Menu</span>
              <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
            </NavLink>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {bestsellers.map((item) => {
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
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-2.5 left-2.5">
                      <span className={item.type === 'Veg' ? 'badge-veg' : 'badge-nonveg'}>
                        {item.type}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4.5 sm:p-5 flex flex-col flex-1 justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-[#8C827A] mb-1 block">
                        {item.category}
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-[#181411] font-heading line-clamp-1 mb-1.5">
                        {item.name}
                      </h3>
                      <p className="text-xs text-[#574F4A] line-clamp-2 leading-relaxed mb-4">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#EAE4DC] flex items-center justify-between mt-auto">
                      <span className="text-base sm:text-lg font-bold text-[#181411] font-heading">
                        ₹{item.price}
                      </span>

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
                          className="btn-primary py-1.5 px-3.5 text-xs font-bold"
                          aria-label={`Add ${item.name} to cart`}
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
        </div>
      </section>



      {/* ═══════════════════════════════════════════════════════════════════
          DELIVERING ACROSS NAVI MUMBAI — Local Hubs Section
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 bg-[#FAF7F2] relative border-b border-[#EAE4DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#B84A1C] block mb-2">
              Delivery Areas
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#181411] font-heading tracking-tight leading-tight">
              Delivering Across <span className="font-italic-accent text-[#B84A1C]">Navi Mumbai</span>
            </h2>
            <p className="text-[#574F4A] mt-2.5 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
              Fresh food cooked and delivered hot from our kitchen in Taloja to Kharghar, Panvel, Kamothe, Kalamboli, and Belapur in 10 to 35 minutes.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {LOCATIONS.map((loc) => (
              <NavLink
                key={loc.slug}
                to={`/${loc.slug}/`}
                className="group artisan-card rounded-2xl p-5 sm:p-6 bg-white hover:border-[#B84A1C] hover:shadow-tactile-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#181411] group-hover:text-[#B84A1C] transition-colors">
                      {loc.name}
                    </h3>
                    <span className="text-xs font-semibold text-[#2A6A4E]">
                      {loc.deliveryTime} mins
                    </span>
                  </div>

                  <p className="text-xs text-[#574F4A] leading-relaxed mb-3">
                    {loc.heroTagline}
                  </p>

                  <p className="text-xs text-[#8C827A] leading-normal">
                    <span className="font-medium text-[#574F4A]">Areas:</span> {loc.landmarks.slice(0, 3).join(', ')}
                  </p>
                </div>

                <div className="pt-4 mt-5 border-t border-[#EAE4DC] flex items-center justify-between text-xs font-bold text-[#B84A1C]">
                  <span>View Menu & Delivery</span>
                  <FaArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </NavLink>
            ))}
          </div>

          <div className="mt-8 text-center text-xs text-[#574F4A] flex items-center justify-center gap-2">
            <FaCheckCircle className="text-[#2A6A4E]" size={13} />
            <span>Free delivery starting ₹299+ (Taloja) · ₹399+ (Kharghar) · ₹699+ (Belapur)</span>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          FREQUENTLY ASKED QUESTIONS
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-white relative border-b border-[#EAE4DC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12">
            <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#B84A1C] block mb-2">
              Got Questions?
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#181411] font-heading tracking-tight leading-tight">
              Frequently Asked <span className="font-italic-accent text-[#B84A1C]">Questions</span>
            </h2>
            <p className="text-[#574F4A] mt-2 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
              Clear answers about our 500g portions, chicken sourcing, and fast doorstep delivery.
            </p>
          </div>

          <div className="space-y-3.5">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-[#EAE4DC] bg-[#FAF7F2] overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full py-4 sm:py-5 px-5 sm:px-6 flex items-center justify-between text-left gap-4 cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base font-bold text-[#181411] font-heading">
                      {faq.question}
                    </span>
                    <span
                      className={`w-7 h-7 rounded-full bg-white border border-[#EAE4DC] flex items-center justify-center shrink-0 text-xs text-[#574F4A] transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-[#B84A1C]" : ""
                      }`}
                    >
                      <FaChevronDown size={10} />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-[#574F4A] leading-relaxed border-t border-[#EAE4DC]/60">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          FINAL ORDER CALLOUT
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 bg-[#FAF7F2] relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#B84A1C] block mb-2">
            Hungry Right Now?
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#181411] font-heading tracking-tight mb-3 leading-tight">
            Order your meal on <span className="font-italic-accent text-[#B84A1C]">WhatsApp.</span>
          </h2>
          <p className="text-[#574F4A] text-xs sm:text-sm max-w-xl mx-auto mb-8 leading-relaxed">
            Direct kitchen ordering for fast delivery, custom instructions, and live order confirmation.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
            <a
              href={whatsappLink}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="btn-primary py-3.5 px-8 text-xs uppercase tracking-wider font-bold shadow-tactile-md justify-center"
            >
              <FaWhatsapp size={16} />
              <span>Order on WhatsApp</span>
            </a>
            <NavLink
              to="/menu/"
              className="btn-outline py-3.5 px-7 text-xs uppercase tracking-wider font-bold justify-center"
            >
              <span>Explore Full Menu</span>
            </NavLink>
          </div>

          {/* Quick Apps Row */}
          <div className="flex items-center justify-center gap-3 mt-4 text-xs text-[#574F4A]">
            <span>Also order on:</span>
            <a
              href={ORDER_LINKS.swiggy}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="font-bold text-[#FC8019] hover:underline flex items-center gap-1"
            >
              <SiSwiggy /> Swiggy
            </a>
            <span>·</span>
            <a
              href={ORDER_LINKS.zomato}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="font-bold text-[#E23744] hover:underline flex items-center gap-1"
            >
              <SiZomato /> Zomato
            </a>
          </div>

          <p className="text-[11px] text-[#8C827A] mt-6">
            Daily slots: 11:00 AM – 3:15 PM & 7:00 PM – 9:15 PM · Free delivery starting ₹299+ across Navi Mumbai
          </p>
        </div>
      </section>

      <ProductModal
        item={selectedItem}
        isOpen={!!selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </>
  );
};

export default Home;