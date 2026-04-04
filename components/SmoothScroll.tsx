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
        lerp: 0.1, 
        duration: 1.5, 
        smoothWheel: true,
        autoRaf: true,
        syncTouch: true
      }}
    >
      {children as any}
    </ReactLenis>
  );
}
