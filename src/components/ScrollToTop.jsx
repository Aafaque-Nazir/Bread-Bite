import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop ensures that navigating between routes or query parameters
 * resets the window scroll position to the top of the page immediately,
 * preventing users from landing at the bottom/footer of the target page.
 */
const ScrollToTop = () => {
  const { pathname, search } = useLocation();

  useEffect(() => {
    // Reset scroll immediately upon navigation via Lenis or native fallback
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
    }
  }, [pathname, search]);

  return null;
};

export default ScrollToTop;
