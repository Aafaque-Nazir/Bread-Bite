import { useEffect } from 'react';
import Lenis from 'lenis';

/**
 * SmoothScroll sets up Lenis with responsive 0.8s inertia.
 * Exposes window.__lenis for programmatic navigation and route resets.
 */
const SmoothScroll = () => {
  useEffect(() => {
    // Respect OS accessibility preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 0.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.4,
      infinite: false,
    });

    window.__lenis = lenis;

    let rafId;
    const updateRaf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(updateRaf);
    };

    rafId = requestAnimationFrame(updateRaf);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      lenis.destroy();
      delete window.__lenis;
    };
  }, []);

  return null;
};

export default SmoothScroll;
