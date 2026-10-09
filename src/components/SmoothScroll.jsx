import { useEffect } from 'react';
import Lenis from 'lenis';

/**
 * SmoothScroll sets up modern Lenis on mouse/trackpad screens for buttery 60fps wheel scrolling,
 * while leaving mobile touch screens on native 120Hz hardware momentum scrolling for zero input lag.
 */
const SmoothScroll = () => {
  useEffect(() => {
    // Keep native 120Hz hardware momentum scrolling on phones & touch devices
    const isTouchDevice = typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      autoRaf: true,
      respectReducedMotion: true,
    });

    window.__lenis = lenis;

    return () => {
      lenis.destroy();
      delete window.__lenis;
    };
  }, []);

  return null;
};

export default SmoothScroll;
