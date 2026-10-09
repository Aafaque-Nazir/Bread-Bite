import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft, FaWhatsapp, FaArrowRight, FaCheckCircle, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import TestSlider from '../src/components/TestSlider';
import SEO from "../src/components/SEO";

const testimonials = [
  {
    name: "Aarav Mehta",
    text: "The Tandoori Chicken Grilled Sandwich is life-changing. But honestly? Their Butter Chicken Pasta is the real underdog. Best in Navi Mumbai!",
    rating: 5,
    location: "Kharghar"
  },
  {
    name: "Priya Sharma",
    text: "I'm extremely picky about kitchen hygiene, but Bread & Bite blew me away. Everything arrives steaming hot, spotless, and tasting homemade.",
    rating: 5,
    location: "Taloja Phase 1"
  },
  {
    name: "Karan Desai",
    text: "Late-night cravings sorted! Their delivery is lightning fast and the quality never fluctuates. Crisp crust on every single pizza.",
    rating: 5,
    location: "Kamothe"
  },
  {
    name: "Neha Rajput",
    text: "That Mayo Chicken Sandwich is pure nostalgia and comfort! We order it for office lunch in CBD Belapur at least twice a week.",
    rating: 5,
    location: "CBD Belapur"
  },
  {
    name: "Rohan Khanna",
    text: "Top food quality at local neighborhood prices. The cheese pull on the pizza is amazing, and their drinks are super refreshing.",
    rating: 5,
    location: "Panvel"
  },
  {
    name: "Simran Kaur",
    text: "Hands down the best grilled sandwich in Navi Mumbai. Generous fillings, proper melted cheese, and toasted to crisp perfection.",
    rating: 5,
    location: "Kharghar Sector 20"
  }
];

const Reviews = () => {
  const whatsappLink = "https://wa.me/919325629256?text=Hi%2C%20I%20want%20to%20order%20from%20Bread%20%26%20Bite!";

  return (
    <section className="relative min-h-screen bg-[#FAF7F2] pt-8 lg:pt-14 pb-24 px-6 overflow-hidden text-[#181411]">
      <SEO
        title="Customer Reviews - Bread & Bite"
        description="See what 500+ happy customers are saying about Bread & Bite. 4.9 star rating, 98% repeat customers. Read real reviews from Kharghar, Panvel, Taloja & more!"
        url="/reviews"
        keywords="bread and bite reviews, food reviews navi mumbai, customer testimonials kharghar, best rated restaurant panvel"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="eyebrow-tag mb-4">Customer Reviews</span>
          <h1 className="text-4xl sm:text-6xl font-normal tracking-tight mb-4 font-heading leading-tight">
            Loved By <span className="font-italic-accent text-[#B84A1C]">500+ Customers</span>
          </h1>
          <p className="text-[#574F4A] text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Real reviews and feedback from food lovers across Navi Mumbai who love our food.
          </p>
        </div>

        {/* Stats Grid — Clean White Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {[
            { label: "Overall Rating", value: "4.9 / 5", sub: "Based on 300+ direct customer reviews", accent: "text-[#D97706]" },
            { label: "Happy Orders", value: "12,000+", sub: "Delivered hot across Navi Mumbai", accent: "text-[#B84A1C]" },
            { label: "Repeat Customers", value: "98%", sub: "Guests who order more than twice a month", accent: "text-[#2A6A4E]" }
          ].map((stat, i) => (
            <div key={i} className="artisan-card rounded-3xl p-8 text-center bg-white shadow-tactile-sm">
              <div className={`text-4xl sm:text-5xl font-normal mb-2 font-heading ${stat.accent}`}>
                {stat.value}
              </div>
              <div className="text-sm font-bold uppercase tracking-wider text-[#181411] mb-1 font-heading">
                {stat.label}
              </div>
              <p className="text-xs text-[#8C827A]">{stat.sub}</p>
            </div>
          ))}
        </div>

        {/* Featured Slider */}
        <div className="mb-24">
          <div className="text-center mb-8">
            <span className="text-xs uppercase font-bold tracking-widest text-[#8C827A]">Featured Highlight</span>
          </div>
          <TestSlider testimonials={testimonials} />
        </div>

        {/* Individual Review Cards Grid */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-4xl font-normal font-heading text-[#181411] leading-tight">
              Recent <span className="font-italic-accent text-[#B84A1C]">Diner Words</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="artisan-card p-8 rounded-2xl flex flex-col justify-between bg-white"
              >
                <div>
                  <div className="flex gap-1 text-[#D97706] text-xs mb-4">
                    {[...Array(review.rating)].map((_, idx) => (
                      <FaStar key={idx} />
                    ))}
                  </div>
                  <p className="text-[#181411] text-sm leading-relaxed italic mb-6">
                    "{review.text}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-[#EAE4DC]">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#EAE4DC] flex items-center justify-center text-[#B84A1C] font-bold font-heading text-sm">
                    {review.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#181411] text-sm font-heading">{review.name}</h4>
                    <span className="text-[11px] text-[#8C827A] block">{review.location}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Concierge Card */}
        <div className="artisan-card rounded-3xl p-10 md:p-16 text-center bg-white max-w-3xl mx-auto border border-[#EAE4DC]">
          <span className="eyebrow-tag mb-4">Experience It Yourself</span>
          <h2 className="text-3xl sm:text-4xl font-normal text-[#181411] mb-4 font-heading leading-tight">
            Taste the difference in your <span className="font-italic-accent text-[#B84A1C]">next meal.</span>
          </h2>
          <p className="text-[#574F4A] text-sm sm:text-base mb-8 max-w-lg mx-auto leading-relaxed">
            From fresh homemade dough to crisp veggies, every dish is made with care. Order hot food directly to your doorstep.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary py-3.5 px-8 text-sm"
            >
              <FaWhatsapp size={16} /> Order on WhatsApp
            </a>
            <Link
              to="/menu"
              className="btn-outline py-3.5 px-7 text-sm"
            >
              Explore Full Menu
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;