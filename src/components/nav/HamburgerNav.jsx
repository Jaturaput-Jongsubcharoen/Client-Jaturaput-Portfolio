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
    <>
      {/* Button centered in grid cell (1,1) */}
      <div className="hamburger-cell">
        <button
          className={`hamburger ${open ? "is-open" : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="site-vertical-nav"
          onClick={() => setOpen(o => !o)}
          ref={buttonRef}
        >
          <span className="hamburger-text">{open ? "Close" : "Menu"}</span>
        </button>
      </div>

      {/* Keep these mounted and animate with a class */}
      <div
        className={`backdrop ${open ? "is-open" : ""}`}
        aria-hidden={!open}
        onClick={() => setOpen(false)}
      />

      {/* Stays in the grid; fades in/out smoothly */}
      <ul
        id="site-vertical-nav"
        className={`grid-nav nav-background ${open ? "is-open" : ""}`}
        aria-label="Primary"
        aria-hidden={!open}
      >
        <li className="nav-projects">
          <a href="#projects" ref={firstLinkRef} onClick={() => setOpen(false)}>
            Projects
          </a>
        </li>
        <li className="nav-qualifications">
          <a href="#qualifications" onClick={() => setOpen(false)}>
            Qualifications
          </a>
        </li>
        <li className="nav-contacts">
          <a href="#contacts" onClick={() => setOpen(false)}>
            Contacts
          </a>
        </li>
      </ul>
    </>
  );
}