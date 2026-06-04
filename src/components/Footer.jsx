import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaArrowRight } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-[#1C1917] text-stone-300 relative overflow-hidden pt-24 pb-10">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[150px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                
                {/* 
                  Newsletter / CTA Banner has been removed as requested 
                */}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
                    {/* Brand Column */}
                    <div className="lg:col-span-4 space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center p-2 shadow-lg">
                                <img src="/Logo.png" alt="Bread & Bite" className="w-full h-full object-contain" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-2xl font-bold tracking-tight text-white uppercase leading-none font-heading">
                                    Bread <span className="text-orange-500">&</span> Bite
                                </span>
                                <span className="text-[10px] text-stone-400 font-medium tracking-[0.25em] uppercase mt-1">
                                    Navi Mumbai Delivered
                                </span>
                            </div>
                        </div>
                        <p className="text-sm leading-relaxed text-stone-400 max-w-sm">
                            Making great food from scratch. Fresh ingredients, handmade daily, and delivered hot to your door in Navi Mumbai.
                        </p>
                        <div className="flex gap-3 pt-2">
                            {[FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 rounded-xl bg-[#292524] border border-stone-800 flex items-center justify-center text-stone-400 hover:bg-orange-600 hover:text-white hover:border-orange-600 transition-all duration-300"
                                >
                                    <Icon size={16} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-2 lg:col-start-6">
                        <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6 border-l-2 border-orange-500 pl-3">Links</h4>
                        <ul className="space-y-4">
                            {['Home', 'Menu', 'About', 'Contact'].map((item) => (
                                <li key={item}>
                                    <NavLink
                                        to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                        className="text-stone-400 hover:text-orange-400 transition-colors flex items-center gap-2 group text-sm"
                                    >
                                        <div className="w-1.5 h-1.5 rounded-full bg-stone-700 group-hover:bg-orange-500 transition-colors"></div>
                                        {item}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Menu */}
                    <div className="lg:col-span-2">
                        <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6 border-l-2 border-orange-500 pl-3">Menu</h4>
                        <ul className="space-y-4">
                            {['Pizza', 'Sandwich', 'Pasta', 'Drinks'].map((item) => (
                                <li key={item}>
                                    <NavLink
                                        to="/menu"
                                        className="text-stone-400 hover:text-orange-400 transition-colors flex items-center gap-2 group text-sm"
                                    >
                                        <div className="w-1.5 h-1.5 rounded-full bg-stone-700 group-hover:bg-orange-500 transition-colors"></div>
                                        {item}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="lg:col-span-3">
                        <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6 border-l-2 border-orange-500 pl-3">Contact</h4>
                        <ul className="space-y-5">
                            <li className="flex items-start gap-4">
                                <div className="w-8 h-8 rounded-lg bg-[#292524] flex items-center justify-center shrink-0 text-orange-500">
                                    <FaMapMarkerAlt size={14} />
                                </div>
                                <span className="text-sm text-stone-400 mt-1">Taloja Phase 1, Sector 11, Navi Mumbai, 410208</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="w-8 h-8 rounded-lg bg-[#292524] flex items-center justify-center shrink-0 text-orange-500">
                                    <FaPhoneAlt size={14} />
                                </div>
                                <span className="text-sm text-stone-400">+91 93256 29256</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="w-8 h-8 rounded-lg bg-[#292524] flex items-center justify-center shrink-0 text-orange-500">
                                    <FaEnvelope size={14} />
                                </div>
                                <span className="text-sm text-stone-400">breadandbite777@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-stone-800 text-sm text-stone-500">
                    <p>&copy; {new Date().getFullYear()} Bread & Bite. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <a href="#" className="hover:text-stone-300 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-stone-300 transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
