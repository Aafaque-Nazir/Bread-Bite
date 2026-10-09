import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import Autoplay from 'embla-carousel-autoplay';

const TestSlider = ({ testimonials }) => {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'center' }, [Autoplay({ delay: 5000 })]);

  return (
    <div className="embla w-full max-w-4xl mx-auto">
      <div className="embla__viewport overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="embla__slide flex-shrink-0 w-full px-4"
            >
              <div className="artisan-card rounded-3xl p-8 sm:p-12 shadow-warm relative bg-white">
                <div className="flex items-start gap-5">
                  {/* Initials Avatar */}
                  <div className="w-14 h-14 rounded-2xl bg-[#FDF3ED] text-[#B84A1C] border border-[#EAE4DC] flex items-center justify-center font-bold font-heading text-xl shrink-0">
                    {t.name.charAt(0)}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-1 mb-3 text-[#D97706] text-xs">
                      {[...Array(t.rating || 5)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>

                    <p className="text-[#181411] text-base sm:text-lg leading-relaxed italic mb-6 font-medium">
                      "{t.text}"
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-[#EAE4DC]">
                      <div>
                        <h4 className="text-base font-bold text-[#181411] font-heading">{t.name}</h4>
                        <p className="text-xs text-[#8C827A]">{t.location}</p>
                      </div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-[#B84A1C] bg-[#FAF7F2] px-3 py-1 rounded-full border border-[#EAE4DC]">
                        Verified Diner
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestSlider;