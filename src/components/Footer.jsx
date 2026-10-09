import React from 'react';
import { FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaHeart } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#181411] text-[#EAE4DC] border-t border-[#26211D] relative overflow-hidden pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Brand Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center p-2 shadow-xs border border-[#26211D]">
                <img src="/Logo.png" alt="Bread & Bite" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-tight text-white font-heading">
                  Bread <span className="text-[#B84A1C] font-normal italic">&</span> Bite
                </span>
                <span className="text-[9px] text-[#8C827A] font-semibold tracking-[0.25em] uppercase mt-0.5">
                  Cloud Kitchen · Navi Mumbai
                </span>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-[#A89E94] max-w-sm">
              Fresh pizzas, loaded grilled sandwiches, creamy pastas, and cold drinks delivered hot to your door in Navi Mumbai.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://wa.me/919325629256"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Order on WhatsApp"
                className="w-10 h-10 rounded-full bg-[#26211D] border border-white/5 flex items-center justify-center text-[#EAE4DC] hover:bg-[#B84A1C] hover:text-white transition-all"
              >
                <FaWhatsapp size={16} />
              </a>
              <a
                href="https://www.instagram.com/bread_and_bite/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="w-10 h-10 rounded-full bg-[#26211D] border border-white/5 flex items-center justify-center text-[#EAE4DC] hover:bg-[#B84A1C] hover:text-white transition-all"
              >
                <FaInstagram size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 lg:col-start-7">
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.18em] mb-5 font-heading">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { name: 'Home', path: '/' },
                { name: 'Menu', path: '/menu' },
                { name: 'About Us', path: '/about' },
                { name: 'Reviews', path: '/reviews' },
                { name: 'Contact Us', path: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    className="text-[#A89E94] hover:text-white transition-colors"
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Menu Categories (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.18em] mb-5 font-heading">
              Categories
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { name: 'Pizzas', id: 'Pizza' },
                { name: 'Sandwiches', id: 'Sandwich' },
                { name: 'Pastas', id: 'Pasta' },
                { name: 'Beverages', id: 'Drinks' }
              ].map((cat) => (
                <li key={cat.name}>
                  <NavLink
                    to={`/menu?category=${cat.id}`}
                    className="text-[#A89E94] hover:text-white transition-colors"
                  >
                    {cat.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Kitchen Hours & Location (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.18em] mb-5 font-heading">
              Our Location
            </h4>
            <ul className="space-y-3.5 text-xs text-[#A89E94]">
              <li className="flex items-start gap-2.5">
                <FaMapMarkerAlt className="text-[#B84A1C] mt-0.5 shrink-0" size={13} />
                <span>Taloja Phase 1, Sector 11, Navi Mumbai, 410208</span>
              </li>
              <li className="flex items-center gap-2.5">
                <FaClock className="text-[#B84A1C] shrink-0" size={13} />
                <span>Open Daily: 8:00 AM – 11:45 PM</span>
              </li>
              <li className="flex items-center gap-2.5">
                <FaPhoneAlt className="text-[#B84A1C] shrink-0" size={13} />
                <a href="tel:+919325629256" className="hover:text-white transition-colors">
                  +91 93256 29256
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <FaEnvelope className="text-[#B84A1C] shrink-0" size={13} />
                <a href="mailto:breadandbite777@gmail.com" className="hover:text-white transition-colors">
                  breadandbite777@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#26211D] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8C827A]">
          <p>© {new Date().getFullYear()} Bread & Bite. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Delivered across Kharghar, Taloja, Panvel & Belapur</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
