// src/components/letters/LetterBox.jsx
import { useContinuousSpin } from "../../hooks/useContinuousSpin";

export default function LetterBox({
  children,
  className = "",
  style = {},
  base = 60,
  hover = 160,
}) {
  const spin = useContinuousSpin(base, hover);

  return (
    <div
      className={`title1-box ${className}`}
      ref={spin.ref}
      onMouseEnter={spin.onMouseEnter}
      onMouseLeave={spin.onMouseLeave}
      style={{
        "--persp": "900px",
        "--tilt-x": "0deg",
        "--tilt-z": "0deg",
        "--depth": "92px",
        "--angle": "0deg", // initial value, JS updates this
        ...style,
      }}
    >
      {children}
    </div>
  );
}
