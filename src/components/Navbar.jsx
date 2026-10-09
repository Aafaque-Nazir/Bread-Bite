import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaShoppingBag, FaWhatsapp } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../context/CartContext";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { toggleCart, cartCount } = useCart();
  const whatsappLink = "https://wa.me/919325629256?text=Hi%2C%20I%20want%20to%20order%20from%20Bread%20%26%20Bite!";

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
      {/* REFINED ANNOUNCEMENT BAR */}
      <div className="bg-[#181411] text-[#EAE4DC] text-[11px] font-medium tracking-[0.14em] uppercase py-2 px-6 text-center w-full z-50 relative flex items-center justify-center gap-2">
        <span className="text-[#B84A1C] text-[10px]">✦</span>
        <span>Free Delivery On Orders Above ₹499 Across Navi Mumbai</span>
        <span className="text-[#B84A1C] text-[10px]">✦</span>
      </div>

      <nav
        className={`sticky top-0 left-0 w-full z-40 transition-all duration-300 ${
          scrolled
            ? "glass py-3.5 shadow-sm"
            : "bg-[#FAF7F2] py-4.5 border-b border-[#EAE4DC]"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
          {/* LOGO */}
          <NavLink to="/" className="flex items-center gap-3.5 group relative z-50">
            <div className="w-10 h-10 rounded-xl bg-white border border-[#EAE4DC] flex items-center justify-center p-1.5 shadow-xs transition-transform duration-300 group-hover:scale-105">
              <img
                src="/Logo.png"
                alt="Bread & Bite"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-[1.35rem] tracking-tight text-[#181411] leading-none font-heading whitespace-nowrap">
                Bread <span className="font-italic-accent text-xl text-[#B84A1C]">&</span> Bite
              </span>
              <span className="text-[9.5px] text-[#8C827A] font-semibold tracking-[0.24em] uppercase mt-0.5 whitespace-nowrap">
                Cloud Kitchen · Navi Mumbai
              </span>
            </div>
          </NavLink>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center flex-1 justify-center">
            <ul className="flex items-center gap-9 text-[12.5px] font-semibold tracking-[0.12em] uppercase">
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
          <div className="hidden lg:flex items-center gap-5">
            {/* CART TRIGGER */}
            <button
              onClick={toggleCart}
              aria-label="View shopping bag"
              className="relative p-2.5 rounded-full text-[#181411] hover:text-[#B84A1C] hover:bg-white border border-transparent hover:border-[#EAE4DC] transition-all duration-200"
            >
              <FaShoppingBag size={17} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#B84A1C] text-white text-[10px] font-bold w-4.5 h-4.5 flex items-center justify-center rounded-full shadow-xs">
                  {cartCount}
                </span>
              )}
            </button>

            {/* ORDER ON WHATSAPP CTA */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary py-2.5 px-5 text-xs font-semibold tracking-wider uppercase"
            >
              <FaWhatsapp className="text-[14px]" />
              <span>Order Direct</span>
            </a>
          </div>

          {/* MOBILE TOGGLE & CART */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={toggleCart}
              aria-label="View shopping bag"
              className="relative p-2 rounded-xl text-[#181411] hover:text-[#B84A1C]"
            >
              <FaShoppingBag size={18} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#B84A1C] text-white text-[9px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className="p-2 rounded-xl text-[#181411] hover:text-[#B84A1C] z-50 relative"
            >
              {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU DRAWER */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              data-lenis-prevent
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 top-[88px] h-[calc(100vh-88px)] w-screen bg-[#FAF7F2] z-40 flex flex-col justify-between px-8 py-10 overflow-y-auto"
            >
              <div className="flex flex-col gap-6 pt-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8C827A]">Navigation</span>
                {navLinks.map(({ name, path }, index) => (
                  <motion.div
                    key={name}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <NavLink
                      to={path}
                      className={({ isActive }) =>
                        `text-3xl font-heading tracking-tight block py-1 ${
                          isActive ? "text-[#B84A1C] italic font-semibold" : "text-[#181411]"
                        }`
                      }
                    >
                      {name}
                    </NavLink>
                  </motion.div>
                ))}
              </div>

              <div className="pt-8 border-t border-[#EAE4DC] space-y-4">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full btn-primary py-3.5 text-sm"
                >
                  <FaWhatsapp size={18} /> Order on WhatsApp
                </a>
                <p className="text-center text-xs text-[#8C827A]">
                  Taloja Phase 1 · Delivering across Navi Mumbai
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
