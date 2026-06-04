import React from "react";
import { motion } from "framer-motion";
import { FaHome, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <section className="min-h-[85vh] flex items-center justify-center bg-[#FFFAF5] px-6">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center max-w-md"
            >
                <div className="text-9xl font-bold text-orange-600/10 font-heading mb-4 leading-none select-none">404</div>
                <h1 className="text-3xl font-bold text-stone-900 tracking-tight mb-3 font-heading">Page Not Found</h1>
                <p className="text-stone-500 text-base mb-8">
                    Oops! The page you're looking for doesn't exist or has been moved. Let's get you back on track.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 px-7 py-4 bg-orange-600 text-white font-semibold text-sm uppercase tracking-wider rounded-2xl hover:bg-orange-700 transition-all shadow-lg shadow-orange-600/20"
                    >
                        <FaHome /> Go Home
                    </Link>
                    <Link
                        to="/menu"
                        className="inline-flex items-center gap-2 px-7 py-4 bg-white border-2 border-stone-200 text-stone-700 font-semibold text-sm uppercase tracking-wider rounded-2xl hover:border-orange-300 hover:text-orange-600 transition-all"
                    >
                        View Menu <FaArrowRight className="text-xs" />
                    </Link>
                </div>
            </motion.div>
        </section>
    );
};

export default NotFound;
