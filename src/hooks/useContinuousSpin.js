import { useEffect, useRef, useState } from "react";

export function useContinuousSpin(baseDegPerSec = 60, hoverDegPerSec = 160) {
  const ref = useRef(null);
  const [speed, setSpeed] = useState(baseDegPerSec);

  useEffect(() => {
    let raf, last = performance.now();
    let angle = 0;

    const loop = (now) => {
      const dt = (now - last) / 1000;
      last = now;
      angle = (angle + speed * dt) % 720;
      if (ref.current) ref.current.style.setProperty("--angle", angle + "deg");
      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [speed]);

  return {
    ref,
    onMouseEnter: () => setSpeed(hoverDegPerSec),
    onMouseLeave: () => setSpeed(baseDegPerSec),
  };
}
