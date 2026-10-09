import React from "react";
import { motion } from "framer-motion";
import { FaHome, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-[#FAF7F2] px-6 text-[#181411]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="artisan-card rounded-3xl p-10 sm:p-14 text-center max-w-lg bg-white"
      >
        <div className="text-8xl font-bold text-[#EAE4DC] font-heading mb-4 leading-none select-none">
          404
        </div>
        <h1 className="text-3xl font-bold tracking-tight mb-3 font-heading text-[#181411]">
          Recipe Not Found
        </h1>
        <p className="text-[#574F4A] text-sm sm:text-base mb-8 leading-relaxed">
          The page you're looking for doesn't exist or has moved. Let's get you back to the fresh bakes.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="btn-primary py-3.5 px-6 text-xs uppercase w-full sm:w-auto"
          >
            <FaHome size={13} />
            <span>Return Home</span>
          </Link>
          <Link
            to="/menu"
            className="btn-outline py-3.5 px-6 text-xs uppercase w-full sm:w-auto"
          >
            <span>Explore Menu</span>
            <FaArrowRight size={10} />
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default NotFound;
