import { useEffect, useState } from 'react';

export const useHeroNameVisibility = (enabled: boolean) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!enabled) {
      setIsVisible(true);
      return;
    }

    let observer: IntersectionObserver | null = null;
    let rafId = 0;
    let attempts = 0;

    const connectObserver = () => {
      const heroName = document.getElementById('home-hero-name');

      if (!heroName) {
        attempts += 1;

        if (attempts < 40) {
          rafId = window.requestAnimationFrame(connectObserver);
          return;
        }

        setIsVisible(false);
        return;
      }

      observer = new IntersectionObserver(
        ([entry]) => {
          setIsVisible(entry.isIntersecting);
        },
        { threshold: 0.2 }
      );

      observer.observe(heroName);
    };

    connectObserver();

    return () => {
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }

      observer?.disconnect();
    };
  }, [enabled]);

  return isVisible;
};
