'use client';

import { ReactLenis } from 'lenis/react';
import { useEffect } from 'react';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Disable native scroll restoration so Lenis doesn't fight with the browser on reload
    if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <ReactLenis 
      root 
      options={{ 
        duration: 1.2,
        lerp: 0.1,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        autoRaf: true,
        syncTouch: true,
        syncTouchLerp: 0.075,
      }}
    >
      {children as any}
    </ReactLenis>
  );
}
