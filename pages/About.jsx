import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaTruck, FaHandsWash, FaRupeeSign, FaArrowRight, FaLeaf, FaFireAlt, FaSeedling, FaUtensils, FaClock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SEO from "../src/components/SEO";
import ImageWithLoader from "../src/components/ImageWithLoader";

const About = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <section className="relative min-h-screen bg-[#FAF7F2] pt-8 lg:pt-14 pb-24 px-6 overflow-hidden text-[#181411]">
      <SEO
        title="Our Story - Bread & Bite | Cloud Kitchen & Fresh Food · Navi Mumbai"
        description="Learn about Bread & Bite's journey, our commitment to fresh dough, quality ingredients, and honest cooking. Founded in Taloja, serving Navi Mumbai."
        url="/about"
        keywords="about bread and bite, cloud kitchen story navi mumbai, taloja food, best pizza kharghar"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            <span className="eyebrow-tag">Serving Navi Mumbai · Taloja Phase 1</span>
            <h1 className="text-4xl sm:text-6xl font-normal tracking-tight font-heading leading-tight">
              Delicious food, <br />
              <span className="font-italic-accent text-[#B84A1C]">made with care</span> every day.
            </h1>
            <p className="text-base sm:text-lg text-[#574F4A] leading-relaxed max-w-xl">
              At <strong className="text-[#181411]">Bread & Bite</strong>, we believe good food should always be fresh, hot, and flavorful. We prepare our pizzas, grilled sandwiches, and pastas with fresh vegetables, real cheese, and our own recipes — so you get great taste every single time.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-4 border-t border-[#EAE4DC] max-w-lg">
              {[
                { label: "Happy Customers", value: "500+" },
                { label: "Rating", value: "4.9/5" },
                { label: "Avg Delivery Time", value: "25m" }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-bold text-[#181411] font-heading">{stat.value}</span>
                  <span className="text-[11px] text-[#8C827A] uppercase tracking-wider font-semibold mt-1">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="artisan-card rounded-3xl p-3 shadow-warm">
              <div className="rounded-2xl overflow-hidden aspect-square relative bg-[#F5EFE6]">
                <img
                  src="https://images.unsplash.com/photo-1550507992-eb63ffee0847?q=80&w=1200&auto=format&fit=crop"
                  alt="Bread and Bite Kitchen Sandwich Preparation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════════
            THE 3 INGREDIENT PILLARS
        ═══════════════════════════════════════════════════════════════════ */}
        <div className="mb-24 artisan-card rounded-3xl p-8 sm:p-14 bg-white">
          <motion.div {...fadeIn} className="text-center max-w-xl mx-auto mb-12">
            <span className="eyebrow-tag mb-3">Our Quality</span>
            <h2 className="text-3xl sm:text-4xl font-normal font-heading text-[#181411]">
              Freshly Made <span className="font-italic-accent text-[#B84A1C]">For You</span>
            </h2>
            <p className="text-[#574F4A] text-sm sm:text-base mt-2">
              Fresh vegetables, real cheese, and clean cooking on every order.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaSeedling />,
                title: "Fresh Vegetables & Meat",
                desc: "Crisp vegetables, fresh dairy, and 100% Halal chicken sourced fresh every day."
              },
              {
                icon: <FaFireAlt />,
                title: "Fresh Pizza Dough",
                desc: "Soft inside and crispy outside, prepared fresh every morning for the perfect crust."
              },
              {
                icon: <FaLeaf />,
                title: "House Sauces",
                desc: "Rich pizza sauces, creamy mayo, and special seasonings made without artificial colors."
              }
            ].map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="flex flex-col items-center text-center p-4"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#FDF3ED] text-[#B84A1C] flex items-center justify-center text-xl mb-5 border border-[#EAE4DC]">
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-bold text-[#181411] mb-2 font-heading">{pillar.title}</h3>
                <p className="text-[#574F4A] text-sm leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════════
            OUR COMMITMENT / VALUES
        ═══════════════════════════════════════════════════════════════════ */}
        <div className="mb-24">
          <motion.div {...fadeIn} className="text-center max-w-xl mx-auto mb-14">
            <span className="eyebrow-tag mb-3">Our Promise</span>
            <h2 className="text-3xl sm:text-4xl font-normal font-heading text-[#181411]">
              Our Kitchen <span className="font-italic-accent text-[#B84A1C]">Standards</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <FaCheckCircle />, title: "Quality Sourcing", desc: "Fresh bread loaves, real cheese blends, and 100% Halal chicken only.", color: "text-[#B84A1C]" },
              { icon: <FaHandsWash />, title: "Clean & Hygienic", desc: "Sanitized cooking counters and clean food preparation.", color: "text-[#2A6A4E]" },
              { icon: <FaTruck />, title: "Hot & Fast Delivery", desc: "Packed hot in insulated boxes and delivered directly across Navi Mumbai.", color: "text-[#181411]" },
              { icon: <FaRupeeSign />, title: "Fair Pricing", desc: "Restaurant-quality taste at simple and honest prices.", color: "text-[#D97706]" }
            ].map((val, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="artisan-card rounded-2xl p-7 flex flex-col bg-white"
              >
                <div className={`text-2xl mb-4 ${val.color}`}>
                  {val.icon}
                </div>
                <h3 className="text-base font-bold text-[#181411] mb-2 font-heading">{val.title}</h3>
                <p className="text-xs text-[#574F4A] leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════════
            KITCHEN MOMENTS
        ═══════════════════════════════════════════════════════════════════ */}
        <div className="mb-24">
          <motion.div {...fadeIn} className="text-center mb-10">
            <span className="eyebrow-tag mb-3">Behind The Scenes</span>
            <h2 className="text-2xl sm:text-4xl font-normal font-heading text-[#181411]">
              Inside Our <span className="font-italic-accent text-[#B84A1C]">Kitchen</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { img: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&w=800&auto=format&fit=crop", label: "Pizza Oven" },
              { img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=800&auto=format&fit=crop", label: "Our Kitchen Team" },
              { img: "https://images.unsplash.com/photo-1607532941433-304659e8198a?q=80&w=800&auto=format&fit=crop", label: "Fresh Herbs" },
              { img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop", label: "Pasta Station" }
            ].map((item, idx) => (
              <div key={idx} className="artisan-card rounded-2xl overflow-hidden p-2 bg-white">
                <div className="aspect-[4/5] rounded-xl overflow-hidden relative">
                  <img
                    src={item.img}
                    alt={item.label}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-106"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#181411]/60 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 text-white text-xs font-semibold font-heading">
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════════
            FINAL INVITATION CALLOUT
        ═══════════════════════════════════════════════════════════════════ */}
        <div className="artisan-card rounded-3xl p-10 sm:p-16 text-center bg-white border border-[#EAE4DC] max-w-3xl mx-auto">
          <span className="eyebrow-tag mb-4">Ready To Order?</span>
          <h2 className="text-3xl sm:text-5xl font-normal text-[#181411] mb-4 font-heading leading-tight">
            Hungry for something <span className="font-italic-accent text-[#B84A1C]">delicious?</span>
          </h2>
          <p className="text-[#574F4A] text-sm sm:text-base max-w-md mx-auto mb-8 leading-relaxed">
            Order your favorite pizza, grilled sandwich, or creamy pasta right now and enjoy fresh food at home.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/menu"
              className="btn-primary py-3.5 px-8 text-sm"
            >
              <FaUtensils size={13} />
              <span>Explore The Menu</span>
            </Link>
            <a
              href="https://wa.me/919325629256"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline py-3.5 px-7 text-sm"
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