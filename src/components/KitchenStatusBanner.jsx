import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { useKitchenStatus } from '../hooks/useKitchenStatus';

const KitchenStatusBanner = () => {
  const { isOpen } = useKitchenStatus();

  // Keep site completely clean when kitchen is open during normal hours
  if (isOpen) return null;

  return (
    <aside 
      aria-label="Kitchen operating hours"
      className="bg-[#181411] text-[#EAE4DC] border-b border-white/10 px-4 py-2 text-xs relative z-50 select-none"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-4 text-center sm:text-left">
        <p className="text-[11px] sm:text-xs text-[#EAE4DC] font-medium tracking-wide">
          <span className="text-[#B84A1C] font-semibold mr-1.5">🌙 Kitchen Resting:</span>
          We cook fresh daily from 10:00 AM – 9:00 PM. Browse our menu freely; live orders reopen at 10:00 AM.
        </p>

        <a
          href="https://wa.me/919325629256?text=Hi%20Bread%20%26%20Bite%2C%20I%20have%20an%20inquiry%20regarding%20advance%20orders%20or%20catering."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#EAE4DC] hover:text-[#B84A1C] transition-colors whitespace-nowrap"
        >
          <FaWhatsapp size={13} className="text-[#25D366]" />
          <span>Advance Party Inquiry</span>
        </a>
      </div>
    </aside>
  );
};

export default KitchenStatusBanner;
