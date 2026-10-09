import React from 'react';
import { FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaHeart } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#181411] text-[#EAE4DC] border-t border-[#26211D] relative overflow-hidden pt-14 sm:pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 mb-12 sm:mb-16">
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
              500g Chicken Keema, Chicken Korma, hot Tandoori Roti, soft Pav, burgers, and crispy fries delivered hot across Navi Mumbai.
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
                { name: 'Kitchen Menu', path: '/menu' },
                { name: 'Customer Reviews', path: '/reviews' },
                { name: 'About Our Kitchen', path: '/about' },
                { name: 'Contact & Orders', path: '/contact' }
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
                { name: 'Chicken Gravies', id: 'Gravy' },
                { name: 'Roti & Pav', id: 'Roti' },
                { name: 'Snacks', id: 'Snacks' },
                { name: 'Burgers', id: 'Burgers' }
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
              Our Kitchen
            </h4>
            <ul className="space-y-3.5 text-xs text-[#A89E94]">
              <li className="flex items-start gap-2.5">
                <FaMapMarkerAlt className="text-[#B84A1C] mt-0.5 shrink-0" size={13} />
                <span>Shop 12, Ground Floor, Sector 11, Taloja Phase 1, Navi Mumbai 410208</span>
              </li>
              <li className="flex items-center gap-2.5">
                <FaClock className="text-[#B84A1C] shrink-0" size={13} />
                <span>Open Daily: 8:00 AM – 11:45 PM IST</span>
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

        {/* Local Delivery Coverage SEO Bar */}
        <div className="pt-6 pb-6 border-t border-[#26211D]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs text-[#A89E94]">
            <span className="text-white font-semibold uppercase tracking-wider text-[11px] shrink-0">
              Doorstep Delivery Hubs:
            </span>
            <div className="flex flex-wrap items-center gap-2 text-[11px]">
              {['Taloja Phase 1', 'Taloja Phase 2', 'Kharghar Sectors 1–35', 'Panvel & New Panvel', 'Kamothe', 'Kalamboli', 'CBD Belapur'].map((hub) => (
                <span key={hub} className="bg-[#201B17] px-2.5 py-1 rounded-md border border-[#2E2822] text-[#A89E94]">
                  {hub}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-[#26211D] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8C827A]">
          <p>© {new Date().getFullYear()} Bread & Bite. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>FSSAI Certified Cloud Kitchen · 100% Halal Fresh Chicken</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
