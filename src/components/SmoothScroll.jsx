import { useEffect } from 'react';
import Lenis from 'lenis';

/**
 * SmoothScroll sets up modern Lenis on mouse/trackpad screens for buttery 60fps wheel scrolling,
 * while leaving mobile touch screens on native 120Hz hardware momentum scrolling for zero input lag.
 */
const SmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      wheelMultiplier: 1.0,
      smoothWheel: true,
      syncTouch: false,
    });

    window.__lenis = lenis;

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      delete window.__lenis;
    };
  }, []);

  return null;
};

export default SmoothScroll;
