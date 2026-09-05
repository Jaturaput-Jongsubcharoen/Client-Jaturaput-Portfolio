// src/components/branding/LogoReveal.jsx
import "./LogoReveal.css";
import logoSrc from "../../images/logos/jaturaput-logo1.webp";

export default function LogoReveal({ className = "" }) {
  return (
    <div className={`logo-reveal ${className}`}>
      {/* faint/grayscale back copy */}
      <img
        src={logoSrc}
        alt="Jaturaput logo (background)"
        className="logo-reveal__img logo-reveal__img--back"
        decoding="async"
      />
      {/* front copy is revealed by clip-path and gets the shadow/tint */}
      <img
        src={logoSrc}
        alt="Jaturaput logo"
        className="logo-reveal__img logo-reveal__img--front"
        decoding="async"
        draggable="false"
      />
    </div>
  );
}
