import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaTruck, FaHandsWash, FaRupeeSign, FaQuoteLeft, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SEO from "../src/components/SEO";

const About = () => {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
    };

    return (
        <section className="relative min-h-screen bg-[#FFFAF5] pt-28 pb-20 px-6 overflow-hidden">
            <SEO
                title="About Us - Bread & Bite"
                description="Learn about Bread & Bite's journey, our commitment to quality, and why we are Navi Mumbai's favorite spot for delicious comfort food. Est. 2025 in Taloja."
                url="/about"
                keywords="about bread and bite, navi mumbai restaurant story, taloja food, best restaurant kharghar"
            />

            {/* Background accents */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-orange-100/40 rounded-full blur-[120px] -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-amber-100/30 rounded-full blur-[120px] translate-y-1/2"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Hero Section */}
                <div className="flex flex-col lg:flex-row items-center gap-16 mb-28">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="lg:w-1/2 space-y-8"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-orange-200/60 text-orange-600 text-xs font-semibold tracking-[0.15em] uppercase shadow-sm">
                            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                            Est. 2025 · Taloja, Navi Mumbai
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-bold text-stone-900 leading-[1] tracking-tight font-heading">
                            The{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-600 italic">
                                Soul
                            </span>{" "}of<br />
                            Cravings
                        </h1>
                        <p className="text-lg text-stone-500 leading-relaxed max-w-xl">
                            At <span className="text-stone-900 font-semibold">Bread & Bite</span>, we believe comfort food is an art form. From our signature grilled sandwiches to hand-tossed pizzas and creamy pastas, we've redefined cravings into a premium experience.
                        </p>

                        <div className="flex flex-wrap gap-10 pt-4">
                            {[
                                { label: "Happy Eaters", value: "500+" },
                                { label: "Rating", value: "4.9/5" },
                                { label: "Avg Delivery", value: "25m" }
                            ].map((stat, i) => (
                                <div key={i} className="flex flex-col">
                                    <span className="text-3xl font-bold text-stone-900 tracking-tight font-heading">{stat.value}</span>
                                    <span className="text-xs text-stone-400 uppercase tracking-[0.15em] font-semibold mt-1">{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="lg:w-1/2 relative"
                    >
                        <div className="relative z-10 rounded-3xl overflow-hidden border border-stone-200/50 shadow-[0_20px_60px_rgba(0,0,0,0.08)] group">
                            <img
                                src="https://images.unsplash.com/photo-1550507992-eb63ffee0847?q=80&w=1200&h=1200&auto=format&fit=crop"
                                alt="Sandwich Preparation"
                                className="w-full aspect-square object-cover transform group-hover:scale-105 transition-transform duration-[1s]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                        </div>
                        <div className="absolute -inset-3 bg-orange-100/30 rounded-[2.5rem] -z-10 blur-xl"></div>
                    </motion.div>
                </div>

                {/* Values Section */}
                <div className="mb-28">
                    <motion.div {...fadeIn} className="text-center mb-16">
                        <span className="text-orange-600 text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">Our Philosophy</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-stone-900 tracking-tight font-heading">
                            Why We <span className="text-orange-600">Stand Out</span>
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                        {[
                            { icon: <FaCheckCircle />, title: "Fresh Sourcing", desc: "Only the finest breads, freshest veggies, and premium cheeses make the cut.", color: "orange" },
                            { icon: <FaHandsWash />, title: "High Standard", desc: "Our hygiene protocols exceed industry standards. Spotless kitchens. Always.", color: "blue" },
                            { icon: <FaTruck />, title: "Fast Delivery", desc: "Swift delivery across Navi Mumbai, keeping your cravings hot.", color: "green" },
                            { icon: <FaRupeeSign />, title: "Fair Pricing", desc: "Great taste shouldn't mean a high price tag. Best value guaranteed.", color: "purple" }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.6 }}
                                className="bg-white p-8 rounded-2xl border border-stone-100 group hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:border-orange-200 hover:-translate-y-1 transition-all duration-500"
                            >
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-lg mb-6 transition-all duration-300 ${
                                    item.color === 'orange' ? 'bg-orange-50 text-orange-600 group-hover:bg-orange-600 group-hover:text-white' :
                                    item.color === 'blue' ? 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white' :
                                    item.color === 'green' ? 'bg-green-50 text-green-600 group-hover:bg-green-600 group-hover:text-white' :
                                    'bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white'
                                }`}>
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-stone-900 mb-2 tracking-tight font-heading">{item.title}</h3>
                                <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Founder's Vision */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative rounded-3xl bg-white border border-stone-100 p-12 md:p-20 text-center mb-28 overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
                >
                    <div className="absolute top-0 right-0 p-8 opacity-[0.06]">
                        <FaQuoteLeft className="text-8xl text-orange-600" />
                    </div>
                    <blockquote className="text-2xl md:text-4xl font-bold text-stone-900 mb-10 tracking-tight leading-[1.2] relative z-10 font-heading">
                        "We don't just serve food. We craft <span className="text-orange-600">core memories</span> through every bite."
                    </blockquote>
                    <div className="flex flex-col items-center gap-3 relative z-10">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center text-white font-bold text-2xl shadow-lg font-heading">
                            B
                        </div>
                        <div className="text-center">
                            <div className="text-stone-900 font-bold uppercase tracking-wider text-sm font-heading">Visionary Team</div>
                            <div className="text-orange-500 text-xs font-semibold uppercase tracking-[0.2em] mt-0.5">Bread & Bite Founders</div>
                        </div>
                    </div>
                </motion.div>

                {/* Timeline */}
                <div className="max-w-4xl mx-auto mb-28 hidden md:block">
                    <motion.div {...fadeIn} className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-stone-900 tracking-tight font-heading">Our <span className="text-orange-600">Momentum</span></h2>
                    </motion.div>

                    <div className="relative h-px bg-stone-200 w-full mb-20">
                        {[
                            { year: "2025 JAN", title: "The Spark", desc: "First kitchen opened in Taloja Phase 1." },
                            { year: "2025 MAR", title: "Scale", desc: "Hit 1000+ orders milestone." },
                            { year: "FUTURE", title: "Expand", desc: "Taking Bread & Bite to every corner of Navi Mumbai." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                className={`absolute top-0 -translate-y-1/2 flex flex-col items-center ${
                                    i === 0 ? '-translate-x-0 items-start text-left' : 
                                    i === 2 ? '-translate-x-full items-end text-right' : 
                                    '-translate-x-1/2 items-center text-center'
                                }`}
                                style={{ left: `${(i / 2) * 100}%` }}
                            >
                                <div className={`w-3 h-3 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(232,89,12,0.3)] mb-6 ${
                                    i === 0 ? '-ml-1.5' : i === 2 ? '-mr-1.5' : ''
                                }`}></div>
                                <div className={`w-56 ${i === 0 ? 'text-left' : i === 2 ? 'text-right' : 'text-center'}`}>
                                    <div className="text-orange-600 font-bold text-lg mb-1 tracking-tight font-heading">{item.year}</div>
                                    <h4 className="text-stone-900 font-bold uppercase text-sm mb-1">{item.title}</h4>
                                    <p className="text-stone-400 text-xs leading-relaxed">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.97 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-center bg-gradient-to-r from-orange-600 to-amber-600 rounded-3xl p-14 md:p-20 group relative overflow-hidden"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-8 leading-none font-heading">
                        Taste The<br />Revolution
                    </h2>
                    <Link
                        to="/menu"
                        className="inline-flex items-center gap-3 px-10 py-5 bg-white text-orange-600 font-bold rounded-2xl hover:scale-105 transition-transform shadow-lg uppercase tracking-wider text-sm"
                    >
                        Explore Menu <FaArrowRight />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default About;