import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaTruck, FaHandsWash, FaRupeeSign, FaFireAlt, FaUtensils, FaDrumstickBite, FaBreadSlice } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SEO from "../src/components/SEO";

const About = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <section className="relative min-h-screen bg-[#FAF7F2] pt-6 sm:pt-10 pb-24 px-4 sm:px-6 overflow-hidden text-[#181411]">
      <SEO
        title="About Bread & Bite | Cloud Kitchen in Navi Mumbai"
        description="Learn about Bread & Bite cloud kitchen in Taloja Phase 1. Honest 500g chicken portions, authentic homestyle recipes, and quick local delivery."
        url="/about/"
        keywords="about bread and bite, cloud kitchen taloja, chicken keema navi mumbai, halal chicken kharghar, tandoori roti panvel"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-5 sm:space-y-6"
          >
            <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#B84A1C] block">
              Taloja Phase 1 · Navi Mumbai
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight font-heading leading-tight">
              Good food, <br />
              <span className="font-italic-accent text-[#B84A1C]">honest portions</span> every day.
            </h1>
            <p className="text-xs sm:text-base lg:text-lg text-[#574F4A] leading-relaxed max-w-xl">
              At <strong className="text-[#181411]">Bread & Bite</strong>, our goal is simple: serve delicious, homestyle food in generous quantities at fair rates. We make hearty chicken gravies like Chicken Keema and Chicken Korma in full 500-gram portions, paired with hot tandoori rotis, soft pavs, burgers, and crispy fries.
            </p>

            <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-4 border-t border-[#EAE4DC] max-w-lg">
              {[
                { label: "500g Portions", value: "Generous" },
                { label: "100% Halal", value: "Fresh Chicken" },
                { label: "Avg Delivery", value: "25-35m" }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-base sm:text-2xl font-bold text-[#181411] font-heading">{stat.value}</span>
                  <span className="text-[10px] sm:text-[11px] text-[#8C827A] uppercase tracking-wider font-semibold mt-0.5">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="artisan-card rounded-3xl p-2.5 sm:p-3 shadow-tactile-lg max-w-md mx-auto lg:max-w-none">
              <div className="rounded-2xl overflow-hidden aspect-square relative bg-[#F5EFE6]">
                <img
                  src="/images/chicken-keema.webp"
                  alt="Bread and Bite Chicken Keema and Pav Preparation"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════════
            THE 3 CORE FOOD PILLARS
        ═══════════════════════════════════════════════════════════════════ */}
        <div className="mb-16 sm:mb-24 artisan-card rounded-3xl p-6 sm:p-12 bg-white">
          <motion.div {...fadeIn} className="text-center max-w-xl mx-auto mb-10 sm:mb-12">
            <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#B84A1C] block mb-2">
              Our Ingredients
            </span>
            <h2 className="text-2xl sm:text-4xl font-normal font-heading text-[#181411]">
              Freshly Cooked <span className="font-italic-accent text-[#B84A1C]">On Order</span>
            </h2>
            <p className="text-[#574F4A] text-xs sm:text-sm mt-1.5">
              100% Halal fresh chicken, homestyle roasted spices, and clean cooking on every dish.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: <FaDrumstickBite />,
                title: "100% Halal Fresh Chicken",
                desc: "Sourced fresh every morning and cleaned thoroughly. Zero frozen or preserved meat."
              },
              {
                icon: <FaFireAlt />,
                title: "Slow-Cooked Gravies",
                desc: "Rich 500g portions of Chicken Keema and Korma cooked with onions, whole spices, and coriander."
              },
              {
                icon: <FaBreadSlice />,
                title: "Hot Rotis & Soft Pavs",
                desc: "Tandoori rotis baked hot on order and soft golden pavs packed fresh with your meal."
              }
            ].map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center p-3"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#FDF3ED] text-[#B84A1C] flex items-center justify-center text-xl mb-4 border border-[#EAE4DC]">
                  {pillar.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#181411] mb-1.5 font-heading">{pillar.title}</h3>
                <p className="text-[#574F4A] text-xs sm:text-sm leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════════
            OUR STORY — Why 500 Grams Matters
        ═══════════════════════════════════════════════════════════════════ */}
        <div className="mb-16 sm:mb-24 grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 artisan-card rounded-3xl p-6 sm:p-10 bg-white space-y-4">
            <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#B84A1C] block">
              The Bread & Bite Story
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading text-[#181411]">
              Born in Taloja, Built for <span className="font-italic-accent text-[#B84A1C]">Real Appetites</span>
            </h2>
            <div className="space-y-3.5 text-xs sm:text-sm text-[#574F4A] leading-relaxed">
              <p>
                Have you ever ordered a non-veg meal online, opened the container, and felt cheated? In most commercial food delivery apps, chicken gravies arrive in small 200g–250g plastic tubs — filled mostly with watery gravy and two tiny pieces of meat. By the time you dip your second roti or pav, the food is already over.
              </p>
              <p>
                We started <strong>Bread & Bite</strong> in Sector 11, Taloja Phase 1, to fix this exact problem. Our core rule is simple: <em>every single chicken gravy is cooked and weighed in a generous 500-gram portion</em>. Whether you choose our signature <Link to="/menu/?category=Gravy" className="text-[#B84A1C] underline font-semibold hover:text-[#8C3413]">Chicken Keema Boneless (500g)</Link> or our rich Mughlai <Link to="/menu/?category=Gravy" className="text-[#B84A1C] underline font-semibold hover:text-[#8C3413]">Chicken Korma (500g)</Link>, you receive a substantial, wholesome meal that comfortably satisfies two adults.
              </p>
              <p>
                We do not cut corners with pre-cooked frozen bases. Our chicken is 100% Halal certified, bought fresh every single morning from certified local vendors, marinated in authentic ground spices, and cooked on order.
              </p>
            </div>

            <div className="pt-2">
              <Link
                to="/menu/"
                className="btn-primary inline-flex py-3 px-6 text-xs uppercase tracking-wider font-bold"
              >
                <span>Explore Our Full Menu</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 artisan-card rounded-3xl p-6 sm:p-8 bg-[#FAF7F2] border border-[#EAE4DC] space-y-4">
            <h3 className="text-lg font-bold font-heading text-[#181411]">
              Serving These Navi Mumbai Areas
            </h3>
            <p className="text-xs text-[#574F4A] leading-relaxed">
              From our cloud kitchen in Taloja, we deliver fresh homestyle meals across Navi Mumbai within 10 to 35 minutes:
            </p>
            <ul className="space-y-2 text-xs">
              {[
                { name: 'Kharghar', path: '/kharghar/', time: '20–30 min', note: 'All Sectors 1–35, Central Park, Station' },
                { name: 'Panvel', path: '/panvel/', time: '25–35 min', note: 'Old & New Panvel, Khandeshwar' },
                { name: 'Kamothe', path: '/kamothe/', time: '20–30 min', note: 'All sectors near Mansarovar' },
                { name: 'Kalamboli', path: '/kalamboli/', time: '25–35 min', note: 'Steel Market & residential sectors' },
                { name: 'Taloja', path: '/taloja/', time: '10–20 min', note: 'Phase 1 & 2, MIDC (Kitchen Base)' },
                { name: 'CBD Belapur', path: '/cbd-belapur/', time: '30–40 min', note: 'Sectors 1–15, NMMC, Palm Beach' },
              ].map((area) => (
                <li key={area.name}>
                  <Link
                    to={area.path}
                    className="flex items-center justify-between p-2 rounded-xl bg-white border border-[#EAE4DC] hover:border-[#B84A1C] hover:text-[#B84A1C] transition-colors"
                  >
                    <div>
                      <strong className="text-[#181411] block">{area.name} Delivery</strong>
                      <span className="text-[10px] text-[#8C827A]">{area.note}</span>
                    </div>
                    <span className="text-[11px] font-bold text-[#2A6A4E] shrink-0">{area.time}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════════
            OUR COMMITMENT / VALUES
        ═══════════════════════════════════════════════════════════════════ */}
        <div className="mb-16 sm:mb-24">
          <motion.div {...fadeIn} className="text-center max-w-xl mx-auto mb-10 sm:mb-12">
            <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#B84A1C] block mb-2">
              Kitchen Standards
            </span>
            <h2 className="text-2xl sm:text-4xl font-normal font-heading text-[#181411]">
              Our Daily <span className="font-italic-accent text-[#B84A1C]">Promise</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { icon: <FaCheckCircle />, title: "Full 500g Portions", desc: "Generous quantity that easily satisfies two people.", color: "text-[#B84A1C]" },
              { icon: <FaHandsWash />, title: "Clean & Hygienic", desc: "Sanitized preparation counters and fresh cooking oil.", color: "text-[#2A6A4E]" },
              { icon: <FaTruck />, title: "Hot & Fast Delivery", desc: "Sealed spill-proof containers delivered directly to your doorstep.", color: "text-[#181411]" },
              { icon: <FaRupeeSign />, title: "Honest Pricing", desc: "Good food at simple, affordable rates without hidden charges.", color: "text-[#D97706]" }
            ].map((val, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="artisan-card rounded-2xl p-6 flex flex-col bg-white"
              >
                <div className={`text-xl sm:text-2xl mb-3.5 ${val.color}`}>
                  {val.icon}
                </div>
                <h3 className="text-sm sm:text-base font-bold text-[#181411] mb-1.5 font-heading">{val.title}</h3>
                <p className="text-xs text-[#574F4A] leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════════
            KITCHEN MOMENTS
        ═══════════════════════════════════════════════════════════════════ */}
        <div className="mb-16 sm:mb-24">
          <motion.div {...fadeIn} className="text-center mb-8 sm:mb-10">
            <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#B84A1C] block mb-2">
              Food Preparation
            </span>
            <h2 className="text-2xl sm:text-4xl font-normal font-heading text-[#181411]">
              Inside Our <span className="font-italic-accent text-[#B84A1C]">Kitchen</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {[
              { img: "/images/chicken-keema.webp", label: "Chicken Keema" },
              { img: "/images/chicken-korma.webp", label: "Chicken Korma" },
              { img: "/images/tandoori-roti.webp", label: "Tandoori Roti" },
              { img: "/images/pav.webp", label: "Soft Pav" },
              { img: "/images/french-fries.webp", label: "Crispy Fries" }
            ].map((item, idx) => (
              <div key={idx} className="artisan-card rounded-2xl overflow-hidden p-2 bg-white">
                <div className="aspect-[4/5] rounded-xl overflow-hidden relative">
                  <img
                    src={item.img}
                    alt={item.label}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-106"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#181411]/60 via-transparent to-transparent" />
                  <span className="absolute bottom-2.5 left-2.5 text-white text-[11px] sm:text-xs font-semibold font-heading">
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════════
            FINAL ORDER INVITATION
        ═══════════════════════════════════════════════════════════════════ */}
        <div className="artisan-card rounded-3xl p-8 sm:p-14 text-center bg-white border border-[#EAE4DC] max-w-3xl mx-auto">
          <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#B84A1C] block mb-2">
            Ready To Order?
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-normal text-[#181411] mb-3 font-heading leading-tight">
            Hungry for something <span className="font-italic-accent text-[#B84A1C]">filling?</span>
          </h2>
          <p className="text-[#574F4A] text-xs sm:text-sm max-w-md mx-auto mb-7 leading-relaxed">
            Order hot Chicken Keema, Chicken Korma, fresh Tandoori Roti, and soft Pav delivered right to your home.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
            <Link
              to="/menu/"
              className="btn-primary py-3.5 px-8 text-xs uppercase tracking-wider font-bold justify-center shadow-tactile-md"
            >
              <FaUtensils size={12} />
              <span>Explore The Menu</span>
            </Link>
            <a
              href="https://wa.me/919325629256"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="btn-outline py-3.5 px-7 text-xs uppercase tracking-wider font-bold justify-center"
            >
              Order on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;