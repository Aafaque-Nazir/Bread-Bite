import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-zinc-950 text-zinc-300 pt-16 pb-8 border-t border-zinc-900">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                {/* Brand Column */}
                <div className="space-y-6">
                    <div className="flex items-center gap-3">
                        <img src="/Logo.png" alt="Bread & Bite" className="w-10 h-10 object-contain" />
                        <div className="flex flex-col">
                             <span className="text-xl font-extrabold tracking-tighter text-white uppercase leading-none">
                                Bread <span className="text-yellow-400">&</span> Bite
                            </span>
                            <span className="text-[10px] text-zinc-500 font-medium tracking-[0.2em] uppercase">
                                Navi Mumbai Only • Premium
                            </span>
                        </div>
                    </div>
                    <p className="text-sm leading-relaxed text-zinc-400">
                        Crafting the perfect grilled sandwiches with love, cheese, and the freshest ingredients. Taste the difference in every bite.
                    </p>
                    <div className="flex gap-4 pt-2">
                        {[FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp].map((Icon, i) => (
                            <a
                                key={i}
                                href="#"
                                className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-yellow-400 hover:text-black transition-all duration-300"
                            >
                                <Icon size={18} />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
                    <ul className="space-y-3">
                        {['Home', 'Menu', 'About', 'Reviews', 'Contact'].map((item) => (
                            <li key={item}>
                                <NavLink
                                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                    className="text-sm hover:text-yellow-400 transition-colors flex items-center gap-2"
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400/50"></span>
                                    {item}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <FaMapMarkerAlt className="text-yellow-400 mt-1 shrink-0" />
                            <span className="text-sm">Taloja Phase 1 , Sector 11 , Navi Mumbai</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <FaPhoneAlt className="text-yellow-400 shrink-0" />
                            <span className="text-sm">+91 93256 29256</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <FaEnvelope className="text-yellow-400 shrink-0" />
                            <span className="text-sm">breadandbite@gmail.com</span>
                        </li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h3 className="text-white font-bold text-lg mb-6">Newsletter</h3>
                    <p className="text-sm text-zinc-400 mb-4">Subscribe to get the latest offers and updates.</p>
                    <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-yellow-400 transition-colors"
                        />
                        <button
                            type="submit"
                            className="w-full bg-yellow-400 text-black font-bold py-3 rounded-lg hover:bg-yellow-500 transition-colors text-sm"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-zinc-900 text-center text-sm text-zinc-500">
                <p>&copy; {new Date().getFullYear()} Bread & Bite. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
