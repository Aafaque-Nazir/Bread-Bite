import React from 'react';
import { FaWhatsapp, FaClock } from 'react-icons/fa';
import { useKitchenStatus } from '../hooks/useKitchenStatus';

const KitchenStatusBanner = () => {
  const { isOpen, subText } = useKitchenStatus();

  // Keep site completely clean when kitchen is open
  if (isOpen) return null;

  return (
    <aside 
      aria-label="Kitchen operating hours"
      className="bg-[#181411] text-[#EAE4DC] border-b border-white/10 px-4 py-2.5 text-xs relative z-50 select-none"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 text-center sm:text-left">
        <div className="flex items-center justify-center sm:justify-start gap-2 text-[11px] sm:text-xs text-[#EAE4DC] font-medium">
          <span className="font-bold text-[#FAF7F2] flex items-center gap-1.5">
            <FaClock size={11} className="text-[#B84A1C]" /> Kitchen Resting:
          </span>
          <span>
            Daily Slots: <strong>11:00 AM – 3:15 PM</strong> &amp; <strong>7:00 PM – 9:15 PM</strong> · {subText}
          </span>
        </div>

        <a
          href="https://wa.me/919325629256?text=Hi%20Bread%20%26%20Bite%2C%20I%20have%20an%20inquiry%20regarding%20advance%20orders%20or%20catering."
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#EAE4DC] hover:text-[#B84A1C] transition-colors whitespace-nowrap"
        >
          <FaWhatsapp size={13} className="text-[#25D366]" />
          <span>Advance Orders &amp; Inquiries</span>
        </a>
      </div>
    </aside>
  );
};

export default KitchenStatusBanner;
