import { useState, useEffect } from 'react';

/**
 * Custom hook for animation purposes.
 * Returns a boolean specifying whether an element is visible in the viewport.
 *
 * @param {Object} ref Reference to the element.
 * @param {number} offset Number of pixels to offset detection from the top of the element.
 */
const useScrollPosition = (ref, offset = 0) => {
  const [scrolled, setScrolled] = useState(false);

  const onScroll = () => {
    const pos = ref?.current?.offsetTop;
    const scrollPos = window.scrollY + window.innerHeight;

    if (pos + offset < scrollPos) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return scrolled;
};

export default useScrollPosition;
