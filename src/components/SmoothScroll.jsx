import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

export default function SmoothScroll() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let lenis;

    const configureScroll = () => {
      lenis?.destroy();
      lenis = undefined;

      if (reducedMotion.matches) return;

      lenis = new Lenis({
        autoRaf: true,
        anchors: {
          offset: -80,
        },
        duration: 1.05,
        smoothWheel: true,
        wheelMultiplier: 0.9,
        stopInertiaOnNavigate: true,
      });
    };

    configureScroll();
    reducedMotion.addEventListener("change", configureScroll);

    return () => {
      reducedMotion.removeEventListener("change", configureScroll);
      lenis?.destroy();
    };
  }, []);

  return null;
}
