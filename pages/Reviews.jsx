import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteRight, FaWhatsapp, FaArrowRight } from 'react-icons/fa';
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
        text: "I'm extremely picky about hygiene, but Bread & Bite impressed me. Everything is fresh, hot, and delicious.",
        rating: 5,
        location: "Taloja"
    },
    {
        name: "Karan Desai",
        text: "Late-night cravings sorted! Their delivery is lightning fast and the quality is always consistent.",
        rating: 5,
        location: "Kamothe"
    },
    {
        name: "Neha Rajput",
        text: "That Mayo Chicken Sandwich? Absolute fire! I order it for office lunch at least twice a week.",
        rating: 5,
        location: "CBD Belapur"
    },
    {
        name: "Rohan Khanna",
        text: "Artisan quality at street prices. The cheese pull on the pizza is legendary, and their classic Maggi is just pure nostalgia.",
        rating: 5,
        location: "Panvel"
    }
];

const Reviews = () => {
    return (
        <section className="relative min-h-screen bg-black pt-32 pb-20 px-6 overflow-hidden text-white">
            <SEO
                title="Customer Reviews & Testimonials - Bread & Bite"
                description="See what 500+ happy customers are saying about Bread & Bite. 4.9 star rating, 98% repeat customers. Read real reviews from Kharghar, Panvel, Taloja & more!"
                url="/reviews"
                keywords="bread and bite reviews, food reviews navi mumbai, customer testimonials kharghar, best rated restaurant panvel"
            />

            {/* Visual Accents */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-10 w-96 h-96 bg-yellow-400/5 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-amber-500/5 rounded-full blur-[120px]"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 rounded-full bg-zinc-900 border border-white/10 text-yellow-400 text-xs font-bold tracking-[0.3em] uppercase mb-6"
                    >
                        Verified Taste
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-8xl font-black tracking-tight mb-6 leading-none font-heading italic uppercase"
                    >
                        LOVED BY <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-600">
                            500+ ELITE
                        </span> FOODIES
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-zinc-500 text-lg max-w-2xl mx-auto font-medium"
                    >
                        Real stories from real people who refuse to settle for anything less than perfection.
                    </motion.p>
                </div>

                {/* Stats Grid - Modern Glassmorphism */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32"
                >
                    {[
                        { label: "Average Rating", value: "4.9", sub: "Based on 300+ Reviews", color: "text-yellow-400" },
                        { label: "Happy Orders", value: "20,000+", sub: "Delivered since launch", color: "text-amber-500" },
                        { label: "Repeat Rate", value: "98%", sub: "Customers come back", color: "text-green-500" }
                    ].map((stat, i) => (
                        <div key={i} className="glass-card p-12 rounded-[2.5rem] text-center group border-white/5 hover:border-white/10">
                            <div className={`text-6xl font-bold mb-4 tracking-tight font-heading italic ${stat.color} group-hover:scale-110 transition-transform duration-500`}>
                                {stat.value}
                            </div>
                            <div className="text-white font-bold uppercase tracking-widest text-sm mb-1 font-heading">{stat.label}</div>
                            <div className="text-zinc-500 text-xs font-bold uppercase tracking-widest">{stat.sub}</div>
                        </div>
                    ))}
                </motion.div>

                {/* Main Slider Section */}
                <div className="mb-40">
                    <div className="relative glass-card p-1 rounded-[3rem] overflow-hidden">
                        <TestSlider testimonials={testimonials} />
                    </div>
                </div>

                {/* Individual Review Cards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-40">
                    {testimonials.map((review, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="glass-card p-10 rounded-[2.5rem] flex flex-col justify-between relative"
                        >
                            <FaQuoteRight className="absolute top-10 right-10 text-4xl text-white/5" />
                            <div className="mb-8">
                                <div className="flex gap-1 text-yellow-400 mb-6">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <FaStar key={i} />
                                    ))}
                                </div>
                                <p className="text-lg text-zinc-300 font-medium leading-relaxed italic">
                                    "{review.text}"
                                </p>
                            </div>
                            <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                                <div className="w-12 h-12 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-yellow-500 font-bold font-heading text-xl">
                                    {review.name[0]}
                                </div>
                                <div>
                                    <div className="font-bold text-white text-sm uppercase tracking-widest font-heading">{review.name}</div>
                                    <div className="text-zinc-500 text-xs font-bold uppercase tracking-[0.2em]">{review.location}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA - The Hook */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-zinc-900 rounded-[3.5rem] p-16 md:p-24 border border-white/5 relative overflow-hidden text-center"
                >
                    <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[size:30px_30px]" />
                    <h2 className="text-4xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-none font-heading uppercase italic">
                        JOIN THE <span className="text-yellow-400">ELITE</span> <br /> CRAVING CLUB
                    </h2>
                    <p className="text-zinc-500 text-xl font-medium mb-12 max-w-xl mx-auto">
                        Your testimony is the only thing missing from this page. Experience the hype today.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <a
                            href="https://wa.me/919325629256"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary flex items-center gap-3 px-12 py-5 text-lg"
                        >
                            <FaWhatsapp className="text-2xl" /> Order Now
                        </a>
                        <Link
                            to="/menu"
                            className="btn-outline flex items-center gap-3 px-12 py-5 text-lg group"
                        >
                            Explore Menu <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Reviews;