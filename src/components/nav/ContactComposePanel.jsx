// components/nav/ContactComposePanel.jsx
import { useEffect, useRef, useState } from "react";
import "./ContactComposePanel.css";

export default function ContactComposePanel({
  isOpen,
  to = "",
  defaultSubject = "",
  defaultBody = "",
  onSend,      // optional: ({ to, subject, body }) => void
  onClose,     // required: () => void
}) {
  const [subject, setSubject] = useState(defaultSubject);
  const [body, setBody] = useState(defaultBody);
  const subjRef = useRef(null);
  const titleId = "compose-title";

  // Reset and focus when opened
  useEffect(() => {
    if (isOpen) {
      setSubject(defaultSubject || "");
      setBody(defaultBody || "");
      // focus after open transition tick
      requestAnimationFrame(() => subjRef.current?.focus());
    }
  }, [isOpen, defaultSubject, defaultBody]);

  const handleKeyDown = (e) => {
    if (e.key === "Escape") onClose?.();
  };

  const handleSend = (e) => {
    e.preventDefault();

    // Option A: open user's email app with a prefilled draft
    const href =
      `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = href;

    // Option B hook (analytics, toast, etc.)
    onSend?.({ to, subject, body });

    onClose?.();
  };

  return (
    <>
      {/* local background so panel reads clearly against your grid */}
      <div
        className={`compose-panel-bg ${isOpen ? "is-open" : ""}`}
        aria-hidden={!isOpen}
        onClick={onClose}
      />

      <section
        className={`compose-panel ${isOpen ? "is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onKeyDown={handleKeyDown}
      >
        <header className="compose-header">
          <h3 id={titleId}>New message</h3>
          <button
            type="button"
            className="icon-btn close-btn"
            onClick={onClose}
            aria-label="Close compose panel"
          >
            ×
          </button>
        </header>

        <form className="compose-form" onSubmit={handleSend}>
          <div className="field">
            <label htmlFor="compose-to">To</label>
            <input
              id="compose-to"
              type="email"
              value={to}
              readOnly
              aria-readonly="true"
            />
          </div>

          <div className="field">
            <label htmlFor="compose-subject">Subject</label>
            <input
              id="compose-subject"
              type="text"
              ref={subjRef}
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="(Optional) Subject"
            />
          </div>

          <div className="field">
            <label htmlFor="compose-body">Message</label>
            <textarea
              id="compose-body"
              rows={8}
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder="Write your message…"
            />
          </div>

          <div className="compose-actions">
            <button type="submit" className="send-btn">Send</button>
            <button type="button" className="ghost-btn" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
