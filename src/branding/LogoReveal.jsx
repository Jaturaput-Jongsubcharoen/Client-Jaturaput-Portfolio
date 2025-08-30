// src/components/branding/LogoReveal.jsx
import "./LogoReveal.css";
import logoSrc from "../images/logos/jaturaput-logo.png";

export default function LogoReveal({ className = "" }) {
  return (
    <div className={`logo-reveal ${className}`}>
      {/* faint/grayscale back copy */}
      <img
        src={logoSrc}
        alt="Jaturaput logo (background)"
        className="logo-reveal__img logo-reveal__img--back"
      />
      {/* front copy is revealed by clip-path and gets the shadow/tint */}
      <img
        src={logoSrc}
        alt="Jaturaput logo"
        className="logo-reveal__img logo-reveal__img--front"
        draggable="false"
      />
    </div>
  );
}
