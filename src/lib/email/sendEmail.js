// src/lib/email/sendEmail.js
import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY?.trim();

console.log("[EmailJS] PUBLIC_KEY =", PUBLIC_KEY);

let initialized = false;
function initEmailJS() {
  if (!initialized) {
    if (!PUBLIC_KEY) throw new Error("Missing EmailJS public key");
    emailjs.init({ publicKey: PUBLIC_KEY });
    initialized = true;
  }
}

export async function sendPortfolioEmail({
  to,
  subject,
  body,
  fromName = "Portfolio Visitor",
  replyTo = ""
}) {
  if (!SERVICE_ID || !TEMPLATE_ID) {
    throw new Error("EmailJS env vars missing (SERVICE_ID / TEMPLATE_ID).");
  }

  initEmailJS();

  const params = {
    to_email: to,
    subject,
    message: body,
    from_name: fromName,
    reply_to: replyTo || undefined
  };

  try {
    // public key already provided via init()
    const res = await emailjs.send(SERVICE_ID, TEMPLATE_ID, params);
    return res;
  } catch (err) {
    const msg = err?.text || err?.message || String(err);
    throw new Error(`EmailJS error: ${msg}`);
  }
}
