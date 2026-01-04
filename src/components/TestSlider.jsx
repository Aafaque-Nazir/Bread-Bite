import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import Autoplay from 'embla-carousel-autoplay';

const TestSlider = ({ testimonials }) => {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'center' }, [Autoplay({ delay: 5000 })]);

  return (
    <div className="embla w-full max-w-4xl mx-auto mt-12">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container flex">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="embla__slide flex-shrink-0 w-full px-4"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-zinc-800 to-black rounded-2xl p-8 shadow-2xl border border-yellow-400/20 backdrop-blur-sm"
              >
                <div className="flex items-start gap-4">
                  {/* Avatar */}
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 flex items-center justify-center text-black font-bold text-lg">
                    {t.name.charAt(0)}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400 text-sm" />
                      ))}
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">{t.name}</h4>
                    <p className="text-zinc-300 italic relative pl-6">
                      <FaQuoteLeft className="absolute left-0 top-0 text-yellow-400/50 text-lg" />
                      {t.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Optional: Dots Navigation */}
      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            className="w-3 h-3 rounded-full bg-zinc-700 hover:bg-yellow-400 transition"
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestSlider;