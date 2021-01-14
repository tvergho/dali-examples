import { useState, useEffect } from 'react';

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [isMobile, setIsMobile] = useState(windowSize.width <= 768);

  function changeWindowSize() {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    setIsMobile(window.innerWidth <= 768);
  }

  useEffect(() => {
    changeWindowSize();
    window.addEventListener('resize', changeWindowSize, { passive: true });

    return () => {
      window.removeEventListener('resize', changeWindowSize);
    };
  }, []);

  return { ...windowSize, isMobile };
}
