import { useContinuousSpin } from "../../hooks/useContinuousSpin";

export default function LetterBox({
  className = "",
  base = 60,           // deg/sec
  hover = 160,         // deg/sec
  tiltX = "0deg",
  tiltZ = "0deg",
  depth = "92px",
  children,
}) {
  const spin = useContinuousSpin(base, hover);

  return (
    <div
      className={`title1-box ${className}`}
      ref={spin.ref}
      onMouseEnter={spin.onMouseEnter}
      onMouseLeave={spin.onMouseLeave}
      style={{ "--tilt-x": tiltX, "--tilt-z": tiltZ, "--depth": depth }}
    >
      {children}
    </div>
  );
}
