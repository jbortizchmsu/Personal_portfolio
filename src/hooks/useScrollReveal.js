import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook to trigger reveal animations when an element enters the viewport.
 * Uses the native IntersectionObserver API.
 * 
 * @param {Object} options - IntersectionObserver configuration options
 * @param {number} options.threshold - Trigger threshold (0.0 to 1.0)
 * @param {string} options.rootMargin - Margin around root viewport
 * @param {boolean} options.triggerOnce - If true, keeps element revealed once triggered
 * @returns {Object} { ref, isVisible }
 */
export function useScrollReveal({
  threshold = 0.12,
  rootMargin = '0px 0px -40px 0px',
  triggerOnce = true,
} = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(node);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(node);

    return () => {
      if (node) observer.unobserve(node);
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
}

export default useScrollReveal;
