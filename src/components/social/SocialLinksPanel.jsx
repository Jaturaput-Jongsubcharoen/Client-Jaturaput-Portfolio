// src/components/social/SocialLinksPanel.jsx
// src/components/social/SocialLinksPanel.jsx
import { FaGithub, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import links from "../../data/JaturaputSocialLink";
import "./SocialLinksPanel.css";

const ICONS = {
  github: FaGithub,
  linkedin: FaLinkedin,
  instagram: FaInstagram,
  youtube: FaYoutube,
};

export default function SocialLinksPanel() {
  return (
    <>
      <section className="social-panel" aria-label="Social links">
        <div className="social-panel__track" role="list">
          {links.map(({ id, label, url }) => {
            const Icon = ICONS[id];
            if (!Icon) return null; // skip unknown ids safely
            return (
              <a
                key={id}
                role="listitem"
                className={`social-panel__item social-panel__item--${id}`}
                href={url}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={label}
              >
                <Icon className="social-panel__icon" />
              </a>
            );
          })}
        </div>
      </section>
    </>
  );
}
