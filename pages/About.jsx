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
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    };

    return (
        <section className="relative min-h-screen bg-zinc-950 pt-32 pb-20 px-6 overflow-hidden">
            <SEO
                title="About Us - Bread & Bite"
                description="Learn about Bread & Bite's journey, our commitment to quality, and why we are Navi Mumbai's favorite spot for delicious comfort food. Est. 2025 in Taloja."
                url="/about"
                keywords="about bread and bite, navi mumbai restaurant story, taloja food, best restaurant kharghar"
            />

            {/* Premium Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-yellow-500/5 rounded-full blur-[120px] -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-1/4 w-[700px] h-[700px] bg-amber-600/5 rounded-full blur-[120px] translate-y-1/2"></div>
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Hero Section */}
                <div className="flex flex-col lg:flex-row items-center gap-20 mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="lg:w-1/2 space-y-10"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 text-xs font-bold tracking-widest uppercase">
                            <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></span>
                            Est. 2025 • Taloja, Navi Mumbai
                        </div>
                        <h1 className="text-6xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter font-heading uppercase italic">
                            THE <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-600">
                                SOUL
                            </span> OF <br />
                            CRAVINGS
                        </h1>
                        <p className="text-xl text-zinc-400 leading-relaxed max-w-xl font-medium font-body">
                            At <span className="text-white">Bread & Bite</span>, we believe comfort food is an art form. From our signature grilled sandwiches to hand-tossed pizzas and creamy pastas, we've redefined street-style cravings into a premium experience.
                        </p>

                        <div className="flex flex-wrap gap-10 pt-6">
                            {[
                                { label: "Happy Eaters", value: "500+" },
                                { label: "Rating", value: "4.9/5" },
                                { label: "Avg Delivery", value: "25m" }
                            ].map((stat, i) => (
                                <div key={i} className="flex flex-col">
                                    <span className="text-4xl font-bold text-white tracking-tight font-heading italic">{stat.value}</span>
                                    <span className="text-xs text-zinc-500 uppercase tracking-[0.2em] font-bold mt-1">{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="lg:w-1/2 relative"
                    >
                        <div className="relative z-10 rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl group">
                            <img
                                src="https://images.unsplash.com/photo-1550507992-eb63ffee0847?q=80&w=1200&h=1200&auto=format&fit=crop"
                                alt="Sandwich Preparation"
                                className="w-full aspect-square object-cover transform group-hover:scale-110 transition-transform duration-[1.5s]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                        </div>
                        {/* Decorative background shape */}
                        <div className="absolute -inset-4 bg-yellow-400/10 rounded-[4rem] -z-10 blur-2xl"></div>
                    </motion.div>
                </div>

                {/* Values Section */}
                <div className="mb-40">
                    <motion.div {...fadeIn} className="text-center mb-20">
                        <span className="text-yellow-400 text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Our Philosophy</span>
                        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight font-heading uppercase italic">WHY WE <span className="text-yellow-400">STAND OUT</span></h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: <FaCheckCircle />, title: "Fresh Sourcing", desc: "Only the finest breads, freshest veggies, and premium cheeses make the cut." },
                            { icon: <FaHandsWash />, title: "High Standard", desc: "Our hygiene protocols exceed industry standards. Spotless kitchens. Always." },
                            { icon: <FaTruck />, title: "Navi Mumbai Delivery", desc: "Swift delivery across Navi Mumbai, keeping your cravings hot." },
                            { icon: <FaRupeeSign />, title: "Fair Pricing", desc: "Great taste shouldn't mean a high price tag. Best value guaranteed." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.8 }}
                                className="glass-card p-10 rounded-[2.5rem] group hover:-translate-y-3"
                            >
                                <div className="w-14 h-14 bg-zinc-900 rounded-2xl flex items-center justify-center text-yellow-400 text-2xl mb-8 group-hover:bg-yellow-400 group-hover:text-black transition-all duration-500">
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight uppercase font-heading italic">{item.title}</h3>
                                <p className="text-zinc-500 text-sm leading-relaxed font-medium">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Founder's Vision */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative rounded-[4rem] bg-zinc-900/50 border border-white/5 p-16 md:p-24 text-center mb-40 overflow-hidden"
                >
                    <div className="absolute top-0 right-0 p-10 opacity-10">
                        <FaQuoteLeft className="text-9xl text-yellow-400" />
                    </div>
                    <blockquote className="text-3xl md:text-5xl font-bold text-white mb-12 tracking-tight leading-[1.1] relative z-10 font-heading italic">
                        "WE DON'T JUST SERVE FOOD. WE CRAFT <span className="text-yellow-400">CORE MEMORIES</span> THROUGH EVERY BITE."
                    </blockquote>
                    <div className="flex flex-col items-center gap-4 relative z-10">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-300 to-amber-600 flex items-center justify-center text-black font-black text-3xl shadow-xl">
                            B
                        </div>
                        <div className="text-center">
                            <div className="text-white font-bold uppercase tracking-widest text-sm font-heading">Visionary Team</div>
                            <div className="text-yellow-400/60 text-xs font-bold uppercase tracking-[0.3em] mt-1">Bread & Bite Founders</div>
                        </div>
                    </div>
                </motion.div>

                {/* Timeline - Desktop only for best experience */}
                <div className="max-w-5xl mx-auto mb-40 hidden md:block">
                    <motion.div {...fadeIn} className="text-center mb-20">
                        <h2 className="text-4xl font-black text-white tracking-tighter uppercase">Our <span className="text-yellow-400">Momentum</span></h2>
                    </motion.div>

                    <div className="relative h-px bg-zinc-800 w-full mb-20">
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
                                <div className={`w-4 h-4 rounded-full bg-yellow-400 shadow-[0_0_15px_rgba(251,191,36,0.5)] mb-6 ${
                                    i === 0 ? '-ml-2' : i === 2 ? '-mr-2' : ''
                                }`}></div>
                                <div className={`w-64 ${i === 0 ? 'text-left' : i === 2 ? 'text-right' : 'text-center'}`}>
                                    <div className="text-yellow-400 font-bold text-xl mb-2 tracking-tight font-heading italic">{item.year}</div>
                                    <h4 className="text-white font-black uppercase text-sm mb-2">{item.title}</h4>
                                    <p className="text-zinc-500 text-xs font-medium leading-relaxed">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* CTA Full Width */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-center bg-yellow-400 rounded-[3rem] p-16 md:p-24 group relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-[0.03] transition-opacity"></div>
                    <h2 className="text-5xl md:text-7xl font-bold text-black tracking-tight mb-10 leading-none font-heading italic uppercase">
                        TASTE THE <br /> REVOLUTION
                    </h2>
                    <Link
                        to="/menu"
                        className="inline-flex items-center gap-4 px-12 py-6 bg-black text-yellow-400 font-black rounded-full hover:scale-110 transition-transform shadow-2xl uppercase tracking-tighter text-xl"
                    >
                        Explore Menu <FaArrowRight />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default About;