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
      <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6 text-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-400/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-600/5 rounded-full blur-[120px]"></div>
      </div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 glass-card p-12 rounded-3xl max-w-2xl w-full border border-zinc-800"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/20"
        >
          <FaCheckCircle className="text-4xl text-white" />
        </motion.div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          Thank <span className="text-yellow-400">You!</span>
        </h1>
        <p className="text-zinc-400 text-lg mb-10 leading-relaxed">
          We’ve received your message and will get back to you shortly. <br />
          We appreciate your interest in <span className="text-white font-semibold">Bread & Bite!</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-10">
          <a
            href="https://wa.me/919325629256"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-500 transition font-bold shadow-lg hover:shadow-green-500/20"
          >
            <FaWhatsapp size={20} /> Chat on WhatsApp
          </a>
          <a
            href="https://www.instagram.com/bread_and_bite/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl hover:opacity-90 transition font-bold shadow-lg hover:shadow-pink-500/20"
          >
            <FaInstagram size={20} /> Follow on Instagram
          </a>
        </div>

        <Link
          to="/"
          className="inline-block text-yellow-400 font-semibold hover:text-yellow-300 transition border-b border-yellow-400/30 hover:border-yellow-400 pb-0.5"
        >
          ← Go Back Home
        </Link>
      </motion.div>
      </div>
    </>
  );
};

export default ThankYou;
