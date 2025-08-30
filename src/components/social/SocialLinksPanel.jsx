// src/components/social/SocialLinksPanel.jsx
// Uses react-icons for simplicity. If you prefer Font Awesome packages,
// swap the imports accordingly (notes in the CSS file comment below).
import { FaGithub, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import "./SocialLinksPanel.css";

export default function SocialLinksPanel() {
  return (
    <section className="social-panel" aria-label="Social links">
      {/* liquid glass background is via ::before in CSS */}
      <div className="social-panel__track" role="list">
        <a
          role="listitem"
          className="social-panel__item"
          href="https://github.com/Jaturaput-Jongsubcharoen"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="GitHub"
        >
          <FaGithub className="social-panel__icon" />
        </a>

        <a
          role="listitem"
          className="social-panel__item"
          href="https://www.linkedin.com/in/jaturaput-jongsubcharoen/"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="social-panel__icon" />
        </a>

        <a
          role="listitem"
          className="social-panel__item"
          href="https://www.instagram.com/mackerale/"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Instagram"
        >
          <FaInstagram className="social-panel__icon" />
        </a>

        <a
          role="listitem"
          className="social-panel__item"
          href="https://www.youtube.com/@ByMonalist"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="YouTube"
        >
          <FaYoutube className="social-panel__icon" />
        </a>

        {/* add more icons if you want; they’ll scroll */}
      </div>
    </section>
  );
}
