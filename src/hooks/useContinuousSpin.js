// src/hooks/useContinuousSpin.js
import { useEffect, useRef, useCallback } from "react";

export function useContinuousSpin(baseSpeed = 60, hoverSpeed = 160) {
  const ref = useRef(null);
  const angleRef = useRef(0);
  const speedRef = useRef(baseSpeed);
  const rafRef = useRef(null);
  const lastRef = useRef(performance.now());

  const tick = useCallback((now) => {
    const dt = (now - lastRef.current) / 1000; // seconds
    lastRef.current = now;

    // update angle
    angleRef.current = (angleRef.current + speedRef.current * dt) % 360;

    // push to CSS custom property
    if (ref.current) {
      ref.current.style.setProperty("--angle", `${angleRef.current}deg`);
    }

    rafRef.current = requestAnimationFrame(tick);
  }, []);

  useEffect(() => {
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [tick]);

  const onMouseEnter = () => {
    speedRef.current = hoverSpeed;
  };

  const onMouseLeave = () => {
    speedRef.current = baseSpeed;
  };

  return { ref, onMouseEnter, onMouseLeave };
}