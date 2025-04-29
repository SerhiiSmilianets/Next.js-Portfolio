'use client';

import { useEffect, useState } from 'react';

export const useIsMobile = (breakpoint = 769) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      const userAgent = typeof window !== 'undefined' ? navigator.userAgent : '';
      const isMobileDevice = /iPhone|iPad|iPod|Android/i.test(userAgent);
      const isSmallScreen = window.innerWidth < breakpoint;

      setIsMobile(isMobileDevice || isSmallScreen);
    };

    checkIsMobile(); // Initial check
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, [breakpoint]);

  return isMobile;
};
