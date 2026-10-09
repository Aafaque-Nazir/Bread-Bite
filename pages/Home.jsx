import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaUtensils, FaStar, FaCheckCircle, FaFire, FaMotorcycle, FaArrowRight, FaPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import SEO from "../src/components/SEO";
import ImageWithLoader from "../src/components/ImageWithLoader";
import menuItems from "../data/MenuItems";
import { useCart } from '../src/context/CartContext';
import ProductModal from '../src/components/ProductModal';

const HOME_COMBOS = [
  {
    id: 'combo_1',
    name: 'Veg Super Saver Combo',
    description: '1 Classic Margherita Pizza + 1 Veg Grilled Sandwich + 2 Fresh Lime Sodas.',
    price: 369,
    discount: 'Save ₹47',
    image: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?q=80&w=800&auto=format&fit=crop',
    category: 'Combo',
    type: 'Veg'
  },
  {
    id: 'combo_2',
    name: 'Chicken Lovers Combo',
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
  const [selectedItem, setSelectedItem] = useState(null);
  const whatsappLink = "https://wa.me/919325629256?text=Hi%2C%20I%20want%20to%20order%20from%20Bread%20%26%20Bite!";

  const bestsellers = useMemo(() => {
    return menuItems.filter(item => item.isBestSeller).slice(0, 4);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  return (
    <>
      <SEO
        title="Bread & Bite | Fresh Pizzas, Sandwiches & Pastas - Navi Mumbai"
        description="Delicious comfort food delivered hot in Navi Mumbai. Freshly baked pizzas, crispy grilled sandwiches, creamy pastas, and cool drinks delivered fast."
        url="/"
        keywords="bread and bite, cloud kitchen navi mumbai, pizza delivery taloja, sandwich kharghar, pasta panvel"
      />

      {/* ═══════════════════════════════════════════════════════════════════
          HERO SECTION — Commanding, Tall Proportions & Dimensional Depth
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative pt-12 pb-24 lg:pt-20 lg:pb-32 bg-[#FAF7F2] overflow-hidden border-b border-[#EAE4DC]">
        {/* Soft Ambient Linen Glow */}
        <div className="absolute inset-0 pointer-events-none opacity-50">
          <div className="absolute top-0 right-1/4 w-[550px] h-[550px] bg-[#F4EFE6] rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-10 w-[450px] h-[450px] bg-[#FDF3ED] rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-12 gap-14 lg:gap-10 items-center">
            {/* Left: Content (7 cols) */}
            <motion.div
              initial="hidden"
              animate="show"
              variants={staggerContainer}
              className="lg:col-span-7 space-y-8"
            >
              {/* Eyebrow Badge */}
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-[#EAE4DC] shadow-tactile-sm">
                <span className="w-2 h-2 rounded-full bg-[#B84A1C]" />
                <span className="text-[#181411] text-[11px] font-bold tracking-[0.16em] uppercase">
                  Cloud Kitchen · Taloja, Navi Mumbai
                </span>
              </motion.div>

              {/* Main Headline with Stately Tall Proportions */}
              <motion.h1 variants={fadeUp} className="text-4xl sm:text-6xl lg:text-[4.5rem] font-normal text-[#181411] leading-[1.14] tracking-tight font-heading">
                Comfort food, <br />
                <span className="font-italic-accent text-5xl sm:text-7xl lg:text-[4.85rem] text-[#B84A1C] font-normal tracking-wide">made fresh</span> on every order.
              </motion.h1>

              {/* Subheadline */}
              <motion.p variants={fadeUp} className="text-base sm:text-lg text-[#574F4A] max-w-xl leading-relaxed">
                Cheesy pizzas, crispy grilled sandwiches, creamy pastas, and cold shakes — cooked fresh and delivered hot to your doorstep across Navi Mumbai.
              </motion.p>

              {/* Action Buttons with Tactile Depth */}
              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 pt-2">
                <NavLink
                  to="/menu"
                  className="btn-primary px-8 py-4 text-sm"
                >
                  <FaUtensils className="text-xs" />
                  <span>Explore Menu</span>
                </NavLink>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline px-7 py-4 text-sm hover:border-[#25D366] hover:text-[#25D366]"
                >
                  <FaWhatsapp className="text-base text-[#25D366]" />
                  <span>Order via WhatsApp</span>
                </a>
              </motion.div>

              {/* Proof Points */}
              <motion.div variants={fadeUp} className="pt-8 border-t border-[#EAE4DC] flex flex-wrap items-center gap-8">
                <div className="flex items-center gap-2.5">
                  <div className="flex text-[#D97706] text-xs">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <span className="text-[#181411] font-bold text-sm">4.9/5</span>
                  <span className="text-[#8C827A] text-xs">· 500+ Happy Customers</span>
                </div>

                <div className="h-4 w-px bg-[#EAE4DC] hidden sm:block" />

                <div className="flex items-center gap-2 text-xs font-semibold text-[#574F4A]">
                  <FaMotorcycle className="text-[#B84A1C] text-sm" />
                  <span>Avg Delivery 25–35 Mins</span>
                </div>

                <div className="h-4 w-px bg-[#EAE4DC] hidden sm:block" />

                <div className="flex items-center gap-2 text-xs font-semibold text-[#2A6A4E]">
                  <FaCheckCircle className="text-sm" />
                  <span>100% Hygienic Kitchen</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right: Framed Food Artwork with Tactile Depth */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative">
                {/* Framed Image Container with Multi-layer Shadow */}
                <div className="relative z-10 rounded-3xl overflow-hidden bg-white border border-[#EAE4DC] p-3 shadow-tactile-lg">
                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1200&auto=format&fit=crop"
                      alt="Bread & Bite Signature Dish"
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-103"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#181411]/70 via-transparent to-transparent" />

                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <span className="badge-veg bg-white/20 text-white backdrop-blur-md border-white/30 text-[9px] mb-2">
                        Must Try
                      </span>
                      <h4 className="text-xl font-bold font-heading">Tandoori Chicken Pizza</h4>
                      <p className="text-xs text-white/80 mt-1">Crispy base with smoky chicken, crunchy capsicum & double cheese</p>
                    </div>
                  </div>
                </div>

                {/* Floating Badge: Fresh Dough */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -left-4 sm:top-6 sm:-left-6 z-20 bg-white/95 backdrop-blur-md border border-[#EAE4DC] rounded-2xl px-4.5 py-3.5 shadow-tactile-md hidden sm:flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#FDF3ED] text-[#B84A1C] flex items-center justify-center font-bold text-sm">
                    <FaFire />
                  </div>
                  <div>
                    <p className="text-[#181411] font-bold text-xs">Made Fresh</p>
                    <p className="text-[#8C827A] text-[10px]">Cooked on Order</p>
                  </div>
                </motion.div>

                {/* Floating Badge: Fast Delivery */}
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-4 -right-4 sm:bottom-6 sm:-right-6 z-20 bg-white/95 backdrop-blur-md border border-[#EAE4DC] rounded-2xl px-4.5 py-3.5 shadow-tactile-md hidden sm:flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#EEF6F2] text-[#2A6A4E] flex items-center justify-center font-bold text-sm">
                    <FaMotorcycle />
                  </div>
                  <div>
                    <p className="text-[#181411] font-bold text-xs">Navi Mumbai</p>
                    <p className="text-[#8C827A] text-[10px]">Hot Doorstep Delivery</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          CHEF'S PAIRINGS & SIGNATURE COMBOS
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-32 bg-white relative border-b border-[#EAE4DC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="eyebrow-tag mb-3.5">Special Deals</span>
              <h2 className="text-3xl md:text-5xl font-bold text-[#181411] tracking-tight font-heading leading-tight">
                Popular Combos <span className="font-italic-accent text-[#B84A1C]">& Offers</span>
              </h2>
              <p className="text-[#574F4A] mt-3 text-sm md:text-base max-w-xl leading-relaxed">
                Delicious food combos at discount prices — perfect for lunch, dinner, or sharing with friends.
              </p>
            </div>
            <NavLink
              to="/menu"
              className="btn-outline self-start md:self-auto text-xs"
            >
              <span>View Full Menu</span>
              <FaArrowRight className="text-[10px]" />
            </NavLink>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {HOME_COMBOS.map((combo, idx) => (
              <motion.div
                key={combo.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.12 }}
                className="artisan-card rounded-3xl p-6 sm:p-7 flex flex-col sm:flex-row gap-6 items-center"
              >
                {/* Image */}
                <div className="w-full sm:w-56 h-56 rounded-2xl overflow-hidden relative shrink-0 border border-[#EAE4DC] shadow-tactile-sm">
                  <ImageWithLoader
                    src={combo.image}
                    alt={combo.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <span className={combo.type === 'Veg' ? 'badge-veg' : 'badge-nonveg'}>
                      {combo.type}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3 bg-[#181411] text-white px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider">
                    {combo.discount}
                  </div>
                </div>

                {/* Details */}
                <div className="flex flex-col justify-between flex-1 w-full h-full">
                  <div>
                    <h3 className="text-2xl font-bold text-[#181411] font-heading mb-2 leading-snug">
                      {combo.name}
                    </h3>
                    <p className="text-[#574F4A] text-sm leading-relaxed mb-6">
                      {combo.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-5 border-t border-[#EAE4DC] mt-auto">
                    <div>
                      <span className="text-[11px] text-[#8C827A] uppercase font-bold tracking-wider block">Special Price</span>
                      <span className="text-2xl font-bold text-[#181411] font-heading">₹{combo.price}</span>
                    </div>

                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        addToCart(combo);
                      }}
                      className="btn-primary py-2.5 px-5.5 text-xs"
                    >
                      <span>Add to Bag</span>
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
          CATEGORIES SHOWCASE — Tall & Structured
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-32 bg-[#FAF7F2] relative border-b border-[#EAE4DC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="eyebrow-tag mb-3.5">Our Menu</span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#181411] font-heading leading-tight">
              Browse By <span className="font-italic-accent text-[#B84A1C]">Category</span>
            </h2>
            <p className="text-[#574F4A] mt-3 text-sm md:text-base leading-relaxed">
              Everything is prepared fresh on order using quality ingredients and delivered hot.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 lg:gap-6">
            {[
              { name: "Pizzas", id: "Pizza", img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600&auto=format&fit=crop", count: "4 Varieties", note: "Hot & Cheesy" },
              { name: "Sandwiches", id: "Sandwich", img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=600&auto=format&fit=crop", count: "4 Varieties", note: "Crispy & Loaded" },
              { name: "Pastas", id: "Pasta", img: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=600&auto=format&fit=crop", count: "4 Varieties", note: "Creamy & Saucy" },
              { name: "Drinks", id: "Drinks", img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=600&auto=format&fit=crop", count: "4 Varieties", note: "Cool & Refreshing" }
            ].map((cat, i) => (
              <NavLink
                to={`/menu?category=${cat.id}`}
                key={i}
                className="group artisan-card rounded-2xl overflow-hidden p-3.5 block"
              >
                <div className="relative aspect-square rounded-xl overflow-hidden mb-4 bg-[#F4EFE6] shadow-tactile-sm">
                  <ImageWithLoader
                    src={cat.img}
                    alt={cat.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-106"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#181411]/75 via-transparent to-transparent" />
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white">
                    <span className="text-[10px] text-white/80 uppercase font-semibold tracking-wider block mb-0.5">
                      {cat.note}
                    </span>
                    <h3 className="text-xl font-bold font-heading">{cat.name}</h3>
                  </div>
                </div>
                <div className="flex items-center justify-between px-1.5 py-1">
                  <span className="text-xs text-[#8C827A] font-semibold">{cat.count}</span>
                  <div className="w-6.5 h-6.5 rounded-full bg-[#FAF7F2] text-[#181411] flex items-center justify-center group-hover:bg-[#B84A1C] group-hover:text-white transition-colors duration-200">
                    <FaArrowRight size={9} />
                  </div>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          CROWD FAVORITES — Restaurant Menu Cards
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-32 bg-white relative border-b border-[#EAE4DC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
            <div>
              <span className="eyebrow-tag mb-3.5">Popular Dishes</span>
              <h2 className="text-3xl md:text-5xl font-bold text-[#181411] font-heading leading-tight">
                Customer <span className="font-italic-accent text-[#B84A1C]">Favorites</span>
              </h2>
            </div>
            <NavLink
              to="/menu"
              className="text-[#181411] hover:text-[#B84A1C] font-semibold text-sm flex items-center gap-2 group transition-colors"
            >
              <span>See Full Menu</span>
              <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
            </NavLink>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestsellers.map((item) => (
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
                  <div className="absolute top-3 left-3">
                    <span className={item.type === 'Veg' ? 'badge-veg' : 'badge-nonveg'}>
                      {item.type}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur px-2.5 py-1 rounded-full text-[10px] font-bold text-[#181411] flex items-center gap-1 shadow-tactile-sm border border-[#EAE4DC]">
                    <FaStar className="text-[#D97706] text-[9px]" />
                    <span>{item.rating}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5.5 flex flex-col flex-1 justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#8C827A] mb-1 block">
                      {item.category}
                    </span>
                    <h3 className="text-base font-bold text-[#181411] font-heading line-clamp-1 mb-2">
                      {item.name}
                    </h3>
                    <p className="text-xs text-[#574F4A] line-clamp-2 leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3.5 border-t border-[#EAE4DC] flex items-center justify-between mt-auto">
                    <span className="text-lg font-bold text-[#181411] font-heading">
                      ₹{item.price}
                    </span>
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
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          OUR QUALITY PROMISE
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-32 bg-[#FAF7F2] relative border-b border-[#EAE4DC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-14 lg:gap-16 items-center">
            {/* Visual Left (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="artisan-card rounded-3xl p-3 shadow-tactile-lg">
                <div className="rounded-2xl overflow-hidden aspect-[4/5]">
                  <ImageWithLoader
                    src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1000&auto=format&fit=crop"
                    alt="Kitchen craft at Bread & Bite"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Content Right (7 cols) */}
            <div className="lg:col-span-7 space-y-8">
              <span className="eyebrow-tag">Our Quality Promise</span>
              <h2 className="text-3xl md:text-5xl font-bold text-[#181411] font-heading leading-tight">
                Made fresh to order, <br />
                <span className="font-italic-accent text-[#B84A1C]">never frozen or pre-made.</span>
              </h2>

              <p className="text-[#574F4A] text-base leading-relaxed">
                At Bread & Bite, we make food the right way. We prepare our pizza dough daily, chop fresh vegetables, and use real cheese and tasty house sauces — no shortcuts, just great food you will love.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 pt-2">
                {[
                  { title: "Fresh Pizza Dough", desc: "Soft inside and crispy outside, hand-stretched for every single pizza." },
                  { title: "Fresh Veggies & Meat", desc: "Crisp vegetables, fresh dairy, and 100% Halal meat prepared daily." },
                  { title: "Real Cheese & Sauces", desc: "Melted mozzarella cheese, flavorful marinara, and creamy dressings." },
                  { title: "Clean & Hygienic Kitchen", desc: "Strict hygiene and cleanliness maintained at every step of cooking." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-3.5">
                    <div className="w-5 h-5 rounded-full bg-[#EEF6F2] text-[#2A6A4E] flex items-center justify-center shrink-0 mt-0.5">
                      <FaCheckCircle size={11} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#181411] font-heading">{item.title}</h4>
                      <p className="text-xs text-[#574F4A] mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <NavLink
                  to="/about"
                  className="btn-outline text-xs"
                >
                  <span>More About Us</span>
                  <FaArrowRight size={10} />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          GUEST WORDS (TESTIMONIALS) — Clean Warm Editorial
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-32 bg-white relative border-b border-[#EAE4DC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="eyebrow-tag mb-3.5">Customer Reviews</span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#181411] font-heading leading-tight">
              What Customers <span className="font-italic-accent text-[#B84A1C]">Say</span>
            </h2>
            <p className="text-[#574F4A] mt-3 text-sm md:text-base leading-relaxed">
              Real reviews from food lovers across Navi Mumbai.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                quote: "The Tandoori Grilled sandwich changed my definition of comfort food. Hot, crispy, and the filling wasn't greasy at all.",
                author: "Aarav Mehta",
                loc: "Kharghar, Navi Mumbai",
                favorite: "Tandoori Grilled Sandwich"
              },
              {
                quote: "Finally found a kitchen that makes delicious pasta and fresh pizzas. Super clean packaging, arrived in 25 minutes flat.",
                author: "Priya Sharma",
                loc: "Taloja Phase 1",
                favorite: "Creamy Chicken Pasta"
              },
              {
                quote: "The cheese pull on their pizza is insane. Consistent quality every single weekend. Best comfort food in the area.",
                author: "Karan Desai",
                loc: "Panvel",
                favorite: "Margherita Supreme"
              }
            ].map((t, idx) => (
              <div
                key={idx}
                className="artisan-card rounded-2xl p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex text-[#D97706] text-xs gap-1 mb-4.5">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <p className="text-[#181411] text-base leading-relaxed italic mb-6">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-4.5 border-t border-[#EAE4DC] flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-[#181411] font-heading">{t.author}</h4>
                    <p className="text-[11px] text-[#8C827A]">{t.loc}</p>
                  </div>
                  <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-[#FAF7F2] text-[#B84A1C] border border-[#EAE4DC]">
                    {t.favorite}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          FINAL CONCIERGE CALLOUT
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-32 bg-[#FAF7F2] relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="eyebrow-tag mb-4.5">Craving Something Tasty?</span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#181411] font-heading tracking-tight mb-4 leading-tight">
            Hungry? We're ready to <span className="font-italic-accent text-[#B84A1C]">cook for you.</span>
          </h2>
          <p className="text-[#574F4A] text-base max-w-xl mx-auto mb-9 leading-relaxed">
            Order directly on WhatsApp for super fast delivery, custom instructions, and live updates.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary py-4 px-9 text-sm"
            >
              <FaWhatsapp size={18} />
              <span>Order on WhatsApp</span>
            </a>
            <NavLink
              to="/menu"
              className="btn-outline py-4 px-8 text-sm"
            >
              <span>Explore Full Menu</span>
            </NavLink>
          </div>

          <p className="text-xs text-[#8C827A] mt-7">
            Open daily: 8:00 AM – 11:45 PM · Delivering across Taloja, Kharghar, Panvel & Belapur
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