// components/nav/HamburgerNav.jsx
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import "./HamburgerNav.css";

export default function HamburgerNav({ onPickCategory }) {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null); // "projects" | "qualifications" | "contacts" | null
  const buttonRef = useRef(null);
  const firstLinkRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstLinkRef.current?.focus();
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setActiveMenu(null);
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prev;
      buttonRef.current?.focus();
    };
  }, [open]);

  const closeAll = () => {
    setActiveMenu(null);
    setOpen(false);
  };

  const pick = (category) => {
    onPickCategory?.(category);   // notify parent if provided
    closeAll();
  };

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

      {/* Fade-able backdrop (stays mounted) */}
      <div
        className={`backdrop ${open ? "is-open" : ""}`}
        aria-hidden={!open}
        onClick={closeAll}
      />

      {/* LEFT COLUMN (col 1): vertical nav with gradient */}
      <ul
        id="site-vertical-nav"
        className={`grid-nav nav-background ${open ? "is-open" : ""}`}
        aria-label="Primary"
        aria-hidden={!open}
        /* hovering the whole left column shouldn't close things immediately */
        onMouseLeave={() => setActiveMenu(null)}
      >
        <li
          className="nav-projects"
          onMouseEnter={() => setActiveMenu("projects")}
        >
          <button
            className="nav-btn"
            ref={firstLinkRef}
            type="button"
            // keep click as accessibility fallback
            onClick={() => setActiveMenu("projects")}
          >
            Projects
          </button>
        </li>

        <li
          className="nav-qualifications"
          onMouseEnter={() => setActiveMenu("qualifications")}
        >
          <a className="nav-btn" href="#qualifications" onClick={closeAll}>
            Qualifications
          </a>
        </li>

        <li
          className="nav-contacts"
          onMouseEnter={() => setActiveMenu("contacts")}
        >
          <a className="nav-btn" href="#contacts" onClick={closeAll}>
            Contacts
          </a>
        </li>
      </ul>

      {/* RIGHT NEXT COLUMN (col 2): Projects submenu on HOVER */}
      {/* background for col2 */}
      <div
        className={`projects-col-bg ${
          open && activeMenu === "projects" ? "is-open" : ""
        }`}
        aria-hidden={!(open && activeMenu === "projects")}
        onMouseEnter={() => setActiveMenu("projects")}
        onMouseLeave={() => setActiveMenu(null)}
      />

      {/* submenu list */}
      <ul
        className={`projects-col ${
          open && activeMenu === "projects" ? "is-open" : ""
        }`}
        aria-label="Project categories"
        aria-hidden={!(open && activeMenu === "projects")}
        onMouseEnter={() => setActiveMenu("projects")}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <li className="proj-web">
          <button className="proj-btn" type="button" onClick={() => pick("web")}>
            WEB &amp; MOBILE DESIGN
          </button>
        </li>
        <li className="proj-mag">
          <button className="proj-btn" type="button" onClick={() => pick("magazine")}>
            MAGAZINE DESIGN
          </button>
        </li>
        <li className="proj-arch">
          <button className="proj-btn" type="button" onClick={() => pick("architectural")}>
            ARCHITECTURAL DESIGN
          </button>
        </li>
      </ul>
    </>
  );
}