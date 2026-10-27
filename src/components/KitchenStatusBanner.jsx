import React from 'react';
import { FaClock, FaWhatsapp, FaMotorcycle, FaFire } from 'react-icons/fa';
import { useKitchenStatus } from '../hooks/useKitchenStatus';

const KitchenStatusBanner = () => {
  const { isOpen, subText } = useKitchenStatus();

  const timingItems = [
    {
      label: "Lunch Slot",
      val: "11:00 AM – 3:15 PM",
      icon: <FaClock className="text-[#B84A1C]" size={11} />
    },
    {
      label: "Dinner Slot",
      val: "7:00 PM – 9:15 PM",
      icon: <FaClock className="text-[#B84A1C]" size={11} />
    },
    {
      label: "Status",
      val: isOpen ? "Kitchen Open" : (subText || "Dinner Slot Opens at 7:00 PM"),
      icon: <FaClock className="text-[#B84A1C]" size={11} />
    },
    {
      label: "Doorstep Delivery",
      val: "Taloja Phase 1 • Kharghar • Panvel • Kamothe • Kalamboli • Belapur",
      icon: <FaClock className="text-[#B84A1C]" size={11} />
    },
    {
      label: "Free Delivery",
      val: "On Orders Above ₹499",
      icon: <FaClock className="text-[#B84A1C]" size={11} />
    },
    {
      label: "Direct Orders",
      val: "WhatsApp: +91 93256 29256",
      icon: <FaWhatsapp className="text-[#B84A1C]" size={11} />
    }
  ];

  return (
    <aside 
      aria-label="Kitchen operating timings marquee"
      className="bg-[#181411] text-[#EAE4DC] border-b border-white/10 h-7 sm:h-7.5 flex items-center overflow-hidden relative z-50 select-none text-[11px] sm:text-xs"
    >
      <div className="animate-marquee-track flex items-center">
        {/* Track 1 */}
        <div className="flex items-center gap-7 sm:gap-9 shrink-0 pr-7 sm:pr-9">
          {timingItems.map((item, idx) => (
            <div key={`track1-${idx}`} className="flex items-center gap-2 whitespace-nowrap">
              {item.icon}
              <span className="text-[#8C827A] font-medium tracking-wide uppercase text-[10px] sm:text-[10.5px]">
                {item.label}:
              </span>
              <span className="font-semibold text-[#FAF7F2]">
                {item.val}
              </span>
              <span className="text-white/20 ml-5 font-normal">✦</span>
            </div>
          ))}
        </div>

        {/* Track 2 (Duplicate for continuous seamless loop) */}
        <div className="flex items-center gap-7 sm:gap-9 shrink-0 pr-7 sm:pr-9" aria-hidden="true">
          {timingItems.map((item, idx) => (
            <div key={`track2-${idx}`} className="flex items-center gap-2 whitespace-nowrap">
              {item.icon}
              <span className="text-[#8C827A] font-medium tracking-wide uppercase text-[10px] sm:text-[10.5px]">
                {item.label}:
              </span>
              <span className="font-semibold text-[#FAF7F2]">
                {item.val}
              </span>
              <span className="text-white/20 ml-5 font-normal">✦</span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default KitchenStatusBanner;
