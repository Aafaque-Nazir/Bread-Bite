import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaMapMarkerAlt, FaClock, FaPaperPlane, FaCheckCircle, FaChevronDown, FaMotorcycle } from 'react-icons/fa';
import SEO from "../src/components/SEO";
import { FAQS } from '../data/faqs';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const cleanPhone = formData.phone.replace(/[\s-+]/g, '').replace(/^91/, '').replace(/^0/, '');
    const inquiryText = `👋 *NEW INQUIRY - BREAD & BITE*\n\n👤 *Customer:* ${formData.name.trim()}\n📞 *Phone:* +91 ${cleanPhone}\n\n💬 *Message:*\n"${formData.message.trim()}"\n\n_Sent via Bread & Bite Website_`;
    const whatsappUrl = `https://wa.me/919325629256?text=${encodeURIComponent(inquiryText)}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <section className="relative min-h-screen bg-[#FAF7F2] pt-6 sm:pt-10 pb-24 px-4 sm:px-6 overflow-hidden text-[#181411]">
      <SEO
        title="Contact Bread & Bite | Order Food in Navi Mumbai"
        description="Get in touch with Bread & Bite. Order via WhatsApp at +91 93256 29256 or find our cloud kitchen in Taloja Phase 1. Fast Navi Mumbai delivery."
        url="/contact/"
        keywords="bread and bite contact, food delivery taloja phase 1, whatsapp food order navi mumbai, restaurant contact kharghar, cloud kitchen address taloja, tiffin service taloja navi mumbai, panvel food delivery hotline"
        faqs={FAQS}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#B84A1C] block mb-2">
            We're Here To Help
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight mb-3 font-heading leading-tight">
            Get In <span className="font-italic-accent text-[#B84A1C]">Touch</span>
          </h1>
          <p className="text-[#574F4A] text-xs sm:text-base leading-relaxed max-w-lg mx-auto">
            Have questions about an order, party bookings, or custom meals? We are always happy to help.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-start mb-20 sm:mb-24">
          {/* Information Column (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="artisan-card p-5 sm:p-7 rounded-3xl bg-white space-y-5">
              <h3 className="text-lg sm:text-xl font-bold font-heading text-[#181411]">Quick Access</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#EEF6F2] text-[#2A6A4E] flex items-center justify-center text-xl shrink-0">
                    <FaWhatsapp />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#8C827A] block">
                      Direct WhatsApp Hotline
                    </span>
                    <a
                      href="https://wa.me/919325629256"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-bold text-[#181411] hover:text-[#B84A1C] transition-colors"
                    >
                      +91 93256 29256
                    </a>
                    <p className="text-xs text-[#8C827A] mt-0.5">Quick replies & order support</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#FDF3ED] text-[#B84A1C] flex items-center justify-center text-xl shrink-0">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#8C827A] block">
                      Central Kitchen
                    </span>
                    <p className="text-base font-bold text-[#181411]">Taloja Phase 1, Navi Mumbai</p>
                    <p className="text-xs text-[#8C827A] mt-0.5">Serving Kharghar, Panvel & Belapur</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#FAF7F2] text-[#574F4A] flex items-center justify-center text-xl shrink-0 border border-[#EAE4DC]">
                    <FaClock />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#8C827A] block">
                      Kitchen Hours
                    </span>
                    <p className="text-base font-bold text-[#181411]">10:00 AM – 9:00 PM Daily</p>
                    <p className="text-xs text-[#8C827A] mt-0.5">Breakfast, Lunch & Dinner</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Delivery Radius Card */}
            <div className="artisan-card p-6 rounded-3xl bg-white border border-[#EAE4DC] flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#FAF7F2] border border-[#EAE4DC] flex items-center justify-center text-[#B84A1C] shrink-0 text-xl">
                <FaMotorcycle />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#181411] font-heading">Navi Mumbai Delivery Radius</h4>
                <p className="text-xs text-[#574F4A] mt-0.5">
                  Taloja · Kharghar · Kamothe · Panvel · Belapur
                </p>
              </div>
            </div>
          </div>

          {/* Form Column (7 cols) */}
          <div className="lg:col-span-7 artisan-card p-5 sm:p-9 rounded-3xl bg-white">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#181411] mb-1">
                      Send a Direct Message
                    </h3>
                    <p className="text-xs text-[#574F4A]">
                      Fill out the form below and we'll format your inquiry directly on WhatsApp.
                    </p>
                  </div>

                  <div className="space-y-3.5">
                    <div>
                      <label className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#8C827A] mb-1.5">
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#FAF7F2] border border-[#EAE4DC] rounded-xl px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm text-[#181411] placeholder-[#8C827A] focus:outline-none focus:border-[#B84A1C] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#8C827A] mb-1.5">
                        Mobile Number
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="10-digit mobile number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#FAF7F2] border border-[#EAE4DC] rounded-xl px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm text-[#181411] placeholder-[#8C827A] focus:outline-none focus:border-[#B84A1C] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#8C827A] mb-1.5">
                        Your Message / Inquiry
                      </label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Ask about party catering, special requests, or order inquiries..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-[#FAF7F2] border border-[#EAE4DC] rounded-xl px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm text-[#181411] placeholder-[#8C827A] focus:outline-none focus:border-[#B84A1C] transition-colors resize-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full py-3.5 sm:py-4 text-xs sm:text-sm uppercase tracking-wider font-bold shadow-tactile-md"
                  >
                    <FaPaperPlane size={13} />
                    <span>Send via WhatsApp</span>
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10 space-y-4"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#EEF6F2] text-[#2A6A4E] rounded-full flex items-center justify-center text-2xl mx-auto border border-[#2A6A4E]/30">
                    <FaCheckCircle />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#181411]">Message Ready!</h3>
                  <p className="text-xs sm:text-sm text-[#574F4A] max-w-sm mx-auto leading-relaxed">
                    We've formatted your inquiry in WhatsApp. If your chat didn't open automatically, tap below:
                  </p>
                  <div className="pt-2">
                    <a
                      href={`https://wa.me/919325629256?text=${encodeURIComponent(`👋 Hi Bread & Bite, I am ${formData.name}. ${formData.message}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary py-3 px-6 text-xs uppercase font-bold"
                    >
                      <FaWhatsapp size={15} />
                      <span>Open WhatsApp Now</span>
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════════
            FAQ ACCORDION
        ═══════════════════════════════════════════════════════════════════ */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8 sm:mb-10">
            <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#B84A1C] block mb-2">
              Common Questions
            </span>
            <h2 className="text-2xl sm:text-4xl font-normal font-heading text-[#181411]">
              Frequently Asked <span className="font-italic-accent text-[#B84A1C]">Questions</span>
            </h2>
          </div>

          <div className="space-y-3.5">
            {FAQS.map((faq, index) => (
              <div
                key={index}
                className="artisan-card rounded-2xl overflow-hidden bg-white"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
                >
                  <span className="font-bold text-[#181411] text-sm sm:text-base font-heading pr-4">
                    {faq.question}
                  </span>
                  <FaChevronDown
                    className={`text-[#8C827A] transition-transform duration-200 shrink-0 ${
                      openFaq === index ? 'rotate-180 text-[#B84A1C]' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-6 pb-5 pt-0 text-[#574F4A] text-xs sm:text-sm leading-relaxed border-t border-[#EAE4DC] mt-1 pt-3.5">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;