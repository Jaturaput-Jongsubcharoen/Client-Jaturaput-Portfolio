// components/nav/HamburgerNav.jsx
import { useEffect, useRef, useState } from "react";
import "./HamburgerNav.css";
import "../../styles/layout/ResponsiveGrid.css";

import SubProjectsNav from "./SubProjectsNav";
import SubQualificationsNav from "./SubQualificationsNav";

export default function HamburgerNav({ onPickCategory }) {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null); // "projects" | "qualifications" | "contacts"
  // docPanel now supports MULTIPLE docs:
  // { title, items: [{src,fileName}], index }
  const [docPanel, setDocPanel] = useState(null);

  const buttonRef = useRef(null);
  const firstLinkRef = useRef(null);

  // Helpers to open docs
// Helpers to open docs (supports strings or {src,name} objects)
const openDocuments = (title, list) => {
  const items = (list || []).map(item => {
    const src  = typeof item === "string" ? item : item.src;
    const name = typeof item === "string" ? undefined : item.name;
    return { src, name, fileName: src.split("/").pop() || src };
  });
  setDocPanel({ title, items, index: 0 });
  setActiveMenu(null);
  setOpen(false);
};

  // Single-doc convenience wrapper
  const openDocument = (title, src, name) =>
    openDocuments(title, [{ src, name }]);
  const closeDocument = () => setDocPanel(null);

  // Nav within docs
  const goToPrevDoc = () =>
    setDocPanel(p => (!p ? p : ({ ...p, index: (p.index - 1 + p.items.length) % p.items.length })));
  const goToNextDoc = () =>
    setDocPanel(p => (!p ? p : ({ ...p, index: (p.index + 1) % p.items.length })));

  // Body lock + keyboard: Esc closes; arrows navigate docs
  useEffect(() => {
    if (!open && !docPanel) return;

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    if (open) firstLinkRef.current?.focus();

    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        if (docPanel) { setDocPanel(null); return; }
        setActiveMenu(null);
        setOpen(false);
      }
      if (docPanel?.items?.length > 1) {
        if (e.key === "ArrowLeft")  goToPrevDoc();
        if (e.key === "ArrowRight") goToNextDoc();
      }
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prev;
      buttonRef.current?.focus();
    };
  }, [open, docPanel]);

  const closeAll = () => {
    setActiveMenu(null);
    setOpen(false);
    setDocPanel(null);
  };

  const pick = (category) => {
    onPickCategory?.(category);
    closeAll();
  };
  

  return (
    <>
      {/* Button */}
      <div className={`hamburger-cell ${open ? "is-open" : ""}`}>
        <button
          className={`hamburger ${open ? "is-open" : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="site-vertical-nav"
          onClick={() => setOpen(o => !o)}
          ref={buttonRef}
        >
          <span className="hamburger-text">{open ? "Close" : "Profile"}</span>
        </button>
      </div>

      {/* Backdrop for menu OR doc viewer */}
      <div
        className={`backdrop ${(open || docPanel) ? "is-open" : ""}`}
        aria-hidden={!(open || docPanel)}
        onClick={closeAll}
      />

      {/* LEFT COLUMN */}
      <ul
        id="site-vertical-nav"
        className={`grid-nav nav-background ${open ? "is-open" : ""}`}
        aria-label="Primary"
        aria-hidden={!open}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <li className="nav-projects" onMouseEnter={() => setActiveMenu("projects")}>
          <button className="nav-btn" ref={firstLinkRef} type="button" onClick={() => setActiveMenu("projects")}>
            Projects
          </button>
        </li>

        <li className="nav-qualifications" onMouseEnter={() => setActiveMenu("qualifications")}>
          <a className="nav-btn" href="#qualifications" onClick={closeAll}>
            Qualifications
          </a>
        </li>

        <li className="nav-contacts" onMouseEnter={() => setActiveMenu("contacts")}>
          <a className="nav-btn" href="#contacts" onClick={closeAll}>
            Contacts
          </a>
        </li>
      </ul>

      {/* RIGHT COLUMN bg + Projects submenu */}
      <div
        className={`projects-col-bg ${open && activeMenu === "projects" ? "is-open" : ""}`}
        aria-hidden={!(open && activeMenu === "projects")}
        onMouseEnter={() => setActiveMenu("projects")}
        onMouseLeave={() => setActiveMenu(null)}
      />
      <SubProjectsNav
        isOpen={open && activeMenu === "projects"}
        onHoverIn={() => setActiveMenu("projects")}
        onHoverOut={() => setActiveMenu(null)}
        onPick={pick}
      />

      {/* Qualifications submenu */}
      <SubQualificationsNav
        qualOpen={open && activeMenu === "qualifications"}
        onHoverIn={() => setActiveMenu("qualifications")}
        onHoverOut={() => setActiveMenu(null)}
        onPick={pick}
        onOpenDoc={openDocument}
        onOpenDocs={openDocuments}           // <-- pass list-opener
      />

      {/* === Document Viewer (liquid glass) === */}
      {docPanel && (
        <section className="doc-panel is-open" aria-label={`${docPanel.title} preview`}>
          <header className="doc-panel__header">
            <div className="doc-panel__titles">
              <h3 className="doc-panel__title">{docPanel.title}</h3>
              <p className="doc-panel__filename">
                {
                  docPanel.items?.[docPanel.index]?.name
                  ?? docPanel.items?.[docPanel.index]?.fileName
                }
              </p>
            </div>
            <button
              className="doc-panel__close"
              aria-label="Close document viewer"
              onClick={closeDocument}
              type="button"
            >
              ×
            </button>
          </header>

          <iframe
            className="doc-panel__frame"
            src={docPanel.items?.[docPanel.index]?.src}
            title={`${docPanel.title} ${docPanel.index + 1}`}
          />

          <div className="docnav">
            {docPanel.items?.length > 1 && (
              <button
                onClick={goToPrevDoc}
                className="docnav__arrow docnav__arrow--left"
                aria-label="Previous document"
              >
                &#8592;
              </button>
            )}

            <p className="docnav__pager">
              {docPanel.index + 1} / {docPanel.items?.length}
            </p>

            {docPanel.items?.length > 1 && (
              <button
                onClick={goToNextDoc}
                className="docnav__arrow docnav__arrow--right"
                aria-label="Next document"
              >
                &#8594;
              </button>
            )}
          </div>
        </section>
      )}
    </>
  );
}
