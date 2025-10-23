// Fix: Import `RefObject` type to resolve `React` namespace error.
import { useEffect, useState, useRef, type RefObject } from 'react';

// Fix: Use `RefObject` type directly.
export const useInView = <T extends HTMLElement,>(options?: IntersectionObserverInit): [RefObject<T>, boolean] => {
  const ref = useRef<T>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        // Optional: unobserve after it's in view
        // observer.unobserve(entry.target);
      }
    }, options);

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, options]);

  return [ref, isInView];
};