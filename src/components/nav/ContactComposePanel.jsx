// components/nav/ContactComposePanel.jsx
import { useEffect, useRef, useState } from "react";
import "./ContactComposePanel.css";
import { sendPortfolioEmail } from "../../lib/email/sendEmail";

export default function ContactComposePanel({
  isOpen,
  to: toProp = "",
  defaultSubject = "",
  defaultBody = "",
  onClose,
}) {
  const [toValue, setToValue] = useState(toProp);
  const [subject, setSubject] = useState(defaultSubject);
  const [body, setBody] = useState(defaultBody);
  const [sending, setSending] = useState(false);          // <-- ADD THIS
  const subjRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    setToValue(toProp || "");
    setSubject(defaultSubject || "");
    setBody(defaultBody || "");
    setSending(false);
    requestAnimationFrame(() => subjRef.current?.focus());
  }, [isOpen, toProp, defaultSubject, defaultBody]);

  const handleKeyDown = (e) => {
    if (e.key === "Escape") onClose?.();
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (sending) return;
    const to = (toValue || "").trim();
    if (!to) return alert("Please enter a recipient email.");
    setSending(true);
    try {
      await sendPortfolioEmail({
        to,
        subject: subject || "",
        body: body || "",
        fromName: "Portfolio Compose Panel",
      });
      setSending(false);
      onClose?.();
      alert("✅ Sent!");
    } catch (err) {
      console.error("Email send failed:", err);
      setSending(false);
      // Fallback to Gmail compose in a new tab
      const su = encodeURIComponent(subject || "");
      const bo = encodeURIComponent(body || "");
      window.open(
        `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}&su=${su}&body=${bo}`,
        "_blank",
        "noopener"
      );
    }
  };

  return (
    <>
      <div
        className={`compose-panel-bg ${isOpen ? "is-open" : ""}`}
        aria-hidden={!isOpen}
        onClick={onClose}
      />
      <section
        className={`compose-panel ${isOpen ? "is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="compose-title"
        onKeyDown={handleKeyDown}
      >
        <header className="compose-header">
          <h3 id="compose-title">New message</h3>
          <button
            type="button"
            className="icon-btn close-btn"
            onClick={onClose}
            aria-label="Close compose panel"
            disabled={sending}
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
              value={toValue}
              onChange={(e) => setToValue(e.target.value)}
              autoComplete="email"
              inputMode="email"
              placeholder="name@example.com"
              disabled={sending}
              required
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
              disabled={sending}
            />
          </div>

          <div className="field field--body">
            <label htmlFor="compose-body">Message</label>
            <textarea
              id="compose-body"
              rows={6}
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder="Write your message…"
              disabled={sending}
            />
          </div>

          <div className="compose-actions">
            <button type="submit" className="send-btn" disabled={sending}>
              {sending ? "Sending…" : "Send"}
            </button>
            <button type="button" className="ghost-btn" onClick={onClose} disabled={sending}>
              Cancel
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
