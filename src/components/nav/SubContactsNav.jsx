// components/nav/SubContactsNav.jsx
import "./SubContactsNav.css";
import emails from "../../data/JaturaputEmails";

export default function SubContactsNav({
  contactsOpen, onHoverIn, onHoverOut, onCompose
}) {
  const handleCompose = (email) => {
    document.activeElement?.blur();   // avoid aria-hidden focus warning
    onCompose?.(email);
    requestAnimationFrame(() => onHoverOut?.());
  };

  return (
    <>
      <div
        className={`contacts-col-bg ${contactsOpen ? "is-open" : ""}`}
        aria-hidden={!contactsOpen}
        onMouseEnter={onHoverIn}
        onMouseLeave={onHoverOut}
      />
      <ul
        className={`contacts-col ${contactsOpen ? "is-open" : ""}`}
        aria-label="Contact options"
        aria-hidden={!contactsOpen}
        onMouseEnter={onHoverIn}
        onMouseLeave={onHoverOut}
      >
        {emails.map(({ id, label, buttonLines, email }, i) => (
          <li key={id} className={`contact-${id}`} style={{ gridRow: i === 0 ? 3 : 4 }}>
            <button
              type="button"
              className="contact-btn"
              onClick={() => handleCompose(email)}
              aria-label={`Compose to ${label}`}
            >
              {buttonLines[0]}<br />{buttonLines[1]}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
