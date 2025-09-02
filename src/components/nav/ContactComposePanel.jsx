// components/nav/ContactComposePanel.jsx
import { useEffect, useRef, useState, useCallback } from "react";
import "./ContactComposePanel.css";
import { sendPortfolioEmail } from "../../lib/email/sendEmail";
import SendEmailNotice from "./SendEmailNotice"; // <-- the glassy popup

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactComposePanel({
  isOpen,
  to: toProp = "",
  defaultSubject = "",
  defaultBody = "",
  onClose,
}) {
  const [toValue, setToValue] = useState(toProp); // stays locked/readOnly
  const [visitorName, setVisitorName] = useState("");
  const [visitorEmail, setVisitorEmail] = useState("");
  const [subject, setSubject] = useState(defaultSubject);
  const [body, setBody] = useState(defaultBody);

  const [errors, setErrors] = useState({});      // <-- inline validation errors
  const [sending, setSending] = useState(false);
  const [notice, setNotice] = useState(null);    // <-- for SendEmailNotice popup

  const subjRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    setToValue(toProp || "");
    setVisitorName("");
    setVisitorEmail("");
    setSubject(defaultSubject || "");
    setBody(defaultBody || "");
    setErrors({});
    setSending(false);
    requestAnimationFrame(() => subjRef.current?.focus());
  }, [isOpen, toProp, defaultSubject, defaultBody]);

  const showNotice = useCallback((payload) => {
    setNotice({ open: true, ...payload });
  }, []);
  const closeNotice = useCallback(() => setNotice(null), []);

  const validate = useCallback(() => {
    const next = {};
    // no 'to' check (read-only)

    if (!visitorEmail.trim()) next.visitorEmail = "Your email is required.";
    else if (!EMAIL_RE.test(visitorEmail.trim()))
      next.visitorEmail = "Please enter a valid email address.";

    if (!body.trim()) next.body = "Message cannot be empty.";

    setErrors(next);
    if (Object.keys(next).length) {
      const firstId = next.visitorEmail ? "compose-from-email" : "compose-body";
      document.getElementById(firstId)?.focus();
      return false;
    }
    return true;
  }, [visitorEmail, body]);

  const handleKeyDown = (e) => {
    if (e.key === "Escape") onClose?.();
  };

  const handleClear = () => {
    // Keep 'To' as-is (locked)
    setVisitorName("");
    setVisitorEmail("");
    setSubject("");
    setBody("");
    setErrors({});
    subjRef.current?.focus();
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (sending) return;

    // client-side validation first
    if (!validate()) return;

    setSending(true);
    try {
      await sendPortfolioEmail({
        to: toValue.trim(),
        subject: subject || "",
        body: body || "",
        fromName: visitorName || "Portfolio Visitor",
        replyTo: visitorEmail.trim(),
      });

      setSending(false);
      showNotice({
        type: "success",
        title: "Message sent",
        message: "Thanks! Your message has been delivered.",
      });

      // Clear user-provided fields after success (keep To locked)
      setVisitorName("");
      setVisitorEmail("");
      setSubject("");
      setBody("");
    } catch (err) {
      console.error("Email send failed:", err);
      setSending(false);
      showNotice({
        type: "error",
        title: "Send failed",
        message: "Couldn't send right now. Please try again.",
      });
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

        <form className="compose-form" onSubmit={handleSend} noValidate>
          {/* To (locked) */}
          <div className="field">
            <label htmlFor="compose-to">To</label>
            <input
              id="compose-to"
              type="email"
              value={toValue}
              readOnly
              aria-readonly="true"
              aria-invalid={!!errors.to}
              aria-describedby="err-to"
            />
            {/* persistent error slot */}
            <p id="err-to" className={`field-error ${errors.to ? "is-visible" : ""}`}>
              {errors.to || "\u00A0"}
            </p>
          </div>

          {/* Your name + your email in one row (email required) */}
          <div className="field-row">
            <div className="field">
              <label htmlFor="compose-from-name">Your name (optional)</label>
              <input
                id="compose-from-name"
                type="text"
                value={visitorName}
                onChange={(e) => setVisitorName(e.target.value)}
                placeholder="Mona Kulis"
                disabled={sending}
              />
              {/* keep an empty slot so both columns stay aligned */}
              <p className="field-error">{'\u00A0'}</p>
            </div>

            <div className="field">
              <label htmlFor="compose-from-email">Your email</label>
              <input
                id="compose-from-email"
                type="email"
                value={visitorEmail}
                onChange={(e) => setVisitorEmail(e.target.value)}
                placeholder="you@example.com"
                disabled={sending}
                required
                aria-invalid={!!errors.visitorEmail}
                aria-describedby="err-vemail"
                autoComplete="email"
                inputMode="email"
              />
              <p id="err-vemail" className={`field-error ${errors.visitorEmail ? "is-visible" : ""}`}>
                {errors.visitorEmail || "\u00A0"}
              </p>
            </div>
          </div>

          {/* Subject (optional) */}
          <div className="field">
            <label htmlFor="compose-subject">Subject (optional)</label>
            <input
              id="compose-subject"
              type="text"
              ref={subjRef}
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Subject"
              disabled={sending}
            />
            <p className="field-error">{'\u00A0'}</p>
          </div>

          {/* Message (required) */}
          <div className="field field--body">
            <label htmlFor="compose-body">Message</label>
            <textarea
              id="compose-body"
              rows={6}
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder="Write your message…"
              disabled={sending}
              required
              aria-invalid={!!errors.body}
              aria-describedby="err-body"
            />
            <p id="err-body" className={`field-error ${errors.body ? "is-visible" : ""}`}>
              {errors.body || "\u00A0"}
            </p>
          </div>










          <div className="compose-actions">
            <button type="submit" className="send-btn" disabled={sending}>
              {sending ? "Sending…" : "Send"}
            </button>
            <button
              type="button"
              className="ghost-btn"
              onClick={handleClear}
              disabled={sending}
            >
              Clear
            </button>
          </div>
        </form>
      </section>

      {/* Center glassy popup for success/error (separate component & CSS) */}
      <SendEmailNotice
        open={!!notice?.open}
        type={notice?.type}
        title={notice?.title}
        message={notice?.message}
        onRequestClose={closeNotice}
        autoCloseMs={notice?.type === "success" ? 3500 : 0}
      />
    </>
  );
}
