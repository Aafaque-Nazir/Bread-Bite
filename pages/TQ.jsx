import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaInstagram, FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import SEO from '../src/components/SEO';

const ThankYou = () => {
  return (
    <>
      <SEO
        title="Thank You - Bread & Bite"
        description="Thank you for contacting Bread & Bite. We'll get back to you shortly!"
        url="/thank-you"
        noindex={true}
      />
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#FFFAF5] text-stone-900 px-6 text-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-orange-100/40 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-100/30 rounded-full blur-[100px]"></div>
      </div>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 bg-white p-12 rounded-3xl max-w-xl w-full border border-stone-100 shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/20"
        >
          <FaCheckCircle className="text-3xl text-white" />
        </motion.div>

        <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-3 font-heading">
          Thank <span className="text-orange-600">You!</span>
        </h1>
        <p className="text-stone-500 text-base mb-8 leading-relaxed">
          We've received your message and will get back to you shortly.<br />
          We appreciate your interest in <span className="text-stone-900 font-semibold">Bread & Bite!</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-3 items-center justify-center mb-8">
          <a
            href="https://wa.me/919325629256"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-green-600 text-white px-5 py-3 rounded-xl hover:bg-green-700 transition font-semibold text-sm shadow-lg shadow-green-600/20"
          >
            <FaWhatsapp size={18} /> Chat on WhatsApp
          </a>
          <a
            href="https://www.instagram.com/bread_and_bite/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-5 py-3 rounded-xl hover:opacity-90 transition font-semibold text-sm shadow-lg shadow-pink-500/20"
          >
            <FaInstagram size={18} /> Follow on Instagram
          </a>
        </div>

        <Link
          to="/"
          className="inline-block text-orange-600 font-semibold hover:text-orange-700 transition border-b border-orange-300 hover:border-orange-600 pb-0.5 text-sm"
        >
          ← Go Back Home
        </Link>
      </motion.div>
      </div>
    </>
  );
};

export default ThankYou;
