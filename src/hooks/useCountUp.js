import { useEffect, useRef, useState } from "react";

/**
 * Counts from 0 up to `target` once the returned ref enters the viewport.
 * Honors prefers-reduced-motion by snapping straight to the target.
 *
 * @param {number} target   Final value to count to.
 * @param {number} duration Animation length in ms.
 * @returns {[React.RefObject, number]} [ref, currentValue]
 */
export default function useCountUp(target, duration = 1600) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return undefined;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setValue(target);
      return undefined;
    }

    let frame = 0;
    let start = 0;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      // easeOutCubic for a natural settle
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) frame = window.requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          frame = window.requestAnimationFrame(step);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(frame);
    };
  }, [target, duration]);

  return [ref, value];
}
