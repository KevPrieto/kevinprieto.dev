'use client';

import { createContext, useContext, useEffect, useRef, useState, ReactNode, useCallback } from 'react';
import Lenis from 'lenis';
import { useReducedMotion } from './use-reduced-motion';

interface MotionContextValue {
  shouldReduceMotion: boolean;
  lenis: Lenis | null;
}

const MotionContext = createContext<MotionContextValue>({
  shouldReduceMotion: false,
  lenis: null,
});

export function useMotion() {
  return useContext(MotionContext);
}

interface MotionProviderProps {
  children: ReactNode;
}

export function MotionProvider({ children }: MotionProviderProps) {
  const shouldReduceMotion = useReducedMotion();
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const rafIdRef = useRef<number | null>(null);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (shouldReduceMotion) {
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
        setLenis(null);
      }
      return;
    }

    const lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    });

    lenisRef.current = lenisInstance;
    setLenis(lenisInstance);

    function raf(time: number) {
      lenisInstance.raf(time);
      rafIdRef.current = requestAnimationFrame(raf);
    }

    rafIdRef.current = requestAnimationFrame(raf);

    return () => {
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
      lenisInstance.destroy();
      lenisRef.current = null;
    };
  }, [shouldReduceMotion]);

  return (
    <MotionContext.Provider value={{ shouldReduceMotion, lenis }}>
      {children}
    </MotionContext.Provider>
  );
}
