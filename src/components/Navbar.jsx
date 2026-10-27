import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaShoppingBag, FaWhatsapp, FaChevronDown } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../context/CartContext";
import { useKitchenStatus } from "../hooks/useKitchenStatus";
import { LOCATIONS } from "../../data/locations";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { toggleCart, cartCount } = useCart();
  const { isOpen: isKitchenOpen } = useKitchenStatus();

  const whatsappLink = isKitchenOpen
    ? "https://wa.me/919325629256?text=Hi%2C%20I%20want%20to%20order%20from%20Bread%20%26%20Bite!"
    : "https://wa.me/919325629256?text=Hi%20Bread%20%26%20Bite%2C%20I%20have%20an%20inquiry%20regarding%20orders%20or%20party%20catering.";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Lock body scroll and pause Lenis when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.__lenis?.stop();
    } else {
      document.body.style.overflow = "";
      window.__lenis?.start();
    }
    return () => {
      document.body.style.overflow = "";
      window.__lenis?.start();
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu/" },
    { name: "About", path: "/about/" },
    { name: "Reviews", path: "/reviews/" },
    { name: "Contact", path: "/contact/" }
  ];

  const isLocationActive = LOCATIONS.some(
    (loc) => location.pathname === `/${loc.slug}/` || location.pathname === `/${loc.slug}`
  );

  return (
    <>
      <nav
        className={`sticky top-0 left-0 w-full z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#FAF7F2]/95 backdrop-blur-md py-2.5 shadow-xs border-b border-[#EAE4DC]"
            : "bg-[#FAF7F2] py-2.5 sm:py-3 border-b border-[#EAE4DC]"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6">
          {/* LEFT: LOGO & DESKTOP NAV LINKS (Grouped with guaranteed breathing space) */}
          <div className="flex items-center gap-8 xl:gap-11">
            {/* LOGO & BRAND */}
            <NavLink to="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white border border-[#EAE4DC] flex items-center justify-center p-1 shadow-2xs transition-transform duration-200 group-hover:scale-105">
                <img
                  src="/Logo.png"
                  alt="Bread & Bite"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[1.2rem] sm:text-[1.28rem] tracking-tight text-[#181411] leading-none font-heading whitespace-nowrap">
                  Bread <span className="font-italic-accent text-lg text-[#B84A1C]">&</span> Bite
                </span>
                <span className="text-[9.5px] text-[#8C827A] font-medium tracking-wider uppercase mt-0.5 whitespace-nowrap">
                  Navi Mumbai
                </span>
              </div>
            </NavLink>

            {/* DESKTOP NAV LINKS */}
            <nav className="hidden lg:flex items-center">
              <ul className="flex items-center gap-6 xl:gap-7 text-[12.5px] font-medium tracking-wider uppercase">
                {navLinks.map(({ name, path }) => (
                  <li key={name} className="relative">
                    <NavLink
                      to={path}
                      className={({ isActive }) =>
                        `transition-colors duration-200 py-1 flex items-center ${
                          isActive
                            ? "text-[#B84A1C] font-semibold"
                            : "text-[#574F4A] hover:text-[#181411]"
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          <span>{name}</span>
                          {isActive && (
                            <motion.span
                              layoutId="activeNavUnderline"
                              className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#B84A1C] rounded-full"
                              transition={{ type: "spring", stiffness: 380, damping: 30 }}
                            />
                          )}
                        </>
                      )}
                    </NavLink>
                  </li>
                ))}

                {/* LOCATIONS DROPDOWN */}
                <li className="relative group">
                  <button
                    type="button"
                    className={`transition-colors duration-200 py-1 flex items-center gap-1 cursor-pointer tracking-wider uppercase ${
                      isLocationActive
                        ? "text-[#B84A1C] font-semibold"
                        : "text-[#574F4A] hover:text-[#181411]"
                    }`}
                  >
                    <span>Locations</span>
                    <FaChevronDown
                      size={8}
                      className="group-hover:rotate-180 transition-transform duration-200 text-[#8C827A]"
                    />
                    {isLocationActive && (
                      <motion.span
                        layoutId="activeNavUnderline"
                        className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#B84A1C] rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>

                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2.5 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 z-50">
                    <div className="w-56 bg-white border border-[#EAE4DC] rounded-2xl shadow-tactile-lg p-2 space-y-1">
                      <span className="text-[10px] uppercase tracking-wider font-bold text-[#8C827A] px-3 py-1.5 block border-b border-[#F0EAE1]">
                        Navi Mumbai Delivery
                      </span>
                      {LOCATIONS.map((loc) => (
                        <NavLink
                          key={loc.slug}
                          to={`/${loc.slug}/`}
                          className={({ isActive }) =>
                            `flex items-center justify-between px-3 py-2 rounded-xl text-xs transition-colors ${
                              isActive
                                ? "bg-[#FAF7F2] text-[#B84A1C] font-bold"
                                : "text-[#181411] hover:bg-[#FAF7F2] hover:text-[#B84A1C]"
                            }`
                          }
                        >
                          <span className="normal-case font-medium">{loc.name}</span>
                          <span className="text-[10px] text-[#8C827A]">{loc.deliveryTime}m</span>
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </li>
              </ul>
            </nav>
          </div>

          {/* RIGHT: DESKTOP ACTIONS */}
          <div className="hidden lg:flex items-center gap-3">
            {/* CART TRIGGER */}
            <button
              onClick={toggleCart}
              aria-label="View shopping bag"
              className="relative p-2 rounded-full text-[#181411] hover:text-[#B84A1C] hover:bg-black/5 transition-colors cursor-pointer"
            >
              <FaShoppingBag size={16} />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-[#B84A1C] text-white text-[9px] font-bold w-4 h-4 flex items-center justify-center rounded-full ring-2 ring-[#FAF7F2]">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Subtle Divider */}
            <div className="h-3.5 w-px bg-[#EAE4DC]" />

            {/* SLEEK ORDER CTA BUTTON */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#181411] hover:bg-[#B84A1C] text-white text-xs font-medium tracking-wide transition-all duration-200 shadow-2xs hover:shadow-xs active:scale-98"
            >
              <FaWhatsapp size={12} className="opacity-80" />
              <span>Order Now</span>
            </a>
          </div>

          {/* MOBILE TOGGLE & CART */}
          <div className="lg:hidden flex items-center gap-1.5">
            <button
              onClick={toggleCart}
              aria-label="View shopping bag"
              className="relative p-2.5 rounded-xl text-[#181411] hover:text-[#B84A1C] touch-manipulation cursor-pointer"
            >
              <FaShoppingBag size={19} />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 bg-[#B84A1C] text-white text-[9px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className="p-2.5 rounded-xl text-[#181411] hover:text-[#B84A1C] z-50 relative touch-manipulation cursor-pointer"
            >
              {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU DRAWER (CLEAN & MINIMALIST) */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              data-lenis-prevent
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-x-0 top-[61px] sm:top-[69px] bottom-0 bg-[#FAF7F2] z-40 flex flex-col justify-between px-6 py-6 overflow-y-auto border-t border-[#EAE4DC]"
            >
              <div className="flex flex-col gap-4">
                {/* Clean Kitchen Timing Box */}
                <div className="bg-white border border-[#EAE4DC] rounded-2xl p-4 shadow-2xs">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#8C827A] block mb-2">
                    Kitchen Operational Slots
                  </span>
                  <div className="flex items-center justify-between text-xs text-[#181411]">
                    <div>
                      <span className="font-bold block">☀️ Lunch Slot</span>
                      <span className="text-[11px] text-[#574F4A]">11:00 AM – 3:15 PM</span>
                    </div>
                    <div className="text-right">
                      <span className="font-bold block">🌙 Dinner Slot</span>
                      <span className="text-[11px] text-[#574F4A]">7:00 PM – 9:15 PM</span>
                    </div>
                  </div>
                </div>

                {/* Page Links */}
                <div className="flex flex-col gap-1.5 py-1">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8C827A] px-1">
                    Menu & Pages
                  </span>
                  {navLinks.map(({ name, path }, index) => (
                    <motion.div
                      key={name}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.03 }}
                    >
                      <NavLink
                        to={path}
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) =>
                          `text-2xl font-heading tracking-tight block py-2 px-3 rounded-xl transition-colors ${
                            isActive
                              ? "text-[#B84A1C] bg-white font-semibold shadow-2xs border border-[#EAE4DC]"
                              : "text-[#181411] hover:bg-white/60"
                          }`
                        }
                      >
                        {name}
                      </NavLink>
                    </motion.div>
                  ))}
                </div>

                {/* Delivery Areas */}
                <div className="py-2 border-t border-[#EAE4DC]">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8C827A] px-1 block mb-2">
                    Delivery Areas (Navi Mumbai)
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    {LOCATIONS.map((loc) => (
                      <NavLink
                        key={loc.slug}
                        to={`/${loc.slug}/`}
                        onClick={() => setIsOpen(false)}
                        className="bg-white border border-[#EAE4DC] rounded-xl px-3 py-2 text-xs text-[#181411] hover:text-[#B84A1C] hover:border-[#B84A1C] transition-colors flex items-center justify-between"
                      >
                        <span className="font-semibold">{loc.name}</span>
                        <span className="text-[10px] text-[#8C827A]">{loc.deliveryTime}m</span>
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom WhatsApp Button */}
              <div className="pt-4 border-t border-[#EAE4DC] space-y-3 mt-auto">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="btn-primary w-full py-3.5 text-xs uppercase tracking-wider font-bold shadow-tactile-md flex items-center justify-center gap-2 rounded-xl transition-colors"
                >
                  <FaWhatsapp size={16} />
                  <span>Order on WhatsApp</span>
                </a>
                <p className="text-center text-[11px] text-[#8C827A]">
                  Taloja Phase 1 • Kharghar • Panvel • Kamothe • Kalamboli • Belapur
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}

export default Navbar;
