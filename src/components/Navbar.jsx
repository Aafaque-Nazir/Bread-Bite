import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../context/CartContext";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { toggleCart, cartCount } = useCart();

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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const navLinks = ["Home", "Menu", "About", "Contact"];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "glass py-3"
          : "bg-[#FFFAF5]/80 backdrop-blur-sm py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
        {/* LOGO */}
        <NavLink to="/" className="flex items-center gap-3 group">
          <div className="relative w-11 h-11">
            <div className="absolute inset-0 bg-orange-500 rounded-full blur-md opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
            <img
              src="/Logo.png"
              alt="Bread & Bite"
              className="relative w-full h-full object-contain transition-transform duration-500 group-hover:rotate-12"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-stone-900 uppercase leading-none font-heading">
              Bread <span className="text-orange-600">&</span> Bite
            </span>
            <span className="text-[10px] text-stone-400 font-medium tracking-[0.2em] uppercase group-hover:text-orange-500 transition-colors duration-300">
              Navi Mumbai · Delivery
            </span>
          </div>
        </NavLink>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-10">
          <ul className="flex gap-8 text-[13px] font-semibold tracking-widest uppercase">
            {navLinks.map((text) => (
              <li key={text} className="relative">
                <NavLink
                  to={text === "Home" ? "/" : `/${text.toLowerCase()}`}
                  className={({ isActive }) =>
                    `transition-all duration-300 relative py-1 hover:text-orange-600 ${
                      isActive ? "text-orange-600" : "text-stone-600"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {text}
                      {isActive && (
                        <motion.span
                          layoutId="activeLink"
                          className="absolute left-0 -bottom-1 h-[2px] w-full bg-orange-500 rounded-full"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* CART ICON */}
          <button
            onClick={() => navigate("/cart")}
            className="relative text-stone-700 hover:text-orange-600 transition-colors duration-300"
          >
            <FaShoppingCart size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2.5 bg-orange-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-lg">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        {/* MOBILE TOGGLE & CART */}
        <div className="lg:hidden flex items-center gap-4">
          <button
            onClick={() => navigate("/cart")}
            className="relative text-stone-700 hover:text-orange-600 transition-colors"
          >
            <FaShoppingCart size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2.5 bg-orange-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-lg">
                {cartCount}
              </span>
            )}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-stone-700 hover:text-orange-600 transition-colors p-2"
          >
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 h-screen w-screen bg-[#FFFAF5] z-40 flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((text, index) => (
              <motion.div
                key={text}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
              >
                <NavLink
                  to={text === "Home" ? "/" : `/${text.toLowerCase()}`}
                  className={({ isActive }) =>
                    `text-3xl font-bold tracking-wider font-heading ${
                      isActive ? "text-orange-600" : "text-stone-800"
                    }`
                  }
                >
                  {text}
                </NavLink>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
