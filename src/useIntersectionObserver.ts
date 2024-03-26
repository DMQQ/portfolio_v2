import { useState, useEffect } from "react";

interface IntersectionOptions {
  threshold?: number | number[];
  root?: Element | null;
  rootMargin?: string;
}

function useIntersectionObserver(
  targetId: string,
  options: IntersectionOptions
): boolean {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    const element = document.getElementById(targetId);
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [targetId, options]);

  return isVisible;
}

export default useIntersectionObserver;
