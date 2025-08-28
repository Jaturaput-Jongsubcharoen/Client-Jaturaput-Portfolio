import { useState, useEffect, useRef } from "react";
import "../../styles/ContactsMenu.css"; // add this file below
import contactLinks from "../../data/JaturaputContacts";


export default function ContactsMenu({ locationClass = "" }) {
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);

  // close on outside click / Esc
  useEffect(() => {
    function onDocClick(e) {
      if (panelRef.current && !panelRef.current.contains(e.target)) setOpen(false);
    }
    function onEsc(e) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onEsc);
    };
  }, []);

  return (
    <div className={`contact-menu ${locationClass}`} ref={panelRef}>
      {/* Toggle = same visual block as your "CONTACT" tile */}
      <button
        className={`grid-nav0-1-Contact contact-toggle ${open ? "active" : ""}`}
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls="contact-panel"
      >
        CONTACT
      </button>

      {open && (
        <div id="contact-panel" className="contact-panel">
          <div className="contact-grid">
            {contactLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card hidingHyperLink"
                title={l.display}
              >
                <span className="contact-label">{l.label}</span>
                <span className="contact-value">{l.display}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
