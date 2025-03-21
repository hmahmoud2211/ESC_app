"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

type AnimationContextType = {
  hasSeenAnimation: boolean;
  setHasSeenAnimation: (value: boolean) => void;
};

const AnimationContext = createContext<AnimationContextType | undefined>(undefined);

export function AnimationProvider({ children }: { children: React.ReactNode }) {
  // Start with false (haven't seen animation) until we check localStorage
  const [hasSeenAnimation, setHasSeenAnimation] = useState(false);

  useEffect(() => {
    // Check if this is the first visit (only run on client side)
    if (typeof window !== 'undefined') {
      const hasVisitedBefore = localStorage.getItem('hasVisitedESC');

      if (hasVisitedBefore) {
        // User has seen animation before, skip it
        setHasSeenAnimation(true);
      } else {
        // First visit - show animation, then mark it as seen after timeout
        setHasSeenAnimation(false);

        const timer = setTimeout(() => {
          localStorage.setItem('hasVisitedESC', 'true');
          setHasSeenAnimation(true);
        }, 5000);

        return () => clearTimeout(timer);
      }
    }
  }, []);

  return (
    <AnimationContext.Provider value={{ hasSeenAnimation, setHasSeenAnimation }}>
      {children}
    </AnimationContext.Provider>
  );
}

export function useAnimation() {
  const context = useContext(AnimationContext);
  if (context === undefined) {
    throw new Error('useAnimation must be used within an AnimationProvider');
  }
  return context;
}
