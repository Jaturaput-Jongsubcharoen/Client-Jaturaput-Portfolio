// components/nav/SubProject.jsx

import "./SubQualificationsNav.css"

export default function SubQualificationsNav({ isOpen, onHoverIn, onHoverOut, onPick }) {
  return (
    <>
      {/* background for col2 */}
      <div
        className={`qualifications-col-bg ${isOpen ? "is-open" : ""}`}
        aria-hidden={!isOpen}
        onMouseEnter={onHoverIn}
        onMouseLeave={onHoverOut}
      />

      {/* submenu list */}
      <ul
        className={`qualifications-col ${isOpen ? "is-open" : ""}`}
        aria-label="Project categories"
        aria-hidden={!isOpen}
        onMouseEnter={onHoverIn}
        onMouseLeave={onHoverOut}
      >
        <li className="qual-cer">
          <button
            className="qual-btn"
            type="button"
            onClick={() => onPick("web")}
            aria-label="Web and mobile design"
          >
            CERTIFICATE
          </button>
        </li>

        <li className="qual-res">
          <button
            className="qual-btn"
            type="button"
            onClick={() => onPick("magazine")}
            aria-label="Magazine design"
          >
            RÉSUMÉ
          </button>
        </li>

        <li className="qual-tra">
          <button
            className="qual-btn"
            type="button"
            onClick={() => onPick("architectural")}
            aria-label="Architectural design"
          >
            TRANSCRIPT
          </button>
        </li>
      </ul>
    </>
  );
}