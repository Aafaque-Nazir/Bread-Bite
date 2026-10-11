import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaShoppingBag, FaWhatsapp } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../context/CartContext";
import { useKitchenStatus } from "../hooks/useKitchenStatus";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { toggleCart, cartCount } = useCart();
  const { isOpen: isKitchenOpen } = useKitchenStatus();
  const whatsappLink = isKitchenOpen
    ? "https://wa.me/919325629256?text=Hi%2C%20I%20want%20to%20order%20from%20Bread%20%26%20Bite!"
    : "https://wa.me/919325629256?text=Hi%20Bread%20%26%20Bite%2C%20I%20have%20an%20inquiry%20regarding%20orders%20for%20tomorrow%20or%20party%20catering.";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
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
    { name: "Menu", path: "/menu" },
    { name: "About", path: "/about" },
    { name: "Reviews", path: "/reviews" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <>
      <nav
        className={`sticky top-0 left-0 w-full z-40 transition-all duration-300 ${
          scrolled
            ? "glass py-3 shadow-xs"
            : "bg-[#FAF7F2] py-3.5 sm:py-4 border-b border-[#EAE4DC]"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6">
          {/* LOGO */}
          <NavLink to="/" className="flex items-center gap-2.5 sm:gap-3.5 group relative z-50">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white border border-[#EAE4DC] flex items-center justify-center p-1.5 shadow-2xs transition-transform duration-300 group-hover:scale-105">
              <img
                src="/Logo.png"
                alt="Bread & Bite"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-[1.2rem] sm:text-[1.35rem] tracking-tight text-[#181411] leading-none font-heading whitespace-nowrap">
                Bread <span className="font-italic-accent text-lg sm:text-xl text-[#B84A1C]">&</span> Bite
              </span>
              <span className="text-[9px] sm:text-[9.5px] text-[#8C827A] font-semibold tracking-[0.2em] uppercase mt-0.5 whitespace-nowrap">
                Cloud Kitchen · 10 AM – 9 PM Daily
              </span>
            </div>
          </NavLink>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center flex-1 justify-center">
            <ul className="flex items-center gap-8 text-[12px] font-semibold tracking-[0.14em] uppercase">
              {navLinks.map(({ name, path }) => (
                <li key={name} className="relative">
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      `transition-colors duration-200 py-1 flex items-center gap-1.5 ${
                        isActive
                          ? "text-[#B84A1C] font-bold"
                          : "text-[#574F4A] hover:text-[#181411]"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <span>{name}</span>
                        {isActive && (
                          <motion.span
                            layoutId="activeNavIndicator"
                            className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#B84A1C] rounded-full"
                            transition={{ type: "spring", stiffness: 350, damping: 30 }}
                          />
                        )}
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* DESKTOP ACTIONS */}
          <div className="hidden lg:flex items-center gap-4">
            {/* CART TRIGGER */}
            <button
              onClick={toggleCart}
              aria-label="View shopping bag"
              className="relative p-2.5 rounded-full text-[#181411] hover:text-[#B84A1C] hover:bg-white border border-transparent hover:border-[#EAE4DC] transition-all duration-200 cursor-pointer"
            >
              <FaShoppingBag size={17} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#B84A1C] text-white text-[10px] font-bold w-4.5 h-4.5 flex items-center justify-center rounded-full shadow-2xs">
                  {cartCount}
                </span>
              )}
            </button>

            {/* ORDER CTA */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`py-2.5 px-5 text-[11px] font-bold tracking-wider uppercase flex items-center gap-2 rounded-full transition-all duration-200 ${
                isKitchenOpen 
                  ? "btn-primary shadow-tactile-sm" 
                  : "bg-[#181411] hover:bg-[#2A2420] text-[#FAF7F2] border border-black/10"
              }`}
            >
              <FaWhatsapp className={isKitchenOpen ? "text-[14px]" : "text-[14px] text-[#25D366]"} />
              <span>{isKitchenOpen ? "Order Direct" : "Inquire (WhatsApp)"}</span>
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

        {/* MOBILE MENU DRAWER (FULL HEIGHT & SEAMLESS) */}
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
              <div className="flex flex-col gap-3 py-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8C827A] px-1">
                  Menu & Pages
                </span>
                {navLinks.map(({ name, path }, index) => (
                  <motion.div
                    key={name}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.04 }}
                  >
                    <NavLink
                      to={path}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `text-2xl font-heading tracking-tight block py-2.5 px-3 rounded-xl transition-colors ${
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

              <div className="pt-6 border-t border-[#EAE4DC] space-y-3 mt-auto">
                <div className="flex items-center justify-between px-1 text-xs text-[#8C827A]">
                  <span className="text-[10px] font-bold uppercase tracking-wider">Kitchen Hours</span>
                  <span className="font-semibold text-[#181411]">10:00 AM – 9:00 PM Daily</span>
                </div>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3.5 text-xs uppercase tracking-wider font-bold shadow-tactile-md flex items-center justify-center gap-2 rounded-xl transition-colors ${
                    isKitchenOpen ? "btn-primary" : "bg-[#181411] text-[#FAF7F2]"
                  }`}
                >
                  <FaWhatsapp size={16} className={isKitchenOpen ? "" : "text-[#25D366]"} />
                  <span>{isKitchenOpen ? "Order on WhatsApp" : "Inquire on WhatsApp"}</span>
                </a>
                <p className="text-center text-[11px] text-[#8C827A]">
                  Delivering across Taloja, Kharghar, Panvel & Belapur
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
