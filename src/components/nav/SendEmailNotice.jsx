// components/nav/SendEmailNotice.jsx
import { useEffect, useRef, useState } from "react";
import "./SendEmailNotice.css";

/**
 * Props:
 *  - open: boolean
 *  - type: 'success' | 'error'
 *  - title: string
 *  - message: string
 *  - onRequestClose: () => void        // called AFTER fade-out completes
 *  - autoCloseMs?: number              // optional; e.g. 3500 to auto-dismiss
 */
export default function SendEmailNotice({
  open = false,
  type = "success",
  title = "",
  message = "",
  onRequestClose,
  autoCloseMs = 0,
}) {
  // Keep mounted across fade-out
  const [render, setRender] = useState(open);
  const [shown, setShown] = useState(open);

  // Keep last content so it doesn't disappear during fade-out
  const [content, setContent] = useState({ type, title, message });

  useEffect(() => {
    if (open) {
      setContent({ type, title, message });      // update content on open
      setRender(true);                           // mount
      requestAnimationFrame(() => setShown(true)); // fade in
    } else {
      // start fade out
      setShown(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, type, title, message]);

  // Optional auto-close
  useEffect(() => {
    if (!open || !autoCloseMs) return;
    const t = setTimeout(() => setShown(false), autoCloseMs);
    return () => clearTimeout(t);
  }, [open, autoCloseMs]);

  const handleTransitionEnd = (e) => {
    // only act when the overlay finished transitioning
    if (e.target !== e.currentTarget) return;
    if (!shown) {
      setRender(false);           // unmount after fade-out
      onRequestClose?.();         // tell parent it's closed
    }
  };

  if (!render) return null;

  return (
    <div
      className={`semail-overlay ${shown ? "is-open" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-live="polite"
      onTransitionEnd={handleTransitionEnd}
    >
      <div
        className={`semail-card ${content.type === "success" ? "is-success" : "is-error"}`}
        role="document"
      >
        <button
          type="button"
          className="icon-btn semail-close"
          aria-label="Close"
          onClick={() => setShown(false)}
        >
          ×
        </button>
        <h4 className="semail-title">{content.title}</h4>
        <p className="semail-message">{content.message}</p>
      </div>
    </div>
  );
}
