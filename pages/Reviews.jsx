import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaWhatsapp, FaUtensils, FaHeart, FaAward, FaCommentDots, FaArrowRight, FaCamera, FaMotorcycle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SEO from "../src/components/SEO";

/**
 * Reviews Page — "First Impressions / Wall of Fame Coming Soon"
 * Designed with bespoke artisan aesthetics for freshly launched kitchen.
 * Transparent, high-trust, and invites real patrons to become founding food critics.
 */
const Reviews = () => {
  const reviewWhatsAppLink = "https://wa.me/919325629256?text=Hi%20Bread%20%26%20Bite!%20I%20just%20ordered%20and%20I%27d%20love%20to%20share%20my%20review%20and%20food%20photo%20for%20the%20website!";
  const orderWhatsAppLink = "https://wa.me/919325629256?text=Hi%20Bread%20%26%20Bite!%20I%20want%20to%20order%20food%20and%20be%20among%20your%20first%20reviewers!";

  const fadeIn = {
    hidden: { opacity: 0, y: 22 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } }
  };

  const stagger = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08 } }
  };

  return (
    <section className="relative min-h-[calc(100vh-4.5rem)] bg-[#FAF7F2] pt-8 sm:pt-12 pb-24 px-4 sm:px-6 overflow-hidden text-[#181411]">
      <SEO
        title="Customer Reviews & Ratings | Bread & Bite Navi Mumbai"
        description="Our kitchen doors just opened in Navi Mumbai! Order today and be among our first founding food critics to get featured on our Wall of Fame."
        url="/reviews"
        keywords="bread and bite reviews, food critic navi mumbai, taloja cloud kitchen reviews, chicken keema reviews kharghar, chicken korma panvel"
      />

      {/* Ambient Artisan Glows */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-10 right-1/4 w-[420px] h-[420px] bg-[#F4EFE6] rounded-full blur-[100px]" />
        <div className="absolute bottom-20 left-10 w-[380px] h-[380px] bg-[#FDF3ED] rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={stagger}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          {/* Heading */}
          <motion.h1 variants={fadeIn} className="text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight font-heading leading-[1.1] mb-4 text-[#181411]">
            Our Guest Wall is <br />
            <span className="font-italic-accent text-[#B84A1C] text-4xl sm:text-6xl lg:text-7xl">
              Heating Up.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p variants={fadeIn} className="text-xs sm:text-base text-[#574F4A] max-w-xl mx-auto leading-relaxed">
            We've just opened our kitchen doors in Navi Mumbai. Rather than showing placeholder ratings, we believe in <strong>100% genuine customer love</strong>. Be among our founding patrons and help us write our story.
          </motion.p>
        </motion.div>

        {/* Central "First Critic Spotlight" Reserved Plaque */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-2xl mx-auto mb-14 sm:mb-20"
        >
          {/* Glow border ring */}
          <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-[#B84A1C]/20 via-[#FDF3ED] to-[#2A6A4E]/20 blur-md opacity-70" />

          <div className="relative rounded-3xl bg-white border border-[#EAE4DC] p-6 sm:p-10 shadow-tactile-lg text-center overflow-hidden">
            {/* Steady Gold Stars */}
            <div className="flex items-center justify-center gap-2 text-[#D97706] text-xl sm:text-2xl mb-4 pt-2">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>

            <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#181411] mb-2 leading-snug">
              Reserved for Your First Bite
            </h2>

            <p className="text-xs sm:text-sm text-[#574F4A] max-w-md mx-auto leading-relaxed mb-6">
              "Ordered our hearty 500g Chicken Keema, rich Chicken Korma, hot Tandoori Roti, soft Pav, or crispy burgers? Tell us how the flavors hit. Your review will be featured right here on our Wall of Fame."
            </p>

            <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
              <a
                href={reviewWhatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto btn-primary py-3 px-6 text-xs uppercase tracking-wider font-bold shadow-tactile-sm justify-center"
              >
                <FaCommentDots size={14} />
                <span>Submit Your Review on WhatsApp</span>
              </a>

              <Link
                to="/menu"
                className="w-full sm:w-auto btn-outline py-3 px-5 text-xs uppercase tracking-wider font-bold justify-center"
              >
                <span>Order Food First</span>
                <FaArrowRight size={10} />
              </Link>
            </div>

            <div className="pt-6 mt-6 border-t border-[#EAE4DC] flex items-center justify-center gap-6 text-[11px] text-[#8C827A]">
              <span className="flex items-center gap-1.5">
                <FaMotorcycle className="text-[#B84A1C]" />
                <span>Taloja, Kharghar & Panvel</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <FaHeart className="text-[#2A6A4E]" />
                <span>100% Real Diners Only</span>
              </span>
            </div>
          </div>
        </motion.div>

        {/* 3 Founding Patron Perks Grid */}
        <div className="mb-14 sm:mb-20">
          <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
            <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#B84A1C] block mb-1.5">
              Why Review Early?
            </span>
            <h3 className="text-xl sm:text-3xl font-bold font-heading text-[#181411]">
              The Founding Patron <span className="font-italic-accent text-[#B84A1C]">Perks</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-5 sm:gap-6">
            {[
              {
                icon: <FaUtensils className="text-[#B84A1C]" size={20} />,
                badge: "Direct Chef Feedback",
                title: "Shape Our Recipe",
                desc: "Tell our head kitchen team what you loved and what we can elevate. We craft our recipes around your real palate."
              },
              {
                icon: <FaCamera className="text-[#2A6A4E]" size={20} />,
                badge: "Permanent Spotlight",
                title: "Wall of Fame Feature",
                desc: "Send us a quick food photo with your name. You'll be forever immortalized as one of our earliest kitchen supporters."
              },
              {
                icon: <FaAward className="text-[#D97706]" size={20} />,
                badge: "Next Order Voucher",
                title: "Early Foodie Reward",
                desc: "Every patron who shares an honest review within 48 hours of delivery unlocks a special discount on their next comfort meal."
              }
            ].map((perk, i) => (
              <motion.div
                key={perk.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="artisan-card rounded-2xl p-6 sm:p-7 bg-white flex flex-col justify-between border border-[#EAE4DC]"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-[#FAF7F2] border border-[#EAE4DC] flex items-center justify-center mb-4">
                    {perk.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#8C827A] block mb-1">
                    {perk.badge}
                  </span>
                  <h4 className="text-base sm:text-lg font-bold font-heading text-[#181411] mb-2">
                    {perk.title}
                  </h4>
                  <p className="text-xs text-[#574F4A] leading-relaxed">
                    {perk.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Concierge Card */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="artisan-card rounded-3xl p-8 sm:p-12 text-center bg-white max-w-3xl mx-auto border border-[#EAE4DC] shadow-tactile-md"
        >
          <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#B84A1C] block mb-2">
            Ready For Dinner?
          </span>
          <h2 className="text-2xl sm:text-4xl font-normal text-[#181411] mb-3 font-heading leading-tight">
            Order your first meal & <span className="font-italic-accent text-[#B84A1C]">taste homestyle gravies.</span>
          </h2>
          <p className="text-[#574F4A] text-xs sm:text-sm mb-7 max-w-lg mx-auto leading-relaxed">
            Generous 500g Chicken Keema, rich Chicken Korma, hot Tandoori Rotis, and soft Pavs delivered hot across Taloja, Kharghar & Panvel.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
            <a
              href={orderWhatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary py-3.5 px-8 text-xs uppercase tracking-wider font-bold justify-center shadow-tactile-sm"
            >
              <FaWhatsapp size={16} />
              <span>Order on WhatsApp</span>
            </a>
            <Link
              to="/menu"
              className="btn-outline py-3.5 px-7 text-xs uppercase tracking-wider font-bold justify-center"
            >
              Explore Full Menu
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;