import React, { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaWhatsapp, FaInstagram, FaCheckCircle, FaReceipt, FaMotorcycle, FaArrowLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';
import SEO from '../src/components/SEO';

const ThankYou = () => {
  const location = useLocation();

  const orderData = useMemo(() => {
    if (location.state?.orderId) {
      return location.state;
    }
    try {
      const saved = sessionStorage.getItem('bread_and_bite_last_order');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  }, [location.state]);

  const whatsappUrl = orderData?.whatsappUrl || 'https://wa.me/919325629256';

  return (
    <>
      <SEO
        title="Order Confirmation | Bread & Bite Navi Mumbai"
        description="Thank you for choosing Bread & Bite. Your order details are confirmed and our kitchen team is preparing your fresh meal in Navi Mumbai."
        url="/thank-you"
        noindex={true}
      />
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#FAF7F2] text-[#181411] px-4 sm:px-6 py-10 sm:py-16 text-center relative overflow-hidden">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="relative z-10 bg-white p-6 sm:p-12 rounded-3xl max-w-lg w-full border border-[#EAE4DC] shadow-tactile-lg"
        >
          <div className="w-16 h-16 bg-[#EEF6F2] text-[#2A6A4E] rounded-full flex items-center justify-center mx-auto mb-6 border border-[#2A6A4E]/20">
            <FaCheckCircle className="text-3xl" />
          </div>

          {orderData?.orderId ? (
            <>
              <div className="inline-flex items-center gap-1.5 text-[#B84A1C] text-xs font-bold uppercase tracking-wider mb-3">
                <FaReceipt /> Order #{orderData.orderId}
              </div>

              <h1 className="text-3xl sm:text-4xl font-normal text-[#181411] mb-3 font-heading">
                Order <span className="font-italic-accent text-[#B84A1C]">Placed!</span>
              </h1>

              <p className="text-[#574F4A] text-sm mb-6 leading-relaxed">
                {orderData.customerName ? `Thanks, ${orderData.customerName}! ` : 'Thank you! '}
                Your order details are ready. Please make sure you tap <strong>Send</strong> in WhatsApp so our kitchen team receives it.
              </p>

              {orderData.grandTotal && (
                <div className="bg-[#FAF7F2] rounded-2xl p-4 border border-[#EAE4DC] mb-6 flex items-center justify-between text-left">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white border border-[#EAE4DC] text-[#B84A1C] flex items-center justify-center">
                      <FaMotorcycle size={17} />
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold text-[#8C827A] uppercase tracking-wider">Total Bill</p>
                      <p className="text-lg font-bold text-[#181411] font-heading">₹{orderData.grandTotal}</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-[#2A6A4E] bg-[#EEF6F2] px-2.5 py-1 rounded-full border border-[#2A6A4E]/20">
                    Pay on Delivery / UPI
                  </span>
                </div>
              )}
            </>
          ) : (
            <>
              <h1 className="text-3xl sm:text-4xl font-normal text-[#181411] mb-3 font-heading">
                Thank <span className="font-italic-accent text-[#B84A1C]">You!</span>
              </h1>
              <p className="text-[#574F4A] text-sm mb-8 leading-relaxed">
                We've received your message and will get back to you shortly.
                We appreciate your love for <strong className="text-[#181411]">Bread & Bite!</strong>
              </p>
            </>
          )}

          <div className="flex flex-col sm:flex-row gap-3 items-center justify-center mb-8">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:flex-1 py-3.5 text-xs uppercase"
            >
              <FaWhatsapp size={16} />
              <span>{orderData ? 'Open WhatsApp Chat' : 'Chat on WhatsApp'}</span>
            </a>
            <a
              href="https://www.instagram.com/bread_and_bite/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline w-full sm:flex-1 py-3.5 text-xs uppercase"
            >
              <FaInstagram size={16} />
              <span>Instagram</span>
            </a>
          </div>

          <Link
            to="/menu"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#B84A1C] hover:text-[#9C3B12] transition-colors"
          >
            <FaArrowLeft size={10} />
            <span>Back to Menu</span>
          </Link>
        </motion.div>
      </div>
    </>
  );
};

export default ThankYou;
