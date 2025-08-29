import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import "./HamburgerNav.css";

export default function HamburgerNav() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef(null);
  const firstLinkRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstLinkRef.current?.focus();
    const onKeyDown = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prev;
      buttonRef.current?.focus();
    };
  }, [open]);

  return (
    <div className="hamburger-cell">{/* ← this is the grid child */}
      <button
        className={`hamburger ${open ? "is-open" : ""}`}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="site-vertical-nav"
        onClick={() => setOpen(o => !o)}
        ref={buttonRef}
      >
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        <FontAwesomeIcon icon={open ? faXmark : faBars} size="lg" />
      </button>

      {open && (
        <div className="backdrop" onClick={() => setOpen(false)}>
          <nav
            id="site-vertical-nav"
            className="drawer"
            aria-label="Primary"
            onClick={(e) => e.stopPropagation()}
          >
            <ul>
              <li><a href="#projects" ref={firstLinkRef} onClick={() => setOpen(false)}>Projects</a></li>
              <li><a href="#qualifications" onClick={() => setOpen(false)}>Qualifications</a></li>
              <li><a href="#contacts" onClick={() => setOpen(false)}>Contacts</a></li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}