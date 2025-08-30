// components/nav/SubProject.jsx

import "./SubProjectsNav.css"

export default function SubProjectsNav({ isOpen, onHoverIn, onHoverOut, onPick }) {
  return (
    <>
      {/* background for col2 */}
      <div
        className={`projects-col-bg ${isOpen ? "is-open" : ""}`}
        aria-hidden={!isOpen}
        onMouseEnter={onHoverIn}
        onMouseLeave={onHoverOut}
      />

      {/* submenu list */}
      <ul
        className={`projects-col ${isOpen ? "is-open" : ""}`}
        aria-label="Project categories"
        aria-hidden={!isOpen}
        onMouseEnter={onHoverIn}
        onMouseLeave={onHoverOut}
      >
        <li className="proj-web">
          <button
            className="proj-btn"
            type="button"
            onClick={() => onPick("web")}
            aria-label="Web and mobile design"
          >
            WEB &amp; MOBILE<br />DESIGN
          </button>
        </li>

        <li className="proj-mag">
          <button
            className="proj-btn"
            type="button"
            onClick={() => onPick("magazine")}
            aria-label="Magazine design"
          >
            MAGAZINE<br />DESIGN
          </button>
        </li>

        <li className="proj-arch">
          <button
            className="proj-btn"
            type="button"
            onClick={() => onPick("architectural")}
            aria-label="Architectural design"
          >
            ARCHITECTURAL<br />DESIGN
          </button>
        </li>
      </ul>
    </>
  );
}